"""Teste temporário: verifica se a consulta em tempo real da CVM (ENET) responde sem captcha."""
import http.cookiejar, json, urllib.request
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36"
cj = http.cookiejar.CookieJar()
op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
PAGE = "https://www.rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx"
def show(tag, fn):
    try:
        r = fn(); body = r.read().decode("utf-8", "replace")
        print(f"== {tag}: HTTP {r.status} len={len(body)}\n{body[:2500]}\n")
    except Exception as e:
        b = getattr(e, "read", lambda: b"")().decode("utf-8", "replace")[:800]
        print(f"== {tag}: ERRO {type(e).__name__}: {e}\n{b}\n")
show("pagina", lambda: op.open(urllib.request.Request(PAGE, headers={"User-Agent": UA}), timeout=40))
print("cookies:", [c.name for c in cj])
for cat in ["IPE_4_-1_-1", "EST_-1,IPE_-1_-1_-1", "IPE_-1_-1_-1"]:
    payload = {"dataDe": "06/10/2026", "dataAte": "07/10/2026", "empresa": "", "setorAtividade": "-1",
               "categoriaEmissor": "-1", "situacaoEmissor": "-1", "tipoParticipante": "-1", "dataReferencia": "",
               "categoria": cat, "periodo": "2", "horaIni": "", "horaFim": "", "palavraChave": "",
               "ultimaDtRef": "false", "tipoEmpresa": "0", "token": "", "versaoCaptcha": ""}
    req = urllib.request.Request(PAGE + "/ListarDocumentos", data=json.dumps(payload).encode(),
        headers={"User-Agent": UA, "Content-Type": "application/json; charset=utf-8",
                 "X-Requested-With": "XMLHttpRequest", "Referer": PAGE, "Origin": "https://www.rad.cvm.gov.br"})
    show(f"listar {cat}", lambda: op.open(req, timeout=60))
