"""Perfis das companhias abertas: ficha, acionistas, administração, financeiro, cotação e tudo o que o portal
já sabe de cada uma (notícias, deals, leads, ofertas públicas, assembleias).

Gera arquivos estáticos em site/data/cias/ (não versionados; o workflow refaz e guarda em cache):
  base/perfis.json     ficha montada a partir da CVM (FCA, FRE, DFP, ITR); refeita uma vez por dia
  base/precos.json     cotações do Yahoo Finance; refeitas a cada poucas horas
  base/ofertas.json    ofertas públicas registradas na CVM (Resolução 160)
  perfil/{codigo}.json tudo de uma companhia, para a página dela
  resumo.json          números-chave de todas (valor de mercado, cotação, receita), para listas e busca
  alias.json           nome → código CVM, para ligar notícias e entidades às companhias
  ofertas.json         ofertas dos últimos 12 meses, para a aba Ofertas do portal
  agenda.json          assembleias convocadas e vencimentos de dívida próximos

Uso:
  python scripts/perfis.py base      # FCA, FRE, DFP e ITR (pula se a base tiver menos de 20 h)
  python scripts/perfis.py precos    # cotações (pula se tiverem menos de 2 h)
  python scripts/perfis.py ofertas   # ofertas públicas (pula se tiverem menos de 20 h)
  python scripts/perfis.py montar    # junta tudo; roda depois de cias.py build
"""
from __future__ import annotations

import argparse
import csv
import io
import json
import re
import sys
import time
import unicodedata
import urllib.parse
import zipfile
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from cias import BRT, DADOS, DATA, OUT, code, get, load_json, log, save_json  # noqa: E402

BASE = OUT / "base"
PERFIS = BASE / "perfis.json"
PRECOS = BASE / "precos.json"
OFERTAS_BASE = BASE / "ofertas.json"
ARCHIVE = DATA / "archive"
ALIASES = DATA.parent.parent / "config" / "aliases.json"
OFERTAS_URL = "https://dados.cvm.gov.br/dados/OFERTA/DISTRIB/DADOS/oferta_distribuicao.zip"
YAHOO = "https://query1.finance.yahoo.com/v8/finance/chart/{t}.SA?range=1y&interval=1d"
DFP_YEARS = 5


def now_brt() -> datetime:
    return datetime.now(BRT).replace(tzinfo=None)


def fresh(path: Path, hours: float) -> bool:
    data = load_json(path, None)
    if not data or not data.get("generated_at"):
        return False
    try:
        age = now_brt() - datetime.fromisoformat(data["generated_at"]).replace(tzinfo=None)
    except ValueError:
        return False
    return age < timedelta(hours=hours)


def num(v) -> float | None:
    try:
        return float(str(v).replace(",", ".")) if str(v).strip() not in ("", "nan") else None
    except ValueError:
        return None


def fold(s: str) -> str:
    s = unicodedata.normalize("NFD", str(s or "").lower())
    return "".join(c for c in s if unicodedata.category(c) != "Mn")


SMALL = {"de", "da", "do", "das", "dos", "e", "em", "para", "por", "a", "o", "na", "no", "s.a.", "sa", "ltda", "ltda."}


ACRONYMS = {"bndes", "bndespar", "kpmg", "pwc", "ey", "btg", "xp", "jbs", "brf", "csn", "cpfl", "tim", "irb", "weg", "ccr", "cba",
            "ltda", "s/a", "sa", "spe", "ri", "cvm", "b3", "ii", "iii", "iv", "bb", "cef", "mrv", "bv", "llc", "lp", "inc", "plc", "ag",
            "gmbh", "nv", "spa", "sgps", "fip", "fia", "fim", "fii", "fidc", "dtvm", "cctvm", "bdo", "rsm", "grant", "pkf", "uhy"}


def title(s: str) -> str:
    """Nome em caixa alta → caixa de título, mantendo siglas e partículas."""
    s = re.sub(r"\s+", " ", (s or "").strip())
    if not s or (s != s.upper() and s != s.lower()):
        return s
    out = []
    for i, w in enumerate(s.lower().split(" ")):
        bare = w.strip(".,;:()")
        if bare == "ltda":
            out.append(w.replace("ltda", "Ltda"))
        elif bare in ACRONYMS and bare not in ("sa", "s/a", "ltda") or (bare and not re.search(r"[aeiouáéíóúâêôãõà]", bare) and bare.isalpha()):
            out.append(w.upper())
        elif i and w in SMALL:
            out.append("S.A." if w in ("s.a.", "sa") else w)
        else:
            out.append("-".join(p[:1].upper() + p[1:] for p in w.split("-")))
    return " ".join(out)


def cut(s: str, n: int) -> str:
    s = re.sub(r"\s+", " ", (s or "").replace("\u0007", " ")).strip()
    return s if len(s) <= n else s[:n].rsplit(" ", 1)[0] + "…"


def fmt_cnpj(d: str) -> str:
    d = re.sub(r"\D", "", d or "")
    if len(d) != 14 or set(d) == {"0"}:
        return ""
    return f"{d[:2]}.{d[2:5]}.{d[5:8]}/{d[8:12]}-{d[12:]}"


# ---------------------------------------------------------------- leitura dos zips da CVM

def zip_rows(url: str, want) -> dict[str, list[dict]]:
    """Lê só os CSVs do zip cujo nome passa em want(nome), linha a linha (os da DFP/ITR passam de 100 MB)."""
    raw = get(url, timeout=300)
    out: dict[str, list[dict]] = {}
    with zipfile.ZipFile(io.BytesIO(raw)) as z:
        for n in z.namelist():
            if n.lower().endswith(".csv") and want(n):
                with z.open(n) as fh:
                    out[n] = list(csv.DictReader(io.TextIOWrapper(fh, encoding="latin-1"), delimiter=";"))
    return out


def stream_rows(url: str, want, keep):
    """Como zip_rows, mas filtra cada linha com keep(nome, linha) enquanto lê (economiza memória)."""
    raw = get(url, timeout=300)
    with zipfile.ZipFile(io.BytesIO(raw)) as z:
        for n in z.namelist():
            if n.lower().endswith(".csv") and want(n):
                with z.open(n) as fh:
                    for r in csv.DictReader(io.TextIOWrapper(fh, encoding="latin-1"), delimiter=";"):
                        if keep(n, r):
                            yield n, r


def part(name: str) -> str:
    """'fre_cia_aberta_posicao_acionaria_2026.csv' → 'posicao_acionaria'."""
    m = re.match(r"(?:fre|fca|dfp|itr)_cia_aberta_(.*?)_?\d{4}\.csv$", name)
    return (m[1] if m else name).strip("_") or "doc"


# ---------------------------------------------------------------- FCA e FRE

def latest_docs(index_rows: list[dict]) -> dict[str, tuple]:
    """CNPJ → (DT_REFER, versão, ID_DOC, código CVM) da entrega mais recente."""
    best: dict[str, tuple] = {}
    for r in index_rows:
        key = (r.get("DT_REFER", ""), int(r.get("VERSAO") or 0), r.get("ID_DOC", ""), code(r.get("CD_CVM", "")))
        if key > best.get(r["CNPJ_CIA"], ("",)):
            best[r["CNPJ_CIA"]] = key
    return best


