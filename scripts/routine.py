#!/usr/bin/env python3
"""Ferramentas da rotina diária do Claude Code (ver ROUTINE.md).

A coleta das notícias roda no GitHub Actions. A análise é feita por uma sessão agendada do
Claude Code, que usa o plano do usuário em vez da API:

  python scripts/routine.py queue [--limit 60]       imprime instruções + notícias a analisar
  python scripts/routine.py merge-analyses ARQ.json   valida e grava as análises
  python scripts/routine.py brief-input               imprime instruções + notícias analisadas
  python scripts/routine.py merge-brief ARQ.json      valida e grava o briefing do dia
  python scripts/routine.py cvm-queue [--limit 80]    imprime documentos da CVM a resumir (texto do PDF)
  python scripts/routine.py merge-cvm ARQ.json        valida e grava os resumos em site/data/cvm_resumos.json

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
    ROUTINE_FILE, deal_key, load_json, norm_stage, previous_deals, system_prompt, write_json,
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
    today = datetime.now(BRT).date().isoformat()
    if digest.get("date") != today:
        sys.exit(f"A edição de hoje ({today}) ainda não foi gerada: o digest é da edição {digest.get('date')}. "
                 "A coleta das 08:07 ainda não rodou; aguarde alguns minutos, rode git pull e tente de novo.")
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
    prev = previous_deals(digest["date"])
    for it in digest["items"]:
        a = analyzed(it, state)
        if a:
            row = {"id": it["id"], "categoria": a["category"], "nota": a["importance"], "titulo": a["headline"],
                   "resumo": a["summary"], "impacto": a["impact"], "veiculos": [o["source"] for o in it["outlets"]]}
            old = prev.get(deal_key(a.get("deal"))) if a.get("is_deal") else None
            if old and norm_stage(old["stage"]) == norm_stage(a["deal"].get("stage", "")):
                row["ja_noticiado_em"] = old["date"]
            elif old:
                row["atualizacao_de_estagio"] = f"{old['stage']} (em {old['date']}) -> {a['deal'].get('stage', '')}"
            rows.append(row)
    rows.sort(key=lambda r: -r["nota"])
    print("=== PAPEL ===\n" + system_prompt(profile))
    print("\n=== TAREFA ===\n" + BRIEF_INSTRUCTIONS.strip())
    print("\nFormato de saída: um arquivo JSON com exatamente os campos acima "
          "(headline, mood, tldr, sections, watchlist, connections).")
    if digest.get("market"):
        print("\n=== MERCADO (última cotação) ===")
        for q in digest["market"]:
            print(f"{q['name']}: {q['price']:.2f} ({q['change_pct']:+.2f}%)")
    filings = (digest.get("official") or {}).get("filings") or []
    if filings:
        print("\n=== CVM: FATOS RELEVANTES E COMUNICADOS DA JANELA (cite no briefing só os de M&A/mercado de capitais) ===")
        for f in filings[:60]:
            print(json.dumps({"tipo": f["kind"], "empresa": f["company"], "assunto": f["subject"],
                              "entregue": f"{f['date']} {f.get('time', '')}".strip()}, ensure_ascii=False))
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


CVM_INSTRUCTIONS = """Você resume documentos que companhias abertas entregaram à CVM (fatos relevantes, comunicados ao mercado,
avisos aos acionistas etc.) para um profissional de M&A. Para cada documento, escreva em português:
- resumo: 2 a 3 frases em linguagem simples dizendo o que a companhia comunicou e o que muda, com os números,
  nomes, valores, prazos e datas que estiverem no texto. Nada de "a companhia informa que"; vá direto ao fato.
- pontos: 0 a 3 tópicos curtos com detalhes úteis (preço por ação, contraparte, condições, cronograma, próximos passos).
- tema: um destes: {temas}.
Use só o que está no texto. Se o texto estiver vazio, ilegível ou não disser nada além do título, não inclua o documento.
Formato do arquivo: {{"items": [{{"id": "...", "resumo": "...", "pontos": ["..."], "tema": "..."}}]}}"""


def cmd_cvm_queue(args) -> None:
    from cias import FILA, RESUMOS, TEMAS
    fila, resumos = load_json(FILA, {}), load_json(RESUMOS, {})
    pend = [(k, v) for k, v in fila.items() if k not in resumos and len((v.get("texto") or "").strip()) > 80]
    pend.sort(key=lambda kv: (kv[1]["c"] != "Fato Relevante", kv[1]["d"]))
    print(CVM_INSTRUCTIONS.format(temas=", ".join(TEMAS)))
    print(f"\n=== DOCUMENTOS PENDENTES ({min(len(pend), args.limit)} de {len(pend)}) ===")
    for k, v in pend[:args.limit]:
        print(f"\n--- id {k} · {v['empresa']} · {v['c']}{' · ' + v['t'] if v.get('t') else ''} · {v['s']} · entregue {v['d']}")
        print(v["texto"].strip())


def cmd_merge_cvm(args) -> None:
    from cias import FILA, RESUMOS, TEMAS
    data = json.loads(Path(args.file).read_text(encoding="utf-8"))
    fila, resumos = load_json(FILA, {}), load_json(RESUMOS, {})
    ok, errs = 0, []
    for it in data.get("items", []):
        i = str(it.get("id", ""))
        if i not in fila and i not in resumos:
            errs.append(f"{i}: id fora da fila"); continue
        if not isinstance(it.get("resumo"), str) or len(it["resumo"]) < 30:
            errs.append(f"{i}: resumo ausente ou curto"); continue
        if it.get("tema") not in TEMAS:
            errs.append(f"{i}: tema {it.get('tema')!r} fora de {TEMAS}"); continue
        pontos = [p for p in it.get("pontos") or [] if isinstance(p, str) and p.strip()][:3]
        meta = fila.get(i) or resumos.get(i, {})
        resumos[i] = {"resumo": it["resumo"].strip(), "pontos": pontos, "tema": it["tema"],
                      "k": meta.get("k"), "d": meta.get("d"), "em": datetime.now(BRT).isoformat(timespec="minutes")}
        fila.pop(i, None)
        ok += 1
    write_json(RESUMOS, resumos)
    write_json(FILA, fila)
    print(f"{ok} resumos gravados; fila agora com {len(fila)}.")
    for e in errs:
        print("ERRO", e)


def main() -> None:
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    q = sub.add_parser("queue")
    q.add_argument("--limit", type=int, default=60)
    sub.add_parser("merge-analyses").add_argument("file")
    sub.add_parser("brief-input")
    sub.add_parser("merge-brief").add_argument("file")
    sub.add_parser("cvm-queue").add_argument("--limit", type=int, default=80)
    sub.add_parser("merge-cvm").add_argument("file")
    args = ap.parse_args()
    {"queue": cmd_queue, "merge-analyses": cmd_merge_analyses, "brief-input": cmd_brief_input,
     "merge-brief": cmd_merge_brief, "cvm-queue": cmd_cvm_queue, "merge-cvm": cmd_merge_cvm}[args.cmd](args)


if __name__ == "__main__":
    main()
