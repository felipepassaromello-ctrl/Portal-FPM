#!/usr/bin/env python3
"""Gera o digest diário do portal.

Fluxo:
  1. Lê as fontes (config/sources.json) e baixa os RSS em paralelo.
  2. Normaliza, filtra pela janela de tempo e agrupa matérias repetidas
     (mesma notícia em vários veículos vira um único "cluster").
  3. Faz um pré-ranking por palavras-chave do perfil, peso da fonte e cobertura.
  4. Envia os clusters mais relevantes para o Claude, que devolve para cada um:
     categoria, nota de importância para o perfil, resumo, o que envolve,
     como interpretar, impacto e (quando houver) os dados do deal.
  5. Pede ao Claude o "briefing do dia" a partir das notícias analisadas.
  6. Busca cotações de mercado e grava site/data/digest.json + arquivo histórico.

Sem ANTHROPIC_API_KEY, a análise vem da rotina do Claude Code (ver ROUTINE.md), que grava
site/data/claude_analysis.json; o que ainda não foi analisado fica no modo heurístico.
"""
from __future__ import annotations

import argparse
import hashlib
import html
import json
import os
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / "config"
DATA = ROOT / "site" / "data"
ARCHIVE = DATA / "archive"
CACHE_FILE = DATA / "analysis_cache.json"
ROUTINE_FILE = DATA / "claude_analysis.json"  # escrito pela rotina do Claude Code
DEALS_DB = DATA / "deals_db.json"  # base histórica de deals, acumulada edição a edição

BRT = timezone(timedelta(hours=-3))
UA = "Mozilla/5.0 (compatible; PortalN1/1.0; +https://github.com/)"
MODEL = os.environ.get("CLAUDE_MODEL", "claude-opus-5-5")
MAX_ANALYZE = int(os.environ.get("MAX_ANALYZE", "90"))
BATCH_SIZE = 15
EDITION_CLOSE_HOUR = 8  # cada edição cobre as 24h até as 08h (BRT) do seu dia

CATEGORIES = {
    "mna": "M&A e Deals",
    "mercados": "Mercados e Bolsa",
    "macro": "Macro Brasil",
    "politica": "Política",
    "internacional": "Internacional",
    "empresas": "Empresas",
    "tech": "Tech e Inovação",
    "outros": "Outros",
}

# Heurística de categoria quando não há IA (ordem importa).
CATEGORY_HINTS = [
    ("mna", ["fusão", "aquisição", "adquire", "compra de", "compra fatia", "merger", "acquisition", "acquire", "takeover",
             "buyout", "ipo", "follow-on", "private equity", "venture", "joint venture", "deal", "oferta de ações", "cade"]),
    ("mercados", ["ibovespa", "bolsa", "dólar", "ações", "juros futuros", "treasur", "s&p", "nasdaq", "dow", "stocks",
                  "markets", "petróleo", "brent", "bitcoin", "commodit"]),
    ("macro", ["selic", "copom", "ipca", "inflação", "pib", "banco central", "fiscal", "arcabouço", "haddad", "tesouro"]),
    ("politica", ["lula", "congresso", "senado", "câmara", "stf", "eleição", "ministro", "governo", "planalto"]),
    ("internacional", ["trump", "china", "fed", "europa", "ucrânia", "rússia", "israel", "eua", "u.s.", "world", "tariff"]),
    ("tech", ["inteligência artificial", " ia ", "ai ", "startup", "nvidia", "openai", "tecnologia", "chip"]),
]

MARKET_SYMBOLS = [
    ("^BVSP", "Ibovespa", "pts"),
    ("BRL=X", "Dólar", "R$"),
    ("EURBRL=X", "Euro", "R$"),
    ("^GSPC", "S&P 500", "pts"),
    ("^IXIC", "Nasdaq", "pts"),
    ("^TNX", "Treasury 10a", "%"),
    ("BZ=F", "Brent", "US$"),
    ("GC=F", "Ouro", "US$"),
    ("BTC-USD", "Bitcoin", "US$"),
]


# ---------------------------------------------------------------- utilidades

def edition_window(now: datetime) -> tuple[datetime, datetime]:
    """Janela da edição vigente: das 08h do dia anterior às 08h do dia da edição (BRT).
    Antes das 08h, a edição vigente ainda é a de ontem."""
    end = now.replace(hour=EDITION_CLOSE_HOUR, minute=0, second=0, microsecond=0)
    if now < end:
        end -= timedelta(days=1)
    return end - timedelta(days=1), end


