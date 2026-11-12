"""Base de companhias abertas: cadastro, tickers e todos os documentos entregues à CVM (IPE), com resumos.

Gera arquivos estáticos em site/data/cias/ (não versionados; o workflow refaz a cada publicação):
  index.json            companhias + contagens + lista de meses
  emp/{codigo}.json     todos os documentos de uma companhia (últimos 5 anos)
  mes/{AAAA-MM}.json    todos os documentos entregues no mês, de todas as companhias

Fontes:
  - dados abertos da CVM: cadastro (cad_cia_aberta), FCA (tickers, segmento, site) e IPE (documentos).
    O IPE atrasa alguns dias.
  - consulta pública do Empresas.NET para os últimos dias (tempo real, com horário de entrega).

Resumos: o texto dos documentos mais relevantes é extraído do PDF (comando `textos`) e fica em
site/data/cvm_fila.json até a rotina diária do Claude escrever o resumo em site/data/cvm_resumos.json.
Enquanto o resumo não chega, o portal mostra um trecho do documento.

Uso:
  python scripts/cias.py textos   # baixa os PDFs pendentes e enfileira o texto
  python scripts/cias.py build    # gera site/data/cias/
"""
from __future__ import annotations

import argparse
import csv
import http.cookiejar
import io
import json
import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request
import zipfile
from collections import Counter, defaultdict
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "site" / "data"
OUT = DATA / "cias"
RESUMOS = DATA / "cvm_resumos.json.gz"  # compactado: o GitHub recusa o JSON puro desse tamanho
FILA = DATA / "cvm_fila.json"
FILA_HIST = DATA / "cvm_fila_hist.json.gz"  # histórico (backfill), compactado: o GitHub recusa o JSON puro desse tamanho
BRT = timezone(timedelta(hours=-3))

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36"
DADOS = "https://dados.cvm.gov.br/dados/CIA_ABERTA"
ENET = "https://www.rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx"
DOWNLOAD = ("https://www.rad.cvm.gov.br/ENET/frmDownloadDocumento.aspx?Tela=ext&descTipo=IPE&CodigoInstituicao=1"
            "&numProtocolo={p}&numSequencia={s}&numVersao={v}")
REALTIME_DAYS = 10
YEARS = 5  # anos de documentos na base (o corrente e os quatro anteriores)

# Categorias que ganham resumo (texto extraído do PDF e resumido pela rotina).
SUMMARY_CATS = {
    "Fato Relevante", "Comunicado ao Mercado", "Aviso aos Acionistas",
    "Comunicação sobre Transação entre Partes Relacionadas", "Comunicação sobre demandas societárias",
    "Acordo de Acionistas", "Informações de Companhias em Recuperação Judicial ou Extrajudicial",
}
# Release de resultados (press-release do trimestre) das listadas também ganha resumo, com mais texto: os números
# principais costumam vir nas primeiras páginas.
RELEASE = ("Dados Econômico-Financeiros", "Press-release")
RELEASE_CHARS = 14000
SUMMARY_LOOKBACK_DAYS = 7
MAX_PDFS_PER_RUN = 60
TEXT_CHARS = 6000
PDF_PAGES = 15  # páginas lidas de cada PDF (a leitura para antes, quando já juntou texto suficiente)
OCR_PAGES = 6  # páginas lidas por OCR quando o PDF não tem texto de verdade
OCR_SECONDS = 240  # teto de tempo do OCR por execução: o que sobrar fica para a próxima, sem atrasar a coleta
TEXT_VERSION = 2  # versão do extrator: textos da fila feitos com uma versão anterior são refeitos uma vez
REDO_PER_RUN = 20  # quantos textos antigos refazer por execução
NOPDF_TRIES = 4  # quantas vezes baixar de novo um documento que a CVM devolveu sem o PDF
# Cópia própria dos PDFs recentes, publicada com o site em pdf/: o link do portal abre a cópia e não depende da CVM,
# que em novembro de 2026 passou a falhar no download (devolve a página "ENET Download de Documento" no lugar do
# arquivo). Fatos relevantes de até 6 MB e os demais documentos com resumo de até 1,5 MB, dos últimos PDF_DAYS dias.
PDF_DIR = ROOT / "site" / "pdf"
PDF_INDEX = PDF_DIR / "index.json"
PDF_DAYS = 7
PDF_TOTAL = 80_000_000  # teto do conjunto publicado: acima disso saem as cópias mais antigas (fatos relevantes por último)
PDF_MAX = {"Fato Relevante": 6_000_000}
PDF_MAX_OTHER = 1_500_000
PDF_BACKFILL = 30  # cópias de documentos já lidos antes (sem cópia) baixadas por execução
TEXT_MINUTES = 8  # teto do download dos textos na execução de hora em hora: o resto fica para a próxima
DOWN_STOP = 3  # downloads seguidos sem resposta da CVM (tempo esgotado, conexão recusada) que encerram a rodada
# página de aviso legal: o título vem no alto da página ("Aviso legal", "Disclaimer"...)
BOILERPLATE = re.compile(r"aviso legal|disclaimer|declarações prospectivas|declarações sobre o futuro|"
                         r"forward[- ]looking statements|informações prospectivas", re.IGNORECASE)
