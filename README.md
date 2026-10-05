# Portal FPM

**Site:** https://felipepassaromello-ctrl.github.io/Portal-FPM/

Portal de notícias pessoal que se atualiza sozinho: M&A e deals, mercados, macro, política, internacional e empresas, com resumo, nota de importância, como interpretar e impacto de cada notícia, além de um briefing do dia escrito por IA.

## Como funciona

```
GitHub Actions (de hora em hora)
  └─ scripts/build_digest.py
       1. baixa ~28 feeds (Valor, Pipeline, Brazil Journal, InfoMoney, NeoFeed, Exame, The News,
          Estadão, Folha, g1, Bloomberg Línea, Bloomberg, WSJ, FT, Reuters, CNBC, PR Newswire M&A
          + buscas temáticas de M&A/IPO no Google News)
       2. agrupa a mesma notícia publicada em vários veículos (quanto mais veículos, maior o peso)
       3. faz um pré-ranking pelo seu perfil (config/profile.json)
       4. Claude analisa cada notícia (via rotina do Claude Code ou via API, ver abaixo): categoria, nota 1–10 para você, resumo,
          o que envolve, como interpretar, impacto, sentimento, entidades e dados do deal
       5. Claude escreve o briefing: manchete, "o que você precisa saber", parágrafos por
          editoria, radar, conexões entre notícias e uma pergunta para a reunião
       6. busca cotações (Ibovespa, dólar, euro, S&P, Nasdaq, Treasury 10a, Brent, ouro, bitcoin)
  └─ grava site/data/digest.json + histórico em site/data/archive/
  └─ publica o site no GitHub Pages
```

O site (`site/`) é HTML/CSS/JS puro, sem build. Ele confere a cada 5 minutos se há uma edição nova e avisa quando chegam notícias.

### O que dá para fazer no site

- **Briefing**: o resumo do dia para ler em 2–3 minutos, com o top 8 por relevância, o mapa do dia (volume e notícias importantes por editoria) e quem está nas notícias.
- **Todas as notícias**: busca, filtro por editoria, região, nota mínima, só não lidas e salvas, e ordenação por relevância para você, importância ou horário. Clique numa manchete para abrir a análise completa e os links de todos os veículos que publicaram.
- **Deals**: tabela de transações com tipo, comprador, alvo, valor, estágio, setor e assessores.
- **Fontes**: quais veículos responderam nesta edição.
- **Edições anteriores** (últimos 90 dias), tema claro/escuro, notificação do navegador para notícias com nota ≥ 8.
- **Personalizar**: termos para priorizar ou esconder e peso por editoria. Fica salvo no navegador.
- **Atalhos**: `j`/`k` navegar, `Enter` abrir a análise, `o` abrir a matéria, `m` marcar como lida, `s` salvar, `/` buscar, `1`–`4` trocar de aba, `r` atualizar.

## Análise por IA: dois modos

- **Rotina do Claude Code (modo atual, sem custo extra):** uma sessão agendada do Claude Code, que usa o plano do usuário, roda nos dias úteis por volta das 08:15. Ela segue o [`ROUTINE.md`](ROUTINE.md): lê as notícias coletadas, escreve a análise e o briefing com `scripts/routine.py` e publica `site/data/claude_analysis.json`. A coleta continua de hora em hora no GitHub Actions, e as notícias que chegam depois da rotina aparecem com nota por palavras-chave e a etiqueta "sem análise".
- **API da Anthropic (opcional, pago à parte):** cadastre o segredo `ANTHROPIC_API_KEY` no repositório e o workflow passa a analisar tudo a cada execução, sem depender da rotina.

## Como colocar no ar

1. **GitHub Pages**: em *Settings → Pages → Build and deployment*, escolha **Source: GitHub Actions**.
2. **Branch**: faça o merge desta branch na `main`. O workflow `Atualizar portal` só roda agendado a partir da branch padrão.
3. **Primeira edição**: em *Actions → Atualizar portal → Run workflow*. Em 2–4 minutos o endereço aparece no resumo da execução (algo como `https://<seu-usuario>.github.io/<repositório>/`). Salve como página inicial do navegador do escritório.

Até a primeira execução, o site mostra **dados de exemplo fictícios**, com um aviso no topo.

### Horários

Definidos em `.github/workflows/update.yml`, no horário de Brasília: 05:40 (edição da manhã), de hora em hora das 06h às 20h em dias úteis, e 09h, 15h e 19h nos fins de semana. O GitHub pode atrasar execuções agendadas em alguns minutos.

## Personalização

- `config/profile.json`: quem você é, suas prioridades, o que ignorar e palavras-chave com peso. A IA usa isso para dar a nota de importância **para você**.
- `config/sources.json`: fontes. Use `url` para RSS direto ou `gnews` para uma busca no Google News (serve para veículos sem RSS ou com paywall, como Valor, Pipeline e Estadão). Se um RSS direto falhar, o script tenta automaticamente o mesmo veículo pelo Google News.
- Variáveis opcionais (*Settings → Secrets and variables → Actions → Variables*):
  - `CLAUDE_MODEL`: o padrão é `claude-opus-5-5`. Use `claude-sonnet-5-5` para gastar cerca de metade.
  - `MAX_ANALYZE`: quantas notícias por execução vão para a IA (padrão 90).

## Custo

Coleta e site são gratuitos em repositório público. A rotina do Claude Code consome a cota do plano do Claude. Só o modo API tem custo à parte, descrito a seguir.

No modo API, cada notícia é analisada uma única vez. As análises ficam em cache, e as execuções seguintes só processam o que é novo. Quando não há nada novo, o briefing anterior é reaproveitado e nenhuma chamada é feita. A ordem de grandeza com Opus 5.5 é de alguns dólares por dia, e o custo depende do volume de notícias. Acompanhe pelo console da Anthropic e, se quiser reduzir, mude `CLAUDE_MODEL` para Sonnet 5.5, diminua `MAX_ANALYZE` ou espace os horários.

As chamadas usam `fallbacks: "default"`: se o modelo recusar um lote, a API repete a chamada em outro modelo automaticamente.

## Rodar localmente

```bash
pip install -r scripts/requirements.txt
export ANTHROPIC_API_KEY=...        # opcional
python scripts/build_digest.py      # ou --no-ai / --no-market
cd site && python -m http.server 8000   # abra http://localhost:8000
```

`python scripts/make_demo.py` recria os dados de exemplo.

## Limitações

- Veículos com paywall (Valor, Pipeline, WSJ, Bloomberg, FT) entregam só título e trecho. A IA trabalha com isso e com o cruzamento entre veículos, e o link leva à matéria completa.
- Alguns feeds podem mudar de endereço ou bloquear robôs. A aba **Fontes** mostra o que falhou, e o fallback pelo Google News cobre a maioria dos casos.
- As cotações vêm de um endpoint público do Yahoo Finance e podem falhar sem aviso. Nesse caso a faixa de cotações simplesmente some.