def load_form(kind: str, years: list[int]) -> tuple[dict, dict[str, dict[str, list[dict]]]]:
    """FCA ou FRE: para cada CNPJ, as tabelas da entrega mais recente. Devolve (índice, {parte: {cnpj: linhas}})."""
    index: dict[str, tuple] = {}
    tables: dict[str, dict[str, list[dict]]] = defaultdict(lambda: defaultdict(list))
    files = {}
    for y in years:
        try:
            files[y] = zip_rows(f"{DADOS}/DOC/{kind.upper()}/DADOS/{kind}_cia_aberta_{y}.zip", lambda n: True)
        except Exception as exc:  # noqa: BLE001
            log(f"{kind.upper()} {y}: {exc}")
    for y, f in files.items():
        for n, rows in f.items():
            if part(n) == "doc" or n == f"{kind}_cia_aberta_{y}.csv":
                for cnpj, key in latest_docs(rows).items():
                    if key > index.get(cnpj, ("",)):
                        index[cnpj] = key
    chosen = {cnpj: key[2] for cnpj, key in index.items()}
    for f in files.values():
        for n, rows in f.items():
            p = part(n)
            if p == "doc" or n.startswith(f"{kind}_cia_aberta_2"):
                continue
            for r in rows:
                cnpj = r.get("CNPJ_Companhia", "")
                if chosen.get(cnpj) == r.get("ID_Documento"):
                    tables[p][cnpj].append(r)
    log(f"{kind.upper()}: {len(index)} companhias, tabelas {sorted(tables)}")
    return index, tables


def cargo_txt(c: str) -> str:
    return re.sub(r"^\d+\s*-\s*", "", c or "").strip()


def shareholders(rows: list[dict]) -> list[dict]:
    by_rel: dict[str, list[dict]] = defaultdict(list)
    for r in rows:
        by_rel[r.get("ID_Acionista_Relacionado", "")].append(r)

    def node(r: dict, depth: int) -> dict:
        n = {"n": title(r.get("Acionista", "")), "t": r.get("Tipo_Pessoa_Acionista", ""),
             "doc": fmt_cnpj(r.get("CPF_CNPJ_Acionista", "")) if r.get("Tipo_Pessoa_Acionista") == "PJ" else "",
             "on": num(r.get("Percentual_Acao_Ordinaria_Circulacao")), "pn": num(r.get("Percentual_Acao_Preferencial_Circulacao")),
             "tot": num(r.get("Percentual_Total_Acoes_Circulacao")), "ctl": r.get("Acionista_Controlador") == "S",
             "ac": r.get("Participante_Acordo_Acionistas") == "S", "pais": r.get("Nacionalidade", "") if r.get("Nacionalidade") not in ("Brasil", "Brasileira") else "",
             "dt": r.get("Data_Ultima_Alteracao", "")}
        if depth < 3:
            kids = [node(c, depth + 1) for c in by_rel.get(r.get("ID_Acionista", ""), [])
                    if c.get("Acionista", "").strip().lower() not in ("ações tesouraria", "outros", "acoes tesouraria")]
            kids = [k for k in kids if k.get("n", "").lower() not in ("ações tesouraria",)]
            if kids:
                n["de"] = sorted(kids, key=lambda k: -(k.get("tot") or 0))[:8]
        return {k: v for k, v in n.items() if v not in ("", None, False)}

    top = [node(r, 1) for r in by_rel.get("", [])]
    top = [t for t in top if t.get("tot") or t.get("on") or t.get("pn") or t.get("n", "").lower() not in ("ações tesouraria",)]
    return sorted(top, key=lambda t: (t.get("n", "").lower() in ("outros", "ações tesouraria"), -(t.get("tot") or 0)))


def people(rows: list[dict]) -> list[dict]:
    seen: dict[tuple, dict] = {}
    for r in rows:
        orgao = r.get("Orgao_Administracao", "")
        o = ("F" if "Fiscal" in orgao else "DC" if "Diretoria e ao Conselho" in orgao else "C" if "Conselho" in orgao else "D")
        cargo = cargo_txt(r.get("Cargo_Eletivo_Ocupado", ""))
        key = (r.get("CPF") or r.get("Nome"), o)
        nasc = (r.get("Data_Nascimento") or "")[:4]
        p = {"n": title(r.get("Nome", "")), "o": o, "c": cargo, "f": cut(r.get("Outro_Cargo_Funcao") or r.get("Complemento_Cargo_Eletivo_Ocupado") or "", 120),
             "el": r.get("Data_Eleicao", ""), "pm": cut(r.get("Prazo_Mandato", ""), 60), "pr": cut(r.get("Profissao", ""), 60),
             "ex": cut(r.get("Experiencia_Profissional", ""), 700), "nasc": nasc if nasc.isdigit() else "",
             "ind": "ndependente" in cargo, "ec": r.get("Eleito_Controlador") == "S",
             "mand": int(num(r.get("Numero_Mandatos_Consecutivos")) or 0)}
        if key in seen:  # mesma pessoa com dois cargos no mesmo órgão
            seen[key]["c"] = " · ".join(dict.fromkeys([seen[key]["c"], cargo]))
            continue
        seen[key] = p
    out = [{k: v for k, v in p.items() if v not in ("", None, False, 0)} for p in seen.values()]

    def rank(p):
        c = fold(p.get("c", "") + " " + p.get("f", ""))
        if "presidente do c" in c or "presidente do conselho" in c:
            return 0
        if "diretor presidente" in c or "ceo" in c.split() or "presidente / superintendente" in c:
            return 1
        if "vice presidente c" in c or "vice-presidente do conselho" in c:
            return 2
        return 5
    return sorted(out, key=lambda p: (rank(p), p["n"]))


def committees(rows: list[dict]) -> list[dict]:
    by: dict[str, list] = defaultdict(list)
    for r in rows:
        name = r.get("Descricao_Outros_Comites") if (r.get("Tipo_Comite") or "").startswith("Outros") else r.get("Tipo_Comite")
        cargo = r.get("Descricao_Outro_Cargo_Ocupado") or r.get("Cargo_Ocupado") or ""
        entry = [title(r.get("Nome", "")), cut(cargo, 60)]
        if entry not in by[cut(name or "Comitê", 120)]:
            by[cut(name or "Comitê", 120)].append(entry)
    return [{"c": c, "m": sorted(m, key=lambda x: ("oordenador" not in x[1] and "residente" not in x[1], x[0]))} for c, m in sorted(by.items())]


def realized_year(rows: list[dict]) -> str:
    today = now_brt().strftime("%Y-%m-%d")
    ends = sorted({r.get("Data_Fim_Exercicio_Social", "") for r in rows if r.get("Data_Fim_Exercicio_Social", "") < today}, reverse=True)
    return ends[0] if ends else ""


def remuneration(total_rows: list[dict], maxmin_rows: list[dict]) -> dict:
    end = realized_year(total_rows)
    if not end:
        return {}
    orgs = []
    for r in total_rows:
        if r.get("Data_Fim_Exercicio_Social") == end:
            orgs.append({"o": r.get("Orgao_Administracao", ""), "m": num(r.get("Numero_Membros")), "v": num(r.get("Total_Remuneracao_Orgao"))})
    mm = {}
    for r in maxmin_rows:
        if r.get("Data_Fim_Exercicio_Social") == end:
            mm[r.get("Orgao_Administracao", "")] = {"max": num(r.get("Valor_Maior_Remuneracao")), "med": num(r.get("Valor_Medio_Remuneracao"))}
    for o in orgs:
        o.update({k: v for k, v in mm.get(o["o"], {}).items() if v})
    return {"ano": end[:4], "orgaos": [o for o in orgs if o.get("v")]}


