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

# Paleta do site (versão clara): fundo lilás-acinzentado, card branco, azul elétrico nos detalhes, pílula preta.
INK, INK2, MUTED, LINE, PAPER = "#0b0d1a", "#3c4060", "#7b809b", "#e6e8f2", "#f4f5fb"
ACCENT, ACCENT_SOFT, VIOLET = "#3448ff", "#eceeff", "#8b3dff"
GRAD = f"linear-gradient(90deg,{ACCENT},{VIOLET},#17b3ff)"
SANS = "'Plus Jakarta Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"


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
        color = "#12935e" if q["change_pct"] >= 0 else "#e0453a"
        arrow = "▲" if q["change_pct"] >= 0 else "▼"
        mk_cells.append(
            f'<td style="padding:12px 14px;border-right:1px solid {LINE};font:500 12px {SANS};white-space:nowrap">'
            f'<div style="color:{MUTED};font-size:11px">{e(name)}</div>'
            f'<div style="color:{INK};font-size:15px;font-weight:700;margin-top:2px">{fmt_num(q["price"], dec)}</div>'
            f'<div style="color:{color};font-size:11.5px;font-weight:600">{arrow} {fmt_num(abs(q["change_pct"]), 2)}%</div></td>')
    market_html = (f'<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;background:{PAPER};border:1px solid {LINE};'
                   f'border-radius:14px;border-collapse:separate;margin:0 0 26px"><tr>{"".join(mk_cells)}</tr></table>'
                   if mk_cells else "")

    label = f"margin:0 0 8px;font:700 11px {SANS};letter-spacing:.08em;text-transform:uppercase;color:{MUTED}"
    tldr = "".join(
        f'<tr><td style="vertical-align:top;padding:10px 12px 10px 0;width:26px">'
        f'<div style="width:24px;height:24px;line-height:24px;border-radius:12px;background:{ACCENT};background-image:{GRAD};'
        f'color:#ffffff;text-align:center;font:700 12px/24px {SANS}">{n}</div></td>'
        f'<td style="padding:11px 0;border-bottom:1px solid {LINE};font:500 15px/1.55 {SANS};color:{INK}">{e(t)}</td></tr>'
        for n, t in enumerate(b.get("tldr", []), 1))

    deal_rows = ""
    for it in unique_deals(digest.get("deals", [])):
        d = it["deal"]
        parts = " → ".join(p for p in [d.get("buyer"), d.get("target")] if p)
        deal_rows += (
            f'<tr><td style="padding:12px 0;border-bottom:1px solid {LINE};font:500 14px/1.5 {SANS};color:{INK}">'
            f'<span style="display:inline-block;font:700 10.5px {SANS};letter-spacing:.05em;text-transform:uppercase;color:{ACCENT};'
            f'background:{ACCENT_SOFT};padding:2px 9px;border-radius:999px">{e(d.get("type"))}</span><br>'
            f'<span style="font-weight:700">{e(parts)}</span><br><span style="color:{MUTED};font-size:13px">{e(d.get("value"))} · {e(d.get("stage"))}'
            f'{" · " + e(d.get("sector")) if d.get("sector") else ""}</span></td></tr>')
    deals_html = (f'<h2 style="{label};margin-top:30px">Deals do dia</h2>'
                  f'<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%">{deal_rows}</table>'
                  if deal_rows else "")

    off = digest.get("official") or {}
    off_rows = ""
    for f in [x for x in off.get("filings", []) if x["kind"] == "Fato relevante"][:6]:
        off_rows += (f'<tr><td style="padding:10px 0;border-bottom:1px solid {LINE};font:500 14px/1.5 {SANS};color:{INK}">'
                     f'<span style="font:700 10.5px {SANS};letter-spacing:.05em;text-transform:uppercase;color:{MUTED}">CVM · fato relevante</span><br>'
                     f'<a href="{e(f["link"])}" style="color:{INK};font-weight:700;text-decoration:none">{e(f["company"])}</a>'
                     f'<br><span style="color:{INK2};font-size:13px">{e(f["subject"])}</span></td></tr>')
    for c in [x for x in off.get("cade", []) if x["kind"] == "Ato de concentração"][:4]:
        off_rows += (f'<tr><td style="padding:10px 0;border-bottom:1px solid {LINE};font:500 14px/1.5 {SANS};color:{INK}">'
                     f'<span style="font:700 10.5px {SANS};letter-spacing:.05em;text-transform:uppercase;color:{MUTED}">Cade · Diário Oficial</span><br>'
                     f'<a href="{e(c["link"])}" style="color:{INK};font-weight:700;text-decoration:none">{e(c["title"])}</a>'
                     f'<br><span style="color:{INK2};font-size:13px">{e(c["summary"][:220])}</span></td></tr>')
    official_html = (f'<h2 style="{label};margin-top:30px">Fontes oficiais</h2>'
                     f'<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%">{off_rows}</table>'
                     if off_rows else "")

    # Sexta-feira: resumo "M&A da semana" a partir da base histórica de deals.
    week_html = ""
    if today.weekday() == 4:
        db = json.loads((DATA / "deals_db.json").read_text(encoding="utf-8")) if (DATA / "deals_db.json").exists() else {}
        since = (today.date() - timedelta(days=6)).isoformat()
        week = [x for x in db.get("deals", {}).values() if x.get("first_seen", "") >= since]
        moved = [x for x in db.get("deals", {}).values() if x.get("first_seen", "") < since
                 and any(t["date"] >= since for t in x.get("timeline", []))]
        if week or moved:
            sectors: dict[str, int] = {}
            for x in week:
                sectors[x.get("sector") or "Outros"] = sectors.get(x.get("sector") or "Outros", 0) + 1
            top_sec = ", ".join(f"{k} ({n})" for k, n in sorted(sectors.items(), key=lambda kv: -kv[1])[:4])
            rows = "".join(
                f'<li style="margin:6px 0"><b>{e(x.get("buyer"))} → {e(x.get("target"))}</b>'
                f'<span style="color:{MUTED}"> · {e(x.get("type"))} · {e(x.get("value") or "valor não divulgado")} · {e(x.get("stage"))}</span></li>'
                for x in sorted(week, key=lambda x: -x.get("importance", 0))[:8])
            week_html = (f'<div style="margin-top:30px;background:{ACCENT_SOFT};border-radius:16px;padding:18px 20px">'
                         f'<h2 style="{label};color:{ACCENT}">M&amp;A da semana</h2>'
                         f'<p style="margin:0 0 8px;font:600 15px/1.5 {SANS};color:{INK}">{len(week)} deals novos e {len(moved)} '
                         f'mudanças de estágio nos últimos 7 dias.</p>'
                         + (f'<p style="margin:0 0 8px;font:500 13.5px/1.5 {SANS};color:{INK2}">Setores mais ativos: {e(top_sec)}</p>' if top_sec else "")
                         + f'<ul style="margin:0;padding-left:18px;font:500 14px/1.5 {SANS};color:{INK}">{rows}</ul></div>')

    watch = "".join(f'<li style="margin:6px 0">{e(w)}</li>' for w in b.get("watchlist", []))
    watch_html = (f'<div style="margin-top:30px;background:{PAPER};border:1px solid {LINE};border-radius:16px;padding:18px 20px">'
                  f'<h2 style="{label}">No radar</h2>'
                  f'<ul style="margin:0;padding-left:18px;font:500 14px/1.55 {SANS};color:{INK2}">{watch}</ul></div>'
                  if watch else "")

    body = f"""<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet"></head>
<body style="margin:0;padding:0;background:{PAPER}">
<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;background:{PAPER}"><tr><td align="center" style="padding:28px 12px">
<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;max-width:640px;background:#ffffff;border:1px solid {LINE};border-radius:22px;border-collapse:separate;overflow:hidden">
<tr><td style="height:4px;line-height:4px;font-size:0;background:{ACCENT};background-image:{GRAD}">&nbsp;</td></tr>
<tr><td style="padding:30px 32px 32px">
  <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%"><tr>
    <td><span style="display:inline-block;font:700 11px {SANS};letter-spacing:.1em;text-transform:uppercase;color:{ACCENT};background:{ACCENT_SOFT};padding:5px 12px;border-radius:999px">Briefing do dia</span></td>
    <td align="right" style="font:500 12px {SANS};color:{MUTED}">Portal FPM · {e(long_date(today))}</td>
  </tr></table>
  <h1 style="margin:18px 0 10px;font:800 28px/1.15 {SANS};letter-spacing:-.02em;color:{INK}">{e(b["headline"])}</h1>
  <p style="margin:0 0 24px;font:500 16px/1.55 {SANS};color:{INK2}">{e(b.get("mood"))}</p>
  {market_html}
  <h2 style="{label}">O que você precisa saber</h2>
  <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%">{tldr}</table>
  {week_html}
  {deals_html}
  {official_html}
  {watch_html}
  <table role="presentation" cellspacing="0" cellpadding="0" style="margin:30px 0 0"><tr><td style="background:{INK};border-radius:999px">
    <a href="{SITE_URL}?e={today:%Y%m%d}" style="display:inline-block;padding:13px 24px;font:700 14px {SANS};color:#ffffff;text-decoration:none">Abrir a edição completa →</a>
  </td></tr></table>
</td></tr></table>
<p style="max-width:640px;margin:16px auto 0;font:500 12px/1.5 {SANS};color:{MUTED};text-align:center">
  Resumo gerado automaticamente a partir de {digest["stats"]["sources_ok"]} veículos nacionais e internacionais.
  As análises são feitas por IA; confira a fonte original antes de usar.</p>
</td></tr></table></body></html>"""

    text = "\n".join([
        f"PORTAL FPM · {long_date(today)}", "", b["headline"], b.get("mood", ""), "", "PRINCIPAIS PONTOS",
        *[f"{n:02d}. {t}" for n, t in enumerate(b.get("tldr", []), 1)], "",
        f"Edição completa: {SITE_URL}?e={today:%Y%m%d}", "",
        "Resumo gerado automaticamente. As análises são feitas por IA; confira a fonte original antes de usar.",
    ])
    return subject, body, text


