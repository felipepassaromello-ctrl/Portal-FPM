/* Portal FPM — Mundo das companhias (3D).
 *
 * Fonte de site/mundo.js (gerado com `npm run build` nesta pasta). O planeta (globe.js) mostra as companhias abertas
 * como torres sobre continentes de setores, os acionistas no chão, os investidores institucionais em órbita e as
 * ligações de controle como arcos; a estrutura societária de uma entidade abre numa mesa 3D (tree.js), com a companhia
 * no centro e cabos com energia correndo de quem é dono para quem é possuído.
 *
 * Os dados vêm de data/cias/mundo.json (scripts/mundo.py, scripts/mundo_layout.mjs e scripts/mundo_globo.mjs).
 * Endereços compartilháveis: #n/<id> (entidade), #g/<grupo>, #e/<id> (estrutura), #c/<id>/<id> (caminho).
 */
import { createGlobe, clamp } from "./globe.js";
import { createTree } from "./tree.js";
import { fallbackGlobe } from "./fallback.js";

// ---------------------------------------------------------------- utilidades
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fold = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const nf = (v, d = 0) => Number(v).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
const isNum = (v) => typeof v === "number" && isFinite(v);
const brl = (v) => (!isNum(v) ? "–" : v >= 1e12 ? `R$ ${nf(v / 1e12, 2)} tri` : v >= 1e9 ? `R$ ${nf(v / 1e9, v >= 1e11 ? 0 : 1)} bi` : v >= 1e6 ? `R$ ${nf(v / 1e6, 0)} mi` : `R$ ${nf(v)}`);
const pct = (p) => (isNum(p) && p >= 0 ? `${nf(p, p >= 10 || p === Math.round(p) ? (p === Math.round(p) ? 0 : 1) : 2)}%` : "–");
const plural = (n, s, p) => `${nf(n)} ${n === 1 ? s : p}`;
const icon = (n, cls = "ic") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const store = {
  get: (k, d) => { try { const v = localStorage.getItem(`n1:${k}`); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem(`n1:${k}`, JSON.stringify(v)); } catch {} },
};
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const TOUCH = matchMedia("(pointer: coarse)").matches;
const shortName = (s) => {
  const t = String(s).replace(/[\s,]+(S\.?\/?A\.?|S\/a|Ltda\.?|Inc\.?|LLC|S\.à ?r\.l\.?|Sarl|S\.R\.L\.)\s*$/i, "").replace(/\s*\(.*?\)\s*$/, "").replace(/[\s,;-]+$/, "");
  return t.length > 34 ? `${t.slice(0, 32)}…` : t;
};
const fmtCnpj = (d) => (d.length === 14 ? `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}` : d);
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => { t.hidden = true; }, 2800);
}

// ---------------------------------------------------------------- cores
// Setores em tons de pó (mesma luminosidade, matiz girando na ordem dos continentes): distinguem sem gritar.
const SECTOR = {
  fin: ["#8fb8e8", "Bancos e serviços financeiros", "Financeiro"], tech: ["#7cc6d9", "Telecom, mídia e tecnologia", "Tecnologia"],
  saude: ["#78cfc0", "Saúde e educação", "Saúde"], log: ["#8ccfa3", "Transporte e logística", "Logística"],
  agro: ["#b5cf86", "Agro, alimentos e bebidas", "Agro"], ind: ["#d4c97f", "Indústria e bens de capital", "Indústria"],
  util: ["#e3bb72", "Energia elétrica e saneamento", "Energia"], oil: ["#e59f78", "Petróleo, gás e química", "Petróleo"],
  base: ["#d99090", "Mineração, siderurgia e papel", "Mineração"], cons: ["#d996b4", "Varejo e consumo", "Consumo"],
  imob: ["#b9a0dd", "Construção e imóveis", "Imobiliário"], out: ["#a8b3bf", "Holdings e outros", "Holdings"],
};
const KIND = {
  pf: ["#d8c2a6", "Pessoa física"], hold: ["#9fb0c4", "Holding ou empresa"], fund: ["#a3b0e6", "Gestora ou fundo"],
  pen: ["#bfaee6", "Fundo de pensão"], gov: ["#e6cb86", "Governo"], sub: ["#93cfb3", "Controlada em comum"],
};
const ACCENT = "#3cf0b4";
const sectorColor = (c) => (SECTOR[c] || SECTOR.out)[0];
const kindKey = (n) => (n.t === "s" ? "sub" : n.t === "p" ? "pf" : KIND[n.c] ? n.c : "hold");
const colorOf = (n) => (n.t === "c" ? sectorColor(n.c) : KIND[kindKey(n)][0]);
const kindLabel = (n) => (n.t === "c" ? "Companhia aberta" : KIND[kindKey(n)][1]);
const palette = { sector: sectorColor, kind: (n) => KIND[kindKey(n)][0] };

// ---------------------------------------------------------------- dados
const W = { ready: false };
function prepare(data) {
  const nodes = data.nodes, N = nodes.length;
  Object.assign(W, { data, nodes, N, groups: data.groups || [], setores: data.setores || {} });
  nodes.forEach((n, i) => { n.i = i; n.f = fold(n.n); });
  const E = data.edges || [];
  W.M = E.length;
  W.es = new Int32Array(W.M); W.et = new Int32Array(W.M); W.ep = new Float32Array(W.M); W.ef = new Uint8Array(W.M);
  E.forEach(([s, t, p, f], j) => { W.es[j] = s; W.et[j] = t; W.ep[j] = p; W.ef[j] = f; });
  const B = data.board || [];
  W.B = B.length;
  W.bs = new Int32Array(W.B); W.bt = new Int32Array(W.B); W.br = B.map((b) => b[2]);
  B.forEach(([s, t], j) => { W.bs[j] = s; W.bt[j] = t; });
  W.out = Array.from({ length: N }, () => []); W.inc = Array.from({ length: N }, () => []); W.brd = Array.from({ length: N }, () => []);
  for (let j = 0; j < W.M; j++) { W.out[W.es[j]].push(j); W.inc[W.et[j]].push(j); }
  for (let j = 0; j < W.B; j++) { W.brd[W.bs[j]].push(j); W.brd[W.bt[j]].push(j); }
  W.groups.forEach((g, gi) => {
    g.i = gi; g.f = fold(g.n);
    const cnt = {};
    for (const m of g.m) if (nodes[m].t === "c") cnt[nodes[m].c] = (cnt[nodes[m].c] || 0) + (nodes[m].mc || 1e8);
    g.sector = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0]?.[0] || "out";
  });
  W.deg = Float32Array.from(nodes, (n, i) => W.out[i].length + W.inc[i].length + W.brd[i].length);
  W.crank = new Int32Array(N).fill(1e9);
  nodes.map((n, i) => i).filter((i) => nodes[i].t === "c").sort((a, b) => (nodes[b].mc || 0) - (nodes[a].mc || 0)).forEach((i, r) => { W.crank[i] = r; });
  W.labelOrder = nodes.map((n, i) => i).sort((a, b) => prio(b) - prio(a));
  W.byId = new Map(nodes.map((n) => [n.id, n.i]));
  W.byK = new Map(nodes.filter((n) => n.k).map((n) => [n.k, n.i]));
  W.bySlug = new Map(nodes.filter((n) => n.s).map((n) => [n.s, n.i]));
  W.byCnpj = new Map(nodes.filter((n) => n.cnpj).map((n) => [n.cnpj, n.i]));
  W.ready = true;
}
const prio = (i) => { const n = W.nodes[i]; return n.t === "c" ? 1e15 + (n.mc || 0) + W.deg[i] * 1e8 : (n.v || 0) + W.deg[i] * 5e8; };

// ---------------------------------------------------------------- estado
const ui = {
  mode: "world", // world | tree | path
  hover: -1, sel: -1, group: -1,
  hl: null, // Set de nós em destaque
  layers: { people: true, funds: true, board: false, ctlonly: false, groups: true, ...store.get("mundo-layers", {}) },
  pathIds: null,
  lastInput: performance.now(),
};
let vis = new Uint8Array(1);
function computeVisibility() {
  vis = new Uint8Array(W.N);
  const L = ui.layers;
  for (let i = 0; i < W.N; i++) {
    const n = W.nodes[i];
    let v = 1;
    if (n.t === "p" && !L.people) v = 0;
    if (n.t === "j" && (n.c === "fund" || n.c === "pen") && !L.funds) v = 0;
    if (n.b && !L.board && !W.out[i].length && !W.inc[i].length) v = 0;
    if (L.ctlonly && n.t !== "c" && !W.out[i].some((j) => W.ef[j] & 1)) v = 0;
    vis[i] = v;
  }
  globe?.setVisible(vis);
}