def employees(rows: list[dict], gender_rows: list[dict]) -> dict:
    regions = ("Quantidade_Norte", "Quantidade_Nordeste", "Quantidade_Centro_Oeste", "Quantidade_Sudeste", "Quantidade_Sul", "Quantidade_Exterior")
    total = lead = 0.0
    by_region = defaultdict(float)
    for r in rows:
        n = sum(num(r.get(c)) or 0 for c in regions)
        total += n
        if (r.get("Posicao") or "").startswith("Lideran"):
            lead += n
        for c in regions:
            by_region[c.split("_", 1)[1].replace("_", "-")] += num(r.get(c)) or 0
    fem = sum(num(r.get("Quantidade_Feminino")) or 0 for r in gender_rows if (r.get("Posicao") or "").startswith("Lideran"))
    declared = sum(sum(num(r.get(c)) or 0 for c in ("Quantidade_Feminino", "Quantidade_Masculino", "Quantidade_Nao_Binario", "Quantidade_Outros"))
                   for r in gender_rows if (r.get("Posicao") or "").startswith("Lideran"))
    if not total:
        return {}
    out = {"total": int(total), "lideranca": int(lead), "regioes": {k: int(v) for k, v in by_region.items() if v}}
    if declared:
        out["mulheres_lideranca"] = round(100 * fem / declared, 1)
    return out


def capital(rows: list[dict]) -> dict:
    pref = {"Capital Integralizado": 0, "Capital Subscrito": 1, "Capital Emitido": 2, "Capital Autorizado": 3}
    rows = sorted(rows, key=lambda r: (pref.get(r.get("Tipo_Capital", ""), 9), r.get("Data_Autorizacao_Aprovacao", "")))
    if not rows:
        return {}
    r = rows[0]
    out = {"tipo": r.get("Tipo_Capital", ""), "valor": num(r.get("Valor_Capital")), "on": num(r.get("Quantidade_Acoes_Ordinarias")),
           "pn": num(r.get("Quantidade_Acoes_Preferenciais")), "total": num(r.get("Quantidade_Total_Acoes")), "data": r.get("Data_Autorizacao_Aprovacao", "")}
    auth = next((x for x in rows if x.get("Tipo_Capital") == "Capital Autorizado"), None)
    if auth and num(auth.get("Valor_Capital")):
        out["autorizado"] = num(auth.get("Valor_Capital"))
    return {k: v for k, v in out.items() if v not in ("", None)}


def securities(rows: list[dict], ext_rows: list[dict]) -> list[dict]:
    today = now_brt().strftime("%Y-%m-%d")
    out = []
    for r in rows:
        if (r.get("Data_Vencimento") or "9999") < today:
            continue
        out.append({"t": r.get("Valor_Mobiliario", ""), "id": cut(r.get("Identificacao_Valor_Mobiliario", ""), 110), "em": r.get("Data_Emissao", ""),
                    "vc": r.get("Data_Vencimento", ""), "v": num(r.get("Valor")), "s": num(r.get("Saldo_Devedor"))})
    for r in ext_rows:
        if (r.get("Data_Vencimento") or "9999") < today:
            continue
        out.append({"t": "Título no exterior", "id": cut(r.get("Identificacao_Valor_Mobiliario", ""), 110), "em": r.get("Data_Emissao", ""),
                    "vc": r.get("Data_Vencimento", ""), "v": num(r.get("Valor_Nominal")), "s": num(r.get("Saldo_Devedor"))})
    out.sort(key=lambda x: x["vc"] or "9999")
    return [{k: v for k, v in x.items() if v not in ("", None)} for x in out[:60]]


def related(rows: list[dict]) -> list[dict]:
    rows = sorted(rows, key=lambda r: -(num(r.get("Montante_Envolvido")) or 0))
    return [{"p": cut(r.get("Parte_Relacionada", ""), 100), "r": cut(r.get("Relacao_Emissor", ""), 160), "o": cut(r.get("Objeto_Contrato", ""), 240),
             "d": r.get("Data_Transacao", ""), "v": num(r.get("Montante_Envolvido"))} for r in rows[:12]]


def stakes(rows: list[dict]) -> list[dict]:
    out = []
    for r in rows:
        out.append({"n": title(r.get("Razao_Social", "")), "cnpj": fmt_cnpj(r.get("CNPJ", "")), "pct": num(r.get("Participacao_Emissor")),
                    "k": code(r.get("Codigo_CVM", "")), "tipo": r.get("Tipo_Sociedade", ""), "at": cut(r.get("Descricao_Atividades", ""), 140),
                    "pais": r.get("Pais_Sede", "") if r.get("Pais_Sede") not in ("", "Brasil") else "", "uf": r.get("UF_Sede", "")})
    out.sort(key=lambda x: (-(x["pct"] or 0), x["n"]))
    return [{k: v for k, v in x.items() if v not in ("", None)} for x in out[:120]]


def fca_profile(t: dict, cnpj: str) -> dict:
    g = (t.get("geral", {}).get(cnpj) or [{}])[0]
    out = {"razao": g.get("Nome_Empresarial", ""), "const": g.get("Data_Constituicao", ""), "reg": g.get("Data_Registro_CVM", ""), "cat": g.get("Categoria_Registro_CVM", ""),
           "ctl": g.get("Especie_Controle_Acionario", ""), "exerc": g.get("Mes_Encerramento_Exercicio_Social", ""),
           "pais": g.get("Pais_Origem", "") if g.get("Pais_Origem") not in ("", "Brasil") else "", "setor": g.get("Setor_Atividade", ""),
           "ativ": cut(g.get("Descricao_Atividade", ""), 900), "web": g.get("Pagina_Web", ""), "sit": g.get("Situacao_Emissor", ""),
           "ant": title(g.get("Nome_Empresarial_Anterior", "")), "ant_d": g.get("Data_Nome_Empresarial", "")}
    sede = next((r for r in t.get("endereco", {}).get(cnpj, []) if "Sede" in r.get("Tipo_Endereco", "")), None)
    if sede:
        out["sede"] = ", ".join(x for x in [sede.get("Logradouro", ""), sede.get("Complemento", ""), sede.get("Bairro", ""),
                                            f"{sede.get('Cidade', '')}/{sede.get('Sigla_UF', '')}".strip("/")] if x)
    dri = [r for r in t.get("dri", {}).get(cnpj, []) if not r.get("Data_Fim_Atuacao")]
    if dri:
        r = dri[-1]
        tel = " ".join(x for x in [f"({r.get('DDD_Telefone')})" if r.get("DDD_Telefone") else "", r.get("Telefone", "")] if x)
        out["ri"] = {"n": title(r.get("Responsavel", "")), "email": (r.get("Email") or "").strip(), "tel": tel}
    esc = [r for r in t.get("escriturador", {}).get(cnpj, []) if not r.get("Data_Fim_Atuacao")]
    if esc:
        out["escriturador"] = esc[-1].get("Escriturador", "")
    aud = [r for r in t.get("auditor", {}).get(cnpj, []) if not r.get("Data_Fim_Atuacao_Auditor")]
    if aud:
        out["auditor"] = title(aud[-1].get("Auditor", ""))
        out["auditor_desde"] = aud[-1].get("Data_Inicio_Atuacao_Auditor", "")
    ext = [r.get("Pais", "") for r in t.get("pais_estrangeiro_negociacao", {}).get(cnpj, [])]
    if ext:
        out["exterior"] = sorted(set(ext))
    vm = []
    for r in t.get("valor_mobiliario", {}).get(cnpj, []):
        if r.get("Data_Fim_Negociacao"):
            continue
        vm.append({"t": r.get("Valor_Mobiliario", ""), "tk": (r.get("Codigo_Negociacao") or "").strip().upper(), "m": r.get("Mercado", ""),
                   "sg": r.get("Segmento", ""), "u": r.get("Composicao_BDR_Unit", ""), "desde": r.get("Data_Inicio_Listagem", "")})
    out["vm"] = [{k: v for k, v in x.items() if v} for x in vm]
    return {k: v for k, v in out.items() if v not in ("", None, [], {})}


# ---------------------------------------------------------------- DFP e ITR

FIN_FILES = ("DRE_con", "DRE_ind", "BPA_con", "BPA_ind", "BPP_con", "BPP_ind", "DFC_MI_con", "DFC_MI_ind", "composicao_capital")


