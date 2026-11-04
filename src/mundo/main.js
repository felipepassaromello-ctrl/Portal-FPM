/* Portal FPM — Mundo das companhias (3D).
 *
 * Fonte de site/mundo.js (gerado com `npm run build` nesta pasta). O mapa (map.js) é um tabuleiro em que cada setor é
 * um bloco com o nome escrito, todos à vista; companhias abertas são prédios, capital fechado blocos baixos, holdings
 * placas, pessoas peões e investidores institucionais diamantes (no bloco próprio). As ligações de controle são arcos;
 * ao selecionar, viram cabos com energia de quem é dono para quem é possuído. A estrutura societária de uma entidade
 * abre numa mesa 3D vista de cima (tree.js).
 *
 * Os dados vêm de data/cias/mundo.json (scripts/mundo.py, scripts/mundo_layout.mjs e scripts/mundo_mapa.mjs).
 * Endereços compartilháveis: #n/<id> (entidade), #g/<grupo>, #e/<id> (estrutura), #c/<id>/<id> (caminho),
 * #setor/<setor>.
 */
import { createMap, clamp } from "./map.js";
import { createTree } from "./tree.js";
import { mapLayout, ASPECT_TALL } from "../../scripts/mundo_mapa.mjs";

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
// Setores em tons de pó (mesma luminosidade, matiz girando na ordem dos blocos): distinguem sem gritar.
const SECTOR = {
  fin: ["#8fb8e8", "Bancos e serviços financeiros", "Financeiro"], tech: ["#7cc6d9", "Telecom, mídia e tecnologia", "Tecnologia"],
  saude: ["#78cfc0", "Saúde e educação", "Saúde"], log: ["#8ccfa3", "Transporte e logística", "Logística"],
  agro: ["#b5cf86", "Agro, alimentos e bebidas", "Agro"], ind: ["#d4c97f", "Indústria e bens de capital", "Indústria"],
  util: ["#e3bb72", "Energia elétrica e saneamento", "Energia"], oil: ["#e59f78", "Petróleo, gás e química", "Petróleo"],
  base: ["#d99090", "Mineração, siderurgia e papel", "Mineração"], cons: ["#d996b4", "Varejo e consumo", "Consumo"],
  imob: ["#b9a0dd", "Construção e imóveis", "Imobiliário"], out: ["#a8b3bf", "Holdings e outros", "Holdings"],
};
const KIND = {
  pf: ["#f0c9a0", "Pessoa física"], hold: ["#8ea3bd", "Holding ou empresa"], fund: ["#a9a2f5", "Gestora ou fundo"],
  pen: ["#d39af0", "Fundo de pensão"], gov: ["#f2d37a", "Governo"], sub: ["#7fd6b4", "Controlada em comum"],
};
const INVESTOR = "#b3a6f7";
const ACCENT = "#3cf0b4";
const sectorColor = (c) => (SECTOR[c] || SECTOR.out)[0];
const kindKey = (n) => (n.t === "s" ? "sub" : n.t === "p" ? "pf" : KIND[n.c] ? n.c : "hold");
const colorOf = (n) => (n.t === "c" ? sectorColor(n.c) : KIND[kindKey(n)][0]);
const kindLabel = (n) => (n.t === "c" ? "Companhia aberta" : KIND[kindKey(n)][1]);
const palette = { sector: sectorColor, kind: (n) => KIND[kindKey(n)][0], investor: INVESTOR };
// nome do tipo pela forma no mapa (a legenda usa os mesmos nomes)
const shapeLabel = (i) => ({ tower: "Companhia aberta", block: "Companhia de capital fechado", tile: "Holding ou empresa", sub: "Controlada em comum", pawn: "Pessoa física", inv: "Investidor institucional" })[map?.shape[i]] || kindLabel(W.nodes[i]);

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
  hover: -1, sel: -1, group: -1, sector: -1, shape: null,
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
  map?.setVisible(vis);
}

let map = null, tree = null;

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
  if (!map) return;
  if (!nodes) { map.setHighlight(null); map.setFlows([]); return; }
  const lv = new Map();
  for (const i of nodes) lv.set(i, 0.5);
  for (const i of focus) lv.set(i, 1);
  map.setHighlight(lv, dimTo);
  const flows = [];
  for (const j of edges || []) flows.push([W.es[j], W.et[j], bright ? 1 : W.ef[j] & 1]);
  for (const j of brd || []) flows.push([W.bs[j], W.bt[j], bright ? 1 : 0]);
  // controle primeiro (os cabos de controle são desenhados mesmo quando há centenas de ligações)
  flows.sort((a, b) => b[2] - a[2]);
  map.setFlows(flows);
}

