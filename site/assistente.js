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
    "formulario de referencia", "formulario cadastral", "formularios", "formulario", "fre", "dfp", "itr", "fca", "me leve", "me leva", "me levar", "leve", "leva", "levar", "abre", "abra", "abrir", "ir para", "ir pra", "vai para", "vai pra", "va para", "va pra",
    "mostra", "mostre", "mostrar", "quero ver", "quero", "queria", "gostaria", "pode", "poderia", "por favor", "por exemplo", "ver", "veja", "aba", "abas",
    "pagina", "pagina", "dentro", "da companhia", "na companhia", "companhia", "empresa", "perfil", "estrutura societaria", "estrutura acionaria",
    "estrutura", "organograma", "arvore", "quem e o dono", "quem sao os donos", "quem e dono", "quem controla", "controlador", "controladores",
    "acionistas", "participacoes", "saiu", "teve", "tem", "ha", "houve", "algum", "alguma", "alguns", "algumas", "fatos relevantes", "fato relevante",
    "comunicados", "comunicado", "documentos", "documento", "da cvm", "na cvm", "cvm", "noticias", "noticia", "novidade", "novidades", "hoje", "ontem",
    "sobre", "qual", "quais", "foram", "o que", "como", "esta", "estao", "deals", "deal", "leads", "lead", "ultimos", "ultimas", "ultimo", "ultima",
    "recentes", "recente", "resultado", "resultados", "balanco", "balancos", "lucro", "trimestre", "trimestral", "tri", "release",
    "divulgou", "divulgaram", "divulgacao", "saiu o", "quem", "administracao", "diretoria", "conselho", "financeiro", "balanco", "resultados", "resultado", "divida", "debentures",
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
  async function answerDeals(ent, one) {
    const d = await digest();
    let deals = [...(d.deals || [])];
    const name = ent?.kind === "cia" ? ent.c.nm : ent?.kind === "pessoa" ? ent.p.n : "";
    if (name) deals = deals.filter((i) => mentions(`${i.headline} ${i.title} ${(i.entities || []).join(" ")} ${i.deal?.buyer} ${i.deal?.target}`, [fold(name), ...(ent.c?.tk ? [fold(ent.c.tk)] : [])]));
    // brasileiros primeiro quando a nota empata
    deals.sort((a, z) => (z.importance || 0) - (a.importance || 0) || (z.region === "BR") - (a.region === "BR"));
    if (!deals.length) return { html: name ? `<p>Nenhum deal com <b>${esc(name)}</b> na edição de hoje.</p><p class="fa-more">${ent.kind === "cia" ? `${link(ciaHref(ent.c.k, "noticias"), "Ver o histórico de operações")} · ` : ""}${link(tabHref("base"), "Base de deals")}</p>` : "Nenhum deal na edição de hoje." };
    const item = (i, rich) => {
      const x = i.deal || {};
      const who = [x.buyer, x.target].filter((v) => v && v !== "não divulgado").join(" → ");
      const meta = [x.type, x.value && x.value !== "não divulgado" ? x.value : "", x.stage].filter(Boolean).join(" · ");
      return `<li><a href="${esc(newsHref(i))}"><b>${esc(who || i.headline)}</b></a><span class="fa-sub">${esc(meta)}</span>${rich && i.summary ? `<span class="fa-why">${esc(i.summary)}</span>` : ""}</li>`;
    };
    if (one) {
      const top = deals[0];
      return { html: `<p>O destaque de hoje:</p><ol class="fa-list">${item(top, true)}</ol>${top.impact ? `<p class="fa-sub">${esc(top.impact)}</p>` : ""}${deals.length > 1 ? `<p class="fa-more">Outros: ${deals.slice(1, 4).map((i) => link(newsHref(i), [i.deal?.buyer, i.deal?.target].filter((v) => v && v !== "não divulgado").join(" → ") || i.headline)).join(" · ")}</p>` : ""}` };
    }
    return { html: `<p>${deals.length > 6 ? `Os 6 principais de ${deals.length} deals` : deals.length === 1 ? "O deal" : `Os ${deals.length} deals`}${name ? ` com ${esc(name)}` : ""} da edição de hoje:</p><ol class="fa-list">${deals.slice(0, 6).map((i) => item(i, false)).join("")}</ol><p class="fa-more">${link(tabHref("deals"), "Abrir Deals do dia")}</p>` };
  }
  async function answerLeads(ent) {
    const db = await leadsDb();
    let rows = Object.values(db.leads || {}).filter((l) => l.status === "Em aberto");
    const name = ent?.kind === "cia" ? ent.c.nm : ent?.kind === "pessoa" ? ent.p.n : "";
    if (name) {
      const hit = rows.filter((l) => mentions(`${l.company} ${l.counterparty} ${(l.events || []).map((e) => e.headline).join(" ")}`, [fold(name)]));
      if (!hit.length) return { html: `Nenhum lead em aberto com <b>${esc(name)}</b>. ${link(tabHref("leads"), "Ver todos os leads")}` };
      rows = hit;
    }
    rows.sort((a, z) => String(z.last_seen).localeCompare(String(a.last_seen)) || (z.importance || 0) - (a.importance || 0));
    if (!rows.length) return { html: "Não há leads em aberto agora." };
    const li = rows.slice(0, 5).map((l) => `<li><b>${esc(l.company)}</b><span class="fa-sub">${esc([l.signal, l.sector, `visto em ${ddmm(l.last_seen)}`].filter(Boolean).join(" · "))}</span>${l.why ? `<span class="fa-why">${esc(l.why)}</span>` : ""}</li>`).join("");
    return { html: `<p>Leads em aberto mais recentes${name ? ` com ${esc(name)}` : ""}:</p><ol class="fa-list">${li}</ol><p class="fa-more">${link(tabHref("leads"), "Abrir a aba Leads")}</p>` };
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
    const hits = [...(d.items || []), ...(d.upcoming || [])].filter((i) => cased
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
  // release de resultados do trimestre (press-release entregue à CVM) e as notícias de hoje sobre o resultado
  const isRelease = (x) => x.c === "Dados Econômico-Financeiros" && x.t === "Press-release";
  const RESULT_NEWS = /resultad|lucro|prejuizo|balanc|trimestr|\b[1-4]t\d{2}\b|receita|ebitda/;
  async function answerResult(c) {
    const [month, own, d] = await Promise.all([recentDocs(), getJSON(`data/cias/emp/${encodeURIComponent(c.k)}.json`, []), digest()]);
    const docs = [...month, ...own.map((x) => ({ ...x, k: c.k }))];
    const rel = docs.filter((x) => x.k === c.k && isRelease(x)).sort((a, z) => `${z.d} ${z.h || ""}`.localeCompare(`${a.d} ${a.h || ""}`))[0];
    const name = fold(c.nm);
    const news = [...(d.items || []), ...(d.upcoming || [])].filter((i) => {
      const t = `${i.headline || ""} ${i.title || ""}`;
      return mentions(`${t} ${(i.entities || []).join(" ")}`, [name, ...(c.tk ? [fold(c.tk)] : [])]) && RESULT_NEWS.test(fold(t));
    }).sort((a, z) => String(z.published).localeCompare(String(a.published)));
    let html = "";
    if (rel) {
      html += `<p><b>${esc(c.nm)}</b>: ${esc(rel.s || "release de resultados")}, entregue à CVM em ${ddmm(rel.d)}${rel.h ? ` às ${rel.h}` : ""}.</p>`;
      html += rel.sm ? `<p>${esc(rel.sm.resumo)}</p>${(rel.sm.pontos || []).length ? `<ul class="fa-list fa-bullets">${rel.sm.pontos.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}`
        : rel.d >= new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10) ? `<p class="fa-sub">O resumo com os números sai na rotina da manhã seguinte.</p>` : "";
      html += `<p class="fa-more"><a href="${esc(docUrl(rel))}" target="_blank" rel="noopener">Abrir o release</a></p>`;
    } else html += `<p><b>${esc(c.nm)}</b>: nenhum release de resultados entregue à CVM nos dois últimos meses.</p>`;
    if (news.length) html += `<p>${news.length === 1 ? "Notícia" : "Notícias"} de hoje sobre o resultado:</p><ol class="fa-list">${news.slice(0, 4).map(newsLi).join("")}</ol>`;
    html += `<p class="fa-more">${link(ciaHref(c.k, "fin"), "Ver o financeiro da companhia")}</p>`;
    return { html };
  }
  async function answerAllResults() {
    const [docs, d, list] = await Promise.all([recentDocs(), digest(), companies()]);
    const start = (d.window?.start || "").slice(0, 10);
    const names = new Map(list.map((c) => [c.k, c.nm]));
    const rows = docs.filter((x) => isRelease(x) && (!start || x.d >= start)).sort((a, z) => `${z.d} ${z.h || ""}`.localeCompare(`${a.d} ${a.h || ""}`));
    if (!rows.length) return { html: `<p>Nenhuma companhia entregou release de resultados à CVM desde ontem às 8h.</p>` };
    const li = rows.slice(0, 10).map((x) => `<li><a href="${esc(ciaHref(x.k))}"><b>${esc(names.get(x.k) || x.n)}</b></a><span class="fa-sub">${esc(x.s || "Release de resultados")} · ${ddmm(x.d)}${x.h ? ` ${x.h}` : ""}</span>${x.sm?.resumo ? `<span class="fa-why">${esc(x.sm.resumo)}</span>` : ""}</li>`).join("");
    return { html: `<p>${rows.length === 1 ? "Uma companhia divulgou" : `${rows.length} companhias divulgaram`} resultado desde ontem às 8h:</p><ol class="fa-list">${li}</ol>` };
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

  // ---------------------------------------------------------------- quem é citado na pergunta (em qualquer posição)
  // palavras que sozinhas não identificam ninguém: um nome só vale se tiver ao menos uma palavra fora desta lista
  const GENERIC = new Set(("a o as os de do da dos das e em no na nos nas um uma para pra com por sobre que qual quais quanto quantos quantas " +
    "s sa cia companhia companhias empresa empresas grupo grupos holding holdings participacoes part inc ltd ltda llc plc lp corp co " +
    "the of and fund fundo fundos fia fim fip master investimento investimentos gestao gestora asset assets management capital partners " +
    "trust bank banco brasil brazil international global fundacao previdencia filho junior neto sobrinho " +
    "mundo mapa legal legais deal deals noticia noticias hoje ontem agora mais menos bom boa melhor maior top dia dias novo nova " +
    "resultado resultados lucro balanco fato fatos relevante relevantes documento documentos cvm aba pagina abre abra abrir leve leva " +
    "mostra mostre quero ver tem teve saiu sao e ser foi oi ola obrigado valeu").split(" "));
  // palavras comuns que coincidem com a raiz de algum ticker (QUAL3, CASH3, LOGG3...)
  const COMMON = new Set("qual cash logg tend mais casa vale bens dias hoje real rede loja pague tota sobre hype".split(" "));
  let personIdx = null;
  async function peopleIndex() {
    if (personIdx) return personIdx;
    const list = await people();
    const by = new Map();
    for (const r of list) {
      r.core = r.w.filter((w) => !GENERIC.has(w) && w.length >= 3);
      for (const w of new Set(r.core)) { if (!by.has(w)) by.set(w, []); by.get(w).push(r); }
    }
    personIdx = by;
    return by;
  }
  async function spot(q) {
    const toks = [...new Set(words(fuzzy(q)))];
    const set = new Set(toks);
    // companhia: todas as palavras do nome (ou o ticker) estão na pergunta, e o nome não é só palavra genérica
    const list = await companies();
    let cia = null, ciaScore = 0;
    const allCias = [];
    for (const c of list) {
      let best = 0;
      if (c.tk) { const tk = fold(c.tk), root = tk.replace(/\d+$/, ""); if (set.has(tk) || (root.length >= 4 && !GENERIC.has(root) && !COMMON.has(root) && set.has(root))) best = 120; }
      for (const nm of c.names) {
        const nt = nameTokens(nm);
        if (!nt.length || nt.every((w) => GENERIC.has(w))) continue;
        if (nt.every((w) => set.has(w))) best = Math.max(best, 70 + nt.length * 6);
      }
      const sc = best ? best + Math.log10(1 + c.mc) / 2 : 0;
      if (sc) allCias.push({ c, sc });
      if (sc > ciaScore) { cia = c; ciaScore = sc; }
    }
    // pessoa ou investidor: nome próprio que aparece na pergunta
    const idx = await peopleIndex();
    const cands = new Set();
    for (const w of toks) for (const r of idx.get(w) || []) cands.add(r);
    let per = null, perScore = 0;
    for (const r of cands) {
      const hit = r.core.filter((w) => set.has(w)).length;
      if (!hit) continue;
      let sc = 0;
      if (r.t === "J") { if (hit === r.core.length) sc = 60 + hit * 10 + Math.min(r.nc, 80) / 4; }
      else if (hit >= 2 && set.has(r.core[0])) sc = 50 + hit * 12 + (hit === r.core.length ? 6 : 0) + Math.min(r.nc, 30) / 6;
      if (sc > perScore) { per = r; perScore = sc; }
    }
    // os dois batem: vale o que cobre mais palavras da pergunta (Itaú Unibanco, a companhia; Itaú Unibanco Holding, o investidor)
    if (cia && per) {
      if (ciaScore >= 100 && perScore < 90) per = null;
      else if (perScore > ciaScore) cia = null; else per = null;
    }
    // várias companhias citadas ("Itaú ou Bradesco"): as que não estão contidas no nome de outra citada
    allCias.sort((a, z) => z.sc - a.sc);
    const many = [];
    for (const x of allCias) {
      const nt = nameTokens(fuzzy(x.c.nm));
      if (many.some((y) => nameTokens(fuzzy(y.nm)).join(" ").includes(nt.join(" ")) || nt.join(" ").includes(nameTokens(fuzzy(y.nm)).join(" ")))) continue;
      many.push(x.c);
      if (many.length === 4) break;
    }
    return cia ? { kind: "cia", c: cia, many } : per ? { kind: "pessoa", p: per, many: [] } : null;
  }

  const deaccent = (x) => String(x || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  function aboutCompany(i, c) {
    const terms = [fold(c.nm), ...(c.tk ? [fold(c.tk)] : [])];
    const cased = new RegExp(`(^|[^A-Za-z0-9-])${deaccent(c.nm).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![A-Za-z0-9-])`);
    return mentions((i.entities || []).join(" | "), terms) || cased.test(deaccent(`${i.headline || ""} | ${i.title || ""} | ${i.involves || ""}`)) || (c.tk && reWord(fold(c.tk)).test(fold(i.title)));
  }
  async function personProfile(slug) {
    const shard = await getJSON(`data/cias/pessoa/${encodeURIComponent(slug.slice(0, 3))}.json`, {});
    return shard[slug] || null;
  }
  // em quantas e em quais companhias abertas a pessoa ou o investidor aparece
  async function answerHoldings(p) {
    const prof = await personProfile(p.s);
    const list = await companies();
    const nm = (k) => list.find((c) => c.k === k)?.nm || `companhia ${k}`;
    const direct = (prof?.acoes || []).filter((a) => !a.via).sort((a, z) => (z.tot || 0) - (a.tot || 0));
    const indirect = (prof?.acoes || []).filter((a) => a.via);
    const cargos = prof?.cargos || [];
    const nInd = new Set(indirect.map((a) => a.k)).size, nCargo = new Set(cargos.map((c) => c.k)).size;
    const parts = [direct.length ? `participação relevante (5% ou mais, ou controle) em ${direct.length}` : "", nInd ? `participação indireta em ${nInd}` : "", nCargo ? `cargo em ${nCargo}` : ""].filter(Boolean);
    let html = `<p><b>${esc(p.n)}</b> aparece em ${p.nc === 1 ? "1 companhia aberta" : `${p.nc} companhias abertas`}${parts.length ? `: ${parts.join(", ").replace(/, ([^,]*)$/, " e $1")}` : ""}.</p>`;
    const viaList = [...new Map(indirect.map((a) => [a.k, a])).values()].sort((a, z) => (z.ef || 0) - (a.ef || 0));
    if (!direct.length && viaList.length) html += `<ol class="fa-list">${viaList.slice(0, 8).map((a) => `<li><a href="${esc(ciaHref(a.k, "acionistas"))}"><b>${esc(nm(a.k))}</b></a><span class="fa-sub">indireta, via ${esc((a.via || []).join(" → "))}${a.ef != null ? ` · ${String(a.ef.toFixed(2)).replace(".", ",")}% efetivo` : ""}</span></li>`).join("")}</ol>`;
    if (direct.length) html += `<ol class="fa-list">${direct.slice(0, 8).map((a) => `<li><a href="${esc(ciaHref(a.k, "acionistas"))}"><b>${esc(nm(a.k))}</b></a><span class="fa-sub">${a.tot != null ? `${String(a.tot.toFixed(2)).replace(".", ",")}% do capital` : ""}${a.dt ? ` · posição de ${ddmm(a.dt)}/${a.dt.slice(2, 4)}` : ""}</span></li>`).join("")}</ol>${direct.length > 8 ? `<p class="fa-sub">e mais ${direct.length - 8}.</p>` : ""}`;
    else if (cargos.length && !viaList.length) html += `<ol class="fa-list">${cargos.slice(0, 6).map((c) => `<li><a href="${esc(ciaHref(c.k, "adm"))}"><b>${esc(nm(c.k))}</b></a><span class="fa-sub">${esc(c.f || c.c || "")}</span></li>`).join("")}</ol>`;
    html += `<p class="fa-more">${link(personHref(p.s), "Ver o perfil completo")} · ${link(treeHref(p.s), "Ver no Mundo")}</p>`;
    return { html };
  }
  // acionistas relevantes (5% ou mais) do Formulário de Referência
  async function answerShareholders(c) {
    const prof = await getJSON(`data/cias/perfil/${encodeURIComponent(c.k)}.json`, {});
    const sh = (prof.acionistas || []).filter((a) => (a.tot != null || a.on != null) && !/^(outros|acoes em tesouraria|tesouraria)$/i.test(fold(a.n).trim())).sort((a, z) => (z.tot ?? z.on ?? 0) - (a.tot ?? a.on ?? 0));
    const more = `<p class="fa-more">${link(ciaHref(c.k, "acionistas"), "Ver os acionistas")} · ${link(treeHref(`k${c.k}`), "Estrutura no Mundo")}</p>`;
    if (!sh.length) return { html: `<p><b>${esc(c.nm)}</b>: sem acionistas relevantes informados à CVM.</p>${more}` };
    const pct = (v) => (v == null ? "" : `${String(v.toFixed(2)).replace(".", ",")}%`);
    const li = sh.slice(0, 7).map((a) => `<li><b>${esc(a.n)}</b><span class="fa-sub">${[a.tot != null ? `${pct(a.tot)} do capital` : "", a.on != null && a.on !== a.tot ? `${pct(a.on)} das ON` : "", a.pais && a.pais !== "Brasil" ? a.pais : ""].filter(Boolean).join(" · ")}</span></li>`).join("");
    return { html: `<p>Acionistas relevantes de <b>${esc(c.nm)}</b>${prof.ctl ? ` (controle ${esc(String(prof.ctl).toLowerCase())})` : ""}:</p><ol class="fa-list">${li}</ol>${more}` };
  }
  // ficha rápida de quem foi citado, quando a pergunta não pede nada específico
  async function answerCard(ent) {
    if (ent.kind === "pessoa") return answerHoldings(ent.p);
    const c = ent.c;
    const [resumo, d] = await Promise.all([getJSON("data/cias/resumo.json", { cias: {} }), digest()]);
    const r = resumo.cias?.[c.k] || {};
    const facts = [r.tk || c.tk, r.mc ? `valor de mercado ${brl(r.mc)}` : "", r.ctl ? `controle: ${r.ctl}` : "", r.ceo ? `CEO: ${r.ceo}` : ""].filter(Boolean);
    const news = [...(d.items || []), ...(d.upcoming || [])].filter((i) => aboutCompany(i, c));
    const prof = await perfil(c.k);
    const ltm = prof.fin?.ltm, ct = prof.cotacoes?.[r.tk || c.tk];
    const nums = [ltm?.rec != null ? `receita de ${money(ltm.rec)}` : "", lucro(ltm) != null ? `lucro de ${money(lucro(ltm))}` : ""].filter(Boolean);
    const numsHtml = nums.length || ct ? `<p class="fa-sub">${nums.length ? `Últimos 12 meses: ${esc(nums.join(", "))}.` : ""}${ct?.y1 != null ? ` Ação ${ct.y1 >= 0 ? "+" : "−"}${Math.abs(ct.y1).toFixed(1).replace(".", ",")}% em 12 meses.` : ""}</p>` : "";
    return { html: `<p><b>${esc(c.nm)}</b>${facts.length ? `: ${esc(facts.join(" · "))}` : ""}.</p>${numsHtml}${news.length ? `<p>${news.length === 1 ? "Uma notícia" : `${news.length} notícias`} hoje:</p><ol class="fa-list">${news.sort((a, z) => (z.importance || 0) - (a.importance || 0)).slice(0, 3).map(newsLi).join("")}</ol>` : `<p class="fa-sub">Sem notícias dela hoje.</p>`}
      <p class="fa-more">${link(ciaHref(c.k), "Página da companhia")} · ${link(ciaHref(c.k, "fin"), "Financeiro")} · ${link(ciaHref(c.k, "docs"), "Documentos")} · ${link(treeHref(`k${c.k}`), "Ver no Mundo")}</p>` };
  }


  // ---------------------------------------------------------------- números das companhias
  // Demonstrações (DFP anual, ITR trimestral, últimos 12 meses), múltiplos e cotação do perfil de cada companhia
  // (data/cias/perfil/{k}.json), e o resumo de todas (data/cias/resumo.json) para rankings.
  const perfil = (k) => getJSON(`data/cias/perfil/${encodeURIComponent(k)}.json`, {});
  const lucro = (r) => r?.llc ?? r?.ll;
  const div0 = (a, b) => (a == null || b == null || !b ? null : a / b);
  const METRICS = [
    { id: "alav", re: /alavancag|divida liquida ?(\/|sobre|por) ?ebitda/, label: "Dívida líquida / EBITDA", unit: "x", v: (r) => div0(r.dl, r.ebitda), better: -1, noTri: true },
    { id: "mliq", re: /margem liquida/, label: "Margem líquida", unit: "pct", v: (r) => div0(lucro(r), r.rec), better: 1 },
    { id: "mebitda", re: /margem ebitda/, label: "Margem EBITDA", unit: "pct", v: (r) => div0(r.ebitda, r.rec), better: 1, noTri: true },
    { id: "mebit", re: /margem (ebit|operacional)|\bmargem\b/, label: "Margem EBIT", unit: "pct", v: (r) => div0(r.ebit, r.rec), better: 1 },
    { id: "roe", re: /\broe\b|retorno sobre (o )?patrimonio|rentabilidade/, label: "ROE", unit: "pct", v: (r) => div0(lucro(r), r.plc ?? r.pl), better: 1, noTri: true },
    { id: "ebitda", re: /ebitda/, label: "EBITDA", unit: "brl", v: (r) => r.ebitda, better: 1, noTri: true },
    { id: "ebit", re: /\bebit\b|resultado operacional|lucro operacional/, label: "EBIT (resultado operacional)", unit: "brl", v: (r) => r.ebit, better: 1 },
    { id: "ll", re: /lucr|prejuiz|resultado liquido|\bganh(ou|o)\b/, label: "Lucro líquido", unit: "brl", v: lucro, better: 1 },
    { id: "rec", re: /receita|faturament|\bvendas\b|\bfatur/, label: "Receita líquida", unit: "brl", v: (r) => r.rec, better: 1 },
    { id: "dl", re: /divida liquida|endividament|\bdivida\b/, label: "Dívida líquida", unit: "brl", v: (r) => r.dl, better: -1, noTri: true },
    { id: "caixa", re: /\bcaixa\b(?! operacional)/, label: "Caixa e aplicações", unit: "brl", v: (r) => r.caixa, better: 1, noTri: true },
    { id: "fco", re: /fluxo de caixa|geracao de caixa|caixa operacional/, label: "Fluxo de caixa operacional", unit: "brl", v: (r) => r.fco, better: 1, noTri: true },
    { id: "capex", re: /\bcapex\b|investiu|investimentos? em (ativos|imobilizado)/, label: "Capex", unit: "brl", v: (r) => r.capex, better: 0, noTri: true },
    { id: "pl", re: /patrimonio liquido|\bpatrimonio\b/, label: "Patrimônio líquido", unit: "brl", v: (r) => r.plc ?? r.pl, better: 1, noTri: true },
    { id: "at", re: /ativo total|\bativos\b/, label: "Ativo total", unit: "brl", v: (r) => r.at, better: 1, noTri: true },
  ];
  const MARKET = [
    { id: "preco", re: /\bpreco\b|cotac|quanto (esta|ta|vale|custa) (a )?(acao|papel)|acao (da|do|de) .* (esta|ta)|\bvalendo\b/, label: "Cotação" },
    { id: "var", re: /(quanto )?(subiu|caiu|valorizou|desvalorizou|rendeu|variacao|desempenho da acao|performance)/, label: "Variação" },
    { id: "mc", re: /valor de mercado|market cap|quanto vale (a|o) /, label: "Valor de mercado" },
    { id: "pe", re: /\bp ?\/ ?l\b|preco ?\/ ?lucro|\bp ?l\b/, label: "P/L" },
    { id: "pvp", re: /p ?\/ ?vp|preco ?\/ ?valor patrimonial/, label: "P/VP" },
    { id: "evebitda", re: /ev ?\/ ?ebitda/, label: "EV/EBITDA" },
    { id: "multiplos", re: /multiplos?|esta (cara|barata)|valuation/, label: "Múltiplos" },
  ];
  const FACTS = [
    { id: "func", re: /funcionari|empregad|colaborador|trabalham/ },
    { id: "rem", re: /remunerac|salari|quanto ganha|ganham|bonus/ },
    { id: "ceo", re: /\bceo\b|presidente( executivo)?\b(?! do conselho)|diretor[ -]presidente|quem (comanda|manda|dirige)/ },
    { id: "conselho", re: /conselh|presidente do conselho|chairman|conselheir/ },
    { id: "diretoria", re: /diretori|diretores|\bcfo\b|diretor financeiro|executivos/ },
    { id: "auditor", re: /auditor|auditoria/ },
    { id: "sede", re: /\bsede\b|onde fica|endereco/ },
    { id: "ri", re: /\bri\b|relacoes com investidores|contato/ },
    { id: "ff", re: /free ?float|acoes em circulacao|quantos acionistas|dispersao/ },
    { id: "titulos", re: /debentur|bonds?\b|titulos? de divida|emissoes de divida|vencimentos/ },
    { id: "controladas", re: /controladas|subsidiarias|participacoes da|em quais empresas (a|o) .* (tem|investe)|investe em/ },
    { id: "setor", re: /\bsetor\b|o que (a|o) .* faz|atividade|ramo/ },
  ];
  const money = (v) => {
    if (v == null) return "–";
    const a = Math.abs(v), sg = v < 0 ? "−" : "";
    const f = (x, d) => x.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
    if (a >= 1e12) return `${sg}R$ ${f(a / 1e12, 2)} tri`;
    if (a >= 1e9) return `${sg}R$ ${f(a / 1e9, a >= 1e11 ? 1 : 2)} bi`;
    if (a >= 1e6) return `${sg}R$ ${f(a / 1e6, a >= 1e8 ? 0 : 1)} mi`;
    return `${sg}R$ ${f(a / 1e3, 0)} mil`;
  };
  const fmtVal = (m, v) => (v == null || !isFinite(v) ? "–" : m.unit === "pct" ? `${(v * 100).toFixed(1).replace(".", ",")}%` : m.unit === "x" ? `${v.toFixed(1).replace(".", ",")}x` : money(v));
  // variação entre dois valores: % (ou pontos percentuais para margens), com cor de melhor/pior
  function delta(m, a, b) {
    if (a == null || b == null || !isFinite(a) || !isFinite(b)) return { txt: "", cls: "", good: null };
    let txt, d;
    if (m.unit === "pct") { d = (a - b) * 100; txt = `${d >= 0 ? "+" : "−"}${Math.abs(d).toFixed(1).replace(".", ",")} p.p.`; }
    else if (m.unit === "x") { d = a - b; txt = `${d >= 0 ? "+" : "−"}${Math.abs(d).toFixed(1).replace(".", ",")}x`; }
    else {
      if (!b) return { txt: "", cls: "", good: null };
      if (Math.sign(a) !== Math.sign(b)) { d = a - b; txt = a > b ? "virou positivo" : "virou negativo"; }
      else { d = (a - b) / Math.abs(b) * 100; txt = `${d >= 0 ? "+" : "−"}${Math.abs(d).toFixed(1).replace(".", ",")}%`; }
    }
    const good = m.better ? (d > 0) === (m.better > 0) : null;
    return { txt, cls: good == null || Math.abs(d) < 0.05 ? "" : good ? "fa-pos" : "fa-neg", good };
  }
  const QWORD = { primeiro: 1, segundo: 2, terceiro: 3, quarto: 4 };
  // períodos citados na pergunta: trimestres (3T, 3T25, terceiro trimestre), anos (2024, esse ano, ano passado), 12 meses
  function periodsOf(q, fin) {
    const tri = fin.tri || [], years = (fin.anual || []).map((r) => +r.ref.slice(0, 4));
    const curYear = tri.length ? +tri[tri.length - 1].ref.slice(0, 4) : new Date().getFullYear();
    const out = [];
    const yy = (y) => (y ? (y.length === 2 ? 2000 + +y : +y) : null);
    const re = /\b(?:([1-4])\s?(?:o\s|º\s?)?(?:trimestre|trim|tri|t)(?![a-z])\s?(?:de\s)?(\d{4}|\d{2})?\b|(primeiro|segundo|terceiro|quarto) trimestre(?: de)?\s?(\d{4}|\d{2})?)/g;
    let m;
    while ((m = re.exec(q))) out.push({ kind: "q", n: +(m[1] || QWORD[m[3]]), y: yy(m[2] || m[4]), at: m.index });
    // "3T comparado ao 2", "3T vs 2T": número solto depois de um trimestre
    const loose = /\b(?:comparad[oa] (?:ao|com o|com)|contra o?|vs\.?|versus|x|com o|em relacao ao|frente ao)\s+([1-4])(?:o|º)?\b(?!\s?(?:t|tri|trimestre)\b)/g;
    if (out.length) while ((m = loose.exec(q))) out.push({ kind: "q", n: +m[1], y: null, at: m.index });
    if (/\b(ultimo|esse|este) trimestre\b|trimestre (passado|mais recente)/.test(q)) out.push({ kind: "q", last: 0, at: q.search(/trimestre/) });
    if (/trimestre anterior|penultimo trimestre/.test(q)) out.push({ kind: "q", last: 1, at: q.search(/trimestre anterior|penultimo/) });
    const yre = /\b(20[12]\d)\b/g;
    while ((m = yre.exec(q))) if (!out.some((o) => o.kind === "q" && o.y === +m[1] && Math.abs(o.at - m.index) < 14)) out.push({ kind: "y", y: +m[1], at: m.index });
    if (/\b(esse|este|neste|nesse) ano\b|\bno ano\b|acumulado do ano|\bytd\b/.test(q)) out.push({ kind: "y", y: curYear, ytd: true, at: q.search(/ano/) });
    if (/ano passado|ano anterior|\bultimo ano\b/.test(q)) out.push({ kind: "y", y: curYear - 1, at: q.search(/ano (passado|anterior)/) });
    if (/12 meses|\bltm\b|ultimos doze/.test(q)) out.push({ kind: "ltm", at: q.search(/12 meses|ltm|doze/) });
    out.sort((a, b) => a.at - b.at);
    // trimestre sem ano: o ano do mais recente disponível com esse número (ou o ano citado ao lado)
    const yHint = out.find((o) => o.kind === "y" && !o.ytd)?.y;
    for (const o of out) if (o.kind === "q" && o.last == null && !o.y) o.y = yHint || curYear;
    return { list: out.filter((o, i) => out.findIndex((x) => x.kind === o.kind && x.n === o.n && x.y === o.y && x.last === o.last && x.ytd === o.ytd) === i), curYear, years };
  }
  // valores de um período: trimestre do ITR, ano da DFP, acumulado do ano (soma dos trimestres), 12 meses
  function periodData(fin, o) {
    const tri = fin.tri || [];
    if (o.kind === "q") {
      const row = o.last != null ? tri[tri.length - 1 - o.last] : tri.find((r) => r.p === `${o.n}T${String(o.y).slice(2)}`);
      return row ? { label: row.p, row, tri: true } : { label: o.last != null ? "trimestre" : `${o.n}T${String(o.y).slice(2)}`, missing: true, tri: true };
    }
    if (o.kind === "ltm") return fin.ltm ? { label: "Últimos 12 meses", row: fin.ltm } : { label: "Últimos 12 meses", missing: true };
    if (o.kind === "y") {
      const an = (fin.anual || []).find((r) => r.ref.startsWith(String(o.y)));
      if (an && !o.ytd) return { label: String(o.y), row: an };
      // ano em curso: soma dos trimestres já divulgados
      const qs = tri.filter((r) => r.ref.startsWith(String(o.y)));
      if (!qs.length) return { label: String(o.y), missing: true };
      const sum = {};
      for (const k of ["rec", "ebit", "ll", "llc"]) { const vals = qs.map((r) => r[k]).filter((v) => v != null); if (vals.length === qs.length) sum[k] = vals.reduce((a, b) => a + b, 0); }
      return { label: `${o.y} até o ${qs[qs.length - 1].p}`, row: sum, ytd: qs.map((r) => r.p), tri: true };
    }
    return { label: "?", missing: true };
  }
  const metricOf = (q) => METRICS.find((m) => m.re.test(q));
  const tableRows = (rows) => `<table class="fa-table"><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<${i ? "td" : "th"}${c && c.cls ? ` class="${c.cls}"` : ""}>${c && c.html != null ? c.html : esc(c ?? "")}</${i ? "td" : "th"}>`).join("")}</tr>`).join("")}</tbody></table>`;
  const finLinks = (c) => `<p class="fa-more">${link(ciaHref(c.k, "fin"), "Ver o financeiro completo")}</p>`;

  const lc = (label) => (/^[A-Z]{2,}/.test(label) ? label : label[0].toLowerCase() + label.slice(1));
  const inLabel = (lab) => (/^\d{4}$|^\d{4} até/.test(lab) ? `em ${lab}` : /12 meses/i.test(lab) ? `nos ${lab.replace(/^Últimos /, "últimos ")}` : `no ${lab}`);
  const prevYearQ = (p) => `${p[0]}T${String(+p.slice(2) - 1).padStart(2, "0")}`;
  async function answerFin(c, q, mHint) {
    const prof = await perfil(c.k);
    const fin = prof.fin || {};
    if (!fin.tri && !fin.anual) return { html: `<p><b>${esc(c.nm)}</b>: o portal ainda não tem as demonstrações financeiras dessa companhia.</p>${finLinks(c)}` };
    const m = metricOf(q) || mHint;
    const { list: per, curYear } = periodsOf(q, fin);
    if (!m) return answerFinOverview(c, prof, per);
    const isFin = fin.ltm?.fin || fin.anual?.[fin.anual.length - 1]?.fin;
    const label = isFin && m.id === "rec" ? "Receita (intermediação financeira)" : m.label;
    const tri = fin.tri || [], anual = fin.anual || [];
    const lastTri = tri[tri.length - 1];
    const ltmLabel = `12 meses até o ${lastTri?.p || fin.ltm?.ref?.slice(0, 7) || ""}`;
    let notes = [];
    let perUse = per;
    if (m.noTri && per.some((o) => o.kind === "q")) {
      perUse = per.filter((o) => o.kind !== "q");
      notes.push(`${label} não sai por trimestre nos dados da CVM; mostro anos e 12 meses.`);
    }
    const val = (row) => (row ? m.v(row) : null);
    const pt = (lab, row, extra = {}) => ({ lab, row, v: val(row), ...extra });
    // um trimestre (ou nenhum período): o trimestre contra o anterior e o mesmo do ano passado, mais 12 meses e o último ano
    const focusQ = (cur) => {
      const prev = tri[tri.indexOf(cur) - 1], yAgo = tri.find((r) => r.p === prevYearQ(cur.p));
      const a = val(cur);
      const comp = [prev && pt(prev.p, prev), yAgo && pt(yAgo.p, yAgo)].filter((x) => x && x.v != null);
      if (a == null) return null;
      const rows = [[cur.p, fmtVal(m, a), ""]].concat(comp.map((x) => { const d = delta(m, a, x.v); return [x.lab, fmtVal(m, x.v), { html: d.txt ? `${d.txt} no ${cur.p}` : "", cls: d.cls }]; }));
      if (fin.ltm && val(fin.ltm) != null) rows.push([ltmLabel, fmtVal(m, val(fin.ltm)), ""]);
      const an = anual[anual.length - 1];
      if (an && val(an) != null) rows.push([an.ref.slice(0, 4), fmtVal(m, val(an)), ""]);
      const parts = comp.map((x) => { const d = delta(m, a, x.v); return d.txt ? `<span class="${d.cls}">${d.txt}</span> contra o ${esc(x.lab)}` : ""; }).filter(Boolean);
      // veredito pela comparação anual (sem sazonalidade); sem ela, contra o trimestre anterior
      const basis = comp.find((x) => x.lab === prevYearQ(cur.p)) || comp[0];
      const good = basis ? delta(m, a, basis.v).good : null;
      const word = good == null ? "" : `: <b>${good ? "melhor" : "pior"}</b> que ${basis.lab === prevYearQ(cur.p) ? "um ano antes" : "no trimestre anterior"}`;
      return `<p><b>${esc(c.nm)}</b>: ${esc(lc(label))} de <b>${fmtVal(m, a)}</b> no ${esc(cur.p)}${parts.length ? `, ${parts.join(" e ")}` : ""}${word}.</p>${tableRows(rows)}`;
    };
    let pts = null;
    const quarters = perUse.filter((o) => o.kind === "q");
    if (!perUse.length) {
      if (!m.noTri && lastTri && val(lastTri) != null) return { html: focusQ(lastTri) + notesHtml(notes) + finLinks(c) };
      pts = [...anual.slice(-4).map((r) => pt(r.ref.slice(0, 4), r)), ...(fin.ltm ? [pt(ltmLabel, fin.ltm)] : [])];
    } else if (perUse.length === 1 && quarters.length === 1) {
      const d = periodData(fin, quarters[0]);
      if (d.row && val(d.row) != null) return { html: focusQ(d.row) + notesHtml(notes) + finLinks(c) };
      pts = [pt(d.label, null, { missing: true })];
    } else {
      const ytd = perUse.find((o) => o.kind === "y" && o.ytd);
      const prevY = perUse.find((o) => o.kind === "y" && !o.ytd && o.y === curYear - 1);
      if (ytd && (perUse.length === 1 || prevY)) {
        // "esse ano" contra o ano passado: mesmos meses dos dois anos; sem os trimestres do ano passado, 12 meses contra o último ano fechado
        const cur = periodData(fin, ytd);
        const prevQs = (cur.ytd || []).map((p) => tri.find((r) => r.p === prevYearQ(p)));
        if (cur.row && prevQs.length && prevQs.every(Boolean)) {
          const sum = {};
          for (const k of ["rec", "ebit", "ll", "llc"]) { const vs = prevQs.map((r) => r[k]); if (vs.every((v) => v != null)) sum[k] = vs.reduce((a, b) => a + b, 0); }
          pts = [pt(`${curYear - 1} até o ${prevQs[prevQs.length - 1].p}`, sum), pt(cur.label, cur.row)];
          notes.push(`Mesmos trimestres nos dois anos (${cur.ytd.join(", ")} contra ${prevQs.map((r) => r.p).join(", ")}).`);
        } else {
          const an = anual.find((r) => r.ref.startsWith(String(curYear - 1))) || anual[anual.length - 1];
          pts = [an && pt(an.ref.slice(0, 4), an), fin.ltm && pt(ltmLabel, fin.ltm)].filter(Boolean);
          if (cur.row && val(cur.row) != null) notes.push(`Acumulado de ${cur.label}: ${fmtVal(m, val(cur.row))}. Para comparar períodos do mesmo tamanho, uso os 12 meses até o ${lastTri?.p} contra o ano de ${an?.ref.slice(0, 4)} inteiro (faltam trimestres do ano passado na base).`);
        }
      } else if (perUse.length === 1 && perUse[0].kind === "y") {
        const y = perUse[0].y, cur = anual.find((r) => r.ref.startsWith(String(y))), prev = anual.find((r) => r.ref.startsWith(String(y - 1)));
        pts = cur ? [prev && pt(String(y - 1), prev), pt(String(y), cur)].filter(Boolean) : [pt(String(y), null, { missing: true })];
      } else if (perUse.length === 1 && perUse[0].kind === "ltm") {
        const an = anual[anual.length - 1];
        pts = [an && pt(an.ref.slice(0, 4), an), fin.ltm && pt(ltmLabel, fin.ltm)].filter(Boolean);
      } else {
        // vários períodos citados: em ordem cronológica
        const key = (o) => (o.kind === "q" ? (o.last != null ? 99990 - o.last : o.y * 10 + o.n) : o.kind === "y" ? o.y * 10 + (o.ytd ? 3 : 4.5) : 99999);
        pts = [...perUse].sort((a, z) => key(a) - key(z)).map((o) => { const d = periodData(fin, o); return pt(d.label, d.row, { missing: d.missing }); });
      }
    }
    const have = pts.filter((x) => x.v != null), missing = pts.filter((x) => x.v == null);
    if (!have.length) {
      let html = `<p><b>${esc(c.nm)}</b>: sem ${esc(lc(label))} para ${esc(missing.map((x) => x.lab).join(" e "))} nos dados da CVM${lastTri ? ` (o último trimestre disponível é o ${lastTri.p})` : ""}.</p>`;
      const rel = await latestRelease(c);
      if (rel?.sm) html += `<p>Pelo release mais recente (${esc(rel.s || "resultado")}, ${ddmm(rel.d)}):</p><p>${esc(rel.sm.resumo)}</p>`;
      return { html: html + finLinks(c) };
    }
    const rows = have.map((x, i) => { const d = i ? delta(m, x.v, have[i - 1].v) : null; return [x.lab, fmtVal(m, x.v), d && d.txt ? { html: d.txt, cls: d.cls } : ""]; });
    const first = have[0], last = have[have.length - 1];
    const d = have.length > 1 ? delta(m, last.v, first.v) : null;
    let html;
    if (d && d.txt) {
      const word = d.good == null ? (last.v >= first.v ? "maior" : "menor") : d.good ? "melhor" : "pior";
      html = `<p><b>${esc(c.nm)}</b>: ${esc(lc(label))} de <b>${fmtVal(m, last.v)}</b> ${esc(inLabel(last.lab))}, <span class="${d.cls}">${d.txt}</span> contra ${esc(inLabel(first.lab).replace(/^(no|nos|em) /, (w) => (w === "em " ? "" : w === "no " ? "o " : "os ")))} (${fmtVal(m, first.v)}): <b>${word}</b>.</p>`;
    } else html = `<p><b>${esc(c.nm)}</b>, ${esc(lc(label))}:</p>`;
    html += tableRows(rows);
    if (missing.length) notes.push(`Sem dado para ${missing.map((x) => x.lab).join(", ")}${lastTri ? ` (último trimestre na CVM: ${lastTri.p})` : ""}.`);
    if (isFin && m.id === "rec") notes.push("Em banco, a receita é a de intermediação financeira (juros e afins), sem descontar as despesas de captação.");
    return { html: html + notesHtml(notes) + finLinks(c) };
  }
  const notesHtml = (notes) => notes.map((n) => `<p class="fa-sub">${esc(n)}</p>`).join("");
  async function latestRelease(c) {
    const [month, own] = await Promise.all([recentDocs(), getJSON(`data/cias/emp/${encodeURIComponent(c.k)}.json`, [])]);
    return [...month.filter((x) => x.k === c.k), ...own].filter(isRelease).sort((a, z) => `${z.d} ${z.h || ""}`.localeCompare(`${a.d} ${a.h || ""}`))[0] || null;
  }
  // visão geral do resultado: último trimestre contra o anterior e o mesmo do ano passado, e 12 meses
  async function answerFinOverview(c, prof, per) {
    const fin = prof.fin || {};
    const t = fin.tri || [];
    let cur = t[t.length - 1];
    const asked = per.find((o) => o.kind === "q" && o.last == null);
    if (asked) cur = t.find((r) => r.p === `${asked.n}T${String(asked.y).slice(2)}`) || null;
    const prev = cur && t[t.indexOf(cur) - 1];
    const yAgo = cur && t.find((r) => r.p === `${cur.p[0]}T${String(+cur.p.slice(2) - 1).padStart(2, "0")}`);
    const ms = ["rec", "ll", "ebit", "mebit"].map((id) => METRICS.find((m) => m.id === id));
    let html = "";
    if (!cur) {
      const want = asked ? `${asked.n}T${String(asked.y).slice(2)}` : "o trimestre pedido";
      html += `<p><b>${esc(c.nm)}</b>: ${esc(want)} ainda não está nos dados da CVM${t.length ? ` (o último é o ${t[t.length - 1].p})` : ""}.</p>`;
      const rel = await latestRelease(c);
      if (rel) html += rel.sm ? `<p>Release mais recente (${esc(rel.s || "resultado")}, ${ddmm(rel.d)}):</p><p>${esc(rel.sm.resumo)}</p>${(rel.sm.pontos || []).length ? `<ul class="fa-list fa-bullets">${rel.sm.pontos.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}` : `<p class="fa-sub">Release mais recente: ${esc(rel.s || "")} em ${ddmm(rel.d)}.</p>`;
      if (t.length) { const r2 = await answerFinOverview(c, prof, []); html += r2.html; return { html }; }
      return { html: html + finLinks(c) };
    }
    const head = ["", cur.p, prev ? `vs ${prev.p}` : "", yAgo ? `vs ${yAgo.p}` : ""];
    const rows = ms.filter((m) => m.v(cur) != null).map((m) => {
      const a = m.v(cur), b = prev ? m.v(prev) : null, y = yAgo ? m.v(yAgo) : null;
      const d1 = delta(m, a, b), d2 = delta(m, a, y);
      return [m.label.replace(" (resultado operacional)", ""), fmtVal(m, a), prev ? { html: d1.txt || "–", cls: d1.cls } : "", yAgo ? { html: d2.txt || "–", cls: d2.cls } : ""];
    });
    html += `<p>Resultado de <b>${esc(c.nm)}</b> no <b>${esc(cur.p)}</b> (dados da CVM):</p><table class="fa-table"><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((x, i) => `<${i ? "td" : "th"}${x && x.cls ? ` class="${x.cls}"` : ""}>${x && x.html != null ? x.html : esc(x ?? "")}</${i ? "td" : "th"}>`).join("")}</tr>`).join("")}</tbody></table>`;
    const llm = METRICS.find((m) => m.id === "ll");
    if (yAgo && llm.v(cur) != null && llm.v(yAgo) != null) {
      const d = delta(llm, llm.v(cur), llm.v(yAgo));
      html += `<p>Lucro ${d.good ? "maior" : "menor"} que um ano antes (${d.txt}).</p>`;
    }
    if (fin.ltm) html += `<p class="fa-sub">Últimos 12 meses: receita ${money(fin.ltm.rec)}${lucro(fin.ltm) != null ? `, lucro ${money(lucro(fin.ltm))}` : ""}${fin.ltm.ebitda != null ? `, EBITDA ${money(fin.ltm.ebitda)}` : ""}.</p>`;
    return { html: html + finLinks(c) };
  }
  // dois ou mais nomes: a mesma conta lado a lado (12 meses, ou o último trimestre comum)
  async function answerFinCompare(cs, q) {
    const m = metricOf(q) || METRICS.find((x) => x.id === "ll");
    const profs = await Promise.all(cs.map((c) => perfil(c.k)));
    const perQ = /trimestr|\b[1-4] ?t\b/.test(q);
    const rows = cs.map((c, i) => {
      const fin = profs[i].fin || {};
      let row = fin.ltm, lab = "12 meses";
      if (perQ && fin.tri?.length && !m.noTri) { row = fin.tri[fin.tri.length - 1]; lab = row.p; }
      return { c, v: row ? m.v(row) : null, lab };
    });
    const ok = rows.filter((r) => r.v != null).sort((a, z) => (m.better < 0 ? a.v - z.v : z.v - a.v));
    if (!ok.length) return { html: `<p>Sem ${esc(m.label.toLowerCase())} dessas companhias nos dados da CVM.</p>` };
    const best = ok[0];
    let html = `<p>${esc(m.label)}${ok.every((r) => r.lab === ok[0].lab) ? ` (${esc(ok[0].lab)})` : ""}: ${m.better ? (m.better > 0 ? "maior" : "menor") : "maior"} é ${link(ciaHref(best.c.k, "fin"), best.c.nm)}.</p>`;
    html += tableRows(ok.map((r) => [r.c.nm, fmtVal(m, r.v), r.lab]));
    const miss = rows.filter((r) => r.v == null);
    if (miss.length) html += `<p class="fa-sub">Sem dado: ${esc(miss.map((r) => r.c.nm).join(", "))}.</p>`;
    return { html };
  }
  // cotação, variação e múltiplos
  async function answerMarket1(c, q) {
    const prof = await perfil(c.k);
    const mk = prof.mercado || {}, cots = prof.cotacoes || {};
    const tks = Object.keys(cots);
    const tk = tks.find((t) => q.includes(fold(t))) || mk.tk || tks[0];
    const ct = cots[tk];
    const pct = (v) => (v == null ? "–" : `${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(2).replace(".", ",")}%`);
    const num = (v, d = 2) => (v == null ? "–" : v.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d }));
    const rows = [];
    if (ct) {
      rows.push([`Cotação ${tk}`, `R$ ${num(ct.p)}`, { html: `${pct(ct.d1)} no dia`, cls: ct.d1 >= 0 ? "fa-pos" : "fa-neg" }]);
      rows.push(["Em 12 meses", { html: pct(ct.y1), cls: ct.y1 >= 0 ? "fa-pos" : "fa-neg" }, `mín. R$ ${num(ct.lo)} · máx. R$ ${num(ct.hi)}`]);
    }
    if (mk.mc) rows.push(["Valor de mercado", money(mk.mc), mk.ev ? `EV ${money(mk.ev)}` : ""]);
    if (mk.pl != null || mk.pvp != null || mk.ev_ebitda != null) rows.push(["Múltiplos", [mk.pl != null ? `P/L ${num(mk.pl, 1)}` : "", mk.pvp != null ? `P/VP ${num(mk.pvp, 2)}` : "", mk.ev_ebitda != null ? `EV/EBITDA ${num(mk.ev_ebitda, 1)}` : ""].filter(Boolean).join(" · "), ""]);
    if (!rows.length) return { html: `<p><b>${esc(c.nm)}</b> não tem cotação no portal (talvez não seja negociada na bolsa).</p>` };
    const when = ct?.t || mk.ref;
    return { html: `<p><b>${esc(c.nm)}</b>${when ? ` <span class="fa-note">(cotação de ${esc(ddmm(when.slice(0, 10)))} ${esc(when.slice(11, 16))}, com atraso)</span>` : ""}:</p>${tableRows(rows)}<p class="fa-more">${link(ciaHref(c.k), "Página da companhia")}</p>` };
  }
  // dados cadastrais e de governança do perfil
  async function answerFact(c, f, q) {
    const p = await perfil(c.k);
    const nm = `<b>${esc(c.nm)}</b>`;
    const adm = p.adm || [];
    const who = (re) => adm.filter((a) => re.test(fold(a.c || "")));
    const person = (a) => `${link(personHref(personSlugOf(a.n)), a.n)}${a.c ? ` <span class="fa-note">(${esc(a.c)})</span>` : ""}`;
    switch (f.id) {
      case "func": {
        const e = p.empregados;
        if (!e?.total) return { html: `<p>${nm}: número de funcionários não informado.</p>` };
        return { html: `<p>${nm} tem <b>${e.total.toLocaleString("pt-BR")}</b> empregados${e.lideranca ? `, ${e.lideranca.toLocaleString("pt-BR")} em liderança` : ""}${e.mulheres_lideranca != null ? ` (${String(e.mulheres_lideranca).replace(".", ",")}% de mulheres na liderança)` : ""}, segundo o Formulário de Referência.</p>` };
      }
      case "rem": {
        const r = p.rem;
        if (!r?.orgaos?.length) return { html: `<p>${nm}: remuneração não informada.</p>` };
        return { html: `<p>Remuneração de ${nm} em ${esc(r.ano)} (Formulário de Referência):</p>${tableRows(r.orgaos.map((o) => [o.o, money(o.v), [o.m ? `${String(o.m).replace(".", ",")} membros` : "", o.max ? `maior ${money(o.max)}` : "", o.med ? `média ${money(o.med)}` : ""].filter(Boolean).join(" · ")]))}` };
      }
      case "ceo": {
        const ceo = who(/diretor[ -]presidente|presidente executivo|\bceo\b|presidente da diretoria|diretor geral/)[0];
        return ceo ? { html: `<p>CEO de ${nm}: ${person(ceo)}${ceo.el ? `, eleito em ${ddmm(ceo.el)}/${ceo.el.slice(0, 4)}` : ""}.</p>${ceo.pr ? `<p class="fa-sub">${esc(ceo.pr)}</p>` : ""}` } : null;
      }
      case "conselho": {
        const pres = who(/presidente do conselho/)[0];
        const cons = adm.filter((a) => a.o === "C" || /conselho de administracao|conselheiro/.test(fold(a.c || "")));
        if (!cons.length && !pres) return null;
        return { html: `<p>Conselho de administração de ${nm}${pres ? `: presidido por ${person(pres)}` : ""}${cons.length ? `, com ${cons.length} membros` : ""}.</p>${cons.length ? `<ul class="fa-list fa-plain">${cons.slice(0, 12).map((a) => `<li>${person(a)}</li>`).join("")}</ul>` : ""}<p class="fa-more">${link(ciaHref(c.k, "adm"), "Ver a administração")}</p>` };
      }
      case "diretoria": {
        const d = adm.filter((a) => a.o === "D" || /diretor/.test(fold(a.c || "")));
        if (!d.length) return null;
        return { html: `<p>Diretoria de ${nm} (${d.length}):</p><ul class="fa-list fa-plain">${d.slice(0, 12).map((a) => `<li>${person(a)}</li>`).join("")}</ul><p class="fa-more">${link(ciaHref(c.k, "adm"), "Ver a administração")}</p>` };
      }
      case "auditor": return p.auditor ? { html: `<p>Auditor de ${nm}: <b>${esc(p.auditor)}</b>${p.auditor_desde ? ` (desde ${esc(String(p.auditor_desde).slice(0, 4))})` : ""}.</p>` } : null;
      case "sede": return p.sede ? { html: `<p>Sede de ${nm}: ${esc(p.sede)}.</p>${p.web ? `<p class="fa-more"><a href="${esc(p.web)}" target="_blank" rel="noopener">Site</a></p>` : ""}` } : null;
      case "ri": return p.ri ? { html: `<p>Relações com investidores de ${nm}: ${esc(p.ri.n || "")}${p.ri.email ? ` · ${esc(p.ri.email)}` : ""}${p.ri.tel ? ` · ${esc(p.ri.tel)}` : ""}.</p>` } : null;
      case "ff": {
        const d = p.dispersao;
        if (!d) return null;
        return { html: `<p>${nm}: free float de <b>${String(d.ff ?? "–").replace(".", ",")}%</b>${d.ff_on != null ? ` (${String(d.ff_on).replace(".", ",")}% das ON, ${String(d.ff_pn ?? "–").replace(".", ",")}% das PN)` : ""}; ${[d.pf ? `${d.pf.toLocaleString("pt-BR")} acionistas pessoa física` : "", d.pj ? `${d.pj.toLocaleString("pt-BR")} pessoa jurídica` : "", d.inst ? `${d.inst.toLocaleString("pt-BR")} institucionais` : ""].filter(Boolean).join(", ")}${d.ago ? ` (posição da AGO de ${ddmm(d.ago)}/${d.ago.slice(0, 4)})` : ""}.</p>` };
      }
      case "titulos": {
        const t = (p.titulos || []).filter((x) => !x.vc || x.vc >= new Date().toISOString().slice(0, 10)).sort((a, z) => String(a.vc).localeCompare(String(z.vc)));
        if (!t.length) return { html: `<p>${nm}: nenhum título de dívida em circulação no Formulário de Referência.</p>` };
        const tot = t.reduce((a, x) => a + (x.s || 0), 0);
        return { html: `<p>${nm} tem ${t.length} títulos de dívida em circulação${tot ? `, com saldo de ${money(tot)}` : ""}. Próximos vencimentos:</p>${tableRows(t.slice(0, 6).map((x) => [x.id || x.t, x.vc ? `${ddmm(x.vc)}/${x.vc.slice(0, 4)}` : "–", x.s ? money(x.s) : ""]))}<p class="fa-more">${link(ciaHref(c.k, "divida"), "Ver dívida e ofertas")}</p>` };
      }
      case "controladas": {
        const inv = p.investe_em || [], parts = p.participacoes || [];
        if (!inv.length && !parts.length) return null;
        const list = await companies();
        const nmk = (k) => list.find((x) => x.k === k)?.nm || k;
        return { html: `<p>${nm} tem participação em:</p><ul class="fa-list fa-plain">${[...inv.map((x) => `<li>${link(ciaHref(x.k), nmk(x.k))} <span class="fa-note">${String(x.pct).replace(".", ",")}%${x.ctl ? " · controle" : ""}</span></li>`), ...parts.slice(0, 10).map((x) => `<li>${esc(x.n)} <span class="fa-note">${String(x.pct).replace(".", ",")}%</span></li>`)].join("")}</ul>` };
      }
      case "setor": return { html: `<p>${nm}: ${esc(p.setor || "")}${p.ativ ? `. ${esc(p.ativ)}` : ""}</p>` };
    }
    return null;
  }
  // mesmo critério do portal para o endereço do perfil de uma pessoa
  const personSlugOf = (name) => fold(name).replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).join("-").slice(0, 80);

  // rankings com o resumo de todas as companhias: maiores por valor de mercado, receita, lucro, alta ou queda
  const SECTORS = [
    [/banc/, /bancos|intermediacao financeira/, "bancos"], [/eletric|energia/, /energia eletrica/, "energia elétrica"], [/petrol|oleo e gas|\bgas\b/, /petroleo e gas/, "petróleo e gás"],
    [/varej|comercio|lojas/, /comercio/, "varejo"], [/construt|incorporad|construcao/, /construcao civil/, "construção"], [/saude|hospita|medic/, /servicos medicos/, "saúde"],
    [/minera|mineracao/, /extracao mineral/, "mineração"], [/siderurg|metalurg|\baco\b/, /metalurgia e siderurgia/, "siderurgia"], [/telecom|telefon/, /telecomunicacoes/, "telecom"],
    [/segurad/, /seguradoras/, "seguradoras"], [/saneament|\bagua\b/, /saneamento/, "saneamento"], [/agro|acucar|etanol/, /agricultura/, "agro"], [/aliment|frigorif/, /alimentos/, "alimentos"],
    [/logistic|transport/, /transporte/, "transporte e logística"], [/educac/, /educacao/, "educação"], [/papel|celulose/, /papel e celulose/, "papel e celulose"], [/farmac/, /farmaceutico/, "farmacêuticas"],
    [/tecnolog|software|informatica/, /comunicacao e informatica/, "tecnologia"],
  ];
  async function answerRanking(q) {
    const [resumo, idx] = await Promise.all([getJSON("data/cias/resumo.json", { cias: {} }), getJSON("data/cias/index.json", { companies: [] })]);
    const st = new Map((idx.companies || []).map((c) => [c.k, fold(c.st || "")]));
    const sec = SECTORS.find(([re]) => re.test(q));
    const KEYS = [
      [/valor de mercado|maiores empresas|mais valiosas|maior(es)? da bolsa|tamanho/, "mc", "valor de mercado", money, -1],
      [/lucr/, "ll", "lucro em 12 meses", money, -1], [/receita|faturament/, "rec", "receita em 12 meses", money, -1],
      [/(subiu|subiram|alta|valoriz|ganharam)/, "y1", "alta em 12 meses", (v) => `+${v.toFixed(1).replace(".", ",")}%`, -1],
      [/(caiu|cairam|queda|desvaloriz|perderam)/, "y1", "queda em 12 meses", (v) => `${v.toFixed(1).replace(".", ",")}%`, 1],
    ];
    let k = KEYS.find(([re]) => re.test(q)) || KEYS[0];
    let field = k[1];
    if ((k[1] === "y1") && /\bhoje\b|no dia|ontem/.test(q)) field = "d1";
    const asc = /menor(es)?|piores?/.test(q) && k[1] !== "y1" ? 1 : k[4];
    let rows = Object.entries(resumo.cias || {}).map(([kk, r]) => ({ k: kk, ...r })).filter((r) => r[field] != null && r.tk);
    if (sec) rows = rows.filter((r) => sec[1].test(st.get(r.k) || ""));
    if (field === "y1" || field === "d1") rows = rows.filter((r) => (k[4] < 0 ? r[field] > 0 : r[field] < 0));
    rows.sort((a, z) => (asc > 0 ? a[field] - z[field] : z[field] - a[field]));
    const n = /\btop ?(\d+)|(\d+) maiores/.exec(q); const lim = Math.min(15, +(n?.[1] || n?.[2]) || 8);
    if (!rows.length) return { html: "<p>Não achei companhias com esse dado.</p>" };
    const what = field === "d1" ? (k[4] < 0 ? "alta no dia" : "queda no dia") : k[2];
    const fmt = field === "d1" ? (v) => `${v >= 0 ? "+" : ""}${v.toFixed(1).replace(".", ",")}%` : k[3];
    return { html: `<p>${asc > 0 && k[1] !== "y1" ? "Menores" : "Maiores"} por ${esc(what)}${sec ? ` entre ${esc(sec[2])}` : " na bolsa"}:</p><ol class="fa-list">${rows.slice(0, lim).map((r) => `<li><a href="${esc(ciaHref(r.k, field === "mc" ? "" : "fin"))}"><b>${esc(r.nm)}</b></a> <span class="fa-sub">${esc(r.tk)} · ${esc(fmt(r[field]))}</span></li>`).join("")}</ol><p class="fa-sub">Lucro e receita: últimos 12 meses na CVM; cotações com atraso.</p>` };
  }

  const DEST = [
    [/\bmundo( das companhias)?\b|\bmapa\b/, "mundo.html", "o Mundo das companhias"],
    [/documentos( da)? cvm|\bdocumentos\b|\bcvm\b/, "cias.html#docs", "os documentos da CVM"],
    [/\bpessoas\b|\binvestidores\b/, "cias.html#pessoas", "Pessoas e investidores"],
    [/\bcompanhias\b|\bempresas\b/, "cias.html", "Companhias"],
  ];

  // contexto da conversa: a última companhia ou pessoa e a pergunta sobre ela ("e o lucro?", "e o Itaú?")
  let ctx = store.get("fa-ctx", null);
  const INTENT_WORDS = /\bacao\b|\bacoes\b|\bpapel\b|lucr|receit|faturament|ebitda|\bebit\b|margem|divida|alavanc|caixa|patrimon|\broe\b|resultad|balanc|trimestr|\b[1-4] ?t\b|ano passado|esse ano|preco|cotac|subiu|caiu|valor de mercado|multiplo|p ?\/ ?l|funcionari|remunera|ceo|presidente|conselh|diretor|auditor|sede|free float|debentur|titulos|acionist|dono|controla|noticia|fato|document|deal|lead/;
  async function answer(raw) {
    const q = fold(raw).replace(/[?!.,;:"“”'()]/g, " ").replace(/\s+/g, " ").trim();
    if (!q) return null;
    let ent = await spot(q);
    let qq = q;
    const short = q.split(" ").length <= 5;
    if (!ent && ctx && (INTENT_WORDS.test(q) && (/^e\b/.test(q) || short || /\b(dela|dele|desse|dessa|deste|desta|nela|nele)\b/.test(q)))) {
      // "e o lucro?": mesma companhia da pergunta anterior
      ent = await spot(ctx.name);
    } else if (ent && ctx && /^e\b/.test(q) && short && !INTENT_WORDS.test(q) && ctx.intent) {
      // "e o Itaú?": mesma pergunta anterior, outra companhia
      qq = `${ctx.intent} ${q.replace(/^e\s+/, "")}`;
    }
    const r = await answerCore(raw, qq, ent);
    if (ent && r) {
      const name = ent.kind === "cia" ? ent.c.nm : ent.p.n;
      const nameRe = new RegExp(`\\b(${nameTokens(fuzzy(name)).concat(ent.c?.tk ? [fold(ent.c.tk)] : []).join("|")})\\b`, "g");
      const intent = fuzzy(qq).replace(nameRe, " ").replace(/\s+/g, " ").trim();
      ctx = { name, intent: INTENT_WORDS.test(intent) ? intent : ctx?.intent || "" };
      store.set("fa-ctx", ctx);
    }
    return r;
  }

  // formulários oficiais entregues à CVM: DFP, ITR, FRE, FCA (perfil.entregas, montado pelo perfis.py)
  const FORMS = [
    ["FRE", /\bfre\b|formularios? de referencia/, "Formulário de Referência"],
    ["FCA", /\bfca\b|formularios? cadastra/, "Formulário Cadastral"],
    ["ITR", /\bitrs?\b|informac\w* trimestra/, "ITR"],
    ["DFP", /\bdfps?\b|demonstrac\w* financeiras?( padronizadas| anuais| completas| auditadas)?\b|balanco (anual|completo|auditado)/, "DFP"],
  ];
  // link do documento → visualizador da CVM (grupos e quadros navegáveis), não o download
  const cvmView = (u) => { const m = /NumeroSequencialDocumento=(\d+)/.exec(u || ""); return m ? `https://www.rad.cvm.gov.br/ENET/frmGerenciaPaginaFRE.aspx?NumeroSequencialDocumento=${m[1]}&CodigoTipoInstituicao=1` : String(u || "").replace(/^http:/, "https:"); };
  const formOf = (q) => FORMS.find(([, re]) => re.test(q));
  const formPer = (e) => (e.t === "ITR" ? `${((+e.ref.slice(5, 7) - 1) / 3 + 1) | 0}T${e.ref.slice(2, 4)}` : e.ref.slice(0, 4));
  async function answerForm(c, f, q) {
    const [t, , name] = f;
    const prof = await perfil(c.k);
    const all = prof.entregas;
    const docsLink = `<p class="fa-more">${link(ciaHref(c.k, "docs"), "Ver todos os formulários na página da companhia")}</p>`;
    if (!all) return { html: `<p>Os links dos formulários de <b>${esc(c.nm)}</b> entram na próxima atualização diária dos perfis. Enquanto isso, os documentos da CVM estão na aba Documentos.</p>${docsLink}` };
    const list = all.filter((e) => e.t === t);
    if (!list.length) return { html: `<p>Não encontrei ${esc(name)} de <b>${esc(c.nm)}</b> entre as entregas à CVM.</p>${docsLink}` };
    const per = periodsOf(q, prof.fin || {}).list.find((o) => o.kind === "q" || o.kind === "y");
    let e = list[0], miss = "";
    if (per) {
      const want = per.kind === "q" ? (per.last != null ? null : `${per.n}T${String(per.y).slice(2)}`) : String(per.y);
      const hit = want == null ? list[per.last] : list.find((x) => (t === "ITR" && per.kind === "y" ? x.ref.startsWith(want) : formPer(x) === want));
      if (hit) e = hit; else if (want) miss = `<p>Não encontrei ${esc(name)} de ${esc(want)}; o mais recente é este:</p>`;
    }
    const when = e.rec ? `, entregue em ${e.rec.split("-").reverse().join("/")}` : "";
    const others = list.filter((x) => x !== e).slice(0, 4);
    return { html: `${miss}<p><b>${esc(c.nm)}</b> · ${esc(name)} ${esc(formPer(e))}${e.v > 1 ? ` (versão ${esc(e.v)})` : ""}${esc(when)}.</p>
      <p><a href="${esc(cvmView(e.u))}" target="_blank" rel="noopener">Abrir o documento na CVM</a></p>
      ${others.length ? `<p class="fa-note">Outros: ${others.map((x) => `<a href="${esc(cvmView(x.u))}" target="_blank" rel="noopener">${esc(formPer(x))}</a>`).join(" · ")}</p>` : ""}${docsLink}` };
  }
  async function answerCore(raw, q, ent) {
    const has = (re) => re.test(q);
    const today = has(/\bhoje\b|desde ontem|\bagora\b/);
    const wantsNav = has(/\b(me lev[ae]|lev[ae]|abr[ae]|abrir|ir (para|pra|a|ao)|va(i)? (para|pra)|mostr[ae]|quero ver|entr[ae] n[ao])\b/);
    const superl = has(/\b(mais (legal|legais|importante|importantes|interessante|interessantes|relevante|relevantes|quente|quentes)|maior(es)?|principa(l|is)|melhor(es)?|top|destaques?)\b/);

    if (!ent && has(/^(oi|ola|bom dia|boa tarde|boa noite|e ai|opa)\b/) && q.split(" ").length <= 3) return { html: "Oi! Pergunte sobre as notícias e os deals de hoje, resultados e fatos relevantes de uma companhia, quem é dono de quê, ou peça para eu abrir uma página." };
    if (has(/\b(ajuda|o que voce (faz|sabe)|como (funciona|usar|te uso))\b/)) return { html: HELP };

    // acionistas de uma companhia
    if (ent?.kind === "cia" && !wantsNav && has(/acionist|quem (e|sao) (o |os )?donos?|de quem e|composicao acionaria|participacao acionaria|quem tem (acoes|participacao)/)) return answerShareholders(ent.c);
    // estrutura societária: no Mundo
    if (has(/estrutura (societaria|acionaria)|\bestrutura\b|organograma|arvore|quem controla|\bcontrolador/) && ent) {
      if (ent.kind === "cia") return { html: `Abrindo a estrutura societária de <b>${esc(ent.c.nm)}</b> no Mundo das companhias.`, go: treeHref(`k${ent.c.k}`), alt: [[ciaHref(ent.c.k, "acionistas"), "Ver os acionistas na página da companhia"]] };
      return { html: `Abrindo as participações de <b>${esc(ent.p.n)}</b> no Mundo das companhias.`, go: treeHref(ent.p.s), alt: [[personHref(ent.p.s), "Ver o perfil completo"]] };
    }
    // formulários oficiais (FRE, DFP, ITR, FCA)
    const form = formOf(q);
    if (form && ent?.kind === "cia") return answerForm(ent.c, form, q);
    if (form && !ent) return { html: `Me diga de qual companhia: por exemplo, "abre o ${form[0]} do Itaú".` };
    // números: ranking, comparação entre companhias, cotação, dados do perfil, demonstrações
    const fm = metricOf(q), mk = MARKET.find((x) => x.re.test(q)), fact = FACTS.find((x) => x.re.test(q));
    const ranking = has(/\b(maior(es)?|menor(es)?|ranking|top ?\d*|quem (mais|menos)|mais (subiram|cairam|valiosas?|lucrativ[oa]s?)|quais? (as|os)? ?(empresas|bancos|companhias|acoes))\b/);
    if (ranking && (!ent || ent.kind !== "cia" || (ent.many || []).length < 2) && (fm?.id === "ll" || fm?.id === "rec" || has(/valor de mercado|valios|subi|cai|queda|alta|lucrativ|maiores empresas|da bolsa/)) && !(ent?.kind === "cia" && !has(/\b(empresas|bancos|companhias|acoes|setor|bolsa)\b/))) return answerRanking(q);
    if (ent?.kind === "cia" && (ent.many || []).length >= 2 && (fm || has(/compar|melhor|pior|maior|menor|\bmais\b|versus|\bvs\b|\bou\b|\be\b/)) && !wantsNav) return answerFinCompare(ent.many, q);
    if (ent?.kind === "cia" && !wantsNav) {
      if (mk && !fm) return answerMarket1(ent.c, q);
      if (fact && !fm) { const r = await answerFact(ent.c, fact, q); if (r) return r; }
      if (fm) return answerFin(ent.c, q);
    }
    // participações de uma pessoa ou investidor
    if (ent?.kind === "pessoa" && !wantsNav && !has(/noticia|saiu|novidade|imprensa|falando|deals?|leads?/)) return answerHoldings(ent.p);
    // resultado do trimestre
    if (has(/resultad|balanc|\blucro\b|\bprejuizo\b|trimestr|\b[1-4]t(\d{2})?\b|release|\bebitda\b/) && !wantsNav) {
      if (ent?.kind === "cia") {
        const prof = await perfil(ent.c.k);
        const ov = prof.fin?.tri?.length ? await answerFinOverview(ent.c, prof, periodsOf(q, prof.fin).list) : { html: "" };
        const rel = await answerResult(ent.c);
        return { html: ov.html.replace(/<p class="fa-more">[^]*?<\/p>$/, "") + rel.html.replace(/<p><b>[^<]*<\/b>: nenhum release[^]*?<\/p>/, "") };
      }
      if (!ent) return answerAllResults();
    }
    // fatos relevantes e documentos da CVM
    if (has(/fatos? relevantes?|comunicados?|documentos?|\bcvm\b|aviso aos acionistas/) && !wantsNav) {
      if (ent?.kind === "cia") return answerDocs(ent.c, has(/fatos? relevantes?/), today);
      if (!ent) return answerAllFR();
    }
    // abrir páginas
    if (wantsNav || (!ent && DEST.some(([re]) => re.test(q)) && q.split(" ").length <= 4)) {
      if (ent?.kind === "cia") {
        if (has(/\bmundo\b|\bmapa\b/)) return { html: `Abrindo <b>${esc(ent.c.nm)}</b> no Mundo das companhias.`, go: `mundo.html#n/k${ent.c.k}` };
        const pane = PANE_WORDS.find(([re]) => re.test(q));
        return { html: `Abrindo <b>${esc(ent.c.nm)}</b>${pane ? ` · ${pane[2]}` : ""}.`, go: ciaHref(ent.c.k, pane?.[1]) };
      }
      if (ent?.kind === "pessoa") return has(/\bmundo\b|\bmapa\b/) ? { html: `Abrindo <b>${esc(ent.p.n)}</b> no Mundo das companhias.`, go: treeHref(ent.p.s) } : { html: `Abrindo o perfil de <b>${esc(ent.p.n)}</b>.`, go: personHref(ent.p.s) };
      const tab = TABS.find(([re]) => re.test(q));
      const dest = DEST.find(([re]) => re.test(q));
      // "abre o mundo das companhias": o destino vence a aba; "abre os leads": a aba
      if (dest && (!tab || /mundo|mapa|documentos|cvm|pessoas|investidores/.test(q))) return { html: `Abrindo ${esc(dest[2])}.`, go: dest[1] };
      if (tab) return { html: `Abrindo ${esc(tab[2])}.`, go: tabHref(tab[1]) };
      if (dest) return { html: `Abrindo ${esc(dest[2])}.`, go: dest[1] };
    }
    if (has(/\bleads?\b|oportunidades?/)) return answerLeads(ent);
    if (has(/\bdeals?\b|\bm ?& ?a\b|\boperac(ao|oes)\b|\btransac|aquisic(ao|oes)|\bcompras?\b|fus(ao|oes)|\bipos?\b/) && !has(/noticias? (de|do|da|sobre)/)) return answerDeals(ent, superl && has(/\b(mais|o|a)\b.*\b(legal|interessante|importante|relevante|quente|maior|melhor|top)\b/) && !has(/\bdeals\b/));
    if (has(/briefing|resumo do dia|manchete|o que (aconteceu|importa|preciso saber|rolou)/)) return answerBrief();
    if (has(/\b(ibovespa|ibov|dolar|cotac|cambio|juros futuros|petroleo|brent)\b|como (esta|fechou|ta) (o |a )?(mercado|bolsa)/) && !ent) return answerMarket();
    if (ent) {
      if (has(/noticia|saiu|novidade|aconteceu|falando|imprensa/)) return answerNewsAbout(ent.kind === "cia" ? ent.c.nm : ent.p.n, ent);
      return answerCard(ent);
    }
    if (has(/noticias?|manchetes?|destaques?/) || superl) return answerTopNews();
    // termo livre: procura nas notícias de hoje
    const phrase = entityPhrase(raw);
    if (phrase.length >= 3) {
      const r = await answerNewsAbout(phrase, null);
      if (!/^Nada sobre/.test(r.html)) return r;
    }
    return { html: `<p>Não entendi essa. Tente de outro jeito, ou um destes exemplos:</p>${HELP.replace(/^<p>.*?<\/p>/, "")}` };
  }

  const HELP = `<p>Posso ajudar com:</p><ul class="fa-list fa-bullets">
    <li>“Quais as notícias mais importantes?” ou “o briefing de hoje”</li>
    <li>“Principais deals de hoje” e “leads em aberto”</li>
    <li>“Saiu fato relevante do Itaú hoje?”</li>
    <li>“Notícias da Vale” e “resultado do Itaú”</li>
    <li>“Me leve para a Petrobras” ou “abre os acionistas da Vale”</li>
    <li>“Estrutura societária do Alfredo Villela” ou “quantas empresas a BlackRock tem?”</li>
    <li>“Resultado do Itaú”, “lucro da Petrobras no 2T contra o 1T”, “receita do Bradesco esse ano contra o ano passado”</li>
    <li>“Itaú ou Bradesco, quem lucra mais?”, “maiores lucros entre os bancos”, “ações que mais subiram em 12 meses”</li>
    <li>“Quanto está a ação da Vale?”, “P/L da Petrobras”, “quantos funcionários tem a Ambev?”, “quem é o CEO da Vale?”</li>
    <li>Depois de perguntar de uma companhia: “e o lucro?” ou “e o Itaú?”</li></ul>`;
  const SUGGEST = ["Notícias mais importantes", "Principais deals de hoje", "Resultado do Itaú", "Lucro da Petrobras em 2025 contra 2024", "Maiores lucros entre os bancos", "Quanto está a ação da Vale?"];
  const SUGGEST_OLD = ["Notícias mais importantes", "Principais deals de hoje", "Saiu fato relevante do Itaú hoje?", "Me leve para a Petrobras", "Estrutura societária do Alfredo Villela"];

  // ---------------------------------------------------------------- interface
  const ICON_CHAT = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5c4.97 0 9 3.36 9 7.5s-4.03 7.5-9 7.5c-.9 0-1.77-.11-2.6-.32L5 19.8l1.06-3.3C4.17 15.1 3 13.16 3 11c0-4.14 4.03-7.5 9-7.5Z" fill="currentColor"/><path d="m12 7.6.78 1.9 1.92.75-1.92.75L12 12.9l-.78-1.9-1.92-.75 1.92-.75Z" fill="var(--fa-fab-ink, #fff)"/></svg>`;
  const ICON_X = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
  const ICON_BIG = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M10 20H4v-6M20 4l-6.5 6.5M4 20l6.5-6.5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const ICON_SMALL = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10h-6V4M4 14h6v6M14 10l6.5-6.5M10 14l-6.5 6.5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const ICON_SEND = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const root = document.createElement("div");
  root.className = `fa fa-${PAGE}`;
  root.innerHTML = `
    <button class="fa-fab" type="button" aria-label="Abrir o assistente" aria-expanded="false" aria-controls="fa-panel">${ICON_CHAT}</button>
    <section class="fa-panel" id="fa-panel" role="dialog" aria-label="Assistente do portal" hidden>
      <header class="fa-head">
        <div class="fa-title"><b>Assistente</b><small>Notícias, deals, companhias e pessoas</small></div>
        <button class="fa-big fa-hbtn" type="button" aria-label="Ampliar" title="Ampliar">${ICON_BIG}</button>
        <button class="fa-close fa-hbtn" type="button" aria-label="Fechar" title="Fechar">${ICON_X}</button>
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
    applyGeom();
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

  // ---------------------------------------------------------------- tamanho e posição (no computador)
  // O painel pode ser arrastado pela barra de cima, ampliado pelo botão (ou duplo clique na barra) e redimensionado pelo
  // canto de baixo à direita. Fica guardado neste navegador. No celular ele é uma folha de baixo; ampliar ocupa a tela toda.
  const geomStore = {
    get() { try { return JSON.parse(localStorage.getItem("fa-geom") || "{}"); } catch { return {}; } },
    set(v) { try { localStorage.setItem("fa-geom", JSON.stringify(v)); } catch { /* sem armazenamento: só não lembra */ } },
  };
  let geom = geomStore.get();
  const bigBtn = $(".fa-big");
  const BIG = () => ({ w: Math.min(820, innerWidth - 48), h: Math.min(Math.round(innerHeight * .86), 960) });
  const SMALL = { w: 400, h: 600 };
  function clamp() {
    const r = panel.getBoundingClientRect();
    const x = Math.min(Math.max(8, r.left), Math.max(8, innerWidth - r.width - 8));
    const y = Math.min(Math.max(8, r.top), Math.max(8, innerHeight - r.height - 8));
    panel.style.left = `${x}px`; panel.style.top = `${y}px`;
    return { x, y };
  }
  function setBigUi() {
    bigBtn.innerHTML = geom.big ? ICON_SMALL : ICON_BIG;
    bigBtn.setAttribute("aria-label", geom.big ? "Reduzir" : "Ampliar");
    bigBtn.title = geom.big ? "Reduzir" : "Ampliar";
    root.classList.toggle("fa-is-big", !!geom.big);
  }
  function applyGeom() {
    setBigUi();
    if (narrow()) { for (const k of ["left", "top", "width", "height", "right", "bottom"]) panel.style[k] = ""; return; }
    const size = geom.big ? BIG() : { w: geom.w || SMALL.w, h: geom.h || SMALL.h };
    panel.style.width = `${Math.min(size.w, innerWidth - 16)}px`;
    panel.style.height = `${Math.min(size.h, innerHeight - 16)}px`;
    if (geom.x != null && geom.y != null) {
      panel.classList.add("fa-free");
      panel.style.left = `${geom.x}px`; panel.style.top = `${geom.y}px`;
      clamp();
    } else if (geom.big) {
      // ampliado sem posição escolhida: centralizado
      panel.classList.add("fa-free");
      const r = panel.getBoundingClientRect();
      panel.style.left = `${(innerWidth - r.width) / 2}px`; panel.style.top = `${(innerHeight - r.height) / 2}px`;
    } else {
      panel.classList.remove("fa-free");
      panel.style.left = panel.style.top = "";
    }
  }
  function toggleBig() {
    if (narrow()) { geom.big = !geom.big; setBigUi(); return; }
    const r = panel.getBoundingClientRect();
    geom.big = !geom.big;
    // amplia a partir do centro do painel, sem sair da tela
    const size = geom.big ? BIG() : { w: geom.w || SMALL.w, h: geom.h || SMALL.h };
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    geom.x = Math.round(cx - Math.min(size.w, innerWidth - 16) / 2);
    geom.y = Math.round(cy - Math.min(size.h, innerHeight - 16) / 2);
    applyGeom();
    Object.assign(geom, clamp());
    geomStore.set(geom);
  }
  bigBtn.addEventListener("click", toggleBig);
  const head = $(".fa-head");
  head.addEventListener("dblclick", (e) => { if (!e.target.closest("button")) toggleBig(); });
  let drag = null;
  head.addEventListener("pointerdown", (e) => {
    if (narrow() || e.button !== 0 || e.target.closest("button")) return;
    const r = panel.getBoundingClientRect();
    drag = { dx: e.clientX - r.left, dy: e.clientY - r.top, id: e.pointerId };
    head.setPointerCapture(e.pointerId);
    panel.classList.add("fa-free", "fa-dragging");
    panel.style.left = `${r.left}px`; panel.style.top = `${r.top}px`;
    e.preventDefault();
  });
  head.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const r = panel.getBoundingClientRect();
    panel.style.left = `${Math.min(Math.max(8 - r.width + 120, e.clientX - drag.dx), innerWidth - 120)}px`;
    panel.style.top = `${Math.min(Math.max(8, e.clientY - drag.dy), innerHeight - 60)}px`;
  });
  const endDrag = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    drag = null;
    panel.classList.remove("fa-dragging");
    Object.assign(geom, clamp());
    geomStore.set(geom);
  };
  head.addEventListener("pointerup", endDrag);
  head.addEventListener("pointercancel", endDrag);
  // tamanho escolhido pelo canto de redimensionar
  let resizing = null;
  new ResizeObserver(() => {
    if (panel.hidden || narrow() || drag) return;
    clearTimeout(resizing);
    resizing = setTimeout(() => {
      const r = panel.getBoundingClientRect();
      const big = BIG();
      // tamanho mudado à mão: deixa de ser o "ampliado" fixo e passa a ser o tamanho preferido
      if (geom.big && (Math.abs(r.width - Math.min(big.w, innerWidth - 16)) > 4 || Math.abs(r.height - Math.min(big.h, innerHeight - 16)) > 4)) geom.big = false;
      if (!geom.big) { geom.w = Math.round(r.width); geom.h = Math.round(r.height); }
      if (panel.classList.contains("fa-free")) Object.assign(geom, clamp());
      setBigUi();
      geomStore.set(geom);
    }, 250);
  }).observe(panel);
  addEventListener("resize", () => { if (!panel.hidden) applyGeom(); });

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