def fin_keep(name: str, r: dict) -> bool:
    if "composicao" in name:
        return True
    c = r.get("CD_CONTA", "")
    lvl = c.count(".")
    if "DFC" in name:
        if c.startswith("6.01.01") and lvl == 3:
            return bool(re.search(r"deprec|amortiz|exaust", fold(r.get("DS_CONTA", ""))))
        return lvl <= 1 or (c.startswith("6.02.") and lvl == 2)
    return lvl <= 2


def load_fin(kind: str, year: int) -> dict:
    """{cnpj: {dt_refer: {"v": versão, "scale": x, "con": bool, "rows": {stmt: [linhas]}, "shares": {...}}}}"""
    url = f"{DADOS}/DOC/{kind.upper()}/DADOS/{kind}_cia_aberta_{year}.zip"
    data: dict = defaultdict(lambda: defaultdict(lambda: {"rows": defaultdict(list)}))
    try:
        for n, r in stream_rows(url, lambda n: any(f in n for f in FIN_FILES), fin_keep):
            cnpj, ref = r.get("CNPJ_CIA", ""), r.get("DT_REFER", "")
            slot = data[cnpj][ref]
            v = int(r.get("VERSAO") or 0)
            if "composicao" in n:
                slot["shares"] = {k: num(r.get(k)) for k in ("QT_ACAO_ORDIN_CAP_INTEGR", "QT_ACAO_PREF_CAP_INTEGR", "QT_ACAO_TOTAL_CAP_INTEGR",
                                                             "QT_ACAO_ORDIN_TESOURO", "QT_ACAO_PREF_TESOURO", "QT_ACAO_TOTAL_TESOURO")}
                continue
            if v > slot.get("v", 0):  # versão nova: descarta linhas das anteriores
                slot["v"] = v
                slot["rows"] = defaultdict(list)
            elif v < slot.get("v", 0):
                continue
            stmt = re.search(r"(DRE|BPA|BPP|DFC_MI)_(con|ind)", n)
            slot["rows"][f"{stmt[1]}_{stmt[2]}"].append(r)
    except Exception as exc:  # noqa: BLE001
        log(f"{kind.upper()} {year}: {exc}")
    log(f"{kind.upper()} {year}: {len(data)} companhias")
    return data


def statement(slot: dict, stmt: str) -> list[dict]:
    con = slot["rows"].get(f"{stmt}_con") or []
    return con if con else slot["rows"].get(f"{stmt}_ind") or []


def scale(r: dict) -> float:
    return 1000.0 if (r.get("ESCALA_MOEDA") or "").upper().startswith("MIL") else 1.0


def pick(rows: list[dict], test, ordem="ÚLTIMO", period=None) -> float | None:
    """Soma das contas que passam no teste, no exercício indicado (period = 'ytd' ou 'tri' para DRE e DFC)."""
    rows = [r for r in rows if r.get("ORDEM_EXERC") == ordem]
    if period and rows:
        inis = sorted({r.get("DT_INI_EXERC", "") for r in rows if r.get("DT_INI_EXERC")})
        target = inis[0] if period == "ytd" else inis[-1]
        rows = [r for r in rows if r.get("DT_INI_EXERC", "") == target]
    vals = [num(r.get("VL_CONTA")) * scale(r) for r in rows if test(r) and num(r.get("VL_CONTA")) is not None]
    return sum(vals) if vals else None


def is_code(c):
    return lambda r: r.get("CD_CONTA") == c


def ds_has(*words, lvl=None, prefix=""):
    def t(r):
        if lvl is not None and r.get("CD_CONTA", "").count(".") != lvl:
            return False
        if prefix and not r.get("CD_CONTA", "").startswith(prefix):
            return False
        d = fold(r.get("DS_CONTA", ""))
        return all(w in d for w in words)
    return t


def first(*vals):
    return next((v for v in vals if v is not None), None)


def metrics(slot: dict, ordem="ÚLTIMO", period=None) -> dict:
    """Números-chave de uma entrega (DFP: período = ano; ITR: 'ytd' acumulado ou 'tri' trimestre)."""
    dre, dfc = statement(slot, "DRE"), statement(slot, "DFC_MI")
    bpa, bpp = statement(slot, "BPA"), statement(slot, "BPP")
    m = {}
    m["rec"] = pick(dre, is_code("3.01"), ordem, period)
    m["ebit"] = pick(dre, ds_has("resultado antes do resultado financeiro", lvl=1), ordem, period)
    m["ll"] = first(pick(dre, ds_has("lucro/prejuizo consolidado do periodo", lvl=1), ordem, period),
                    pick(dre, ds_has("lucro/prejuizo do periodo", lvl=1), ordem, period))
    m["llc"] = first(pick(dre, ds_has("atribuido a socios da empresa controladora", lvl=2), ordem, period), m["ll"])
    m["fin"] = m["ebit"] is None and m["rec"] is not None
    if period != "tri":
        da = pick(dfc, lambda r: r.get("CD_CONTA", "").startswith("6.01.01") and r.get("CD_CONTA", "").count(".") == 3, ordem, period)
        m["da"] = abs(da) if da is not None else None
        m["fco"] = pick(dfc, is_code("6.01"), ordem, period)
        capex = pick(dfc, lambda r: r.get("CD_CONTA", "").startswith("6.02.") and re.search(r"imobilizad|intangiv", fold(r.get("DS_CONTA", "")))
                     and (num(r.get("VL_CONTA")) or 0) < 0, ordem, period)
        m["capex"] = abs(capex) if capex else None
        if m["ebit"] is not None and m["da"] is not None:
            m["ebitda"] = m["ebit"] + m["da"]
    if ordem == "ÚLTIMO" and period != "tri":
        m["at"] = pick(bpa, is_code("1"))
        m["pl"] = pick(bpp, ds_has("patrimonio liquido", lvl=1))
        m["plc"] = None
        if m["pl"] is not None:
            nc = pick(bpp, ds_has("participacao dos acionistas nao controladores", lvl=2))
            m["plc"] = m["pl"] - (nc or 0)
        if not m["fin"]:
            m["caixa"] = (pick(bpa, ds_has("caixa e equivalentes", lvl=2, prefix="1.01.")) or 0) + (pick(bpa, ds_has("aplicacoes financeiras", lvl=2, prefix="1.01.")) or 0)
            m["div"] = pick(bpp, ds_has("emprestimos e financiamentos", lvl=2))
            if m["div"] is not None:
                m["dl"] = m["div"] - (m["caixa"] or 0)
        else:
            m["caixa"] = pick(bpa, ds_has("caixa e equivalentes", lvl=1))
    return {k: (round(v) if isinstance(v, float) else v) for k, v in m.items() if v is not None}


def quarter_label(ref: str) -> str:
    q = (int(ref[5:7]) - 1) // 3 + 1
    return f"{q}T{ref[2:4]}"


