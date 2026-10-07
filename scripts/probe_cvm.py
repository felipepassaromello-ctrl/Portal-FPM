"""Teste temporário: roda a coleta em tempo real da CVM na janela da edição de hoje."""
import sys
from datetime import datetime
sys.path.insert(0, "scripts")
import official
out, err = official.cvm_realtime(datetime(2026, 10, 6, 8), datetime(2026, 10, 7, 8))
print("erro:", err, "| total:", len(out))
for o in out:
    print(o)