let globe = null, tree = null;

// ---------------------------------------------------------------- destaque
function neighborhood(i) {
  const nodes = new Set([i]), edges = new Set(), brd = new Set();
  for (const j of W.out[i]) { if (vis[W.et[j]] && (!ui.layers.ctlonly || W.ef[j] & 1)) { nodes.add(W.et[j]); edges.add(j); } }
  for (const j of W.inc[i]) { if (vis[W.es[j]] && (!ui.layers.ctlonly || W.ef[j] & 1)) { nodes.add(W.es[j]); edges.add(j); } }
  if (ui.layers.board || W.nodes[i].b) for (const j of W.brd[i]) { const o = W.bs[j] === i ? W.bt[j] : W.bs[j]; nodes.add(o); brd.add(j); }
  return { nodes, edges, brd };
}
function setHighlight(nodes, edges, brd, focus = [], dimTo = 0.75, bright = false) {
  ui.hl = nodes;
  if (!globe) return;
  if (!nodes) { globe.setHighlight(null); globe.setFlows([]); return; }
  const lv = new Map();
  for (const i of nodes) lv.set(i, 0.5);
  for (const i of focus) lv.set(i, 1);
  globe.setHighlight(lv, dimTo);
  const flows = [];
  for (const j of edges || []) flows.push([W.es[j], W.et[j], bright ? 1 : W.ef[j] & 1]);
  for (const j of brd || []) flows.push([W.bs[j], W.bt[j], bright ? 1 : 0]);
  // controle primeiro (os cabos de controle são desenhados mesmo quando há centenas de ligações)
  flows.sort((a, b) => b[2] - a[2]);
  globe.setFlows(flows);
}

function select(i, { fly = true, push = true } = {}) {
  if (ui.mode !== "world") exitMode(false);
  hideHint();
  ui.sel = i; ui.group = -1;
  if (i < 0) {
    setHighlight(null);
    closePanel();
    if (push) route("");
    return;
  }
  const nb = neighborhood(i);
  setHighlight(nb.nodes, nb.edges, nb.brd, [i]);
  renderPanel(i);
  markRank();
  if (fly) globe.flyToNode(i, [...nb.nodes].filter((x) => x !== i && globe.surf[x]), { minDist: W.nodes[i].t === "c" ? 1.45 : 1.6 });
  if (push) route(`n/${W.nodes[i].id}`);
}
function selectGroup(gi, { push = true } = {}) {
  if (ui.mode !== "world") exitMode(false);
  hideHint();
  const g = W.groups[gi];
  ui.sel = -1; ui.group = gi;
  const nodes = new Set(g.m), edges = new Set();
  for (const m of g.m) for (const j of W.out[m]) if (nodes.has(W.et[j])) edges.add(j);
  setHighlight(nodes, edges, new Set(), g.m.filter((m) => W.nodes[m].t === "c"));
  renderGroupPanel(gi);
  markRank();
  globe.flyToNodes(g.m.filter((m) => W.nodes[m].t === "c"), { minDist: 1.6 });
  if (push) route(`g/${gi}`);
}
function flyToSector(c) {
  const cont = (W.data.globo.cont || []).find((x) => x[0] === c);
  if (!cont) return;
  if (ui.mode !== "world") exitMode(false);
  select(-1);
  globe.flyTo(cont[1], cont[2], clamp(1.6 + cont[3] / 18, 2.1, 3.2), 1600);
}

// ---------------------------------------------------------------- controle societário
function mainController(i) {
  let best = -1, bp = -2;
  for (const j of W.inc[i]) if (W.ef[j] & 1 && W.ep[j] > bp) { bp = W.ep[j]; best = W.es[j]; }
  return best;
}
function controlChain(i) {
  const chain = [i], seen = new Set([i]);
  for (;;) {
    const p = mainController(chain[chain.length - 1]);
    if (p < 0 || seen.has(p)) break;
    seen.add(p); chain.push(p);
  }
  return chain;
}
const edgeBetween = (a, b) => W.out[a].find((j) => W.et[j] === b);

