// Posições do Mundo das companhias no mapa (a página 3D, site/mundo.js).
//
// O mapa é um tabuleiro: cada setor é um bloco retangular, com área proporcional ao que ele tem, e os blocos são
// arrumados como quarteirões (treemap), todos à vista ao mesmo tempo. Os investidores institucionais (gestoras com
// fatia em várias companhias, fundos de pensão e governo) têm um bloco próprio. Dentro de cada bloco, as posições
// partem do mapa 2D (scripts/mundo_layout.mjs), em que os grupos econômicos já estão juntos, esticadas para ocupar o
// bloco e acomodadas sem sobreposição. Cada companhia fica no bloco do seu próprio setor (a Petrobras no petróleo, mesmo
// sendo do mesmo grupo que o Banco do Brasil); holdings e pessoas, no setor das companhias que controlam ou em que têm
// participação.
//
// Saída em world.mapa: { v, W, H, x, y (um por nó), plate (índice do bloco de cada nó), plates: [{ c, x0, y0, x1, y1 }] }.
// O CI monta dois: deitado (world.mapa, para telas largas) e em pé (world.mapaV, para o celular na vertical).
// Determinístico: as mesmas posições 2D dão o mesmo mapa. Também roda no navegador (fallback quando o mundo.json ainda
// não tem o mapa).

export const MAPA_VERSION = "mapa-2";

const SECTOR_ORDER = ["fin", "tech", "saude", "log", "agro", "ind", "util", "oil", "base", "cons", "imob", "out"];
const PAD = 1.5; // folga em volta de cada nó
const FILL = 0.42; // fração de cada bloco ocupada pelos nós (o resto é rua e respiro)

function radius(n) {
  if (n.t === "c") return n.mc ? 1.8 + 1.25 * Math.log10(1 + n.mc / 1e8) : 1.8;
  if (n.t === "s") return 1.2;
  return n.v ? 1 + 0.8 * Math.log10(1 + n.v / 1e8) : 1;
}

// investidores institucionais: governo e gestoras/fundos de pensão sem dono no mapa com fatia em 2+ companhias
export function investorsOf(world) {
  const N = world.nodes.length;
  const inc = new Int32Array(N), outC = new Int32Array(N);
  for (const [s, t] of world.edges || []) { inc[t]++; if (world.nodes[t].t === "c") outC[s]++; }
  return Uint8Array.from(world.nodes, (n, i) => (n.t === "j" && (n.c === "gov" || ((n.c === "fund" || n.c === "pen") && !inc[i] && outC[i] >= 2)) ? 1 : 0));
}

// setor de cada nó: companhias pelo próprio setor; os demais pelo setor das companhias a que estão ligados (controle e
// companhias pesam mais; uma holding no meio de uma cadeia herda o setor do que está abaixo dela)
export function sectorsOf(world, inv) {
  const nodes = world.nodes, N = nodes.length;
  const sec = new Int16Array(N).fill(-1);
  const idx = (c) => { const k = SECTOR_ORDER.indexOf(c); return k < 0 ? SECTOR_ORDER.length - 1 : k; };
  nodes.forEach((n, i) => { if (n.t === "c") sec[i] = idx(n.c); });
  const adj = Array.from({ length: N }, () => []);
  for (const [s, t, , f] of world.edges || []) { const w = f & 1 ? 3 : 1; adj[s].push([t, w]); adj[t].push([s, w]); }
  for (const [s, t] of world.board || []) { adj[s].push([t, 0.3]); adj[t].push([s, 0.3]); }
  for (let pass = 0; pass < 6; pass++) {
    let changed = 0;
    for (let i = 0; i < N; i++) {
      if (sec[i] >= 0) continue;
      const vote = new Float64Array(SECTOR_ORDER.length);
      let any = false;
      for (const [j, w] of adj[i]) if (sec[j] >= 0 && !inv[j]) { vote[sec[j]] += w * (nodes[j].t === "c" ? 2 : 1); any = true; }
      if (any) { let b = 0; for (let k = 1; k < vote.length; k++) if (vote[k] > vote[b]) b = k; sec[i] = b; changed++; }
    }
    if (!changed) break;
  }
  for (let i = 0; i < N; i++) if (sec[i] < 0) sec[i] = SECTOR_ORDER.length - 1;
  return sec;
}