def log(msg: str) -> None:
    print(f"[{datetime.now(BRT):%H:%M:%S}] {msg}", flush=True)


def load_json(path: Path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return default


def write_json(path: Path, obj) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=1), encoding="utf-8")


def strip_html(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text or "")
    return re.sub(r"\s+", " ", html.unescape(text)).strip()


def fold(text: str) -> str:
    """minúsculas e sem acento, para comparação."""
    text = unicodedata.normalize("NFKD", text.lower())
    return "".join(c for c in text if not unicodedata.combining(c))


STOP = set("a o e de da do das dos em no na nos nas um uma para por com que se ao à as os the of to in and for on is at by with from as after over".split())


def tokens(title: str) -> set[str]:
    return {w for w in re.findall(r"[a-z0-9]+", fold(title)) if len(w) > 2 and w not in STOP}


def item_id(link: str, title: str) -> str:
    return hashlib.sha1((link or title).encode()).hexdigest()[:12]


# ---------------------------------------------------------------- coleta

def gnews_url(query: str, lang: str = "pt", when: str = "2d") -> str:
    if lang == "en":
        params = {"q": f"{query} when:{when}", "hl": "en-US", "gl": "US", "ceid": "US:en"}
    else:
        params = {"q": f"{query} when:{when}", "hl": "pt-BR", "gl": "BR", "ceid": "BR:pt-419"}
    return "https://news.google.com/rss/search?" + urllib.parse.urlencode(params)


def entry_time(entry) -> datetime | None:
    for key in ("published_parsed", "updated_parsed"):
        t = entry.get(key)
        if t:
            return datetime(*t[:6], tzinfo=timezone.utc)
    for key in ("published", "updated"):
        if entry.get(key):
            try:
                return parsedate_to_datetime(entry[key]).astimezone(timezone.utc)
            except (TypeError, ValueError):
                pass
    return None


def fetch_source(src: dict, cutoff: datetime) -> tuple[dict, list[dict], str | None]:
    src, items, err = _fetch_source(src, cutoff)
    if (err or not items) and src.get("url") and src["url"].startswith("http"):
        # RSS direto falhou ou veio vazio: tenta o mesmo veículo via Google News.
        domain = urllib.parse.urlparse(src["url"]).hostname.removeprefix("www.").removeprefix("feeds.")
        domain = {"folha.uol.com.br": "folha.uol.com.br", "a.dj.com": "wsj.com", "bloomberg.com": "bloomberg.com"}.get(domain, domain)
        fb = {**src, "gnews": f"site:{domain}"}
        fb.pop("url")
        _, fb_items, fb_err = _fetch_source(fb, cutoff)
        if fb_items:
            return src, fb_items, None
        err = err or fb_err
    return src, items, err