// ---------------------------------------------------------------- painel
function badgeHtml(n) {
  const col = colorOf(n);
  if (n.t === "c") {
    const ini = n.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
    return `<span class="m-badge" style="--c:${col}"><span>${esc(ini)}</span>${n.tk ? `<img src="https://icons.brapi.dev/icons/${esc(n.tk)}.svg" alt="" loading="lazy" onload="this.naturalWidth > 1 ? this.classList.add('ok') : this.remove()" onerror="this.remove()">` : ""}</span>`;
  }
  if (n.t === "p") {
    const ini = n.n.split(/\s+/).filter((w) => w && !/^(de|da|do|das|dos|e)$/i.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
    return `<span class="m-badge round" style="--c:${col}"><span>${esc(ini)}</span></span>`;
  }
  return `<span class="m-badge" style="--c:${col}">${icon("cias")}</span>`;
}
function rowHtml(i, pctText, sub, ctl) {
  const n = W.nodes[i];
  return `<li data-go="${i}"><span class="m-dot" style="--c:${colorOf(n)}"></span><span class="nm">${esc(n.n)}</span>
    <span class="pc ${ctl ? "m-ctl" : ""}">${esc(pctText)}</span>${sub ? `<small>${esc(sub)}</small>` : ""}</li>`;
}
function listHtml(rows, limit = 8, id = "") {
  if (!rows.length) return "";
  return `<ul class="m-list" ${id ? `data-list="${id}"` : ""}>${rows.slice(0, limit).join("")}${rows.length > limit ? `<li class="more" data-more="${id}">Mostrar mais ${rows.length - limit}</li>` : ""}</ul>`;
}
function donutHtml(inc) {
  const holders = inc.filter((x) => x.p > 0).slice(0, 7);
  if (!holders.length) return "";
  let sum = holders.reduce((s, x) => s + x.p, 0);
  const scale = sum > 100 ? 100 / sum : 1;
  sum = Math.min(100, sum);
  const R = 46, C = 2 * Math.PI * R;
  let acc = 0;
  const segs = holders.map((x) => {
    const frac = (x.p * scale) / 100, len = Math.max(0, frac * C - 2);
    const seg = `<circle r="${R}" cx="60" cy="60" fill="none" stroke="${colorOf(W.nodes[x.o])}" stroke-width="${x.ctl ? 13 : 10}" stroke-dasharray="${len.toFixed(2)} ${(C - len).toFixed(2)}" stroke-dashoffset="${(-acc * C).toFixed(2)}" data-go="${x.o}"><title>${esc(W.nodes[x.o].n)} · ${pct(x.p)}</title></circle>`;
    acc += frac;
    return seg;
  }).join("");
  const top = holders[0];
  const legend = holders.slice(0, 5).map((x) => `<li data-go="${x.o}"><i style="--c:${colorOf(W.nodes[x.o])}"></i><span>${esc(shortName(W.nodes[x.o].n))}</span><b>${pct(x.p)}</b></li>`).join("")
    + (sum < 99.5 ? `<li class="rest"><i></i><span>Demais acionistas</span><b>${pct(100 - sum)}</b></li>` : "");
  return `<div class="m-donut"><svg viewBox="0 0 120 120" aria-hidden="true"><circle r="${R}" cx="60" cy="60" fill="none" class="m-donut-track" stroke-width="10"/><g transform="rotate(-90 60 60)">${segs}</g>
    <text x="60" y="56" text-anchor="middle" class="m-donut-v">${pct(top.p)}</text><text x="60" y="72" text-anchor="middle" class="m-donut-l">${top.ctl ? "controle" : "maior fatia"}</text></svg>
    <ul>${legend}</ul></div>`;
}
let panelRows = {};
const ROLE = { P: "Presidente do conselho", E: "Diretor-presidente (CEO)", C: "Conselho de administração", D: "Diretoria" };

function renderPanel(i) {
  const n = W.nodes[i];
  const body = $("#m-panel-body");
  const inc = W.inc[i].map((j) => ({ j, o: W.es[j], p: W.ep[j], ctl: W.ef[j] & 1 })).sort((a, b) => b.ctl - a.ctl || b.p - a.p);
  const out = W.out[i].map((j) => ({ j, o: W.et[j], p: W.ep[j], ctl: W.ef[j] & 1 })).sort((a, b) => b.ctl - a.ctl || (W.nodes[b.o].mc || 0) * b.p - (W.nodes[a.o].mc || 0) * a.p || b.p - a.p);
  const brd = W.brd[i].map((j) => ({ j, o: W.bs[j] === i ? W.bt[j] : W.bs[j], r: W.br[j] }));
  const g = n.g != null ? W.groups[n.g] : null;
  const chain = controlChain(i);
  const ctlOut = out.filter((x) => x.ctl).length;
  const subs = n.t === "c" ? [n.tk || "capital fechado", n.st, n.uf] : [kindLabel(n), n.pais, n.cnpj ? fmtCnpj(n.cnpj) : ""];
  const stats = n.t === "c"
    ? [["Valor de mercado", n.mc ? brl(n.mc) : "–"], ["Acionistas", nf(inc.length)], ["Participações", nf(out.length)]]
    : [["Participações", nf(out.length)], ["Valor estimado", n.v ? brl(n.v) : "–"], [brd.length ? "Cargos" : "Controla", nf(brd.length || ctlOut)]];
  panelRows = {
    inc: inc.map((x) => rowHtml(x.o, pct(x.p), [x.ctl ? "controlador" : "", W.ef[x.j] & 2 ? "acordo de acionistas" : "", kindLabel(W.nodes[x.o])].filter(Boolean).join(" · "), x.ctl)),
    out: out.map((x) => rowHtml(x.o, pct(x.p), [x.ctl ? "controla" : "", W.nodes[x.o].mc ? `valor de mercado ${brl(W.nodes[x.o].mc)}` : kindLabel(W.nodes[x.o])].filter(Boolean).join(" · "), x.ctl)),
    brd: brd.map((x) => {
      const o = W.nodes[x.o];
      if (n.t === "c") {
        const others = W.brd[x.o].map((j) => (W.bs[j] === x.o ? W.bt[j] : W.bs[j])).filter((c) => c !== i).map((c) => shortName(W.nodes[c].n));
        return rowHtml(x.o, "", `${ROLE[x.r] || "Cargo"} aqui · também em ${others.slice(0, 3).join(", ")}${others.length > 3 ? ` e mais ${others.length - 3}` : ""}`, false);
      }
      return rowHtml(x.o, "", `${ROLE[x.r] || "Cargo"}${o.mc ? ` · ${brl(o.mc)}` : ""}`, false);
    }),
  };
  const profile = n.t === "c" && n.k ? `cias.html#cia/${encodeURIComponent(n.k)}` : n.s ? `cias.html#pessoa/${encodeURIComponent(n.s)}` : "";
  const sectorName = n.t === "c" ? W.setores[n.c] || SECTOR[n.c]?.[1] : "";
  const inTree = ui.mode === "tree";
  body.innerHTML = `
    <div class="m-kicker" style="--c:${colorOf(n)}"><i></i>${esc(n.t === "c" ? sectorName || "Companhia aberta" : kindLabel(n))}</div>
    <div class="m-head">${badgeHtml(n)}<div><h2>${esc(n.n)}</h2><p>${esc(subs.filter(Boolean).join(" · "))}</p></div></div>
    ${g && g.nc >= 2 ? `<div class="m-chips"><button class="m-chip gold" data-group="${g.i}" type="button">${icon("cias", "ic ic-xs")}Grupo ${esc(g.n)} · ${plural(g.nc, "companhia", "companhias")}</button></div>` : ""}
    <div class="m-stats">${stats.map(([a, b]) => `<div class="m-stat"><span>${a}</span><b>${esc(b)}</b></div>`).join("")}</div>
    <div class="m-btns">
      ${inTree && ui.treeFocus === i ? `<button class="m-btn primary" type="button" data-act="world">${icon("globe")}Ver no planeta</button>` : `<button class="m-btn primary" type="button" data-act="tree">${icon("tree")}Estrutura societária</button>`}
      <button class="m-btn" type="button" data-act="path">${icon("path")}Conectar com…</button>
      ${profile ? `<a class="m-btn wide ghost" href="${profile}">${n.t === "c" ? "Perfil completo da companhia" : "Perfil completo"} ${icon("ext")}</a>` : ""}
    </div>
    <div id="m-pick-slot"></div>
    ${n.t === "c" && inc.length ? `<div class="m-sec"><h3>Composição acionária<small>participações relevantes</small></h3>${donutHtml(inc)}</div>` : ""}
    ${chain.length > 1 ? `<div class="m-sec"><h3>Quem controla<small>do controlador final até aqui</small></h3><ol class="m-chain">${chain.slice().reverse().map((c, idx, arr) => {
      const next = arr[idx + 1];
      const e = next != null ? edgeBetween(c, next) : null;
      const label = e == null ? "" : W.ef[e] & 2 ? `bloco de controle · ${pct(W.ep[e])}` : `controla com ${pct(W.ep[e])}`;
      return `<li data-go="${c}" class="${c === i ? "me" : ""}"><span class="nm">${esc(W.nodes[c].n)}</span><span class="pc">${label}</span></li>`;
    }).join("")}</ol></div>` : ""}
    ${inc.length ? `<div class="m-sec"><h3>${n.t === "c" ? "Acionistas" : "Quem é dono"}<small>${plural(inc.length, "acionista", "acionistas")} relevante${inc.length === 1 ? "" : "s"}</small></h3>${listHtml(panelRows.inc, 8, "inc")}</div>` : ""}
    ${out.length ? `<div class="m-sec"><h3>${n.t === "c" ? "Participações em outras" : "Participações"}<small>${plural(out.length, "empresa", "empresas")}</small></h3>${listHtml(panelRows.out, 8, "out")}</div>` : ""}
    ${brd.length ? `<div class="m-sec"><h3>${n.t === "c" ? "Quem do conselho ou da diretoria também está em outras" : "Cargos"}<small>${plural(brd.length, n.t === "c" ? "pessoa" : "companhia", n.t === "c" ? "pessoas" : "companhias")}</small></h3>${listHtml(panelRows.brd, 8, "brd")}</div>` : ""}
    <p class="m-foot">Participações acima de 5% e controladores, como declarados no Formulário de Referência de cada companhia à CVM${n.v ? "; valor estimado = participação × valor de mercado" : ""}.</p>`;
  openPanel();
}
function renderGroupPanel(gi) {
  const g = W.groups[gi];
  const cos = g.m.filter((m) => W.nodes[m].t === "c").sort((a, b) => (W.nodes[b].mc || 0) - (W.nodes[a].mc || 0));
  const head = W.nodes[g.h];
  panelRows = { cos: cos.map((m) => rowHtml(m, W.nodes[m].mc ? brl(W.nodes[m].mc) : "", [W.nodes[m].tk, m === g.h ? "topo do grupo" : ""].filter(Boolean).join(" · "), false)) };
  const tot = cos.reduce((s, m) => s + (W.nodes[m].mc || 0), 0);
  const bar = tot ? `<div class="m-bar">${cos.filter((m) => W.nodes[m].mc).slice(0, 12).map((m) => `<span data-go="${m}" style="flex:${W.nodes[m].mc / tot};--c:${colorOf(W.nodes[m])}" title="${esc(W.nodes[m].n)} · ${brl(W.nodes[m].mc)}"></span>`).join("")}</div>` : "";
  $("#m-panel-body").innerHTML = `
    <div class="m-kicker" style="--c:${sectorColor(g.sector)}"><i></i>Grupo econômico · ${esc(SECTOR[g.sector]?.[1] || "")}</div>
    <div class="m-head"><span class="m-badge" style="--c:${sectorColor(g.sector)}">${icon("cias")}</span><div><h2>Grupo ${esc(g.n)}</h2><p>${plural(g.nc, "companhia aberta", "companhias abertas")} · ${plural(g.m.length, "entidade", "entidades")}</p></div></div>
    <div class="m-stats">
      <div class="m-stat"><span>Valor de mercado</span><b>${esc(g.mc ? brl(g.mc) : "–")}</b></div>
      <div class="m-stat"><span>Companhias</span><b>${nf(g.nc)}</b></div>
      <div class="m-stat"><span>Entidades</span><b>${nf(g.m.length)}</b></div>
    </div>
    ${bar}
    <div class="m-btns"><button class="m-btn primary wide" type="button" data-act="tree" data-node="${g.h}">${icon("tree")}Estrutura a partir de ${esc(shortName(head.n))}</button></div>
    ${g.r.length ? `<div class="m-sec"><h3>Controle final</h3>${listHtml(g.r.map((r) => rowHtml(r, "", kindLabel(W.nodes[r]), true)), 6)}</div>` : ""}
    <div class="m-sec"><h3>Companhias do grupo<small>valor de mercado</small></h3>${listHtml(panelRows.cos, 12, "cos")}</div>
    <p class="m-foot">Grupo = companhias que chegam ao mesmo topo seguindo, em cada uma, o acionista controlador de maior participação.</p>`;
  openPanel();
}
function openPanel() {
  const p = $("#m-panel");
  // no celular a folha abre baixa: o planeta (ou a mesa) continua à vista; puxar pela alça mostra tudo
  if (innerWidth <= 760 && (p.hidden || ui.mode !== "world")) p.classList.add("peek");
  p.hidden = false;
  document.body.classList.add("panel-open");
  $("#m-panel-body").scrollTop = 0;
  layoutChanged();
}
function closePanel() {
  $("#m-panel").hidden = true;
  document.body.classList.remove("panel-open");
  layoutChanged();
}

// ---------------------------------------------------------------- caminho entre duas entidades
function findPath(a, b) {
  const bridgeOk = (i) => !(W.nodes[i].t === "j" && (W.nodes[i].c === "fund" || W.nodes[i].c === "pen")) || i === a || i === b;
  const prev = new Int32Array(W.N).fill(-1), via = new Int32Array(W.N).fill(-1);
  const q = [a];
  prev[a] = a;
  while (q.length) {
    const u = q.shift();
    if (u === b) break;
    if (u !== a && !bridgeOk(u)) continue;
    const step = (v, e) => { if (prev[v] === -1) { prev[v] = u; via[v] = e; q.push(v); } };
    for (const j of W.out[u]) step(W.et[j], j);
    for (const j of W.inc[u]) step(W.es[j], j);
    for (const j of W.brd[u]) step(W.bs[j] === u ? W.bt[j] : W.bs[j], -2 - j);
  }
  if (prev[b] === -1) return null;
  const path = [b], ev = [];
  for (let v = b; v !== a; v = prev[v]) { ev.unshift(via[v]); path.unshift(prev[v]); }
  return { path, ev };
}
function showPath(a, b, { push = true } = {}) {
  const r = findPath(a, b);
  if (!r) { toast(`Não há ligação entre ${shortName(W.nodes[a].n)} e ${shortName(W.nodes[b].n)} sem passar por gestoras ou fundos`); return; }
  if (ui.mode === "tree") exitMode(false);
  ui.mode = "path";
  ui.sel = -1;
  const nodes = new Set(r.path), edges = new Set(), brd = new Set();
  for (const e of r.ev) { if (e >= 0) edges.add(e); else brd.add(-2 - e); }
  ui.pathIds = [a, b];
  hideHint();
  setHighlight(nodes, edges, brd, r.path, 0.85, true);
  $("#m-mode").hidden = false;
  $("#m-mode-text").innerHTML = `<span class="m-mode-k">Caminho</span><b>${esc(shortName(W.nodes[a].n))} → ${esc(shortName(W.nodes[b].n))}</b><span class="m-mode-n">${plural(r.ev.length, "passo", "passos")}</span>`;
  const steps = r.ev.map((e) => {
    const nm = (i) => `<b data-go="${i}">${esc(W.nodes[i].n)}</b>`;
    if (e >= 0) {
      const own = W.es[e], owned = W.et[e], p = W.ep[e], ctl = W.ef[e] & 1;
      return `<li>${nm(own)} ${ctl ? "controla" : "tem"} ${p >= 0 ? `${pct(p)} de` : "participação em"} ${nm(owned)}</li>`;
    }
    const j = -2 - e, person = W.bs[j], co = W.bt[j];
    return `<li>${nm(person)} está ${({ P: "na presidência do conselho", E: "na presidência executiva", C: "no conselho de administração", D: "na diretoria" })[W.br[j]] || "na administração"} de ${nm(co)}</li>`;
  });
  $("#m-panel-body").innerHTML = `
    <div class="m-kicker" style="--c:${ACCENT}"><i></i>Caminho mais curto</div>
    <div class="m-head"><span class="m-badge" style="--c:${ACCENT}">${icon("path")}</span><div><h2>Como se conectam</h2><p>${esc(shortName(W.nodes[a].n))} e ${esc(shortName(W.nodes[b].n))}</p></div></div>
    <div class="m-sec"><h3>O caminho<small>${plural(r.ev.length, "ligação", "ligações")}</small></h3><ol class="m-path">${steps.join("")}</ol></div>
    <div class="m-btns"><button class="m-btn wide" type="button" data-sel="${a}">Voltar para ${esc(shortName(W.nodes[a].n))}</button><button class="m-btn wide" type="button" data-sel="${b}">Ir para ${esc(shortName(W.nodes[b].n))}</button></div>
    <p class="m-foot">Ligações por participação acionária (5% ou mais, ou controle) e por pessoas que estão no conselho ou na diretoria das duas. Gestoras e fundos não contam como ponte.</p>`;
  openPanel();
  globe.flyToNodes(r.path, { minDist: 1.6 });
  if (push) route(`c/${W.nodes[a].id}/${W.nodes[b].id}`);
}

// ---------------------------------------------------------------- estrutura societária (a mesa 3D)
async function openTree(i, { push = true } = {}) {
  const n = W.nodes[i];
  // controladas de capital fechado que não estão no mapa, do perfil da companhia
  let extra = [];
  try { await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1200))]); } catch {}
  if (n.t === "c" && n.k) {
    try {
      const p = await fetch(`data/cias/perfil/${encodeURIComponent(n.k)}.json`, { cache: "no-cache" }).then((r) => (r.ok ? r.json() : {}));
      extra = p.participacoes || [];
    } catch { extra = []; }
  }
  const wasWorld = ui.mode !== "tree";
  if (wasWorld) await fade();
  ui.mode = "tree";
  ui.sel = i; ui.group = -1; ui.treeFocus = i;
  hideHint();
  showTip(-1);
  ui.hover = -1;
  setHighlight(null);
  document.body.classList.add("in-tree");
  renderPanel(i);
  tree.open(i, extra, { from: wasWorld ? globe.project(i, {}) : null });
  $("#m-mode").hidden = false;
  $("#m-mode-text").innerHTML = `<span class="m-mode-k">Estrutura societária</span><b>${esc(n.n)}</b>`;
  if (push) route(`e/${n.id}`);
}
// passagem entre o planeta e a mesa: escurece rápido, troca a cena e clareia
function fade() {
  const f = $("#m-fade");
  if (!f || REDUCED) return Promise.resolve();
  f.classList.add("on");
  clearTimeout(fade.t);
  fade.t = setTimeout(() => f.classList.remove("on"), 260);
  return new Promise((res) => setTimeout(res, 170));
}
function exitMode(push = true) {
  if (ui.mode === "tree") { fade(); tree.close(); document.body.classList.remove("in-tree"); }
  ui.mode = "world";
  $("#m-mode").hidden = true;
  ui.pathIds = null;
  if (push) {
    if (ui.sel >= 0) select(ui.sel);
    else { setHighlight(null); route(""); }
  }
}

