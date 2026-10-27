// Posições do Mundo das companhias.
//
// Lê site/data/cias/mundo.json (montado pelo scripts/mundo.py), calcula onde cada nó fica no mapa e grava as posições
// de volta no mesmo arquivo, em "pos" ([x0, y0, x1, y1, ...]), junto com o anel de setores ("ring").
//
// O mapa é uma galáxia: ForceAtlas2 com gravidade forte (um disco), grupos econômicos puxados para junto do seu topo
// (ilhas) e cada setor puxado para a sua fatia do disco (continentes: o financeiro num lado, energia em outro). As
// fatias seguem a ordem do círculo de cores da página. Uma passada final contra sobreposição separa os círculos.
//
// Se houver posições da rodada anterior (site/data/cias/base/mundo_pos.json), parte delas e roda menos iterações: o mapa
// fica no mesmo lugar de um dia para o outro e só acomoda o que mudou.
//
// Uso: cd scripts && npm ci && node mundo_layout.mjs

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Graph from "graphology";
import forceAtlas2 from "graphology-layout-forceatlas2";
import noverlap from "graphology-layout-noverlap";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FILE = join(ROOT, "site/data/cias/mundo.json");
const PREV = join(ROOT, "site/data/cias/base/mundo_pos.json");
// muda quando o desenho do mapa muda: força um layout do zero em vez de partir das posições antigas
const VERSION = "galaxia-1";

// ordem das fatias no disco, no sentido do ângulo; a página usa a mesma ordem para as cores (site/mundo.js, SECTOR)
export const SECTOR_ORDER = ["fin", "tech", "saude", "log", "agro", "ind", "util", "oil", "base", "cons", "imob", "out"];

// gerador pseudoaleatório com semente: o mesmo grafo dá sempre o mesmo mapa
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// raio de cada nó em unidades do mapa; o mesmo critério que a página usa para desenhar (site/mundo.js, nodeRadius)
export function radius(n) {
  if (n.t === "c") return n.mc ? 1.8 + 1.25 * Math.log10(1 + n.mc / 1e8) : 1.8;
  if (n.t === "s") return 1.2;
  return n.v ? 1 + 0.8 * Math.log10(1 + n.v / 1e8) : 1;
}

// assinatura da estrutura (quem existe e quem liga a quem); valor de mercado e nomes não entram
export function signature(world) {
  const h = createHash("sha1");
  h.update(VERSION);
  h.update(world.nodes.map((n) => n.id).join("|"));
  h.update(JSON.stringify(world.edges.map(([s, t, , f]) => [s, t, f & 1])));
  h.update(JSON.stringify((world.board || []).map(([s, t]) => [s, t])));
  return h.digest("hex").slice(0, 16);
}

// setor de cada companhia para escolher a fatia: o setor dominante do seu grupo econômico (o grupo fica numa fatia só)
function sectorOf(world) {
  const bySector = new Map();
  for (const gr of world.groups || []) {
    const w = {};
    for (const m of gr.m) { const n = world.nodes[m]; if (n.t === "c") w[n.c] = (w[n.c] || 0) + Math.sqrt(n.mc || 1e8); }
    const top = Object.entries(w).sort((a, b) => b[1] - a[1])[0];
    if (top) for (const m of gr.m) bySector.set(m, top[0]);
  }
  return (i) => {
    const c = bySector.get(i) || world.nodes[i].c;
    return SECTOR_ORDER.includes(c) ? c : "out";
  };
}

// fatias proporcionais ao número de companhias de cada setor: [setor, ângulo inicial, ângulo final]
function wedges(world, sec) {
  const cnt = {};
  world.nodes.forEach((n, i) => { if (n.t === "c") cnt[sec(i)] = (cnt[sec(i)] || 0) + 1; });
  const tot = Object.values(cnt).reduce((a, b) => a + b, 0) || 1;
  let acc = -Math.PI;
  const arcs = [];
  for (const c of SECTOR_ORDER) {
    if (!cnt[c]) continue;
    const w = (cnt[c] / tot) * 2 * Math.PI;
    arcs.push([c, acc, acc + w]);
    acc += w;
  }
  return arcs;
}