function select(i, { fly = true, push = true } = {}) {
  if (ui.mode !== "world") exitMode(false);
  hideHint();
  ui.sel = i; ui.group = -1;
  clearSector();
  clearShape();
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
  if (fly) map.flyToNodes([...nb.nodes], { minSpan: 18 });
  if (push) route(`n/${W.nodes[i].id}`);
}
function selectGroup(gi, { push = true } = {}) {
  if (ui.mode !== "world") exitMode(false);
  hideHint();
  const g = W.groups[gi];
  ui.sel = -1; ui.group = gi;
  clearSector();
  clearShape();
  const nodes = new Set(g.m), edges = new Set();
  for (const m of g.m) for (const j of W.out[m]) if (nodes.has(W.et[j])) edges.add(j);
  setHighlight(nodes, edges, new Set(), g.m.filter((m) => W.nodes[m].t === "c"));
  renderGroupPanel(gi);
  markRank();
  map.flyToNodes(g.m, { minSpan: 20 });
  if (push) route(`g/${gi}`);
}
// setor em foco: o bloco inteiro enquadrado, os outros escurecem e o painel lista todas as companhias do setor
const plateIndex = (c) => (W.data.mapa.plates || []).findIndex((p) => p.c === c);
function focusSector(j, { push = true, fly = true } = {}) {
  if (j < 0) return;
  if (ui.mode !== "world") exitMode(false);
  hideHint();
  ui.sel = -1; ui.group = -1; ui.sector = j;
  clearShape();
  setHighlight(null);
  map.setFocusPlate(j);
  // o painel primeiro: o enquadramento usa o espaço que sobra ao lado (ou acima) dele
  renderSectorPanel(j);
  if (fly) map.flyToPlate(j);
  markRank();
  if (push) route(`setor/${W.data.mapa.plates[j].c}`);
}
function clearSector() {
  if (ui.sector < 0) return;
  ui.sector = -1;
  map?.setFocusPlate(-1);
}
const flyToSector = (c) => focusSector(plateIndex(c));
// legenda clicável: destaca no mapa todas as peças de um tipo (companhias abertas, pessoas, investidores...)
function showShape(k) {
  if (!map || ui.mode !== "world") return;
  if (ui.shape === k || !k) { clearShape(); if (ui.sel >= 0) select(ui.sel, { fly: false, push: false }); else setHighlight(null); return; }
  if (ui.sel >= 0 || ui.group >= 0) { ui.sel = -1; ui.group = -1; if (ui.sector < 0) closePanel(); route(ui.sector >= 0 ? `setor/${W.data.mapa.plates[ui.sector].c}` : ""); markRank(); }
  hideHint();
  ui.shape = k;
  markKey();
  const set = new Set(), lv = new Map();
  for (let i = 0; i < W.N; i++) if (vis[i] && map.shape[i] === k && (ui.sector < 0 || W.data.mapa.plate[i] === ui.sector)) { set.add(i); lv.set(i, 0.02); }
  ui.hl = set;
  map.setHighlight(lv, 0.85);
  map.setFlows([]);
}
function clearShape() {
  if (!ui.shape) return;
  ui.shape = null;
  markKey();
}
const markKey = () => { for (const el of document.querySelectorAll("#m-key [data-shape]")) el.classList.toggle("on", el.dataset.shape === ui.shape); };

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
      ${inTree && ui.treeFocus === i ? `<button class="m-btn primary" type="button" data-act="world">${icon("map")}Ver no mapa</button>` : `<button class="m-btn primary" type="button" data-act="tree">${icon("tree")}Estrutura societária</button>`}
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
  // no celular a folha abre baixa: o mapa (ou a mesa) continua à vista; puxar pela alça mostra tudo
  if (innerWidth <= 760 && (p.hidden || ui.mode !== "world")) p.classList.add("peek");
  p.hidden = false;
  document.body.classList.add("panel-open");
  $("#m-panel-body").scrollTop = 0;
  layoutChanged();
  // a folha do celular entra deslizando: mede de novo quando ela para
  clearTimeout(layoutChanged.t); layoutChanged.t = setTimeout(layoutChanged, 450);
}
function closePanel() {
  $("#m-panel").hidden = true;
  document.body.classList.remove("panel-open");
  layoutChanged();
  clearTimeout(layoutChanged.t); layoutChanged.t = setTimeout(layoutChanged, 450);
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
  clearShape();
  const nodes = new Set(r.path), edges = new Set(), brd = new Set();
  for (const e of r.ev) { if (e >= 0) edges.add(e); else brd.add(-2 - e); }
  ui.pathIds = [a, b];
  if (ui.forceVis) { ui.forceVis = null; map.setVisible(vis); }
  // quem faz a ponte aparece no mapa mesmo se a camada dele estiver desligada (um conselheiro, por exemplo)
  if (r.path.some((i) => !vis[i])) { ui.forceVis = new Set(r.path); const v2 = vis.slice(); for (const i of r.path) v2[i] = 1; map.setVisible(v2); }
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
  map.flyToNodes(r.path, { minSpan: 20 });
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
  clearSector();
  clearShape();
  hideHint();
  showTip(-1);
  ui.hover = -1;
  setHighlight(null);
  document.body.classList.add("in-tree");
  renderPanel(i);
  tree.open(i, extra, { from: wasWorld ? map.project(i, {}) : null });
  $("#m-mode").hidden = false;
  $("#m-mode-text").innerHTML = `<span class="m-mode-k">Estrutura societária</span><b>${esc(n.n)}</b>`;
  layoutChanged();
  if (push) route(`e/${n.id}`);
}
// passagem entre o mapa e a mesa: escurece rápido, troca a cena e clareia
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
  if (ui.forceVis) { ui.forceVis = null; map.setVisible(vis); }
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
// ícones das formas do mapa (legenda fixa e menu de camadas)
const SHAPES = [
  ["tower", "Companhia aberta", '<svg viewBox="0 0 20 20"><path d="M6 18V5.5L11 3.5V18" fill="#dfe3ea"/><path d="M11 3.5 14 5v13h-3z" fill="#9aa4b3"/><path d="M6 5.5 11 3.5 14 5 9 7z" fill="var(--c)"/></svg>'],
  ["block", "Capital fechado", '<svg viewBox="0 0 20 20"><path d="M4 16v-5l6-2.5 6 2.5v5l-6 2.5z" fill="#c9ced6"/><path d="M4 11l6-2.5 6 2.5-6 2.5z" fill="var(--c)"/></svg>'],
  ["tile", "Holding ou empresa", '<svg viewBox="0 0 20 20"><path d="M3 12.5 10 9.5l7 3-7 3z" fill="#8ea3bd"/><path d="M3 12.5v1.2l7 3v-1.2zM17 12.5v1.2l-7 3v-1.2z" fill="#5f7088"/></svg>'],
  ["sub", "Controlada em comum", '<svg viewBox="0 0 20 20"><path d="M3 12.5 10 9.5l7 3-7 3z" fill="#7fd6b4"/><path d="M3 12.5v1.2l7 3v-1.2zM17 12.5v1.2l-7 3v-1.2z" fill="#4f9a7e"/></svg>'],
  ["pawn", "Pessoa física", '<svg viewBox="0 0 20 20"><circle cx="10" cy="6" r="2.6" fill="#f0c9a0"/><path d="M7.4 15.5 8.4 9.4h3.2l1 6.1z" fill="#f0c9a0"/><ellipse cx="10" cy="16" rx="4.6" ry="1.6" fill="#c99e74"/></svg>'],
  ["inv", "Investidor institucional", '<svg viewBox="0 0 20 20"><path d="M10 2.5 15 9 10 17.5 5 9z" fill="#b3a6f7"/><path d="M10 2.5 15 9H5z" fill="#d6cffb"/><path d="M10 17.5 15 9H10z" fill="#8576d6"/></svg>'],
];
const SHAPE_SHORT = { tower: "Aberta", block: "Fechada", tile: "Holding", sub: "Controlada", pawn: "Pessoa", inv: "Investidor" };
const shapeKeyHtml = () => SHAPES.map(([k, label, svg]) => `<button type="button" class="m-key-i" data-shape="${k}" title="Destacar no mapa: ${label}" style="--c:${sectorColor("util")}">${svg}<span class="l">${label}</span><span class="s">${SHAPE_SHORT[k]}</span></button>`).join("")
  + `<span class="m-key-i m-key-ctl"><i class="m-key-ln"></i><span class="l">Controle</span><span class="s">Controle</span></span>`;