// ---------------------------------------------------------------- busca
function search(q, limit = 9) {
  const f = fold(q.trim());
  if (f.length < 2) return [];
  const words = f.split(/\s+/);
  const out = [];
  for (const g of W.groups) {
    if (g.nc < 2) continue;
    if (words.every((w) => g.f.includes(w))) out.push({ g: g.i, s: (g.f.startsWith(f) ? 100 : 50) + Math.log10(g.mc || 10) });
  }
  for (const n of W.nodes) {
    if (!vis[n.i] && n.t !== "c") continue;
    let s = 0;
    if (n.f === f || (n.tk && fold(n.tk) === f)) s = 120;
    else if (n.f.startsWith(f) || (n.tk && fold(n.tk).startsWith(f))) s = 90;
    else if (words.every((w) => n.f.includes(w))) s = n.f.split(/\s+/).some((w) => w.startsWith(words[0])) ? 60 : 35;
    if (!s) continue;
    s += n.t === "c" ? 12 + Math.log10(n.mc || 1e6) : Math.log10(n.v || 1e6) + W.deg[n.i] * 0.2;
    out.push({ i: n.i, s });
  }
  return out.sort((a, b) => b.s - a.s).slice(0, limit);
}
function resultsHtml(res) {
  if (!res.length) return `<li class="none">Nada com esse nome no mapa.</li>`;
  const groups = [["Grupos econômicos", res.filter((r) => r.g != null)], ["Companhias", res.filter((r) => r.i != null && W.nodes[r.i].t === "c")], ["Pessoas e investidores", res.filter((r) => r.i != null && W.nodes[r.i].t !== "c")]];
  let k = 0;
  return groups.filter(([, l]) => l.length).map(([label, l]) => `<li class="grp" role="presentation">${label}</li>` + l.map((r) => {
    const idx = k++;
    if (r.g != null) {
      const g = W.groups[r.g];
      return `<li role="option" data-idx="${idx}" aria-selected="false"><span class="m-dot" style="--c:${sectorColor(g.sector)}"></span><span class="m-r-txt"><b>Grupo ${esc(g.n)}</b><small>${plural(g.nc, "companhia", "companhias")}${g.mc ? ` · ${brl(g.mc)}` : ""}</small></span></li>`;
    }
    const n = W.nodes[r.i];
    return `<li role="option" data-idx="${idx}" aria-selected="false"><span class="m-dot" style="--c:${colorOf(n)}"></span><span class="m-r-txt"><b>${esc(n.n)}</b><small>${esc(n.t === "c" ? [n.tk, n.mc ? brl(n.mc) : "capital fechado", n.st].filter(Boolean).join(" · ") : [kindLabel(n), n.v ? `≈ ${brl(n.v)}` : ""].filter(Boolean).join(" · "))}</small></span></li>`;
  }).join("")).join("");
}
function wireSearch(input, list, onPick) {
  let res = [], sel = 0;
  const render = () => {
    res = search(input.value);
    res = [...res.filter((r) => r.g != null), ...res.filter((r) => r.i != null && W.nodes[r.i].t === "c"), ...res.filter((r) => r.i != null && W.nodes[r.i].t !== "c")];
    sel = Math.min(sel, Math.max(0, res.length - 1));
    list.hidden = !input.value.trim();
    list.innerHTML = resultsHtml(res);
    list.querySelectorAll("[data-idx]").forEach((li) => li.setAttribute("aria-selected", String(+li.dataset.idx === sel)));
    input.closest("[role=combobox]")?.setAttribute("aria-expanded", String(!list.hidden));
  };
  const choose = (r) => { if (!r) return; input.value = ""; list.hidden = true; input.blur(); onPick(r); };
  input.addEventListener("input", () => { sel = 0; render(); });
  input.addEventListener("focus", () => { if (input.value.trim()) render(); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + res.length) % Math.max(1, res.length); render(); }
    else if (e.key === "Enter") { e.preventDefault(); choose(res[sel]); }
    else if (e.key === "Escape") { input.value = ""; list.hidden = true; input.blur(); }
  });
  list.addEventListener("pointerdown", (e) => { const li = e.target.closest("[data-idx]"); if (li) { e.preventDefault(); choose(res[+li.dataset.idx]); } });
  document.addEventListener("pointerdown", (e) => { if (!list.contains(e.target) && e.target !== input) list.hidden = true; });
}

