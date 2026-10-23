"""Sonda temporária: estrutura dos dados abertos da CVM e das cotações."""
import csv
import io
import json
import time
import urllib.request
import zipfile

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36"
D = "https://dados.cvm.gov.br/dados"
PETRO, VALE, ITAU = "33.000.167/0001-01", "33.592.510/0001-54", "60.872.504/0001-23"


def get(url, timeout=300):
    t = time.time()
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        b = r.read()
    print(f"\n#### GET {url} -> {len(b)/1e6:.1f} MB em {time.time()-t:.0f}s")
    return b


def show_zip(url, cnpjs=(PETRO,), max_rows=4, only=None, full_for=()):
    try:
        raw = get(url)
    except Exception as e:  # noqa: BLE001
        print("ERRO", url, e)
        return
    with zipfile.ZipFile(io.BytesIO(raw)) as z:
        for n in z.namelist():
            info = z.getinfo(n)
            print(f"\n== {n} ({info.file_size/1e6:.1f} MB)")
            if only and not any(o in n for o in only):
                continue
            text = z.read(n).decode("latin-1")
            rows = list(csv.DictReader(io.StringIO(text), delimiter=";"))
            print("colunas:", list(rows[0].keys()) if rows else "vazio", "| linhas:", len(rows))
            mine = [r for r in rows if r.get("CNPJ_Companhia", r.get("CNPJ_CIA")) in cnpjs]
            lim = 400 if any(f in n for f in full_for) else max_rows
            for r in (mine or rows)[:lim]:
                print(json.dumps({k: (v[:160] if isinstance(v, str) else v) for k, v in r.items()}, ensure_ascii=False))


print("######## FRE 2026")
show_zip(f"{D}/CIA_ABERTA/DOC/FRE/DADOS/fre_cia_aberta_2026.zip", (PETRO, VALE), max_rows=6,
         full_for=("posicao_acionaria_2026", "administrador", "capital_social_2026", "participacao", "controlad"))
print("######## FCA 2026")
show_zip(f"{D}/CIA_ABERTA/DOC/FCA/DADOS/fca_cia_aberta_2026.zip", (PETRO,), max_rows=3)
print("######## ITR 2026")
show_zip(f"{D}/CIA_ABERTA/DOC/ITR/DADOS/itr_cia_aberta_2026.zip", (PETRO, ITAU), max_rows=3,
         only=("composicao_capital", "DRE_con", "BPP_con", "itr_cia_aberta_2026.csv"), full_for=("composicao_capital", "DRE_con"))
print("######## DFP 2025")
show_zip(f"{D}/CIA_ABERTA/DOC/DFP/DADOS/dfp_cia_aberta_2025.zip", (PETRO, ITAU), max_rows=3,
         only=("DRE_con", "BPA_con", "BPP_con", "DFC_MI_con", "composicao"), full_for=("DRE_con", "DFC_MI_con", "BPP_con", "BPA_con"))

print("######## OFERTAS")
for u in (f"{D}/OFERTA/DISTRIB/DADOS/oferta_distribuicao.zip", f"{D}/OFERTA/DISTRIB/DADOS/oferta_distribuicao.csv",
          f"{D}/OFERTA/DISTRIB/DADOS/"):
    try:
        b = get(u)
        if u.endswith(".zip"):
            with zipfile.ZipFile(io.BytesIO(b)) as z:
                for n in z.namelist():
                    text = z.read(n).decode("latin-1")
                    rows = list(csv.DictReader(io.StringIO(text), delimiter=";"))
                    print(n, "colunas:", list(rows[0].keys()) if rows else "", "linhas:", len(rows))
                    rows.sort(key=lambda r: r.get("Data_Registro_Oferta", r.get("Data_Abertura_Processo", "")), reverse=True)
                    for r in rows[:5]:
                        print(json.dumps(r, ensure_ascii=False)[:1500])
        else:
            print(b[:3000].decode("latin-1"))
    except Exception as e:  # noqa: BLE001
        print("ERRO", u, e)

print("######## YAHOO")
for u in ("https://query1.finance.yahoo.com/v8/finance/chart/PETR4.SA?range=1y&interval=1wk",
          "https://query1.finance.yahoo.com/v7/finance/quote?symbols=PETR4.SA,VALE3.SA",
          "https://query2.finance.yahoo.com/v10/finance/quoteSummary/PETR4.SA?modules=price,summaryDetail,assetProfile",
          "https://brapi.dev/api/quote/PETR4"):
    try:
        print(get(u, 60)[:1500].decode("utf-8", "replace"))
    except Exception as e:  # noqa: BLE001
        print("ERRO", u, e)

print("######## BCB / outros")
for u in ("https://www.bcb.gov.br/api/servico/sitebcb/copom/agenda?quantidade=10",
          "https://www.bcb.gov.br/api/servico/sitebcb/agendadiretoria?quantidade=3",
          "https://dados.cvm.gov.br/dados/CIA_ABERTA/DOC/"):
    try:
        print(get(u, 60)[:2500].decode("utf-8", "replace"))
    except Exception as e:  # noqa: BLE001
        print("ERRO", u, e)