function sectorStats() {
  const M = W.data.mapa, st = M.plates.map(() => ({ n: 0, listed: 0, mc: 0 }));
  for (let i = 0; i < W.N; i++) {
    const n = W.nodes[i], s2 = st[M.plate[i]];
    if (n.t === "c") { s2.n++; if (n.mc) { s2.listed++; s2.mc += n.mc; } }
    else if (map?.isInv[i]) { s2.n++; s2.mc += n.v || 0; }
  }
  return st;
}
const plateName = (p) => (p.c === "inv" ? "Investidores institucionais" : SECTOR[p.c]?.[1] || p.c);
const plateShort = (p) => (p.c === "inv" ? "Investidores" : SECTOR[p.c]?.[2] || p.c);
const plateColor = (p) => (p.c === "inv" ? INVESTOR : sectorColor(p.c));
function renderLegend() {
  const st = sectorStats();
  const order = W.data.mapa.plates.map((p, j) => j).sort((a, b) => st[b].mc - st[a].mc);
  $("#m-legend").innerHTML = `<div class="m-lg-sec">${order.map((j) => { const p = W.data.mapa.plates[j]; return `<button class="lg" type="button" data-plate="${j}"><i style="--c:${plateColor(p)}"></i><span>${esc(plateName(p))}</span><small>${nf(st[j].n)}</small></button>`; }).join("")}</div>`;
  $("#m-key").innerHTML = shapeKeyHtml();
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
  else if (kind === "setor" && plateIndex(a) >= 0) focusSector(plateIndex(a), { push: false });
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
  for (const el of document.querySelectorAll(".m-top > :not(.m-pop), #m-explore, #m-panel, .m-nav > *, #m-hud, #m-key, #m-mode, #m-hint")) {
    if (el.hidden || el.offsetParent === null) continue;
    const r = el.getBoundingClientRect();
    if (r.width && r.height) uiRects.push([r.left - 6, r.top - 6, r.right + 6, r.bottom + 6]);
  }
  return uiRects;
}
let plateTop = null;
function plateTopLists() {
  if (plateTop) return plateTop;
  plateTop = W.data.mapa.plates.map(() => []);
  for (const i of W.labelOrder) if (W.nodes[i].t === "c" || map.isInv[i]) plateTop[W.data.mapa.plate[i]].push(i);
  return plateTop;
}
function labelText(i) {
  const n = W.nodes[i];
  if (n.t === "c") return [shortName(n.n), [n.tk, n.mc ? brl(n.mc).replace("R$ ", "R$ ").toUpperCase() : "capital fechado"].filter(Boolean).join(" · ")];
  return [shortName(n.n), [kindLabel(n), n.v ? `≈ ${brl(n.v)}` : ""].filter(Boolean).join(" · ")];
}
// nomes dos setores escritos sobre os blocos (canto de cima, à esquerda)
const plateLabels = [];
function buildPlateLabels() {
  const st = sectorStats(), layer = $("#m-plates");
  layer.innerHTML = "";
  W.data.mapa.plates.forEach((p, j) => {
    const el = document.createElement("button");
    el.type = "button"; el.className = "m-plate"; el.dataset.plate = j;
    el.style.setProperty("--c", plateColor(p));
    const what = p.c === "inv" ? plural(st[j].n, "investidor", "investidores") : plural(st[j].n, "companhia", "companhias");
    el.innerHTML = `<b><span class="full">${esc(plateName(p))}</span><span class="short">${esc(plateShort(p))}</span></b><small>${what}${st[j].mc ? ` · ${brl(st[j].mc)}` : ""}</small>`;
    el.title = `Ver o setor ${plateName(p)} inteiro`;
    layer.appendChild(el);
    plateLabels[j] = { el, p };
  });
}
const _o = {};
function updatePlateLabels(placed) {
  const ppu = map.pxPerUnit();
  plateLabels.forEach(({ el }, j) => {
    const pl = map.plates[j];
    const a = map.projectPoint(pl.x0 + 0.9, map.PLATE_H + 0.1, pl.z0 + 0.7, _o);
    const wpx = (pl.x1 - pl.x0) * ppu;
    const show = !!a.f && wpx > 46 && ui.mode !== "tree";
    el.classList.toggle("on", show);
    el.classList.toggle("compact", wpx < 210);
    el.classList.toggle("dim", ui.sector >= 0 && ui.sector !== j);
    if (!show) return;
    el.style.transform = `translate3d(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px, 0)`;
    el.style.maxWidth = `${Math.max(60, wpx - 18).toFixed(0)}px`;
    const r = el.getBoundingClientRect();
    if (r.width) placed.push([r.left - 4, r.top - 4, r.right + 4, r.bottom + 4]);
  });
}
function updateLabels() {
  if (!map || ui.mode === "tree") { for (const el of labels.used.values()) el.classList.remove("on"); for (const { el } of plateLabels) el.classList.remove("on"); return; }
  const Wd = innerWidth, Hd = innerHeight;
  const placed = [...glassRects()];
  updatePlateLabels(placed);
  const fits = (x0, y0, x1, y1) => {
    if (x0 < 8 || y0 < 8 || x1 > Wd - 8 || y1 > Hd - 8) return false;
    for (const r of placed) if (x0 < r[2] && x1 > r[0] && y0 < r[3] && y1 > r[1]) return false;
    return true;
  };
  // quantas chamadas cabem: pela escala (de longe, só as maiores; de perto, quase todas)
  const ppu = map.pxPerUnit();
  const z = clamp((ppu - 6) / 40, 0, 1);
  let budget = Math.round((TOUCH ? 6 : 12) + z * (TOUCH ? 26 : 60));
  const hl = ui.hl;
  let order;
  if (hl) order = [...hl].sort((a, b) => prio(b) - prio(a)).slice(0, 60);
  else if (ui.sector < 0 && z < 0.5) {
    // visão geral: as maiores de cada setor, em rodadas (todo bloco ganha a sua principal antes de outro ganhar a segunda)
    const lists = plateTopLists(), ppu2 = ppu * ppu;
    const quota = map.plates.map((pl) => clamp(Math.round(((pl.x1 - pl.x0) * (pl.z1 - pl.z0) * ppu2) / 42000), 1, 6));
    order = [];
    for (let r = 0; r < 6; r++) for (let j = 0; j < lists.length; j++) if (r < quota[j] && lists[j][r] != null) order.push(lists[j][r]);
    budget = Math.max(budget, TOUCH ? 12 : 34);
  } else if (ui.sector >= 0) {
    // setor em foco: todas as companhias dele, das maiores para as menores
    order = W.labelOrder.filter((i) => W.data.mapa.plate[i] === ui.sector && (W.nodes[i].t === "c" || map.isInv[i]));
    budget = Math.max(budget, TOUCH ? 18 : 48);
  } else order = W.labelOrder.slice(0, 260);
  const want = new Map();
  const o = {};
  let shown = 0;
  for (const i of order) {
    if (shown >= budget) break;
    if (want.has(i) || (!vis[i] && !ui.forceVis?.has(i))) continue;
    const n = W.nodes[i];
    const inHl = hl && hl.has(i);
    if (!inHl && n.t !== "c" && !map.isInv[i] && z < 0.55) continue;
    map.project(i, o);
    if (!o.f) continue;
    const [name, sub] = labelText(i);
    const big = n.t === "c" && W.crank[i] < 10;
    const w = Math.max(name.length * (big ? 7.6 : 6.9), sub.length * 6.1) + 14;
    const h = 30;
    // acima à direita; se não couber, acima à esquerda, abaixo à direita, abaixo à esquerda
    let spot = null;
    for (const [side, below] of [["r", false], ["l", false], ["r", true], ["l", true]]) {
      const x0 = side === "r" ? o.x + 14 : o.x - 14 - w, y0 = below ? o.y + 8 : o.y - 34;
      if (fits(x0, y0, x0 + w, y0 + h)) { spot = { side, below, x0, y0 }; break; }
    }
    if (!spot) continue;
    placed.push([spot.x0, spot.y0, spot.x0 + w, spot.y0 + h], [o.x - 4, o.y - 4, o.x + 4, o.y + 4]);
    want.set(i, { x: o.x, y: o.y, side: spot.side, below: spot.below, a: 1, hl: inHl, big });
    shown++;
  }
  for (const [i, el] of labels.used) if (!want.has(i)) { el.classList.remove("on"); labels.used.delete(i); labels.pool.push(el); }
  for (const [i, s2] of want) {
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
    } else if (!el.classList.contains("on") && performance.now() - el._t > 20) el.classList.add("on");
    el.classList.toggle("l", s2.side === "l");
    el.classList.toggle("b", !!s2.below);
    el.classList.toggle("hl", !!s2.hl);
    el.classList.toggle("big", s2.big);
    el.style.transform = `translate3d(${s2.x.toFixed(1)}px, ${s2.y.toFixed(1)}px, 0)`;
    el.style.setProperty("--a", "1");
  }
}

