/* Portal FPM — frontend. Lê data/digest.json (gerado pelo GitHub Actions) e se atualiza sozinho. */
(() => {
  "use strict";

  const REFRESH_MS = 5 * 60 * 1000;
  const CAT_ORDER = ["mna", "mercados", "macro", "politica", "internacional", "empresas", "tech", "outros"];
  // group = seção da barra lateral; short = rótulo da barra de abas no celular (só as que aparecem nela)
  const TABS = [
    { id: "brief", label: "Briefing", group: "Hoje", icon: "brief", short: "Briefing" },
    { id: "feed", label: "Notícias", group: "Hoje", icon: "feed", short: "Notícias" },
    { id: "deals", label: "Deals do dia", group: "Deals", icon: "deals", short: "Deals" },
    { id: "leads", label: "Leads", group: "Deals", icon: "leads", short: "Leads" },
    { id: "base", label: "Base de deals", group: "Deals", icon: "base" },
    { id: "ofertas", label: "Ofertas públicas", group: "Deals", icon: "ofertas" },
    { id: "agenda", label: "Agenda", group: "Hoje", icon: "agenda" },
    { id: "official", label: "Oficiais", group: "Fontes", icon: "official" },
    { id: "later", label: "Desde as 8h", group: "Hoje", icon: "later" },
    { id: "sources", label: "Fontes", group: "Fontes", icon: "sources" },
  ];
  const NAV_ORDER = ["brief", "feed", "later", "agenda", "deals", "leads", "ofertas", "base", "official", "sources"];
  const icon = (name, cls = "ic") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

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

  const fmtDay = (d) => (d ? `${d.slice(8, 10)}/${d.slice(5, 7)}` : "");

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
        const fresh = [...d.items, ...(d.upcoming || [])].filter((i) => !state.seenIds.has(i.id));
        const hot = fresh.filter((i) => i.importance >= 8);
        if (fresh.length) toast(`${fresh.length} novas notícias desde as 8h${hot.length ? ` · ${hot.length} importantes` : ""}. Clique para ver`, () => setTab("later"));
        if (hot.length && state.prefs.notify && "Notification" in window && Notification.permission === "granted") {
          new Notification("Portal FPM", { body: hot[0].headline });
        }
      }
      state.digest = d;
      if (!state.edition) state.seenIds = new Set([...d.items, ...(d.upcoming || [])].map((i) => i.id));
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
      state.archiveDays = days;
      sel.innerHTML = `<option value="">Edição de hoje</option>` + days.slice(1).map((d) =>
        `<option value="${esc(d)}">${new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" })}</option>`).join("");
    } catch { sel.hidden = true; }
  }

  // ---------------------------------------------------------- render
  function render() {
    const d = state.digest;
    if (!d) return;
    const edDate = d.date ? new Date(d.date + "T12:00:00") : new Date(d.generated_at);
    const dl = edDate.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    let windowTxt = "";
    if (d.window) {
      const f = (iso) => new Date(iso).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }).replace(",", " às");
      windowTxt = ` · notícias de ${f(d.window.start)} a ${f(d.window.end)}`;
    }
    $("#dateline").textContent = dl.charAt(0).toUpperCase() + dl.slice(1) + windowTxt;
    document.body.classList.remove("loading");
    updateStatus();
    $("#footer-gen").textContent = `${d.stats.unique} notícias únicas de ${d.stats.raw} matérias · ${d.stats.sources_ok}/${d.stats.sources_total} fontes · ${d.mode === "ai" ? "análise por IA" : "modo sem IA"}`;

    const banner = $("#banner");
    const msgs = [];
    if (d.demo) msgs.push("<b>Dados de exemplo.</b> As notícias abaixo são fictícias e servem só para mostrar o layout. A primeira execução do GitHub Actions substitui tudo por notícias reais.");
    if (d.mode !== "ai" && !d.demo) msgs.push("<b>Análise do dia ainda não rodou:</b> por enquanto as notas vêm de palavras-chave. A rotina do Claude publica resumos, interpretação e o briefing nos dias úteis por volta das 08:30.");
    if (state.edition) msgs.push(`Você está vendo a edição de <b>${esc(state.edition)}</b>. <a href="#" id="back-today">Voltar para hoje</a>`);
    banner.innerHTML = msgs.join("<br>");
    banner.hidden = !msgs.length;
    const back = $("#back-today");
    if (back) back.onclick = (e) => { e.preventDefault(); $("#archive").value = ""; state.edition = null; load(); };

    const days = state.archiveDays || [];
    const pos = days.indexOf(state.edition || days[0]);
    $("#ed-prev").disabled = pos < 0 || pos >= days.length - 1;
    $("#ed-next").disabled = pos <= 0;
    renderTabs();
    renderMarket();
    renderBrief();
    renderFeed();
    renderDeals();
    renderSources();
    renderLater();
    renderOfficial();
    renderMacro();
    loadBase();
    loadLeads();
    loadCias().then(() => { renderBrief(); renderBriefSide(); renderAgenda(); renderOfertas(); renderDeals(); renderLeads(); renderTabs(); if ($("#reader").open) renderReader(); });
  }

  // ---------------------------------------------------------- companhias (perfis), agenda e ofertas
  const cias = { loaded: false, resumo: {}, alias: {}, names: {}, agenda: [], ofertas: [] };
  async function loadCias() {
    if (cias.loading) return cias.loading;
    cias.loading = Promise.all([
      fetchJSON("data/cias/resumo.json").then((r) => { cias.resumo = r.cias || {}; }).catch(() => {}),
      fetchJSON("data/cias/alias.json").then((a) => { cias.alias = a || {}; }).catch(() => {}),
      fetchJSON("data/cias/agenda.json").then((a) => { cias.agenda = a.eventos || []; }).catch(() => {}),
      fetchJSON("data/cias/ofertas.json").then((o) => { cias.ofertas = o.ofertas || []; cias.ofertasAt = o.generated_at; }).catch(() => {}),
    ]).then(() => { cias.loaded = true; });
    return cias.loading;
  }
  // mesmo critério do scripts/perfis.py (norm_name): sem acento, sem "S.A.", "Ltda", "Participações"…
  const SUFFIX = /\b(s\.?\/?a\.?|s\/a|sa|ltda\.?|cia\.?|companhia|participa[cç][oõ]es|holding|em recupera[cç][aã]o (extra)?judicial|-\s*em rj|em liquida[cç][aã]o|brasil(eira)?\s*$)\b/gi;
  const normName = (t) => fold(t).replace(/["'“”‘’()]/g, " ").replace(SUFFIX, " ").replace(/[^a-z0-9&+ .-]/g, " ").replace(/\s+/g, " ").trim().replace(/^[ .-]+|[ .-]+$/g, "");
  function companyOf(text) {
    if (!text || !cias.loaded) return null;
    const a = normName(text);
    if (cias.alias[a]) return cias.alias[a];
    const w = a.split(" ");
    if (w.length > 1 && w[0] === "grupo" && cias.alias[w.slice(1).join(" ")]) return cias.alias[w.slice(1).join(" ")];
    return null;
  }
  const ciaHref = (k) => `cias.html#cia/${encodeURIComponent(k)}`;
  // nomes de companhias no texto do briefing viram link para o perfil (só os nomes de mercado, com maiúscula;
  // nomes que também são palavras comuns ficam de fora)
  const AMBIGUOUS = new Set(["Vale", "Gol", "Oi", "Via", "Light", "Inter", "Pan", "Porto", "Mega", "Even", "Log", "TIM", "Vivo", "Natura", "Cury", "Mills", "Rumo", "Grão", "Serena", "Mateus", "Desktop", "Valid", "Ambipar"]);
  let nameRe = null, nameMap = null;
  function linkify(text) {
    const t = esc(text);
    if (!cias.loaded) return t;
    if (!nameRe) {
      nameMap = {};
      for (const [k, r] of Object.entries(cias.resumo)) {
        if (!r.nm || r.nm.length < 3 || AMBIGUOUS.has(r.nm) || !(r.mc || r.nn)) continue;
        if (!nameMap[r.nm] || (cias.resumo[nameMap[r.nm]]?.mc || 0) < (r.mc || 0)) nameMap[r.nm] = k;
      }
      const names = Object.keys(nameMap).sort((a, z) => z.length - a.length).map((n) => esc(n).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      nameRe = names.length ? new RegExp(`(^|[^\\wÀ-ÿ&])(${names.join("|")})(?![\\wÀ-ÿ])`, "g") : null;
    }
    return nameRe ? t.replace(nameRe, (m, pre, nm) => `${pre}<a class="cia-link quiet" href="${ciaHref(nameMap[nm.replace(/&amp;/g, "&")] || nameMap[nm])}">${nm}</a>`) : t;
  }
  const ciaName = (k) => cias.resumo[k]?.nm || "";
  // texto com link para o perfil da companhia, quando o portal reconhece o nome
  function ciaLinked(text) {
    const k = companyOf(text);
    return k ? `<a class="cia-link" href="${ciaHref(k)}" title="Perfil de ${esc(ciaName(k) || text)}">${esc(text)}</a>` : esc(text);
  }
  const brl = (v) => {
    if (typeof v !== "number" || !isFinite(v)) return "–";
    const a = Math.abs(v), f = (x, s) => `R$ ${fmtNum(x, x >= 100 ? 0 : 1)} ${s}`;
    return a >= 1e12 ? f(a / 1e12, "tri") : a >= 1e9 ? f(a / 1e9, "bi") : a >= 1e6 ? f(a / 1e6, "mi") : a >= 1e3 ? f(a / 1e3, "mil") : `R$ ${fmtNum(a, 0)}`;
  };
  const isoDay = (dt) => `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
  const plusDays = (n) => { const dt = new Date(); dt.setDate(dt.getDate() + n); return isoDay(dt); };
  const favs = () => new Set(store.get("cias-fav", []));
  const docUrlCvm = (id, q) => {
    const [seq, ver] = String(q || "").split(".");
    return `https://www.rad.cvm.gov.br/ENET/frmDownloadDocumento.aspx?Tela=ext&descTipo=IPE&CodigoInstituicao=1&numProtocolo=${id}&numSequencia=${seq}&numVersao=${ver || 1}`;
  };

  // barra do briefing: suas companhias, leads novos, próximos dias
  function renderBriefSide() {
    const d = state.digest;
    if (!d) return;
    // suas companhias: cotação e o que saiu hoje sobre cada uma
    const fv = [...favs()];
    $("#w-favs").hidden = !fv.length || !cias.loaded;
    if (fv.length && cias.loaded) {
      const hits = {};
      for (const it of d.items) for (const e of [...(it.entities || []), it.deal?.buyer, it.deal?.target, it.lead?.company].filter(Boolean)) {
        const k = companyOf(e);
        if (k && fv.includes(k)) (hits[k] ||= new Set()).add(it.id);
      }
      $("#brief-favs").innerHTML = fv.slice(0, 10).map((k) => {
        const r = cias.resumo[k] || {};
        const n = hits[k]?.size || 0;
        const up = (r.d1 ?? 0) >= 0;
        return `<a class="fav-row" href="${ciaHref(k)}"><span class="fav-nm">${esc(r.nm || k)}${r.tk ? `<small>${esc(r.tk)}</small>` : ""}</span>
          ${n ? `<span class="fav-news" data-search="${esc(r.nm || "")}" title="Notícias de hoje">${n} notícia${n > 1 ? "s" : ""}</span>` : ""}
          ${typeof r.p === "number" ? `<span class="fav-q ${up ? "up" : "down"}">${fmtNum(r.p)}<i>${r.d1 != null ? `${up ? "+" : "−"}${fmtNum(Math.abs(r.d1))}%` : ""}</i></span>` : ""}</a>`;
      }).join("");
    }
    // leads que apareceram nesta edição
    const fresh = Object.values((state.leads || {}).leads || {}).filter((l) => l.first_seen === d.date).sort((a, z) => (z.importance || 0) - (a.importance || 0));
    $("#w-leads").hidden = !fresh.length;
    $("#brief-leads").innerHTML = fresh.slice(0, 6).map((l) => `<li><b>${ciaLinked(l.company)}</b> <span class="badge lead">${esc(l.signal)}</span><small>${esc(l.why || "")}</small></li>`).join("");
    // próximos 7 dias: assembleias das suas companhias e das maiores, vencimentos grandes
    const soon = plusDays(7), today = isoDay(new Date());
    const fset = favs();
    const ev = cias.agenda.filter((e) => e.data >= today && e.data <= soon)
      .sort((a, z) => (fset.has(z.k) - fset.has(a.k)) || ((cias.resumo[z.k]?.mc || 0) - (cias.resumo[a.k]?.mc || 0)))
      .slice(0, 6).sort((a, z) => a.data.localeCompare(z.data));
    $("#w-agenda").hidden = !ev.length;
    $("#brief-agenda").innerHTML = ev.map((e) => `<li><span class="ag-date">${esc(fmtDay(e.data))}</span><a class="cia-link" href="${ciaHref(e.k)}">${esc(cias.resumo[e.k]?.nm || e.n)}</a> ${e.tipo === "assembleia" ? `${esc(e.t || "Assembleia")}` : `vencimento de ${esc(e.t.toLowerCase())} · ${brl(e.v)}`}</li>`).join("");
  }

  // aba Agenda
  function renderAgenda() {
    const kind = $("#ag-kind").value, range = +$("#ag-range").value || 30;
    const q = fold($("#ag-q").value.trim());
    const fset = favs();
    const today = isoDay(new Date()), end = plusDays(range);
    syncSegments();
    const rows = cias.agenda.filter((e) => e.data >= today && e.data <= end && (!kind || e.tipo === kind) && (!$("#ag-favs").checked || fset.has(e.k))
      && (!q || fold(`${e.n} ${cias.resumo[e.k]?.nm || ""} ${e.t} ${e.s} ${e.e || ""}`).includes(q)));
    const watch = state.digest?.brief?.watchlist || [];
    $("#ag-watch").innerHTML = watch.length && !kind && !q ? `<div class="widget ag-watch"><h3 class="group-label">No radar do briefing</h3><ul class="list-plain">${watch.map((w) => `<li>${esc(w)}</li>`).join("")}</ul></div>` : "";
    if (!rows.length) { $("#agenda-list").innerHTML = `<div class="empty">${cias.loaded ? "Nada na agenda com esses filtros." : "Carregando a agenda…"}</div>`; return; }
    const byDay = {};
    for (const e of rows) (byDay[e.data] ||= []).push(e);
    $("#agenda-list").innerHTML = Object.entries(byDay).map(([day, list]) => {
      const dt = new Date(day + "T12:00:00");
      const label = dt.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
      list.sort((a, z) => (fset.has(z.k) - fset.has(a.k)) || ((cias.resumo[z.k]?.mc || 0) - (cias.resumo[a.k]?.mc || 0)));
      return `<div class="ag-day"><h3 class="ag-head"><span class="ag-cal"><b>${dt.getDate()}</b><small>${dt.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "")}</small></span>${esc(label.charAt(0).toUpperCase() + label.slice(1))}<span class="muted small">${list.length} evento${list.length > 1 ? "s" : ""}</span></h3>
        <div class="cards grouped">${list.map((e) => `<div class="ag-row ${fset.has(e.k) ? "fav" : ""}">
          <span class="badge ${e.tipo === "assembleia" ? "deal" : "neg"}">${e.tipo === "assembleia" ? esc(e.t || "Assembleia") : "Vencimento"}</span>
          <div class="ag-main"><a class="cia-link" href="${ciaHref(e.k)}">${esc(cias.resumo[e.k]?.nm || e.n)}</a>${cias.resumo[e.k]?.tk ? ` <span class="tk">${esc(cias.resumo[e.k].tk)}</span>` : ""}
            <div class="small muted">${e.tipo === "assembleia" ? esc([e.e, e.s].filter(Boolean).join(" · ") || "Assembleia de acionistas") : `${esc(e.t)} · ${esc(e.s)} · saldo ${brl(e.v)}`}</div></div>
          ${e.tipo === "assembleia" && e.id ? `<a class="btn btn-sm" href="${safeUrl(docUrlCvm(e.id, e.q))}" target="_blank" rel="noopener">Edital</a>` : ""}
        </div>`).join("")}</div></div>`;
    }).join("");
  }

  // aba Ofertas públicas
  const ofState = { shown: 80 };
  function ofertasRows() {
    const days = +$("#of-range").value || 90;
    const since = plusDays(-days);
    const vm = $("#of-vm").value, q = fold($("#of-q").value.trim());
    return cias.ofertas.filter((o) => o.d >= since && (!vm || o.vm === vm) && (!$("#of-listed").checked || o.k)
      && (!q || fold(`${o.em} ${o.lider} ${o.coord || ""} ${o.dest || ""} ${o.vm} ${cias.resumo[o.k]?.nm || ""}`).includes(q)));
  }
  function renderOfertas() {
    syncSegments();
    const sel = $("#of-vm");
    if (sel.options.length <= 1 && cias.ofertas.length) {
      const c = {};
      for (const o of cias.ofertas) c[o.vm] = (c[o.vm] || 0) + 1;
      sel.innerHTML = `<option value="">Todos os títulos</option>` + Object.entries(c).sort((a, z) => z[1] - a[1]).map(([v, n]) => `<option value="${esc(v)}">${esc(v)} (${n})</option>`).join("");
    }
    const rows = ofertasRows();
    const total = rows.reduce((a, o) => a + (o.v || 0), 0);
    const acoes = rows.filter((o) => /^a[cç][oõ]es/i.test(o.vm));
    const days = +$("#of-range").value || 90;
    $("#of-kpis").innerHTML = [
      ["Volume registrado", brl(total), `${rows.length} ofertas em ${days === 366 ? "12 meses" : days + " dias"}`],
      ["Ofertas de ações", String(acoes.length), acoes.length ? brl(acoes.reduce((a, o) => a + (o.v || 0), 0)) : "nenhuma"],
      ["Debêntures", brl(rows.filter((o) => /deb[eê]ntur/i.test(o.vm)).reduce((a, o) => a + (o.v || 0), 0)), `${rows.filter((o) => /deb[eê]ntur/i.test(o.vm)).length} ofertas`],
      ["De companhias abertas", String(rows.filter((o) => o.k).length), "emissores com registro na CVM"],
    ].map(([k, v, s2]) => `<div class="stat"><span>${k}</span><b>${esc(v)}</b><small>${esc(s2)}</small></div>`).join("");
    const league = (key) => {
      const m = {};
      for (const o of rows) { const n = o[key] || "não informado"; (m[n] ||= { n: 0, v: 0 }); m[n].n++; m[n].v += o.v || 0; }
      const list = Object.entries(m).sort((a, z) => z[1].v - a[1].v).slice(0, 10);
      const max = Math.max(1, ...list.map(([, x]) => x.v));
      return list.map(([n, x]) => `<button class="lg-row" type="button" data-ofq="${esc(key === "lider" ? n : "")}" data-ofvm="${esc(key === "vm" ? n : "")}"><span class="lg-n">${esc(n)}</span><span class="lg-bar"><i style="width:${(100 * x.v) / max}%"></i></span><span class="lg-v">${brl(x.v)}<small>${x.n} ofertas</small></span></button>`).join("");
    };
    $("#of-league").innerHTML = league("lider") || `<p class="muted small">Sem ofertas no período.</p>`;
    $("#of-league-note").textContent = "por volume";
    $("#of-types").innerHTML = league("vm");
    $("#of-count").textContent = `${rows.length} ofertas · ${brl(total)}${cias.ofertasAt ? ` · dados da CVM de ${fmtDay(cias.ofertasAt.slice(0, 10))}` : ""}`;
    $("#of-body").innerHTML = rows.slice(0, ofState.shown).map((o) => `<tr>
      <td class="nowrap">${esc(fmtDay(o.d))}/${esc(o.d.slice(2, 4))}</td>
      <td>${o.k ? `<a class="cia-link" href="${ciaHref(o.k)}">${esc(cias.resumo[o.k]?.nm || o.em)}</a>` : esc(o.em)}${o.pub ? `<small class="muted block">público ${esc(o.pub.toLowerCase())}</small>` : ""}</td>
      <td>${esc(o.vm)}${o.emissao ? ` · ${esc(o.emissao)}ª emissão` : ""}${o.tipo && o.tipo !== "Primária" ? ` · ${esc(o.tipo.toLowerCase())}` : ""}${o.sust ? ` <span class="badge pos">ESG</span>` : ""}${o.inc ? ` <span class="badge">incentivada</span>` : ""}${o.dest ? `<small class="muted block clamp2">${esc(o.dest)}</small>` : ""}</td>
      <td class="num">${brl(o.v)}</td><td>${esc(o.lider || "–")}</td><td><span class="stage">${esc((o.st || "").replace(/^Oferta /, ""))}</span></td></tr>`).join("")
      || `<tr><td colspan="6" class="muted">${cias.loaded ? "Nenhuma oferta com esses filtros." : "Carregando…"}</td></tr>`;
    $("#of-more").hidden = rows.length <= ofState.shown;
  }
  function exportOfertas() {
    const cols = ["Registro", "Encerramento", "Emissor", "CNPJ", "Valor mobiliário", "Emissão", "Tipo", "Volume (R$)", "Coordenador líder", "Grupo coordenador", "Público", "Regime", "Situação", "Destinação"];
    const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const lines = [cols.map(cell).join(";"), ...ofertasRows().map((o) => [o.d, o.fim, o.em, o.cnpj, o.vm, o.emissao, o.tipo, o.v, o.lider, o.coord, o.pub, o.reg, o.st, o.dest].map(cell).join(";"))];
    const blob = new Blob(["\ufeff" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `ofertas-cvm-${isoDay(new Date())}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  // ---------------------------------------------------------- leads (oportunidades em aberto)
  const TRACK = { contatar: "A contatar", contato: "Em contato", assessorando: "Assessorando", descartado: "Descartado" };
  state.track = store.get("leads-track", {});

  async function loadLeads() {
    try { state.leads = await fetchJSON("data/leads_db.json"); } catch { state.leads = null; }
    const sel = $("#leads-signal");
    const signals = [...new Set(Object.values((state.leads || {}).leads || {}).map((l) => l.signal).filter(Boolean))].sort();
    if (sel.options.length <= 1) sel.innerHTML = `<option value="">Todos os sinais</option>` + signals.map((x) => `<option>${esc(x)}</option>`).join("");
    renderLeads();
    renderTabs();
  }

  const noAdvisor = (l) => !l.advisors || /n[aã]o divulgad|n[aã]o informad/i.test(l.advisors);

  function leadRows() {
    const all = Object.values((state.leads || {}).leads || {});
    const ref = (state.digest && state.digest.date) || new Date().toISOString().slice(0, 10);
    const days = +$("#leads-period").value;
    const since = new Date(new Date(ref + "T12:00:00").getTime() - days * 864e5).toISOString().slice(0, 10);
    const q = fold($("#leads-q").value.trim());
    const sig = $("#leads-signal").value;
    const tr = $("#leads-track").value;
    return all
      .filter((l) => (l.last_seen || "") >= since)
      .filter((l) => $("#leads-closed").checked || l.status === "Em aberto")
      .filter((l) => !sig || l.signal === sig)
      .filter((l) => !$("#leads-noadv").checked || noAdvisor(l))
      .filter((l) => {
        const t = (state.track[l.key] || {}).s || "";
        if (!tr) return t !== "descartado";
        return tr === "novo" ? !t : t === tr;
      })
      .filter((l) => !q || fold(`${l.company} ${l.sector} ${l.signal} ${l.counterparty} ${l.advisors} ${l.why} ${(l.events || []).map((e) => e.headline).join(" ")}`).includes(q))
      .sort((a, z) => (z.last_seen || "").localeCompare(a.last_seen || "") || z.importance - a.importance);
  }

  function renderLeads() {
    const box = $("#leads-list");
    if (!state.leads) { box.innerHTML = `<div class="empty">A base de leads começa a ser montada na próxima coleta.</div>`; return; }
    const rows = leadRows();
    $("#leads-count").textContent = `${rows.length} leads`;
    box.innerHTML = rows.map((l) => {
      const t = state.track[l.key] || {};
      const ev = [...(l.events || [])].reverse().slice(0, 3);
      return `<article class="card lead ${l.status !== "Em aberto" ? "lead-closed" : ""}" data-lead="${esc(l.key)}">
        <div class="lead-head">
          <div>
            <div class="meta">
              <span class="cat-tag" style="--cat: var(--c-mna)">${esc(l.signal || "Oportunidade")}</span>
              ${l.sector ? `<span>${esc(l.sector)}</span>` : ""}
              <span>desde ${esc(fmtDay(l.first_seen))}${l.last_seen !== l.first_seen ? ` · última notícia ${esc(fmtDay(l.last_seen))}` : ""}</span>
              ${l.status !== "Em aberto" ? `<span class="multi">${esc(l.status.toLowerCase())}</span>` : ""}
            </div>
            <h3>${ciaLinked(l.company)}</h3>
          </div>
          <select class="lead-status ${t.s ? `s-${esc(t.s)}` : ""}" data-track="${esc(l.key)}" aria-label="Meu status">
            <option value="">Sem status</option>
            ${Object.entries(TRACK).map(([k, v]) => `<option value="${k}" ${t.s === k ? "selected" : ""}>${v}</option>`).join("")}
          </select>
        </div>
        ${l.why ? `<p class="card-summary">${esc(l.why)}</p>` : ""}
        <dl class="lead-facts">
          <dt>Contraparte</dt><dd>${esc(l.counterparty || "não divulgado")}</dd>
          <dt>Assessores</dt><dd>${noAdvisor(l) ? `<span class="adv-open">nenhum citado</span>` : esc(l.advisors)}</dd>
        </dl>
        <ul class="lead-events">${ev.map((e) => `<li><span class="muted">${esc(fmtDay(e.date))}</span> <a href="${safeUrl(e.link)}" target="_blank" rel="noopener">${esc(e.headline)}</a> <span class="muted">· ${esc(e.source)}</span></li>`).join("")}</ul>
        <div class="lead-foot">
          <input class="lead-note" data-note="${esc(l.key)}" placeholder="Anotação (ex.: Carol conhece o CFO; falar com o Itaú BBA)" value="${esc(t.n || "")}">
          <button class="btn" data-copylead="${esc(l.key)}" title="Copiar um resumo para mandar por WhatsApp ou e-mail">Copiar resumo</button>
        </div>
      </article>`;
    }).join("") || `<div class="empty">Nenhum lead com esses filtros.</div>`;
  }

  function saveTrack(key, patch) {
    state.track[key] = { ...(state.track[key] || {}), ...patch, at: new Date().toISOString().slice(0, 10) };
    if (!state.track[key].s && !state.track[key].n) delete state.track[key];
    store.set("leads-track", state.track);
  }

  function leadText(l) {
    const last = (l.events || [])[l.events.length - 1] || {};
    return [`${l.company} (${l.signal}${l.sector ? ` · ${l.sector}` : ""})`, l.why,
      `Contraparte: ${l.counterparty || "não divulgado"} | Assessores: ${l.advisors || "não divulgado"}`,
      last.headline ? `${last.headline} (${last.source}, ${fmtDay(last.date)}) ${last.link}` : ""].filter(Boolean).join("\n");
  }

  function exportLeads() {
    const cols = ["Empresa", "Sinal", "Setor", "Situação", "Desde", "Última notícia", "Contraparte", "Assessores", "Por que é oportunidade", "Meu status", "Anotação", "Última manchete", "Link"];
    const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const lines = [cols.map(cell).join(";"), ...leadRows().map((l) => {
      const t = state.track[l.key] || {}, last = (l.events || [])[l.events.length - 1] || {};
      return [l.company, l.signal, l.sector, l.status, l.first_seen, l.last_seen, l.counterparty, l.advisors, l.why, TRACK[t.s] || "", t.n || "", last.headline, last.link].map(cell).join(";");
    })];
    const blob = new Blob(["\ufeff" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `leads-portal-fpm-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  // ---------------------------------------------------------- base histórica de deals
  async function loadBase() {
    try { state.base = await fetchJSON("data/deals_db.json"); } catch { state.base = null; }
    renderBase();
    renderTabs();
  }

  function baseRows() {
    const deals = Object.values((state.base || {}).deals || {});
    const q = fold($("#base-q").value.trim());
    const sector = $("#base-sector").value;
    return deals
      .filter((d) => !sector || d.sector === sector)
      .filter((d) => !q || fold(`${d.buyer} ${d.target} ${d.sector} ${d.type} ${d.advisors} ${d.headline}`).includes(q))
      .sort((a, z) => (z.last_seen || "").localeCompare(a.last_seen || "") || z.importance - a.importance);
  }

  // bancos e escritórios citados como assessores nos deals da base (quem está fazendo M&A no Brasil)
  function advisorRank(deals) {
    const count = {};
    for (const d of deals) {
      const a = d.advisors || "";
      if (!a || /n[aã]o divulgad|n[aã]o informad|^-+$/i.test(a)) continue;
      for (let n of a.split(/\s*[;,/]\s*|\s+e\s+|\s*\(|\)\s*/)) {
        n = n.replace(/^(assessor(ado|ia)?|assessores|pelo|pela|pelos|pelas|do|da|de|dos|das)\s+/i, "").replace(/[.:]$/, "").trim();
        if (n.length < 2 || /^(comprador|compradora|vendedor|vendedora|alvo|financeiro|jur[ií]dico|legal|lado|credores|acionistas|empresa|companhia|n[aã]o divulgad[oa]s?)$/i.test(n)) continue;
        count[n] = (count[n] || 0) + 1;
      }
    }
    return Object.entries(count).sort((a, z) => z[1] - a[1] || a[0].localeCompare(z[0])).slice(0, 8);
  }

  function renderBase() {
    const deals = Object.values((state.base || {}).deals || {});
    if (!deals.length) { $("#base-summary").innerHTML = `<div class="empty">A base começa a ser montada na próxima coleta.</div>`; $("#base-body").innerHTML = ""; return; }
    // resumo dos últimos 7 dias (pela data da edição)
    const ref = state.digest.date || new Date().toISOString().slice(0, 10);
    const since = new Date(new Date(ref + "T12:00:00").getTime() - 6 * 864e5).toISOString().slice(0, 10);
    const week = deals.filter((d) => d.first_seen >= since);
    const moved = deals.filter((d) => d.first_seen < since && (d.timeline || []).some((t) => t.date >= since));
    const bySector = {};
    for (const d of week) bySector[d.sector || "Outros"] = (bySector[d.sector || "Outros"] || 0) + 1;
    const topSectors = Object.entries(bySector).sort((a, z) => z[1] - a[1]).slice(0, 5);
    const topDeals = [...week].sort((a, z) => z.importance - a.importance).slice(0, 5);
    $("#base-summary").innerHTML = `
      <div class="week-grid">
        <div class="side-block"><h3 class="section-label">Últimos 7 dias</h3>
          <p class="week-big">${week.length}<span> deals novos</span></p>
          <p class="muted small">${moved.length} deals antigos mudaram de estágio · base com ${deals.length} deals</p></div>
        <div class="side-block"><h3 class="section-label">Setores mais ativos</h3>
          <ul class="bullets macro">${topSectors.map(([k, n]) => `<li><b>${esc(k)}</b> ${n}</li>`).join("") || "<li>–</li>"}</ul></div>
        <div class="side-block"><h3 class="section-label">Maiores da semana</h3>
          <ul class="bullets">${topDeals.map((d) => `<li>${esc(d.buyer)} → ${esc(d.target)} <span class="muted">· ${esc(d.value || "valor não divulgado")}</span></li>`).join("") || "<li>–</li>"}</ul></div>
        <div class="side-block"><h3 class="section-label">Assessores mais citados</h3>
          <ul class="bullets macro adv-rank">${advisorRank(deals).map(([n, c]) => `<li><button class="link-btn" type="button" data-advq="${esc(n)}">${esc(n)}</button> ${c}</li>`).join("") || "<li>Sem assessores divulgados na base.</li>"}</ul></div>
      </div>`;
    const sel = $("#base-sector");
    if (sel.options.length <= 1) {
      const sectors = [...new Set(deals.map((d) => d.sector).filter(Boolean))].sort();
      sel.innerHTML = `<option value="">Todos os setores</option>` + sectors.map((x) => `<option>${esc(x)}</option>`).join("");
    }
    const rows = baseRows();
    $("#base-count").textContent = `${rows.length} deals`;
    $("#base-body").innerHTML = rows.map((d) => `<tr>
      <td>${esc(fmtDay(d.first_seen))}</td><td>${esc(d.type)}</td><td>${esc(d.buyer)}</td><td>${esc(d.target)}</td>
      <td>${esc(d.value)}</td><td><span class="stage">${esc(d.stage)}</span></td><td>${esc(d.sector)}</td>
      <td class="tl">${(d.timeline || []).map((t) => `<a href="${safeUrl(t.link)}" target="_blank" rel="noopener" title="${esc(t.headline)}">${esc(fmtDay(t.date))} · ${esc(t.stage)}</a>`).join("<br>")}</td></tr>`).join("");
  }

  function exportBase() {
    const cols = ["Primeira aparição", "Última menção", "Tipo", "Comprador / investidor", "Alvo", "Valor", "Estágio", "Setor", "Assessores", "Manchete", "Link"];
    const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const lines = [cols.map(cell).join(";"), ...baseRows().map((d) => [d.first_seen, d.last_seen, d.type, d.buyer, d.target, d.value, d.stage, d.sector, d.advisors, d.headline, d.link].map(cell).join(";"))];
    const blob = new Blob(["\ufeff" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `deals-portal-fpm-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function renderOfficial() {
    const off = state.digest.official || {};
    const filings = off.filings || [], cade = off.cade || [];
    $("#official-filings").innerHTML = filings.map((f) => `
      <article class="card off-card"><div class="card-main">
        <div class="meta"><span class="cat-tag" style="--cat: var(--c-mna)">${esc(f.kind)}</span><span>CVM · entregue em ${esc(fmtDay(f.date))}${f.time ? ` às ${esc(f.time)}` : ""}</span></div>
        <h3><a href="${safeUrl(f.link)}" target="_blank" rel="noopener">${esc(f.company)}</a></h3>
        <p class="card-summary">${esc(f.subject)}</p></div></article>`).join("")
      || `<div class="empty">${(state.digest.official_status || []).some((s) => s.id === "cvm-ipe" && !s.ok)
        ? "A CVM não respondeu na última coleta."
        : off.cvm_realtime ? "Nenhum fato relevante ou comunicado de M&A entregue à CVM no período desta edição."
        : `Nenhum documento novo nos dados abertos da CVM. A última entrega já publicada é de ${esc(fmtDay(off.cvm_through))}; os próximos aparecem assim que a CVM atualizar o arquivo.`}</div>`;
    const cadeTag = (k) => (k === "Notificação ao Cade" ? "Novo negócio" : k === "Aprovado pelo Cade" ? "Aprovação" : "Cade");
    $("#official-cade").innerHTML = cade.map((c) => `
      <article class="card off-card"><div class="card-main">
        <div class="meta"><span class="cat-tag" style="--cat: ${c.kind === "Notificação ao Cade" ? "var(--c-mna)" : "var(--c-internacional)"}">${esc(cadeTag(c.kind))}</span><span>Cade · Diário Oficial de ${esc(fmtDay(c.date))}</span></div>
        <h3><a href="${safeUrl(c.link)}" target="_blank" rel="noopener">${esc(c.headline || c.title)}</a></h3>
        ${c.explain ? `<p class="card-summary">${esc(c.explain)}</p>` : ""}
        <p class="muted small" style="margin:6px 0 0">${c.headline ? `Empresas: ${esc(c.title)} · ` : ""}${esc(c.summary)}</p></div></article>`).join("")
      || `<div class="empty">Nenhuma publicação do Cade no Diário Oficial desta edição.</div>`;
  }

  function renderMacro() {
    const m = (state.digest.official || {}).macro || {};
    const el = $("#macro");
    const f = m.focus || {};
    const yrs = f.years || [];
    const pct = (v) => (v == null ? "–" : `${fmtNum(v, 2)}%`);
    const rows = [
      ["Selic (meta)", m.selic_meta ? pct(m.selic_meta.value) : null],
      ["IPCA 12 meses", m.ipca_12m ? pct(m.ipca_12m.value) : null],
      ...[["ipca", "Focus IPCA"], ["selic", "Focus Selic"], ["pib", "Focus PIB"], ["cambio", "Focus câmbio"]]
        .filter(([k]) => f[k]).map(([k, label]) => [label, yrs.map((y) => `${y}: ${k === "cambio" ? (f[k][y] != null ? "R$ " + fmtNum(f[k][y], 2) : "–") : pct(f[k][y])}`).join(" · ")]),
    ].filter(([, v]) => v);
    el.closest(".widget").hidden = !rows.length;
    el.innerHTML = rows.map(([k, v]) => `<li><b>${esc(k)}</b> ${esc(v)}</li>`).join("")
      + (f.ipca ? `<li class="muted small">Focus de ${esc(fmtDay(f.ipca.date))} · fonte: Banco Central</li>` : "");
  }

  function renderLater() {
    const later = [...(state.digest.upcoming || [])].sort((a, z) => z.published.localeCompare(a.published));
    $("#later-count").textContent = `${later.length} notícias publicadas depois do fechamento desta edição. Elas entram na edição de amanhã, com análise.`;
    $("#later").innerHTML = later.map(cardHTML).join("") || `<div class="empty">Nada novo desde o fechamento da edição.</div>`;
  }

  function updateStatus() {
    const d = state.digest;
    if (!d) return;
    const el = $("#status");
    const ageMin = (Date.now() - new Date(d.generated_at).getTime()) / 60000;
    el.textContent = `atualizado ${ago(d.generated_at)}`;
    el.classList.toggle("stale", ageMin > 180);
  }

  function tabsAvailable() {
    const d = state.digest;
    // "Desde as 8h" só existe na edição atual: são as notícias que vão para a próxima edição.
    return TABS.filter((t) => t.id !== "later" || (!state.edition && (d.upcoming || []).length));
  }

  function tabCounts() {
    const d = state.digest;
    const off = d.official || {};
    return { feed: d.items.filter((i) => !state.read.has(i.id)).length || null, deals: d.deals.length, later: (d.upcoming || []).length,
             base: Object.keys((state.base || {}).deals || {}).length || null,
             leads: state.leads ? leadRows().length : null,
             official: (off.filings || []).length + (off.cade || []).length,
             agenda: cias.loaded ? cias.agenda.filter((e) => e.data >= isoDay(new Date()) && e.data <= plusDays(7)).length || null : null,
             ofertas: cias.loaded ? cias.ofertas.filter((o) => o.d >= plusDays(-30)).length || null : null };
  }

  function renderTabs() {
    const counts = tabCounts();
    const tabs = tabsAvailable();
    if (!tabs.some((t) => t.id === state.tab)) state.tab = "brief";
    const byId = Object.fromEntries(tabs.map((t) => [t.id, t]));
    const navBtn = (t) => `<button class="nav-item" data-tab="${t.id}" ${state.tab === t.id ? 'aria-current="page"' : ""}>${icon(t.icon)}<span>${t.label}</span>${counts[t.id] != null ? `<span class="count">${counts[t.id]}</span>` : ""}</button>`;
    let html = "", group = "";
    for (const id of NAV_ORDER) {
      const t = byId[id];
      if (!t) continue;
      if (t.group !== group) { group = t.group; html += `<div class="nav-group">${group}</div>`; }
      html += navBtn(t);
      if (id === "sources") html += `<a class="nav-item" href="cias.html">${icon("cias")}<span>Companhias</span>${icon("chev", "ext")}</a>`
        + `<a class="nav-item" href="cias.html#pessoas">${icon("people")}<span>Pessoas</span>${icon("chev", "ext")}</a>`;
    }
    $("#tabs").innerHTML = html;
    // celular: quatro abas fixas + "Mais"
    const primary = TABS.filter((t) => t.short);
    const inMore = !primary.some((t) => t.id === state.tab);
    $("#tabbar").innerHTML = primary.map((t) => `<button data-tab="${t.id}" ${state.tab === t.id ? 'aria-current="page"' : ""}>${icon(t.icon)}<span>${t.short}</span></button>`).join("")
      + `<button data-more ${inMore ? 'aria-current="page"' : ""}>${icon("more")}<span>Mais</span></button>`;
    $("#more-list").innerHTML = NAV_ORDER.filter((id) => byId[id] && !byId[id].short).map((id) => navBtn(byId[id])).join("")
      + `<a class="nav-item" href="cias.html">${icon("cias")}<span>Companhias</span>${icon("chev", "ext")}</a>`
      + `<a class="nav-item" href="cias.html#pessoas">${icon("people")}<span>Pessoas</span>${icon("chev", "ext")}</a>`
      + `<button class="nav-item" data-prefs-open>${icon("sliders")}<span>Personalizar</span></button>`;
    for (const t of TABS) $(`#view-${t.id}`).hidden = state.tab !== t.id;
    const title = (byId[state.tab] || TABS[0]).label;
    $("#page-title").textContent = title;
    $("#bar-title").textContent = title;
    document.title = state.tab === "brief" ? "Portal FPM" : `${title} · Portal FPM`;
  }

  function setTab(id) {
    if (state.tab !== id) {
      state.tab = id;
      store.set("tab", id);
      history.replaceState(null, "", `#${id}`);
      state.focus = -1;
    }
    if ($("#more").open) $("#more").close();
    renderTabs();
    window.scrollTo({ top: 0 });
  }

  function renderMarket() {
    const m = state.digest.market || [];
    $("#market").closest(".widget").hidden = !m.length;
    $("#market").innerHTML = m.map((q) => {
      const up = q.change_pct >= 0;
      const dec = q.unit === "R$" ? 4 : q.price > 1000 ? 0 : 2;
      return `<div class="mkt ${up ? "up" : "down"}" title="${esc(q.name)}: ${fmtNum(q.price, dec)}">
        <span class="mkt-name">${esc(q.name)}</span>
        <span class="mkt-chg">${up ? "+" : "−"}${fmtNum(Math.abs(q.change_pct))}%</span>
        <span class="mkt-price">${q.unit === "R$" ? "R$ " : ""}${fmtNum(q.price, dec)}</span></div>`;
    }).join("");
  }

  function renderBrief() {
    const d = state.digest, b = d.brief || {};
    const byId = Object.fromEntries(d.items.map((i) => [i.id, i]));
    $("#brief-headline").textContent = b.headline || "";
    $("#brief-mood").textContent = b.mood || "";
    const mins = Math.max(2, Math.round(((b.tldr || []).join(" ").length + (b.sections || []).map((s) => s.text).join(" ").length) / 1100));
    const hhmm = (iso) => new Date(iso).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const an = d.analysis || {};
    $("#brief-meta").textContent = `${mins} min de leitura · ` + (an.updated_at ? `análise às ${hhmm(an.updated_at)}` : `notícias às ${hhmm(d.generated_at)}`);
    $("#brief-tldr").innerHTML = (b.tldr || []).map((t) => `<li>${linkify(t)}</li>`).join("");
    const list = (sel, arr) => { $(sel).innerHTML = (arr || []).map((t) => `<li>${linkify(t)}</li>`).join(""); $(sel).closest(".widget").hidden = !(arr || []).length; };
    list("#brief-watch", b.watchlist);
    list("#brief-conn", b.connections);

    const secs = [...(b.sections || [])].sort((a, z) => CAT_ORDER.indexOf(a.category) - CAT_ORDER.indexOf(z.category));
    $("#brief-sections").innerHTML = secs.map((s) => `
      <div class="bsec" style="${catVar(s.category)}">
        <h4>${esc(catName(s.category))}</h4>
        <p>${linkify(s.text)}</p>
        <div class="refs">${(s.item_ids || []).filter((id) => byId[id]).map((id) =>
          `<button class="ref" data-jump="${id}" title="${esc(byId[id].headline)}">${esc(byId[id].outlets[0].source)}</button>`).join("")}</div>
      </div>`).join("");

    const top = d.items.filter((i) => !muted(i) && !i.repeat && !i.dup_of).sort((a, z) => relevance(z) - relevance(a)).slice(0, 8);
    $("#top-list").innerHTML = top.map(cardHTML).join("");
    $("#brief-sections").closest(".section").hidden = !secs.length;

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
        <span class="bar">${x.hot ? `<span class="bar-fill" style="width:${(x.hot / maxN) * 100}%">${x.hot}</span>` : ""}<span class="bar-hot" style="width:${((x.n - x.hot) / maxN) * 100}%"></span></span>
        <span class="muted small">${x.n}</span></div>`;
    }).join("") + `<div class="map-legend">Cor forte: notícias com nota 7 ou mais. Toque numa editoria para filtrar.</div>`;

    const ent = {};
    for (const i of d.items) for (const e of i.entities || []) ent[e] = (ent[e] || 0) + i.importance;
    $("#entities").innerHTML = Object.entries(ent).sort((a, z) => z[1] - a[1]).slice(0, 24)
      .map(([e]) => `<button class="chip" data-search="${esc(e)}">${esc(e)}</button>`).join("") || `<span class="muted small">Disponível com a análise por IA.</span>`;
  }

  // nota como anel: o traço cobre nota × 10% da circunferência (r = 15,9155 → circunferência 100)
  const ring = (n, cls = "") => `<span class="ring ${impClass(n)} ${cls}" style="--imp:${n}">
      <svg viewBox="0 0 36 36" aria-hidden="true"><circle class="trk" cx="18" cy="18" r="15.9155"/><circle class="val" cx="18" cy="18" r="15.9155" stroke-dasharray="${n * 10} 100"/></svg><b>${n}</b></span>`;

  function newsTop(it) {
    const sources = [...new Set(it.outlets.map((o) => o.source))];
    const time = new Date(it.published).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    return `<div class="news-top">
      <span class="cat-dot">${esc(catName(it.category))}</span>
      <span class="dot-sep">${esc(sources[0])}${sources.length > 1 ? ` <span title="${esc(sources.join(", "))}">+${sources.length - 1}</span>` : ""}</span>
      <span class="dot-sep" title="${esc(new Date(it.published).toLocaleString("pt-BR"))}">${time}</span></div>`;
  }

  function badges(it) {
    const sent = { positivo: "pos", negativo: "neg", misto: "misto" }[it.sentiment];
    return [
      it.is_deal ? `<span class="badge deal">${esc(it.deal?.type || "Deal")}</span>` : "",
      it.update ? `<span class="badge upd" title="Antes: ${esc(it.update.from)} (${esc(fmtDay(it.update.date))})">Atualização</span>` : "",
      it.repeat ? `<span class="badge" title="Este deal já saiu numa edição anterior, sem mudança de estágio">Já noticiado em ${esc(fmtDay(it.repeat.date))}</span>` : "",
      sent ? `<span class="badge ${sent}">${esc(it.sentiment.charAt(0).toUpperCase() + it.sentiment.slice(1))}</span>` : "",
      it.ai === false ? `<span class="badge" title="Nota estimada por palavras-chave; a análise sai na próxima rodada do Claude">Sem análise</span>` : "",
    ].join("");
  }

  function cardHTML(it) {
    const read = state.read.has(it.id), saved = state.saved.has(it.id);
    return `
    <article class="card news ${read ? "read" : ""}" data-id="${it.id}" data-open="${it.id}" style="${catVar(it.category)}">
      ${read ? "" : `<span class="unread-dot" title="Não lida"></span>`}${ring(it.importance)}
      <div class="card-main">
        ${newsTop(it)}
        <h3>${esc(it.headline)}</h3>
        ${it.summary ? `<p class="card-summary">${esc(it.summary)}</p>` : ""}
        <div class="badges">${badges(it)}</div>
      </div>
      <div class="card-actions">
        <button class="ibtn ${saved ? "on" : ""}" data-save="${it.id}" title="${saved ? "Remover dos salvos" : "Salvar"} (s)" aria-label="Salvar">${icon("star")}</button>
        <button class="ibtn ${read ? "" : "done"}" data-read="${it.id}" title="${read ? "Marcar como não lida" : "Marcar como lida"} (m)" aria-label="Lida">${icon("check")}</button>
      </div>
    </article>`;
  }

  // ---------------------------------------------------------- leitor
  const reader = { id: null, list: [] };
  const findItem = (id) => [...(state.digest?.items || []), ...(state.digest?.upcoming || [])].find((i) => i.id === id);

  function openReader(id, list) {
    if (!findItem(id)) return;
    reader.id = id;
    reader.list = list && list.length ? list : [id];
    state.read.add(id); persist();
    renderReader();
    const dlg = $("#reader");
    // Foco no texto, não no primeiro botão: sem anel de foco ao abrir, e as setas e o espaço já rolam a notícia.
    if (!dlg.open) { dlg.showModal(); $("#reader-body").focus({ preventScroll: true }); }
    history.replaceState(null, "", `#n/${id}@${state.edition || state.digest?.date || ""}`);
    $("#reader-body").scrollTop = 0;
    rerenderLists();
  }

  function renderReader() {
    const it = findItem(reader.id);
    if (!it) return;
    const pos = reader.list.indexOf(reader.id);
    $("#reader-pos").textContent = reader.list.length > 1 ? `${pos + 1} de ${reader.list.length}` : "";
    $('[data-reader="prev"]').disabled = pos <= 0;
    $('[data-reader="next"]').disabled = pos < 0 || pos >= reader.list.length - 1;
    const sv = $('[data-reader="save"]');
    sv.classList.toggle("on", state.saved.has(it.id));
    sv.title = state.saved.has(it.id) ? "Remover dos salvos (s)" : "Salvar (s)";
    const sec = (title, text) => (text ? `<section class="reader-sec"><h4>${title}</h4><p>${esc(text)}</p></section>` : "");
    const x = it.deal || {};
    const dealRows = [["Tipo", x.type], ["Comprador ou investidor", x.buyer], ["Alvo", x.target], ["Valor", x.value], ["Estágio", x.stage], ["Setor", x.sector], ["Assessores", x.advisors]].filter(([, v]) => v);
    $("#reader-body").innerHTML = `
      <div style="${catVar(it.category)}">${newsTop(it)}</div>
      <h2 class="reader-title">${esc(it.headline)}</h2>
      ${it.summary ? `<p class="reader-lede">${esc(it.summary)}</p>` : ""}
      <div class="reader-score">${ring(it.importance)}<p>${it.importance_reason ? esc(it.importance_reason) : `Nota ${it.importance} de 10.`}</p></div>
      ${sec("O que envolve", it.involves)}
      ${sec("Como interpretar", it.interpretation)}
      ${sec("Impacto", it.impact)}
      ${it.is_deal && dealRows.length ? `<section class="reader-sec"><h4>Deal${it.update ? ` · antes: ${esc(it.update.from)} (${esc(fmtDay(it.update.date))})` : ""}</h4>
        <dl class="deal-grid">${dealRows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl></section>` : ""}
      ${(it.entities || []).length ? `<section class="reader-sec"><h4>Quem está na notícia</h4><div class="chips-plain">${it.entities.map((e) => { const k = companyOf(e); return k ? `<a class="chip-cia" href="${ciaHref(k)}">${icon("cias", "ic ic-sm")}${esc(e)}</a>` : `<button type="button" data-search="${esc(e)}">${esc(e)}</button>`; }).join("")}</div></section>` : ""}
      <section class="reader-sec"><h4>Leia nos veículos</h4>
        <div class="outlets">${it.outlets.map((o) => `<a href="${safeUrl(o.link)}" target="_blank" rel="noopener">${esc(o.source)}${icon("ext")}</a>`).join("")}</div></section>
      ${it.title && it.title !== it.headline ? `<p class="muted small">Título original: ${esc(it.title)}</p>` : ""}`;
  }

  const itemLink = (id) => `${location.origin}${location.pathname}#n/${id}@${state.edition || state.digest?.date || ""}`;
  function itemText(it) {
    if (!it) return "";
    const src = it.outlets[0] || {};
    return [`*${it.headline}*`, it.summary, it.impact ? `Impacto: ${it.impact}` : "", `${src.source || ""}: ${src.link || it.link}`, `Portal FPM: ${itemLink(it.id)}`].filter(Boolean).join("\n\n");
  }
  function copyText(t, msg) {
    navigator.clipboard.writeText(t).then(() => toast(msg), () => toast("Não consegui copiar"));
  }

  function readerStep(dir) {
    const i = reader.list.indexOf(reader.id) + dir;
    if (i < 0 || i >= reader.list.length) return;
    reader.id = reader.list[i];
    state.read.add(reader.id); persist();
    renderReader();
    $("#reader-body").scrollTop = 0;
    rerenderLists();
  }

  function filtered() {
    const d = state.digest;
    const q = fold($("#q").value.trim());
    const minImp = +$("#minimp").value;
    const region = $("#region").value;
    const onlyUnread = $("#unread").checked;
    const onlySaved = $("#saved").checked;
    const onlyFavs = $("#favs-only").checked;
    const fset = favs();
    let items = d.items.filter((i) =>
      i.importance >= minImp &&
      (!state.cat || i.category === state.cat) &&
      (!region || i.region === region) &&
      (!onlyUnread || !state.read.has(i.id)) &&
      (!onlySaved || state.saved.has(i.id)) &&
      (!onlyFavs || [...(i.entities || []), i.deal?.buyer, i.deal?.target, i.lead?.company].some((e) => e && fset.has(companyOf(e)))) &&
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
    syncSegments();
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
        <td>${ring(i.importance, "sm")}</td>
        <td>${esc(x.type)}</td><td>${ciaLinked(x.buyer)}</td><td>${ciaLinked(x.target)}</td>
        <td>${esc(x.value)}</td><td><span class="stage">${esc(x.stage)}</span>${i.update ? `<div class="muted small">antes: ${esc(i.update.from)} (${esc(fmtDay(i.update.date))})</div>` : ""}</td><td>${esc(x.sector)}</td>
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
  function rerenderLists() {
    renderBrief(); renderFeed(); renderLater();
    renderTabs();
    if ($("#reader").open) renderReader();
  }

  // controles segmentados: escrevem no campo escondido e disparam o mesmo evento dos filtros
  function syncSegments() {
    document.querySelectorAll(".segmented").forEach((seg) => {
      const v = $("#" + seg.dataset.seg).value;
      seg.querySelectorAll("button").forEach((b) => { b.setAttribute("role", "radio"); b.setAttribute("aria-checked", String(b.dataset.v === v)); });
    });
  }
  document.querySelectorAll(".segmented").forEach((seg) => seg.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-v]");
    if (!b) return;
    const field = $("#" + seg.dataset.seg);
    field.value = b.dataset.v;
    if (seg.dataset.seg === "minimp") $("#minimp-val").textContent = b.dataset.v;
    field.dispatchEvent(new Event("input"));
  }));

  function jumpTo(id) {
    const list = [...document.querySelectorAll(`#view-${state.tab} [data-open]`)].map((el) => el.dataset.open);
    openReader(id, list.includes(id) ? list : null);
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-tab],[data-save],[data-read],[data-cat],[data-jump],[data-search],[data-goto],[data-reader],[data-cmdk],[data-more],[data-shortcuts],[data-prefs-open],[data-open]");
    if (!t) return;
    const ds = t.dataset;
    if (ds.tab) return setTab(ds.tab);
    if (ds.goto) return setTab(ds.goto);
    if (ds.cmdk !== undefined) return openCmdk();
    if (ds.more !== undefined) return $("#more").showModal();
    if (ds.shortcuts !== undefined) return $("#shortcuts").showModal();
    if (ds.prefsOpen !== undefined) { $("#more").close(); return openPrefs(); }
    if (ds.reader) {
      if (ds.reader === "close") return $("#reader").close();
      if (ds.reader === "prev") return readerStep(-1);
      if (ds.reader === "next") return readerStep(1);
      if (ds.reader === "save") { toggle(state.saved, reader.id); return rerenderLists(); }
      if (ds.reader === "link") return copyText(itemLink(reader.id), "Link copiado");
      if (ds.reader === "copy") return copyText(itemText(findItem(reader.id)), "Resumo copiado para colar no WhatsApp ou no e-mail");
    }
    if (ds.save) { e.stopPropagation(); toggle(state.saved, ds.save); return rerenderLists(); }
    if (ds.read) { e.stopPropagation(); toggle(state.read, ds.read); return rerenderLists(); }
    if (ds.jump) { e.preventDefault(); return jumpTo(ds.jump); }
    if (ds.search) {
      if ($("#reader").open) $("#reader").close();
      setTab("feed"); $("#q").value = ds.search; state.cat = ""; return renderFeed();
    }
    if (ds.cat !== undefined) {
      if (t.classList.contains("map-row")) setTab("feed");
      state.cat = state.cat === ds.cat ? "" : ds.cat;
      return renderFeed();
    }
    if (ds.open) {
      if (e.target.closest("a")) return;
      const list = [...t.closest(".cards").querySelectorAll("[data-open]")].map((el) => el.dataset.open);
      return openReader(ds.open, list);
    }
  });
  // clique no fundo escuro fecha o leitor e as folhas
  for (const id of ["reader", "more", "shortcuts", "prefs", "cmdk"]) {
    $("#" + id).addEventListener("click", (e) => { if (e.target === e.currentTarget) e.currentTarget.close(); });
  }

  for (const id of ["q", "region", "sort", "unread", "saved", "favs-only"]) $("#" + id).addEventListener("input", () => { state.focus = -1; renderFeed(); });
  $("#base-q").addEventListener("input", renderBase);
  document.addEventListener("click", (e) => { const b = e.target.closest("[data-advq]"); if (b) { $("#base-q").value = b.dataset.advq; renderBase(); } });
  $("#base-sector").addEventListener("input", renderBase);
  $("#base-export").onclick = exportBase;
  for (const id of ["leads-q", "leads-signal", "leads-period", "leads-track", "leads-noadv", "leads-closed"])
    $("#" + id).addEventListener("input", () => { renderLeads(); renderTabs(); });
  $("#leads-export").onclick = exportLeads;
  $("#leads-list").addEventListener("change", (e) => {
    const k = e.target.dataset.track || e.target.dataset.note;
    if (!k) return;
    if (e.target.dataset.track !== undefined) { saveTrack(k, { s: e.target.value }); renderLeads(); renderTabs(); }
    else saveTrack(k, { n: e.target.value.trim() });
  });
  $("#leads-list").addEventListener("click", (e) => {
    const k = e.target.dataset.copylead;
    const l = k && ((state.leads || {}).leads || {})[k];
    if (!l) return;
    navigator.clipboard.writeText(leadText(l)).then(() => toast("Resumo copiado"), () => toast("Não consegui copiar"));
  });
  $("#minimp").addEventListener("input", () => renderFeed());
  $("#btn-refresh").onclick = () => load().then(() => toast("Atualizado"));
  $("#archive").onchange = (e) => { state.edition = e.target.value || null; state.open.clear(); load(); };
  // edição anterior / seguinte (o índice vem do mais novo para o mais antigo)
  function stepEdition(dir) {
    const days = state.archiveDays || [];
    const cur = state.edition || days[0];
    const i = days.indexOf(cur) + dir;
    if (i < 0 || i >= days.length) return;
    state.edition = i === 0 ? null : days[i];
    $("#archive").value = state.edition || "";
    state.open.clear();
    load();
  }
  $("#ed-prev").onclick = () => stepEdition(1);
  $("#ed-next").onclick = () => stepEdition(-1);
  $("#btn-print").onclick = () => { if (state.tab !== "brief") setTab("brief"); setTimeout(() => window.print(), 80); };
  $("#reader").addEventListener("close", () => history.replaceState(null, "", `#${state.tab}`));
  for (const id of ["ag-q", "ag-favs", "ag-kind", "ag-range"]) $("#" + id).addEventListener("input", renderAgenda);
  for (const id of ["of-q", "of-vm", "of-listed", "of-range"]) $("#" + id).addEventListener("input", () => { ofState.shown = 80; renderOfertas(); });
  $("#of-more").onclick = () => { ofState.shown += 120; renderOfertas(); };
  $("#of-export").onclick = exportOfertas;
  document.addEventListener("click", (e) => {
    const lg = e.target.closest("[data-ofq],[data-ofvm]");
    if (!lg) return;
    if (lg.dataset.ofvm) $("#of-vm").value = lg.dataset.ofvm;
    if (lg.dataset.ofq) $("#of-q").value = lg.dataset.ofq;
    ofState.shown = 80;
    renderOfertas();
  });

  // título grande que vira título compacto na barra ao rolar
  new IntersectionObserver(([en]) => document.body.classList.toggle("scrolled", !en.isIntersecting), { rootMargin: "-52px 0px 0px 0px" })
    .observe($("#page-title"));

  // tema
  const applyTheme = (t) => fpmTheme(t);
  applyTheme(store.get("theme", null));
  $("#btn-theme").onclick = () => {
    const dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    applyTheme(next); store.set("theme", next);
  };

  // personalização
  const dlg = $("#prefs");
  function openPrefs() {
    const p = state.prefs;
    $("#pref-boost").value = p.boost.join("\n");
    $("#pref-mute").value = p.mute.join("\n");
    $("#pref-notify").checked = !!p.notify;
    $("#pref-cats").innerHTML = CAT_ORDER.map((c) => `<label>${esc(catName(c))}<input type="range" min="0" max="2" step="0.25" data-cw="${c}" value="${p.catWeight[c] ?? 1}"></label>`).join("");
    dlg.showModal();
  }
  $("#btn-prefs").onclick = openPrefs;
  $("#pref-save").onclick = () => {
    const lines = (s) => s.split("\n").map((x) => x.trim()).filter(Boolean);
    const catWeight = {};
    dlg.querySelectorAll("[data-cw]").forEach((el) => { if (+el.value !== 1) catWeight[el.dataset.cw] = +el.value; });
    state.prefs = { boost: lines($("#pref-boost").value), mute: lines($("#pref-mute").value), catWeight, notify: $("#pref-notify").checked };
    store.set("prefs", state.prefs);
    if (state.prefs.notify && "Notification" in window && Notification.permission === "default") Notification.requestPermission();
    rerenderLists();
  };

  // ---------------------------------------------------------- busca universal (⌘K)
  const cmdk = { sel: 0, opts: [] };
  // pessoas e investidores das companhias abertas (índice montado pelo scripts/perfis.py), carregado na primeira busca
  let peopleIdx = null;
  const loadPeopleIdx = () => {
    peopleIdx = peopleIdx || fetch("data/cias/pessoas.json", { cache: "no-cache" }).then((r) => (r.ok ? r.json() : { p: [] }))
      .then((r) => (r.p || []).map(([s, n, t, nc, k]) => ({ s, n, t, nc, k, f: fold(n) }))).catch(() => []);
    return peopleIdx;
  };
  function openCmdk() {
    if (!state.digest) return;
    loadPeopleIdx().then((l) => { cmdk.people = l; if ($("#cmdk").open && $("#cmdk-q").value.trim()) renderCmdk(); });
    if ($("#more").open) $("#more").close();
    $("#cmdk-q").value = "";
    renderCmdk();
    $("#cmdk").showModal();
    $("#cmdk-q").focus();
  }
  function renderCmdk() {
    const q = fold($("#cmdk-q").value.trim());
    const has = (s) => !q || fold(s).includes(q);
    const groups = [];
    const tabs = tabsAvailable().filter((t) => has(t.label)).map((t) => ({ ic: icon(t.icon), title: t.label, sub: "Ir para a aba", run: () => setTab(t.id) }));
    if (has("Documentos CVM fatos relevantes")) tabs.push({ ic: icon("docs"), title: "Documentos CVM", sub: "Fatos relevantes e comunicados de todas as companhias", run: () => { location.href = "cias.html#docs"; } });
    if (has("Companhias abertas CVM")) tabs.push({ ic: icon("cias"), title: "Companhias", sub: "Companhias abertas e documentos na CVM", run: () => { location.href = "cias.html"; } });
    const items = [...state.digest.items].filter((i) => q && has(`${i.headline} ${i.title} ${(i.entities || []).join(" ")} ${(i.tags || []).join(" ")}`))
      .sort((a, z) => z.importance - a.importance).slice(0, 8)
      .map((i) => ({ ic: `<span class="opt-ic" style="color:var(--c-${CAT_ORDER.includes(i.category) ? i.category : "outros"})">${i.importance}</span>`, raw: true, title: i.headline, sub: `${catName(i.category)} · ${i.outlets[0].source}`, run: () => openReader(i.id) }));
    const leads = Object.values((state.leads || {}).leads || {}).filter((l) => q && has(`${l.company} ${l.sector} ${l.counterparty} ${l.advisors}`)).slice(0, 5)
      .map((l) => ({ ic: icon("leads"), title: l.company, sub: `Lead · ${l.signal}${l.sector ? ` · ${l.sector}` : ""}`, run: () => { setTab("leads"); $("#leads-q").value = l.company; $("#leads-period").value = "9999"; $("#leads-closed").checked = true; renderLeads(); renderTabs(); } }));
    const deals = Object.values((state.base || {}).deals || {}).filter((d) => q && has(`${d.buyer} ${d.target} ${d.sector} ${d.advisors}`)).slice(0, 5)
      .map((d) => ({ ic: icon("base"), title: `${d.buyer} → ${d.target}`, sub: `Base de deals · ${d.stage}${d.value ? ` · ${d.value}` : ""}`, run: () => { setTab("base"); $("#base-q").value = d.target || d.buyer; renderBase(); } }));
    const ciasHits = Object.entries(cias.resumo).filter(([, r]) => q && (fold(r.nm || "").includes(q) || fold(r.tk || "") === q || fold(r.tk || "").startsWith(q)))
      .sort((a, z) => (fold(z[1].tk || "") === q) - (fold(a[1].tk || "") === q) || (fold(z[1].nm || "").startsWith(q)) - (fold(a[1].nm || "").startsWith(q)) || (z[1].mc || 0) - (a[1].mc || 0)).slice(0, 5)
      .map(([k, r]) => ({ ic: icon("cias"), title: r.nm, sub: ["Companhia", r.tk, r.mc ? `valor de mercado ${brl(r.mc)}` : "", r.nn ? `${r.nn} notícias` : ""].filter(Boolean).join(" · "), run: () => { location.href = ciaHref(k); } }));
    const words = q.split(/\s+/).filter(Boolean);
    const peopleHits = q.length >= 3 ? (cmdk.people || []).filter((r) => words.every((w) => r.f.includes(w)))
      .sort((a, z) => z.f.startsWith(q) - a.f.startsWith(q)).slice(0, 5)
      .map((r) => ({ ic: icon(r.t === "J" ? "cias" : "people"), title: r.n, sub: [r.t === "J" ? "Investidor" : "Pessoa", cias.resumo[r.k]?.nm, r.nc > 1 ? `${r.nc} companhias` : ""].filter(Boolean).join(" · "),
        run: () => { location.href = `cias.html#pessoa/${encodeURIComponent(r.s)}`; } })) : [];
    if (q) {
      if (ciasHits.length) groups.push(["Companhias", ciasHits]);
      if (peopleHits.length) groups.push(["Pessoas", peopleHits]);
      if (items.length) groups.push(["Notícias", items]);
      if (leads.length) groups.push(["Leads", leads]);
      if (deals.length) groups.push(["Base de deals", deals]);
      if (tabs.length) groups.push(["Abas", tabs]);
    } else groups.push(["Abas", tabs]);
    cmdk.opts = groups.flatMap(([, o]) => o);
    cmdk.sel = Math.min(cmdk.sel, Math.max(0, cmdk.opts.length - 1));
    let n = 0;
    $("#cmdk-list").innerHTML = groups.map(([g, opts]) => `<li class="grp" role="presentation">${g}</li>` + opts.map((o) => {
      const i = n++;
      return `<li class="opt" role="option" data-i="${i}" aria-selected="${i === cmdk.sel}">${o.raw ? o.ic : `<span class="opt-ic">${o.ic}</span>`}<span class="opt-txt"><b>${esc(o.title)}</b><span class="sub">${esc(o.sub)}</span></span></li>`;
    }).join("")).join("") || `<li class="none">Nada encontrado para "${esc($("#cmdk-q").value)}".</li>`;
    $("#cmdk-list [aria-selected='true']")?.scrollIntoView({ block: "nearest" });
  }
  function runCmdk(i) {
    const o = cmdk.opts[i];
    if (!o) return;
    $("#cmdk").close();
    o.run();
  }
  $("#cmdk-q").addEventListener("input", () => { cmdk.sel = 0; renderCmdk(); });
  $("#cmdk-q").addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      cmdk.sel = (cmdk.sel + (e.key === "ArrowDown" ? 1 : -1) + cmdk.opts.length) % Math.max(1, cmdk.opts.length);
      renderCmdk();
    } else if (e.key === "Enter") { e.preventDefault(); runCmdk(cmdk.sel); }
    else if (e.key === "Escape") { e.preventDefault(); $("#cmdk").close(); }
  });
  $("#cmdk-list").addEventListener("click", (e) => { const o = e.target.closest(".opt"); if (o) runCmdk(+o.dataset.i); });
  $("#cmdk-list").addEventListener("mousemove", (e) => {
    const o = e.target.closest(".opt");
    if (o && +o.dataset.i !== cmdk.sel) { cmdk.sel = +o.dataset.i; $("#cmdk-list").querySelectorAll(".opt").forEach((x) => x.setAttribute("aria-selected", String(x === o))); }
  });

  // ---------------------------------------------------------- atalhos de teclado
  function feedCards() { return [...document.querySelectorAll("#feed .card")]; }
  function highlightFocus() {
    const cards = feedCards();
    cards.forEach((c, i) => c.classList.toggle("focus", i === state.focus));
    cards[state.focus]?.scrollIntoView({ block: "nearest" }); // j/k pelo teclado: sem rolagem animada
  }
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); return $("#cmdk").open ? $("#cmdk").close() : openCmdk(); }
    if ($("#cmdk").open || dlg.open || $("#more").open || $("#shortcuts").open) return;
    if (e.target.matches("input, textarea, select") || e.metaKey || e.ctrlKey || e.altKey) {
      if (e.key === "Escape" && e.target.id === "q") e.target.blur();
      return;
    }
    const k = e.key;
    if ($("#reader").open) {
      const it = findItem(reader.id);
      if (k === "j" || k === "ArrowDown") { e.preventDefault(); readerStep(1); }
      else if (k === "k" || k === "ArrowUp") { e.preventDefault(); readerStep(-1); }
      else if (k === "s") { toggle(state.saved, reader.id); rerenderLists(); }
      else if (k === "m") { toggle(state.read, reader.id); rerenderLists(); }
      else if (k === "o" && it && /^https?:\/\//i.test(it.link)) window.open(it.link, "_blank", "noopener");
      return;
    }
    if (k === "?") return $("#shortcuts").showModal();
    if (k >= "1" && k <= "8") { const t = tabsAvailable()[+k - 1]; return t && setTab(t.id); }
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
    if (k === "Enter") openReader(id, cards.map((c) => c.dataset.id));
    else if (k === "o") { state.read.add(id); persist(); if (/^https?:\/\//i.test(item.link)) window.open(item.link, "_blank", "noopener"); renderFeed(); }
    else if (k === "m") { toggle(state.read, id); renderFeed(); }
    else if (k === "s") { toggle(state.saved, id); renderFeed(); }
  });

  // auto-atualização
  setInterval(() => { if (!state.edition) load({ silent: true }); }, REFRESH_MS);
  setInterval(updateStatus, 60 * 1000);
  document.addEventListener("visibilitychange", () => { if (!document.hidden && !state.edition) load({ silent: true }); });

  // links compartilháveis: #feed, #leads… ou #n/{id}@{AAAA-MM-DD} abre a notícia de qualquer edição
  async function route() {
    const h = decodeURIComponent(location.hash.replace(/^#/, ""));
    const m = h.match(/^n\/([\w-]+)(?:@(\d{4}-\d{2}-\d{2}))?$/);
    if (m) {
      const [, id, day] = m;
      if (!findItem(id) && day && day !== state.digest?.date) {
        state.edition = (state.archiveDays || [])[0] === day ? null : day;
        $("#archive").value = state.edition || "";
        await load();
      }
      if (findItem(id)) openReader(id);
      return;
    }
    if (TABS.some((t) => t.id === h) && h !== state.tab) setTab(h);
  }
  window.addEventListener("hashchange", route);

  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});

  if (TABS.some((t) => t.id === location.hash.slice(1))) state.tab = location.hash.slice(1);
  loadArchiveIndex();
  load().then(route);
})();
