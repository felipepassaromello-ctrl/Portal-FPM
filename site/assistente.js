// Assistente do portal: o balão no canto da tela que responde perguntas e leva às páginas.
//
// Roda inteiro no navegador, com os dados que o portal já publica (edição do dia, leads, companhias, pessoas e
// documentos da CVM): nada sai do portal e não há custo. Entende pedidos curtos, como "principais deals de hoje",
// "saiu fato relevante do Itaú?", "notícias da Vale", "me leve para a Petrobras" ou "estrutura societária do
// Alfredo Villela". A mesma conversa continua ao trocar de página (fica guardada na aba do navegador).
(() => {
  "use strict";
  if (window.__fpmAssist) return;
  window.__fpmAssist = true;

  const PAGE = /cias\.html$/.test(location.pathname) ? "cias" : /mundo\.html$/.test(location.pathname) ? "mundo" : "index";
  const fold = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  // grafia aproximada: "Vilela" acha "Villela", "Itau" acha "Itaú", "Tellefonica" acha "Telefonica"
  const fuzzy = (s) => fold(s).replace(/ph/g, "f").replace(/th/g, "t").replace(/y/g, "i").replace(/w/g, "v").replace(/([a-z])\1+/g, "$1");
  const words = (s) => fold(s).replace(/[^a-z0-9&]+/g, " ").trim().split(/\s+/).filter(Boolean);
  const store = {
    get(k, d) { try { const v = sessionStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch { /* aba anônima ou cheia: só não lembra */ } },
  };
  const reWord = (w) => new RegExp(`(^|[^a-z0-9-])${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![a-z0-9-])`);
  const mentions = (text, terms) => { const t = fold(text); return terms.some((w) => w && reWord(w).test(t)); };
  const ddmm = (d) => (d ? `${d.slice(8, 10)}/${d.slice(5, 7)}` : "");
  const brl = (v) => (v >= 1e12 ? `R$ ${(v / 1e12).toFixed(1).replace(".", ",")} tri` : v >= 1e9 ? `R$ ${(v / 1e9).toFixed(1).replace(".", ",")} bi` : `R$ ${Math.round(v / 1e6)} mi`);

  // ---------------------------------------------------------------- dados (carregados na primeira pergunta)
  const memo = new Map();
  const getJSON = (url, fallback) => {
    if (!memo.has(url)) memo.set(url, fetch(url, { cache: "no-cache" }).then((r) => (r.ok ? r.json() : fallback)).catch(() => fallback));
    return memo.get(url);
  };
  const digest = () => getJSON("data/digest.json", { items: [], deals: [] });
  const leadsDb = () => getJSON("data/leads_db.json", { leads: {} });
  let ciasList = null, peopleList = null;
  async function companies() {
    if (ciasList) return ciasList;
    const [resumo, alias] = await Promise.all([getJSON("data/cias/resumo.json", { cias: {} }), getJSON("data/cias/alias.json", {})]);
    const by = new Map();
    for (const [k, r] of Object.entries(resumo.cias || {})) {
      if (!r.nm) continue;
      by.set(k, { k, nm: r.nm, tk: r.tk || "", mc: r.mc || 0, names: [fuzzy(r.nm)] });
    }
    for (const [name, k] of Object.entries(alias || {})) if (by.has(k)) by.get(k).names.push(fuzzy(name));
    ciasList = [...by.values()];
    return ciasList;
  }
  async function people() {
    if (peopleList) return peopleList;
    const r = await getJSON("data/cias/pessoas.json", { p: [] });
    peopleList = (r.p || []).map(([s, n, t, nc, k, role]) => ({ s, n, t, nc: nc || 0, k, role, w: words(fuzzy(n)) }));
    return peopleList;
  }
  // documentos da CVM do mês atual e do anterior (os arquivos que o portal já usa na página das companhias)
  async function recentDocs() {
    const idx = await getJSON("data/cias/index.json", { months: [] });
    const months = (idx.months || []).slice(0, 2);
    const parts = await Promise.all(months.map((m) => getJSON(`data/cias/mes/${m}.json`, [])));
    return parts.flat();
  }

  // ---------------------------------------------------------------- quem é quem na pergunta
  const NAME_STOP = new Set(["s", "a", "sa", "cia", "companhia", "participacoes", "part", "holding", "do", "da", "de", "dos", "das", "e", "grupo", "o"]);
  const nameTokens = (s) => s.split(/\s+/).filter((w) => w && !NAME_STOP.has(w));
  function scoreCompany(c, phrase, toks) {
    let best = 0;
    if (c.tk) {
      const tk = fold(c.tk), root = tk.replace(/\d+$/, "");
      if (toks.includes(tk) || (root.length >= 4 && toks.includes(root))) best = 120;
    }
    for (const nm of c.names) {
      if (!nm) continue;
      if (nm === phrase) { best = Math.max(best, 110); continue; }
      const nt = nameTokens(nm);
      if (!nt.length) continue;
      // todas as palavras do nome aparecem na pergunta ("Itaú" em "fato relevante do itau unibanco")
      if (nt.every((w) => toks.includes(w))) best = Math.max(best, 70 + nt.length * 6);
      // a pergunta é o começo do nome ("banco do brasil" → "Banco do Brasil S.A.")
      else if (phrase.length >= 4 && nm.startsWith(phrase)) best = Math.max(best, 65);
      // todas as palavras da pergunta aparecem no nome
      else if (toks.length && toks.every((w) => nt.includes(w)) && toks.join("").length >= 4) best = Math.max(best, 55);
    }
    return best ? best + Math.log10(1 + c.mc) / 2 : 0;
  }
  async function findCompany(phrase) {
    const p = fuzzy(phrase).replace(/[^a-z0-9& ]+/g, " ").replace(/\s+/g, " ").trim();
    if (p.length < 2) return null;
    const toks = nameTokens(p);
    if (!toks.length) return null;
    const list = await companies();
    let top = null, topScore = 0;
    for (const c of list) {
      const s = scoreCompany(c, p, toks);
      if (s > topScore) { top = c; topScore = s; }
    }
    return topScore ? { ...top, score: topScore } : null;
  }
  async function findPerson(phrase) {
    const toks = nameTokens(fuzzy(phrase).replace(/[^a-z0-9 ]+/g, " ")).filter((w) => w.length >= 2);
    if (!toks.length || (toks.length === 1 && toks[0].length < 5)) return null;
    const list = await people();
    let top = null, topScore = 0;
    for (const r of list) {
      let hit = 0;
      for (const w of toks) if (r.w.some((x) => x === w || (w.length >= 4 && x.startsWith(w)))) hit++;
      if (hit < toks.length) continue;
      const s = hit * 10 + Math.min(r.nc, 30) / 3 + (r.w.length === toks.length ? 2 : 0);
      if (s > topScore) { top = r; topScore = s; }
    }
    return top;
  }
  // a parte da pergunta que nomeia alguém: tira as palavras do pedido ("me leve para a aba da Petrobras" → "Petrobras")
  const FILLER = new RegExp("\\b(" + [
    "me leve", "me leva", "me levar", "leve", "leva", "levar", "abre", "abra", "abrir", "ir para", "ir pra", "vai para", "vai pra", "va para", "va pra",
    "mostra", "mostre", "mostrar", "quero ver", "quero", "queria", "gostaria", "pode", "poderia", "por favor", "por exemplo", "ver", "veja", "aba", "abas",
    "pagina", "pagina", "dentro", "da companhia", "na companhia", "companhia", "empresa", "perfil", "estrutura societaria", "estrutura acionaria",
    "estrutura", "organograma", "arvore", "quem e o dono", "quem sao os donos", "quem e dono", "quem controla", "controlador", "controladores",
    "acionistas", "participacoes", "saiu", "teve", "tem", "ha", "houve", "algum", "alguma", "alguns", "algumas", "fatos relevantes", "fato relevante",
    "comunicados", "comunicado", "documentos", "documento", "da cvm", "na cvm", "cvm", "noticias", "noticia", "novidade", "novidades", "hoje", "ontem",
    "sobre", "qual", "quais", "foram", "o que", "como", "esta", "estao", "deals", "deal", "leads", "lead", "ultimos", "ultimas", "ultimo", "ultima",
    "recentes", "recente", "administracao", "diretoria", "conselho", "financeiro", "balanco", "resultados", "resultado", "divida", "debentures",
    "ofertas", "mapa", "mundo", "no mundo", "principais", "principal", "maiores", "mais", "importantes", "importante", "legais", "melhores",
    "top", "quentes", "interessantes", "relevantes", "destaques", "em aberto", "aberto", "abertos", "estrutura", "lista", "listar", "todos", "todas", "me", "mim", "eu", "pra", "para", "de", "do", "da", "dos", "das", "o", "a", "os", "as", "um", "uma", "no", "na", "nos", "nas", "e",
  ].map((w) => w.replace(/ /g, "\\s+")).join("|") + ")\\b", "g");
  const entityPhrase = (q) => fold(q).replace(/[?!.,;:"“”'()]/g, " ").replace(FILLER, " ").replace(/\s+/g, " ").trim();

  // ---------------------------------------------------------------- respostas
  const newsHref = (i) => (PAGE === "index" ? `#n/${encodeURIComponent(i.id)}` : `index.html#n/${encodeURIComponent(i.id)}`);
  const ciaHref = (k, pane) => `cias.html#cia/${encodeURIComponent(k)}${pane && pane !== "geral" ? "/" + pane : ""}`;
  const personHref = (s) => `cias.html#pessoa/${encodeURIComponent(s)}`;
  const treeHref = (id) => `mundo.html#e/${encodeURIComponent(id)}`;
  const tabHref = (t) => (PAGE === "index" ? `#${t}` : `index.html#${t}`);
  const link = (href, text) => `<a href="${esc(href)}">${esc(text)}</a>`;
  const newsLi = (i) => `<li><a href="${esc(newsHref(i))}"><b>${esc(i.headline || i.title)}</b></a><span class="fa-sub">${esc(i.outlets?.[0]?.source || "")}${i.importance ? ` · nota ${i.importance}` : ""}</span></li>`;
  const docUrl = (d) => { const [seq, ver] = String(d.q || "").split("."); return `https://www.rad.cvm.gov.br/ENET/frmDownloadDocumento.aspx?Tela=ext&descTipo=IPE&CodigoInstituicao=1&numProtocolo=${d.id}&numSequencia=${seq}&numVersao=${ver || 1}`; };

  async function answerTopNews() {
    const d = await digest();
    const top = [...(d.items || [])].sort((a, z) => (z.importance || 0) - (a.importance || 0)).slice(0, 5);
    if (!top.length) return { html: "A edição de hoje ainda não saiu." };
    return { html: `<p>As mais importantes da edição de hoje:</p><ol class="fa-list">${top.map(newsLi).join("")}</ol><p class="fa-more">${link(tabHref("feed"), "Ver todas as notícias")}</p>` };
  }
  async function answerDeals(phrase) {
    const d = await digest();
    let deals = [...(d.deals || [])];
    const found = phrase ? await findCompany(phrase) : null;
    const c = found && found.score >= 80 ? found : null;
    const name = c ? c.nm : phrase;
    if (name) deals = deals.filter((i) => mentions(`${i.headline} ${i.title} ${(i.entities || []).join(" ")} ${i.deal?.buyer} ${i.deal?.target}`, [fold(name), ...(c?.tk ? [fold(c.tk)] : [])]));
    deals.sort((a, z) => (z.importance || 0) - (a.importance || 0));
    if (!deals.length) return { html: name ? `Nenhum deal com <b>${esc(name)}</b> na edição de hoje. ${link(tabHref("deals"), "Ver todos os deals")}` : "Nenhum deal na edição de hoje." };
    const li = deals.slice(0, 6).map((i) => {
      const x = i.deal || {};
      const who = [x.buyer, x.target].filter((v) => v && v !== "não divulgado").join(" → ");
      const meta = [x.type, x.value && x.value !== "não divulgado" ? x.value : "", x.stage].filter(Boolean).join(" · ");
      return `<li><a href="${esc(newsHref(i))}"><b>${esc(who || i.headline)}</b></a><span class="fa-sub">${esc(meta)}</span></li>`;
    }).join("");
    return { html: `<p>${deals.length > 6 ? `Os 6 principais de ${deals.length} deals` : deals.length === 1 ? "O deal" : `Os ${deals.length} deals`} da edição de hoje:</p><ol class="fa-list">${li}</ol><p class="fa-more">${link(tabHref("deals"), "Abrir Deals do dia")}</p>` };
  }
  async function answerLeads(phrase) {
    const db = await leadsDb();
    let rows = Object.values(db.leads || {}).filter((l) => l.status === "Em aberto");
    if (phrase) {
      const f = fold(phrase);
      const hit = rows.filter((l) => fold(`${l.company} ${l.sector} ${l.counterparty}`).includes(f));
      if (hit.length) rows = hit; else return { html: `Nenhum lead em aberto sobre “${esc(phrase)}”. ${link(tabHref("leads"), "Ver todos os leads")}` };
    }
    rows.sort((a, z) => String(z.last_seen).localeCompare(String(a.last_seen)) || (z.importance || 0) - (a.importance || 0));
    if (!rows.length) return { html: "Não há leads em aberto agora." };
    const li = rows.slice(0, 5).map((l) => `<li><b>${esc(l.company)}</b><span class="fa-sub">${esc([l.signal, l.sector, `visto em ${ddmm(l.last_seen)}`].filter(Boolean).join(" · "))}</span>${l.why ? `<span class="fa-why">${esc(l.why)}</span>` : ""}</li>`).join("");
    return { html: `<p>Leads em aberto mais recentes:</p><ol class="fa-list">${li}</ol><p class="fa-more">${link(tabHref("leads"), "Abrir a aba Leads")}</p>` };
  }
  async function answerBrief() {
    const d = await digest();
    const b = d.brief || {};
    if (!b.headline) return { html: `O briefing de hoje ainda não saiu. ${link(tabHref("brief"), "Abrir o Briefing")}` };
    return { html: `<p><b>${esc(b.headline)}</b></p>${b.mood ? `<p class="fa-sub">${esc(b.mood)}</p>` : ""}<ul class="fa-list fa-bullets">${(b.tldr || []).slice(0, 5).map((t) => `<li>${esc(t)}</li>`).join("")}</ul><p class="fa-more">${link(tabHref("brief"), "Ler o briefing completo")}</p>` };
  }
  async function answerMarket() {
    const d = await digest();
    const m = (d.market || []).filter((x) => x.price != null);
    if (!m.length) return { html: "Sem cotações agora." };
    const fmt = (x) => `${x.unit === "R$" ? "R$ " : ""}${x.price.toLocaleString("pt-BR", { maximumFractionDigits: x.price < 100 ? 2 : 0 })}${x.unit === "%" ? "%" : ""}`;
    const li = m.slice(0, 8).map((x) => `<li><b>${esc(x.name)}</b> ${esc(fmt(x))} <span class="${x.change_pct >= 0 ? "fa-pos" : "fa-neg"}">${x.change_pct >= 0 ? "+" : ""}${x.change_pct.toFixed(2).replace(".", ",")}%</span></li>`).join("");
    return { html: `<p>Última cotação:</p><ul class="fa-list fa-plain">${li}</ul>` };
  }
  async function answerNewsAbout(phrase, ent) {
    const d = await digest();
    const terms = [];
    if (ent?.kind === "cia") terms.push(fold(ent.c.nm), ...(ent.c.tk ? [fold(ent.c.tk)] : []));
    else if (ent?.kind === "pessoa") terms.push(fold(ent.p.n), ...nameTokens(fold(ent.p.n)).filter((w) => w.length >= 5).slice(-1));
    else terms.push(fold(phrase));
    // companhia: vale o nome nas entidades da análise ou escrito com maiúscula no texto ("Vale", e não "vale-alimentação")
    const deaccent = (x) => String(x || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const cased = ent?.kind === "cia" ? new RegExp(`(^|[^A-Za-z0-9-])${deaccent(ent.c.nm).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![A-Za-z0-9-])`) : null;
    const hits = (d.items || []).filter((i) => cased
      ? mentions((i.entities || []).join(" | "), terms) || cased.test(deaccent(`${i.headline} | ${i.title} | ${i.involves || ""}`))
      : mentions(`${i.headline} ${i.title} ${(i.entities || []).join(" ")} ${i.involves || ""}`, terms)).sort((a, z) => (z.importance || 0) - (a.importance || 0));
    const name = ent?.kind === "cia" ? ent.c.nm : ent?.kind === "pessoa" ? ent.p.n : phrase;
    const extra = ent?.kind === "cia" ? `<p class="fa-more">${link(ciaHref(ent.c.k, "noticias"), "Ver o histórico de notícias")}</p>` : "";
    if (!hits.length) return { html: `Nada sobre <b>${esc(name)}</b> na edição de hoje.${extra}` };
    return { html: `<p>${hits.length === 1 ? "Uma notícia" : `${hits.length} notícias`} sobre <b>${esc(name)}</b> hoje:</p><ol class="fa-list">${hits.slice(0, 6).map(newsLi).join("")}</ol>${extra}` };
  }
  async function answerDocs(c, onlyFR, todayOnly) {
    const [docs, d] = await Promise.all([recentDocs(), digest()]);
    let rows = docs.filter((x) => x.k === c.k);
    if (onlyFR) rows = rows.filter((x) => x.c === "Fato Relevante");
    rows.sort((a, z) => `${z.d} ${z.h || ""}`.localeCompare(`${a.d} ${a.h || ""}`));
    const kind = onlyFR ? "fato relevante" : "documento na CVM";
    const more = `<p class="fa-more">${link(ciaHref(c.k, "docs"), "Ver todos os documentos")}</p>`;
    const start = (d.window?.start || "").slice(0, 10);
    const fresh = todayOnly && start ? rows.filter((x) => x.d >= start) : rows;
    const li = (x) => `<li><a href="${esc(docUrl(x))}" target="_blank" rel="noopener"><b>${esc(x.s || x.e || x.t || x.c)}</b></a><span class="fa-sub">${esc(x.c)} · ${ddmm(x.d)}${x.h ? ` ${x.h}` : ""}</span>${x.sm?.resumo ? `<span class="fa-why">${esc(x.sm.resumo)}</span>` : ""}</li>`;
    if (todayOnly && !fresh.length) {
      const last = rows[0];
      return { html: `<p><b>${esc(c.nm)}</b>: nenhum ${kind} desde ontem às 8h.${last ? ` O último foi em ${ddmm(last.d)}:` : ""}</p>${last ? `<ol class="fa-list">${li(last)}</ol>` : ""}${more}` };
    }
    if (!fresh.length) return { html: `<p><b>${esc(c.nm)}</b>: nenhum ${kind} nos dois últimos meses.</p>${more}` };
    return { html: `<p><b>${esc(c.nm)}</b>, ${onlyFR ? "fatos relevantes" : "documentos"} ${todayOnly ? "desde ontem às 8h" : "mais recentes"}:</p><ol class="fa-list">${fresh.slice(0, 3).map(li).join("")}</ol>${more}` };
  }
  async function resolve(phrase) {
    if (!phrase) return null;
    const [c, p] = await Promise.all([findCompany(phrase), findPerson(phrase)]);
    // nome exato ou ticker de companhia vence; com duas palavras ou mais, um nome de pessoa que bate vence uma companhia parecida
    if (c && c.score >= 100) return { kind: "cia", c };
    if (p && words(phrase).length >= 2) return { kind: "pessoa", p };
    if (c) return { kind: "cia", c };
    return p ? { kind: "pessoa", p } : null;
  }
  // fatos relevantes de todas as companhias desde ontem às 8h
  async function answerAllFR() {
    const [docs, d, list] = await Promise.all([recentDocs(), digest(), companies()]);
    const start = (d.window?.start || "").slice(0, 10);
    const names = new Map(list.map((c) => [c.k, c.nm]));
    const rows = docs.filter((x) => x.c === "Fato Relevante" && (!start || x.d >= start)).sort((a, z) => `${z.d} ${z.h || ""}`.localeCompare(`${a.d} ${a.h || ""}`));
    const more = `<p class="fa-more">${link("cias.html#docs", "Abrir os documentos da CVM")}</p>`;
    if (!rows.length) return { html: `<p>Nenhum fato relevante desde ontem às 8h.</p>${more}` };
    const li = rows.slice(0, 8).map((x) => `<li><a href="${esc(ciaHref(x.k, "docs"))}"><b>${esc(names.get(x.k) || x.n)}</b></a><span class="fa-sub">${esc(x.s || x.t || "")} · ${ddmm(x.d)}</span>${x.sm?.resumo ? `<span class="fa-why">${esc(x.sm.resumo)}</span>` : ""}</li>`).join("");
    return { html: `<p>${rows.length === 1 ? "Um fato relevante" : `${rows.length} fatos relevantes`} desde ontem às 8h${rows.length > 8 ? " (os 8 mais recentes)" : ""}:</p><ol class="fa-list">${li}</ol>${more}` };
  }
  const notFound = (phrase) => ({ html: `Não achei “${esc(phrase)}” nas companhias abertas nem nas pessoas da base. Tente o nome como aparece na bolsa, ou o ticker (por exemplo, PETR4).` });

  const PANE_WORDS = [
    [/acionist|dono|controla|estrutura|participac/, "acionistas", "Acionistas"], [/administrac|diretor|conselh|ceo|executiv/, "adm", "Administração"],
    [/financeir|balanc|resultad|receita|lucro/, "fin", "Financeiro"], [/divida|debentur|ofertas?|emiss/, "divida", "Dívida e ofertas"],
    [/document|fato|comunicad|cvm/, "docs", "Documentos"], [/noticia|operac/, "noticias", "Notícias e operações"],
  ];
  const TABS = [
    [/\bbriefing\b|resumo do dia/, "brief", "Briefing"], [/\bleads?\b/, "leads", "Leads"], [/base de deals/, "base", "Base de deals"],
    [/deals? do dia|\bdeals?\b/, "deals", "Deals do dia"], [/\bagenda\b/, "agenda", "Agenda"], [/ofertas publicas/, "ofertas", "Ofertas públicas"],
    [/\boficiais\b|\bcade\b/, "official", "Oficiais"], [/desde as 8/, "later", "Desde as 8h"], [/\bnoticias\b|\bfeed\b/, "feed", "Notícias"],
  ];

  async function answer(raw) {
    const q = fold(raw).trim();
    if (!q) return null;
    const today = /\bhoje\b|desde ontem|\bagora\b/.test(q);
    const wantsNav = /\b(me lev[ae]|lev[ae]|abr[ae]|abrir|ir (para|pra)|va(i)? (para|pra)|mostr[ae]|quero ver|ir a)\b/.test(q);
    const wantsStruct = /estrutura (societaria|acionaria)|\bestrutura\b|organograma|arvore|quem (e|sao) (o |os )?donos?|quem controla|controlador/.test(q);
    const wantsDocs = /fatos? relevantes?|comunicados?|documentos?|\bcvm\b/.test(q);
    const phrase = entityPhrase(raw);

    if (/^(oi|ola|bom dia|boa tarde|boa noite|e ai)\b/.test(q) && phrase.length < 3) return { html: "Oi! Pergunte sobre as notícias e os deals de hoje, fatos relevantes de uma companhia, ou peça para eu abrir uma página." };
    if (/\b(ajuda|o que voce (faz|sabe)|como (funciona|usar))\b/.test(q)) return { html: HELP };

    if (wantsStruct && phrase) {
      const ent = await resolve(phrase);
      if (!ent) return notFound(phrase);
      if (ent.kind === "cia") return { html: `Abrindo a estrutura societária de <b>${esc(ent.c.nm)}</b> no Mundo das companhias.`, go: treeHref(`k${ent.c.k}`), alt: [[ciaHref(ent.c.k, "acionistas"), "Ver os acionistas na página da companhia"]] };
      return { html: `Abrindo as participações de <b>${esc(ent.p.n)}</b> no Mundo das companhias.`, go: treeHref(ent.p.s), alt: [[personHref(ent.p.s), "Ver o perfil completo"]] };
    }
    if (wantsDocs && phrase) {
      const ent = await resolve(phrase);
      if (ent?.kind === "cia") return answerDocs(ent.c, /fatos? relevantes?/.test(q), today);
      if (ent?.kind === "pessoa") return { html: `${esc(ent.p.n)} é pessoa, não companhia. ${link(personHref(ent.p.s), "Ver o perfil")}` };
      return notFound(phrase);
    }
    if (wantsDocs && !phrase && !wantsNav) return answerAllFR();
    if (wantsNav) {
      if (/\bmundo\b|\bmapa\b/.test(q) && !phrase) return { html: "Abrindo o Mundo das companhias.", go: "mundo.html" };
      if (/documentos (da )?cvm|fatos relevantes/.test(q) && !phrase) return { html: "Abrindo os documentos da CVM.", go: "cias.html#docs" };
      if (/\bpessoas\b/.test(q) && !phrase) return { html: "Abrindo Pessoas e investidores.", go: "cias.html#pessoas" };
      if (/\bcompanhias\b/.test(q) && !phrase) return { html: "Abrindo Companhias.", go: "cias.html" };
      if (phrase) {
        const ent = await resolve(phrase);
        if (ent?.kind === "cia") {
          const pane = PANE_WORDS.find(([re]) => re.test(q));
          return { html: `Abrindo <b>${esc(ent.c.nm)}</b>${pane ? ` · ${pane[2]}` : ""}.`, go: ciaHref(ent.c.k, pane?.[1]) };
        }
        if (ent?.kind === "pessoa") return { html: `Abrindo o perfil de <b>${esc(ent.p.n)}</b>.`, go: personHref(ent.p.s) };
      }
      const tab = TABS.find(([re]) => re.test(q));
      if (tab) return { html: `Abrindo ${esc(tab[2])}.`, go: tabHref(tab[1]) };
      if (phrase) return notFound(phrase);
    }
    if (/\bleads?\b|oportunidades?/.test(q)) return answerLeads(phrase);
    if (/\bdeals?\b|\boperac(ao|oes)\b|\btransac|\bm ?& ?a\b|aquisic(ao|oes)|fus(ao|oes)/.test(q) && !/noticias? (de|do|da|sobre)/.test(q)) return answerDeals(phrase);
    if (/briefing|resumo do dia|manchete|o que (aconteceu|importa|preciso saber)/.test(q)) return answerBrief();
    if (/(noticias|manchetes|destaques)/.test(q) && /(legais|importantes|principais|relevantes|quentes|top|melhores|destaques|mais lidas)/.test(q) && phrase.length < 3) return answerTopNews();
    if (/\b(ibovespa|ibov|dolar|cotac|cambio|bolsa hoje|mercado hoje|como (esta|fechou) (o|a) (mercado|bolsa))\b/.test(q) && phrase.length < 12) return answerMarket();
    if (phrase.length >= 2) {
      const ent = await resolve(phrase);
      return answerNewsAbout(phrase, ent);
    }
    if (/noticias?/.test(q)) return answerTopNews();
    return { html: `Não entendi. ${HELP}` };
  }

  const HELP = `<p>Posso ajudar com:</p><ul class="fa-list fa-bullets">
    <li>“Quais as notícias mais importantes?” ou “o briefing de hoje”</li>
    <li>“Principais deals de hoje” e “leads em aberto”</li>
    <li>“Saiu fato relevante do Itaú hoje?”</li>
    <li>“Notícias da Vale”</li>
    <li>“Me leve para a Petrobras” ou “abre os acionistas da Vale”</li>
    <li>“Estrutura societária do Alfredo Villela”</li></ul>`;
  const SUGGEST = ["Notícias mais importantes", "Principais deals de hoje", "Saiu fato relevante do Itaú hoje?", "Me leve para a Petrobras", "Estrutura societária do Alfredo Villela"];

  // ---------------------------------------------------------------- interface
  const ICON_CHAT = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5c4.97 0 9 3.36 9 7.5s-4.03 7.5-9 7.5c-.9 0-1.77-.11-2.6-.32L5 19.8l1.06-3.3C4.17 15.1 3 13.16 3 11c0-4.14 4.03-7.5 9-7.5Z" fill="currentColor"/><path d="m12 7.6.78 1.9 1.92.75-1.92.75L12 12.9l-.78-1.9-1.92-.75 1.92-.75Z" fill="var(--fa-fab-ink, #fff)"/></svg>`;
  const ICON_X = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
  const ICON_SEND = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const root = document.createElement("div");
  root.className = `fa fa-${PAGE}`;
  root.innerHTML = `
    <button class="fa-fab" type="button" aria-label="Abrir o assistente" aria-expanded="false" aria-controls="fa-panel">${ICON_CHAT}</button>
    <section class="fa-panel" id="fa-panel" role="dialog" aria-label="Assistente do portal" hidden>
      <header class="fa-head">
        <div><b>Assistente</b><small>Notícias, deals, companhias e pessoas</small></div>
        <button class="fa-close" type="button" aria-label="Fechar">${ICON_X}</button>
      </header>
      <div class="fa-log" aria-live="polite"></div>
      <div class="fa-chips"></div>
      <form class="fa-form" autocomplete="off">
        <input class="fa-input" type="text" enterkeyhint="send" placeholder="Pergunte algo…" aria-label="Pergunta" maxlength="200">
        <button class="fa-send" type="submit" aria-label="Enviar">${ICON_SEND}</button>
      </form>
    </section>`;
  document.body.appendChild(root);
  const $ = (s) => root.querySelector(s);
  const fab = $(".fa-fab"), panel = $(".fa-panel"), log = $(".fa-log"), input = $(".fa-input"), chips = $(".fa-chips");

  let history = store.get("fa-log", []);
  const save = () => store.set("fa-log", history.slice(-30));
  function bubble(who, html) {
    const el = document.createElement("div");
    el.className = `fa-msg fa-${who}`;
    el.innerHTML = html;
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }
  function renderLog() {
    log.innerHTML = "";
    if (!history.length) bubble("bot", `<p>Oi! Sou o assistente do portal. Pergunte sobre as notícias e os deals de hoje, fatos relevantes de uma companhia, ou peça para eu abrir uma página.</p>`);
    for (const m of history) bubble(m.who, m.html);
    chips.innerHTML = history.length ? "" : SUGGEST.map((s) => `<button type="button" class="fa-chip">${esc(s)}</button>`).join("");
  }
  function open() {
    if (!panel.hidden) return;
    panel.hidden = false;
    root.classList.add("fa-open");
    fab.setAttribute("aria-expanded", "true");
    store.set("fa-open", true);
    renderLog();
    // dados começam a chegar enquanto a pessoa digita
    digest(); companies();
    if (matchMedia("(hover: hover)").matches) input.focus();
  }
  function close() {
    panel.hidden = true;
    root.classList.remove("fa-open");
    fab.setAttribute("aria-expanded", "false");
    store.set("fa-open", false);
    fab.focus({ preventScroll: true });
  }
  async function ask(text) {
    text = text.trim();
    if (!text) return;
    chips.innerHTML = "";
    const userHtml = `<p>${esc(text)}</p>`;
    bubble("user", userHtml);
    history.push({ who: "user", html: userHtml });
    const wait = bubble("bot fa-wait", "<p><span class='fa-dots'><i></i><i></i><i></i></span></p>");
    let r;
    try { r = await answer(text); } catch (e) { r = { html: "Algo deu errado ao buscar os dados. Tente de novo em instantes." }; }
    wait.remove();
    r = r || { html: HELP };
    let html = /^\s*</.test(r.html) ? r.html : `<p>${r.html}</p>`;
    if (r.alt) html += `<p class="fa-more">${r.alt.map(([h, t]) => link(h, t)).join(" · ")}</p>`;
    bubble("bot", html);
    history.push({ who: "bot", html });
    save();
    if (r.go) setTimeout(() => go(r.go), 650);
  }
  const narrow = () => matchMedia("(max-width: 900px)").matches;
  function go(href) {
    const url = new URL(href, location.href);
    // no celular, a página de destino aparece sem o painel por cima
    if (narrow()) store.set("fa-open", false);
    if (url.pathname === location.pathname) {
      // mesma página: só troca o endereço (#...) e deixa a página reagir; no celular fecha o painel para mostrar o destino
      if (url.hash !== location.hash) location.hash = url.hash; else dispatchEvent(new HashChangeEvent("hashchange"));
      if (narrow()) close();
    } else location.href = url.href;
  }

  fab.addEventListener("click", () => (panel.hidden ? open() : close()));
  $(".fa-close").addEventListener("click", close);
  chips.addEventListener("click", (e) => { const b = e.target.closest(".fa-chip"); if (b) ask(b.textContent); });
  $(".fa-form").addEventListener("submit", (e) => { e.preventDefault(); const t = input.value; input.value = ""; ask(t); });
  panel.addEventListener("keydown", (e) => { if (e.key === "Escape") { e.stopPropagation(); close(); } });
  log.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (a && !a.target && narrow()) { store.set("fa-open", false); setTimeout(close, 0); }
  });
  // no computador, continua aberto ao trocar de página, se estava aberto
  if (store.get("fa-open", false) && !narrow()) open();
})();
