// Posições do Mundo das companhias.
//
// Lê site/data/cias/mundo.json (montado pelo scripts/mundo.py), calcula onde cada nó fica no mapa com ForceAtlas2
// (Barnes-Hut, gravidade forte, grupos econômicos puxados para junto do seu topo) e uma passada contra sobreposição, e grava as posições de volta
// no mesmo arquivo, em "pos" ([x0, y0, x1, y1, ...]). Se houver posições da rodada anterior
// (site/data/cias/base/mundo_pos.json), parte delas e roda menos iterações: o mapa fica no mesmo lugar de um dia para o
// outro e só acomoda o que mudou.
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

// gerador pseudoaleatório com semente: o mesmo grafo dá sempre o mesmo mapa
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// raio de cada nó em unidades do mapa; o mesmo critério que a página usa para desenhar (site/mundo.js, nodeRadius)
export function radius(n) {
  if (n.t === "c") return n.mc ? 3 + 1.15 * Math.sqrt(n.mc / 1e9) : 3;
  if (n.t === "s") return 2.2;
  return n.v ? 2 + 0.9 * Math.sqrt(n.v / 1e9) : 2;
}

// assinatura da estrutura (quem existe e quem liga a quem); valor de mercado e nomes não entram
export function signature(world) {
  const h = createHash("sha1");
  h.update(world.nodes.map((n) => n.id).join("|"));
  h.update(JSON.stringify(world.edges.map(([s, t, , f]) => [s, t, f & 1])));
  h.update(JSON.stringify((world.board || []).map(([s, t]) => [s, t])));
  return h.digest("hex").slice(0, 16);
}

export function layout(world, { prev = null, log = () => {} } = {}) {
  const N = world.nodes.length;
  const g = new Graph({ type: "undirected", multi: false, allowSelfLoops: false });
  const rand = rng(7);
  world.nodes.forEach((n, i) => g.addNode(i, { size: radius(n), x: 0, y: 0, g: n.g }));
  const add = (s, t, w) => {
    if (s === t) return;
    if (g.hasEdge(s, t)) g.updateEdgeAttribute(s, t, "weight", (v) => Math.max(v, w));
    else g.addEdge(s, t, { weight: w });
  };
  // Pesos: controle puxa forte; participação comum pelo tamanho; fundos e gestoras (que têm 5% de dezenas de
  // companhias) quase nada, para não embolarem tudo no centro; conselho de leve. Cada companhia de um grupo econômico
  // ganha também uma ligação invisível com o topo do grupo: o grupo vira uma ilha no mapa.
  const institutional = (i) => world.nodes[i].t === "j" && (world.nodes[i].c === "fund" || world.nodes[i].c === "pen");
  for (const [s, t, p, f] of world.edges) add(s, t, f & 1 ? 6 : institutional(s) ? 0.06 : 0.4 + Math.max(0, p) / 50);
  for (const [s, t] of world.board || []) add(s, t, 0.15);
  for (const gr of world.groups || []) {
    if (gr.nc < 2) continue;
    for (const m of gr.m) if (world.nodes[m].t === "c") add(m, gr.h, 25);
  }

  // posição inicial: a da rodada anterior; senão perto dos vizinhos que já têm posição; senão uma espiral por grupo
  const known = new Uint8Array(N);
  if (prev) world.nodes.forEach((n, i) => { const p = prev[n.id]; if (p) { g.mergeNodeAttributes(i, { x: p[0], y: p[1] }); known[i] = 1; } });
  const nKnown = known.reduce((a, b) => a + b, 0);
  const spread = Math.sqrt(N) * 5;
  for (let pass = 0; pass < 4; pass++) {
    g.forEachNode((key, a) => {
      const i = +key;
      if (known[i]) return;
      const nb = g.neighbors(key).filter((j) => known[+j]);
      if (nb.length) {
        g.mergeNodeAttributes(key, {
          x: nb.reduce((s, j) => s + g.getNodeAttribute(j, "x"), 0) / nb.length + (rand() - 0.5) * 8,
          y: nb.reduce((s, j) => s + g.getNodeAttribute(j, "y"), 0) / nb.length + (rand() - 0.5) * 8,
        });
        known[i] = 2;
      } else if (pass === 3) {
        const ang = ((a.g ?? i) * 2.399963) % (Math.PI * 2), r = spread * Math.sqrt(rand());
        g.mergeNodeAttributes(key, { x: Math.cos(ang) * r, y: Math.sin(ang) * r });
      }
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
    scalingRatio: 12,
    gravity: 1,
    strongGravityMode: true,
    slowDown: warm ? 25 : 1.5,
  };
  const iterations = warm ? 150 : 900;
  log(`layout: ${N} nós, ${g.size} arestas, ${warm ? "partindo da rodada anterior" : "do zero"}, ${iterations} iterações`);
  forceAtlas2.assign(g, { iterations, settings, getEdgeWeight: "weight" });
  // fase final com anticolisão: os nós grandes abrem espaço sem desmontar os grupos
  forceAtlas2.assign(g, { iterations: warm ? 40 : 100, settings: { ...settings, adjustSizes: true, slowDown: warm ? 30 : 8 }, getEdgeWeight: "weight" });
  // anticolisão final: nenhum círculo por cima de outro, com folga proporcional ao tamanho
  noverlap.assign(g, { maxIterations: 400, settings: { margin: 1.5, ratio: 1.12, expansion: 1.05, speed: 2 } });

  let cx = 0, cy = 0;
  g.forEachNode((_, a) => { cx += a.x; cy += a.y; });
  cx /= N; cy /= N;
  const pos = new Array(N * 2);
  g.forEachNode((key, a) => {
    const i = +key;
    pos[2 * i] = Math.round((a.x - cx) * 10) / 10;
    pos[2 * i + 1] = Math.round((a.y - cy) * 10) / 10;
  });
  return pos;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  if (!existsSync(FILE)) { console.log("Mundo: sem mundo.json; nada a fazer."); process.exit(0); }
  const world = JSON.parse(readFileSync(FILE, "utf8"));
  const saved = existsSync(PREV) ? JSON.parse(readFileSync(PREV, "utf8")) : null;
  const prev = saved?.pos || null;
  const t0 = Date.now();
  world.sig = signature(world);
  if (prev && saved.sig === world.sig && world.nodes.every((n) => prev[n.id])) {
    // nada mudou na estrutura (só preços): o mapa fica exatamente onde estava
    world.pos = world.nodes.flatMap((n) => prev[n.id]);
    console.log("Mundo: estrutura igual à da rodada anterior; posições mantidas.");
  } else world.pos = layout(world, { prev, log: (m) => console.log(m) });
  writeFileSync(FILE, JSON.stringify(world));
  console.log(`Mundo: posições de ${world.nodes.length} nós em ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
}