// treemap quadrado (Bruls, Huizing e van Wijk): retângulos com proporção perto de 1
function squarify(items, x0, y0, w, h) {
  const out = [];
  const rest = items.slice();
  let x = x0, y = y0, W = w, H = h;
  const worst = (row, side) => {
    const s = row.reduce((a, b) => a + b.a, 0);
    let mx = 0;
    for (const r of row) { const len = s / side, other = r.a / len; mx = Math.max(mx, Math.max(len / other, other / len)); }
    return mx;
  };
  while (rest.length) {
    const side = Math.min(W, H);
    const row = [rest.shift()];
    while (rest.length && worst([...row, rest[0]], side) <= worst(row, side)) row.push(rest.shift());
    const s = row.reduce((a, b) => a + b.a, 0);
    if (W >= H) {
      const cw = s / H;
      let yy = y;
      for (const r of row) { const ch = r.a / cw; out.push({ ...r, x0: x, y0: yy, x1: x + cw, y1: yy + ch }); yy += ch; }
      x += cw; W -= cw;
    } else {
      const ch = s / W;
      let xx = x;
      for (const r of row) { const cw = r.a / ch; out.push({ ...r, x0: xx, y0: y, x1: xx + cw, y1: y + ch }); xx += cw; }
      y += ch; H -= ch;
    }
  }
  return out;
}

export const ASPECT_WIDE = 1.62, ASPECT_TALL = 0.62;