// ---------------------------------------------------------------- explorar
let rankTab = "groups";
function renderRank() {
  const list = $("#m-rank"), note = $("#m-tab-note");
  let html = "";
  if (rankTab === "groups") {
    note.textContent = "Grupos econômicos pelo valor de mercado das companhias abertas que reúnem.";
    const top = W.groups.filter((g) => g.nc >= 2);
    const max = top[0]?.mc || 1;
    html = top.slice(0, 60).map((g) => `<li data-group="${g.i}" class="${ui.group === g.i ? "on" : ""}" style="--c:${sectorColor(g.sector)};--w:${((g.mc || 0) / max * 100).toFixed(1)}%"><b>${esc(g.n)}</b><span class="v">${g.mc ? brl(g.mc).replace("R$ ", "") : ""}</span>
      <small>${plural(g.nc, "companhia", "companhias")}${g.r.length ? ` · ${esc(g.r.slice(0, 2).map((r) => shortName(W.nodes[r].n)).join(", "))}` : ""}</small><i class="m-rank-bar"></i></li>`).join("");
  } else if (rankTab === "investors") {
    note.textContent = "Quem tem mais valor em participações diretas (participação × valor de mercado).";
    const top = W.nodes.filter((n) => n.t !== "c" && n.v).sort((a, b) => b.v - a.v).slice(0, 60);
    const max = top[0]?.v || 1;
    html = top.map((n) => `<li data-go="${n.i}" class="${ui.sel === n.i ? "on" : ""}" style="--c:${colorOf(n)};--w:${(n.v / max * 100).toFixed(1)}%"><b>${esc(shortName(n.n))}</b><span class="v">${brl(n.v).replace("R$ ", "")}</span>
      <small>${esc(kindLabel(n))} · ${plural(W.out[n.i].length, "participação", "participações")}</small><i class="m-rank-bar"></i></li>`).join("");
  } else {
    note.textContent = "Pessoas e empresas que mais ligam companhias entre si: participações e cadeiras em conselhos e diretorias.";
    const score = (n) => new Set([...W.out[n.i].map((j) => W.et[j]), ...W.brd[n.i].map((j) => W.bt[j])].filter((c) => W.nodes[c].t === "c")).size;
    const top = W.nodes.filter((n) => n.t === "p" || n.t === "j").map((n) => [n, score(n)]).filter(([, s]) => s >= 3).sort((a, b) => b[1] - a[1] || (b[0].v || 0) - (a[0].v || 0)).slice(0, 60);
    const max = top[0]?.[1] || 1;
    html = top.map(([n, s]) => `<li data-go="${n.i}" class="${ui.sel === n.i ? "on" : ""}" style="--c:${colorOf(n)};--w:${(s / max * 100).toFixed(1)}%"><b>${esc(shortName(n.n))}</b><span class="v">${s}</span>
      <small>${esc(kindLabel(n))} · ${s} companhias</small><i class="m-rank-bar"></i></li>`).join("");
  }
  list.innerHTML = html;
}
function markRank() {
  for (const li of $("#m-rank").children) li.classList.toggle("on", (li.dataset.group != null && +li.dataset.group === ui.group) || (li.dataset.go != null && +li.dataset.go === ui.sel));
}
function renderLegend() {
  const conts = (W.data.globo.cont || []).map((c) => c[0]);
  const count = {}, mc = {};
  for (const n of W.nodes) if (n.t === "c") { count[n.c] = (count[n.c] || 0) + 1; mc[n.c] = (mc[n.c] || 0) + (n.mc || 0); }
  $("#m-legend").innerHTML = `<div class="m-lg-sec">${conts.map((c) => `<button class="lg" type="button" data-sector="${c}"><i style="--c:${sectorColor(c)}"></i><span>${esc(SECTOR[c]?.[1] || c)}</span><small>${nf(count[c] || 0)}</small></button>`).join("")}</div>
    <div class="m-lg-kinds">${Object.keys(KIND).map((k) => `<span class="lg"><i class="sm" style="--c:${KIND[k][0]}"></i>${KIND[k][1]}</span>`).join("")}
    <span class="lg"><i class="ln" style="--c:${ACCENT}"></i>Controle</span><span class="lg"><i class="ln thin"></i>Participação</span></div>`;
}