def financials(cnpj: str, dfp: dict[int, dict], itr: dict[int, dict]) -> dict:
    annual = {}
    for y in sorted(dfp):
        for ref, slot in dfp[y].get(cnpj, {}).items():
            m = metrics(slot)
            if m.get("rec") is not None or m.get("at") is not None:
                annual[ref] = m
    itr_slots = {ref: slot for y in sorted(itr) for ref, slot in itr[y].get(cnpj, {}).items()}
    out: dict = {}
    if annual:
        out["anual"] = [{"ref": ref, **m} for ref, m in sorted(annual.items())]
    # trimestres: 3 meses de cada ITR; o 4º trimestre sai do anual menos o acumulado até setembro
    quarters = {}
    for ref, slot in sorted(itr_slots.items()):
        q = metrics(slot, period="tri")
        if q.get("rec") is not None or q.get("ll") is not None:
            quarters[ref] = {k: q.get(k) for k in ("rec", "ebit", "ll", "llc") if q.get(k) is not None}
    for ref, m in annual.items():
        q3 = next((s for r, s in itr_slots.items() if r[:4] == ref[:4] and r[5:7] == "09"), None)
        if q3:
            ytd = metrics(q3, period="ytd")
            q4 = {k: m[k] - ytd[k] for k in ("rec", "ebit", "ll", "llc") if m.get(k) is not None and ytd.get(k) is not None}
            if q4:
                quarters[ref] = q4
    if quarters:
        out["tri"] = [{"p": quarter_label(ref), "ref": ref, **v} for ref, v in sorted(quarters.items())[-10:]]
    # últimos 12 meses: anual + acumulado do ano − acumulado do ano anterior
    last_annual = max(annual) if annual else ""
    last_itr = max(itr_slots) if itr_slots else ""
    if last_itr and last_annual and last_itr > last_annual and int(last_annual[:4]) == int(last_itr[:4]) - 1:
        cur = metrics(itr_slots[last_itr], period="ytd")
        prev = metrics(itr_slots[last_itr], ordem="PENÚLTIMO", period="ytd")
        base = annual[last_annual]
        ltm = {"ref": last_itr, "fin": base.get("fin", False)}
        for k in ("rec", "ebit", "ebitda", "ll", "llc", "da", "fco", "capex"):
            if base.get(k) is not None and cur.get(k) is not None and prev.get(k) is not None:
                ltm[k] = base[k] + cur[k] - prev[k]
        for k in ("at", "pl", "plc", "caixa", "div", "dl"):
            if cur.get(k) is not None:
                ltm[k] = cur[k]
        out["ltm"] = ltm
    elif last_annual:
        out["ltm"] = {"ref": last_annual, **annual[last_annual]}
    # ações (composição do capital da entrega mais recente)
    for ref in sorted(list(itr_slots) + [r for y in dfp for r in dfp[y].get(cnpj, {})], reverse=True):
        slot = itr_slots.get(ref) or next((dfp[y][cnpj][ref] for y in dfp if ref in dfp[y].get(cnpj, {})), None)
        if slot and slot.get("shares"):
            s = slot["shares"]
            out["acoes"] = {"ref": ref, "on": s.get("QT_ACAO_ORDIN_CAP_INTEGR"), "pn": s.get("QT_ACAO_PREF_CAP_INTEGR"),
                            "tot": s.get("QT_ACAO_TOTAL_CAP_INTEGR"), "on_t": s.get("QT_ACAO_ORDIN_TESOURO"), "pn_t": s.get("QT_ACAO_PREF_TESOURO")}
            break
    return out


# ---------------------------------------------------------------- comandos

def cmd_base(args) -> None:
    if not args.force and fresh(PERFIS, 20):
        log("Base de perfis recente; nada a fazer (use --force para refazer).")
        return
    now = now_brt()
    years = [now.year, now.year - 1]
    fca_idx, fca = load_form("fca", years)
    fre_idx, fre = load_form("fre", years)
    dfp = {y: load_fin("dfp", y) for y in range(now.year - DFP_YEARS, now.year)}
    itr = {y: load_fin("itr", y) for y in (now.year - 1, now.year)}
    cnpjs = set(fca_idx) | set(fre_idx)
    for d in list(dfp.values()) + list(itr.values()):
        cnpjs |= set(d)
    # quem é acionista de quem (para "participações em companhias abertas")
    cnpj_code = {c: k[3] for c, k in {**fre_idx, **fca_idx}.items() if k[3]}
    holds: dict[str, list] = defaultdict(list)
    for cnpj, rows in fre.get("posicao_acionaria", {}).items():
        for r in rows:
            if r.get("ID_Acionista_Relacionado"):
                continue
            holder = re.sub(r"\D", "", r.get("CPF_CNPJ_Acionista", ""))
            if len(holder) == 14 and cnpj_code.get(cnpj):
                holds[holder].append({"k": cnpj_code[cnpj], "pct": num(r.get("Percentual_Total_Acoes_Circulacao")),
                                      "on": num(r.get("Percentual_Acao_Ordinaria_Circulacao")), "ctl": r.get("Acionista_Controlador") == "S"})
    perfis = {}
    for cnpj in cnpjs:
        k = (fre_idx.get(cnpj) or fca_idx.get(cnpj) or ("", 0, "", ""))[3]
        if not k:
            continue
        p = {"cnpj": cnpj}
        p.update(fca_profile(fca, cnpj))
        if cnpj in fre_idx:
            ref, ver, doc, _ = fre_idx[cnpj]
            p["fre"] = {"ref": ref, "v": ver, "doc": doc}
            p["acionistas"] = shareholders(fre.get("posicao_acionaria", {}).get(cnpj, []))
            p["adm"] = people(fre.get("administrador_membro_conselho_fiscal", {}).get(cnpj, []))
            p["comites"] = committees(fre.get("membro_comite", {}).get(cnpj, []))
            p["capital"] = capital(fre.get("capital_social", {}).get(cnpj, []))
            dist = (fre.get("distribuicao_capital", {}).get(cnpj) or [{}])[0]
            if dist:
                p["dispersao"] = {k2: v for k2, v in {
                    "pf": num(dist.get("Quantidade_Acionistas_PF")), "pj": num(dist.get("Quantidade_Acionistas_PJ")),
                    "inst": num(dist.get("Quantidade_Acionistas_Investidores_Institucionais")),
                    "ff": num(dist.get("Percentual_Total_Acoes_Circulacao")), "ff_on": num(dist.get("Percentual_Acoes_Ordinarias_Circulacao")),
                    "ff_pn": num(dist.get("Percentual_Acoes_Preferenciais_Circulacao")), "ago": dist.get("Data_Ultima_Assembleia", "")}.items() if v not in (None, "")}
            p["rem"] = remuneration(fre.get("remuneracao_total_orgao", {}).get(cnpj, []), fre.get("remuneracao_maxima_minima_media", {}).get(cnpj, []))
            p["empregados"] = employees(fre.get("empregado_posicao_local", {}).get(cnpj, []), fre.get("empregado_posicao_declaracao_genero", {}).get(cnpj, []))
            p["participacoes"] = stakes(fre.get("participacao_sociedade", {}).get(cnpj, []))
            p["titulos"] = securities(fre.get("outro_valor_mobiliario", {}).get(cnpj, []), fre.get("titulo_exterior", {}).get(cnpj, []))
            p["partes"] = related(fre.get("transacao_parte_relacionada", {}).get(cnpj, []))
            aud = [r for r in fre.get("auditor", {}).get(cnpj, []) if not r.get("Data_Fim_Contratacao")]
            if aud and "auditor" not in p:
                p["auditor"] = title(aud[-1].get("Auditor", ""))
        fin = financials(cnpj, dfp, itr)
        if fin:
            p["fin"] = fin
        own = holds.get(re.sub(r"\D", "", cnpj), [])
        if own:
            p["investe_em"] = sorted(own, key=lambda x: -(x["pct"] or 0))[:40]
        perfis[k] = {kk: v for kk, v in p.items() if v not in ("", None, [], {})}
    save_json(PERFIS, {"generated_at": now.isoformat(timespec="minutes"), "perfis": perfis}, compact=True)
    log(f"Perfis: {len(perfis)} companhias gravadas em {PERFIS}.")