// ---------------------------------------------------------------- leitura de posição (canto de baixo)
function updateHud() {
  const j = map.plateAt(innerWidth / 2 + map.view.offX, innerHeight / 2 + map.view.offY);
  const p = j >= 0 ? W.data.mapa.plates[j] : null;
  const zx = fitAllD / Math.max(1, map.cam.d);
  // na visão geral não diz nada (os blocos têm nome); de perto, o zoom e o setor no centro da tela
  const txt = zx < 1.45 ? "" : `<span>ZOOM ${zx.toFixed(1).replace(".", ",")}×</span>${p ? `<span class="m-hud-sec" style="--c:${plateColor(p)}">${esc(plateName(p).toUpperCase())}</span>` : ""}`;
  if (txt !== updateHud.last) { $("#m-hud").innerHTML = txt; updateHud.last = txt; }
}
let fitAllD = 160;

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
  if (!map) return;
  // o mapa fica no meio do espaço que sobra entre os painéis, a barra de cima, a legenda e os botões de zoom
  const ex = $("#m-explore"), pn = $("#m-panel"), key = $("#m-key").getBoundingClientRect();
  const panelOpen = pn && !pn.hidden;
  let left = 0, right = 0, bottom = 0;
  const top = $(".m-top").getBoundingClientRect().bottom + 6;
  if (innerWidth > 760) {
    if (ex && !ex.classList.contains("collapsed") && ex.offsetParent) left = ex.getBoundingClientRect().right;
    right = panelOpen ? innerWidth - pn.offsetLeft : 62;
    if (key.height) bottom = innerHeight - key.top + 6;
  } else if (panelOpen) bottom = pn.offsetHeight; // a folha de baixo: a altura final, mesmo enquanto ela ainda sobe
  else bottom = key.height ? innerHeight - key.top + 6 : 64;
  map.setInsets(left, right, ui.mode === "tree" ? 0 : top, bottom);
  // na estrutura: a faixa de contexto (no alto, no meio) também ocupa espaço
  const mode = $("#m-mode");
  const treeTop = mode && !mode.hidden ? Math.max(top, mode.getBoundingClientRect().bottom + 6) : top;
  tree?.setFree(left, right, bottom, treeTop);
}
let raf = 0, lastLabels = 0;
function frame(now) {
  raf = requestAnimationFrame(frame);
  if (document.hidden) return;
  if (ui.mode === "tree") tree.frame(now);
  else {
    map.update(now);
    map.render();
    if (now - lastLabels > 32) { updateLabels(); updateHud(); lastLabels = now; }
  }
}

