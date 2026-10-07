"""Teste temporário: base de 5 anos (tamanho) e volume de documentos por categoria para dimensionar os resumos."""
import json, subprocess, sys, collections
from datetime import datetime
from pathlib import Path
sys.path.insert(0, "scripts")
import cias
subprocess.run([sys.executable, "scripts/cias.py", "build"], check=True)
out = Path("site/data/cias")
tot = sum(p.stat().st_size for p in out.rglob("*.json"))
print("tamanho total MB", round(tot / 1e6, 1), "index KB", (out / "index.json").stat().st_size // 1000,
      "maior emp KB", max(p.stat().st_size for p in (out / "emp").glob("*.json")) // 1000,
      "maior mes MB", round(max(p.stat().st_size for p in (out / "mes").glob("*.json")) / 1e6, 2))
now = datetime.now()
listed, active = cias.summary_universe(now)
docs, st = cias.collect_docs(now)
print("docs", len(docs), st)
by = collections.Counter()
for d in docs:
    y = d["d"][:4]
    lk = d["k"] in listed
    by[(y, "listadas_todas")] += lk
    by[(y, "listadas_principais")] += lk and d["c"] in cias.SUMMARY_CATS
    by[(y, "regra_atual")] += cias.wants_summary(d, listed, active)
    by[(y, "todas")] += 1
for y in sorted({k[0] for k in by}):
    print(y, {k[1]: v for k, v in by.items() if k[0] == y})
cat = collections.Counter(d["c"] for d in docs if d["k"] in listed and d["d"] >= "2026-01-01")
print("listadas 2026 por categoria", cat.most_common(25))
