"""Base de companhias abertas: cadastro, tickers e todos os documentos entregues à CVM (IPE), com resumos.

Gera arquivos estáticos em site/data/cias/ (não versionados; o workflow refaz a cada publicação):
  index.json            companhias + contagens + lista de meses
  emp/{codigo}.json     todos os documentos de uma companhia (ano anterior e ano corrente)
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
import sys
import time
import urllib.request
import zipfile
from collections import Counter, defaultdict
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "site" / "data"
OUT = DATA / "cias"
RESUMOS = DATA / "cvm_resumos.json"
FILA = DATA / "cvm_fila.json"
BRT = timezone(timedelta(hours=-3))

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36"
DADOS = "https://dados.cvm.gov.br/dados/CIA_ABERTA"
ENET = "https://www.rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx"
DOWNLOAD = ("https://www.rad.cvm.gov.br/ENET/frmDownloadDocumento.aspx?Tela=ext&descTipo=IPE&CodigoInstituicao=1"
            "&numProtocolo={p}&numSequencia={s}&numVersao={v}")
REALTIME_DAYS = 10

# Categorias que ganham resumo (texto extraído do PDF e resumido pela rotina).
SUMMARY_CATS = {
    "Fato Relevante", "Comunicado ao Mercado", "Aviso aos Acionistas",
    "Comunicação sobre Transação entre Partes Relacionadas", "Comunicação sobre demandas societárias",
    "Acordo de Acionistas", "Informações de Companhias em Recuperação Judicial ou Extrajudicial",
}
SUMMARY_LOOKBACK_DAYS = 7
MAX_PDFS_PER_RUN = 60
TEXT_CHARS = 6000
TEMAS = ["M&A", "Mercado de capitais", "Dívida", "Proventos", "Resultados", "Governança", "Assembleia",
         "Operacional", "Regulatório e jurídico", "Reestruturação", "Outros"]


def log(msg: str) -> None:
    print(f"[{datetime.now(BRT):%H:%M:%S}] {msg}", flush=True)


def load_json(path: Path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:  # noqa: BLE001
        return default


def save_json(path: Path, data, compact: bool = False) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if compact:
        path.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    else:
        path.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")


def get(url: str, timeout: int = 120) -> bytes:
    last = None
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                return resp.read()
        except Exception as exc:  # noqa: BLE001
            last = exc
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
    return re.sub(r"\s+", " ", (n or "").strip())


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
    for year in (now.year - 1, now.year):
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
    try:
        rt = fetch_realtime(now - timedelta(days=REALTIME_DAYS), now)
        for d in rt:
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
    """Trecho que mostra o conteúdo: pula o cabeçalho (CNPJ, NIRE, 'Companhia Aberta', título)."""
    t = re.sub(r"\s+", " ", text or "").strip()
    m = re.search(r"\b(A|O)\s+[A-ZÀ-Ý0-9][^,]{2,120}?\(\s*[“\"]", t)
    if m:
        t = t[m.start():]
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
    fila = load_json(FILA, {})
    for d in docs:
        sm = resumos.get(d["id"])
        if sm:
            d["sm"] = {k: sm[k] for k in ("resumo", "pontos", "tema") if sm.get(k)}
        elif fila.get(d["id"], {}).get("texto"):
            d["tr"] = excerpt(fila[d["id"]]["texto"])
        d.pop("cnpj", None)
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
    import pypdf
    reader = pypdf.PdfReader(io.BytesIO(raw))
    parts = []
    for page in reader.pages[:5]:
        parts.append(page.extract_text() or "")
        if sum(len(p) for p in parts) > TEXT_CHARS * 1.5:
            break
    return re.sub(r"[ \t]+", " ", "\n".join(parts)).strip()


def cmd_textos(args) -> None:
    """Baixa o PDF dos documentos relevantes recentes ainda sem resumo e guarda o texto na fila."""
    now = datetime.now(BRT).replace(tzinfo=None)
    since = (now - timedelta(days=SUMMARY_LOOKBACK_DAYS)).strftime("%Y-%m-%d")
    try:
        docs = fetch_realtime(now - timedelta(days=SUMMARY_LOOKBACK_DAYS), now)
    except Exception as exc:  # noqa: BLE001
        log(f"Tempo real indisponível ({exc}); usando dados abertos.")
        docs = [d for d in (ipe_doc(r) for r in fetch_ipe(now.year)) if d]
    resumos = load_json(RESUMOS, {})
    fila = load_json(FILA, {})
    # descarta da fila o que já foi resumido ou ficou velho demais
    cutoff = (now - timedelta(days=SUMMARY_LOOKBACK_DAYS + 7)).strftime("%Y-%m-%d")
    fila = {k: v for k, v in fila.items() if k not in resumos and v.get("d", "") >= cutoff}

    todo = [d for d in docs if d["c"] in SUMMARY_CATS and d["d"] >= since and d["id"] not in resumos and d["id"] not in fila]
    todo.sort(key=lambda d: (d["d"], d["h"]), reverse=True)
    todo.sort(key=lambda d: d["c"] != "Fato Relevante")  # fatos relevantes primeiro, depois os mais novos
    got = 0
    for d in todo[:MAX_PDFS_PER_RUN]:
        try:
            raw = get(d["u"], timeout=60)
            texto = pdf_text(raw) if raw[:5] == b"%PDF-" else ""
        except Exception as exc:  # noqa: BLE001
            log(f"PDF {d['id']} ({d['nome']}): {type(exc).__name__}: {exc}")
            continue
        fila[d["id"]] = {"k": d["k"], "empresa": d["nome"], "c": d["c"], "t": d["t"], "s": d["s"], "d": d["d"],
                         "texto": texto[:TEXT_CHARS]}
        got += 1
        time.sleep(0.4)
    save_json(FILA, fila)
    log(f"Textos: {got} novos (de {len(todo)} pendentes); fila com {len(fila)}.")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("build").set_defaults(fn=cmd_build)
    sub.add_parser("textos").set_defaults(fn=cmd_textos)
    args = ap.parse_args()
    args.fn(args)


if __name__ == "__main__":
    sys.exit(main())
