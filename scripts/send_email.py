#!/usr/bin/env python3
"""Envia a edição do dia por e-mail (Gmail via SMTP), a partir de site/data/digest.json.

Variáveis de ambiente (cadastradas como segredos no GitHub, nunca no código):
  GMAIL_USER          conta do Gmail que envia
  GMAIL_APP_PASSWORD  senha de app dessa conta
  MAIL_TO             destinatário(s), separados por vírgula
  MAIL_CC             (opcional) cópia, separados por vírgula
  MAIL_TO_OVERRIDE    (opcional) substitui MAIL_TO e MAIL_CC, para testes; "eu" envia só para GMAIL_USER

Só envia se a análise do dia já tiver sido publicada, para nunca mandar o briefing de ontem.
Use --force para ignorar essa checagem e --dry-run para gerar o HTML sem enviar.
"""
from __future__ import annotations

import argparse
import html
import json
import os
import re
import smtplib
import sys
from datetime import datetime, timedelta, timezone
from email.message import EmailMessage
from email.utils import formataddr
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "site" / "data"
BRT = timezone(timedelta(hours=-3))
SITE_URL = "https://felipepassaromello-ctrl.github.io/Portal-FPM/"
SENT_FILE = DATA / "email_sent.json"  # evita mandar duas vezes no mesmo dia

WEEKDAYS = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"]
MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro",
          "novembro", "dezembro"]

NAVY, COBALT, INK2, MUTED, LINE, PAPER = "#0e1a2b", "#1c3fcf", "#39455a", "#6b7486", "#d8dde5", "#eceff3"
SERIF = "Georgia, 'Times New Roman', serif"
SANS = "-apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
MONO = "'SFMono-Regular', Menlo, Consolas, monospace"


def e(s) -> str:
    return html.escape(str(s or ""))


def fmt_num(v: float, dec: int) -> str:
    s = f"{v:,.{dec}f}"
    return s.replace(",", "X").replace(".", ",").replace("X", ".")


def long_date(d: datetime) -> str:
    return f"{WEEKDAYS[d.weekday()]}, {d.day} de {MONTHS[d.month - 1]}"


def unique_deals(deals: list[dict], n: int = 6) -> list[dict]:
    seen, out = set(), []
    for it in sorted(deals, key=lambda i: -i["importance"]):
        d = it.get("deal") or {}
        key = re.sub(r"\W+", "", f"{d.get('buyer', '')}{d.get('target', '')}".lower())[:40]
        if key in seen:
            continue
        seen.add(key)
        out.append(it)
        if len(out) == n:
            break
    return out


