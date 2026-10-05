#!/usr/bin/env python3
"""Gera site/data/digest.json com dados FICTÍCIOS para visualizar o layout antes da primeira execução real.

Todas as empresas e fatos aqui são inventados e o digest sai marcado com "demo": true
(o site mostra um aviso). A primeira execução do workflow substitui este arquivo.
"""
import json
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "site" / "data"
BRT = timezone(timedelta(hours=-3))
now = datetime.now(BRT)

CATS = {"mna": "M&A e Deals", "mercados": "Mercados e Bolsa", "macro": "Macro Brasil", "politica": "Política",
        "internacional": "Internacional", "empresas": "Empresas", "tech": "Tech e Inovação", "outros": "Outros"}

RAW = [
    ("mna", 9, "Exemplo: Grupo Alfa compra Rede Beta por R$ 4,2 bi e cria líder em farmácias no Nordeste",
     ["Veículo A", "Veículo B", "Veículo C"], True,
     dict(type="Aquisição", buyer="Grupo Alfa (fictício)", target="Rede Beta (fictícia)", value="R$ 4,2 bi", stage="Anunciado", sector="Varejo farmacêutico", advisors="Banco X, Banco Y")),
    ("mna", 8, "Exemplo: Gestora Gama levanta fundo de US$ 1 bi para infraestrutura na América Latina",
     ["Veículo B"], True,
     dict(type="Captação de fundo", buyer="Gestora Gama (fictícia)", target="Fundo Infra III", value="US$ 1 bi", stage="Concluído", sector="Infraestrutura", advisors="não divulgado")),
    ("mna", 7, "Exemplo: Delta Energia prepara IPO e contrata bancos para oferta no 1º semestre",
     ["Veículo A", "Veículo D"], True,
     dict(type="IPO", buyer="Mercado", target="Delta Energia (fictícia)", value="não divulgado", stage="Em preparação", sector="Energia renovável", advisors="Banco X")),
    ("mna", 6, "Exemplo: Cade aprova sem restrições joint venture entre Épsilon e Zeta em logística",
     ["Veículo C"], True,
     dict(type="Joint venture", buyer="Épsilon (fictícia)", target="JV com Zeta (fictícia)", value="não divulgado", stage="Aprovado pelo Cade", sector="Logística", advisors="não divulgado")),
    ("macro", 8, "Exemplo: Copom mantém juros e sinaliza cautela com expectativas de inflação",
     ["Veículo A", "Veículo B", "Veículo E"], False, None),
    ("mercados", 7, "Exemplo: Ibovespa sobe puxado por bancos; dólar recua com fluxo estrangeiro",
     ["Veículo D", "Veículo E"], False, None),
    ("politica", 7, "Exemplo: Congresso adia votação de projeto que altera regras de tributação de fundos",
     ["Veículo A", "Veículo F"], False, None),
    ("internacional", 8, "Exemplo: Banco central americano indica pausa nos cortes; Treasuries sobem",
     ["Veículo G", "Veículo H"], False, None),
    ("internacional", 6, "Exemplo: Tensão comercial entre grandes economias pressiona commodities metálicas",
     ["Veículo G"], False, None),
    ("empresas", 6, "Exemplo: Teta Varejo reporta queda de margem e revisa plano de abertura de lojas",
     ["Veículo B"], False, None),
    ("tech", 5, "Exemplo: Startup Iota de crédito com IA recebe aporte série B de R$ 300 mi",
     ["Veículo C"], True,
     dict(type="Rodada VC", buyer="Fundo Kappa (fictício)", target="Iota (fictícia)", value="R$ 300 mi", stage="Concluído", sector="Fintech", advisors="não divulgado")),
    ("empresas", 4, "Exemplo: Lambda Saneamento anuncia novo diretor financeiro",
     ["Veículo F"], False, None),
]