def _fetch_source(src: dict, cutoff: datetime) -> tuple[dict, list[dict], str | None]:
    import feedparser
    url = src.get("url") or gnews_url(src["gnews"], src.get("lang", "pt"), src.get("when", "2d"))
    if src.get("lookback_hours"):  # fontes de baixo volume podem olhar mais para trás
        cutoff = datetime.now(timezone.utc) - timedelta(hours=src["lookback_hours"])
    try:
        if url.startswith("file:") or os.path.exists(url):
            parsed = feedparser.parse(url.removeprefix("file://"))
        else:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/rss+xml, application/xml, */*"})
            with urllib.request.urlopen(req, timeout=20) as resp:
                parsed = feedparser.parse(resp.read())
    except Exception as exc:  # noqa: BLE001 - qualquer falha de rede não pode derrubar o digest
        return src, [], f"{type(exc).__name__}: {exc}"

    items = []
    is_gnews = "gnews" in src
    for e in parsed.entries[:60]:
        title = strip_html(e.get("title", ""))
        if not title:
            continue
        published = entry_time(e)
        if published and published < cutoff:
            continue
        outlet = src["name"]
        if is_gnews:
            # Google News: "Título - Veículo"
            m = re.match(r"^(.*)\s+-\s+([^-]{2,60})$", title)
            if m:
                title, gn_outlet = m.group(1).strip(), m.group(2).strip()
                if src["id"].startswith("q-"):
                    outlet = gn_outlet
            src_name = (e.get("source") or {}).get("title")
            if src_name and src["id"].startswith("q-"):
                outlet = src_name
        snippet = strip_html(e.get("summary", ""))[:600]
        if is_gnews:
            snippet = ""  # o resumo do Google News só repete o título
        items.append({
            "id": item_id(e.get("link", ""), title),
            "title": title,
            "link": e.get("link", ""),
            "source": outlet,
            "source_id": src["id"],
            "region": src.get("region", "BR"),
            "weight": src.get("weight", 1.0),
            "published": (published or datetime.now(timezone.utc)).isoformat(),
            "snippet": snippet,
        })
    return src, items, None


def collect(sources_cfg: dict) -> tuple[list[dict], list[dict]]:
    cutoff = datetime.now(timezone.utc) - timedelta(hours=sources_cfg.get("lookback_hours", 30))
    all_items, status = [], []
    with ThreadPoolExecutor(max_workers=12) as pool:
        for src, items, err in pool.map(lambda s: fetch_source(s, cutoff), sources_cfg["sources"]):
            status.append({"id": src["id"], "name": src["name"], "ok": err is None, "count": len(items), "error": err})
            all_items.extend(items)
            log(f"{'OK ' if err is None else 'ERR'} {src['id']:<20} {len(items):>3} itens {err or ''}")
    return all_items, status


# ---------------------------------------------------------------- agrupamento e ranking

def cluster(items: list[dict]) -> list[dict]:
    """Junta a mesma notícia publicada em veículos diferentes (similaridade de Jaccard nos títulos)."""
    items = sorted(items, key=lambda i: -i["weight"])
    clusters: list[dict] = []
    for it in items:
        tk = tokens(it["title"])
        best, best_sim = None, 0.0
        for c in clusters:
            inter = len(tk & c["_tokens"])
            if not inter:
                continue
            sim = inter / len(tk | c["_tokens"])
            if sim > best_sim:
                best, best_sim = c, sim
        if best and best_sim >= 0.5:
            if all(o["link"] != it["link"] for o in best["outlets"]):
                best["outlets"].append({"source": it["source"], "link": it["link"], "title": it["title"]})
            best["published"] = min(best["published"], it["published"])
            if not best["snippet"] and it["snippet"]:
                best["snippet"] = it["snippet"]
            best["region_set"].add(it["region"])
            best["member_ids"].append(it["id"])
            continue
        clusters.append({
            **it,
            "_tokens": tk,
            "outlets": [{"source": it["source"], "link": it["link"], "title": it["title"]}],
            "region_set": {it["region"]},
            "member_ids": [it["id"]],
        })
    for c in clusters:
        c.pop("_tokens")
        c["region"] = "BR" if "BR" in c.pop("region_set") else "INTL"
    return clusters


def has_word(kw: str, text: str) -> bool:
    return re.search(r"(?<![a-z0-9])" + re.escape(fold(kw)) + r"(?![a-z0-9])", text) is not None


def prescore(c: dict, profile: dict) -> float:
    text = fold(f"{c['title']} {c['snippet']}")
    score = c["weight"] * 2
    for kw, w in profile.get("keywords_boost", {}).items():
        if has_word(kw, text):
            score += w
    for kw in profile.get("deprioritize", []):
        if has_word(kw, text):
            score -= 4
    score += min(len({o["source"] for o in c["outlets"]}) - 1, 4) * 1.5
    return round(score, 2)


def guess_category(c: dict) -> str:
    text = f" {fold(c['title'] + ' ' + c['snippet'])} "
    for cat, words in CATEGORY_HINTS:
        if any(fold(w) in text for w in words):
            return cat
    return "empresas" if c["region"] == "BR" else "internacional"


# ---------------------------------------------------------------- IA (Claude)

ANALYSIS_SCHEMA = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {"type": "string"},
                    "headline": {"type": "string"},
                    "category": {"type": "string", "enum": list(CATEGORIES)},
                    "importance": {"type": "integer"},
                    "importance_reason": {"type": "string"},
                    "summary": {"type": "string"},
                    "involves": {"type": "string"},
                    "interpretation": {"type": "string"},
                    "impact": {"type": "string"},
                    "sentiment": {"type": "string", "enum": ["positivo", "negativo", "neutro", "misto"]},
                    "entities": {"type": "array", "items": {"type": "string"}},
                    "tags": {"type": "array", "items": {"type": "string"}},
                    "is_deal": {"type": "boolean"},
                    "deal": {
                        "type": "object",
                        "properties": {
                            "type": {"type": "string"},
                            "buyer": {"type": "string"},
                            "target": {"type": "string"},
                            "value": {"type": "string"},
                            "stage": {"type": "string"},
                            "sector": {"type": "string"},
                            "advisors": {"type": "string"},
                        },
                        "required": ["type", "buyer", "target", "value", "stage", "sector", "advisors"],
                        "additionalProperties": False,
                    },
                },
                "required": ["id", "headline", "category", "importance", "importance_reason", "summary", "involves",
                             "interpretation", "impact", "sentiment", "entities", "tags", "is_deal", "deal"],
                "additionalProperties": False,
            },
        }
    },
    "required": ["items"],
    "additionalProperties": False,
}

BRIEF_SCHEMA = {
    "type": "object",
    "properties": {
        "headline": {"type": "string"},
        "mood": {"type": "string"},
        "tldr": {"type": "array", "items": {"type": "string"}},
        "sections": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "category": {"type": "string", "enum": list(CATEGORIES)},
                    "text": {"type": "string"},
                    "item_ids": {"type": "array", "items": {"type": "string"}},
                },
                "required": ["category", "text", "item_ids"],
                "additionalProperties": False,
            },
        },
        "watchlist": {"type": "array", "items": {"type": "string"}},
        "connections": {"type": "array", "items": {"type": "string"}},
    },
    "required": ["headline", "mood", "tldr", "sections", "watchlist", "connections"],
    "additionalProperties": False,
}


def system_prompt(profile: dict) -> str:
    return f"""Você é o editor-chefe e analista sênior de um portal de notícias pessoal, escrito para uma única pessoa.

Leitor: {profile.get('name', 'o leitor')} — {profile.get('role', '')}.
Contexto do leitor: {profile.get('description', '')}
Prioridades (em ordem): {'; '.join(profile.get('priorities', []))}.
Baixa prioridade: {', '.join(profile.get('deprioritize', []))}.

Seu trabalho é poupar o tempo do leitor: ele precisa chegar ao escritório sabendo o que importa, por que importa e o que observar.
Escreva sempre em português do Brasil, em tom de analista de banco de investimento: direto, específico, sem floreios e sem clichês.
Use números, nomes de empresas, pessoas e valores sempre que a fonte trouxer. Nunca invente fatos, valores ou nomes que não estejam no material;
quando algo não estiver claro, diga que a informação não foi divulgada. Interpretação e impacto são análise sua, e devem ser tratados como tal."""


ANALYSIS_INSTRUCTIONS = """Analise cada notícia abaixo (título, veículos que publicaram e trecho) e devolva um objeto por notícia, com o mesmo "id".

Campos:
- headline: título em português, claro e informativo (traduza se estiver em inglês), até 110 caracteres.
- category: mna (fusões, aquisições, IPOs, follow-ons, PE/VC, dívida corporativa, reestruturações), mercados (bolsa, câmbio, juros, commodities), macro (economia brasileira, BC, fiscal), politica (política brasileira), internacional (geopolítica e economia global), empresas (resultados e estratégia corporativa sem deal), tech, outros.
- importance: 1 a 10, para ESTE leitor. 9-10 = muda o dia dele ou o mercado (deal grande no Brasil, decisão de juros, choque político/geopolítico); 7-8 = precisa saber antes da primeira reunião; 5-6 = vale saber; 3-4 = periférico; 1-2 = ruído. Notícia coberta por vários veículos tende a ser mais importante.
- importance_reason: uma frase curta explicando a nota.
- summary: 2 a 3 frases com o fato principal e os números.
- involves: quem e o quê está envolvido (empresas, pessoas, órgãos, valores, setor).
- interpretation: como ler a notícia; o que ela sinaliza, o contexto que falta no título, se é rotina ou ponto de inflexão.
- impact: quem ganha, quem perde, efeito provável em ativos, setores ou no mercado brasileiro; para M&A, implicações para concorrentes, múltiplos e pipeline de deals.
- sentiment: para o mercado/empresas envolvidas.
- entities: até 6 nomes próprios relevantes (empresas, pessoas, órgãos).
- tags: até 4 palavras-chave curtas.
- is_deal: true se for uma transação (M&A, IPO, follow-on, emissão relevante, investimento de PE/VC, venda de ativo, JV, reestruturação).
- deal: se is_deal, preencha tipo (ex.: Aquisição, Fusão, IPO, Follow-on, Venda de ativo, Investimento PE, Rodada VC, Emissão de dívida, Reestruturação), comprador/investidor, alvo, valor (com moeda, ou "não divulgado"), estágio (Rumor, Em negociação, Anunciado, Aprovado pelo Cade, Concluído, Cancelado), setor e assessores (ou "não divulgado"). Se não for deal, preencha todos com string vazia.

Notícias:
"""

BRIEF_INSTRUCTIONS = """Com base nas notícias analisadas abaixo (já ordenadas por importância), escreva o briefing matinal do leitor — a newsletter que substitui todas as outras.

- headline: a manchete do dia em uma frase forte.
- mood: uma frase sobre o clima do dia (ex.: "Dia de aversão a risco com Fed e fiscal no radar").
- tldr: 5 a 7 tópicos com o essencial; cada um com 1-2 frases, específico, com números.
- sections: um parágrafo curto (3-5 frases) por categoria que tenha notícias relevantes, conectando os fatos e dizendo o que significam; item_ids = ids das notícias citadas.
- watchlist: 3 a 6 pontos para acompanhar hoje/nos próximos dias (agenda, decisões, desdobramentos de deals).
- connections: 2 a 4 conexões não óbvias entre notícias diferentes (ex.: como um fato internacional afeta um deal ou setor no Brasil).

Se houver fontes oficiais (fatos relevantes na CVM, atos do Cade no Diário Oficial, dados do Banco Central) relevantes para o leitor, use-as no tldr ou nas seções e diga a fonte (ex.: "em fato relevante à CVM"). Não liste fatos relevantes rotineiros.

Notícias com "ja_noticiado_em" tratam de um deal que já saiu em edição anterior, sem mudança de estágio: não as trate como novidade nem as repita no tldr. Notícias com "atualizacao_de_estagio" são desdobramentos de um deal já noticiado: mencione como atualização (ex.: "aprovado pelo Cade", "concluído").

Notícias analisadas:
"""


def claude_client():
    if not os.environ.get("ANTHROPIC_API_KEY"):
        return None
    import anthropic
    return anthropic.Anthropic(max_retries=4, timeout=600)


def call_claude(client, profile: dict, instructions: str, payload: str, schema: dict, effort: str) -> dict | None:
    """Uma chamada com saída estruturada. Usa fallback de servidor caso o modelo recuse."""
    try:
        resp = client.beta.messages.create(
            model=MODEL,
            max_tokens=16000,
            betas=["server-side-fallback-2026-07-01"],
            fallbacks="default",
            thinking={"type": "adaptive"},
            output_config={"effort": effort, "format": {"type": "json_schema", "schema": schema}},
            system=system_prompt(profile),
            messages=[{"role": "user", "content": instructions + payload}],
        )
    except Exception as exc:  # noqa: BLE001
        log(f"Claude falhou: {type(exc).__name__}: {exc}")
        return None
    if resp.stop_reason == "refusal":
        log("Claude recusou este lote; seguindo sem análise para ele.")
        return None
    if resp.stop_reason == "max_tokens":
        log("Resposta truncada por max_tokens; lote descartado.")
        return None
    text = "".join(b.text for b in resp.content if b.type == "text")
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        log("JSON inválido devolvido pelo modelo.")
        return None


def analyze(client, profile: dict, clusters: list[dict], cache: dict) -> int:
    pending = [c for c in clusters if c["id"] not in cache]
    log(f"Análise IA: {len(clusters) - len(pending)} em cache, {len(pending)} novas.")
    batches = [pending[i:i + BATCH_SIZE] for i in range(0, len(pending), BATCH_SIZE)]

    def run(batch):
        lines = []
        for c in batch:
            outlets = ", ".join(sorted({o["source"] for o in c["outlets"]}))
            alt = " | ".join(o["title"] for o in c["outlets"][1:3])
            lines.append(json.dumps({"id": c["id"], "titulo": c["title"], "veiculos": outlets,
                                     "outros_titulos": alt, "trecho": c["snippet"][:500],
                                     "regiao": c["region"]}, ensure_ascii=False))
        return call_claude(client, profile, ANALYSIS_INSTRUCTIONS, "\n".join(lines), ANALYSIS_SCHEMA, "low")

    with ThreadPoolExecutor(max_workers=4) as pool:
        for result in pool.map(run, batches):
            for a in (result or {}).get("items", []):
                cache[a["id"]] = a
    return len(pending)


def build_brief(client, profile: dict, items: list[dict]) -> dict | None:
    top = [i for i in items if i.get("ai")][:45]
    if not top:
        return None
    payload = "\n".join(json.dumps({
        "id": i["id"], "categoria": i["category"], "nota": i["importance"], "titulo": i["headline"],
        "resumo": i["summary"], "impacto": i["impact"], "veiculos": [o["source"] for o in i["outlets"]],
    }, ensure_ascii=False) for i in top)
    return call_claude(client, profile, BRIEF_INSTRUCTIONS, payload, BRIEF_SCHEMA, "medium")


def heuristic_brief(items: list[dict]) -> dict:
    top = items[:7]
    return {
        "headline": top[0]["headline"] if top else "Sem notícias coletadas",
        "mood": "Briefing automático por palavras-chave: a análise do dia pelo Claude ainda não rodou.",
        "tldr": [f"{i['headline']} ({i['outlets'][0]['source']})" for i in top],
        "sections": [],
        "watchlist": [],
        "connections": [],
    }


# ---------------------------------------------------------------- mercado

def fetch_quote(symbol: str) -> dict | None:
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{urllib.parse.quote(symbol)}?range=5d&interval=1d"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=15) as resp:
            res = json.load(resp)["chart"]["result"][0]
        meta = res["meta"]
        closes = [c for c in res["indicators"]["quote"][0]["close"] if c is not None]
        price = meta.get("regularMarketPrice") or closes[-1]
        prev = meta.get("chartPreviousClose") if len(closes) < 2 else closes[-2]
        if price == closes[-1] and len(closes) >= 2:
            prev = closes[-2]
        return {"price": price, "change_pct": (price / prev - 1) * 100 if prev else 0.0, "spark": closes[-5:]}
    except Exception:  # noqa: BLE001
        return None


def fetch_market() -> list[dict]:
    with ThreadPoolExecutor(max_workers=8) as pool:
        quotes = list(pool.map(lambda s: fetch_quote(s[0]), MARKET_SYMBOLS))
    return [{"symbol": s, "name": n, "unit": u, **q} for (s, n, u), q in zip(MARKET_SYMBOLS, quotes) if q]


# ---------------------------------------------------------------- montagem

def deal_key(deal: dict | None) -> str:
    """Identifica o mesmo deal entre matérias e edições (comprador + alvo, normalizados)."""
    if not deal:
        return ""
    buyer = re.sub(r"\(.*?\)", "", deal.get("buyer", ""))
    target = re.sub(r"\(.*?\)", "", deal.get("target", ""))
    return re.sub(r"[^a-z0-9]+", "", fold(buyer + "|" + target))[:48]


def norm_stage(stage: str) -> str:
    return re.sub(r"\s*\(.*?\)", "", fold(stage or "")).strip()


def previous_deals(edition_date: str, days: int = 10) -> dict[str, dict]:
    """Deals publicados nas edições anteriores (mais recente primeiro), por chave."""
    seen: dict[str, dict] = {}
    for path in sorted(ARCHIVE.glob("????-??-??.json"), reverse=True):
        if path.stem >= edition_date:
            continue
        if (datetime.fromisoformat(edition_date) - datetime.fromisoformat(path.stem)).days > days:
            break
        for it in load_json(path, {}).get("deals", []):
            k = deal_key(it.get("deal"))
            if k and k not in seen:
                seen[k] = {"date": path.stem, "stage": (it.get("deal") or {}).get("stage", "")}
    return seen


def mark_deal_repeats(items: list[dict], prev: dict[str, dict]) -> list[dict]:
    """Marca deals já noticiados (sem mudança de estágio) e devolve a lista de deals únicos desta edição."""
    best: dict[str, dict] = {}
    for it in items:
        if not it.get("is_deal") or not it.get("deal"):
            continue
        k = deal_key(it["deal"])
        if not k:
            continue
        old = prev.get(k)
        if old and norm_stage(old["stage"]) == norm_stage(it["deal"].get("stage", "")):
            it["repeat"] = {"date": old["date"]}
            continue
        if old:
            it["update"] = {"date": old["date"], "from": old["stage"]}
        if k in best:  # mesmo deal em várias matérias desta edição: fica a de maior nota
            it["dup_of"] = best[k]["id"]
            continue
        best[k] = it
    return list(best.values())


def update_deals_db(items: list[dict], edition_date: str) -> dict:
    """Acumula os deals de cada edição numa base única: um registro por deal (comprador + alvo), com a linha do
    tempo de estágios. Repetições no mesmo estágio só atualizam a data da última menção."""
    db = load_json(DEALS_DB, {"deals": {}})
    deals = db.setdefault("deals", {})
    if not deals and not db.get("backfilled"):
        db["backfilled"] = True  # primeira vez: carrega os deals das edições já arquivadas
        write_json(DEALS_DB, db)
        for path in sorted(ARCHIVE.glob("????-??-??.json")):
            if path.stem < edition_date:
                update_deals_db(load_json(path, {}).get("items", []), path.stem)
        db = load_json(DEALS_DB, {"deals": {}})
        deals = db["deals"]
    for it in sorted(items, key=lambda i: -i.get("importance", 0)):
        d = it.get("deal") if it.get("is_deal") and it.get("ai") else None
        k = deal_key(d)
        if not k:
            continue
        e = deals.setdefault(k, {"key": k, "first_seen": edition_date, "timeline": [], "mentions": 0, "ids": []})
        if it["id"] in e["ids"]:
            continue  # a mesma matéria já foi contada numa coleta anterior
        e["ids"] = (e["ids"] + [it["id"]])[-30:]
        e["mentions"] += 1
        for f in ("type", "buyer", "target", "sector"):
            if d.get(f):
                e[f] = d[f]
        for f in ("value", "advisors"):
            if d.get(f) and fold(d[f]) != "nao divulgado":
                e[f] = d[f]
            e.setdefault(f, d.get(f, ""))
        e["importance"] = max(e.get("importance", 0), it.get("importance", 0))
        e["last_seen"] = max(e.get("last_seen", edition_date), edition_date)
        e.setdefault("headline", it["headline"])
        e.setdefault("link", it["link"])
        last = e["timeline"][-1] if e["timeline"] else None
        if not last or norm_stage(last["stage"]) != norm_stage(d.get("stage", "")):
            e["timeline"].append({"date": edition_date, "stage": d.get("stage", ""), "headline": it["headline"],
                                  "link": it["link"], "source": it["outlets"][0]["source"]})
            e["stage"] = d.get("stage", "")
    if len(deals) > 1500:  # guarda os mais recentes
        keep = sorted(deals.values(), key=lambda x: x.get("last_seen", ""), reverse=True)[:1500]
        db["deals"] = {x["key"]: x for x in keep}
    db["updated_at"] = datetime.now(BRT).isoformat()
    write_json(DEALS_DB, db)
    return db


def merge_item(c: dict, a: dict | None, base_score: float) -> dict:
    out = {
        "id": c["id"],
        "title": c["title"],
        "link": c["link"],
        "published": c["published"],
        "region": c["region"],
        "outlets": c["outlets"],
        "ids": c.get("member_ids", [c["id"]]),
        "snippet": c["snippet"],
        "prescore": base_score,
    }
    if a:
        out.update({k: a[k] for k in ("headline", "category", "importance", "importance_reason", "summary", "involves",
                                      "interpretation", "impact", "sentiment", "entities", "tags", "is_deal")})
        out["importance"] = max(1, min(10, int(out["importance"])))
        out["deal"] = a["deal"] if a.get("is_deal") else None
        out["ai"] = True
    else:
        imp = max(1, min(10, round(base_score / 1.6)))
        out.update({"headline": c["title"], "category": guess_category(c), "importance": imp,
                    "importance_reason": "Nota estimada por palavras-chave (sem IA).",
                    "summary": c["snippet"][:400], "involves": "", "interpretation": "", "impact": "",
                    "sentiment": "neutro", "entities": [], "tags": [], "is_deal": False, "deal": None, "ai": False})
    return out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--no-ai", action="store_true", help="não chama o Claude (modo heurístico)")
    ap.add_argument("--no-market", action="store_true")
    ap.add_argument("--no-official", action="store_true", help="não consulta CVM, Diário Oficial e Banco Central")
    ap.add_argument("--sources", default=str(CONFIG / "sources.json"))
    args = ap.parse_args()

    started = time.time()
    sources_cfg = load_json(Path(args.sources), {"sources": []})
    profile = load_json(CONFIG / "profile.json", {})
    now = datetime.now(BRT)
    win_start, win_end = edition_window(now)
    today = win_end.strftime("%Y-%m-%d")  # data da edição vigente

    raw, status = collect(sources_cfg)
    all_clusters = cluster(raw)
    for c in all_clusters:
        c["prescore"] = prescore(c, profile)
    all_clusters.sort(key=lambda c: -c["prescore"])
    # Cada notícia pertence a uma única edição, pela hora da primeira publicação.
    ts = lambda c: datetime.fromisoformat(c["published"])
    clusters = [c for c in all_clusters if win_start <= ts(c) < win_end]
    upcoming = [c for c in all_clusters if ts(c) >= win_end]
    log(f"{len(raw)} itens brutos -> {len(all_clusters)} notícias únicas; edição {today}: {len(clusters)}, "
        f"desde o fechamento: {len(upcoming)}")

    client = None if args.no_ai else claude_client()
    cache_all = load_json(CACHE_FILE, {})
    cache = cache_all.get(today, {})
    # Reaproveita análises de ontem para notícias que continuam no ar (evita custo repetido).
    for day, entries in cache_all.items():
        if day != today:
            for k, v in entries.items():
                cache.setdefault(k, v)

    to_analyze = clusters[:MAX_ANALYZE]
    new_count = 0
    if client:
        new_count = analyze(client, profile, to_analyze, cache)
    else:
        log("Sem ANTHROPIC_API_KEY (ou --no-ai): modo heurístico.")

    # Análises feitas pela rotina do Claude Code (sem API). Procura por qualquer matéria do grupo,
    # porque o id do grupo pode mudar quando um veículo de peso maior passa a cobrir a notícia.
    routine = load_json(ROUTINE_FILE, {"items": {}, "brief": None})
    analyzed_ids = {c["id"] for c in to_analyze}

    def analysis_for(c: dict) -> dict | None:
        for i in [c["id"], *c.get("member_ids", [])]:
            if c["id"] in analyzed_ids and i in cache:
                return cache[i]
            if i in routine["items"]:
                return routine["items"][i]
        return None

    def build_items(cs: list[dict]) -> list[dict]:
        out = [merge_item(c, analysis_for(c), c["prescore"]) for c in cs]
        out = [i for i in out if i["ai"] or i["prescore"] > 0]
        out.sort(key=lambda i: i["published"], reverse=True)
        out.sort(key=lambda i: (-i["importance"], -i["prescore"]))
        return out

    items = build_items(clusters)
    upcoming_items = build_items(upcoming)
    unique_deals = mark_deal_repeats(items, previous_deals(today))
    log(f"Deals: {len(unique_deals)} únicos; {sum(1 for i in items if i.get('repeat'))} já noticiados antes.")
    db = update_deals_db(items, today)
    log(f"Base de deals: {len(db['deals'])} registros.")

    previous = load_json(DATA / "digest.json", {})

    # Fontes oficiais: consulta uma vez por edição e repete só enquanto alguma delas não tiver respondido.
    official, official_status = {}, []
    prev_off = previous.get("official") or {}
    if args.no_official:
        pass
    elif previous.get("date") == today and prev_off.get("complete"):
        official, official_status = prev_off, previous.get("official_status", [])
        log("Fontes oficiais: reaproveitadas da coleta anterior desta edição.")
    else:
        from official import collect_official
        official, official_status = collect_official(win_end.date())
        official["complete"] = all(s["ok"] for s in official_status) and bool(official.get("filings"))
        for st in official_status:
            log(f"{'OK ' if st['ok'] else 'ERR'} {st['id']:<20} {st['count']:>3} {st['error'] or ''}")
    brief = None
    if client and new_count == 0 and previous.get("date") == today and previous.get("mode") == "ai" and not previous.get("demo"):
        brief = previous.get("brief")  # nada novo: reaproveita o briefing e economiza uma chamada
        log("Sem notícias novas: briefing anterior reaproveitado.")
    if client and not brief:
        brief = build_brief(client, profile, items)
    rb = routine.get("brief") or {}
    if not brief and rb.get("date") == today:
        brief = {k: v for k, v in rb.items() if k != "date"}
    brief = brief or heuristic_brief(items)

    used = {i["id"] for i in items}
    write_json(CACHE_FILE, {today: {k: v for k, v in cache.items() if k in used}})

    digest = {
        "generated_at": now.isoformat(),
        "date": today,
        "window": {"start": win_start.isoformat(), "end": win_end.isoformat()},
        "mode": "ai" if any(i["ai"] for i in items) else "heuristic",
        "model": MODEL if client else None,
        "analysis": {"by": "api" if client else "rotina", "updated_at": None if client else routine.get("updated_at"),
                     "analyzed": sum(i["ai"] for i in items)},
        "categories": CATEGORIES,
        "brief": brief,
        "market": [] if args.no_market else fetch_market(),
        "items": items[:300],
        "deals": unique_deals,
        "upcoming": upcoming_items[:150],
        "sources": status + official_status,
        "official": official,
        "official_status": official_status,
        "stats": {
            "raw": len(raw),
            "unique": len(clusters),
            "unique_all": len(all_clusters),
            "sources_ok": sum(s["ok"] for s in status),
            "sources_total": len(status),
            "seconds": round(time.time() - started, 1),
        },
    }
    write_json(DATA / "digest.json", digest)
    write_json(ARCHIVE / f"{today}.json", digest)
    days = sorted((p.stem for p in ARCHIVE.glob("????-??-??.json")), reverse=True)[:90]
    for old in ARCHIVE.glob("????-??-??.json"):
        if old.stem not in days:
            old.unlink()
    write_json(ARCHIVE / "index.json", days)
    log(f"Digest gravado: {len(digest['items'])} notícias, {len(digest['deals'])} deals, modo {digest['mode']}.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