TEMAS = ["M&A", "Mercado de capitais", "Dívida", "Proventos", "Resultados", "Governança", "Assembleia",
         "Operacional", "Regulatório e jurídico", "Reestruturação", "Outros"]


def log(msg: str) -> None:
    print(f"[{datetime.now(BRT):%H:%M:%S}] {msg}", flush=True)


def load_json(path: Path, default):
    try:
        if path.suffix == ".gz":
            import gzip
            return json.loads(gzip.decompress(path.read_bytes()).decode("utf-8"))
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:  # noqa: BLE001
        return default


def save_json(path: Path, data, compact: bool = False) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.suffix == ".gz":
        import gzip
        raw = json.dumps(data, ensure_ascii=False, separators=(",", ":"), sort_keys=True).encode("utf-8")
        path.write_bytes(gzip.compress(raw, mtime=0))
        return
    if compact:
        path.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    else:
        path.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")


def get(url: str, timeout: int = 120, tries: int = 3) -> bytes:
    last = None
    for attempt in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                return resp.read()
        except Exception as exc:  # noqa: BLE001
            last = exc
            if attempt + 1 < tries:
                time.sleep(3 * (attempt + 1))
    raise last  # type: ignore[misc]


def read_csv(text: str) -> list[dict]:
    return list(csv.DictReader(io.StringIO(text), delimiter=";"))


def zip_csvs(raw: bytes) -> dict[str, list[dict]]:
    with zipfile.ZipFile(io.BytesIO(raw)) as z:
        return {n: read_csv(z.read(n).decode("latin-1")) for n in z.namelist() if n.lower().endswith(".csv")}


def code(v: str) -> str:
    """Código CVM canônico: só dígitos, sem zeros à esquerda (o IPE usa '21091', o FCA '021091', o ENET '02109-1')."""
    d = re.sub(r"\D", "", v or "")
    return str(int(d)) if d else ""


def clean(t: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", t or "")).strip()


def tidy_name(n: str) -> str:
    n = re.sub(r"\s+", " ", (n or "").strip())
    return n if re.search(r"\w", n) else ""


# ---------------------------------------------------------------- fontes

def fetch_cadastro() -> list[dict]:
    return read_csv(get(f"{DADOS}/CAD/DADOS/cad_cia_aberta.csv").decode("latin-1"))


def fetch_fca(year: int) -> dict[str, list[dict]]:
    for y in (year, year - 1):
        try:
            return zip_csvs(get(f"{DADOS}/DOC/FCA/DADOS/fca_cia_aberta_{y}.zip"))
        except Exception as exc:  # noqa: BLE001
            log(f"FCA {y}: {exc}")
    return {}


def fetch_ipe(year: int) -> list[dict]:
    base = f"{DADOS}/DOC/IPE/DADOS/ipe_cia_aberta_{year}"
    try:
        files = zip_csvs(get(base + ".zip"))
        return next(iter(files.values()), [])
    except Exception:  # noqa: BLE001
        return read_csv(get(base + ".csv").decode("latin-1"))


def ipe_doc(r: dict) -> dict | None:
    link = r.get("Link_Download", "")
    m = re.search(r"numProtocolo=(\d+)", link)
    if not m:
        return None
    return {
        "id": m[1], "k": code(r.get("Codigo_CVM", "")), "nome": tidy_name(r.get("Nome_Companhia", "")),
        "cnpj": r.get("CNPJ_Companhia", ""),
        "d": (r.get("Data_Entrega") or "")[:10], "h": "",
        "c": (r.get("Categoria") or "").strip(), "t": (r.get("Tipo") or "").strip(),
        "e": (r.get("Especie") or "").strip(), "s": (r.get("Assunto") or "").strip(),
        "r": (r.get("Data_Referencia") or "")[:10], "v": int(r.get("Versao") or 1), "u": link,
    }


def fetch_realtime(start: datetime, end: datetime) -> list[dict]:
    """Todos os documentos IPE entregues entre start e end pela consulta pública do Empresas.NET."""
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))
    opener.open(urllib.request.Request(ENET, headers={"User-Agent": UA}), timeout=40).read()
    payload = {"dataDe": f"{start:%d/%m/%Y}", "dataAte": f"{end:%d/%m/%Y}", "empresa": "", "setorAtividade": "-1",
               "categoriaEmissor": "-1", "situacaoEmissor": "-1", "tipoParticipante": "-1", "dataReferencia": "",
               "categoria": "IPE_-1_-1_-1", "periodo": "2", "horaIni": "", "horaFim": "", "palavraChave": "",
               "ultimaDtRef": "false", "tipoEmpresa": "0", "token": "", "versaoCaptcha": ""}
    req = urllib.request.Request(ENET + "/ListarDocumentos", data=json.dumps(payload).encode(), headers={
        "User-Agent": UA, "Content-Type": "application/json; charset=utf-8", "X-Requested-With": "XMLHttpRequest",
        "Referer": ENET, "Origin": "https://www.rad.cvm.gov.br"})
    resp = json.loads(opener.open(req, timeout=120).read().decode("utf-8", "replace"))["d"]
    if resp.get("temErro") or resp.get("expirouSessao"):
        raise RuntimeError(resp.get("msgErro") or "sessão expirada")
    out = []
    for rec in (resp.get("dados") or "").split("&*"):
        f = rec.split("$&")
        if len(f) < 11:
            continue
        dl = re.search(r"OpenDownloadDocumentos\('(\d+)','(\d+)','(\d+)'", f[10])
        when = re.search(r"(\d{2})/(\d{2})/(\d{4})\s+(\d{2}:\d{2})", clean(f[6]))
        if not dl or not when:
            continue
        seq, ver, prot = dl.groups()
        ref = re.search(r"(\d{2})/(\d{2})/(\d{4})", clean(f[5]))
        inner = re.search(r"<spanOrder>(.*?)</spanOrder>(.*)", f[4], re.S)
        assunto = clean(f[11]) if len(f) > 11 else ""
        especie = ""
        if inner:
            assunto = assunto or clean(inner[1]).strip(" -")
            especie = clean(inner[2]).strip(" -")
        out.append({
            "id": prot, "k": code(f[0]), "nome": tidy_name(clean(f[1])), "cnpj": "",
            "d": f"{when[3]}-{when[2]}-{when[1]}", "h": "" if when[4] == "00:00" else when[4],
            "c": clean(f[2]), "t": clean(f[3]).strip(" -"), "e": especie, "s": assunto,
            "r": f"{ref[3]}-{ref[2]}-{ref[1]}" if ref else "", "v": int(ver or 1),
            "u": DOWNLOAD.format(p=prot, s=seq, v=ver),
        })
    return out