def yahoo(tk: str) -> dict | None:
    try:
        raw = json.loads(get(YAHOO.format(t=urllib.parse.quote(tk)), timeout=20))
        res = raw["chart"]["result"][0]
    except Exception:  # noqa: BLE001
        return None
    q = res.get("indicators", {}).get("quote", [{}])[0]
    closes = q.get("close") or []
    vols = q.get("volume") or []
    ts = res.get("timestamp") or []
    pts = [(t, c, v or 0) for t, c, v in zip(ts, closes, vols + [0] * (len(closes) - len(vols))) if c]
    if not pts:
        return None
    meta = res.get("meta", {})
    last = meta.get("regularMarketPrice") or pts[-1][1]
    prev = pts[-2][1] if len(pts) > 1 else None
    first_ = pts[0][1]
    recent = pts[-63:]
    adv = sum(c * v for _, c, v in recent) / len(recent) if recent else 0
    week = pts[::5] + ([pts[-1]] if (len(pts) - 1) % 5 else [])
    return {"p": round(last, 2), "d1": round(100 * (last / prev - 1), 2) if prev else None, "y1": round(100 * (last / first_ - 1), 1),
            "hi": round(max(c for _, c, _ in pts), 2), "lo": round(min(c for _, c, _ in pts), 2), "adv": round(adv),
            "t": datetime.fromtimestamp(meta.get("regularMarketTime") or pts[-1][0], BRT).strftime("%Y-%m-%d %H:%M"),
            "s": [round(c, 2) for _, c, _ in week][-60:]}


def cmd_precos(args) -> None:
    if not args.force and fresh(PRECOS, 2):
        log("Cotações recentes; nada a fazer.")
        return
    perfis = load_json(PERFIS, {}).get("perfis", {})
    tks = sorted({v["tk"] for p in perfis.values() for v in p.get("vm", [])
                  if v.get("tk") and v.get("m") == "Bolsa" and re.fullmatch(r"[A-Z0-9]{4}(3|4|5|6|7|8|11)", v["tk"])})
    if not tks:
        log("Sem tickers (rode 'base' antes).")
        return
    t0 = time.time()
    with ThreadPoolExecutor(max_workers=12) as pool:
        res = dict(zip(tks, pool.map(yahoo, tks)))
    quotes = {t: q for t, q in res.items() if q}
    log(f"Cotações: {len(quotes)} de {len(tks)} tickers em {time.time() - t0:.0f}s.")
    if len(quotes) < len(tks) * 0.3 and fresh(PRECOS, 72):
        log("Muitas falhas; mantendo as cotações anteriores.")
        return
    save_json(PRECOS, {"generated_at": now_brt().isoformat(timespec="minutes"), "quotes": quotes}, compact=True)


OFERTA_TIPO = {"PRIMARIA": "Primária", "SECUNDARIA": "Secundária", "PRIMARIA E SECUNDARIA": "Primária e secundária", "MISTA": "Primária e secundária"}
OFERTA_TIPOS_FORA = ("cotas de", "cota de", "certificado de recebíveis imobiliários", "certificado de recebíveis do agronegócio",
                     "certificados de recebíveis", "cri", "cra", "fidc", "fii", "fiagro")


def cmd_ofertas(args) -> None:
    if not args.force and fresh(OFERTAS_BASE, 20):
        log("Ofertas recentes; nada a fazer.")
        return
    since = (now_brt() - timedelta(days=550)).strftime("%Y-%m-%d")
    rows = zip_rows(OFERTAS_URL, lambda n: "160" in n).popitem()[1]
    out = []
    for r in rows:
        d = (r.get("Data_Registro") or r.get("Data_requerimento") or "")[:10]
        vm = (r.get("Valor_Mobiliario") or "").strip()
        if d < since or any(fold(vm).startswith(fold(x)) for x in OFERTA_TIPOS_FORA) or re.match(r"(?i)cotas?\b", vm):
            continue
        out.append({k: v for k, v in {
            "id": r.get("Numero_Requerimento", ""), "d": d, "fim": (r.get("Data_Encerramento") or "")[:10], "st": r.get("Status_Requerimento", ""),
            "vm": vm, "tipo": OFERTA_TIPO.get((r.get("Tipo_Oferta") or "").upper(), (r.get("Tipo_Oferta") or "").capitalize()),
            "rito": r.get("Rito_Requerimento", ""),
            "cnpj": r.get("CNPJ_Emissor", ""), "em": title(r.get("Nome_Emissor", "")), "lider": title(r.get("Nome_Lider", "")),
            "coord": cut(r.get("Grupo_Coordenador", ""), 300), "emissao": r.get("Emissao", ""), "v": num(r.get("Valor_Total_Registrado")),
            "pub": r.get("Publico_alvo", ""), "reg": r.get("Regime_distribuicao", ""), "bb": r.get("Bookbuilding") == "S",
            "sust": r.get("Titulo_classificado_como_sustentavel") == "S", "inc": r.get("Titulo_incentivado") == "S",
            "dest": cut(r.get("Destinacao_recursos", ""), 260), "gar": cut(r.get("Descricao_garantias", ""), 200),
            "af": r.get("Agente_fiduciario", ""), "proc": r.get("Numero_Processo", ""),
        }.items() if v not in ("", None, False)})
    out.sort(key=lambda o: o["d"], reverse=True)
    save_json(OFERTAS_BASE, {"generated_at": now_brt().isoformat(timespec="minutes"), "ofertas": out}, compact=True)
    log(f"Ofertas: {len(out)} desde {since}.")


# ---------------------------------------------------------------- montar: liga notícias, deals e leads às companhias

GENERIC = {"brasil", "banco", "grupo", "holding", "companhia", "cia", "energia", "petroleo", "mineracao", "saude", "educacao", "seguros",
           "participacoes", "industria", "comercio", "servicos", "investimentos", "capital", "tecnologia", "logistica", "transportes",
           "alimentos", "construtora", "incorporadora", "brasileira", "nacional", "geral", "global", "the", "new", "nova", "vale do",
           "pan", "inter", "even", "gol", "oi", "log", "mega", "light", "porto", "tim", "kora", "wiz", "smart", "bom", "boa", "rede",
           "lojas", "casa", "casas", "eletro", "auto", "agro", "hotel", "mercado", "estado", "uniao", "federal", "governo",
           "mundial", "central", "real", "progresso", "alianca", "vitoria", "futuro", "sul", "norte", "nordeste", "oeste", "leste",
           "atlantico", "america", "american", "imperial", "cristal", "estrela", "fortaleza", "paulista", "bahia", "minas", "rio",
           "sao paulo", "santos", "mercantil", "popular", "comercial", "industrial", "financeira", "amazonia", "continental",
           "standard", "alfa", "beta", "omega", "delta", "sigma", "alpha", "prime", "master", "atlas", "titan", "unica", "uniao federal",
           "brasil", "brazil", "ponto", "via", "bolsa", "credores", "justica", "fundo", "fundos", "investidores", "acionistas"}
SUFFIX = re.compile(r"\b(s\.?/?a\.?|s/a|sa|ltda\.?|cia\.?|companhia|participa[cç][oõ]es|holding|em recupera[cç][aã]o judicial|"
                    r"em recupera[cç][aã]o extrajudicial|-\s*em rj|em liquida[cç][aã]o|brasil(eira)?\s*$)\b", re.I)


def norm_name(s: str) -> str:
    s = fold(s)
    s = re.sub(r"[\"'“”‘’()]", " ", s)
    s = SUFFIX.sub(" ", s)
    s = re.sub(r"[^a-z0-9&+ .-]", " ", s)
    return re.sub(r"\s+", " ", s).strip(" .-")


CURATED: set[str] = set()


