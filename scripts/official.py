"""Fontes oficiais e públicas: CVM (fatos relevantes), Diário Oficial (atos do Cade) e Banco Central.

Tudo aqui é tolerante a falhas: se uma fonte não responder, a função devolve vazio e um status de erro,
e o resto do portal segue normalmente.
"""
from __future__ import annotations

import csv
import io
import json
import re
import urllib.parse
import urllib.request
import zipfile
from datetime import date, datetime, timedelta

UA = "Mozilla/5.0 (compatible; PortalFPM/1.0)"

# Palavras que tornam um "Comunicado ao Mercado" relevante para M&A e mercado de capitais.
CVM_KEYWORDS = re.compile(
    r"aquisi|incorpora|fus[aã]o|cis[aã]o|aliena|venda|compra|opa|oferta|deb[eê]nture|emiss[aã]o|"
    r"reestrutura|recupera[cç][aã]o judicial|controle|participa[cç][aã]o|joint|parceria|cade|"
    r"acordo de investimento|combina[cç][aã]o de neg[oó]cios|fechamento de capital|cancelamento de registro",
    re.I,
)


def _get(url: str, timeout: int = 60) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


# ---------------------------------------------------------------- CVM: fatos relevantes e comunicados

def cvm_filings(day: date) -> tuple[list[dict], str | None]:
    """Fatos relevantes (todos) e comunicados ao mercado ligados a M&A/ECM entregues à CVM em `day`.
    Fonte: dados abertos da CVM, conjunto IPE (informações periódicas e eventuais) do ano."""
    year = day.year
    base = f"https://dados.cvm.gov.br/dados/CIA_ABERTA/DOC/IPE/DADOS/ipe_cia_aberta_{year}"
    try:
        try:
            raw = _get(base + ".zip", timeout=120)
            with zipfile.ZipFile(io.BytesIO(raw)) as z:
                name = next(n for n in z.namelist() if n.lower().endswith(".csv"))
                text = z.read(name).decode("latin-1")
        except Exception:  # noqa: BLE001 - alguns anos são publicados só em CSV
            text = _get(base + ".csv", timeout=120).decode("latin-1")
    except Exception as exc:  # noqa: BLE001
        return [], f"{type(exc).__name__}: {exc}"

    out, seen = [], set()
    target = day.isoformat()
    for row in csv.DictReader(io.StringIO(text), delimiter=";"):
        if row.get("Data_Entrega", "")[:10] != target:
            continue
        cat = row.get("Categoria", "")
        assunto = row.get("Assunto", "") or row.get("Tipo", "")
        is_fato = cat.lower().startswith("fato relevante")
        if not (is_fato or (cat.lower().startswith("comunicado ao mercado") and CVM_KEYWORDS.search(assunto))):
            continue
        key = (row.get("Nome_Companhia"), assunto)
        if key in seen:  # reapresentações (versões) do mesmo documento
            continue
        seen.add(key)
        out.append({
            "kind": "Fato relevante" if is_fato else "Comunicado ao mercado",
            "company": (row.get("Nome_Companhia") or "").strip(),
            "subject": assunto.strip(),
            "date": target,
            "link": row.get("Link_Download", ""),
        })
    out.sort(key=lambda r: (r["kind"] != "Fato relevante", r["company"]))
    return out, None


# ---------------------------------------------------------------- Diário Oficial: atos do Cade

