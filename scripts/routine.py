#!/usr/bin/env python3
"""Ferramentas da rotina diária do Claude Code (ver ROUTINE.md).

A coleta das notícias roda no GitHub Actions. A análise é feita por uma sessão agendada do
Claude Code, que usa o plano do usuário em vez da API:

  python scripts/routine.py queue [--limit 60]       imprime instruções + notícias a analisar
  python scripts/routine.py merge-analyses ARQ.json   valida e grava as análises
  python scripts/routine.py brief-input               imprime instruções + notícias analisadas
  python scripts/routine.py merge-brief ARQ.json      valida e grava o briefing do dia

Tudo é gravado em site/data/claude_analysis.json, que o build_digest.py aplica a cada execução.
"""
from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timedelta
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_digest import (  # noqa: E402
    ANALYSIS_INSTRUCTIONS, ANALYSIS_SCHEMA, BRIEF_INSTRUCTIONS, BRIEF_SCHEMA, BRT, CONFIG, DATA,
    ROUTINE_FILE, load_json, system_prompt, write_json,
)

KEEP_DAYS = 3


def validate(value, schema: dict, path: str = "$") -> list[str]:
    """Validador mínimo para os schemas deste projeto (type, enum, required, additionalProperties)."""
    errs: list[str] = []
    t = schema.get("type")
    types = {"object": dict, "array": list, "string": str, "integer": int, "boolean": bool}
    if t and not isinstance(value, types[t]) or (t == "integer" and isinstance(value, bool)):
        return [f"{path}: esperado {t}, veio {type(value).__name__}"]
    if "enum" in schema and value not in schema["enum"]:
        errs.append(f"{path}: valor {value!r} fora de {schema['enum']}")
    if t == "object":
        props = schema.get("properties", {})
        for k in schema.get("required", []):
            if k not in value:
                errs.append(f"{path}.{k}: campo obrigatório ausente")
        for k, v in value.items():
            if k in props:
                errs += validate(v, props[k], f"{path}.{k}")
            elif schema.get("additionalProperties") is False:
                errs.append(f"{path}.{k}: campo não previsto")
    if t == "array":
        for n, v in enumerate(value):
            errs += validate(v, schema.get("items", {}), f"{path}[{n}]")
    return errs


def load_state() -> tuple[dict, dict]:
    digest = load_json(DATA / "digest.json", {})
    if not digest or digest.get("demo"):
        sys.exit("site/data/digest.json ausente ou com dados de exemplo; rode o workflow primeiro.")
    state = load_json(ROUTINE_FILE, {})
    state.setdefault("items", {})
    state.setdefault("brief", None)
    return digest, state


def analyzed(item: dict, state: dict) -> dict | None:
    for i in [item["id"], *item.get("ids", [])]:
        if i in state["items"]:
            return state["items"][i]
    return None


def save(state: dict) -> None:
    today = datetime.now(BRT).date()
    keep = {(today - timedelta(days=n)).isoformat() for n in range(KEEP_DAYS)}
    state["items"] = {k: v for k, v in state["items"].items() if v.get("_day") in keep}
    state["updated_at"] = datetime.now(BRT).isoformat()
    write_json(ROUTINE_FILE, state)


def cmd_queue(args) -> None:
    digest, state = load_state()
    profile = load_json(CONFIG / "profile.json", {})
    pending = [i for i in digest["items"] if not analyzed(i, state)]
    pending.sort(key=lambda i: -i["prescore"])
    pending = pending[: args.limit]
    print("=== PAPEL ===\n" + system_prompt(profile))
    print("\n=== TAREFA ===\n" + ANALYSIS_INSTRUCTIONS.strip())
    print("\nFormato de saída: um arquivo JSON {\"items\": [ ... ]}, um objeto por notícia, com exatamente os campos acima "
          "(deal sempre presente; se não for deal, todos os campos de deal como string vazia). Use o mesmo \"id\" recebido.")
    print(f"\n=== NOTÍCIAS ({len(pending)} de {sum(1 for i in digest['items'] if not analyzed(i, state))} pendentes; "
          f"edição de {digest['generated_at']}) ===")
    for c in pending:
        print(json.dumps({
            "id": c["id"], "titulo": c["title"], "veiculos": ", ".join(sorted({o["source"] for o in c["outlets"]})),
            "outros_titulos": " | ".join(o["title"] for o in c["outlets"][1:3]), "trecho": c["snippet"][:500],
            "regiao": c["region"], "publicado": c["published"],
        }, ensure_ascii=False))