def build_aliases(companies: list[dict], curated: dict) -> dict[str, str]:
    """nome normalizado → código CVM. Curados (config/aliases.json, por raiz do ticker) têm prioridade."""
    alias: dict[str, str] = {}
    by_root: dict[str, str] = {}
    weight = {c["k"]: (len(c.get("tk", [])) > 0, c.get("n12", 0)) for c in companies}
    for c in companies:
        for tk in c.get("tk", []):
            by_root.setdefault(tk[:4], c["k"])
            if weight[c["k"]] > weight.get(by_root[tk[:4]], (False, 0)):
                by_root[tk[:4]] = c["k"]
    for c in sorted(companies, key=lambda c: weight[c["k"]]):  # as mais relevantes sobrescrevem
        for name in (c.get("nc"), c.get("n")):
            a = norm_name(name or "")
            if len(a) >= 4 and a not in GENERIC and not a.isdigit():
                alias[a] = c["k"]
        for tk in c.get("tk", []):
            alias[fold(tk)] = c["k"]
    for root, names in curated.items():
        k = by_root.get(root.upper())
        if k:
            for n in names:
                alias[norm_name(n)] = k
                CURATED.add(norm_name(n))
    return alias


def match_company(text: str, alias: dict[str, str], entity: bool) -> str | None:
    """Entidade ('Casas Bahia', 'Petrobras S.A.') ou nome livre → código CVM."""
    a = norm_name(text)
    if not a:
        return None
    if a in alias:
        return alias[a]
    if entity:
        words = a.split(" ")
        for n in range(len(words) - 1, 0, -1):  # 'credores da braskem' → 'braskem'; 'grupo casas bahia' → 'casas bahia'
            for cand in (" ".join(words[:n]), " ".join(words[-n:])):
                if cand in GENERIC or cand not in alias:
                    continue
                if " " in cand or cand in CURATED:  # uma palavra só vale se for apelido curado (evita 'american', 'mundial')
                    return alias[cand]
    return None


TICKER_RE = re.compile(r"\b([A-Z]{4}(?:3|4|5|6|11))\b")


def item_companies(it: dict, alias: dict[str, str]) -> set[str]:
    ks = set()
    for e in it.get("entities") or []:
        k = match_company(e, alias, True)
        if k:
            ks.add(k)
    deal = it.get("deal") or {}
    for f in ("buyer", "target"):
        for piece in re.split(r"\s*[/,;]\s*|\s+e\s+", deal.get(f) or ""):
            k = match_company(piece, alias, True)
            if k:
                ks.add(k)
    lead = it.get("lead") or {}
    if lead.get("company"):
        k = match_company(lead["company"], alias, True)
        if k:
            ks.add(k)
    for tk in TICKER_RE.findall(f"{it.get('title', '')} {it.get('headline', '')} {it.get('snippet', '')}"):
        k = alias.get(fold(tk))
        if k:
            ks.add(k)
    return ks


def cmd_montar(args) -> None:
    idx = load_json(OUT / "index.json", None)
    if not idx:
        log("Sem data/cias/index.json (rode cias.py build antes).")
        return
    companies = idx["companies"]
    by_k = {c["k"]: c for c in companies}
    perfis = load_json(PERFIS, {}).get("perfis", {})
    quotes = load_json(PRECOS, {}).get("quotes", {})
    ofertas = load_json(OFERTAS_BASE, {}).get("ofertas", [])
    curated = load_json(ALIASES, {})
    alias = build_aliases(companies, {k: v for k, v in curated.items() if not k.startswith("_")})
    cnpj_k = {re.sub(r"\D", "", c.get("cnpj", "")): c["k"] for c in companies if c.get("cnpj")}

    # notícias do arquivo (cada edição) e da edição atual
    news: dict[str, list] = defaultdict(list)
    seen_ids: set[str] = set()
    files = sorted(ARCHIVE.glob("20*.json"), reverse=True)
    for f in files:
        ed = load_json(f, {})
        for it in ed.get("items", []):
            if it["id"] in seen_ids or it.get("dup_of"):
                continue
            seen_ids.add(it["id"])
            for k in item_companies(it, alias):
                src = (it.get("outlets") or [{}])[0]
                news[k].append({k2: v for k2, v in {
                    "id": it["id"], "d": ed.get("date") or it.get("published", "")[:10], "h": it.get("headline") or it.get("title"),
                    "s": src.get("source", ""), "l": src.get("link") or it.get("link"), "imp": it.get("importance"), "cat": it.get("category"),
                    "sum": cut(it.get("summary", ""), 280), "deal": bool(it.get("is_deal")), "sent": it.get("sentiment", "")}.items() if v not in ("", None, False)})
    # deals e leads
    deals_db = load_json(DATA / "deals_db.json", {}).get("deals", {})
    deals: dict[str, list] = defaultdict(list)
    for d in deals_db.values():
        for role, f in (("comprador", "buyer"), ("alvo", "target")):
            for piece in re.split(r"\s*[/,;]\s*|\s+e\s+", d.get(f) or ""):
                k = match_company(piece, alias, True)
                if k and not any(x["key"] == d["key"] for x in deals[k]):
                    deals[k].append({"key": d["key"], "papel": role, "tipo": d.get("type"), "comprador": d.get("buyer"), "alvo": d.get("target"),
                                     "valor": d.get("value"), "estagio": d.get("stage"), "setor": d.get("sector"), "assessores": d.get("advisors"),
                                     "desde": d.get("first_seen"), "ate": d.get("last_seen"), "h": d.get("headline"), "l": d.get("link"),
                                     "imp": d.get("importance"), "tl": [{"d": t.get("date"), "e": t.get("stage")} for t in d.get("timeline", [])][-6:]})
    leads_db = load_json(DATA / "leads_db.json", {}).get("leads", {})
    leads: dict[str, list] = defaultdict(list)
    for lead in leads_db.values():
        k = match_company(lead.get("company", ""), alias, True)
        if k:
            leads[k].append({"key": lead["key"], "sinal": lead.get("signal"), "status": lead.get("status"), "por_que": lead.get("why"),
                             "contraparte": lead.get("counterparty"), "assessores": lead.get("advisors"), "desde": lead.get("first_seen"),
                             "ate": lead.get("last_seen")})
    # ofertas por emissor
    of_k: dict[str, list] = defaultdict(list)
    for o in ofertas:
        k = cnpj_k.get(re.sub(r"\D", "", o.get("cnpj", "")))
        if k:
            o["k"] = k
            of_k[k].append(o)

    # perfil de cada companhia
    perfil_dir = OUT / "perfil"
    if perfil_dir.exists():
        for p in perfil_dir.glob("*.json"):
            p.unlink()
    resumo = {}
    for k, c in by_k.items():
        p = dict(perfis.get(k, {}))
        q = {tk: quotes[tk] for tk in c.get("tk", []) if tk in quotes}
        mkt = market_value(p, q)
        if q:
            p["cotacoes"] = q
        if mkt:
            p["mercado"] = mkt
        for key, src in (("noticias", news), ("deals", deals), ("leads", leads), ("ofertas", of_k)):
            if src.get(k):
                p[key] = src[k][:80] if key != "noticias" else sorted(src[k], key=lambda x: x["d"], reverse=True)[:80]
        if not p:
            continue
        p["nm"] = next((curated[tk[:4]][0] for tk in c.get("tk", []) if tk[:4] in curated), None) or title(c.get("nc") or c.get("n") or "")
        save_json(perfil_dir / f"{k}.json", p, compact=True)
        ltm = p.get("fin", {}).get("ltm", {})
        main_tk = mkt.get("tk") if mkt else None
        nm = next((curated[tk[:4]][0] for tk in c.get("tk", []) if tk[:4] in curated), None) or title(c.get("nc") or c.get("n") or "")
        r = {"nm": nm, "mc": mkt.get("mc") if mkt else None, "tk": main_tk, "p": q.get(main_tk, {}).get("p") if main_tk else None,
             "d1": q.get(main_tk, {}).get("d1") if main_tk else None, "y1": q.get(main_tk, {}).get("y1") if main_tk else None,
             "rec": ltm.get("rec"), "ll": ltm.get("llc", ltm.get("ll")), "nn": len(news.get(k, [])), "nd": len(deals.get(k, [])),
             "nl": len(leads.get(k, [])), "no": len(of_k.get(k, [])),
             "ctl": next((s["n"] for s in p.get("acionistas", []) if s.get("ctl")), None),
             "ceo": next((a["n"] for a in p.get("adm", []) if re.search(r"diretor presidente|presidente / superintendente|\bceo\b", fold(a.get("c", "") + " " + a.get("f", "")))), None)}
        r = {k2: v for k2, v in r.items() if v not in (None, 0, "")}
        if r:
            resumo[k] = r
    save_json(OUT / "resumo.json", {"generated_at": now_brt().isoformat(timespec="minutes"), "cias": resumo}, compact=True)
    save_json(OUT / "alias.json", alias, compact=True)

    # ofertas dos últimos 12 meses (aba Ofertas)
    year_ago = (now_brt() - timedelta(days=366)).strftime("%Y-%m-%d")
    save_json(OUT / "ofertas.json", {"generated_at": load_json(OFERTAS_BASE, {}).get("generated_at"),
                                     "ofertas": [o for o in ofertas if o["d"] >= year_ago]}, compact=True)
    build_agenda(by_k, perfis)
    log(f"Montado: {len(resumo)} resumos, {sum(map(len, news.values()))} vínculos de notícias, "
        f"{sum(map(len, deals.values()))} de deals, {sum(map(len, leads.values()))} de leads, {sum(map(len, of_k.values()))} de ofertas; "
        f"{len(alias)} apelidos.")