# ---------------------------------------------------------------- base

def collect_docs(now: datetime) -> tuple[list[dict], dict]:
    status = {}
    docs: dict[str, dict] = {}
    for year in range(now.year - YEARS + 1, now.year + 1):
        try:
            rows = fetch_ipe(year)
            for r in rows:
                d = ipe_doc(r)
                if d:
                    docs[d["id"]] = d
            status[f"ipe{year}"] = len(rows)
        except Exception as exc:  # noqa: BLE001
            status[f"ipe{year}"] = f"erro: {exc}"
            if year == now.year:
                raise
    open_through = max((d["d"] for d in docs.values()), default="")
    canon = {c.lower(): c for c in {d["c"] for d in docs.values()}}
    try:
        rt = fetch_realtime(now - timedelta(days=REALTIME_DAYS), now)
        for d in rt:
            low = d["c"].lower()
            d["c"] = canon.get(low) or next((v for k, v in canon.items() if k.startswith(low)), d["c"])
            old = docs.get(d["id"])
            if old:  # mesmo documento nos dados abertos: fica com os campos deles e ganha o horário
                old["h"] = d["h"] or old["h"]
            else:
                docs[d["id"]] = d
        status["tempo_real"] = len(rt)
    except Exception as exc:  # noqa: BLE001
        status["tempo_real"] = f"erro: {exc}"
    status["dados_abertos_ate"] = open_through

    # Reapresentações: fica só a versão mais recente de cada documento.
    best: dict[tuple, dict] = {}
    for d in docs.values():
        key = (d["k"], d["c"], d["t"], d["e"], d["s"], d["r"])
        cur = best.get(key)
        if not cur or (d["v"], d["d"], d["h"], d["id"]) > (cur["v"], cur["d"], cur["h"], cur["id"]):
            best[key] = d
    return sorted(best.values(), key=lambda d: (d["d"], d["h"], d["id"]), reverse=True), status