// ---------------------------------------------------------------- endereço (links compartilháveis)
function route(h) {
  const want = h ? `#${h}` : "";
  if (location.hash !== want) history.replaceState(null, "", want || location.pathname + location.search);
}
function readRoute() {
  const h = decodeURIComponent(location.hash.replace(/^#/, ""));
  const [kind, a, b] = h.split("/");
  const node = (id) => {
    if (!id) return -1;
    if (W.byId.has(id)) return W.byId.get(id);
    if (id.startsWith("k") && W.byK.has(id.slice(1))) return W.byK.get(id.slice(1));
    if (W.bySlug.has(id)) return W.bySlug.get(id);
    if (W.byK.has(id)) return W.byK.get(id);
    return -1;
  };
  if (kind === "n" && node(a) >= 0) select(node(a), { push: false });
  else if (kind === "s" && W.bySlug.has(a)) select(W.bySlug.get(a), { push: false });
  else if (kind === "g" && W.groups[+a]) selectGroup(+a, { push: false });
  else if (kind === "e" && node(a) >= 0) openTree(node(a), { push: false });
  else if (kind === "c" && node(a) >= 0 && node(b) >= 0) showPath(node(a), node(b), { push: false });
  else if (kind === "n" || kind === "s" || kind === "e") toast("Essa entidade não está no mapa: ela não tem participação relevante em companhia aberta.");
}

// ---------------------------------------------------------------- rótulos (chamadas do painel técnico)
// Cada companhia importante ganha uma chamada: um ponto no alto da torre, um traço e o nome em versalete com o ticker e
// o valor de mercado. Sem sobreposição: em ordem de importância, cada uma só entra se couber.
const labels = { pool: [], used: new Map(), layer: null, t: 0 };
let uiRects = [], uiRectsT = 0;
function glassRects() {
  const now = performance.now();
  if (now - uiRectsT < 300) return uiRects;
  uiRectsT = now;
  uiRects = [];
  for (const el of document.querySelectorAll(".m-top > :not(.m-pop), #m-explore, #m-panel, .m-nav > *, #m-hud, #m-mode, #m-hint, .m-rail")) {
    if (el.hidden || el.offsetParent === null) continue;
    const r = el.getBoundingClientRect();
    if (r.width && r.height) uiRects.push([r.left - 6, r.top - 6, r.right + 6, r.bottom + 6]);
  }
  return uiRects;
}
function labelText(i) {
  const n = W.nodes[i];
  if (n.t === "c") return [shortName(n.n), [n.tk, n.mc ? brl(n.mc).replace("R$ ", "R$ ").toUpperCase() : "capital fechado"].filter(Boolean).join(" · ")];
  return [shortName(n.n), [kindLabel(n), n.v ? `≈ ${brl(n.v)}` : ""].filter(Boolean).join(" · ")];
}
function updateLabels() {
  if (!globe || ui.mode === "tree") { for (const el of labels.used.values()) el.classList.remove("on"); return; }
  const Wd = innerWidth, Hd = innerHeight;
  const placed = [...glassRects()];
  const fits = (x0, y0, x1, y1) => {
    if (x0 < 8 || y0 < 8 || x1 > Wd - 8 || y1 > Hd - 8) return false;
    for (const r of placed) if (x0 < r[2] && x1 > r[0] && y0 < r[3] && y1 > r[1]) return false;
    return true;
  };
  const z = 1 - clamp((globe.cam.dist - 1.4) / 4.2, 0, 1); // 0 longe, 1 perto
  const budget = Math.round((TOUCH ? 7 : 14) + z * z * (TOUCH ? 22 : 46));
  const hl = ui.hl;
  const order = hl ? [...hl].sort((a, b) => prio(b) - prio(a)).slice(0, 40).concat(W.labelOrder.slice(0, 160)) : W.labelOrder.slice(0, 220);
  const want = new Map();
  const o = {};
  let shown = 0;
  for (const i of order) {
    if (shown >= budget) break;
    if (want.has(i) || !vis[i]) continue;
    const n = W.nodes[i];
    const inHl = hl && hl.has(i);
    if (hl && !inHl) continue;
    if (!inHl && n.t !== "c" && z < 0.75) continue;
    globe.project(i, o);
    if (o.f < 0.18) continue;
    const [name, sub] = labelText(i);
    const big = n.t === "c" && W.crank[i] < 10;
    const w = Math.max(name.length * (big ? 7.6 : 6.9), sub.length * 6.1) + 14;
    const h = 30;
    // chamada para cima e para a direita; se não couber, para a esquerda
    const lx = o.x + 14, ly = o.y - 34;
    let x0 = lx, side = "r";
    if (!fits(lx, ly, lx + w, ly + h)) { x0 = o.x - 14 - w; side = "l"; if (!fits(x0, ly, x0 + w, ly + h)) continue; }
    placed.push([x0, ly, x0 + w, ly + h], [o.x - 4, o.y - 4, o.x + 4, o.y + 4]);
    want.set(i, { x: o.x, y: o.y, side, a: clamp((o.f - 0.18) / 0.25, 0, 1), hl: inHl, big });
    shown++;
  }
  // aplica no DOM: reaproveita os elementos
  for (const [i, el] of labels.used) if (!want.has(i)) { el.classList.remove("on"); labels.used.delete(i); labels.pool.push(el); }
  for (const [i, s] of want) {
    let el = labels.used.get(i);
    if (!el) {
      el = labels.pool.pop() || Object.assign(document.createElement("div"), { className: "m-lab" });
      if (!el.parentNode) labels.layer.appendChild(el);
      const [name, sub] = labelText(i);
      el.innerHTML = `<i class="m-lab-dot"></i><span class="m-lab-ln"></span><span class="m-lab-tx"><b>${esc(name)}</b><small>${esc(sub)}</small></span>`;
      el.dataset.i = i;
      el.classList.remove("on");
      el._t = performance.now();
      labels.used.set(i, el);
    } else if (!el.classList.contains("on") && performance.now() - el._t > 20) el.classList.add("on"); // entra com fade
    el.classList.toggle("l", s.side === "l");
    el.classList.toggle("hl", !!s.hl);
    el.classList.toggle("big", s.big);
    el.style.transform = `translate3d(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0)`;
    el.style.setProperty("--a", s.a.toFixed(2));
  }
}

// ---------------------------------------------------------------- leitura de posição (canto de baixo)
function updateHud() {
  const c = globe.cam;
  const lat = ((c.lat % 360) + 360) % 360 > 180 ? c.lat - 360 : c.lat;
  let lon = ((c.lon + 180) % 360 + 360) % 360 - 180;
  // continente sob o centro da tela
  let near = null, best = 1e9;
  for (const [s, la, lo, r] of W.data.globo.cont || []) {
    const d = Math.acos(clamp(Math.sin(la * Math.PI / 180) * Math.sin(lat * Math.PI / 180) + Math.cos(la * Math.PI / 180) * Math.cos(lat * Math.PI / 180) * Math.cos((lo - lon) * Math.PI / 180), -1, 1)) * 180 / Math.PI;
    if (d < r * 1.3 && d < best) { best = d; near = s; }
  }
  const alt = (c.dist - 1).toFixed(2).replace(".", ",");
  const txt = `<span>LAT ${lat >= 0 ? "+" : "−"}${Math.abs(lat).toFixed(1).replace(".", ",")}°</span><span>LON ${lon >= 0 ? "+" : "−"}${Math.abs(lon).toFixed(1).replace(".", ",")}°</span><span>ALT ${alt} R</span>${near ? `<span class="m-hud-sec" style="--c:${sectorColor(near)}">${esc((SECTOR[near]?.[1] || near).toUpperCase())}</span>` : ""}`;
  if (txt !== updateHud.last) { $("#m-hud").innerHTML = txt; updateHud.last = txt; }
}

// ---------------------------------------------------------------- dica ao passar o mouse
function showTip(i, px, py) {
  const tip = $("#m-tip");
  if (i < 0 || TOUCH) { tip.hidden = true; return; }
  const n = W.nodes[i];
  const rows = [];
  if (n.t === "c") {
    rows.push([n.tk || "Capital fechado", n.mc ? brl(n.mc) : ""]);
    const ctl = mainController(i);
    if (ctl >= 0) rows.push(["Controle", shortName(W.nodes[ctl].n)]);
  } else rows.push([kindLabel(n), n.v ? `≈ ${brl(n.v)}` : ""]);
  const cos = new Set([...W.out[i].map((j) => W.et[j]), ...W.inc[i].map((j) => W.es[j])]).size;
  rows.push(["Ligações", nf(cos + W.brd[i].length)]);
  tip.innerHTML = `<div class="m-tip-head"><i style="background:${colorOf(n)}"></i><b>${esc(n.n)}</b></div>${rows.map(([a, b]) => `<div class="row"><span>${esc(a)}</span><span>${esc(b)}</span></div>`).join("")}<div class="row muted"><span>Clique para ver quem é dono · dois cliques abrem a estrutura</span></div>`;
  tip.hidden = false;
  const w = tip.offsetWidth, h = tip.offsetHeight;
  tip.style.left = `${clamp(px + 18, 8, innerWidth - w - 8)}px`;
  tip.style.top = `${py + 18 + h > innerHeight - 8 ? py - h - 14 : py + 18}px`;
}

// ---------------------------------------------------------------- área livre e laço de desenho
function layoutChanged() {
  uiRectsT = 0;
  if (!globe) return;
  // o planeta fica no meio do espaço que sobra entre os painéis
  const ex = $("#m-explore"), pn = $("#m-panel");
  let left = 0, right = 0, bottom = 0;
  if (innerWidth > 760) {
    if (ex && !ex.classList.contains("collapsed") && ex.offsetParent) left = ex.getBoundingClientRect().right;
    if (pn && !pn.hidden) right = innerWidth - pn.getBoundingClientRect().left;
  } else if (pn && !pn.hidden) bottom = innerHeight - pn.getBoundingClientRect().top;
  globe.setOffset((left - right) / 2, -bottom / 2);
  tree?.setFree(left, right, bottom);
}
let raf = 0, lastLabels = 0;
function frame(now) {
  raf = requestAnimationFrame(frame);
  if (document.hidden) return;
  // gira devagar sozinho quando ninguém mexe e nada está selecionado
  const idle = now - ui.lastInput > 7000 && ui.sel < 0 && ui.group < 0 && ui.mode === "world" && !REDUCED;
  globe.cam.auto += ((idle ? 1.6 : 0) - globe.cam.auto) * 0.02;
  if (Math.abs(globe.cam.auto) < 1e-3) globe.cam.auto = 0;
  if (ui.mode === "tree") tree.frame(now);
  else {
    globe.update(now);
    globe.render();
    if (now - lastLabels > 32) {
      updateLabels(); updateHud(); lastLabels = now;
      document.body.classList.toggle("m-close", globe.closeness() > 0.25);
    }
  }
}

// ---------------------------------------------------------------- interação com o planeta
const pointers = new Map();
let drag = null, pinch = null, lastTap = 0, hoverT = 0, hoverPending = null;
function onDown(e) {
  const cv = e.currentTarget;
  cv.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  ui.lastInput = performance.now();
  hideHint();
  globe.cam.vLat = globe.cam.vLon = 0; globe.cam.fly = null;
  if (pointers.size === 2) {
    const [p, q] = [...pointers.values()];
    pinch = { d: Math.hypot(p.x - q.x, p.y - q.y), mx: (p.x + q.x) / 2, my: (p.y + q.y) / 2 };
    drag = null;
    return;
  }
  drag = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: false, hist: [{ x: e.clientX, y: e.clientY, t: performance.now() }] };
}
function onMove(e) {
  if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  ui.lastInput = performance.now();
  if (ui.mode === "tree") return;
  if (pinch && pointers.size === 2) {
    const [p, q] = [...pointers.values()];
    const d = Math.hypot(p.x - q.x, p.y - q.y), mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
    globe.zoom(pinch.d / Math.max(1, d), mx, my);
    globe.rotate(mx - pinch.mx, my - pinch.my);
    pinch = { d, mx, my };
    return;
  }
  if (drag) {
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > (TOUCH ? 8 : 4)) { drag.moved = true; e.currentTarget.classList.add("dragging"); showTip(-1); }
    if (drag.moved) {
      globe.rotate(dx, dy);
      drag.x = e.clientX; drag.y = e.clientY;
      const now = performance.now();
      drag.hist.push({ x: e.clientX, y: e.clientY, t: now });
      while (drag.hist.length > 6 || (drag.hist.length > 2 && now - drag.hist[0].t > 100)) drag.hist.shift();
    }
    return;
  }
  if (e.pointerType === "mouse") { hoverPending = [e.clientX, e.clientY]; if (!hoverT) hoverT = requestAnimationFrame(doHover); }
}
function doHover() {
  hoverT = 0;
  if (!hoverPending) return;
  const [px, py] = hoverPending;
  const i = globe.pick(px, py, vis);
  const cv = $("#map");
  cv.classList.toggle("pointing", i >= 0);
  if (i !== ui.hover) {
    ui.hover = i;
    clearTimeout(doHover.t);
    if (ui.sel < 0 && ui.group < 0 && ui.mode === "world") {
      doHover.t = setTimeout(() => {
        if (ui.sel >= 0 || ui.group >= 0 || ui.mode !== "world" || ui.hover !== i) return;
        if (i >= 0) { const nb = neighborhood(i); setHighlight(nb.nodes, nb.edges, nb.brd, [i], 0.45); } else setHighlight(null);
      }, i >= 0 ? 140 : 90);
    }
  }
  showTip(i, px, py);
}
function onUp(e) {
  pointers.delete(e.pointerId);
  e.currentTarget.classList.remove("dragging");
  if (pinch) { if (pointers.size < 2) pinch = null; return; }
  if (!drag || ui.mode === "tree") { drag = null; return; }
  const d = drag;
  drag = null;
  if (d.moved) {
    const h = d.hist;
    if (h.length >= 2 && !REDUCED) {
      const a = h[0], b = h[h.length - 1], dt = Math.max(16, b.t - a.t);
      if (performance.now() - b.t < 80) globe.fling((b.x - a.x) / dt, (b.y - a.y) / dt);
    }
    return;
  }
  const now = performance.now(), dbl = now - lastTap < 320;
  lastTap = now;
  const i = globe.pick(e.clientX, e.clientY, vis);
  if (dbl && i >= 0) { openTree(i); return; }
  if (i >= 0) { select(i); return; }
  if (dbl) { globe.zoom(0.6, e.clientX, e.clientY); return; }
  if (ui.sel >= 0 || ui.group >= 0 || ui.mode === "path") { if (ui.mode === "path") exitMode(false); select(-1); }
}
function onWheel(e) {
  e.preventDefault();
  ui.lastInput = performance.now();
  hideHint();
  if (ui.mode === "tree") return;
  const f = Math.exp(e.deltaY * (e.ctrlKey ? 0.012 : e.deltaMode === 1 ? 0.05 : 0.0018));
  globe.zoom(f, e.clientX, e.clientY);
}

