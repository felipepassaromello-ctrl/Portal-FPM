"""Teste temporário das fontes da CVM para a base de companhias."""
import csv, io, json, re, sys, zipfile, urllib.request, collections
sys.path.insert(0, "scripts")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36"
def get(u, t=120):
    return urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": UA}), timeout=t).read()
def csvzip(raw, want=None):
    z = zipfile.ZipFile(io.BytesIO(raw))
    print("  zip:", z.namelist()[:20])
    return z
# Cadastro
raw = get("https://dados.cvm.gov.br/dados/CIA_ABERTA/CAD/DADOS/cad_cia_aberta.csv").decode("latin-1")
rows = list(csv.DictReader(io.StringIO(raw), delimiter=";"))
print("CAD cols:", list(rows[0].keys())); print("CAD n:", len(rows), collections.Counter(r["SIT"] for r in rows))
print("CAD ex:", {k: v for k, v in rows[0].items() if v}[:0] if False else json.dumps(next(r for r in rows if r["SIT"]=="ATIVO"), ensure_ascii=False)[:1500])
# IPE
raw = get("https://dados.cvm.gov.br/dados/CIA_ABERTA/DOC/IPE/DADOS/ipe_cia_aberta_2026.zip")
print("IPE zip bytes", len(raw)); z = csvzip(raw)
t = z.read(z.namelist()[0]).decode("latin-1"); ipe = list(csv.DictReader(io.StringIO(t), delimiter=";"))
print("IPE cols:", list(ipe[0].keys()), "n:", len(ipe))
print("IPE ex:", json.dumps(ipe[-1], ensure_ascii=False))
print("IPE cats:", collections.Counter(r["Categoria"] for r in ipe).most_common(40))
print("IPE max entrega:", max(r["Data_Entrega"] for r in ipe))
print("cias distintas:", len({r["Codigo_CVM"] for r in ipe}))
# FCA valores mobiliários
try:
    raw = get("https://dados.cvm.gov.br/dados/CIA_ABERTA/DOC/FCA/DADOS/fca_cia_aberta_2026.zip")
    print("FCA bytes", len(raw)); z = csvzip(raw)
    for n in z.namelist():
        if "valor_mobiliario" in n or "geral" in n:
            t = z.read(n).decode("latin-1"); rr = list(csv.DictReader(io.StringIO(t), delimiter=";"))
            print(n, "cols:", list(rr[0].keys()), "n:", len(rr)); print("  ex:", json.dumps(rr[0], ensure_ascii=False)[:1200])
except Exception as e:
    print("FCA erro", e)
# PDF
fr = [r for r in ipe if r["Categoria"] == "Fato Relevante"][-1]
print("link:", fr["Link_Download"])
try:
    b = get(fr["Link_Download"], 60); print("download bytes", len(b), b[:8])
    import pypdf
    txt = "\n".join((p.extract_text() or "") for p in pypdf.PdfReader(io.BytesIO(b)).pages[:4])
    print("texto:", re.sub(r"\s+", " ", txt)[:1500])
except Exception as e:
    print("PDF erro", type(e).__name__, e)