def dou_cade(day: date) -> tuple[list[dict], str | None]:
    """Publicações do Cade no Diário Oficial do dia (seções 1 e 3): notificações de atos de concentração,
    aprovações e outras decisões. Fonte: leitura do jornal no portal da Imprensa Nacional."""
    out, errors, seen = [], [], set()
    for secao in ("do1", "do3"):
        url = f"https://www.in.gov.br/leiturajornal?data={day:%d-%m-%Y}&secao={secao}"
        try:
            page = _get(url).decode("utf-8", "replace")
            m = re.search(r'<script id="params" type="application/json">\s*(\{.*?\})\s*</script>', page, re.S)
            if not m:
                errors.append(f"{secao}: formato inesperado")
                continue
            for art in json.loads(m.group(1)).get("jsonArray", []):
                hier = art.get("hierarchyStr", "") or ""
                if "Defesa Econ" not in hier:
                    continue
                text = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", art.get("content", "") or "")).strip()
                title = (art.get("title") or art.get("titulo") or "").strip()
                blob = f"{title} {text}".lower()
                if not any(k in blob for k in ("ato de concentra", "concentração econômica", "aprovação", "aprova")):
                    continue
                if art.get("urlTitle") in seen:
                    continue
                seen.add(art.get("urlTitle"))
                out.append({
                    "kind": "Ato de concentração" if "ato de concentra" in blob else "Decisão do Cade",
                    "title": title,
                    "summary": text[:500],
                    "date": day.isoformat(),
                    "section": secao.upper(),
                    "link": f"https://www.in.gov.br/web/dou/-/{art.get('urlTitle', '')}",
                })
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{secao}: {type(exc).__name__}: {exc}")
    return out, ("; ".join(errors) or None) if not out else None


# ---------------------------------------------------------------- Banco Central: Selic, IPCA e Focus

def _sgs_last(code: int) -> dict | None:
    data = json.loads(_get(f"https://api.bcb.gov.br/dados/serie/bcdata.sgs.{code}/dados/ultimos/1?formato=json", 30))
    if not data:
        return None
    return {"value": float(str(data[-1]["valor"]).replace(",", ".")), "date": data[-1]["data"]}


def _focus(indicator: str, years: list[int]) -> dict:
    flt = f"Indicador eq '{indicator}' and baseCalculo eq 0"
    q = urllib.parse.urlencode({"$filter": flt, "$orderby": "Data desc", "$top": "40", "$format": "json",
                                "$select": "Indicador,Data,DataReferencia,Mediana"}, quote_via=urllib.parse.quote)
    rows = json.loads(_get("https://olinda.bcb.gov.br/olinda/servico/Expectativas/versao/v1/odata/"
                           f"ExpectativasMercadoAnuais?{q}", 30)).get("value", [])
    if not rows:
        return {}
    latest = rows[0]["Data"]
    return {"date": latest, **{str(y): r["Mediana"] for y in years for r in rows
                               if r["Data"] == latest and str(r["DataReferencia"]) == str(y)}}


def bcb_macro(today: date) -> tuple[dict, str | None]:
    out, errors = {}, []
    for name, code in (("selic_meta", 432), ("ipca_12m", 13522)):
        try:
            out[name] = _sgs_last(code)
        except Exception as exc:  # noqa: BLE001
            errors.append(f"SGS {code}: {type(exc).__name__}")
    years = [today.year, today.year + 1]
    focus = {}
    for key, ind in (("ipca", "IPCA"), ("selic", "Selic"), ("pib", "PIB Total"), ("cambio", "Câmbio")):
        try:
            focus[key] = _focus(ind, years)
        except Exception as exc:  # noqa: BLE001
            errors.append(f"Focus {ind}: {type(exc).__name__}")
    if focus:
        out["focus"] = {"years": [str(y) for y in years], **focus}
    return out, ("; ".join(errors) or None)


def collect_official(edition_date: date) -> tuple[dict, list[dict]]:
    """Coleta tudo o que pertence à edição: CVM do dia anterior (dia de entrega completo) e DOU do dia da edição."""
    status = []
    fatos, err = cvm_filings(edition_date - timedelta(days=1))
    status.append({"id": "cvm-ipe", "name": "CVM (fatos relevantes)", "ok": err is None, "count": len(fatos), "error": err})
    cade, err = dou_cade(edition_date)
    status.append({"id": "dou-cade", "name": "Diário Oficial (Cade)", "ok": err is None, "count": len(cade), "error": err})
    macro, err = bcb_macro(edition_date)
    status.append({"id": "bcb", "name": "Banco Central (Selic, IPCA, Focus)", "ok": err is None,
                   "count": len(macro), "error": err})
    return {"filings": fatos, "cade": cade, "macro": macro,
            "fetched_at": datetime.now().isoformat(timespec="minutes")}, status