def market_value(p: dict, q: dict) -> dict:
    """Valor de mercado = ações ON × cotação ON + ações PN × cotação PN (sem tesouraria). Sem cotação de uma
    classe, usa a da outra; só com unit, usa a composição da unit.

    A quantidade de ações vem preferencialmente do Formulário de Referência: a composição do capital da DFP/ITR
    chega em escalas erradas em parte das companhias (10×, 100× ou 1.000×). Entre as candidatas, fica a primeira
    que dá um preço sobre valor patrimonial plausível."""
    import math
    if not q:
        return {}
    acoes = (p.get("fin") or {}).get("acoes") or {}
    cap = p.get("capital") or {}
    fin = (p.get("fin") or {}).get("ltm") or {}
    px_on = next((q[t]["p"] for t in q if t.endswith("3")), None)
    px_pn = next((q[t]["p"] for t in sorted(q) if t[-1] in "4567"), None)
    unit = next((t for t in q if t.endswith("11")), None)
    if px_on is None and px_pn is None and unit:
        comp = next((v.get("u", "") for v in p.get("vm", []) if v.get("tk") == unit), "")
        n_on = sum(int(x) for x in re.findall(r"(\d+)\s*(?:a[cç][oõ]es?\s*)?(?:ordin|ON)", comp, re.I)) or 0
        n_pn = sum(int(x) for x in re.findall(r"(\d+)\s*(?:a[cç][oõ]es?\s*)?(?:prefer|PN)", comp, re.I)) or 0
        if n_on + n_pn:
            px_on = px_pn = q[unit]["p"] / (n_on + n_pn)
    px_on = px_on if px_on is not None else px_pn
    px_pn = px_pn if px_pn is not None else px_on
    if px_on is None:
        return {}
    tre_on, tre_pn = acoes.get("on_t") or 0, acoes.get("pn_t") or 0
    comp_tot = acoes.get("tot") or 0
    cands = []
    if cap.get("on") or cap.get("pn"):
        # tesouraria vem da DFP/ITR: ajusta à escala do Formulário de Referência
        f = 10 ** round(math.log10(cap["total"] / comp_tot)) if cap.get("total") and comp_tot else 1
        cands.append(((cap.get("on") or 0) - tre_on * f, (cap.get("pn") or 0) - tre_pn * f))
    if acoes.get("on") or acoes.get("pn"):
        for sc in (1, 1000):
            cands.append((((acoes.get("on") or 0) - tre_on) * sc, ((acoes.get("pn") or 0) - tre_pn) * sc))
    book = fin.get("plc") or fin.get("pl")
    chosen = None
    for on_n, pn_n in cands:
        mc = max(0, on_n) * px_on + max(0, pn_n) * px_pn
        if mc <= 0:
            continue
        if not book or book <= 0:
            chosen = (mc, on_n, pn_n)
            break
        if 0.15 <= mc / book <= 15:
            chosen = (mc, on_n, pn_n)
            break
    if not chosen:
        return {}
    mc, on_n, pn_n = chosen
    main = (sorted(q, key=lambda t: -q[t].get("adv", 0)) or [None])[0]
    out = {"mc": round(mc), "tk": main, "acoes": round(max(0, on_n) + max(0, pn_n)), "ref": max((x.get("t", "") for x in q.values()), default="")}
    if not fin.get("fin") and fin.get("dl") is not None:
        out["ev"] = round(mc + fin["dl"])
        if fin.get("ebitda") and fin["ebitda"] > 0:
            out["ev_ebitda"] = round(out["ev"] / fin["ebitda"], 1)
    ll = fin.get("llc", fin.get("ll"))
    if ll and ll > 0:
        out["pl"] = round(mc / ll, 1)
    if fin.get("plc") and fin["plc"] > 0:
        out["pvp"] = round(mc / fin["plc"], 2)
    return out


def build_agenda(by_k: dict, perfis: dict) -> None:
    """Assembleias convocadas (pelos editais entregues à CVM) e vencimentos de dívida dos próximos 6 meses."""
    today = now_brt().strftime("%Y-%m-%d")
    horizon = (now_brt() + timedelta(days=183)).strftime("%Y-%m-%d")
    events = []
    for f in sorted((OUT / "mes").glob("*.json"))[-3:]:
        for d in load_json(f, []):
            if d.get("c") != "Assembleia" or not d.get("r") or d["r"] < today:
                continue
            c = by_k.get(d["k"])
            if not c or not c.get("tk"):
                continue
            events.append({"tipo": "assembleia", "data": d["r"], "k": d["k"], "n": c.get("nc") or c["n"], "t": d.get("t", ""),
                           "e": d.get("e", ""), "s": d.get("s", ""), "id": d["id"], "q": d.get("q", "")})
    # um evento por companhia, data e tipo de assembleia (edital, proposta, mapa de votação viram uma linha)
    uniq = {}
    for e in sorted(events, key=lambda e: (e["e"] != "Edital de Convocação", e["id"])):
        uniq.setdefault((e["k"], e["data"], e["t"]), e)
    venc = []
    for k, p in perfis.items():
        c = by_k.get(k)
        if not c or not c.get("tk"):
            continue
        for t in p.get("titulos", []):
            if today <= t.get("vc", "") <= horizon and (t.get("s") or t.get("v") or 0) >= 50e6:
                venc.append({"tipo": "vencimento", "data": t["vc"], "k": k, "n": c.get("nc") or c["n"], "t": t.get("t", ""), "s": t.get("id", ""),
                             "v": t.get("s") or t.get("v")})
    save_json(OUT / "agenda.json", {"generated_at": now_brt().isoformat(timespec="minutes"),
                                    "eventos": sorted(list(uniq.values()) + venc, key=lambda e: (e["data"], e["n"]))}, compact=True)


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    for name, fn in (("base", cmd_base), ("precos", cmd_precos), ("ofertas", cmd_ofertas), ("montar", cmd_montar)):
        p = sub.add_parser(name)
        p.add_argument("--force", action="store_true")
        p.set_defaults(fn=fn)
    args = ap.parse_args()
    args.fn(args)


if __name__ == "__main__":
    sys.exit(main())
