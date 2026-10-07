/* Portal FPM — Companhias abertas. Lê data/cias/ (gerado pelo GitHub Actions a partir da CVM). */
(() => {
  "use strict";

  const PAGE = 120;
  const store = {
    get(k, d) { try { const v = localStorage.getItem("n1:" + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("n1:" + k, JSON.stringify(v)); } catch { /* modo privado */ } },
  };

  // ---------------------------------------------------------- utilidades
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => (/^https?:\/\//i.test(u || "") ? esc(u) : "#");
  const fold = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const fmtDate = (d) => (d ? `${d.slice(8, 10)}/${d.slice(5, 7)}/${d.slice(0, 4)}` : "");
  const fmtDay = (d) => (d ? `${d.slice(8, 10)}/${d.slice(5, 7)}` : "");
  const iso = (dt) => `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
  const today = () => iso(new Date());
  const addDays = (d, n) => { const dt = new Date(d + "T12:00:00"); dt.setDate(dt.getDate() + n); return iso(dt); };
  const WEEKDAY = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  const plural = (n, s, p) => `${n.toLocaleString("pt-BR")} ${n === 1 ? s : p}`;

  function dayLabel(d) {
    const t = today();
    if (d === t) return "Hoje";
    if (d === addDays(t, -1)) return "Ontem";
    const dt = new Date(d + "T12:00:00");
    const w = WEEKDAY[dt.getDay()];
    return `${w[0].toUpperCase()}${w.slice(1)}, ${fmtDate(d)}`;
  }

  function ago(isoStr) {
    const diff = (Date.now() - new Date(isoStr).getTime()) / 60000;
    if (!isFinite(diff)) return "";
    if (diff < 60) return `há ${Math.max(1, Math.round(diff))} min`;
    if (diff < 60 * 24) return `há ${Math.round(diff / 60)} h`;
    return `em ${new Date(isoStr).toLocaleDateString("pt-BR")}`;
  }

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toast.timer); toast.timer = setTimeout(() => { t.hidden = true; }, 2600);
  }

  // Categorias da CVM: nome curto e cor.
  const CAT_SHORT = {
    "Fato Relevante": "Fato relevante",
    "Comunicado ao Mercado": "Comunicado ao mercado",
    "Aviso aos Acionistas": "Aviso aos acionistas",
    "Reunião da Administração": "Reunião da administração",
    "Valores Mobiliários negociados e detidos (art. 11 da Instr. CVM nº 358)": "Negociação por administradores",
    "Dados Econômico-Financeiros": "Dados econômico-financeiros",
    "Documentos de Oferta de Distribuição Pública": "Oferta pública",
    "Escrituras e aditamentos de debêntures": "Escritura de debêntures",
    "Informações de Companhias em Recuperação Judicial ou Extrajudicial": "Recuperação judicial",
    "Comunicação sobre Transação entre Partes Relacionadas": "Partes relacionadas",
    "Calendário de Eventos Corporativos": "Calendário de eventos",
  };
  const CAT_COLOR = {
    "Fato Relevante": "var(--hot)",
    "Comunicado ao Mercado": "var(--c-mna)",
    "Aviso aos Acionistas": "var(--c-mercados)",
    "Assembleia": "var(--c-macro)",
    "Reunião da Administração": "var(--c-internacional)",
    "Dados Econômico-Financeiros": "var(--c-empresas)",
    "Documentos de Oferta de Distribuição Pública": "var(--c-politica)",
  };
  const catShort = (c) => CAT_SHORT[c] || c;
  const catColor = (c) => CAT_COLOR[c] || "var(--c-outros)";

  // ---------------------------------------------------------- estado
  const state = {
    index: null,
    byK: new Map(),
    months: new Map(), // "AAAA-MM" -> Promise<docs>
    emp: new Map(), // código -> Promise<docs>
    favs: new Set(store.get("cias-fav", [])),
    view: "docs",
    cia: null,
    docs: { cats: new Set(store.get("cias-cats", null) || []), tema: "", shown: PAGE, rows: [] },
    dir: { shown: 60 },
    ent: { cats: new Set(), tema: "", shown: PAGE, rows: [], all: [] },
  };
  const saveFavs = () => store.set("cias-fav", [...state.favs]);

  const fetchJson = (url) => fetch(url, { cache: "no-cache" }).then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); });
  const loadMonth = (m) => {
    if (!state.months.has(m)) state.months.set(m, fetchJson(`data/cias/mes/${m}.json`).catch(() => []));
    return state.months.get(m);
  };
  const loadEmp = (k) => {
    if (!state.emp.has(k)) state.emp.set(k, fetchJson(`data/cias/emp/${k}.json`).catch(() => []));
    return state.emp.get(k);
  };

  const ciaName = (c) => c.nc || c.n;
  const docUrl = (d) => {
    if (d.u) return d.u;
    const [seq, ver] = String(d.q || "").split(".");
    return `https://www.rad.cvm.gov.br/ENET/frmDownloadDocumento.aspx?Tela=ext&descTipo=IPE&CodigoInstituicao=1&numProtocolo=${d.id}&numSequencia=${seq}&numVersao=${ver || 1}`;
  };
  const docTitle = (d) => d.s || d.e || d.t || catShort(d.c);
  const docText = (d) => fold([d.s, d.e, d.t, d.c, d.n, d.tr, d.sm?.resumo, (d.sm?.pontos || []).join(" ")].join(" "));

  // ---------------------------------------------------------- renderização de documentos
  function tickersHtml(c) {
    return (c?.tk || []).slice(0, 4).map((t) => `<span class="tk">${esc(t)}</span>`).join("");
  }

  function docHtml(d, withCompany) {
    const c = withCompany ? state.byK.get(d.k) : null;
    const sub = [d.t, d.e && d.e !== d.s ? d.e : "", d.r && d.r !== d.d ? `referência ${fmtDate(d.r)}` : ""].filter(Boolean);
    const sm = d.sm;
    const body = sm
      ? `<div class="doc-sum"><p>${esc(sm.resumo)}</p>${(sm.pontos || []).length ? `<ul>${sm.pontos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}</div>`
      : d.tr ? `<p class="doc-excerpt"><span>Trecho do documento</span>${esc(d.tr)}</p>` : "";
    return `<article class="doc" style="--dc: ${catColor(d.c)}">
      <div class="doc-time">${d.h ? esc(d.h) : ""}</div>
      <div class="doc-main">
        <div class="doc-top">
          <span class="doc-cat">${esc(catShort(d.c))}</span>
          ${sm?.tema ? `<span class="tema">${esc(sm.tema)}</span>` : ""}
          ${withCompany ? `<a class="doc-cia" href="#cia/${esc(d.k)}">${esc(c ? ciaName(c) : d.n)}</a>${tickersHtml(c)}` : ""}
        </div>
        <h4 class="doc-title"><a href="${safeUrl(docUrl(d))}" target="_blank" rel="noopener">${esc(docTitle(d))}</a></h4>
        ${sub.length ? `<div class="doc-sub">${sub.map(esc).join(" · ")}</div>` : ""}
        ${body}
      </div>
      <a class="doc-open" href="${safeUrl(docUrl(d))}" target="_blank" rel="noopener" title="Abrir o documento original (PDF)">PDF ↗</a>
    </article>`;
  }

  function renderDays(el, rows, shown, withCompany) {
    if (!rows.length) { el.innerHTML = `<div class="empty">Nenhum documento com esses filtros.</div>`; return; }
    const out = [];
    let cur = null;
    for (const d of rows.slice(0, shown)) {
      if (d.d !== cur) {
        if (cur) out.push("</div></div>");
        cur = d.d;
        const n = rows.filter((x) => x.d === cur).length;
        out.push(`<div class="doc-day"><h3 class="day-head"><span>${esc(dayLabel(cur))}</span><span class="muted">${plural(n, "documento", "documentos")}</span></h3><div class="doc-list">`);
      }
      out.push(docHtml(d, withCompany));
    }
    out.push("</div></div>");
    el.innerHTML = out.join("");
  }

  function catChips(el, counts, selected, onChange) {
    const main = state.index.summary_cats;
    const allOn = selected.size === 0;
    const mainOn = selected.size === main.length && main.every((c) => selected.has(c));
    const list = counts.filter(([c]) => c).slice(0, 14);
    el.innerHTML = `<button class="chip" data-preset="main" aria-pressed="${mainOn}">Principais</button>
      <button class="chip" data-preset="all" aria-pressed="${allOn}">Todos</button><span class="chip-sep"></span>` +
      list.map(([c, n]) => `<button class="chip cat-chip" data-cat="${esc(c)}" style="--dc: ${catColor(c)}" aria-pressed="${!allOn && selected.has(c)}">${esc(catShort(c))}<span class="n">${n.toLocaleString("pt-BR")}</span></button>`).join("");
    el.onclick = (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      if (b.dataset.preset === "all") selected.clear();
      else if (b.dataset.preset === "main") { selected.clear(); main.forEach((c) => selected.add(c)); }
      else { const c = b.dataset.cat; if (selected.has(c)) selected.delete(c); else selected.add(c); }
      onChange();
    };
  }

  function temaChips(el, rows, current, onPick) {
    const counts = new Map();
    for (const d of rows) if (d.sm?.tema) counts.set(d.sm.tema, (counts.get(d.sm.tema) || 0) + 1);
    const temas = (state.index.temas || []).filter((t) => counts.has(t));
    el.innerHTML = temas.length
      ? `<button class="chip" data-tema="" aria-pressed="${!current}">Todos</button>` +
        temas.map((t) => `<button class="chip" data-tema="${esc(t)}" aria-pressed="${current === t}">${esc(t)}<span class="n">${counts.get(t)}</span></button>`).join("")
      : `<span class="muted small">Os temas aparecem conforme os documentos ganham resumo.</span>`;
    el.onclick = (e) => { const b = e.target.closest("[data-tema]"); if (b) onPick(b.dataset.tema); };
  }

  // ---------------------------------------------------------- aba Documentos
  function docsRange() {
    const p = $("#d-period").value;
    const t = today();
    if (p === "custom") return [$("#d-from").value || addDays(t, -30), $("#d-to").value || t];
    return [addDays(t, -Number(p) + (p === "1" ? 0 : 1)), t];
  }

  let docsSeq = 0;
  async function renderDocs() {
    const seq = ++docsSeq;
    const [from, to] = docsRange();
    const months = state.index.months.filter((m) => m >= from.slice(0, 7) && m <= to.slice(0, 7));
    $("#d-count").textContent = "Carregando documentos…";
    const parts = await Promise.all(months.map(loadMonth));
    if (seq !== docsSeq) return;
    let rows = parts.flat().filter((d) => d.d >= from && d.d <= to);
    // contagem por categoria antes do filtro de categoria
    const counts = new Map();
    for (const d of rows) counts.set(d.c, (counts.get(d.c) || 0) + 1);
    const s = state.docs;
    catChips($("#d-cats"), [...counts].sort((a, b) => b[1] - a[1]), s.cats, () => { store.set("cias-cats", [...s.cats]); s.shown = PAGE; renderDocs(); });
    if (s.cats.size) rows = rows.filter((d) => s.cats.has(d.c));
    if ($("#d-listed").checked) rows = rows.filter((d) => (state.byK.get(d.k)?.tk || []).length);
    if ($("#d-favs").checked) rows = rows.filter((d) => state.favs.has(d.k));
    temaChips($("#d-temas"), rows, s.tema, (t) => { s.tema = t; s.shown = PAGE; renderDocs(); });
    if ($("#d-sum").checked) rows = rows.filter((d) => d.sm);
    if (s.tema) rows = rows.filter((d) => d.sm?.tema === s.tema);
    const q = fold($("#d-q").value.trim());
    if (q) rows = rows.filter((d) => q.split(/\s+/).every((w) => docText(d).includes(w)));
    rows.sort((a, b) => (b.d + (b.h || "")).localeCompare(a.d + (a.h || "")));
    s.rows = rows;
    const nCias = new Set(rows.map((d) => d.k)).size;
    $("#d-count").textContent = `${plural(rows.length, "documento", "documentos")} de ${plural(nCias, "companhia", "companhias")} · ${fmtDate(from)} a ${fmtDate(to)}`;
    renderDays($("#d-list"), rows, s.shown, true);
    $("#d-more").hidden = rows.length <= s.shown;
  }

  function exportCsv(rows, name) {
    const head = ["Data", "Hora", "Companhia", "Tickers", "Categoria", "Tipo", "Espécie", "Assunto", "Tema", "Resumo", "Link"];
    const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const lines = rows.map((d) => {
      const c = state.byK.get(d.k);
      return [fmtDate(d.d), d.h, c ? ciaName(c) : d.n, (c?.tk || []).join(" "), d.c, d.t, d.e, d.s, d.sm?.tema, d.sm?.resumo, docUrl(d)].map(cell).join(";");
    });
    const blob = new Blob(["﻿" + [head.map(cell).join(";"), ...lines].join("\r\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  // ---------------------------------------------------------- aba Companhias
  function renderDir() {
    const all = state.index.companies;
    const q = fold($("#c-q").value.trim());
    const setor = $("#c-setor").value, seg = $("#c-seg").value, sort = $("#c-sort").value;
    let rows = all.filter((c) => (!$("#c-listed").checked || c.tk.length) && (!setor || c.st === setor) && (!seg || c.sg === seg));
    if (q) rows = rows.filter((c) => q.split(/\s+/).every((w) => fold([c.n, c.nc, c.tk.join(" "), c.st, c.at, c.mun, c.uf, c.cnpj].join(" ")).includes(w)));
    const by = {
      act: (a, b) => b.n12 - a.n12,
      fr: (a, b) => b.fr12 - a.fr12 || b.n12 - a.n12,
      last: (a, b) => (b.last || "").localeCompare(a.last || ""),
      name: (a, b) => ciaName(a).localeCompare(ciaName(b), "pt-BR"),
    }[sort];
    rows.sort(by);
    $("#c-count").textContent = plural(rows.length, "companhia", "companhias");
    $("#c-grid").innerHTML = rows.slice(0, state.dir.shown).map((c) => `
      <article class="cia-card card" data-open="${esc(c.k)}" tabindex="0">
        <button class="star" data-fav="${esc(c.k)}" aria-pressed="${state.favs.has(c.k)}" title="Acompanhar">${state.favs.has(c.k) ? "★" : "☆"}</button>
        <div class="cia-card-name">${esc(ciaName(c))}</div>
        <div class="cia-card-tags">${tickersHtml(c)}${c.sg ? `<span class="seg">${esc(c.sg)}</span>` : ""}</div>
        <div class="cia-card-sector">${esc(c.st || "Setor não informado")}</div>
        <div class="cia-card-foot">
          <span><b>${c.n12}</b> docs em 12m</span>
          <span><b class="hot">${c.fr12}</b> fatos relevantes</span>
          <span>${c.last ? `último ${esc(fmtDay(c.last))}` : "sem documentos"}</span>
        </div>
      </article>`).join("") || `<div class="empty">Nenhuma companhia com esses filtros.</div>`;
    $("#c-more").hidden = rows.length <= state.dir.shown;
  }

  // ---------------------------------------------------------- uma companhia
  function activityChart(docs) {
    const t = today();
    const months = [];
    const dt = new Date(t.slice(0, 7) + "-15T12:00:00");
    for (let i = 59; i >= 0; i--) {
      const m = new Date(dt); m.setMonth(dt.getMonth() - i);
      months.push(iso(m).slice(0, 7));
    }
    const tot = new Map(), fr = new Map();
    for (const d of docs) {
      const m = d.d.slice(0, 7);
      tot.set(m, (tot.get(m) || 0) + 1);
      if (d.c === "Fato Relevante") fr.set(m, (fr.get(m) || 0) + 1);
    }
    const max = Math.max(1, ...months.map((m) => tot.get(m) || 0));
    $("#cia-chart").innerHTML = `<div class="bars">${months.map((m) => {
      const n = tot.get(m) || 0, f = fr.get(m) || 0;
      const label = `${MONTHS[+m.slice(5) - 1]}/${m.slice(2, 4)}: ${plural(n, "documento", "documentos")}${f ? `, ${plural(f, "fato relevante", "fatos relevantes")}` : ""}`;
      return `<button class="bar" data-month="${m}" title="${esc(label)}" aria-label="${esc(label)}">
        <span class="bar-col" style="height:${(n / max) * 100}%"><span class="bar-fr" style="height:${n ? (f / n) * 100 : 0}%"></span></span>
        <span class="bar-x">${m.slice(5) === "01" ? m.slice(0, 4) : ""}</span></button>`;
    }).join("")}</div><div class="bar-range"><span>${MONTHS[+months[0].slice(5) - 1]}/${months[0].slice(2, 4)}</span><span>${MONTHS[+months[59].slice(5) - 1]}/${months[59].slice(2, 4)}</span></div>`;
    $("#cia-chart-note").innerHTML = `<span class="key key-all"></span> todos os documentos <span class="key key-fr"></span> fatos relevantes · clique num mês para filtrar`;
    $("#cia-chart").onclick = (e) => {
      const b = e.target.closest("[data-month]");
      if (!b) return;
      const m = b.dataset.month;
      const last = new Date(+m.slice(0, 4), +m.slice(5), 0).getDate();
      $("#e-from").value = `${m}-01`; $("#e-to").value = `${m}-${String(last).padStart(2, "0")}`;
      state.ent.shown = PAGE; renderEntDocs();
    };
  }

  function renderCiaHead(c, docs) {
    const yearAgo = addDays(today(), -365);
    const recent = docs.filter((d) => d.d >= yearAgo);
    const last = docs[0];
    const fav = state.favs.has(c.k);
    $("#cia-head").innerHTML = `
      <div class="cia-hero card">
        <div class="cia-title">
          <div>
            <div class="cia-tags">${tickersHtml(c)}${c.sg ? `<span class="seg">${esc(c.sg)}</span>` : ""}${c.sit && c.sit !== "ATIVO" ? `<span class="seg warn">Registro ${esc(c.sit.toLowerCase())}</span>` : ""}</div>
            <h2>${esc(ciaName(c))}</h2>
            <p class="muted">${esc(c.n)}${c.st ? ` · ${esc(c.st)}` : ""}</p>
          </div>
          <button class="ctl ${fav ? "primary" : ""}" data-fav="${esc(c.k)}">${fav ? "★ Acompanhando" : "☆ Acompanhar"}</button>
        </div>
        <div class="stat-row">
          <div class="stat"><b>${recent.length.toLocaleString("pt-BR")}</b><span>documentos em 12 meses</span></div>
          <div class="stat"><b class="hot">${recent.filter((d) => d.c === "Fato Relevante").length}</b><span>fatos relevantes em 12 meses</span></div>
          <div class="stat"><b>${last ? esc(fmtDay(last.d)) : "—"}</b><span>${last ? esc(catShort(last.c).toLowerCase()) + " mais recente" : "sem documentos"}</span></div>
          <div class="stat"><b>${docs.length.toLocaleString("pt-BR")}</b><span>documentos na base desde ${esc(docs.length ? fmtDate(docs[docs.length - 1].d).slice(3) : "—")}</span></div>
        </div>
      </div>`;
    const web = c.web ? (/^https?:/.test(c.web) ? c.web : "https://" + c.web) : "";
    const facts = [
      ["Código CVM", c.k], ["CNPJ", c.cnpj], ["Atividade", c.at], ["Sede", [c.mun, c.uf].filter(Boolean).join(" / ")],
      ["Controle", c.ctl], ["Registro", [c.cat, c.sit && c.sit.toLowerCase()].filter(Boolean).join(" · ")],
      ["Situação", c.se], ["Auditor", c.aud], ["Diretor de RI", c.dri],
    ].filter(([, v]) => v);
    $("#cia-facts").innerHTML = facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("") +
      (web ? `<dt>Site</dt><dd><a href="${safeUrl(web)}" target="_blank" rel="noopener">${esc(c.web.replace(/^https?:\/\//, ""))} ↗</a></dd>` : "");
    activityChart(docs);
  }

  function renderEntDocs() {
    const s = state.ent;
    let rows = s.all;
    const counts = new Map();
    for (const d of rows) counts.set(d.c, (counts.get(d.c) || 0) + 1);
    catChips($("#e-cats"), [...counts].sort((a, b) => b[1] - a[1]), s.cats, () => { s.shown = PAGE; renderEntDocs(); });
    if (s.cats.size) rows = rows.filter((d) => s.cats.has(d.c));
    const from = $("#e-from").value, to = $("#e-to").value;
    if (from) rows = rows.filter((d) => d.d >= from);
    if (to) rows = rows.filter((d) => d.d <= to);
    temaChips($("#e-temas"), rows, s.tema, (t) => { s.tema = t; s.shown = PAGE; renderEntDocs(); });
    if (s.tema) rows = rows.filter((d) => d.sm?.tema === s.tema);
    const q = fold($("#e-q").value.trim());
    if (q) rows = rows.filter((d) => q.split(/\s+/).every((w) => docText(d).includes(w)));
    s.rows = rows;
    $("#e-count").textContent = `${plural(rows.length, "documento", "documentos")}${from || to ? ` · ${from ? fmtDate(from) : "início"} a ${to ? fmtDate(to) : "hoje"}` : ""}`;
    renderDays($("#e-list"), rows, s.shown, false);
    $("#e-more").hidden = rows.length <= s.shown;
  }

  async function openCia(k) {
    const c = state.byK.get(k);
    if (!c) { location.hash = "#cias"; return; }
    state.cia = k;
    const tab = $("#tab-cia");
    tab.hidden = false; tab.textContent = ciaName(c); tab.href = `#cia/${k}`;
    document.title = `${ciaName(c)} · Companhias · Portal FPM`;
    $("#cia-head").innerHTML = `<div class="card muted">Carregando ${esc(ciaName(c))}…</div>`;
    $("#e-list").innerHTML = "";
    const docs = (await loadEmp(k)).map((d) => ({ ...d, k }));
    docs.sort((a, b) => (b.d + (b.h || "")).localeCompare(a.d + (a.h || "")));
    if (state.cia !== k) return;
    Object.assign(state.ent, { all: docs, cats: new Set(), tema: "", shown: PAGE });
    $("#e-q").value = ""; $("#e-from").value = ""; $("#e-to").value = "";
    renderCiaHead(c, docs);
    renderEntDocs();
  }

  // ---------------------------------------------------------- busca de companhias e favoritas
  function searchCias(q) {
    const f = fold(q.trim());
    if (!f) return [];
    const digits = f.replace(/\D/g, "");
    const scored = [];
    for (const c of state.index.companies) {
      const name = fold(ciaName(c)), legal = fold(c.n), tks = c.tk.map(fold);
      let s = 0;
      if (tks.includes(f)) s = 100;
      else if (tks.some((t) => t.startsWith(f))) s = 80;
      else if (name.startsWith(f) || legal.startsWith(f)) s = 60;
      else if (name.includes(f) || legal.includes(f)) s = 40;
      else if (digits.length >= 4 && c.cnpj.replace(/\D/g, "").startsWith(digits)) s = 50;
      else if (f.split(/\s+/).every((w) => (name + " " + legal + " " + tks.join(" ")).includes(w))) s = 30;
      if (s) scored.push([s + Math.min(c.n12, 200) / 100 + (c.tk.length ? 5 : 0), c]);
    }
    return scored.sort((a, b) => b[0] - a[0]).slice(0, 8).map(([, c]) => c);
  }

  let finderSel = 0, finderRows = [];
  function renderFinder() {
    const list = $("#finder-list");
    finderRows = searchCias($("#finder").value);
    finderSel = Math.min(finderSel, Math.max(0, finderRows.length - 1));
    list.hidden = !$("#finder").value.trim();
    $("#finder").setAttribute("aria-expanded", String(!list.hidden));
    list.innerHTML = finderRows.map((c, i) => `
      <li role="option" aria-selected="${i === finderSel}" data-k="${esc(c.k)}">
        <span class="fi-name">${esc(ciaName(c))}</span>${tickersHtml(c)}
        <span class="fi-meta">${esc(c.st || "")}${c.last ? ` · último documento ${esc(fmtDay(c.last))}` : ""}</span>
      </li>`).join("") || `<li class="fi-empty">Nenhuma companhia encontrada.</li>`;
  }
  function pickFinder(k) {
    $("#finder").value = ""; $("#finder-list").hidden = true; $("#finder").blur();
    location.hash = `#cia/${k}`;
  }

  function renderFavs() {
    const favs = [...state.favs].map((k) => state.byK.get(k)).filter(Boolean);
    $("#favs").innerHTML = favs.length
      ? `<span class="fl-label">Minhas companhias</span>` + favs.map((c) => `<a class="chip fav-chip" href="#cia/${esc(c.k)}">${esc(ciaName(c))}${c.tk[0] ? `<span class="n">${esc(c.tk[0])}</span>` : ""}</a>`).join("")
      : `<span class="muted small">Marque ☆ nas companhias que você acompanha para tê-las sempre aqui.</span>`;
  }

  function toggleFav(k) {
    if (state.favs.has(k)) state.favs.delete(k); else state.favs.add(k);
    saveFavs();
    renderFavs();
    const c = state.byK.get(k);
    toast(state.favs.has(k) ? `${ciaName(c)} adicionada às suas companhias` : `${ciaName(c)} removida das suas companhias`);
    if (state.view === "cias") renderDir();
    if (state.view === "cia" && state.cia === k) {
      const b = $(`#cia-head [data-fav]`);
      b.classList.toggle("primary", state.favs.has(k));
      b.textContent = state.favs.has(k) ? "★ Acompanhando" : "☆ Acompanhar";
    }
    if (state.view === "docs" && $("#d-favs").checked) renderDocs();
  }

  // ---------------------------------------------------------- navegação
  function route() {
    const h = location.hash.replace(/^#/, "");
    const [view, k] = h.split("/");
    state.view = view === "cia" && k ? "cia" : view === "cias" ? "cias" : "docs";
    for (const v of ["docs", "cias", "cia"]) $(`#view-${v}`).hidden = state.view !== v;
    for (const a of document.querySelectorAll("#tabs .tab")) a.setAttribute("aria-selected", String(a.dataset.view === state.view));
    if (state.view !== "cia") document.title = "Companhias · Portal FPM";
    if (state.view === "docs") renderDocs();
    else if (state.view === "cias") renderDir();
    else openCia(k);
    window.scrollTo({ top: 0 });
  }

  function wire() {
    const debounce = (fn, ms = 180) => { let t; return () => { clearTimeout(t); t = setTimeout(fn, ms); }; };
    const docsAgain = () => { state.docs.shown = PAGE; renderDocs(); };
    $("#d-period").onchange = () => { $("#d-custom").hidden = $("#d-period").value !== "custom"; docsAgain(); };
    for (const id of ["#d-from", "#d-to", "#d-listed", "#d-favs", "#d-sum"]) $(id).onchange = docsAgain;
    $("#d-q").oninput = debounce(docsAgain);
    $("#d-more").onclick = () => { state.docs.shown += PAGE; renderDocs(); };
    $("#d-export").onclick = () => exportCsv(state.docs.rows, `cvm-documentos-${today()}.csv`);

    const dirAgain = () => { state.dir.shown = 60; renderDir(); };
    $("#c-q").oninput = debounce(dirAgain);
    for (const id of ["#c-setor", "#c-seg", "#c-sort", "#c-listed"]) $(id).onchange = dirAgain;
    $("#c-more").onclick = () => { state.dir.shown += 60; renderDir(); };

    const entAgain = () => { state.ent.shown = PAGE; renderEntDocs(); };
    $("#e-q").oninput = debounce(entAgain);
    $("#e-from").onchange = entAgain; $("#e-to").onchange = entAgain;
    $("#e-more").onclick = () => { state.ent.shown += PAGE; renderEntDocs(); };

    document.addEventListener("click", (e) => {
      const f = e.target.closest("[data-fav]");
      if (f) { e.preventDefault(); e.stopPropagation(); toggleFav(f.dataset.fav); return; }
      const card = e.target.closest("[data-open]");
      if (card) { location.hash = `#cia/${card.dataset.open}`; return; }
      const li = e.target.closest("#finder-list li[data-k]");
      if (li) pickFinder(li.dataset.k);
      else if (!e.target.closest(".finder")) $("#finder-list").hidden = true;
    });
    $("#finder").oninput = () => { finderSel = 0; renderFinder(); };
    $("#finder").onfocus = () => { if ($("#finder").value.trim()) renderFinder(); };
    $("#finder").onkeydown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        finderSel = (finderSel + (e.key === "ArrowDown" ? 1 : -1) + finderRows.length) % Math.max(1, finderRows.length);
        renderFinder();
      } else if (e.key === "Enter" && finderRows[finderSel]) pickFinder(finderRows[finderSel].k);
      else if (e.key === "Escape") { $("#finder-list").hidden = true; $("#finder").blur(); }
    };
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && document.activeElement?.dataset?.open) { location.hash = `#cia/${document.activeElement.dataset.open}`; return; }
      if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); $("#finder").focus(); }
    });

    const applyTheme = (t) => { if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; };
    $("#btn-theme").onclick = () => {
      const dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      const next = dark ? "light" : "dark";
      applyTheme(next); store.set("theme", next);
    };
    window.addEventListener("hashchange", route);
  }

  async function init() {
    wire();
    try {
      state.index = await fetchJson("data/cias/index.json");
    } catch {
      $("#dateline").textContent = "Base indisponível";
      $("#banner").hidden = false;
      $("#banner").textContent = "A base de companhias ainda não foi gerada. Ela é montada a cada atualização do portal; tente de novo em alguns minutos.";
      return;
    }
    const idx = state.index;
    for (const c of idx.companies) state.byK.set(c.k, c);
    if (state.docs.cats.size === 0 && store.get("cias-cats", null) === null) idx.summary_cats.forEach((c) => state.docs.cats.add(c));
    const listed = idx.companies.filter((c) => c.tk.length).length;
    $("#dateline").textContent = `${plural(idx.companies.length, "companhia", "companhias")} · ${listed} listadas na B3 · atualizada ${ago(idx.generated_at)}`;
    $("#footer-gen").textContent = `Dados abertos da CVM até ${fmtDate(idx.status?.dados_abertos_ate)}; dias seguintes pela consulta em tempo real.`;
    if (typeof idx.status?.tempo_real === "string") {
      $("#banner").hidden = false;
      $("#banner").textContent = `A consulta em tempo real da CVM não respondeu na última atualização; documentos entregues depois de ${fmtDate(idx.status.dados_abertos_ate)} podem faltar.`;
    }
    const opts = (vals) => [...new Set(vals.filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR")).map((v) => `<option>${esc(v)}</option>`).join("");
    $("#c-setor").insertAdjacentHTML("beforeend", opts(idx.companies.map((c) => c.st)));
    $("#c-seg").insertAdjacentHTML("beforeend", opts(idx.companies.map((c) => c.sg)));
    renderFavs();
    route();
  }

  init();
})();