def build_companies(cad: list[dict], fca: dict[str, list[dict]], docs: list[dict], now: datetime) -> list[dict]:
    geral = {}
    tickers: dict[str, list[str]] = defaultdict(list)
    segmento: dict[str, str] = {}
    for name, rows in fca.items():
        if "_geral_" in name:
            for r in rows:
                geral[r["CNPJ_Companhia"]] = r
        elif "valor_mobiliario" in name:
            for r in rows:
                tk = (r.get("Codigo_Negociacao") or "").strip().upper()
                if r.get("Data_Fim_Negociacao") or not re.fullmatch(r"[A-Z0-9]{4}\d{1,2}[A-Z]?", tk):
                    continue
                if tk not in tickers[r["CNPJ_Companhia"]]:
                    tickers[r["CNPJ_Companhia"]].append(tk)
                if r.get("Segmento") and r.get("Mercado") == "Bolsa":
                    segmento[r["CNPJ_Companhia"]] = r["Segmento"].strip()

    year_ago = (now - timedelta(days=365)).strftime("%Y-%m-%d")
    by_k: dict[str, list[dict]] = defaultdict(list)
    for d in docs:
        by_k[d["k"]].append(d)

    out, seen = [], set()
    for r in cad:
        k = code(r.get("CD_CVM", ""))
        if not k or k in seen:
            continue
        mine = by_k.get(k, [])
        if r.get("SIT") != "ATIVO" and not mine:
            continue
        seen.add(k)
        g = geral.get(r["CNPJ_CIA"], {})
        recent = [d for d in mine if d["d"] >= year_ago]
        out.append({
            "k": k, "n": tidy_name(r.get("DENOM_SOCIAL")), "nc": tidy_name(r.get("DENOM_COMERC")),
            "cnpj": r.get("CNPJ_CIA", ""), "st": (r.get("SETOR_ATIV") or "").strip(),
            "at": (g.get("Descricao_Atividade") or "").strip(), "uf": r.get("UF", ""), "mun": (r.get("MUN") or "").title(),
            "sit": r.get("SIT", ""), "se": (r.get("SIT_EMISSOR") or "").title(), "cat": r.get("CATEG_REG", ""),
            "ctl": (r.get("CONTROLE_ACIONARIO") or "").title(), "aud": tidy_name(r.get("AUDITOR")),
            "dri": tidy_name(r.get("RESP")) if (r.get("TP_RESP") or "").upper().startswith("DIRETOR DE RELA") else "",
            "web": (g.get("Pagina_Web") or "").strip(),
            "tk": tickers.get(r["CNPJ_CIA"], [])[:6], "sg": segmento.get(r["CNPJ_CIA"], ""),
            "nd": len(mine), "last": mine[0]["d"] if mine else "",
            "fr12": sum(1 for d in recent if d["c"] == "Fato Relevante"),
            "n12": len(recent),
        })
    # Companhias que entregaram documentos mas não estão no cadastro (raro: cadastro desatualizado).
    for k, mine in by_k.items():
        if k not in seen and k:
            out.append({"k": k, "n": mine[0]["nome"], "nc": "", "cnpj": mine[0].get("cnpj", ""), "st": "", "at": "",
                        "uf": "", "mun": "", "sit": "", "se": "", "cat": "", "ctl": "", "aud": "", "dri": "", "web": "",
                        "tk": [], "sg": "", "nd": len(mine), "last": mine[0]["d"],
                        "fr12": sum(1 for d in mine if d["c"] == "Fato Relevante" and d["d"] >= year_ago),
                        "n12": sum(1 for d in mine if d["d"] >= year_ago)})
    out.sort(key=lambda c: (-(c["n12"] > 0), c["nc"] or c["n"]))
    return out


def excerpt(text: str, n: int = 420) -> str:
    """Trecho que mostra o conteúdo: começa na frase que apresenta a companhia ('A XYZ S.A. ("Companhia")…'),
    pulando cabeçalho, endereço e data."""
    t = re.sub(r"\s+", " ", text or "").strip()
    m = re.search(r"\(\s*[“\"]", t[:2500])
    if m:
        head = t[max(0, m.start() - 160):m.start()]
        parts = [p for p in re.split(r"(?:\b\d{4},?|[;:–—|•])\s+", head) if p.strip()]
        last = parts[-1] if parts else ""
        art = list(re.finditer(r"\b[AO]S?\s+(?=[A-ZÀ-Ý0-9])", last))  # "… COMUNICADO AO MERCADO A DEXCO S.A. ("
        if art:
            last = last[art[-1].start():]
        start = m.start() - len(last)
        t = t[max(0, start):].lstrip(" ,.-–")
    return (t[:n].rsplit(" ", 1)[0] + "…") if len(t) > n else t