def cmd_merge_analyses(args) -> None:
    digest, state = load_state()
    data = load_json(Path(args.file), None)
    if data is None:
        sys.exit(f"Não consegui ler {args.file} como JSON.")
    errs = validate(data, ANALYSIS_SCHEMA)
    known = {i for it in digest["items"] for i in [it["id"], *it.get("ids", [])]}
    today = datetime.now(BRT).date().isoformat()
    ok = 0
    bad_ids = []
    for a in data.get("items", []) if isinstance(data, dict) else []:
        if a.get("id") not in known:
            bad_ids.append(a.get("id"))
            continue
        item_errs = validate(a, ANALYSIS_SCHEMA["properties"]["items"]["items"], f"id={a.get('id')}")
        if item_errs:
            continue
        a["importance"] = max(1, min(10, a["importance"]))
        state["items"][a["id"]] = {**a, "_day": today}
        ok += 1
    save(state)
    print(f"{ok} análises gravadas em {ROUTINE_FILE.relative_to(DATA.parent.parent)}.")
    if bad_ids:
        print(f"Ignorados (id desconhecido): {bad_ids}")
    if errs:
        print("Erros de validação (itens com erro foram ignorados; corrija e rode de novo):")
        print("\n".join(errs[:40]))
        sys.exit(1)


def cmd_brief_input(args) -> None:
    digest, state = load_state()
    profile = load_json(CONFIG / "profile.json", {})
    rows = []
    for it in digest["items"]:
        a = analyzed(it, state)
        if a:
            rows.append({"id": it["id"], "categoria": a["category"], "nota": a["importance"], "titulo": a["headline"],
                         "resumo": a["summary"], "impacto": a["impact"], "veiculos": [o["source"] for o in it["outlets"]]})
    rows.sort(key=lambda r: -r["nota"])
    print("=== PAPEL ===\n" + system_prompt(profile))
    print("\n=== TAREFA ===\n" + BRIEF_INSTRUCTIONS.strip())
    print("\nFormato de saída: um arquivo JSON com exatamente os campos acima "
          "(headline, mood, tldr, sections, watchlist, connections, question_of_the_day).")
    if digest.get("market"):
        print("\n=== MERCADO (última cotação) ===")
        for q in digest["market"]:
            print(f"{q['name']}: {q['price']:.2f} ({q['change_pct']:+.2f}%)")
    print(f"\n=== NOTÍCIAS ANALISADAS ({len(rows[:45])}) ===")
    for r in rows[:45]:
        print(json.dumps(r, ensure_ascii=False))


def cmd_merge_brief(args) -> None:
    _, state = load_state()
    data = load_json(Path(args.file), None)
    if data is None:
        sys.exit(f"Não consegui ler {args.file} como JSON.")
    errs = validate(data, BRIEF_SCHEMA)
    if errs:
        print("Briefing inválido, nada gravado:\n" + "\n".join(errs[:40]))
        sys.exit(1)
    state["brief"] = {**data, "date": datetime.now(BRT).date().isoformat()}
    save(state)
    print("Briefing do dia gravado.")


def main() -> None:
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    q = sub.add_parser("queue")
    q.add_argument("--limit", type=int, default=60)
    sub.add_parser("merge-analyses").add_argument("file")
    sub.add_parser("brief-input")
    sub.add_parser("merge-brief").add_argument("file")
    args = ap.parse_args()
    {"queue": cmd_queue, "merge-analyses": cmd_merge_analyses, "brief-input": cmd_brief_input,
     "merge-brief": cmd_merge_brief}[args.cmd](args)


if __name__ == "__main__":
    main()
