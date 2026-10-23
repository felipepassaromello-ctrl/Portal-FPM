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
  const fmtMonth = (d) => (d ? `${MONTHS[+d.slice(5, 7) - 1]}/${d.slice(2, 4)}` : "");
  const iso = (dt) => `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
  const today = () => iso(new Date());
  const addDays = (d, n) => { const dt = new Date(d + "T12:00:00"); dt.setDate(dt.getDate() + n); return iso(dt); };
  const WEEKDAY = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  const plural = (n, s, p) => `${n.toLocaleString("pt-BR")} ${n === 1 ? s : p}`;
  const nf = (v, d = 0) => Number(v).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const icon = (name, cls = "ic") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const isNum = (v) => typeof v === "number" && isFinite(v);

  // R$ abreviado: 1,2 tri · 34,5 bi · 812 mi · 45 mil
  function brl(v, { sign = false, unit = "R$ " } = {}) {
    if (!isNum(v)) return "–";
    const a = Math.abs(v), s = v < 0 ? "−" : sign && v > 0 ? "+" : "";
    const f = (x, suf) => `${s}${unit}${nf(x, x >= 100 ? 0 : 1)} ${suf}`;
    if (a >= 1e12) return f(a / 1e12, "tri");
    if (a >= 1e9) return f(a / 1e9, "bi");
    if (a >= 1e6) return f(a / 1e6, "mi");
    if (a >= 1e3) return f(a / 1e3, "mil");
    return `${s}${unit}${nf(a, 0)}`;
  }
  const pct = (v, d = 1, sign = false) => (isNum(v) ? `${sign && v > 0 ? "+" : v < 0 ? "−" : ""}${nf(Math.abs(v), d)}%` : "–");
  const mult = (v) => (isNum(v) ? `${nf(v, 1)}x` : "–");
  const ratio = (a, b) => (isNum(a) && isNum(b) && b !== 0 ? a / b : null);

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
    resumo: {},
    byK: new Map(),
    months: new Map(), // "AAAA-MM" -> Promise<docs>
    emp: new Map(), // código -> Promise<docs>
    perfil: new Map(), // código -> Promise<perfil>
    favs: new Set(store.get("cias-fav", [])),
    view: "cias",
    cia: null,
    pane: "geral",
    docs: { cats: new Set(store.get("cias-cats", null) || []), tema: "", shown: PAGE, rows: [] },
    dir: { shown: 60 },
    ent: { cats: new Set(), tema: "", shown: PAGE, rows: [], all: [] },
  };
  const saveFavs = () => store.set("cias-fav", [...state.favs]);

  const fetchJson = (url) => fetch(url, { cache: "no-cache" }).then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); });
  const memo = (map, k, url, dflt) => {
    if (!map.has(k)) map.set(k, fetchJson(url).catch(() => dflt));
    return map.get(k);
  };
  const loadMonth = (m) => memo(state.months, m, `data/cias/mes/${m}.json`, []);
  const loadEmp = (k) => memo(state.emp, k, `data/cias/emp/${k}.json`, []);
  const loadPerfil = (k) => memo(state.perfil, k, `data/cias/perfil/${k}.json`, {});

  const ciaName = (c) => state.resumo[c.k]?.nm || c.nc || c.n;
  const docUrl = (d) => {
    if (d.u) return d.u;
    const [seq, ver] = String(d.q || "").split(".");
    return `https://www.rad.cvm.gov.br/ENET/frmDownloadDocumento.aspx?Tela=ext&descTipo=IPE&CodigoInstituicao=1&numProtocolo=${d.id}&numSequencia=${seq}&numVersao=${ver || 1}`;
  };
  const docTitle = (d) => d.s || d.e || d.t || catShort(d.c);
  const docText = (d) => fold([d.s, d.e, d.t, d.c, d.n, d.tr, d.sm?.resumo, (d.sm?.pontos || []).join(" ")].join(" "));
  const ciaLink = (k, label) => (state.byK.has(k) ? `<a class="cia-link" href="#cia/${esc(k)}">${esc(label || ciaName(state.byK.get(k)))}</a>` : esc(label || ""));

  // logo pelo ticker (ícones públicos da brapi); sem logo, monograma com as iniciais
  function logoHtml(c, size = "") {
    const r = state.resumo[c.k] || {};
    const tk = r.tk || (c.tk || [])[0];
    const initials = ciaName(c).replace(/[^A-Za-zÀ-ÿ0-9 ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
    const hue = [...c.k].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) % 360, 7);
    return `<span class="cia-logo ${size}" style="--h:${hue}"><span>${esc(initials || "?")}</span>${tk ? `<img src="https://icons.brapi.dev/icons/${esc(tk)}.svg" alt="" loading="lazy" onerror="this.remove()">` : ""}</span>`;
  }

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
      <a class="doc-open" href="${safeUrl(docUrl(d))}" target="_blank" rel="noopener" title="Abrir o documento original (PDF)">PDF</a>
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

  function downloadCsv(head, rows, name) {
    const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const blob = new Blob(["﻿" + [head.map(cell).join(";"), ...rows.map((r) => r.map(cell).join(";"))].join("\r\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function exportDocs(rows, name) {
    downloadCsv(["Data", "Hora", "Companhia", "Tickers", "Categoria", "Tipo", "Espécie", "Assunto", "Tema", "Resumo", "Link"], rows.map((d) => {
      const c = state.byK.get(d.k);
      return [fmtDate(d.d), d.h, c ? ciaName(c) : d.n, (c?.tk || []).join(" "), d.c, d.t, d.e, d.s, d.sm?.tema, d.sm?.resumo, docUrl(d)];
    }), name);
  }

  // ---------------------------------------------------------- aba Companhias (diretório)
  function quoteBadge(r) {
    if (!r || !isNum(r.p)) return "";
    const up = (r.d1 ?? 0) >= 0;
    return `<span class="qt ${up ? "up" : "down"}"><b>R$ ${nf(r.p, 2)}</b>${isNum(r.d1) ? `<i>${pct(r.d1, 2, true)}</i>` : ""}</span>`;
  }

  function renderDir() {
    const all = state.index.companies;
    const q = fold($("#c-q").value.trim());
    const setor = $("#c-setor").value, seg = $("#c-seg").value, sort = $("#c-sort").value;
    const R = state.resumo;
    let rows = all.filter((c) => (!$("#c-listed").checked || c.tk.length) && (!setor || c.st === setor) && (!seg || c.sg === seg)
      && (!$("#c-favs").checked || state.favs.has(c.k)));
    if (q) rows = rows.filter((c) => q.split(/\s+/).every((w) => fold([c.n, c.nc, R[c.k]?.nm, c.tk.join(" "), c.st, c.at, c.mun, c.uf, c.cnpj, R[c.k]?.ctl, R[c.k]?.ceo].join(" ")).includes(w)));
    const by = {
      mc: (a, b) => (R[b.k]?.mc || 0) - (R[a.k]?.mc || 0) || b.n12 - a.n12,
      news: (a, b) => (R[b.k]?.nn || 0) - (R[a.k]?.nn || 0) || (R[b.k]?.mc || 0) - (R[a.k]?.mc || 0),
      act: (a, b) => b.n12 - a.n12,
      fr: (a, b) => b.fr12 - a.fr12 || b.n12 - a.n12,
      y1: (a, b) => (R[b.k]?.y1 ?? -1e9) - (R[a.k]?.y1 ?? -1e9),
      last: (a, b) => (b.last || "").localeCompare(a.last || ""),
      name: (a, b) => ciaName(a).localeCompare(ciaName(b), "pt-BR"),
    }[sort];
    rows.sort(by);
    $("#c-count").textContent = plural(rows.length, "companhia", "companhias");
    $("#c-grid").innerHTML = rows.slice(0, state.dir.shown).map((c) => {
      const r = R[c.k] || {};
      return `
      <article class="cia-card card" data-open="${esc(c.k)}" tabindex="0">
        <button class="star" data-fav="${esc(c.k)}" aria-pressed="${state.favs.has(c.k)}" title="Acompanhar">${icon("star")}</button>
        <div class="cia-card-head">${logoHtml(c, "sm")}<div class="cia-card-name">${esc(ciaName(c))}</div></div>
        <div class="cia-card-tags">${tickersHtml(c)}${c.sg ? `<span class="seg">${esc(c.sg)}</span>` : ""}</div>
        <div class="cia-card-sector">${esc(c.st || "Setor não informado")}</div>
        <div class="cia-card-money">${r.mc ? `<span><small>Valor de mercado</small><b>${brl(r.mc)}</b></span>` : ""}${quoteBadge(r)}</div>
        <div class="cia-card-foot">
          ${r.nn ? `<span><b>${r.nn}</b> notícias</span>` : ""}
          ${r.nd ? `<span><b>${r.nd}</b> deals</span>` : ""}
          ${r.nl ? `<span class="lead-dot"><b>${r.nl}</b> lead${r.nl > 1 ? "s" : ""}</span>` : ""}
          <span><b class="hot">${c.fr12}</b> fatos relevantes</span>
          <span>${c.last ? `último doc. ${esc(fmtDay(c.last))}` : "sem documentos"}</span>
        </div>
      </article>`;
    }).join("") || `<div class="empty">Nenhuma companhia com esses filtros.</div>`;
    $("#c-more").hidden = rows.length <= state.dir.shown;
  }

  // ---------------------------------------------------------- uma companhia
  const PANES = [
    ["geral", "Visão geral"], ["noticias", "Notícias e operações"], ["acionistas", "Acionistas"], ["adm", "Administração"],
    ["fin", "Financeiro"], ["divida", "Dívida e ofertas"], ["docs", "Documentos"],
  ];

  function sparkSvg(values, w = 260, h = 64) {
    if (!values || values.length < 2) return "";
    const min = Math.min(...values), max = Math.max(...values), r = max - min || 1;
    const pts = values.map((v, i) => [(i / (values.length - 1)) * w, h - 4 - ((v - min) / r) * (h - 8)]);
    const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join("");
    const up = values[values.length - 1] >= values[0];
    return `<svg class="spark ${up ? "up" : "down"}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="sg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".22"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs>
      <path d="${line}L${w},${h}L0,${h}Z" fill="url(#sg)"/><path d="${line}" fill="none" stroke="currentColor" stroke-width="1.8" vector-effect="non-scaling-stroke"/></svg>`;
  }

  function quoteBlock(c, p) {
    const q = p.cotacoes || {};
    const tks = Object.keys(q);
    if (!tks.length) return "";
    const main = state.quoteTk && q[state.quoteTk] ? state.quoteTk : (p.mercado?.tk || tks[0]);
    const x = q[main];
    const up = (x.d1 ?? 0) >= 0;
    const pos = isNum(x.hi) && isNum(x.lo) && x.hi > x.lo ? Math.min(100, Math.max(0, ((x.p - x.lo) / (x.hi - x.lo)) * 100)) : null;
    return `<div class="quote">
      <div class="quote-main">
        ${tks.length > 1 ? `<div class="segmented sm" role="radiogroup" aria-label="Ticker">${tks.map((t) => `<button type="button" data-qtk="${esc(t)}" aria-checked="${t === main}">${esc(t)}</button>`).join("")}</div>` : `<span class="tk">${esc(main)}</span>`}
        <div class="quote-px"><b>R$ ${nf(x.p, 2)}</b><span class="${up ? "up" : "down"}">${pct(x.d1, 2, true)} no dia</span></div>
        <div class="quote-sub">
          <span class="${(x.y1 ?? 0) >= 0 ? "up" : "down"}">${pct(x.y1, 1, true)} em 12 meses</span>
          ${x.adv ? `<span>Volume médio ${brl(x.adv)}/dia</span>` : ""}
          <span class="muted">cotação de ${esc(fmtDay(x.t?.slice(0, 10)))} ${esc(x.t?.slice(11) || "")}, com atraso</span>
        </div>
        ${pos != null ? `<div class="range"><span>R$ ${nf(x.lo, 2)}</span><div class="range-bar"><i style="left:${pos}%"></i></div><span>R$ ${nf(x.hi, 2)}</span></div><div class="range-cap">Mínima e máxima em 12 meses</div>` : ""}
      </div>
      <div class="quote-chart">${sparkSvg(x.s)}</div>
    </div>`;
  }

  function kpis(p) {
    const f = p.fin?.ltm || {};
    const m = p.mercado || {};
    const emp = p.empregados?.total;
    const lt = f.ref ? (f.ref.slice(5, 7) === "12" ? `em ${f.ref.slice(0, 4)}` : `12 meses até ${fmtMonth(f.ref)}`) : "";
    const ll = f.llc ?? f.ll;
    const items = [
      ["Valor de mercado", m.mc != null ? brl(m.mc) : null, m.mc ? `${nf(m.acoes / 1e6, 0)} mi de ações` : ""],
      ["Valor da firma (EV)", m.ev != null ? brl(m.ev) : null, "valor de mercado + dívida líquida"],
      [f.fin ? "Receitas" : "Receita líquida", f.rec != null ? brl(f.rec) : null, lt],
      ["EBITDA", f.ebitda != null ? brl(f.ebitda) : null, f.ebitda != null && f.rec ? `margem ${pct(100 * f.ebitda / f.rec)}` : ""],
      ["Lucro líquido", ll != null ? brl(ll) : null, ll != null && f.rec ? `margem ${pct(100 * ll / f.rec)}` : lt],
      ["Dívida líquida", f.dl != null ? brl(f.dl) : null, f.dl != null && f.ebitda > 0 ? `${mult(f.dl / f.ebitda)} o EBITDA` : ""],
      ["P/L", m.pl != null ? mult(m.pl) : null, "preço sobre lucro"],
      ["EV/EBITDA", m.ev_ebitda != null ? mult(m.ev_ebitda) : null, ""],
      ["P/VP", m.pvp != null ? mult(m.pvp) : null, "preço sobre valor patrimonial"],
      ["Patrimônio líquido", f.plc != null ? brl(f.plc) : null, ""],
      ["Empregados", emp ? nf(emp) : null, p.empregados?.mulheres_lideranca != null ? `${pct(p.empregados.mulheres_lideranca)} de mulheres na liderança` : ""],
    ].filter(([, v]) => v != null).slice(0, 8);
    if (!items.length) return "";
    return `<div class="stat-row">${items.map(([k, v, s]) => `<div class="stat"><span>${esc(k)}</span><b>${esc(v)}</b>${s ? `<small>${esc(s)}</small>` : ""}</div>`).join("")}</div>`;
  }

  function renderCiaHead(c, p, docs) {
    const fav = state.favs.has(c.k);
    const web = p.web || c.web;
    const url = web ? (/^https?:/.test(web) ? web : "https://" + web) : "";
    $("#cia-head").innerHTML = `
      <div class="cia-hero card">
        <div class="cia-title">
          <div class="cia-id">
            ${logoHtml(c, "lg")}
            <div>
              <div class="cia-tags">${tickersHtml(c)}${c.sg ? `<span class="seg">${esc(c.sg)}</span>` : ""}${c.sit && c.sit !== "ATIVO" ? `<span class="seg warn">Registro ${esc(c.sit.toLowerCase())}</span>` : ""}${(p.leads || []).some((l) => l.status === "Em aberto") ? `<span class="seg lead">Lead em aberto</span>` : ""}</div>
              <h2>${esc(ciaName(c))}</h2>
              <p class="muted">${esc(p.razao || c.n)}${c.st ? ` · ${esc(c.st)}` : ""}${c.mun ? ` · ${esc(c.mun)}/${esc(c.uf)}` : ""}</p>
            </div>
          </div>
          <div class="cia-actions">
            <button class="btn ${fav ? "btn-primary" : ""}" data-fav="${esc(c.k)}">${icon("star", "ic ic-sm")} ${fav ? "Acompanhando" : "Acompanhar"}</button>
            ${url ? `<a class="btn" href="${safeUrl(url)}" target="_blank" rel="noopener">Site ${icon("ext", "ic ic-sm")}</a>` : ""}
          </div>
        </div>
        ${quoteBlock(c, p)}
        ${kpis(p)}
      </div>`;
    const counts = { noticias: (p.noticias || []).length + (p.deals || []).length + (p.leads || []).length, docs: docs.length,
      acionistas: (p.acionistas || []).length, adm: (p.adm || []).length, divida: (p.titulos || []).length + (p.ofertas || []).length };
    $("#cia-tabs").innerHTML = PANES.map(([id, label]) => `<button type="button" role="tab" data-pane="${id}" aria-checked="${state.pane === id}">${label}${counts[id] ? `<span class="n">${counts[id]}</span>` : ""}</button>`).join("");
  }

  // ---------- visão geral
  function controlLine(p) {
    const sh = (p.acionistas || []).filter((s) => !/^(outros|ações tesouraria)$/i.test(s.n));
    const ctl = sh.filter((s) => s.ctl);
    const fmt = (s) => `${s.n} (${pct(s.tot)} do capital${isNum(s.on) && s.on !== s.tot ? `, ${pct(s.on)} das ON` : ""})`;
    if (ctl.length) {
      const sum = ctl.reduce((a, s) => a + (s.on || 0), 0);
      return `Controle${ctl.length > 1 ? " compartilhado" : ""}: ${ctl.map(fmt).join("; ")}${ctl.length > 1 && sum ? ` — juntos, ${pct(sum)} das ON` : ""}.`;
    }
    if (sh.length) return `Sem controlador definido. Maior acionista: ${fmt(sh[0])}.`;
    return "";
  }

  function highlights(c, p) {
    const out = [];
    const ctl = controlLine(p);
    if (ctl) out.push(ctl);
    if (p.ctl) out.push(`Controle acionário ${p.ctl.toLowerCase()}.`);
    const d = p.dispersao || {};
    if (isNum(d.ff)) out.push(`${pct(d.ff)} das ações em circulação${d.pf ? `; ${nf(d.pf)} acionistas pessoas físicas, ${nf(d.inst || 0)} institucionais` : ""}.`);
    const acoes = (p.vm || []).filter((v) => /^A[çc][õo]es|Units?/i.test(v.t) && v.tk);
    if (acoes.length) {
      const since = acoes.map((v) => v.desde).filter(Boolean).sort()[0];
      out.push(`Listada${c.sg ? ` no ${c.sg}` : " na B3"}${since ? ` desde ${fmtDate(since)}` : ""}${p.exterior ? `; também negociada em ${p.exterior.join(", ")}` : ""}.`);
    }
    const r = state.resumo[c.k] || {};
    if (isNum(r.y1)) out.push(`Ações ${r.y1 >= 0 ? "sobem" : "caem"} ${pct(Math.abs(r.y1))} em 12 meses.`);
    if (p.auditor) out.push(`Auditoria: ${p.auditor}${p.auditor_desde ? ` (desde ${p.auditor_desde.slice(0, 4)})` : ""}.`);
    const open = (p.leads || []).filter((l) => l.status === "Em aberto");
    if (open.length) out.push(`Está no radar de leads do portal: ${open.map((l) => l.sinal).join(", ")}.`);
    if ((p.deals || []).length) out.push(`Aparece em ${plural(p.deals.length, "deal acompanhado", "deals acompanhados")} pelo portal.`);
    if ((p.titulos || []).length) {
      const soon = p.titulos.filter((t) => t.vc && t.vc <= addDays(today(), 365));
      const tot = p.titulos.reduce((a, t) => a + (t.s || 0), 0);
      out.push(`${plural(p.titulos.length, "título de dívida", "títulos de dívida")} em aberto${tot ? ` (saldo de ${brl(tot)})` : ""}${soon.length ? `; ${soon.length} vence${soon.length > 1 ? "m" : ""} em até 12 meses` : ""}.`);
    }
    return out;
  }

  function keyPeople(p) {
    const adm = p.adm || [];
    const find = (re) => adm.find((a) => re.test(fold(`${a.c} ${a.f || ""}`)));
    const rows = [
      ["Presidente do conselho", find(/presidente do (conselho|c\.a)|presidente do c\.a/)],
      ["Diretor-presidente (CEO)", find(/diretor presidente|presidente \/ superintendente|\bceo\b/)],
      ["Diretor financeiro (CFO)", find(/financeir|\bcfo\b/)],
      ["Relações com investidores", find(/relacoes com investidores/)],
    ].filter(([, a]) => a);
    if (!rows.length && !p.ri) return "";
    return `<div class="widget"><h3 class="group-label">Pessoas-chave</h3><dl class="kv">${rows.map(([k, a]) => `<dt>${k}</dt><dd>${esc(a.n)}</dd>`).join("")}
      ${p.ri ? `<dt>Contato de RI</dt><dd>${esc(p.ri.n)}${p.ri.email ? `<br><a href="mailto:${esc(p.ri.email.split(/[;,/ ]/)[0])}">${esc(p.ri.email)}</a>` : ""}${p.ri.tel ? `<br>${esc(p.ri.tel)}` : ""}</dd>` : ""}</dl></div>`;
  }

  function factsHtml(c, p) {
    const facts = [
      ["Razão social", p.razao || c.n], ["CNPJ", c.cnpj], ["Código CVM", c.k], ["Setor", p.setor || c.st],
      ["Sede", p.sede || [c.mun, c.uf].filter(Boolean).join(" / ")], ["Fundação", p.const ? fmtDate(p.const) : ""],
      ["Registro na CVM", [p.reg ? `desde ${fmtDate(p.reg)}` : "", p.cat].filter(Boolean).join(" · ")],
      ["Situação", p.sit || c.se], ["Controle acionário", p.ctl || c.ctl], ["Exercício social", p.exerc ? `termina em ${MONTHS[+p.exerc - 1] || p.exerc}` : ""],
      ["Auditor", p.auditor || c.aud], ["Escriturador", p.escriturador], ["Nome anterior", p.ant ? `${p.ant}${p.ant_d ? ` (até ${fmtDate(p.ant_d)})` : ""}` : ""],
    ].filter(([, v]) => v);
    return `<div class="widget"><h3 class="group-label">Ficha</h3><dl class="kv">${facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl></div>`;
  }

  function timeline(c, p, docs) {
    const ev = [];
    for (const n of p.noticias || []) if ((n.imp || 0) >= 5) ev.push({ d: n.d, k: "Notícia", cls: "news", t: n.h, s: n.s, l: n.l, sub: n.sum });
    for (const d of p.deals || []) ev.push({ d: d.ate || d.desde, k: "Deal", cls: "deal", t: d.h || `${d.tipo}: ${d.comprador} → ${d.alvo}`, s: d.estagio, l: d.l, sub: [d.tipo, d.valor].filter(Boolean).join(" · ") });
    for (const l of p.leads || []) ev.push({ d: l.ate || l.desde, k: "Lead", cls: "lead", t: `${l.sinal}${l.status !== "Em aberto" ? ` (${l.status.toLowerCase()})` : ""}`, sub: l.por_que });
    for (const d of docs) if (d.c === "Fato Relevante" || (d.sm && /M&A|Mercado de capitais|Reestrutura|Dívida/.test(d.sm.tema || ""))) ev.push({ d: d.d, k: catShort(d.c), cls: "doc", t: docTitle(d), l: docUrl(d), sub: d.sm?.resumo });
    for (const o of p.ofertas || []) ev.push({ d: o.d, k: "Oferta", cls: "oferta", t: `${o.vm}${o.emissao ? ` (${o.emissao}ª emissão)` : ""}${o.v ? ` · ${brl(o.v)}` : ""}`, s: o.lider ? `coordenação: ${o.lider}` : "", sub: o.st });
    ev.sort((a, b) => (b.d || "").localeCompare(a.d || ""));
    const top = ev.slice(0, 14);
    if (!top.length) return `<div class="widget"><h3 class="group-label">Movimentos recentes</h3><p class="muted small">Sem notícias, deals ou fatos relevantes recentes ligados a esta companhia.</p></div>`;
    return `<div class="widget"><div class="widget-head"><h3 class="group-label">Movimentos recentes</h3><button class="link-btn small" data-pane="noticias" type="button">Ver tudo ${icon("chev", "ic ic-sm")}</button></div>
      <ol class="tl">${top.map((e) => `<li class="tl-${e.cls}"><span class="tl-dot"></span><div><div class="tl-meta"><span class="tl-kind">${esc(e.k)}</span>${esc(fmtDate(e.d))}${e.s ? ` · ${esc(e.s)}` : ""}</div>
        <div class="tl-title">${e.l ? `<a href="${safeUrl(e.l)}" target="_blank" rel="noopener">${esc(e.t)}</a>` : esc(e.t)}</div>${e.sub ? `<p>${esc(e.sub)}</p>` : ""}</div></li>`).join("")}</ol></div>`;
  }

  function paneGeral(c, p, docs) {
    const hl = highlights(c, p);
    return `<div class="cia-grid2">
      <div class="col">
        ${p.ativ || c.at ? `<div class="widget"><h3 class="group-label">O que faz</h3><p class="lede">${esc(p.ativ || c.at)}</p></div>` : ""}
        ${hl.length ? `<div class="widget"><h3 class="group-label">Destaques</h3><ul class="list-plain">${hl.map((h) => `<li>${esc(h)}</li>`).join("")}</ul></div>` : ""}
        ${timeline(c, p, docs)}
      </div>
      <div class="col">
        ${keyPeople(p)}
        ${ownershipWidget(p)}
        ${factsHtml(c, p)}
      </div>
    </div>`;
  }

  // ---------- notícias e operações
  function paneNoticias(c, p) {
    const deals = p.deals || [], leads = p.leads || [], news = p.noticias || [];
    const dealHtml = deals.map((d) => `<article class="op card">
      <div class="op-top"><span class="badge deal">${esc(d.tipo || "Deal")}</span><span class="badge">${esc(d.papel === "alvo" ? "alvo" : "comprador/investidor")}</span><span class="stage">${esc(d.estagio || "")}</span><span class="muted small">${esc(fmtDate(d.desde))}${d.ate && d.ate !== d.desde ? ` a ${esc(fmtDate(d.ate))}` : ""}</span></div>
      <h4>${esc(d.comprador || "?")} → ${esc(d.alvo || "?")}</h4>
      <dl class="kv compact"><dt>Valor</dt><dd>${esc(d.valor || "não divulgado")}</dd><dt>Setor</dt><dd>${esc(d.setor || "–")}</dd><dt>Assessores</dt><dd>${esc(d.assessores || "não divulgado")}</dd></dl>
      ${(d.tl || []).length > 1 ? `<div class="steps">${d.tl.map((t) => `<span><b>${esc(fmtDay(t.d))}</b> ${esc(t.e)}</span>`).join("")}</div>` : ""}
      ${d.l ? `<a class="link-btn small" href="${safeUrl(d.l)}" target="_blank" rel="noopener">${esc(d.h || "Ler a notícia")} ${icon("ext", "ic ic-sm")}</a>` : ""}
    </article>`).join("");
    const leadHtml = leads.map((l) => `<article class="op card">
      <div class="op-top"><span class="badge lead">${esc(l.sinal)}</span><span class="badge ${l.status === "Em aberto" ? "pos" : ""}">${esc(l.status)}</span><span class="muted small">desde ${esc(fmtDate(l.desde))}</span></div>
      <p>${esc(l.por_que || "")}</p>
      <dl class="kv compact"><dt>Contraparte</dt><dd>${esc(l.contraparte || "não divulgado")}</dd><dt>Assessores</dt><dd>${esc(l.assessores || "não divulgado")}</dd></dl>
      <a class="link-btn small" href="index.html#leads" >Abrir na aba Leads ${icon("chev", "ic ic-sm")}</a>
    </article>`).join("");
    const newsHtml = news.map((n) => `<article class="news-row" style="--cat: var(--c-${esc(n.cat || "outros")})">
      <span class="ring-mini ${n.imp >= 9 ? "i-hot" : n.imp >= 7 ? "i-warm" : n.imp >= 5 ? "i-mild" : ""}">${esc(n.imp ?? "")}</span>
      <div><div class="news-top"><span class="cat-dot">${esc(fmtDate(n.d))}</span><span class="dot-sep">${esc(n.s || "")}</span>${n.deal ? `<span class="badge deal">deal</span>` : ""}</div>
      <h4><a href="${safeUrl(n.l)}" target="_blank" rel="noopener">${esc(n.h)}</a></h4>${n.sum ? `<p>${esc(n.sum)}</p>` : ""}
      <a class="link-btn small" href="index.html#n/${esc(n.id)}@${esc(n.d)}">Ver a análise no portal ${icon("chev", "ic ic-sm")}</a></div></article>`).join("");
    if (!deals.length && !leads.length && !news.length) return `<div class="empty">O portal ainda não registrou notícias, deals ou leads desta companhia. Eles aparecem aqui conforme a imprensa fala dela.</div>`;
    return `${deals.length ? `<div class="section-head"><h2 class="title-2">Deals</h2><span class="muted small">${plural(deals.length, "operação", "operações")}</span></div><div class="ops">${dealHtml}</div>` : ""}
      ${leads.length ? `<div class="section-head mt"><h2 class="title-2">Leads</h2></div><div class="ops">${leadHtml}</div>` : ""}
      ${news.length ? `<div class="section-head mt"><h2 class="title-2">Notícias</h2><span class="muted small">${plural(news.length, "notícia", "notícias")} desde ${esc(fmtDate(news[news.length - 1].d))}</span></div><div class="cards grouped news-list">${newsHtml}</div>` : ""}`;
  }

  // ---------- acionistas
  const PALETTE = ["var(--c-mna)", "var(--c-macro)", "var(--c-mercados)", "var(--c-empresas)", "var(--c-politica)", "var(--c-internacional)", "var(--c-tech)", "#8e8e93"];

  function ownershipWidget(p) {
    const sh = (p.acionistas || []).filter((s) => isNum(s.tot) && s.tot > 0);
    if (!sh.length) return "";
    const named = sh.filter((s) => !/^(outros|ações tesouraria)$/i.test(s.n)).slice(0, 6);
    const rest = Math.max(0, 100 - named.reduce((a, s) => a + s.tot, 0));
    const parts = [...named.map((s, i) => ({ n: s.n, v: s.tot, c: PALETTE[i], ctl: s.ctl })), { n: "Demais acionistas", v: rest, c: "var(--fill)" }];
    return `<div class="widget"><div class="widget-head"><h3 class="group-label">Quem é dono</h3><button class="link-btn small" data-pane="acionistas" type="button">Detalhes ${icon("chev", "ic ic-sm")}</button></div>
      <div class="own-bar">${parts.filter((x) => x.v > 0.2).map((x) => `<i style="width:${x.v}%;background:${x.c}" title="${esc(x.n)}: ${pct(x.v)}"></i>`).join("")}</div>
      <ul class="own-legend">${parts.filter((x) => x.v > 0.2).map((x) => `<li><span class="sw" style="background:${x.c}"></span><span class="nm">${esc(x.n)}${x.ctl ? ` <span class="badge pos">controlador</span>` : ""}</span><b>${pct(x.v)}</b></li>`).join("")}</ul></div>`;
  }

  function holderRow(s, depth = 0) {
    const kids = (s.de || []).map((k) => holderRow(k, depth + 1)).join("");
    const badges = [s.ctl ? `<span class="badge pos">Controlador</span>` : "", s.ac ? `<span class="badge">Acordo de acionistas</span>` : "", s.pais ? `<span class="badge">${esc(s.pais)}</span>` : ""].join("");
    return `<tr class="d${depth}"><td><div class="holder">${depth ? `<span class="tree">↳</span>` : ""}<span>${esc(s.n)}${s.doc ? `<small>${esc(s.doc)}</small>` : ""}</span>${badges}</div></td>
      <td class="num">${pct(s.on, 2)}</td><td class="num">${pct(s.pn, 2)}</td><td class="num"><b>${pct(s.tot, 2)}</b></td></tr>${kids}`;
  }

  function paneAcionistas(c, p) {
    const cap = p.capital || {}, d = p.dispersao || {};
    const sh = p.acionistas || [];
    const parts = p.participacoes || [];
    const inv = p.investe_em || [];
    const capCards = [
      ["Capital social", cap.valor ? brl(cap.valor) : null, cap.data ? `aprovado em ${fmtDate(cap.data)}` : ""],
      ["Ações ordinárias (ON)", cap.on ? nf(cap.on) : null, ""],
      ["Ações preferenciais (PN)", cap.pn ? nf(cap.pn) : null, ""],
      ["Capital autorizado", cap.autorizado ? brl(cap.autorizado) : null, "aumento sem assembleia"],
      ["Em circulação (free float)", isNum(d.ff) ? pct(d.ff) : null, isNum(d.ff_on) ? `${pct(d.ff_on)} das ON · ${pct(d.ff_pn)} das PN` : ""],
      ["Acionistas", d.pf ? nf((d.pf || 0) + (d.pj || 0) + (d.inst || 0)) : null, d.pf ? `${nf(d.pf)} PF · ${nf(d.pj || 0)} PJ · ${nf(d.inst || 0)} institucionais` : ""],
    ].filter(([, v]) => v);
    return `${capCards.length ? `<div class="stat-row">${capCards.map(([k, v, s]) => `<div class="stat"><span>${k}</span><b>${esc(v)}</b>${s ? `<small>${esc(s)}</small>` : ""}</div>`).join("")}</div>` : ""}
      ${sh.length ? `<div class="section-head mt"><h2 class="title-2">Composição acionária</h2><span class="muted small">Formulário de Referência ${esc(p.fre?.ref?.slice(0, 4) || "")}, versão ${esc(p.fre?.v || "")}; ↳ mostra quem está por trás de cada acionista</span></div>
        <div class="table-wrap"><table class="deals holders"><thead><tr><th>Acionista</th><th class="num">% ON</th><th class="num">% PN</th><th class="num">% do capital</th></tr></thead><tbody>${sh.map((s) => holderRow(s)).join("")}</tbody></table></div>`
        : `<div class="empty">A companhia não informou a composição acionária no Formulário de Referência.</div>`}
      ${inv.length ? `<div class="section-head mt"><h2 class="title-2">Participações em companhias abertas</h2></div>
        <div class="cards grouped">${inv.map((x) => `<div class="row-link">${ciaLink(x.k, state.byK.get(x.k) ? ciaName(state.byK.get(x.k)) : `Código CVM ${x.k}`)}<span class="muted small">${pct(x.pct, 2)} do capital${isNum(x.on) ? ` · ${pct(x.on, 2)} das ON` : ""}</span>${x.ctl ? `<span class="badge pos">controladora</span>` : ""}</div>`).join("")}</div>` : ""}
      ${parts.length ? `<div class="section-head mt"><h2 class="title-2">Controladas e coligadas</h2><span class="muted small">${plural(parts.length, "sociedade", "sociedades")}</span></div>
        <label class="search-field small-field"><svg class="ic"><use href="#i-search"/></svg><input id="part-q" type="search" placeholder="Filtrar sociedades" autocomplete="off"></label>
        <div class="table-wrap"><table class="deals" id="part-table"><thead><tr><th>Sociedade</th><th>CNPJ</th><th class="num">Participação</th><th>Tipo</th></tr></thead><tbody>
        ${parts.map((x) => `<tr data-f="${esc(fold(x.n + " " + (x.cnpj || "") + " " + (x.at || "")))}"><td>${x.k && state.byK.has(x.k) ? ciaLink(x.k, x.n) : esc(x.n)}${x.at ? `<small class="muted block">${esc(x.at)}</small>` : ""}</td><td class="nowrap">${esc(x.cnpj || (x.pais ? x.pais : "exterior"))}</td><td class="num">${pct(x.pct, 2)}</td><td>${esc(x.tipo || "")}</td></tr>`).join("")}
        </tbody></table></div>` : ""}`;
  }

  // ---------- administração
  function personRow(a) {
    const age = a.nasc ? new Date().getFullYear() - +a.nasc : null;
    const badges = [a.ind ? `<span class="badge pos">Independente</span>` : "", a.ec ? `<span class="badge">Eleito pelo controlador</span>` : ""].join("");
    return `<details class="person"><summary>
        <span class="avatar">${esc(a.n.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join(""))}</span>
        <span class="who"><b>${esc(a.n)}</b><small>${esc(a.f || a.c)}${a.f && a.c && !fold(a.f).includes(fold(a.c).slice(0, 12)) ? ` · ${esc(a.c)}` : ""}</small></span>
        <span class="meta">${badges}${a.el ? `<small class="muted">eleito em ${esc(fmtDate(a.el))}</small>` : ""}</span>
      </summary>
      <div class="person-body">
        <dl class="kv compact">${a.pr ? `<dt>Formação</dt><dd>${esc(a.pr)}</dd>` : ""}${age ? `<dt>Idade</dt><dd>${age} anos</dd>` : ""}${a.pm ? `<dt>Mandato</dt><dd>${esc(a.pm)}</dd>` : ""}${a.mand ? `<dt>Mandatos seguidos</dt><dd>${a.mand}</dd>` : ""}</dl>
        ${a.ex ? `<p>${esc(a.ex)}</p>` : ""}
      </div></details>`;
  }

  function paneAdm(c, p) {
    const adm = p.adm || [];
    if (!adm.length) return `<div class="empty">A companhia não informou a administração no Formulário de Referência.</div>`;
    const groups = [
      ["Conselho de Administração", adm.filter((a) => a.o === "C" || a.o === "DC")],
      ["Diretoria", adm.filter((a) => a.o === "D" || a.o === "DC")],
      ["Conselho Fiscal", adm.filter((a) => a.o === "F")],
    ].filter(([, l]) => l.length);
    const board = groups[0]?.[1] || [];
    const ind = board.filter((a) => a.ind).length;
    const rem = p.rem || {};
    const emp = p.empregados || {};
    return `<div class="cia-grid2">
      <div class="col">
        ${groups.map(([g, l]) => `<div class="section-head"><h2 class="title-2">${g}</h2><span class="muted small">${plural(l.length, "membro", "membros")}${g.startsWith("Conselho de") && board.length ? ` · ${ind} independente${ind === 1 ? "" : "s"}` : ""}</span></div>
          <div class="people">${l.map(personRow).join("")}</div>`).join("")}
        ${(p.comites || []).length ? `<div class="section-head mt"><h2 class="title-2">Comitês</h2></div><div class="people">${p.comites.map((cm) => `<details class="person"><summary><span class="who"><b>${esc(cm.c)}</b><small>${plural(cm.m.length, "membro", "membros")}</small></span></summary><div class="person-body"><ul class="list-plain">${cm.m.map(([n, cg]) => `<li>${esc(n)}${cg ? ` <span class="muted">· ${esc(cg)}</span>` : ""}</li>`).join("")}</ul></div></details>`).join("")}</div>` : ""}
      </div>
      <div class="col">
        ${rem.orgaos?.length ? `<div class="widget"><h3 class="group-label">Remuneração em ${esc(rem.ano)}</h3><table class="mini"><thead><tr><th>Órgão</th><th class="num">Membros</th><th class="num">Total</th><th class="num">Maior individual</th></tr></thead><tbody>
          ${rem.orgaos.map((o) => `<tr><td>${esc(o.o)}</td><td class="num">${isNum(o.m) ? nf(o.m, o.m % 1 ? 1 : 0) : "–"}</td><td class="num">${brl(o.v)}</td><td class="num">${o.max ? brl(o.max) : "–"}</td></tr>`).join("")}</tbody></table></div>` : ""}
        ${emp.total ? `<div class="widget"><h3 class="group-label">Empregados</h3><p class="big-num">${nf(emp.total)}</p>
          <dl class="kv compact"><dt>Em liderança</dt><dd>${nf(emp.lideranca || 0)}</dd>${emp.mulheres_lideranca != null ? `<dt>Mulheres na liderança</dt><dd>${pct(emp.mulheres_lideranca)}</dd>` : ""}</dl>
          ${emp.regioes ? `<div class="bars-h">${Object.entries(emp.regioes).sort((a, b) => b[1] - a[1]).map(([r, n]) => `<div><span>${esc(r)}</span><i style="width:${(100 * n) / emp.total}%"></i><b>${nf(n)}</b></div>`).join("")}</div>` : ""}</div>` : ""}
      </div>
    </div>`;
  }

  // ---------- financeiro
  function finTable(p) {
    const an = p.fin?.anual || [];
    const ltm = p.fin?.ltm;
    const fin = an.some((r) => r.fin) || ltm?.fin;
    const cols = an.slice(-5).map((r) => ({ ...r, label: r.ref.slice(0, 4) }));
    if (ltm && (!cols.length || ltm.ref !== cols[cols.length - 1].ref)) cols.push({ ...ltm, label: `12m ${fmtMonth(ltm.ref)}` });
    if (!cols.length) return "";
    const ll = (r) => r.llc ?? r.ll;
    const lines = fin ? [
      ["Receitas", (r) => brl(r.rec)], ["Lucro líquido", (r) => brl(ll(r))], ["Patrimônio líquido", (r) => brl(r.plc ?? r.pl)],
      ["ROE", (r) => (ll(r) != null && (r.plc ?? r.pl) ? pct(100 * ll(r) / (r.plc ?? r.pl)) : "–")], ["Ativo total", (r) => brl(r.at)],
    ] : [
      ["Receita líquida", (r) => brl(r.rec)], ["EBITDA", (r) => brl(r.ebitda)], ["Margem EBITDA", (r) => (r.ebitda != null && r.rec ? pct(100 * r.ebitda / r.rec) : "–")],
      ["EBIT", (r) => brl(r.ebit)], ["Lucro líquido", (r) => brl(ll(r))], ["Margem líquida", (r) => (ll(r) != null && r.rec ? pct(100 * ll(r) / r.rec) : "–")],
      ["Dívida bruta", (r) => brl(r.div)], ["Caixa e aplicações", (r) => brl(r.caixa)], ["Dívida líquida", (r) => brl(r.dl)],
      ["Dívida líquida / EBITDA", (r) => (r.dl != null && r.ebitda > 0 ? mult(r.dl / r.ebitda) : "–")],
      ["Patrimônio líquido", (r) => brl(r.plc ?? r.pl)], ["ROE", (r) => (ll(r) != null && (r.plc ?? r.pl) > 0 ? pct(100 * ll(r) / (r.plc ?? r.pl)) : "–")],
      ["Caixa das operações", (r) => brl(r.fco)], ["Investimentos (capex)", (r) => brl(r.capex)],
    ];
    return `<div class="table-wrap"><table class="deals fin"><thead><tr><th></th>${cols.map((c) => `<th class="num">${esc(c.label)}</th>`).join("")}</tr></thead>
      <tbody>${lines.map(([k, f]) => `<tr><td>${k}</td>${cols.map((c) => `<td class="num">${f(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }

  function quarterChart(p) {
    const q = p.fin?.tri || [];
    if (q.length < 2) return "";
    const W = 640, H = 220, pad = 28, bw = (W - pad * 2) / q.length;
    const vals = q.flatMap((x) => [x.rec || 0, x.llc ?? x.ll ?? 0]);
    const max = Math.max(...vals, 1), min = Math.min(0, ...vals);
    const y = (v) => H - pad - ((v - min) / (max - min)) * (H - pad * 2);
    const bars = q.map((x, i) => {
      const x0 = pad + i * bw + bw * 0.14, w = bw * 0.34;
      const ll = x.llc ?? x.ll ?? 0;
      return `<rect x="${x0}" y="${y(Math.max(0, x.rec || 0))}" width="${w}" height="${Math.abs(y(x.rec || 0) - y(0))}" rx="3" class="b-rec"><title>${x.p}: receita ${brl(x.rec)}</title></rect>
        <rect x="${x0 + w + 2}" y="${y(Math.max(0, ll))}" width="${w}" height="${Math.abs(y(ll) - y(0))}" rx="3" class="${ll >= 0 ? "b-ll" : "b-neg"}"><title>${x.p}: lucro ${brl(ll)}</title></rect>
        <text x="${pad + i * bw + bw / 2}" y="${H - 8}" text-anchor="middle">${x.p}</text>`;
    }).join("");
    return `<div class="widget"><div class="widget-head"><h3 class="group-label">Receita e lucro por trimestre</h3><span class="legend"><i class="b-rec"></i>Receita <i class="b-ll"></i>Lucro</span></div>
      <svg class="qchart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Receita e lucro por trimestre"><line x1="${pad}" x2="${W - pad}" y1="${y(0)}" y2="${y(0)}" class="axis"/>${bars}</svg></div>`;
  }

  function paneFin(c, p) {
    if (!p.fin) return `<div class="empty">Sem demonstrações financeiras nos dados abertos da CVM para esta companhia.</div>`;
    const ltm = p.fin.ltm || {};
    return `${quarterChart(p)}
      <div class="section-head mt"><h2 class="title-2">Demonstrações</h2><span class="muted small">Valores em R$, consolidados quando a companhia publica consolidado · DFP e ITR na CVM${ltm.ref ? ` · última entrega: ${esc(fmtDate(ltm.ref))}` : ""}</span></div>
      ${finTable(p)}
      ${ltm.fin ? `<p class="muted small">Instituição financeira: EBITDA e dívida líquida não se aplicam.</p>` : `<p class="muted small">EBITDA = resultado antes do financeiro e dos tributos + depreciação e amortização (da demonstração de fluxo de caixa). Dívida líquida = empréstimos e financiamentos − caixa e aplicações de curto prazo.</p>`}`;
  }

  // ---------- dívida e ofertas
  function paneDivida(c, p) {
    const t = p.titulos || [], o = p.ofertas || [], pr = p.partes || [];
    const tot = t.reduce((a, x) => a + (x.s || 0), 0);
    const soon = addDays(today(), 365);
    return `${t.length ? `<div class="section-head"><h2 class="title-2">Títulos de dívida em aberto</h2><span class="muted small">${plural(t.length, "título", "títulos")}${tot ? ` · saldo de ${brl(tot)}` : ""}</span></div>
      <div class="table-wrap"><table class="deals"><thead><tr><th>Título</th><th>Tipo</th><th>Emissão</th><th>Vencimento</th><th class="num">Valor emitido</th><th class="num">Saldo devedor</th></tr></thead><tbody>
      ${t.map((x) => `<tr class="${x.vc && x.vc <= soon ? "hl" : ""}"><td>${esc(x.id)}</td><td>${esc(x.t)}</td><td class="nowrap">${esc(fmtDate(x.em))}</td><td class="nowrap">${esc(fmtDate(x.vc))}${x.vc && x.vc <= soon ? ` <span class="badge neg">em 12 meses</span>` : ""}</td><td class="num">${brl(x.v)}</td><td class="num">${brl(x.s)}</td></tr>`).join("")}
      </tbody></table></div>` : ""}
      ${o.length ? `<div class="section-head mt"><h2 class="title-2">Ofertas públicas</h2><span class="muted small">registradas na CVM (Resolução 160)</span></div>
      <div class="table-wrap"><table class="deals"><thead><tr><th>Registro</th><th>Valor mobiliário</th><th>Tipo</th><th class="num">Volume</th><th>Coordenador líder</th><th>Situação</th></tr></thead><tbody>
      ${o.map((x) => `<tr><td class="nowrap">${esc(fmtDate(x.d))}</td><td>${esc(x.vm)}${x.emissao ? ` · ${esc(x.emissao)}ª emissão` : ""}${x.sust ? ` <span class="badge pos">sustentável</span>` : ""}${x.inc ? ` <span class="badge">incentivada</span>` : ""}${x.dest ? `<small class="muted block">${esc(x.dest)}</small>` : ""}</td><td>${esc(x.tipo || "")}${x.reg ? `<small class="muted block">${esc(x.reg)}</small>` : ""}</td><td class="num">${brl(x.v)}</td><td>${esc(x.lider || "–")}</td><td>${esc(x.st || "")}</td></tr>`).join("")}
      </tbody></table></div>` : ""}
      ${pr.length ? `<div class="section-head mt"><h2 class="title-2">Maiores transações com partes relacionadas</h2><span class="muted small">Formulário de Referência</span></div>
      <div class="cards grouped">${pr.map((x) => `<div class="pr-row"><div><b>${esc(x.p)}</b><small class="muted block">${esc(x.r)}</small><p>${esc(x.o)}</p></div><div class="num"><b>${brl(x.v)}</b><small class="muted block">${esc(fmtDate(x.d))}</small></div></div>`).join("")}</div>` : ""}
      ${!t.length && !o.length && !pr.length ? `<div class="empty">Sem títulos de dívida, ofertas públicas ou transações com partes relacionadas informados.</div>` : ""}`;
  }

  // ---------- documentos (aba da companhia)
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

  function showPane(id) {
    state.pane = PANES.some(([p]) => p === id) ? id : "geral";
    for (const [p] of PANES) $(`#pane-${p}`).hidden = p !== state.pane;
    for (const b of document.querySelectorAll("#cia-tabs [data-pane]")) b.setAttribute("aria-checked", String(b.dataset.pane === state.pane));
    const want = `#cia/${state.cia}${state.pane === "geral" ? "" : "/" + state.pane}`;
    if (location.hash !== want) history.replaceState(null, "", want);
  }

  async function openCia(k, pane) {
    const c = state.byK.get(k);
    if (!c) { location.hash = "#cias"; return; }
    const changed = state.cia !== k;
    state.cia = k;
    state.pane = pane || "geral";
    setTitle(ciaName(c));
    $("#btn-share").hidden = false;
    if (changed) {
      state.quoteTk = null;
      $("#cia-head").innerHTML = `<div class="cia-hero card"><span class="skel skel-title" style="width:40%"></span><span class="skel skel-line" style="width:60%"></span></div>`;
      for (const [p] of PANES) if (p !== "docs") $(`#pane-${p}`).innerHTML = "";
      $("#e-list").innerHTML = "";
    }
    const [docsRaw, p] = await Promise.all([loadEmp(k), loadPerfil(k)]);
    if (state.cia !== k) return;
    const docs = docsRaw.map((d) => ({ ...d, k })).sort((a, b) => (b.d + (b.h || "")).localeCompare(a.d + (a.h || "")));
    renderCiaHead(c, p, docs);
    $("#pane-geral").innerHTML = paneGeral(c, p, docs);
    $("#pane-noticias").innerHTML = paneNoticias(c, p);
    $("#pane-acionistas").innerHTML = paneAcionistas(c, p);
    $("#pane-adm").innerHTML = paneAdm(c, p);
    $("#pane-fin").innerHTML = paneFin(c, p);
    $("#pane-divida").innerHTML = paneDivida(c, p);
    if (changed || !state.ent.all.length) {
      Object.assign(state.ent, { all: docs, cats: new Set(), tema: "", shown: PAGE });
      $("#e-q").value = ""; $("#e-from").value = ""; $("#e-to").value = "";
      activityChart(docs);
      renderEntDocs();
    }
    showPane(state.pane);
    state.recent = [k, ...(store.get("cias-recent", []).filter((x) => x !== k))].slice(0, 8);
    store.set("cias-recent", state.recent);
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
      if (s) scored.push([s + Math.min(c.n12, 200) / 100 + (c.tk.length ? 5 : 0) + Math.log10((state.resumo[c.k]?.mc || 1)), c]);
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
    list.innerHTML = finderRows.map((c, i) => {
      const r = state.resumo[c.k] || {};
      return `<li role="option" aria-selected="${i === finderSel}" data-k="${esc(c.k)}">
        ${logoHtml(c, "xs")}<span class="fi-name">${esc(ciaName(c))}</span>${tickersHtml(c)}${quoteBadge(r)}
        <span class="fi-meta">${esc(c.st || "")}${r.mc ? ` · valor de mercado ${brl(r.mc)}` : ""}${c.last ? ` · último documento ${esc(fmtDay(c.last))}` : ""}</span>
      </li>`;
    }).join("") || `<li class="fi-empty">Nenhuma companhia encontrada.</li>`;
  }
  function pickFinder(k) {
    $("#finder").value = ""; $("#finder-list").hidden = true; $("#finder").blur();
    location.hash = `#cia/${k}`;
  }

  function renderFavs() {
    const favs = [...state.favs].map((k) => state.byK.get(k)).filter(Boolean);
    $("#favs").innerHTML = favs.length
      ? `<span class="fl-label">Minhas companhias</span>` + favs.map((c) => `<a class="chip fav-chip" href="#cia/${esc(c.k)}">${esc(ciaName(c))}${c.tk[0] ? `<span class="n">${esc(c.tk[0])}</span>` : ""}</a>`).join("")
      : `<span class="muted small">Marque ☆ nas companhias que você acompanha para tê-las sempre aqui e no briefing.</span>`;
    $("#side-favs").innerHTML = favs.slice(0, 8).map((c) => `<a class="nav-item sub" href="#cia/${esc(c.k)}" ${state.view === "cia" && state.cia === c.k ? 'aria-current="page"' : ""}>${logoHtml(c, "xs")}<span>${esc(ciaName(c))}</span></a>`).join("");
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
      b.classList.toggle("btn-primary", state.favs.has(k));
      b.innerHTML = `${icon("star", "ic ic-sm")} ${state.favs.has(k) ? "Acompanhando" : "Acompanhar"}`;
    }
    if (state.view === "docs" && $("#d-favs").checked) renderDocs();
  }

  // ---------------------------------------------------------- navegação
  function setTitle(t) {
    $("#page-title").textContent = t;
    $("#bar-title").textContent = t;
    document.title = `${t} · Portal FPM`;
  }

  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#/, ""));
    const [view, k, pane] = h.split("/");
    const prev = state.view;
    state.view = view === "cia" && k ? "cia" : view === "docs" ? "docs" : "cias";
    for (const v of ["docs", "cias", "cia"]) $(`#view-${v}`).hidden = state.view !== v;
    for (const a of document.querySelectorAll(".side-nav [data-view]")) {
      if (a.dataset.view === state.view) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    }
    $(".finder").hidden = state.view === "cia";
    $("#btn-share").hidden = state.view !== "cia";
    if (state.view === "docs") { setTitle("Documentos CVM"); renderDocs(); }
    else if (state.view === "cias") { setTitle("Companhias"); renderDir(); }
    else openCia(k, pane);
    renderFavs();
    if (!(state.view === "cia" && prev === "cia" && state.cia === k)) window.scrollTo({ top: 0 });
  }

  function wire() {
    const debounce = (fn, ms = 180) => { let t; return () => { clearTimeout(t); t = setTimeout(fn, ms); }; };
    const docsAgain = () => { state.docs.shown = PAGE; renderDocs(); };
    $("#d-period").onchange = () => { $("#d-custom").hidden = $("#d-period").value !== "custom"; docsAgain(); };
    for (const id of ["#d-from", "#d-to", "#d-listed", "#d-favs", "#d-sum"]) $(id).onchange = docsAgain;
    $("#d-q").oninput = debounce(docsAgain);
    $("#d-more").onclick = () => { state.docs.shown += PAGE; renderDocs(); };
    $("#d-export").onclick = () => exportDocs(state.docs.rows, `cvm-documentos-${today()}.csv`);

    const dirAgain = () => { state.dir.shown = 60; store.set("cias-sort", $("#c-sort").value); renderDir(); };
    $("#c-q").oninput = debounce(dirAgain);
    for (const id of ["#c-setor", "#c-seg", "#c-sort", "#c-listed", "#c-favs"]) $(id).onchange = dirAgain;
    $("#c-more").onclick = () => { state.dir.shown += 60; renderDir(); };
    $("#c-sort").value = store.get("cias-sort", "mc");

    const entAgain = () => { state.ent.shown = PAGE; renderEntDocs(); };
    $("#e-q").oninput = debounce(entAgain);
    $("#e-from").onchange = entAgain; $("#e-to").onchange = entAgain;
    $("#e-more").onclick = () => { state.ent.shown += PAGE; renderEntDocs(); };

    document.addEventListener("click", (e) => {
      const f = e.target.closest("[data-fav]");
      if (f) { e.preventDefault(); e.stopPropagation(); toggleFav(f.dataset.fav); return; }
      const pane = e.target.closest("[data-pane]");
      if (pane) { showPane(pane.dataset.pane); if (!pane.closest("#cia-tabs")) $("#cia-tabs").scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      const qtk = e.target.closest("[data-qtk]");
      if (qtk) { state.quoteTk = qtk.dataset.qtk; openCia(state.cia, state.pane); return; }
      const card = e.target.closest("[data-open]");
      if (card && !e.target.closest("a")) { location.hash = `#cia/${card.dataset.open}`; return; }
      const li = e.target.closest("#finder-list li[data-k]");
      if (li) pickFinder(li.dataset.k);
      else if (!e.target.closest(".finder")) $("#finder-list").hidden = true;
    });
    document.addEventListener("input", (e) => {
      if (e.target.id !== "part-q") return;
      const q = fold(e.target.value.trim());
      for (const tr of document.querySelectorAll("#part-table tbody tr")) tr.hidden = q && !tr.dataset.f.includes(q);
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
    const focusFinder = () => {
      if (state.view === "cia") { location.hash = "#cias"; setTimeout(() => $("#finder").focus(), 50); } else $("#finder").focus();
    };
    $("#side-finder").onclick = focusFinder;
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && document.activeElement?.dataset?.open) { location.hash = `#cia/${document.activeElement.dataset.open}`; return; }
      if ((e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); focusFinder(); }
    });
    $("#btn-share").onclick = () => {
      navigator.clipboard.writeText(location.href).then(() => toast("Link copiado"), () => toast("Não consegui copiar o link"));
    };

    const applyTheme = (t) => { if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; };
    $("#btn-theme").onclick = () => {
      const dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      const next = dark ? "light" : "dark";
      applyTheme(next); store.set("theme", next);
    };
    new IntersectionObserver(([en]) => document.body.classList.toggle("scrolled", !en.isIntersecting), { rootMargin: "-52px 0px 0px 0px" })
      .observe($("#page-title"));
    window.addEventListener("hashchange", route);
  }

  async function init() {
    wire();
    try {
      [state.index, state.resumo] = await Promise.all([
        fetchJson("data/cias/index.json"),
        fetchJson("data/cias/resumo.json").then((r) => r.cias || {}).catch(() => ({})),
      ]);
    } catch {
      $("#dateline").textContent = "Base indisponível";
      $("#banner").hidden = false;
      $("#banner").textContent = "A base de companhias ainda não foi gerada. Ela é montada a cada atualização do portal; tente de novo em alguns minutos.";
      document.body.classList.remove("loading");
      return;
    }
    document.body.classList.remove("loading");
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
    route();
  }

  init();
})();