def send_alert(today: datetime, digest: dict, routine: dict) -> None:
    """Avisa o próprio dono da conta quando a edição do dia não saiu a tempo."""
    user, password = os.environ.get("GMAIL_USER", "").strip(), os.environ.get("GMAIL_APP_PASSWORD", "").replace(" ", "")
    if not (user and password):
        return
    brief_date = (routine.get("brief") or {}).get("date", "?")
    msg = EmailMessage()
    msg["Subject"] = f"⚠️ Portal FPM: a edição de {today:%d/%m} não foi enviada"
    msg["From"] = formataddr(("Portal FPM", user))
    msg["To"] = user
    msg.set_content(
        f"A edição de hoje ({today:%d/%m}) não foi enviada porque a análise do dia não estava pronta até as 09:32.\n\n"
        f"- Coleta: edição {digest.get('date')} gerada em {digest.get('generated_at', '?')[:16]}\n"
        f"- Último briefing da rotina: {brief_date}\n\n"
        f"Abra a conversa do Claude Code do Portal FPM e peça para rodar a análise de hoje. "
        f"Depois dá para mandar o e-mail manualmente.\n\n{SITE_URL}")
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, timeout=60) as smtp:
        smtp.login(user, password)
        smtp.send_message(msg)
    print("Aviso de edição não publicada enviado para a própria conta.")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--force", action="store_true", help="envia mesmo sem a análise de hoje")
    ap.add_argument("--dry-run", metavar="ARQ.html", help="só grava o HTML, sem enviar")
    ap.add_argument("--alert-if-missing", action="store_true",
                    help="se a edição de hoje não saiu, manda um aviso para a própria conta (GMAIL_USER)")
    args = ap.parse_args()

    today = datetime.now(BRT)
    digest = json.loads((DATA / "digest.json").read_text(encoding="utf-8"))
    routine = json.loads((DATA / "claude_analysis.json").read_text(encoding="utf-8")) if (DATA / "claude_analysis.json").exists() else {}
    fresh = (routine.get("brief") or {}).get("date") == today.date().isoformat() and digest.get("date") == today.date().isoformat()
    sys.path.insert(0, str(Path(__file__).resolve().parent))
    from holidays import holiday_name
    hol = holiday_name(today.date())
    if hol and not args.force and not os.environ.get("MAIL_TO_OVERRIDE", "").strip():
        print(f"Feriado ({hol}): e-mail não enviado.")
        return 0
    if not fresh and not args.force:
        print("A análise de hoje ainda não foi publicada; e-mail não enviado.")
        if args.alert_if_missing:
            send_alert(today, digest, routine)
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