def cmd_build(args) -> None:
    now = datetime.now(BRT).replace(tzinfo=None)
    docs, status = collect_docs(now)
    log(f"Documentos: {len(docs)} · {status}")
    cad = fetch_cadastro()
    fca = fetch_fca(now.year)
    companies = build_companies(cad, fca, docs, now)
    names = {c["k"]: c["nc"] or c["n"] for c in companies}
    log(f"Companhias: {len(companies)}")

    resumos = load_json(RESUMOS, {})
    fila = {**load_json(FILA_HIST, {}), **load_json(FILA, {})}
    for d in docs:
        sm = resumos.get(d["id"])
        if sm:
            d["sm"] = {k: sm[k] for k in ("resumo", "pontos", "tema") if sm.get(k)}
        elif fila.get(d["id"], {}).get("texto"):
            d["tr"] = excerpt(fila[d["id"]]["texto"])
        d.pop("cnpj", None)
        # o link de download é montado no navegador a partir do protocolo (id), da sequência e da versão
        seq = re.search(r"numSequencia=(\d+)", d.get("u", ""))
        ver = re.search(r"numVersao=(\d+)", d.get("u", ""))
        if seq:
            d["q"] = f"{seq[1]}.{ver[1] if ver else 1}"
            d.pop("u", None)
        d.pop("v", None)

    if OUT.exists():
        for p in list(OUT.glob("emp/*.json")) + list(OUT.glob("mes/*.json")):
            p.unlink()
    by_k: dict[str, list[dict]] = defaultdict(list)
    by_m: dict[str, list[dict]] = defaultdict(list)
    for d in docs:
        nome = d.pop("nome", "")
        by_k[d["k"]].append({k: v for k, v in d.items() if k != "k" and v != ""})
        by_m[d["d"][:7]].append({**{k: v for k, v in d.items() if v != ""}, "n": names.get(d["k"], nome)})
    for k, lst in by_k.items():
        save_json(OUT / "emp" / f"{k}.json", lst, compact=True)
    for m, lst in by_m.items():
        save_json(OUT / "mes" / f"{m}.json", lst, compact=True)

    cats = Counter(d["c"] for d in docs)
    save_json(OUT / "index.json", {
        "generated_at": datetime.now(BRT).isoformat(timespec="minutes"),
        "status": status,
        "months": sorted(by_m, reverse=True),
        "cats": cats.most_common(),
        "temas": TEMAS,
        "summary_cats": sorted(SUMMARY_CATS),
        "companies": companies,
    }, compact=True)
    log(f"Gravado: {len(by_k)} companhias com documentos, {len(by_m)} meses.")


# ---------------------------------------------------------------- textos para resumo

def pdf_text(raw: bytes) -> str:
    """Texto das primeiras páginas do PDF. Apresentações e relatórios abrem com capa, índice e aviso legal: as
    páginas de aviso legal ficam de fora e a leitura segue até juntar texto suficiente (no máximo PDF_PAGES)."""
    import pypdf
    reader = pypdf.PdfReader(io.BytesIO(raw))
    parts: list[str] = []
    for page in reader.pages[:PDF_PAGES]:
        t = page.extract_text() or ""
        if BOILERPLATE.search(t[:200]) and len(reader.pages) > 1:
            continue
        parts.append(t)
        if sum(len(p) for p in parts) > TEXT_CHARS * 1.5:
            break
    return re.sub(r"[ \t]+", " ", "\n".join(parts)).strip()


def legible(texto: str) -> bool:
    """False quando o PDF não tem texto de verdade: só códigos de glifo (fonte sem mapa de caracteres, que o pypdf
    devolve como "/12 /3 /15"), linhas "RGB: ..." de apresentação feita com imagens, ou quase nenhuma letra."""
    s = (texto or "").strip()
    if len(s) < 120:
        return False
    toks = s.split()
    codes = sum(1 for w in toks if re.fullmatch(r"/\d+|□|RGB:?", w)) / len(toks)
    letters = sum(c.isalpha() for c in s) / len(s)
    return codes < 0.2 and letters >= 0.25


def ocr_text(raw: bytes, pages: int = OCR_PAGES) -> str:
    """Lê o PDF por OCR em português (pdftoppm + tesseract): para apresentações em imagem e fontes sem mapa."""
    with tempfile.TemporaryDirectory() as tmp:
        pdf = Path(tmp) / "doc.pdf"
        pdf.write_bytes(raw)
        subprocess.run(["pdftoppm", "-r", "150", "-gray", "-png", "-f", "1", "-l", str(pages), str(pdf), str(Path(tmp) / "p")],
                       check=True, timeout=90, capture_output=True)
        parts: list[str] = []
        for png in sorted(Path(tmp).glob("p-*.png")):
            out = subprocess.run(["tesseract", str(png), "-", "-l", "por+eng"], capture_output=True, text=True, timeout=60,
                                 check=False)
            t = out.stdout or ""
            if BOILERPLATE.search(t[:200]):
                continue
            parts.append(t)
            if sum(len(p) for p in parts) > TEXT_CHARS * 1.5:
                break
    return re.sub(r"[ \t]+", " ", "\n".join(parts)).strip()


def summary_universe(now: datetime) -> tuple[set[str], set[str]]:
    """(companhias listadas na B3, companhias abertas ativas): só elas ganham resumo."""
    active = {code(r["CD_CVM"]) for r in fetch_cadastro() if r.get("SIT") == "ATIVO"}
    fca = fetch_fca(now.year)
    cnpj_code = {r["CNPJ_Companhia"]: code(r.get("Codigo_CVM", ""))
                 for name, rows in fca.items() if "_geral_" in name for r in rows}
    listed = {cnpj_code.get(r["CNPJ_Companhia"], "") for name, rows in fca.items() if "valor_mobiliario" in name
              for r in rows if r.get("Codigo_Negociacao") and not r.get("Data_Fim_Negociacao")}
    listed.discard("")
    return listed, active


def is_release(d: dict) -> bool:
    return (d.get("c"), d.get("t")) == RELEASE