items, deals = [], []
for n, (cat, imp, headline, outlets, is_deal, deal) in enumerate(RAW):
    pub = (now - timedelta(minutes=35 * n + 12)).isoformat()
    it = {
        "id": f"demo{n:02d}", "title": headline, "headline": headline, "link": "https://example.com/", "published": pub,
        "region": "INTL" if cat == "internacional" else "BR",
        "outlets": [{"source": o, "link": "https://example.com/", "title": headline} for o in outlets],
        "snippet": "", "prescore": imp * 1.5, "category": cat, "importance": imp,
        "importance_reason": "Exemplo de justificativa da nota gerada pela IA.",
        "summary": "Resumo de exemplo: aqui a IA descreve o fato principal em duas ou três frases, com números e nomes citados pela fonte.",
        "involves": "Quem está envolvido: empresas, pessoas, órgãos reguladores, valores e setor.",
        "interpretation": "Como interpretar: contexto que falta no título, se é rotina ou ponto de inflexão e o que a notícia sinaliza.",
        "impact": "Impacto: quem ganha, quem perde e efeitos prováveis em ativos, setores e no pipeline de deals.",
        "sentiment": ["positivo", "negativo", "neutro", "misto"][n % 4],
        "entities": [w for w in headline.replace("Exemplo: ", "").split() if w[:1].isupper()][:3],
        "tags": [CATS[cat]], "is_deal": is_deal, "deal": deal, "ai": True,
    }
    items.append(it)
    if is_deal:
        deals.append(it)

digest = {
    "demo": True,
    "generated_at": now.isoformat(),
    "date": now.strftime("%Y-%m-%d"),
    "mode": "ai",
    "model": None,
    "categories": CATS,
    "brief": {
        "headline": "Exemplo de manchete do dia: consolidação no varejo e cautela nos juros",
        "mood": "Dados fictícios. Assim aparece o clima do dia escrito pela IA.",
        "tldr": [i["headline"].replace("Exemplo: ", "") + "." for i in items[:6]],
        "sections": [
            {"category": c, "text": f"Parágrafo de exemplo conectando as notícias de {CATS[c].lower()} e explicando o que significam para o seu dia.",
             "item_ids": [i["id"] for i in items if i["category"] == c][:3]}
            for c in ["mna", "macro", "mercados", "politica", "internacional"]
        ],
        "watchlist": ["Exemplo: ata do Copom na terça", "Exemplo: prazo do Cade para o deal Alfa/Beta", "Exemplo: dados de emprego nos EUA na sexta"],
        "connections": ["Exemplo: juros altos por mais tempo tendem a favorecer deals com pagamento em ações em vez de caixa."],
    },
    "market": [
        {"symbol": "^BVSP", "name": "Ibovespa", "unit": "pts", "price": 130000, "change_pct": 0.8, "spark": [128000, 128900, 129100, 128700, 130000]},
        {"symbol": "BRL=X", "name": "Dólar", "unit": "R$", "price": 5.4, "change_pct": -0.4, "spark": [5.45, 5.44, 5.43, 5.42, 5.4]},
        {"symbol": "^GSPC", "name": "S&P 500", "unit": "pts", "price": 5800, "change_pct": -0.2, "spark": [5790, 5820, 5810, 5812, 5800]},
    ],
    "items": items,
    "deals": deals,
    "sources": [{"id": "demo", "name": "Dados de exemplo", "ok": True, "count": len(items), "error": None}],
    "stats": {"raw": len(items), "unique": len(items), "sources_ok": 1, "sources_total": 1, "seconds": 0},
}

DATA.mkdir(parents=True, exist_ok=True)
(DATA / "digest.json").write_text(json.dumps(digest, ensure_ascii=False, indent=1), encoding="utf-8")
(DATA / "archive").mkdir(exist_ok=True)
(DATA / "archive" / "index.json").write_text("[]", encoding="utf-8")
print("Demo gravado em site/data/digest.json")
