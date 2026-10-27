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
  └─ scripts/perfis.py (dados abertos da CVM e cotações do Yahoo, refeitos uma vez por dia)
       FCA, Formulário de Referência, DFP e ITR → ficha, acionistas, administração, financeiro de cada companhia;
       ofertas públicas da Resolução 160; liga notícias, deals e leads às companhias (config/aliases.json)
  └─ scripts/cias.py: todos os documentos entregues à CVM (IPE), com resumo
  └─ publica o site no GitHub Pages
```

**Edições:** cada edição cobre as 24h até as 08h do seu dia (horário de Brasília). A edição de terça tem tudo o
que foi publicado das 08h de segunda às 08h de terça, e cada notícia aparece numa única edição. O que chega depois
das 08h fica na aba "Desde as 8h" e entra na edição do dia seguinte.

O site (`site/`) é HTML/CSS/JS puro, sem build. Ele confere a cada 5 minutos se há uma edição nova e avisa quando chegam notícias.

### O que dá para fazer no site

- **Briefing**: o resumo do dia para ler em 2–3 minutos, com mercados, as suas companhias, leads novos, os próximos dias da agenda, os destaques, o mapa do dia e quem está nas notícias. Nomes de companhias no texto levam ao perfil delas.
- **Notícias**: busca, filtro por editoria, região, nota mínima, só não lidas, salvas ou das suas companhias, e ordenação por relevância, nota ou horário. Clique numa notícia para abrir a análise num painel lateral, copiar um resumo para o WhatsApp ou copiar o link da notícia.
- **Agenda**: assembleias convocadas pelas companhias listadas, vencimentos de títulos de dívida acima de R$ 50 milhões e os pontos de atenção do briefing.
- **Deals do dia**, **Leads** e **Base de deals** (com o ranking dos assessores mais citados).
- **Ofertas públicas**: ações, debêntures e notas comerciais registradas na CVM, com volume, coordenador líder e ranking dos coordenadores.
- **Companhias** (`cias.html`): perfil de cada companhia aberta com cotação, valor de mercado e múltiplos, acionistas e controladores (com quem está por trás de cada um), conselho, diretoria e comitês, remuneração, empregados, controladas, demonstrações dos últimos 5 anos e dos últimos 12 meses, títulos de dívida, ofertas, partes relacionadas, notícias, deals e leads ligados a ela, e todos os documentos entregues à CVM com resumo. Marque ☆ para acompanhar.
- **Pessoas** (`cias.html#pessoas`): busca por qualquer conselheiro, diretor, membro de comitê ou acionista (pessoa física ou investidor PJ) das companhias abertas. O perfil mostra em quais empresas a pessoa tem cargo, de quais é acionista e com quanto (direto e estimado pelas holdings), com quem divide conselhos e em que notícias aparece. Também aparece na busca ⌘K do portal.
- **Mundo das companhias** (`mundo.html`): o mapa de quem é dono de quem. Todas as companhias abertas, seus acionistas (pessoas, holdings, fundos, governo), as cadeias de controle e as pessoas que sentam em mais de um conselho, num mapa navegável onde cada grupo econômico vira uma ilha. Clique numa empresa para ver acionistas, participações e o controlador final; abra a **estrutura societária** (quem controla para cima, controladas para baixo); peça **como duas entidades se conectam**; explore os maiores grupos, investidores e conectores. Montado por `scripts/mundo.py` (grafo) e `scripts/mundo_layout.mjs` (posições com ForceAtlas2, estáveis de um dia para o outro).
- **Busca universal** com `⌘K`: companhias, notícias, leads, deals e abas.
- **Edições anteriores** (setas ao lado da data), tema claro/escuro, impressão do briefing, links compartilháveis (`#leads`, `#n/{id}@{data}`, `cias.html#cia/{código}`) e instalação como app no celular (Compartilhar → Adicionar à Tela de Início).
- **Personalizar**: termos para priorizar ou esconder e peso por editoria. Fica salvo no navegador.
- **Atalhos**: `j`/`k` navegar, `Enter` abrir a análise, `o` abrir a matéria, `m` marcar como lida, `s` salvar, `/` buscar nas notícias, `⌘K` buscar em tudo, `1`–`9` trocar de aba, `r` atualizar, `?` atalhos.

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

## E-mail diário

O workflow `Enviar edição por e-mail` manda a edição do dia nos dias úteis, por volta das 9h, pela conta do Gmail cadastrada. Ele só envia depois que a análise do dia é publicada, tenta de novo às 09:32 se ela atrasar e nunca envia duas vezes no mesmo dia. Endereços e senha ficam em segredos do repositório: `GMAIL_USER`, `GMAIL_APP_PASSWORD` (senha de app do Google), `MAIL_TO` e, opcionalmente, `MAIL_CC`. Para testar, rode o workflow manualmente com `eu` no campo de teste.

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

## Skills de design

`.claude/skills/` traz as skills de interface de [emilkowalski/skills](https://github.com/emilkowalski/skills) (MIT):
animação, princípios da Apple, sensação de app no celular e teste com dados extremos. O Claude Code usa essas skills
sozinho quando mexe em `site/`. A lista e o motivo de cada uma estão em `.claude/skills/README.md`.

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