def wants_summary(d: dict, listed: set[str], active: set[str]) -> bool:
    return (d["k"] in listed and (d["c"] in SUMMARY_CATS or is_release(d))) or (d["c"] == "Fato Relevante" and d["k"] in active)


def network_error(exc: BaseException) -> bool:
    """A CVM não respondeu (tempo esgotado, conexão recusada), o que é diferente de um documento com erro (404, PDF ruim)."""
    if isinstance(exc, urllib.error.HTTPError):
        return False
    return isinstance(exc, (urllib.error.URLError, TimeoutError, ConnectionError))


def unpack_pdf(raw: bytes) -> tuple[bytes | None, str]:
    """O PDF dentro do que a CVM devolveu, e o que veio. A CVM às vezes entrega o arquivo dentro de um .zip, e às
    vezes devolve uma página HTML (documento indisponível ou ainda sendo processado) em vez do arquivo."""
    if raw[:5] == b"%PDF-":
        return raw, "pdf"
    if raw[:4] == b"PK\x03\x04":
        try:
            with zipfile.ZipFile(io.BytesIO(raw)) as z:
                pdfs = [n for n in z.namelist() if n.lower().endswith(".pdf")]
                if pdfs:
                    return z.read(pdfs[0]), f"zip ({', '.join(z.namelist())[:120]})"
                return None, f"zip sem PDF ({', '.join(z.namelist())[:120]})"
        except zipfile.BadZipFile:
            return None, "zip inválido"
    head = raw[:600].decode("latin-1", "replace")
    if "<html" in head.lower() or "<!doctype" in head.lower():
        title = re.search(r"<title>(.*?)</title>", head, re.I | re.S)
        body = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", raw[:4000].decode("utf-8", "replace"))).strip()
        return None, f"HTML ({(title[1].strip() if title else '')[:60]}): {body[:160]}"
    return None, f"{len(raw)} bytes, começa com {raw[:40]!r}"


_pdf_index: dict | None = None
KEEP_PDFS = False


def pdf_index() -> dict:
    global _pdf_index
    if _pdf_index is None:
        _pdf_index = load_json(PDF_INDEX, {})
    return _pdf_index


def keep_pdf(d: dict, pdf: bytes) -> bool:
    """Guarda a cópia do PDF em site/pdf, se o documento for recente e do tipo e tamanho que valem a cópia."""
    if not KEEP_PDFS or not d.get("id"):
        return False
    limit = PDF_MAX.get(d.get("c", ""), PDF_MAX_OTHER if d.get("c") in SUMMARY_CATS or is_release(d) else 0)
    cutoff = (datetime.now(BRT) - timedelta(days=PDF_DAYS)).strftime("%Y-%m-%d")
    if len(pdf) > limit or d.get("d", "") < cutoff:
        return False
    PDF_DIR.mkdir(parents=True, exist_ok=True)
    (PDF_DIR / f"{d['id']}.pdf").write_bytes(pdf)
    pdf_index()[str(d["id"])] = {"d": d.get("d", ""), "c": d.get("c", ""), "b": len(pdf)}
    return True


def save_pdfs(candidates: list[dict], deadline: float) -> None:
    """Cópias que faltam (documentos lidos antes de haver a cópia) e limpeza das velhas; grava o índice."""
    idx = pdf_index()
    cutoff = (datetime.now(BRT) - timedelta(days=PDF_DAYS)).strftime("%Y-%m-%d")
    want = [d for d in candidates if d.get("u") and str(d.get("id")) not in idx and d.get("d", "") >= cutoff
            and (d.get("c") in PDF_MAX or d.get("c") in SUMMARY_CATS or is_release(d))]
    want.sort(key=lambda d: d.get("d", ""), reverse=True)
    want.sort(key=lambda d: d.get("c") != "Fato Relevante")
    got = 0
    for d in want[:PDF_BACKFILL]:
        if time.time() > deadline:
            break
        try:
            pdf, _ = unpack_pdf(get(d["u"], timeout=40, tries=2))
        except Exception:  # noqa: BLE001
            continue
        if pdf and keep_pdf(d, pdf):
            got += 1
    for k in [k for k, v in idx.items() if v.get("d", "") < cutoff]:
        idx.pop(k)
    total = 0
    for k, v in sorted(idx.items(), key=lambda kv: (kv[1].get("c") == "Fato Relevante", kv[1].get("d", "")), reverse=True):
        total += v.get("b", 0)
        if total > PDF_TOTAL:
            idx.pop(k)
    if PDF_DIR.exists():
        for f in PDF_DIR.glob("*.pdf"):
            if f.stem not in idx:
                f.unlink()
    if idx or PDF_DIR.exists():
        save_json(PDF_INDEX, idx)
    mb = sum(v.get("b", 0) for v in idx.values()) / 1e6
    log(f"Cópias de PDF: {got} novas de documentos já lidos; {len(idx)} no site ({mb:.1f} MB).")


