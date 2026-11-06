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
import time
from datetime import datetime, time as dtime, timedelta, timezone
from email.message import EmailMessage
from email.utils import formataddr
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "site" / "data"
BRT = timezone(timedelta(hours=-3))
SITE_URL = "https://felipepassaromello-ctrl.github.io/Portal-FPM/"
SENT_FILE = DATA / "email_sent.json"  # evita mandar duas vezes no mesmo dia
SEND_UNTIL = dtime(10, 30)  # depois disso o envio do dia é cancelado (horário de Brasília)

WEEKDAYS = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"]
MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro",
          "novembro", "dezembro"]

# Visual do portal (padrão de apps da Apple, versão clara): fundo cinza-claro, cartão branco, azul da Apple nos
# detalhes, fonte do sistema. Cores em hexadecimal (sem rgba) porque nem todo leitor de e-mail entende transparência.
INK, INK2, MUTED, SEP, BG = "#1d1d1f", "#59595f", "#8a8a8e", "#e4e4e5", "#f5f5f7"
ACCENT, ACCENT_SOFT, POS, NEG = "#0071e3", "#e6f1fc", "#248a3d", "#d70015"
SIGNAL, SIGNAL_SOFT = "#b25000", "#fff2e0"
FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
FONT_D = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"


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


def parties(*names) -> str:
    """Comprador → alvo, sem os lados que a notícia não revelou."""
    known = [n.strip() for n in names if n and n.strip() and not n.strip().lower().startswith(("não divulgad", "nao divulgad"))]
    return " → ".join(known)