// ---------------------------------------------------------------- interação com o mapa
const pointers = new Map();
let drag = null, pinch = null, lastTap = 0, hoverT = 0, hoverPending = null;
function onDown(e) {
  if (ui.mode === "tree") return;
  const cv = e.currentTarget;
  cv.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  ui.lastInput = performance.now();
  hideHint();
  map.cam.vx = map.cam.vz = 0; map.cam.fly = null;
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
    map.zoom(pinch.d / Math.max(1, d), mx, my);
    map.pan(mx - pinch.mx, my - pinch.my);
    pinch = { d, mx, my };
    return;
  }
  if (drag) {
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > (TOUCH ? 8 : 4)) { drag.moved = true; e.currentTarget.classList.add("dragging"); showTip(-1); }
    if (drag.moved) {
      map.pan(dx, dy);
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
  if (!hoverPending || ui.mode === "tree") return;
  const [px, py] = hoverPending;
  const i = map.pick(px, py, vis);
  const j = i < 0 ? map.plateAt(px, py) : -1;
  const cv = $("#map");
  cv.classList.toggle("pointing", i >= 0 || j >= 0);
  if (i !== ui.hover) {
    ui.hover = i;
    clearTimeout(doHover.t);
    if (ui.sel < 0 && ui.group < 0 && !ui.shape && ui.mode === "world") {
      doHover.t = setTimeout(() => {
        if (ui.sel >= 0 || ui.group >= 0 || ui.shape || ui.mode !== "world" || ui.hover !== i) return;
        if (i >= 0) { const nb = neighborhood(i); setHighlight(nb.nodes, nb.edges, nb.brd, [i], 0.45); } else setHighlight(null);
      }, i >= 0 ? 140 : 90);
    }
  }
  if (i >= 0) showTip(i, px, py);
  else if (j >= 0 && j !== ui.sector) showPlateTip(j, px, py);
  else showTip(-1);
}
function showPlateTip(j, px, py) {
  const tip = $("#m-tip");
  if (TOUCH) { tip.hidden = true; return; }
  const p = W.data.mapa.plates[j], st = sectorStats()[j];
  tip.innerHTML = `<div class="m-tip-head"><i style="background:${plateColor(p)}"></i><b>${esc(plateName(p))}</b></div><div class="row"><span>${p.c === "inv" ? "Investidores" : "Companhias"}</span><span>${nf(st.n)}</span></div><div class="row"><span>${p.c === "inv" ? "Valor investido" : "Valor de mercado"}</span><span>${st.mc ? brl(st.mc) : "–"}</span></div><div class="row muted"><span>Clique para ver o setor inteiro</span></div>`;
  tip.hidden = false;
  const w = tip.offsetWidth, h = tip.offsetHeight;
  tip.style.left = `${clamp(px + 18, 8, innerWidth - w - 8)}px`;
  tip.style.top = `${py + 18 + h > innerHeight - 8 ? py - h - 14 : py + 18}px`;
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
      if (performance.now() - b.t < 80) map.fling((b.x - a.x) / dt, (b.y - a.y) / dt);
    }
    return;
  }
  const now = performance.now(), dbl = now - lastTap < 320;
  lastTap = now;
  const i = map.pick(e.clientX, e.clientY, vis);
  if (dbl && i >= 0) { openTree(i); return; }
  if (i >= 0) { select(i); return; }
  if (dbl) { map.zoom(0.55, e.clientX, e.clientY); return; }
  // clique no chão de um bloco: o setor inteiro
  const j = map.plateAt(e.clientX, e.clientY);
  if (j >= 0 && ui.mode === "world") { if (j !== ui.sector || ui.sel >= 0 || ui.group >= 0) focusSector(j); return; }
  if (ui.sel >= 0 || ui.group >= 0 || ui.sector >= 0 || ui.shape || ui.mode === "path") { if (ui.mode === "path") exitMode(false); select(-1); }
}
function onWheel(e) {
  e.preventDefault();
  ui.lastInput = performance.now();
  hideHint();
  if (ui.mode === "tree") return;
  const f = Math.exp(e.deltaY * (e.ctrlKey ? 0.012 : e.deltaMode === 1 ? 0.05 : 0.0018));
  map.zoom(f, e.clientX, e.clientY);
}