def _fetch_text(d: dict, chars: int) -> dict | str | None:
    """Texto do documento para a fila. None se o documento deu erro; "rede" se a CVM não respondeu."""
    try:
        raw = get(d["u"], timeout=40, tries=2)
        pdf, kind = unpack_pdf(raw)
        texto = pdf_text(pdf) if pdf else ""
    except Exception as exc:  # noqa: BLE001
        log(f"PDF {d['id']} ({d['nome']}): {type(exc).__name__}: {exc}")
        return "rede" if network_error(exc) else None
    if kind != "pdf":
        log(f"PDF {d['id']} ({d['nome']}): veio {kind}")
    if pdf:
        keep_pdf(d, pdf)
    if is_release(d):
        chars = max(chars, RELEASE_CHARS)
    item = {"k": d["k"], "empresa": d["nome"], "c": d["c"], "t": d["t"], "s": d["s"], "d": d["d"], "texto": texto[:chars],
            "u": d["u"], "x": TEXT_VERSION}
    if pdf is None:
        # sem o arquivo (página de erro da CVM): tenta de novo nas próximas execuções, até NOPDF_TRIES vezes
        item["np"] = int(d.get("np", 0)) + 1
    elif not legible(texto):
        item["ocr"] = 1  # PDF sem texto de verdade (só imagem, ou fonte sem mapa): o passo de OCR do workflow lê as páginas
    return item


def cmd_textos(args) -> None:
    """Baixa o PDF dos documentos ainda sem resumo e guarda o texto na fila.

    Modo normal (workflow de hora em hora): últimos dias, poucos por vez, em cvm_fila.json.
    Modo --hist (workflow cvm-backfill): histórico dos 5 anos, em lotes grandes, em cvm_fila_hist.json."""
    from concurrent.futures import ThreadPoolExecutor
    now = datetime.now(BRT).replace(tzinfo=None)
    listed, active = summary_universe(now)
    log(f"Universo dos resumos: {len(listed)} listadas, {len(active)} ativas.")
    dias = args.dias or (365 * YEARS if args.hist else SUMMARY_LOOKBACK_DAYS)
    since = (now - timedelta(days=dias)).strftime("%Y-%m-%d")
    if args.hist:
        docs, _ = collect_docs(now)
    else:
        try:
            docs = fetch_realtime(now - timedelta(days=dias), now)
        except Exception as exc:  # noqa: BLE001
            log(f"Tempo real indisponível ({exc}); usando dados abertos.")
            docs = [d for d in (ipe_doc(r) for r in fetch_ipe(now.year)) if d]
    resumos = load_json(RESUMOS, {})
    target = FILA_HIST if args.hist else FILA
    fila = load_json(target, {})
    other = load_json(FILA if args.hist else FILA_HIST, {})
    if not args.hist:  # descarta da fila o que já foi resumido ou ficou velho demais
        cutoff = (now - timedelta(days=SUMMARY_LOOKBACK_DAYS + 7)).strftime("%Y-%m-%d")
        fila = {k: v for k, v in fila.items() if k not in resumos and v.get("d", "") >= cutoff}
    else:
        fila = {k: v for k, v in fila.items() if k not in resumos}
    cats = {"fr": {"Fato Relevante"}, "releases": {RELEASE[0]}}.get(args.cats, SUMMARY_CATS | {RELEASE[0]})
    todo = [d for d in docs if wants_summary(d, listed, active) and d["c"] in cats and d["d"] >= since
            and d["id"] not in resumos and d["id"] not in fila and d["id"] not in other and d.get("u")]
    todo.sort(key=lambda d: (d["d"], d["h"]), reverse=True)
    todo.sort(key=lambda d: (d["c"] != "Fato Relevante", not is_release(d)))  # fatos relevantes, releases, depois o resto
    if not args.hist:
        # textos da fila feitos por uma versão anterior do extrator (só 5 páginas, sem OCR) são refeitos uma vez, só os
        # da janela dos resumos (sem a data, a reserva dos dados abertos, que traz o ano todo, refazia os velhos)
        by_id = {d["id"]: d for d in docs if d.get("u")}
        redo = [by_id[k] for k, v in fila.items()
                if v.get("x", 1) < TEXT_VERSION and k in by_id and v.get("d", "") >= since][:REDO_PER_RUN]
        if redo:
            log(f"Refazendo {len(redo)} textos da fila com o extrator novo.")
        # documentos em que a CVM devolveu outra coisa no lugar do PDF (ou textos antigos vazios, de antes de isso ser
        # marcado): nova tentativa, até NOPDF_TRIES vezes
        # (com o link guardado na fila: funciona mesmo quando a consulta em tempo real da CVM está fora do ar)
        again = [{"id": k, "k": v.get("k", ""), "nome": v.get("empresa", ""), "c": v.get("c", ""), "t": v.get("t", ""),
                  "s": v.get("s", ""), "d": v.get("d", ""), "u": v["u"], "np": v.get("np", 0)}
                 for k, v in fila.items()
                 if v.get("u") and v.get("d", "") >= since and not v.get("texto") and not v.get("ocr")
                 and v.get("np", 0) < NOPDF_TRIES and k not in {d["id"] for d in redo}]
        again.sort(key=lambda d: d["d"], reverse=True)  # os mais recentes primeiro
        again = again[:REDO_PER_RUN]
        if again:
            log(f"Tentando de novo {len(again)} documentos que vieram sem PDF.")
        todo = redo + again + todo
    limit = args.max or MAX_PDFS_PER_RUN
    global KEEP_PDFS
    KEEP_PDFS = not args.hist
    deadline = time.time() + 60 * (args.minutos or (30 if args.hist else TEXT_MINUTES))
    # no modo normal, um documento por vez: o teto de tempo e a parada por CVM fora do ar valem a cada download
    step = 40 if args.hist else 1
    got = down = 0
    with ThreadPoolExecutor(max_workers=4 if args.hist else 1) as pool:
        for i in range(0, min(limit, len(todo)), step):
            if time.time() > deadline:
                log("Tempo esgotado; o resto fica para a próxima execução.")
                break
            batch = todo[i:min(i + step, limit)]
            for d, item in zip(batch, pool.map(lambda x: _fetch_text(x, args.chars or TEXT_CHARS), batch)):
                if isinstance(item, dict):
                    fila[d["id"]] = item
                    got += 1
                down = down + 1 if item == "rede" else 0
            if not args.hist and down >= DOWN_STOP:
                log(f"A CVM não respondeu a {down} downloads seguidos; o resto fica para a próxima execução.")
                break
            if args.hist and i % 400 == 0:
                save_json(target, fila)
                log(f"... {got} textos")
    save_json(target, fila)
    log(f"Textos: {got} novos (de {len(todo)} pendentes); fila com {len(fila)}.")
    if KEEP_PDFS:
        seen = {d["id"] for d in docs}
        cands = [d for d in docs if wants_summary(d, listed, active) or d["c"] == "Fato Relevante"]
        cands += [{"id": k, "nome": v.get("empresa", ""), "c": v.get("c", ""), "t": v.get("t", ""), "d": v.get("d", ""),
                   "u": v.get("u", "")} for k, v in fila.items() if k not in seen]
        save_pdfs(cands, deadline + 120)


