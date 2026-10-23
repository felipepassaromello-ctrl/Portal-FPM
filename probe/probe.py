"""Sonda temporária: roda o pipeline de perfis e guarda amostras para conferência."""
import json
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "site" / "data" / "cias"
P = ROOT / "probe"


def run(*cmd):
    t = time.time()
    r = subprocess.run([sys.executable, *cmd], cwd=ROOT, capture_output=True, text=True)
    print(f"\n$ {' '.join(cmd)}  ({time.time() - t:.0f}s, código {r.returncode})")
    print(r.stdout[-4000:])
    print(r.stderr[-6000:])


run("scripts/perfis.py", "base", "--force")
run("scripts/perfis.py", "precos", "--force")
run("scripts/perfis.py", "ofertas", "--force")
run("scripts/cias.py", "build")
run("scripts/perfis.py", "montar")

idx = json.loads((OUT / "index.json").read_text())
names = {c["k"]: (c.get("nc") or c["n"]) for c in idx["companies"]}
resumo = json.loads((OUT / "resumo.json").read_text())["cias"]
print("\nresumo:", len(resumo), "companhias; com valor de mercado:", sum(1 for r in resumo.values() if r.get("mc")))
top = sorted(resumo.items(), key=lambda kv: -(kv[1].get("mc") or 0))[:40]
for k, r in top:
    print(k, names.get(k), json.dumps(r, ensure_ascii=False))
print("\nmais notícias:")
for k, r in sorted(resumo.items(), key=lambda kv: -(kv[1].get("nn") or 0))[:30]:
    print(k, names.get(k), r.get("nn"), r.get("nd"), r.get("nl"))

samples = P / "amostras"
samples.mkdir(exist_ok=True)
want = {"9512", "4170", "19348", "16861", "6505", "23493", "20125", "4820"}
for k, n in names.items():
    if any(w in (n or "").upper() for w in ("CASAS BAHIA", "PÃO DE AÇÚCAR", "BRASKEM", "HELBOR", "SABESP", "ITAUSA", "BTG")):
        want.add(k)
for k in want:
    f = OUT / "perfil" / f"{k}.json"
    if f.exists():
        (samples / f"{k}.json").write_text(json.dumps(json.loads(f.read_text()), ensure_ascii=False, indent=1))
for name in ("agenda.json", "ofertas.json"):
    d = json.loads((OUT / name).read_text())
    lst = d.get("eventos") or d.get("ofertas")
    print(f"\n{name}: {len(lst)}")
    (samples / name).write_text(json.dumps({**d, **({"eventos": lst[:80]} if "eventos" in d else {"ofertas": lst[:80]})}, ensure_ascii=False, indent=1))
alias = json.loads((OUT / "alias.json").read_text())
print("\napelidos:", len(alias))
for a in ("petrobras", "vale", "itau", "casas bahia", "gpa", "braskem", "raizen", "oncoclinicas", "b3", "helbor", "vinci", "afya"):
    print(a, "→", alias.get(a), names.get(alias.get(a)))
