"""Teste temporário: roda a base de companhias com dados reais e mostra amostras."""
import json, subprocess, sys
from pathlib import Path
subprocess.run([sys.executable, "scripts/cias.py", "textos"], check=True)
subprocess.run([sys.executable, "scripts/cias.py", "build"], check=True)
out = Path("site/data/cias")
idx = json.loads((out / "index.json").read_text())
print("status", idx["status"], "meses", idx["months"][:4], len(idx["months"]))
print("companhias", len(idx["companies"]), "com ticker", sum(1 for c in idx["companies"] if c["tk"]))
for c in idx["companies"][:3]: print(json.dumps(c, ensure_ascii=False))
print("petro", [json.dumps(c, ensure_ascii=False) for c in idx["companies"] if "PETR4" in c["tk"]])
m = json.loads((out / "mes" / f"{idx['months'][0]}.json").read_text())
print("mes atual docs", len(m))
for d in m[:6]: print(json.dumps(d, ensure_ascii=False)[:400])
tot = sum(p.stat().st_size for p in out.rglob("*.json"))
print("tamanho total MB", round(tot / 1e6, 1), "index KB", (out / "index.json").stat().st_size // 1000,
      "maior mes MB", round(max(p.stat().st_size for p in (out / "mes").glob("*.json")) / 1e6, 2))
fila = json.loads(Path("site/data/cvm_fila.json").read_text())
print("fila", len(fila), "sem texto", sum(1 for v in fila.values() if len(v["texto"]) < 80))
for k, v in list(fila.items())[:2]: print(k, v["empresa"], v["c"], v["s"], "|", v["texto"][:300].replace("\n", " "))