export function layout(world, { prev = null, log = () => {} } = {}) {
  const N = world.nodes.length;
  const g = new Graph({ type: "undirected", multi: false, allowSelfLoops: false });
  const rand = rng(7);
  // o tamanho no layout tem folga: de longe a página desenha os nós um pouco maiores do que o tamanho real
  world.nodes.forEach((n, i) => g.addNode(i, { size: radius(n) * 1.6, x: 0, y: 0 }));
  const add = (s, t, w) => {
    if (s === t) return;
    if (g.hasEdge(s, t)) g.updateEdgeAttribute(s, t, "weight", (v) => Math.max(v, w));
    else g.addEdge(s, t, { weight: w });
  };
  // Pesos: controle puxa forte; participação comum pelo tamanho; gestoras e fundos (que têm 5% de dezenas de
  // companhias) quase nada, para não embolarem tudo no centro; conselho de leve. Cada companhia de um grupo econômico
  // ganha também uma ligação invisível com o topo do grupo: o grupo vira uma ilha no mapa.
  const institutional = (i) => world.nodes[i].t === "j" && (world.nodes[i].c === "fund" || world.nodes[i].c === "pen");
  for (const [s, t, p, f] of world.edges) add(s, t, f & 1 ? 6 : institutional(s) ? 0.02 : 0.4 + Math.max(0, p) / 50);
  for (const [s, t] of world.board || []) add(s, t, 0.05);
  for (const gr of world.groups || []) {
    if (gr.nc < 2) continue;
    for (const m of gr.m) if (world.nodes[m].t === "c") add(m, gr.h, 25);
  }

  // posição inicial: a da rodada anterior; senão perto dos vizinhos que já têm posição; senão aleatória
  const known = new Uint8Array(N);
  if (prev) world.nodes.forEach((n, i) => { const p = prev[n.id]; if (p) { g.mergeNodeAttributes(i, { x: p[0], y: p[1] }); known[i] = 1; } });
  const nKnown = known.reduce((a, b) => a + b, 0);
  for (let pass = 0; pass < 4; pass++) {
    g.forEachNode((key) => {
      const i = +key;
      if (known[i]) return;
      const nb = g.neighbors(key).filter((j) => known[+j]);
      if (nb.length) {
        g.mergeNodeAttributes(key, {
          x: nb.reduce((s, j) => s + g.getNodeAttribute(j, "x"), 0) / nb.length + (rand() - 0.5) * 8,
          y: nb.reduce((s, j) => s + g.getNodeAttribute(j, "y"), 0) / nb.length + (rand() - 0.5) * 8,
        });
        known[i] = 2;
      } else if (pass === 3) g.mergeNodeAttributes(key, { x: (rand() - 0.5) * 400, y: (rand() - 0.5) * 400 });
    });
  }

  const warm = prev && nKnown > N * 0.6;
  const settings = {
    ...forceAtlas2.inferSettings(g),
    barnesHutOptimize: true,
    barnesHutTheta: 0.8,
    linLogMode: false,
    outboundAttractionDistribution: false,
    adjustSizes: false,
    edgeWeightInfluence: 1,
    scalingRatio: 18,
    gravity: 0.4,
    strongGravityMode: true,
    slowDown: warm ? 25 : 1.5,
  };
  log(`layout: ${N} nós, ${g.size} arestas, ${warm ? "partindo da rodada anterior" : "do zero"}`);
  forceAtlas2.assign(g, { iterations: warm ? 150 : 900, settings, getEdgeWeight: "weight" });

  // continentes: em rodadas, gira cada companhia um pouco em direção ao meio da fatia do seu setor (sem mudar a
  // distância ao centro) e deixa as forças reacomodarem; acionistas e controladas vão junto pelas ligações
  const sec = sectorOf(world);
  const arcs = wedges(world, sec);
  const mid = Object.fromEntries(arcs.map(([c, a0, a1]) => [c, (a0 + a1) / 2]));
  const rounds = warm ? 6 : 30, pull = warm ? 0.2 : 0.5;
  for (let r = 0; r < rounds; r++) {
    g.forEachNode((key, a) => {
      const i = +key;
      if (world.nodes[i].t !== "c") return;
      const rad = Math.hypot(a.x, a.y), cur = Math.atan2(a.y, a.x);
      let d = mid[sec(i)] - cur;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      const na = cur + d * pull;
      g.mergeNodeAttributes(key, { x: Math.cos(na) * rad, y: Math.sin(na) * rad });
    });
    forceAtlas2.assign(g, { iterations: 40, settings: { ...settings, slowDown: warm ? 25 : 3 }, getEdgeWeight: "weight" });
  }
  // fase final com anticolisão: os nós grandes abrem espaço sem desmontar os grupos
  forceAtlas2.assign(g, { iterations: warm ? 40 : 100, settings: { ...settings, adjustSizes: true, slowDown: warm ? 30 : 8 }, getEdgeWeight: "weight" });
  noverlap.assign(g, { maxIterations: 300, settings: { margin: 1, ratio: 1.1, speed: 2 } });

  const pos = new Array(N * 2);
  const rs = [];
  g.forEachNode((key, a) => {
    const i = +key;
    pos[2 * i] = Math.round(a.x * 10) / 10;
    pos[2 * i + 1] = Math.round(a.y * 10) / 10;
    rs.push(Math.hypot(a.x, a.y));
  });
  rs.sort((a, b) => a - b);
  // anel de setores: raio do disco (quase todos os nós dentro) e as fatias, para a página desenhar a bússola
  const ring = { r: Math.round(rs[Math.floor(rs.length * 0.995)] || 1), arcs: arcs.map(([c, a0, a1]) => [c, +a0.toFixed(4), +a1.toFixed(4)]) };
  return { pos, ring };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  if (!existsSync(FILE)) { console.log("Mundo: sem mundo.json; nada a fazer."); process.exit(0); }
  const world = JSON.parse(readFileSync(FILE, "utf8"));
  const saved = existsSync(PREV) ? JSON.parse(readFileSync(PREV, "utf8")) : null;
  // posições de outra versão do desenho não servem de ponto de partida
  const prev = saved && saved.v === VERSION ? saved.pos : null;
  const t0 = Date.now();
  world.sig = signature(world);
  if (prev && saved.sig === world.sig && saved.ring && world.nodes.every((n) => prev[n.id])) {
    // nada mudou na estrutura (só preços): o mapa fica exatamente onde estava
    world.pos = world.nodes.flatMap((n) => prev[n.id]);
    world.ring = saved.ring;
    console.log("Mundo: estrutura igual à da rodada anterior; posições mantidas.");
  } else Object.assign(world, layout(world, { prev, log: (m) => console.log(m) }));
  world.layout = VERSION;
  writeFileSync(FILE, JSON.stringify(world));
  console.log(`Mundo: posições de ${world.nodes.length} nós em ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
}