let hintTimer = 0;
function hideHint() { const h = $("#m-hint"); if (h && !h.hidden) { h.hidden = true; store.set("mundo-hint", 1); uiRectsT = 0; } clearTimeout(hintTimer); }

// ---------------------------------------------------------------- ligações dos controles
function wire() {
  const cv = $("#map");
  addEventListener("resize", () => { globe.resize(innerWidth, innerHeight); tree?.resize(innerWidth, innerHeight); layoutChanged(); });
  cv.addEventListener("pointerdown", onDown);
  cv.addEventListener("pointermove", onMove);
  cv.addEventListener("pointerup", onUp);
  cv.addEventListener("pointercancel", onUp);
  cv.addEventListener("pointerleave", () => {
    if (drag || ui.mode === "tree") return;
    showTip(-1);
    if (ui.hover >= 0) { ui.hover = -1; if (ui.sel < 0 && ui.group < 0 && ui.mode === "world") setHighlight(null); }
  });
  cv.addEventListener("wheel", onWheel, { passive: false });
  labels.layer.addEventListener("click", (e) => {
    const el = e.target.closest(".m-lab");
    if (el && ui.mode !== "tree") select(+el.dataset.i);
  });
  labels.layer.addEventListener("dblclick", (e) => {
    const el = e.target.closest(".m-lab");
    if (el) openTree(+el.dataset.i);
  });
  const zoomBtn = (f) => () => { ui.lastInput = performance.now(); if (ui.mode === "tree") tree.zoom(f); else globe.zoom(f); };
  $("#m-zin").onclick = zoomBtn(0.72);
  $("#m-zout").onclick = zoomBtn(1 / 0.72);
  $("#m-zfit").onclick = () => { if (ui.mode === "tree") tree.fit(); else globe.flyTo(globe.cam.lat * 0.4 + 6, globe.cam.lon, globe.fitDist(0.82), 1200); };
  $("#m-layers-btn").onclick = (e) => { e.stopPropagation(); const p = $("#m-layers"); p.hidden = !p.hidden; $("#m-layers-btn").setAttribute("aria-expanded", String(!p.hidden)); };
  document.addEventListener("pointerdown", (e) => { if (!e.target.closest("#m-layers, #m-layers-btn")) { $("#m-layers").hidden = true; $("#m-layers-btn").setAttribute("aria-expanded", "false"); } });
  for (const inp of document.querySelectorAll("#m-layers [data-layer]")) {
    inp.checked = !!ui.layers[inp.dataset.layer];
    inp.onchange = () => {
      ui.layers[inp.dataset.layer] = inp.checked;
      store.set("mundo-layers", ui.layers);
      computeVisibility();
      if (ui.sel >= 0 && ui.mode === "world") { const nb = neighborhood(ui.sel); setHighlight(nb.nodes, nb.edges, nb.brd, [ui.sel]); }
      renderRank();
    };
  }
  const goSector = (e) => {
    const b = e.target.closest("[data-sector]");
    if (!b) return;
    $("#m-layers").hidden = true;
    flyToSector(b.dataset.sector);
  };
  $("#m-legend").onclick = goSector;
  $("#m-rail").onclick = goSector;
  $("#m-explore-toggle").onclick = () => {
    const ex = $("#m-explore");
    ex.classList.toggle("collapsed");
    $("#m-explore-toggle").setAttribute("aria-expanded", String(!ex.classList.contains("collapsed")));
    store.set("mundo-explore", !ex.classList.contains("collapsed"));
    layoutChanged();
  };
  $(".m-tabs").onclick = (e) => {
    const b = e.target.closest("[data-tab]");
    if (!b) return;
    rankTab = b.dataset.tab;
    for (const x of document.querySelectorAll(".m-tabs [data-tab]")) x.setAttribute("aria-checked", String(x === b));
    renderRank();
    $("#m-rank").scrollTop = 0;
  };
  $(".m-grab").onclick = () => { $("#m-panel").classList.toggle("peek"); setTimeout(layoutChanged, 420); };
  $("#m-panel-close").onclick = () => { if (ui.mode !== "world") exitMode(false); select(-1); };
  $("#m-mode-close").onclick = () => { const s = ui.sel; exitMode(false); if (s >= 0) select(s); else select(-1); };
  document.addEventListener("click", (e) => {
    const more = e.target.closest("[data-more]");
    if (more) { const id = more.dataset.more; more.closest("ul").innerHTML = panelRows[id].join(""); return; }
    const go = e.target.closest("[data-go]");
    if (go && (go.closest("#m-panel") || go.closest("#m-explore"))) {
      const i = +go.dataset.go;
      if (ui.mode === "tree") { openTree(i); return; }
      select(i);
      return;
    }
    const sel = e.target.closest("[data-sel]");
    if (sel) { exitMode(false); select(+sel.dataset.sel); return; }
    const grp = e.target.closest("[data-group]");
    if (grp && (grp.closest("#m-panel") || grp.closest("#m-explore"))) { selectGroup(+grp.dataset.group); if (innerWidth <= 760) { $("#m-explore").classList.add("collapsed"); layoutChanged(); } return; }
    const act = e.target.closest("[data-act]");
    if (act) {
      const i = act.dataset.node != null ? +act.dataset.node : ui.sel;
      if (act.dataset.act === "tree" && i >= 0) openTree(i);
      if (act.dataset.act === "world") { const s = ui.sel; exitMode(false); if (s >= 0) select(s); }
      if (act.dataset.act === "path" && i >= 0) openPicker(i);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input[type=search], input[type=text], textarea")) return;
    if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); $("#m-q").focus(); }
    else if (e.key === "Escape") { if (ui.mode !== "world") { const s = ui.sel; exitMode(false); s >= 0 ? select(s) : select(-1); } else select(-1); }
    else if (e.key === "+" || e.key === "=") $("#m-zin").click();
    else if (e.key === "-") $("#m-zout").click();
    else if (e.key === "0") $("#m-zfit").click();
    else if (ui.mode === "world" && e.key.startsWith("Arrow")) {
      ui.lastInput = performance.now();
      const s = 40;
      globe.rotate(e.key === "ArrowLeft" ? -s : e.key === "ArrowRight" ? s : 0, e.key === "ArrowUp" ? -s : e.key === "ArrowDown" ? s : 0);
    }
  });
  wireSearch($("#m-q"), $("#m-results"), (r) => { if (r.g != null) selectGroup(r.g); else if (ui.mode === "tree") openTree(r.i); else select(r.i); });
  addEventListener("hashchange", () => readRoute());
}
function openPicker(from) {
  const slot = $("#m-pick-slot");
  slot.innerHTML = `<div class="m-pick"><div class="m-search" role="combobox" aria-expanded="false"><svg class="ic"><use href="#i-path"/></svg>
    <input id="m-pick-q" type="search" placeholder="Com quem? Empresa, pessoa ou investidor" autocomplete="off" aria-label="Conectar com"><ul id="m-pick-res" class="m-results" role="listbox" hidden></ul></div></div>`;
  const inp = $("#m-pick-q");
  wireSearch(inp, $("#m-pick-res"), (r) => { if (r.g != null) showPath(from, W.groups[r.g].h); else showPath(from, r.i); });
  inp.focus();
}