let hintTimer = 0;
function hideHint() { const h = $("#m-hint"); if (h && !h.hidden) { h.hidden = true; store.set("mundo-hint", 1); uiRectsT = 0; } clearTimeout(hintTimer); }

// ---------------------------------------------------------------- painel de um setor
function renderSectorPanel(j) {
  const M = W.data.mapa, p = M.plates[j];
  const mem = [];
  for (let i = 0; i < W.N; i++) if (M.plate[i] === j) mem.push(i);
  const byMc = (a, b) => (W.nodes[b].mc || 0) - (W.nodes[a].mc || 0) || W.nodes[a].n.localeCompare(W.nodes[b].n);
  const col = plateColor(p);
  panelRows = {};
  if (p.c === "inv") {
    const invs = mem.sort((a, b) => (W.nodes[b].v || 0) - (W.nodes[a].v || 0));
    panelRows.inv = invs.map((i) => {
      const cos = new Set(W.out[i].map((e) => W.et[e]).filter((t) => W.nodes[t].t === "c")).size;
      return rowHtml(i, W.nodes[i].v ? brl(W.nodes[i].v) : "", `${kindLabel(W.nodes[i])} · ${plural(cos, "companhia", "companhias")}`, false);
    });
    const tot = invs.reduce((s2, i) => s2 + (W.nodes[i].v || 0), 0);
    $("#m-panel-body").innerHTML = `
      <div class="m-kicker" style="--c:${col}"><i></i>Bloco dos investidores</div>
      <div class="m-head"><span class="m-badge" style="--c:${col}">${icon("cias")}</span><div><h2>Investidores institucionais</h2><p>gestoras, fundos de pensão e governo</p></div></div>
      <div class="m-stats"><div class="m-stat"><span>Investidores</span><b>${nf(invs.length)}</b></div><div class="m-stat"><span>Valor investido</span><b>${esc(tot ? brl(tot) : "–")}</b></div><div class="m-stat"><span>Participações</span><b>${nf(invs.reduce((s2, i) => s2 + W.out[i].length, 0))}</b></div></div>
      <div class="m-sec"><h3>Pelo valor investido<small>participação × valor de mercado</small></h3>${listHtml(panelRows.inv, 15, "inv")}</div>
      <p class="m-foot">Quem tem 5% ou mais de duas ou mais companhias abertas e não tem dono no mapa, mais o governo. Os demais acionistas ficam no setor das companhias em que investem.</p>`;
    openPanel();
    return;
  }
  const cos = mem.filter((i) => W.nodes[i].t === "c").sort(byMc);
  const listed = cos.filter((i) => W.nodes[i].mc);
  const mcTot = listed.reduce((s2, i) => s2 + W.nodes[i].mc, 0);
  // segmentos (o setor da CVM de cada companhia), do maior para o menor
  const segs = new Map();
  for (const i of cos) { const k = W.nodes[i].st || "Outros"; (segs.get(k) || segs.set(k, []).get(k)).push(i); }
  const segList = [...segs.entries()].map(([k, l]) => [k, l, l.reduce((s2, i) => s2 + (W.nodes[i].mc || 0), 0)]).sort((a, b) => b[2] - a[2] || b[1].length - a[1].length);
  const segHtml = segList.map(([k, l, mc], si) => {
    panelRows[`seg${si}`] = l.map((i) => rowHtml(i, W.nodes[i].mc ? brl(W.nodes[i].mc) : "", [W.nodes[i].tk || "capital fechado", W.nodes[i].g != null && W.groups[W.nodes[i].g]?.nc >= 2 ? `grupo ${W.groups[W.nodes[i].g].n}` : ""].filter(Boolean).join(" · "), false));
    return `<div class="m-seg"><h4><span>${esc(k)}</span><small>${plural(l.length, "companhia", "companhias")}${mc ? ` · ${brl(mc)}` : ""}</small></h4>${listHtml(panelRows[`seg${si}`], 5, `seg${si}`)}</div>`;
  }).join("");
  // grupos econômicos com companhias neste setor (um grupo pode estar em vários)
  const inHere = (g) => g.m.filter((m) => W.nodes[m].t === "c" && M.plate[m] === j).length;
  const groups = W.groups.filter((g) => g.nc >= 2 && inHere(g) > 0).slice(0, 12);
  const grpHtml = groups.map((g) => { const k = inHere(g); return `<li data-group="${g.i}"><span class="m-dot" style="--c:${sectorColor(g.sector)}"></span><span class="nm">Grupo ${esc(g.n)}</span><span class="pc">${g.mc ? brl(g.mc) : ""}</span><small>${k === g.nc ? plural(g.nc, "companhia", "companhias") : `${k} de ${g.nc} companhias aqui`}${g.r.length ? ` · ${esc(g.r.slice(0, 2).map((r) => shortName(W.nodes[r].n)).join(", "))}` : ""}</small></li>`; }).join("");
  // investidores institucionais com fatia nas companhias do setor
  const invAgg = new Map();
  for (const i of cos) for (const e of W.inc[i]) { const o = W.es[e]; if (!map.isInv[o]) continue; const a = invAgg.get(o) || { n: 0, v: 0 }; a.n++; a.v += (Math.max(0, W.ep[e]) / 100) * (W.nodes[i].mc || 0); invAgg.set(o, a); }
  const invTop = [...invAgg.entries()].sort((a, b) => b[1].n - a[1].n || b[1].v - a[1].v).slice(0, 8);
  const invHtml = invTop.map(([o, a]) => rowHtml(o, a.v ? `≈ ${brl(a.v)}` : "", `${kindLabel(W.nodes[o])} · em ${plural(a.n, "companhia", "companhias")} do setor`, false)).join("");
  const nPeople = mem.filter((i) => W.nodes[i].t === "p").length, nHold = mem.filter((i) => W.nodes[i].t === "j" || W.nodes[i].t === "s").length;
  $("#m-panel-body").innerHTML = `
    <div class="m-kicker" style="--c:${col}"><i></i>Setor</div>
    <div class="m-head"><span class="m-badge" style="--c:${col}">${icon("cias")}</span><div><h2>${esc(plateName(p))}</h2><p>${plural(cos.length, "companhia", "companhias")} · ${plural(segList.length, "segmento", "segmentos")} · ${plural(groups.length, "grupo", "grupos")}</p></div></div>
    <div class="m-stats"><div class="m-stat"><span>Valor de mercado</span><b>${esc(mcTot ? brl(mcTot) : "–")}</b></div><div class="m-stat"><span>Na bolsa</span><b>${nf(listed.length)}</b></div><div class="m-stat"><span>Capital fechado</span><b>${nf(cos.length - listed.length)}</b></div></div>
    <p class="m-note m-sec-note">No bloco também estão ${plural(nHold, "holding ou empresa", "holdings e empresas")} e ${plural(nPeople, "pessoa física", "pessoas físicas")} ligadas a essas companhias.</p>
    <div class="m-sec"><h3>Companhias por segmento<small>valor de mercado</small></h3>${segHtml}</div>
    ${grpHtml ? `<div class="m-sec"><h3>Grupos econômicos<small>valor de mercado</small></h3><ul class="m-list">${grpHtml}</ul></div>` : ""}
    ${invHtml ? `<div class="m-sec"><h3>Investidores mais presentes<small>companhias do setor</small></h3><ul class="m-list">${invHtml}</ul></div>` : ""}
    <p class="m-foot">Cada companhia fica no bloco do seu setor; holdings e pessoas, no setor das companhias que controlam. Segmento é o setor de atividade declarado à CVM.</p>`;
  openPanel();
}

