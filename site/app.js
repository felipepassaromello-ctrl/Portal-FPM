/* Portal N1 — frontend. Lê data/digest.json (gerado pelo GitHub Actions) e se atualiza sozinho. */
(() => {
  "use strict";

  const REFRESH_MS = 5 * 60 * 1000;
  const CAT_ORDER = ["mna", "mercados", "macro", "politica", "internacional", "empresas", "tech", "outros"];
  const TABS = [
    { id: "brief", label: "Briefing" },
    { id: "feed", label: "Todas as notícias" },
    { id: "deals", label: "Deals" },
    { id: "sources", label: "Fontes" },
  ];

  // ---------------------------------------------------------- estado local (por navegador)
  const store = {
    get(k, d) { try { const v = localStorage.getItem("n1:" + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("n1:" + k, JSON.stringify(v)); } catch { /* modo privado */ } },
  };
  const state = {
    digest: null,
    edition: null, // null = edição atual; senão "YYYY-MM-DD"
    tab: store.get("tab", "brief"),
    cat: "",
    read: new Set(store.get("read", [])),
    saved: new Set(store.get("saved", [])),
    open: new Set(),
    prefs: store.get("prefs", { boost: [], mute: [], catWeight: {}, notify: false }),
    focus: -1,
    seenIds: null,
  };
  const persist = () => {
    store.set("read", [...state.read].slice(-3000));
    store.set("saved", [...state.saved].slice(-1000));
  };

  // ---------------------------------------------------------- utilidades
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => (/^https?:\/\//i.test(u || "") ? esc(u) : "#");
  const fold = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const catName = (c) => (state.digest?.categories || {})[c] || c;
  const catVar = (c) => `--cat: var(--c-${CAT_ORDER.includes(c) ? c : "outros"})`;
  const impClass = (n) => (n >= 9 ? "i-hot" : n >= 7 ? "i-warm" : n >= 5 ? "i-mild" : "");
  const fmtNum = (n, d = 2) => Number(n).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });

  function ago(iso) {
    const diff = (Date.now() - new Date(iso).getTime()) / 60000;
    if (diff < 1) return "agora";
    if (diff < 60) return `há ${Math.round(diff)} min`;
    if (diff < 60 * 24) return `há ${Math.round(diff / 60)} h`;
    return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
  }

  function toast(msg, onClick) {
    const t = $("#toast");
    t.textContent = msg;
    t.hidden = false;
    t.onclick = () => { t.hidden = true; onClick && onClick(); };
    clearTimeout(toast._t);
    toast._t = setTimeout(() => (t.hidden = true), 9000);
  }

  // ---------------------------------------------------------- relevância personalizada
  function relevance(it) {
    let s = it.importance * 10;
    const text = fold(`${it.headline} ${it.title} ${it.summary} ${(it.entities || []).join(" ")} ${(it.tags || []).join(" ")}`);
    for (const t of state.prefs.boost) if (t && text.includes(fold(t))) s += 15;
    const w = state.prefs.catWeight[it.category];
    if (w != null) s *= w;
    s += Math.min(it.outlets.length - 1, 4) * 2;
    const ageH = (Date.now() - new Date(it.published).getTime()) / 3.6e6;
    s -= Math.max(0, ageH - 12) * 0.4;
    return s;
  }
  const muted = (it) => state.prefs.mute.some((t) => t && fold(`${it.headline} ${it.title}`).includes(fold(t)));

  // ---------------------------------------------------------- carregamento
  async function fetchJSON(url) {
    const r = await fetch(`${url}?t=${Date.now()}`, { cache: "no-store" });
    if (!r.ok) throw new Error(`${r.status} ${url}`);
    return r.json();
  }

  async function load({ silent = false } = {}) {
    const url = state.edition ? `data/archive/${state.edition}.json` : "data/digest.json";
    try {
      const d = await fetchJSON(url);
      const isNew = !state.digest || d.generated_at !== state.digest.generated_at;
      if (!isNew && silent) return;
      if (silent && !state.edition && state.seenIds) {
        const fresh = d.items.filter((i) => !state.seenIds.has(i.id));
        const hot = fresh.filter((i) => i.importance >= 8);
        if (fresh.length) toast(`${fresh.length} novas notícias${hot.length ? ` · ${hot.length} importantes` : ""} — clique para ver`, () => setTab("feed"));
        if (hot.length && state.prefs.notify && "Notification" in window && Notification.permission === "granted") {
          new Notification("Portal N1", { body: hot[0].headline });
        }
      }
      state.digest = d;
      if (!state.edition) state.seenIds = new Set(d.items.map((i) => i.id));
      render();
    } catch (e) {
      if (!silent) {
        const b = $("#banner");
        b.innerHTML = `Ainda não há edição publicada. Rode o workflow <b>Atualizar portal</b> no GitHub Actions ou <code>python scripts/build_digest.py</code> localmente. <span class="small muted">(${esc(e.message)})</span>`;
        b.hidden = false;
      }
    }
  }

  async function loadArchiveIndex() {
    const sel = $("#archive");
    try {
      const days = await fetchJSON("data/archive/index.json");
      sel.innerHTML = `<option value="">Edição de hoje</option>` + days.slice(1).map((d) =>
        `<option value="${esc(d)}">${new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" })}</option>`).join("");
    } catch { sel.hidden = true; }
  }

  // ---------------------------------------------------------- render
  function render() {
    const d = state.digest;
    if (!d) return;
    const gen = new Date(d.generated_at);
    const dl = gen.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    $("#dateline").textContent = dl.charAt(0).toUpperCase() + dl.slice(1);
    updateStatus();
    $("#footer-gen").textContent = `${d.stats.unique} notícias únicas de ${d.stats.raw} matérias · ${d.stats.sources_ok}/${d.stats.sources_total} fontes · ${d.mode === "ai" ? "análise por IA" : "modo sem IA"}`;

    const banner = $("#banner");
    const msgs = [];
    if (d.demo) msgs.push("<b>Dados de exemplo.</b> As notícias abaixo são fictícias e servem só para mostrar o layout. A primeira execução do GitHub Actions substitui tudo por notícias reais.");
    if (d.mode !== "ai" && !d.demo) msgs.push("<b>Modo sem IA:</b> resumos, interpretação e notas vêm de heurística. Adicione o segredo <code>ANTHROPIC_API_KEY</code> no repositório para ativar a análise completa.");
    if (state.edition) msgs.push(`Você está vendo a edição de <b>${esc(state.edition)}</b>. <a href="#" id="back-today">Voltar para hoje</a>`);
    banner.innerHTML = msgs.join("<br>");
    banner.hidden = !msgs.length;
    const back = $("#back-today");
    if (back) back.onclick = (e) => { e.preventDefault(); $("#archive").value = ""; state.edition = null; load(); };

    renderTabs();
    renderTicker();
    renderBrief();
    renderFeed();
    renderDeals();
    renderSources();
  }

  function updateStatus() {
    const d = state.digest;
    if (!d) return;
    const el = $("#status");
    const ageMin = (Date.now() - new Date(d.generated_at).getTime()) / 60000;
    el.textContent = `atualizado ${ago(d.generated_at)}`;
    el.classList.toggle("stale", ageMin > 180);
  }

  function renderTabs() {
    const d = state.digest;
    const counts = { feed: d.items.length, deals: d.deals.length };
    $("#tabs").innerHTML = TABS.map((t) =>
      `<button class="tab" role="tab" data-tab="${t.id}" aria-selected="${state.tab === t.id}">${t.label}${counts[t.id] != null ? `<span class="count">${counts[t.id]}</span>` : ""}</button>`).join("");
    for (const t of TABS) $(`#view-${t.id}`).hidden = state.tab !== t.id;
  }

  function setTab(id) {
    state.tab = id;
    store.set("tab", id);
    state.focus = -1;
    renderTabs();
    window.scrollTo({ top: 0 });
  }

  function spark(values, up) {
    if (!values || values.length < 2) return "";
    const min = Math.min(...values), max = Math.max(...values), r = max - min || 1;
    const pts = values.map((v, i) => `${(i / (values.length - 1)) * 44},${14 - ((v - min) / r) * 12 - 1}`).join(" ");
    return `<svg viewBox="0 0 44 14" aria-hidden="true"><polyline fill="none" stroke="${up ? "#4cc38a" : "#ef6a5b"}" stroke-width="1.4" points="${pts}"/></svg>`;
  }

  function renderTicker() {
    const m = state.digest.market || [];
    const el = $("#ticker");
    el.hidden = !m.length;
    el.innerHTML = m.map((q) => {
      const up = q.change_pct >= 0;
      const dec = q.unit === "R$" ? 4 : q.price > 1000 ? 0 : 2;
      return `<span class="tick"><b>${esc(q.name)}</b>${fmtNum(q.price, dec)}<span class="${up ? "up" : "down"}">${up ? "▲" : "▼"} ${fmtNum(Math.abs(q.change_pct))}%</span>${spark(q.spark, up)}</span>`;
    }).join("");
  }

  function renderBrief() {
    const d = state.digest, b = d.brief || {};
    const byId = Object.fromEntries(d.items.map((i) => [i.id, i]));
    $("#brief-headline").textContent = b.headline || "";
    $("#brief-mood").textContent = b.mood || "";
    const mins = Math.max(2, Math.round(((b.tldr || []).join(" ").length + (b.sections || []).map((s) => s.text).join(" ").length) / 1100));
    $("#brief-meta").textContent = `leitura de ${mins} min · ${new Date(d.generated_at).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`;
    $("#brief-tldr").innerHTML = (b.tldr || []).map((t) => `<li>${esc(t)}</li>`).join("");
    const list = (sel, arr) => { $(sel).innerHTML = (arr || []).map((t) => `<li>${esc(t)}</li>`).join(""); $(sel).closest(".side-block").hidden = !(arr || []).length; };
    list("#brief-watch", b.watchlist);
    list("#brief-conn", b.connections);
    $("#brief-qotd").textContent = b.question_of_the_day || "";
    $("#qotd-wrap").hidden = !b.question_of_the_day;

    const secs = [...(b.sections || [])].sort((a, z) => CAT_ORDER.indexOf(a.category) - CAT_ORDER.indexOf(z.category));
    $("#brief-sections").innerHTML = secs.map((s) => `
      <div class="bsec" style="${catVar(s.category)}">
        <h4>${esc(catName(s.category))}</h4>
        <p>${esc(s.text)}</p>
        <div class="refs">${(s.item_ids || []).filter((id) => byId[id]).map((id) =>
          `<button class="ref" data-jump="${id}" title="${esc(byId[id].headline)}">${esc(byId[id].outlets[0].source)}</button>`).join("")}</div>
      </div>`).join("");

    const top = d.items.filter((i) => !muted(i)).sort((a, z) => relevance(z) - relevance(a)).slice(0, 8);
    $("#top-list").innerHTML = top.map(cardHTML).join("");

    // mapa do dia: volume por editoria + quantas são importantes
    const cats = {};
    for (const i of d.items) {
      const c = (cats[i.category] ||= { n: 0, hot: 0, sum: 0 });
      c.n++; c.sum += i.importance; if (i.importance >= 7) c.hot++;
    }
    const maxN = Math.max(1, ...Object.values(cats).map((c) => c.n));
    $("#map").innerHTML = CAT_ORDER.filter((c) => cats[c]).map((c) => {
      const x = cats[c];
      return `<div class="map-row" data-cat="${c}" style="${catVar(c)}" title="${x.hot} com nota ≥ 7 · média ${fmtNum(x.sum / x.n, 1)}">
        <span>${esc(catName(c))}</span>
        <span class="bar"><span class="bar-fill" style="width:${(x.hot / maxN) * 100}%">${x.hot || ""}</span><span class="bar-hot" style="width:${((x.n - x.hot) / maxN) * 100}%"></span></span>
        <span class="muted small">${x.n}</span></div>`;
    }).join("") + `<div class="map-legend">Barra cheia = notícias com nota ≥ 7 · clara = demais · clique para filtrar</div>`;

    const ent = {};
    for (const i of d.items) for (const e of i.entities || []) ent[e] = (ent[e] || 0) + i.importance;
    $("#entities").innerHTML = Object.entries(ent).sort((a, z) => z[1] - a[1]).slice(0, 24)
      .map(([e]) => `<button class="chip" data-search="${esc(e)}">${esc(e)}</button>`).join("") || `<span class="muted small">Disponível com a análise por IA.</span>`;
  }

  function cardHTML(it) {
    const open = state.open.has(it.id);
    const sources = [...new Set(it.outlets.map((o) => o.source))];
    const time = new Date(it.published).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const blk = (title, text, cls = "") => (text ? `<div class="blk ${cls}"><h5>${title}</h5><p>${esc(text)}</p></div>` : "");
    const deal = it.deal ? `<div class="blk full"><h5>Deal</h5><p>${esc([it.deal.type, it.deal.buyer && `${it.deal.buyer} → ${it.deal.target}`, it.deal.value, it.deal.stage, it.deal.sector, it.deal.advisors && it.deal.advisors !== "não divulgado" ? `Assessores: ${it.deal.advisors}` : ""].filter(Boolean).join(" · "))}</p></div>` : "";
    return `
    <article class="card ${state.read.has(it.id) ? "read" : ""}" data-id="${it.id}" style="${catVar(it.category)}">
      <div class="card-top">
        <span class="imp ${impClass(it.importance)}" title="${esc(it.importance_reason)}">${it.importance}</span>
        <div class="card-main">
          <h3 data-toggle="${it.id}">${esc(it.headline)}</h3>
          <div class="meta">
            <span class="cat-tag">${esc(catName(it.category))}</span>
            ${it.is_deal ? `<span class="deal-tag">deal</span>` : ""}
            <span>${esc(sources[0])}</span>
            ${sources.length > 1 ? `<span class="multi" title="${esc(sources.join(", "))}">+${sources.length - 1} veículos</span>` : ""}
            <span>${time} · ${ago(it.published)}</span>
            ${it.sentiment && it.sentiment !== "neutro" ? `<span class="sent-${esc(it.sentiment)}">${esc(it.sentiment)}</span>` : ""}
          </div>
          ${it.summary ? `<p class="card-summary">${esc(it.summary)}</p>` : ""}
          ${open ? `<div class="detail">
            ${blk("O que envolve", it.involves)}
            ${blk("Como interpretar", it.interpretation)}
            ${blk("Impacto", it.impact)}
            ${blk("Por que essa nota", it.importance_reason)}
            ${deal}
            <div class="blk full"><h5>Leia nos veículos</h5><div class="outlets">${it.outlets.map((o) => `<a href="${safeUrl(o.link)}" target="_blank" rel="noopener" data-readlink="${it.id}">${esc(o.source)} ↗</a>`).join("")}</div></div>
          </div>` : ""}
        </div>
        <div class="card-actions">
          <button class="ibtn" data-expand="${it.id}" title="Análise completa (Enter)">${open ? "−" : "+"}</button>
          <button class="ibtn ${state.saved.has(it.id) ? "on" : ""}" data-save="${it.id}" title="Salvar (s)">${state.saved.has(it.id) ? "★" : "☆"}</button>
          <button class="ibtn" data-read="${it.id}" title="Marcar como lida (m)">${state.read.has(it.id) ? "●" : "○"}</button>
        </div>
      </div>
    </article>`;
  }

  function filtered() {
    const d = state.digest;
    const q = fold($("#q").value.trim());
    const minImp = +$("#minimp").value;
    const region = $("#region").value;
    const onlyUnread = $("#unread").checked;
    const onlySaved = $("#saved").checked;
    let items = d.items.filter((i) =>
      i.importance >= minImp &&
      (!state.cat || i.category === state.cat) &&
      (!region || i.region === region) &&
      (!onlyUnread || !state.read.has(i.id)) &&
      (!onlySaved || state.saved.has(i.id)) &&
      !muted(i) &&
      (!q || fold(`${i.headline} ${i.title} ${i.summary} ${i.involves} ${(i.entities || []).join(" ")} ${(i.tags || []).join(" ")} ${i.outlets.map((o) => o.source).join(" ")}`).includes(q)));
    const sort = $("#sort").value;
    if (sort === "rel") items.sort((a, z) => relevance(z) - relevance(a));
    else if (sort === "new") items.sort((a, z) => z.published.localeCompare(a.published));
    else items.sort((a, z) => z.importance - a.importance || z.published.localeCompare(a.published));
    return items;
  }

  function renderFeed() {
    const d = state.digest;
    const counts = {};
    for (const i of d.items) counts[i.category] = (counts[i.category] || 0) + 1;
    $("#cat-chips").innerHTML = `<button class="chip" data-cat="" aria-pressed="${!state.cat}">Todas<span class="n">${d.items.length}</span></button>` +
      CAT_ORDER.filter((c) => counts[c]).map((c) => `<button class="chip" data-cat="${c}" aria-pressed="${state.cat === c}">${esc(catName(c))}<span class="n">${counts[c]}</span></button>`).join("");
    const items = filtered();
    const unread = items.filter((i) => !state.read.has(i.id)).length;
    $("#feed-count").textContent = `${items.length} notícias · ${unread} não lidas`;
    $("#feed").innerHTML = items.map(cardHTML).join("") || `<div class="empty">Nada com esses filtros.</div>`;
    if (state.focus >= 0) highlightFocus();
  }

  function renderDeals() {
    const deals = [...state.digest.deals].sort((a, z) => z.importance - a.importance);
    $("#deals-count").textContent = `${deals.length} transações identificadas`;
    $("#deals-body").innerHTML = deals.map((i) => {
      const x = i.deal || {};
      return `<tr>
        <td><span class="imp ${impClass(i.importance)}">${i.importance}</span></td>
        <td>${esc(x.type)}</td><td>${esc(x.buyer)}</td><td>${esc(x.target)}</td>
        <td>${esc(x.value)}</td><td><span class="stage">${esc(x.stage)}</span></td><td>${esc(x.sector)}</td>
        <td><a href="#" data-jump="${i.id}">${esc(i.outlets[0].source)}</a></td></tr>`;
    }).join("") || `<tr><td colspan="8" class="muted">Nenhum deal identificado nesta edição${state.digest.mode !== "ai" ? " (requer análise por IA)" : ""}.</td></tr>`;
  }

  function renderSources() {
    const s = state.digest.sources || [];
    $("#sources-stats").textContent = `${s.filter((x) => x.ok).length} de ${s.length} responderam · ${state.digest.stats.seconds}s`;
    $("#sources").innerHTML = s.map((x) => `<div class="src" title="${esc(x.error || "")}"><span>${esc(x.name)} <span class="muted small">${esc(x.id)}</span></span><span class="${x.ok ? "ok" : "bad"}">${x.ok ? x.count : "falhou"}</span></div>`).join("");
  }

  // ---------------------------------------------------------- ações
  function toggle(set, id) { set.has(id) ? set.delete(id) : set.add(id); persist(); }
  function rerenderLists() { renderBrief(); renderFeed(); }

  function jumpTo(id) {
    setTab("feed");
    state.cat = ""; $("#q").value = ""; $("#minimp").value = 1; $("#minimp-val").textContent = 1;
    $("#region").value = ""; $("#unread").checked = false; $("#saved").checked = false;
    state.open.add(id);
    renderFeed();
    const el = document.querySelector(`#feed .card[data-id="${id}"]`);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "center" }); el.classList.add("focus"); setTimeout(() => el.classList.remove("focus"), 1600); }
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-tab],[data-toggle],[data-expand],[data-save],[data-read],[data-cat],[data-jump],[data-search],[data-goto],[data-readlink]");
    if (!t) return;
    const ds = t.dataset;
    if (ds.tab) return setTab(ds.tab);
    if (ds.goto) return setTab(ds.goto);
    if (ds.readlink) { state.read.add(ds.readlink); persist(); return; }
    if (ds.toggle || ds.expand) {
      const id = ds.toggle || ds.expand;
      toggle(state.open, id);
      state.read.add(id); persist();
      return rerenderLists();
    }
    if (ds.save) { toggle(state.saved, ds.save); return rerenderLists(); }
    if (ds.read) { toggle(state.read, ds.read); return rerenderLists(); }
    if (ds.jump) { e.preventDefault(); return jumpTo(ds.jump); }
    if (ds.search) { setTab("feed"); $("#q").value = ds.search; state.cat = ""; return renderFeed(); }
    if (ds.cat !== undefined) {
      if (t.classList.contains("map-row")) setTab("feed");
      state.cat = state.cat === ds.cat ? "" : ds.cat;
      return renderFeed();
    }
  });

  for (const id of ["q", "region", "sort", "unread", "saved"]) $("#" + id).addEventListener("input", () => { state.focus = -1; renderFeed(); });
  $("#minimp").addEventListener("input", (e) => { $("#minimp-val").textContent = e.target.value; renderFeed(); });
  $("#btn-refresh").onclick = () => load().then(() => toast("Atualizado"));
  $("#archive").onchange = (e) => { state.edition = e.target.value || null; state.open.clear(); load(); };

  // tema
  const applyTheme = (t) => { if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; };
  applyTheme(store.get("theme", null));
  $("#btn-theme").onclick = () => {
    const dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    applyTheme(next); store.set("theme", next);
  };

  // personalização
  const dlg = $("#prefs");
  $("#btn-prefs").onclick = () => {
    const p = state.prefs;
    $("#pref-boost").value = p.boost.join("\n");
    $("#pref-mute").value = p.mute.join("\n");
    $("#pref-notify").checked = !!p.notify;
    $("#pref-cats").innerHTML = CAT_ORDER.map((c) => `<label>${esc(catName(c))}<input type="range" min="0" max="2" step="0.25" data-cw="${c}" value="${p.catWeight[c] ?? 1}"></label>`).join("");
    dlg.showModal();
  };
  $("#pref-save").onclick = () => {
    const lines = (s) => s.split("\n").map((x) => x.trim()).filter(Boolean);
    const catWeight = {};
    dlg.querySelectorAll("[data-cw]").forEach((el) => { if (+el.value !== 1) catWeight[el.dataset.cw] = +el.value; });
    state.prefs = { boost: lines($("#pref-boost").value), mute: lines($("#pref-mute").value), catWeight, notify: $("#pref-notify").checked };
    store.set("prefs", state.prefs);
    if (state.prefs.notify && "Notification" in window && Notification.permission === "default") Notification.requestPermission();
    rerenderLists();
  };

  // atalhos de teclado
  function feedCards() { return [...document.querySelectorAll("#feed .card")]; }
  function highlightFocus() {
    const cards = feedCards();
    cards.forEach((c, i) => c.classList.toggle("focus", i === state.focus));
    cards[state.focus]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea, select") || e.metaKey || e.ctrlKey || e.altKey || dlg.open) {
      if (e.key === "Escape" && e.target.id === "q") e.target.blur();
      return;
    }
    const k = e.key;
    if (k >= "1" && k <= "4") return setTab(TABS[+k - 1].id);
    if (k === "/") { e.preventDefault(); setTab("feed"); $("#q").focus(); return; }
    if (k === "r") return load().then(() => toast("Atualizado"));
    if (state.tab !== "feed") return;
    const cards = feedCards();
    if (!cards.length) return;
    if (k === "j" || k === "k") {
      state.focus = Math.max(0, Math.min(cards.length - 1, state.focus + (k === "j" ? 1 : -1)));
      return highlightFocus();
    }
    const id = cards[state.focus]?.dataset.id;
    if (!id) return;
    const item = state.digest.items.find((i) => i.id === id);
    if (k === "Enter") { toggle(state.open, id); state.read.add(id); persist(); renderFeed(); }
    else if (k === "o") { state.read.add(id); persist(); if (/^https?:\/\//i.test(item.link)) window.open(item.link, "_blank", "noopener"); renderFeed(); }
    else if (k === "m") { toggle(state.read, id); renderFeed(); }
    else if (k === "s") { toggle(state.saved, id); renderFeed(); }
  });

  // auto-atualização
  setInterval(() => { if (!state.edition) load({ silent: true }); }, REFRESH_MS);
  setInterval(updateStatus, 60 * 1000);
  document.addEventListener("visibilitychange", () => { if (!document.hidden && !state.edition) load({ silent: true }); });

  loadArchiveIndex();
  load();
})();