def build(digest: dict, today: datetime) -> tuple[str, str, str]:
    b = digest["brief"]
    subject = f"Briefing FPM · {today:%d/%m} · {b['headline']}"
    if len(subject) > 110:
        subject = subject[:108].rsplit(" ", 1)[0].rstrip(",;:") + "…"

    market = {q["name"]: q for q in digest.get("market", [])}
    mk_cells = []
    for name in ["Ibovespa", "Dólar", "S&P 500", "Treasury 10a", "Brent"]:
        q = market.get(name)
        if not q:
            continue
        dec = 4 if q["unit"] == "R$" else 0 if q["price"] > 1000 else 2
        color = "#19784f" if q["change_pct"] >= 0 else "#c2392a"
        arrow = "▲" if q["change_pct"] >= 0 else "▼"
        mk_cells.append(
            f'<td style="padding:10px 12px;border-right:1px solid {LINE};font:12px {MONO};white-space:nowrap">'
            f'<div style="color:{MUTED};text-transform:uppercase;letter-spacing:.05em;font-size:10.5px">{e(name)}</div>'
            f'<div style="color:{NAVY};font-size:14px;margin-top:2px">{fmt_num(q["price"], dec)}</div>'
            f'<div style="color:{color};font-size:11.5px">{arrow} {fmt_num(abs(q["change_pct"]), 2)}%</div></td>')
    market_html = (f'<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border:1px solid {LINE};'
                   f'border-radius:6px;border-collapse:separate;margin:0 0 24px"><tr>{"".join(mk_cells)}</tr></table>'
                   if mk_cells else "")

    tldr = "".join(
        f'<tr><td style="vertical-align:top;padding:9px 12px 9px 0;font:12px {MONO};color:{COBALT}">{n:02d}</td>'
        f'<td style="padding:9px 0;border-bottom:1px solid {LINE};font:15px/1.5 {SANS};color:{NAVY}">{e(t)}</td></tr>'
        for n, t in enumerate(b.get("tldr", []), 1))

    deal_rows = ""
    for it in unique_deals(digest.get("deals", [])):
        d = it["deal"]
        parts = " → ".join(p for p in [d.get("buyer"), d.get("target")] if p)
        deal_rows += (
            f'<tr><td style="padding:9px 0;border-bottom:1px solid {LINE};font:14px/1.45 {SANS};color:{NAVY}">'
            f'<span style="font:11px {MONO};color:{COBALT};text-transform:uppercase;letter-spacing:.04em">{e(d.get("type"))}</span><br>'
            f'{e(parts)}<br><span style="color:{MUTED};font-size:13px">{e(d.get("value"))} · {e(d.get("stage"))}'
            f'{" · " + e(d.get("sector")) if d.get("sector") else ""}</span></td></tr>')
    deals_html = (f'<h2 style="margin:28px 0 6px;font:500 11px {MONO};letter-spacing:.08em;text-transform:uppercase;color:{MUTED}">'
                  f'Deals do dia</h2><table role="presentation" cellspacing="0" cellpadding="0" style="width:100%">{deal_rows}</table>'
                  if deal_rows else "")

    watch = "".join(f'<li style="margin:5px 0">{e(w)}</li>' for w in b.get("watchlist", []))
    watch_html = (f'<h2 style="margin:28px 0 6px;font:500 11px {MONO};letter-spacing:.08em;text-transform:uppercase;color:{MUTED}">'
                  f'No radar</h2><ul style="margin:0;padding-left:18px;font:14px/1.5 {SANS};color:{INK2}">{watch}</ul>'
                  if watch else "")

    body = f"""<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:{PAPER}">
<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;background:{PAPER}"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;max-width:640px;background:#ffffff;border:1px solid {LINE};border-top:3px solid {NAVY};border-radius:6px">
<tr><td style="padding:28px 30px 30px">
  <div style="font:500 11px {MONO};letter-spacing:.1em;text-transform:uppercase;color:{COBALT}">Portal FPM · {e(long_date(today))}</div>
  <h1 style="margin:12px 0 8px;font:700 26px/1.2 {SERIF};color:{NAVY}">{e(b["headline"])}</h1>
  <p style="margin:0 0 22px;font:italic 16px/1.5 {SERIF};color:{INK2}">{e(b.get("mood"))}</p>
  {market_html}
  <h2 style="margin:0 0 6px;font:500 11px {MONO};letter-spacing:.08em;text-transform:uppercase;color:{MUTED}">Principais pontos</h2>
  <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%">{tldr}</table>
  {deals_html}
  {watch_html}
  <table role="presentation" cellspacing="0" cellpadding="0" style="margin:30px 0 0"><tr><td style="background:{NAVY};border-radius:6px">
    <a href="{SITE_URL}" style="display:inline-block;padding:12px 20px;font:600 14px {SANS};color:#ffffff;text-decoration:none">Abrir a edição completa →</a>
  </td></tr></table>
</td></tr></table>
<p style="max-width:640px;margin:14px auto 0;font:12px/1.5 {SANS};color:{MUTED};text-align:center">
  Resumo gerado automaticamente a partir de {digest["stats"]["sources_ok"]} veículos nacionais e internacionais.
  As análises são feitas por IA; confira a fonte original antes de usar.</p>
</td></tr></table></body></html>"""

    text = "\n".join([
        f"PORTAL FPM · {long_date(today)}", "", b["headline"], b.get("mood", ""), "", "PRINCIPAIS PONTOS",
        *[f"{n:02d}. {t}" for n, t in enumerate(b.get("tldr", []), 1)], "",
        f"Edição completa: {SITE_URL}", "",
        "Resumo gerado automaticamente. As análises são feitas por IA; confira a fonte original antes de usar.",
    ])
    return subject, body, text


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--force", action="store_true", help="envia mesmo sem a análise de hoje")
    ap.add_argument("--dry-run", metavar="ARQ.html", help="só grava o HTML, sem enviar")
    args = ap.parse_args()

    today = datetime.now(BRT)
    digest = json.loads((DATA / "digest.json").read_text(encoding="utf-8"))
    routine = json.loads((DATA / "claude_analysis.json").read_text(encoding="utf-8")) if (DATA / "claude_analysis.json").exists() else {}
    fresh = (routine.get("brief") or {}).get("date") == today.date().isoformat() and digest.get("date") == today.date().isoformat()
    if not fresh and not args.force:
        print("A análise de hoje ainda não foi publicada; e-mail não enviado.")
        return 0

    override = os.environ.get("MAIL_TO_OVERRIDE", "").strip()
    sent = json.loads(SENT_FILE.read_text()) if SENT_FILE.exists() else {}
    if sent.get("date") == today.date().isoformat() and not (override or args.force or args.dry_run):
        print("A edição de hoje já foi enviada.")
        return 0

    subject, body, text = build(digest, today)
    if args.dry_run:
        Path(args.dry_run).write_text(body, encoding="utf-8")
        print(f"Assunto: {subject}\nHTML gravado em {args.dry_run}")
        return 0

    user, password = os.environ.get("GMAIL_USER", "").strip(), os.environ.get("GMAIL_APP_PASSWORD", "").replace(" ", "")
    if override.lower() == "eu":  # teste: manda só para a própria conta, sem expor o endereço no log
        override = user
    to = override or os.environ.get("MAIL_TO", "").strip()
    cc = "" if override else os.environ.get("MAIL_CC", "").strip()
    missing = [n for n, v in [("GMAIL_USER", user), ("GMAIL_APP_PASSWORD", password), ("MAIL_TO", to)] if not v]
    if missing:
        print(f"Faltam os segredos: {', '.join(missing)}. Cadastre em Settings → Secrets and variables → Actions.")
        return 1

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = formataddr(("Portal FPM", user))
    msg["To"] = to
    if cc:
        msg["Cc"] = cc
    msg.set_content(text)
    msg.add_alternative(body, subtype="html")
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, timeout=60) as smtp:
        smtp.login(user, password)
        smtp.send_message(msg)
    total = len([a for a in (to + "," + cc).split(",") if a.strip()])
    print(f"E-mail enviado para {total} destinatário(s): {subject}")
    if not override:
        SENT_FILE.write_text(json.dumps({"date": today.date().isoformat(), "at": today.isoformat()}) + "\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