// ---------------------------------------------------------------- ligações dos controles
function wire() {
  const cv = $("#map");
  addEventListener("resize", () => { map.resize(innerWidth, innerHeight); tree?.resize(innerWidth, innerHeight); layoutChanged(); });
  cv.addEventListener("pointerdown", onDown);
  cv.addEventListener("pointermove", onMove);
  cv.addEventListener("pointerup", onUp);
  cv.addEventListener("pointercancel", onUp);
  cv.addEventListener("pointerleave", () => {
    if (drag || ui.mode === "tree") return;
    showTip(-1);
    if (ui.hover >= 0) { ui.hover = -1; if (ui.sel < 0 && ui.group < 0 && !ui.shape && ui.mode === "world") setHighlight(null); }
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
  $("#m-plates").addEventListener("click", (e) => { const el = e.target.closest("[data-plate]"); if (el) focusSector(+el.dataset.plate); });
  const zoomBtn = (f) => () => { ui.lastInput = performance.now(); if (ui.mode === "tree") tree.zoom(f); else map.zoom(f); };
  $("#m-zin").onclick = zoomBtn(0.7);
  $("#m-zout").onclick = zoomBtn(1 / 0.7);
  $("#m-zfit").onclick = () => { if (ui.mode === "tree") tree.fit(); else map.fitAll(); };
  $("#m-layers-btn").onclick = (e) => { e.stopPropagation(); const p = $("#m-layers"); p.hidden = !p.hidden; $("#m-layers-btn").setAttribute("aria-expanded", String(!p.hidden)); };
  document.addEventListener("pointerdown", (e) => { if (!e.target.closest("#m-layers, #m-layers-btn")) { $("#m-layers").hidden = true; $("#m-layers-btn").setAttribute("aria-expanded", "false"); } });
  for (const inp of document.querySelectorAll("#m-layers [data-layer]")) {
    inp.checked = !!ui.layers[inp.dataset.layer];
    inp.onchange = () => {
      ui.layers[inp.dataset.layer] = inp.checked;
      store.set("mundo-layers", ui.layers);
      computeVisibility();
      if (ui.sel >= 0 && ui.mode === "world") { const nb = neighborhood(ui.sel); setHighlight(nb.nodes, nb.edges, nb.brd, [ui.sel]); }
      else if (ui.shape) { const k = ui.shape; ui.shape = null; showShape(k); }
      renderRank();
    };
  }
  const goPlate = (e) => {
    const b = e.target.closest("[data-plate]");
    if (!b) return;
    $("#m-layers").hidden = true;
    focusSector(+b.dataset.plate);
  };
  $("#m-legend").onclick = goPlate;
  $("#m-key").onclick = (e) => { const b = e.target.closest("[data-shape]"); if (b) showShape(b.dataset.shape); };
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
  $("#m-mode-close").onclick = () => { const s2 = ui.sel; exitMode(false); if (s2 >= 0) select(s2); else select(-1); };
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
      if (act.dataset.act === "world") { const s2 = ui.sel; exitMode(false); if (s2 >= 0) select(s2); }
      if (act.dataset.act === "path" && i >= 0) openPicker(i);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input[type=search], input[type=text], textarea")) return;
    if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); $("#m-q").focus(); }
    else if (e.key === "Escape") { if (ui.mode !== "world") { const s2 = ui.sel; exitMode(false); s2 >= 0 ? select(s2) : select(-1); } else select(-1); }
    else if (e.key === "+" || e.key === "=") $("#m-zin").click();
    else if (e.key === "-") $("#m-zout").click();
    else if (e.key === "0") $("#m-zfit").click();
    else if (ui.mode === "world" && e.key.startsWith("Arrow")) {
      ui.lastInput = performance.now();
      const s2 = 80;
      map.pan(e.key === "ArrowLeft" ? s2 : e.key === "ArrowRight" ? -s2 : 0, e.key === "ArrowUp" ? s2 : e.key === "ArrowDown" ? -s2 : 0);
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
  // o mapa é a primeira coisa: o painel Explorar começa fechado (abre pelo botão e lembra a escolha)
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
  // celular (ou tablet) em pé: o arranjo em pé, que ocupa a tela; senão, o deitado. Sem as posições (o CI ainda não
  // rodou a versão nova), calcula aqui mesmo.
  const ok = (m) => m && m.x && m.x.length === data.nodes.length;
  const tall = innerHeight > innerWidth * 1.15;
  if (tall) data.mapa = ok(data.mapaV) ? data.mapaV : mapLayout(data, { aspect: ASPECT_TALL });
  else if (!ok(data.mapa)) data.mapa = mapLayout(data);
  delete data.mapaV;
  prepare(data);
  try {
    map = createMap($("#map"), data, { palette, accent: ACCENT });
  } catch (err) {
    console.error(err);
    $("#m-empty").hidden = false;
    $("#m-empty").textContent = "Este navegador não conseguiu abrir o Mundo em 3D (WebGL desligado ou indisponível). Tente em outro navegador ou atualize o sistema.";
    document.body.classList.remove("loading");
    return;
  }
  data.mapa.plates.forEach((p, j) => { p.j = j; });
  tree = createTree(map.renderer, { W, colorOf, sectorColor, kindLabel, shortName, brl, pct, accent: ACCENT, onPick: (i, dbl) => { if (dbl) openTree(i); else { ui.sel = i; renderPanel(i); } }, onExt: (x) => toast(`${x.n}: controlada de capital fechado (${pct(x.pct)})`), canvas: $("#map") });
  map.resize(innerWidth, innerHeight);
  tree.resize(innerWidth, innerHeight);
  computeVisibility();
  const s = data.stats || {};
  $("#m-sub").textContent = `${nf(s.cias || 0)} companhias · ${nf(s.grupos || 0)} grupos · ${nf((s.acionistas || 0) + (s.pessoas_conselho || 0))} acionistas e conselheiros`;
  renderLegend();
  buildPlateLabels();
  renderRank();
  wire();
  layoutChanged();
  map.setOffset(map.view.toX, map.view.toY, true);
  // a fonte da legenda muda a altura dela: mede de novo quando as fontes chegam
  document.fonts?.ready.then(() => layoutChanged());
  document.body.classList.remove("loading");
  // abertura: o mapa inteiro, com os prédios subindo
  map.warmup();
  map.fitAll(0);
  map.cam.x = map.cam.tx; map.cam.z = map.cam.tz; map.cam.d = map.cam.td; map.cam.fly = null;
  fitAllD = map.cam.td;
  if (!location.hash && !REDUCED) {
    map.intro();
    map.cam.d = fitAllD * 1.35;
  }
  raf = requestAnimationFrame(frame);
  readRoute();
  if (!store.get("mundo-hint", 0) && !location.hash) setTimeout(() => { if (ui.sel < 0 && ui.mode === "world") { $("#m-hint").hidden = false; uiRectsT = 0; hintTimer = setTimeout(hideHint, 9000); } }, 3200);
  if (/[?&]debug\b/.test(location.search)) window.__mundo = { ui, W, map, tree, select, openTree, showPath, selectGroup, focusSector };
}
init();