def build(digest: dict, today: datetime) -> tuple[str, str, str]:
    b = digest["brief"]
    subject = f"Briefing FPM · {today:%d/%m} · {b['headline']}"
    if len(subject) > 110:
        subject = subject[:108].rsplit(" ", 1)[0].rstrip(",;:") + "…"

    # rótulos como os do site: "O essencial", "Mercados", "No radar" (cinza, sem caixa alta)
    label = f"margin:30px 0 10px;font:600 13px/1.3 {FONT};color:{MUTED}"
    box = f"background:{BG};border-radius:16px;padding:6px 18px"

    # mercados: uma linha por ativo, valor à direita e a variação numa pílula verde ou vermelha (como no portal)
    market = {q["name"]: q for q in digest.get("market", [])}
    mk_rows = []
    for name in ["Ibovespa", "Dólar", "S&P 500", "Treasury 10a", "Brent"]:
        q = market.get(name)
        if not q:
            continue
        dec = 4 if q["unit"] == "R$" else 0 if q["price"] > 1000 else 2
        up = q["change_pct"] >= 0
        sep = f"border-top:1px solid {SEP};" if mk_rows else ""
        mk_rows.append(
            f'<tr><td style="{sep}padding:10px 0;font:500 14.5px {FONT};color:{INK}">{e(name)}</td>'
            f'<td align="right" style="{sep}padding:10px 12px 10px 0;font:600 14.5px {FONT};color:{INK};white-space:nowrap">{fmt_num(q["price"], dec)}</td>'
            f'<td align="right" style="{sep}padding:10px 0;width:74px"><span style="display:inline-block;min-width:58px;text-align:center;'
            f'font:600 12.5px {FONT};color:#ffffff;background:{POS if up else NEG};border-radius:6px;padding:3px 7px">'
            f'{"+" if up else "−"}{fmt_num(abs(q["change_pct"]), 2)}%</span></td></tr>')
    market_html = (f'<h2 style="{label}">Mercados</h2><table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;{box}">'
                   f'<tr><td style="padding:2px 0"><table role="presentation" cellspacing="0" cellpadding="0" style="width:100%">'
                   f'{"".join(mk_rows)}</table></td></tr></table>' if mk_rows else "")

    # o essencial: número num círculo azul-claro, como na lista do briefing do site
    tldr = "".join(
        f'<tr><td style="vertical-align:top;padding:13px 14px 13px 0;width:24px;{"" if n == 1 else f"border-top:1px solid {SEP};"}">'
        f'<div style="width:24px;height:24px;border-radius:12px;background:{ACCENT_SOFT};color:{ACCENT};text-align:center;'
        f'font:600 12.5px/24px {FONT}">{n}</div></td>'
        f'<td style="padding:13px 0;{"" if n == 1 else f"border-top:1px solid {SEP};"}font:400 15.5px/1.5 {FONT};color:{INK}">{e(t)}</td></tr>'
        for n, t in enumerate(b.get("tldr", []), 1))

    pill = lambda text, fg, bg: (f'<span style="display:inline-block;font:600 11.5px {FONT};color:{fg};background:{bg};'  # noqa: E731
                                 f'padding:2px 8px;border-radius:6px">{e(text)}</span>')

    deal_rows = ""
    for k, it in enumerate(unique_deals(digest.get("deals", []))):
        d = it["deal"]
        parts = parties(d.get("buyer"), d.get("target"))
        sep = f"border-top:1px solid {SEP};" if k else ""
        deal_rows += (
            f'<tr><td style="{sep}padding:12px 0;font:400 14.5px/1.5 {FONT};color:{INK}">'
            f'{pill(d.get("type"), ACCENT, ACCENT_SOFT)}<br>'
            f'<span style="font-weight:600">{e(parts)}</span><br><span style="color:{MUTED};font-size:13.5px">{e(d.get("value"))} · {e(d.get("stage"))}'
            f'{" · " + e(d.get("sector")) if d.get("sector") else ""}</span></td></tr>')
    deals_html = (f'<h2 style="{label}">Deals do dia</h2>'
                  f'<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%">{deal_rows}</table>'
                  if deal_rows else "")

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
                f'<li style="margin:6px 0"><span style="font-weight:600">{e(parties(x.get("buyer"), x.get("target")))}</span>'
                f'<span style="color:{MUTED}"> · {e(x.get("type"))} · {e(x.get("value") or "valor não divulgado")} · {e(x.get("stage"))}</span></li>'
                for x in sorted(week, key=lambda x: -x.get("importance", 0))[:8])
            week_html = (f'<h2 style="{label}">M&amp;A da semana</h2>'
                         f'<div style="background:{ACCENT_SOFT};border-radius:16px;padding:16px 18px">'
                         f'<p style="margin:0 0 6px;font:600 15px/1.5 {FONT};color:{INK}">{len(week)} deals novos e {len(moved)} '
                         f'mudanças de estágio nos últimos 7 dias.</p>'
                         + (f'<p style="margin:0 0 6px;font:400 14px/1.5 {FONT};color:{INK2}">Setores mais ativos: {e(top_sec)}</p>' if top_sec else "")
                         + f'<ul style="margin:0;padding-left:18px;font:400 14px/1.5 {FONT};color:{INK}">{rows}</ul></div>')

    # leads que apareceram nesta edição: empresas com transação em aberto (para a equipe abordar)
    leads_db = json.loads((DATA / "leads_db.json").read_text(encoding="utf-8")) if (DATA / "leads_db.json").exists() else {}
    fresh_leads = sorted([x for x in leads_db.get("leads", {}).values() if x.get("first_seen") == digest.get("date") and x.get("status") == "Em aberto"],
                         key=lambda x: -x.get("importance", 0))[:6]
    leads_html = ""
    if fresh_leads:
        rows = "".join(
            f'<tr><td style="{f"border-top:1px solid {SEP};" if k else ""}padding:12px 0;font:400 14.5px/1.5 {FONT};color:{INK}">'
            f'<span style="font-weight:600">{e(x.get("company"))}</span> {pill(x.get("signal"), SIGNAL, SIGNAL_SOFT)}<br>'
            f'<span style="color:{INK2};font-size:14px">{e(x.get("why"))}</span>'
            + (f'<br><span style="color:{MUTED};font-size:13px">Contraparte: {e(x.get("counterparty"))} · Assessores: {e(x.get("advisors") or "não divulgado")}</span>'
               if x.get("counterparty") and x.get("counterparty") != "não divulgado" else "")
            + '</td></tr>' for k, x in enumerate(fresh_leads))
        leads_html = (f'<h2 style="{label}">Leads novos</h2>'
                      f'<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%">{rows}</table>')

    def bullets(title: str, items: list[str]) -> str:
        if not items:
            return ""
        lis = "".join(f'<li style="margin:8px 0">{e(w)}</li>' for w in items)
        return (f'<h2 style="{label}">{title}</h2><div style="background:{BG};border-radius:16px;padding:8px 18px 8px 16px">'
                f'<ul style="margin:0;padding-left:18px;font:400 14.5px/1.5 {FONT};color:{INK2}">{lis}</ul></div>')

    watch_html = bullets("No radar", b.get("watchlist", []))
    conn_html = bullets("Conexões", b.get("connections", []))
    link = f"{SITE_URL}?e={today:%Y%m%d}"

    body = f"""<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><title>{e(subject)}</title></head>
<body style="margin:0;padding:0;background:{BG};-webkit-text-size-adjust:100%">
<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;background:{BG}"><tr><td align="center" style="padding:24px 10px 32px">
<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;max-width:640px">
<tr><td style="padding:0 4px 14px">
  <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%"><tr>
    <td style="width:32px"><div style="width:32px;height:32px;border-radius:9px;background:#000000;background-image:linear-gradient(160deg,#3a3a3c,#000000);
      color:#ffffff;text-align:center;font:700 10.5px/32px {FONT};letter-spacing:.02em">FPM</div></td>
    <td style="padding-left:10px;font:600 15px {FONT};color:{INK}">Portal FPM</td>
    <td align="right" style="font:400 13px {FONT};color:{MUTED}">{e(long_date(today))}</td>
  </tr></table>
</td></tr>
<tr><td style="background:#ffffff;border:1px solid {SEP};border-radius:22px;padding:28px 26px 30px">
  <div style="font:600 12px/1 {FONT};letter-spacing:.04em;text-transform:uppercase;color:{ACCENT}">Manchete do dia</div>
  <h1 style="margin:14px 0 12px;font:700 28px/1.16 {FONT_D};letter-spacing:-.03em;color:{INK}">{e(b["headline"])}</h1>
  <p style="margin:0;font:400 17px/1.45 {FONT};color:{INK2}">{e(b.get("mood"))}</p>
  <h2 style="{label}">O essencial</h2>
  <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%">{tldr}</table>
  {market_html}
  {week_html}
  {deals_html}
  {leads_html}
  {watch_html}
  {conn_html}
  <table role="presentation" cellspacing="0" cellpadding="0" style="margin:30px 0 0"><tr><td style="background:{ACCENT};border-radius:980px">
    <a href="{link}" style="display:inline-block;padding:12px 22px;font:600 15px {FONT};color:#ffffff;text-decoration:none">Abrir a edição completa</a>
  </td></tr></table>
</td></tr>
<tr><td style="padding:16px 12px 0;font:400 12px/1.5 {FONT};color:{MUTED};text-align:center">
  Resumo gerado automaticamente a partir de {digest["stats"]["sources_ok"]} veículos nacionais e internacionais.
  As análises são feitas por IA; confira a fonte original antes de usar.</td></tr>
</table>
</td></tr></table></body></html>"""

    text = "\n".join([
        f"PORTAL FPM · {long_date(today)}", "", b["headline"], b.get("mood", ""), "", "O ESSENCIAL",
        *[f"{n:02d}. {t}" for n, t in enumerate(b.get("tldr", []), 1)], "",
        *(["LEADS NOVOS", *[f"- {x.get('company')} ({x.get('signal')}): {x.get('why')}" for x in fresh_leads], ""] if fresh_leads else []),
        *(["NO RADAR", *[f"- {w}" for w in b.get("watchlist", [])], ""] if b.get("watchlist") else []),
        *(["CONEXÕES", *[f"- {c}" for c in b.get("connections", [])], ""] if b.get("connections") else []),
        f"Edição completa: {link}", "",
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
    ap.add_argument("--wait-until", metavar="HH:MM",
                    help="se a edição está pronta antes desse horário, espera até ele para enviar (no máximo 45 min)")
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
    # o e-mail é da manhã: o agendador do GitHub às vezes roda com horas de atraso, e aí não envia mais
    if today.time() > SEND_UNTIL and not (override or args.force or args.dry_run):
        print(f"Já passou das {SEND_UNTIL:%H:%M}: e-mail de hoje não enviado (agendamento atrasado).")
        return 0
    sent = json.loads(SENT_FILE.read_text()) if SENT_FILE.exists() else {}
    if sent.get("date") == today.date().isoformat() and not (override or args.force or args.dry_run):
        print("A edição de hoje já foi enviada.")
        return 0
    if args.wait_until and not override:
        h, m = map(int, args.wait_until.split(":"))
        target = today.replace(hour=h, minute=m, second=0, microsecond=0)
        wait = (target - today).total_seconds()
        if wait > 45 * 60:
            print(f"Cedo demais para o envio das {args.wait_until}; fica para a próxima execução.")
            return 0
        if wait > 0:
            print(f"Edição pronta; esperando até {args.wait_until} para enviar.")
            time.sleep(wait)
            today = datetime.now(BRT)

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