def cmd_ocr(args) -> None:
    """Lê por OCR os PDFs da fila cujo texto saiu ilegível (imagem ou fonte sem mapa de caracteres).

    --check sai com código 0 se houver algum para ler e 1 se não houver: o workflow só instala o OCR quando precisa."""
    fila = load_json(FILA, {})
    pend = [k for k, v in fila.items() if v.get("ocr") == 1 and v.get("u")]
    if args.check:
        log(f"OCR: {len(pend)} documentos esperando leitura.")
        sys.exit(0 if pend else 1)
    if not (shutil.which("tesseract") and shutil.which("pdftoppm")):
        log("OCR: tesseract ou pdftoppm não instalado; nada feito.")
        return
    pend = pend[: args.max or 12]
    deadline = time.monotonic() + OCR_SECONDS
    ok = done = 0
    for k in pend:
        if time.monotonic() > deadline:
            break
        v = fila[k]
        try:
            texto = ocr_text(get(v["u"], timeout=40, tries=2))
        except Exception as exc:  # noqa: BLE001
            log(f"OCR {k} ({v.get('empresa')}): {type(exc).__name__}: {exc}")
            texto = ""
        v["ocr"] = 2  # tentado: não tenta de novo
        done += 1
        if legible(texto):
            v["texto"] = texto[: RELEASE_CHARS if is_release(v) else TEXT_CHARS]
            ok += 1
    save_json(FILA, fila)
    log(f"OCR: {ok} de {done} documentos lidos agora com texto legível; {len(pend) - done} ficam para a próxima.")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("build").set_defaults(fn=cmd_build)
    t = sub.add_parser("textos")
    t.add_argument("--hist", action="store_true", help="histórico dos 5 anos, em cvm_fila_hist.json")
    t.add_argument("--dias", type=int, help="só documentos dos últimos N dias")
    t.add_argument("--max", type=int, help="máximo de PDFs nesta execução")
    t.add_argument("--cats", choices=["fr", "releases", "principais"], default="principais")
    t.add_argument("--chars", type=int, help="caracteres de texto guardados por documento")
    t.add_argument("--minutos", type=int, help="tempo máximo de execução")
    t.set_defaults(fn=cmd_textos)
    o = sub.add_parser("ocr", help="lê por OCR os PDFs da fila sem texto de verdade")
    o.add_argument("--check", action="store_true", help="só diz se há documento esperando OCR (código de saída 0 = há)")
    o.add_argument("--max", type=int, help="máximo de documentos nesta execução")
    o.set_defaults(fn=cmd_ocr)
    args = ap.parse_args()
    args.fn(args)


if __name__ == "__main__":
    sys.exit(main())