// ---------------------------------------------------------------- início
async function init() {
  labels.layer = $("#m-labels");
  // o planeta é a primeira coisa: o painel Explorar começa fechado (abre pelo botão e lembra a escolha)
  if (innerWidth <= 760 || store.get("mundo-explore", false) === false) $("#m-explore").classList.add("collapsed");
  let data;
  try {
    data = await fetch("data/cias/mundo.json", { cache: "no-cache" }).then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); });
  } catch {
    $("#m-empty").hidden = false;
    $("#m-empty").textContent = "O mapa ainda não foi montado. Ele é refeito a cada atualização do portal; tente de novo em alguns minutos.";
    document.body.classList.remove("loading");
    return;
  }
  if (!data.globo || !data.globo.lat || data.globo.lat.length !== data.nodes.length) data.globo = fallbackGlobe(data);
  prepare(data);
  try {
    globe = createGlobe($("#map"), data, { palette, sectorOrder: data.globo.order, accent: ACCENT });
  } catch (err) {
    console.error(err);
    $("#m-empty").hidden = false;
    $("#m-empty").textContent = "Este navegador não conseguiu abrir o Mundo em 3D (WebGL desligado ou indisponível). Tente em outro navegador ou atualize o sistema.";
    document.body.classList.remove("loading");
    return;
  }
  tree = createTree(globe.renderer, { W, colorOf, sectorColor, kindLabel, shortName, brl, pct, accent: ACCENT, onPick: (i, dbl) => { if (dbl) openTree(i); else { ui.sel = i; renderPanel(i); } }, onExt: (x) => toast(`${x.n}: controlada de capital fechado (${pct(x.pct)})`), canvas: $("#map") });
  globe.resize(innerWidth, innerHeight);
  tree.resize(innerWidth, innerHeight);
  computeVisibility();
  const s = data.stats || {};
  $("#m-sub").textContent = `${nf(s.cias || 0)} companhias · ${nf(s.grupos || 0)} grupos · ${nf((s.acionistas || 0) + (s.pessoas_conselho || 0))} acionistas e conselheiros`;
  renderLegend();
  renderRail();
  renderRank();
  wire();
  layoutChanged();
  globe.setOffset(globe.view.toX, globe.view.toY, true);
  document.body.classList.remove("loading");
  // abertura: a câmera chega de longe enquanto as torres sobem
  const start = (data.globo.cont || []).find((c) => c[0] === "util") || [0, 18, 0];
  globe.warmup();
  if (!location.hash && !REDUCED) {
    Object.assign(globe.cam, { lat: start[1] - 6, lon: start[2] - 40, dist: 8.5, tDist: 8.5 });
    globe.intro(start[1], start[2]);
    globe.flyTo(start[1] - 4, start[2] - 8, globe.fitDist(0.82), 2600);
  } else Object.assign(globe.cam, { lat: start[1] - 4, lon: start[2] - 8, dist: globe.fitDist(0.82), tDist: globe.fitDist(0.82) });
  raf = requestAnimationFrame(frame);
  readRoute();
  if (!store.get("mundo-hint", 0) && !location.hash) setTimeout(() => { if (ui.sel < 0 && ui.mode === "world") { $("#m-hint").hidden = false; uiRectsT = 0; hintTimer = setTimeout(hideHint, 9000); } }, 3200);
  if (/[?&]debug\b/.test(location.search)) window.__mundo = { ui, W, globe, tree, select, openTree, showPath, selectGroup };
}
// trilho de setores: atalhos para cada continente (canto de baixo)
function renderRail() {
  const count = {}, mc = {};
  for (const n of W.nodes) if (n.t === "c") { count[n.c] = (count[n.c] || 0) + 1; mc[n.c] = (mc[n.c] || 0) + (n.mc || 0); }
  const conts = (W.data.globo.cont || []).map((c) => c[0]).sort((a, b) => (mc[b] || 0) - (mc[a] || 0));
  const tot = Object.values(mc).reduce((a, b) => a + b, 0) || 1;
  $("#m-rail").innerHTML = `<h3><span>Continentes</span><small>valor de mercado</small></h3>` + conts.map((c) => `<button type="button" data-sector="${c}" title="Ir até ${esc(SECTOR[c]?.[1] || c)}" style="--c:${sectorColor(c)};--w:${((mc[c] || 0) / tot * 100).toFixed(1)}%"><i></i><span>${esc(SECTOR[c]?.[2] || c)}</span><small>${nf(count[c] || 0)}</small><b>${mc[c] ? brl(mc[c]).replace("R$ ", "") : "–"}</b></button>`).join("");
}
init();