export function mapLayout(world, { log = () => {}, aspect = ASPECT_WIDE } = {}) {
  const nodes = world.nodes, N = nodes.length;
  const pos = world.pos || [];
  const inv = investorsOf(world);
  const sec = sectorsOf(world, inv);
  const INV = SECTOR_ORDER.length; // índice do bloco dos investidores
  const plateOf = Int16Array.from(sec, (s, i) => (inv[i] ? INV : s));
  const r = Float64Array.from(nodes, (n) => radius(n) * PAD);

  // área de cada bloco
  const area = new Float64Array(INV + 1);
  for (let i = 0; i < N; i++) area[plateOf[i]] += Math.PI * r[i] * r[i];
  const items = [];
  for (let k = 0; k <= INV; k++) if (area[k] > 0) items.push({ k, c: k === INV ? "inv" : SECTOR_ORDER[k], a: area[k] / FILL });
  items.sort((a, b) => b.a - a.a);
  const total = items.reduce((s, it) => s + it.a, 0);
  const W = Math.sqrt(total * aspect), H = total / W;
  const rects = squarify(items, 0, 0, W, H);
  // ruas entre os blocos e uma faixa no alto de cada bloco para o nome (medidas pela escala do mapa, não pelo formato)
  const side = Math.sqrt(total);
  const gap = side * Math.sqrt(1.62) * 0.014;
  const plates = rects.map((p) => ({ c: p.c, k: p.k, x0: p.x0 + gap / 2, y0: p.y0 + gap / 2, x1: p.x1 - gap / 2, y1: p.y1 - gap / 2 }));
  const byK = new Map(plates.map((p, j) => [p.k, j]));

  // posição inicial: o mapa 2D de cada setor, esticado (por posto, para ocupar o bloco sem buracos)
  const X = new Float64Array(N), Y = new Float64Array(N);
  const inner = (p) => {
    const m = Math.min(p.x1 - p.x0, p.y1 - p.y0) * 0.06 + 2;
    const band = Math.min((p.y1 - p.y0) * 0.16, (side / Math.sqrt(1.62)) * 0.045);
    return { x0: p.x0 + m, x1: p.x1 - m, y0: p.y0 + m + band, y1: p.y1 - m };
  };
  for (const p of plates) {
    const mem = [];
    for (let i = 0; i < N; i++) if (plateOf[i] === p.k) mem.push(i);
    const b = inner(p);
    if (p.c === "inv") {
      // investidores em fileiras pelo valor investido: os maiores no alto
      mem.sort((a, b2) => (nodes[b2].v || 0) - (nodes[a].v || 0) || a - b2);
      const cols = Math.max(1, Math.round(Math.sqrt(mem.length * ((b.x1 - b.x0) / Math.max(1, b.y1 - b.y0)))));
      const rows = Math.ceil(mem.length / cols);
      mem.forEach((i, j) => {
        X[i] = b.x0 + ((j % cols) + 0.5) * ((b.x1 - b.x0) / cols);
        Y[i] = b.y0 + (Math.floor(j / cols) + 0.5) * ((b.y1 - b.y0) / rows);
      });
      continue;
    }
    const norm = (vals) => {
      const order = vals.map((v, j) => j).sort((a, b2) => vals[a] - vals[b2] || a - b2);
      const rank = new Float64Array(vals.length);
      order.forEach((j, q) => { rank[j] = (q + 0.5) / vals.length; });
      const sorted = order.map((j) => vals[j]);
      const lo = sorted[Math.floor(sorted.length * 0.03)] ?? 0, hi = sorted[Math.ceil(sorted.length * 0.97) - 1] ?? 1;
      return vals.map((v, j) => 0.6 * rank[j] + 0.4 * Math.min(1, Math.max(0, (v - lo) / Math.max(1e-9, hi - lo))));
    };
    const ux = norm(mem.map((i) => pos[2 * i] || 0)), uy = norm(mem.map((i) => pos[2 * i + 1] || 0));
    mem.forEach((i, j) => { X[i] = b.x0 + ux[j] * (b.x1 - b.x0); Y[i] = b.y0 + uy[j] * (b.y1 - b.y0); });
  }

  // acomodação: sem sobreposição, grupos juntos, ligações curtas, sempre dentro do bloco
  const springs = [];
  for (const [s, t, , f] of world.edges || []) if (plateOf[s] === plateOf[t] && plateOf[s] !== INV) springs.push([s, t, f & 1 ? 0.06 : 0.02]);
  const head = new Int32Array(N).fill(-1);
  for (const gr of world.groups || []) if (gr.nc >= 2) for (const m of gr.m) if (m !== gr.h && plateOf[m] === plateOf[gr.h] && nodes[m].t === "c") head[m] = gr.h;
  const bounds = new Map(plates.map((p) => [p.k, inner(p)]));
  const rs = Array.from(r).sort((a, b) => a - b);
  const cell = Math.max(2, rs[Math.floor(rs.length / 2)] * 2.2);
  const key = (gx, gy) => (gx + 4096) * 8192 + (gy + 4096);
  const FX = new Float64Array(N), FY = new Float64Array(N);
  const grid = new Map();
  const iters = 160;
  for (let it = 0; it < iters; it++) {
    const cool = 1 - it / iters;
    FX.fill(0); FY.fill(0);
    for (const [a, b, k] of springs) {
      const dx = X[b] - X[a], dy = Y[b] - Y[a], d = Math.hypot(dx, dy) || 1e-9, rest = (r[a] + r[b]) * 1.1;
      if (d <= rest) continue;
      const f = (k * (d - rest)) / d;
      FX[a] += dx * f; FY[a] += dy * f; FX[b] -= dx * f; FY[b] -= dy * f;
    }
    for (let i = 0; i < N; i++) if (head[i] >= 0) { FX[i] += (X[head[i]] - X[i]) * 0.03; FY[i] += (Y[head[i]] - Y[i]) * 0.03; }
    grid.clear();
    for (let i = 0; i < N; i++) {
      const k = key(Math.floor(X[i] / cell), Math.floor(Y[i] / cell));
      let l = grid.get(k);
      if (!l) grid.set(k, (l = []));
      l.push(i);
    }
    for (let i = 0; i < N; i++) {
      const gx = Math.floor(X[i] / cell), gy = Math.floor(Y[i] / cell), span = Math.ceil((2 * r[i]) / cell);
      for (let x = gx - span; x <= gx + span; x++) for (let y = gy - span; y <= gy + span; y++) {
        const l = grid.get(key(x, y));
        if (!l) continue;
        for (const j of l) {
          if (r[j] > r[i] || (r[j] === r[i] && j <= i) || plateOf[j] !== plateOf[i]) continue;
          const dx = X[i] - X[j], dy = Y[i] - Y[j], d = Math.hypot(dx, dy) || 1e-6, want = r[i] + r[j];
          if (d >= want) continue;
          const f = ((want - d) / d) * 0.5;
          FX[i] += dx * f; FY[i] += dy * f; FX[j] -= dx * f; FY[j] -= dy * f;
        }
      }
    }
    const maxStep = 3 * cool + 0.3;
    for (let i = 0; i < N; i++) {
      if (plateOf[i] === INV) continue;
      let fx = FX[i], fy = FY[i];
      const m = Math.hypot(fx, fy);
      if (m > maxStep) { fx *= maxStep / m; fy *= maxStep / m; }
      const b = bounds.get(plateOf[i]);
      X[i] = Math.min(b.x1 - r[i] * 0.5, Math.max(b.x0 + r[i] * 0.5, X[i] + fx));
      Y[i] = Math.min(b.y1 - r[i] * 0.5, Math.max(b.y0 + r[i] * 0.5, Y[i] + fy));
    }
  }
  log(`mapa: ${plates.length} blocos, ${N} nós, ${W.toFixed(0)} × ${H.toFixed(0)}`);
  const rd = (v) => Math.round(v * 10) / 10;
  return {
    v: MAPA_VERSION, W: rd(W), H: rd(H), pad: PAD,
    x: Array.from(X, rd), y: Array.from(Y, rd),
    plate: Array.from(plateOf, (k) => byK.get(k)),
    plates: plates.map((p) => ({ c: p.c, x0: rd(p.x0), y0: rd(p.y0), x1: rd(p.x1), y1: rd(p.y1) })),
  };
}
