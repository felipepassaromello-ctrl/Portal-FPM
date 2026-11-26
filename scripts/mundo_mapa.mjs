// Posições do Mundo das companhias no mapa (a página 3D, site/mundo.js).
//
// O mapa é uma cidade vista do alto. Cada setor é um bairro retangular, com área proporcional ao que ele tem, e os
// bairros são arrumados como quarteirões (treemap), todos à vista ao mesmo tempo. Só o que é possuído fica no chão:
// cada companhia (e cada controlada em comum) tem o seu terreno, no bairro do seu setor, com os grupos econômicos
// juntos (as posições partem do mapa 2D, scripts/mundo_layout.mjs).
//
// Os donos ficam onde está o que eles possuem, e não num bloco à parte:
//   - quem só tem participação numa companhia (direta ou por uma cadeia de holdings) fica na praça dela, em anéis em
//     volta do prédio: no primeiro anel os acionistas diretos (o maior de frente), nos seguintes os donos dos donos;
//   - quem tem participação em duas ou mais (gestoras, fundos de pensão, governo, famílias, holdings de grupo) paira
//     acima da cidade, sobre o centro do que possui, um andar mais alto a cada degrau da cadeia de controle.
// Assim toda ligação desce de quem é dono para o que é possuído.
//
// Saída em world.mapa: { v, W, H, x, y (um por nó), plate (bairro de cada nó), sky (0 = no chão; 1, 2, 3... = andar no
// céu), anchor (a companhia em cuja praça o nó está; -1 se não está em praça), lot (raio do terreno dos nós do chão),
// plates: [{ c, x0, y0, x1, y1 }] }.
// O CI monta dois: deitado (world.mapa, para telas largas) e em pé (world.mapaV, para o celular na vertical).
// Determinístico: as mesmas posições 2D dão o mesmo mapa. Também roda no navegador (fallback quando o mundo.json ainda
// não tem o mapa desta versão).

export const MAPA_VERSION = "mapa-3";

const SECTOR_ORDER = ["fin", "tech", "saude", "log", "agro", "ind", "util", "oil", "base", "cons", "imob", "out"];
const FILL = 0.45; // fração de cada bairro ocupada pelos terrenos (o resto é rua e respiro)
const RING0 = 1.5, RING_STEP = 1.45, RING_GAP = 1.5; // anéis da praça: distância do prédio, entre anéis e entre vizinhos

function radius(n) {
  if (n.t === "c") return n.mc ? 1.8 + 1.25 * Math.log10(1 + n.mc / 1e8) : 1.8;
  if (n.t === "s") return 1.2;
  return n.v ? 1 + 0.8 * Math.log10(1 + n.v / 1e8) : 1;
}

// setor de cada nó: companhias pelo próprio setor; os demais pelo setor das companhias a que estão ligados (controle e
// companhias pesam mais; uma holding no meio de uma cadeia herda o setor do que está abaixo dela)
export function sectorsOf(world) {
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
      for (const [j, w] of adj[i]) if (sec[j] >= 0) { vote[sec[j]] += w * (nodes[j].t === "c" ? 2 : 1); any = true; }
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

// quem fica no chão, quem fica na praça de uma companhia e quem paira sobre várias
export function placement(world) {
  const nodes = world.nodes, N = nodes.length;
  const out = Array.from({ length: N }, () => []), inc = new Int32Array(N);
  for (const [s, t, p, f] of world.edges || []) { out[s].push([t, p, f]); inc[t]++; }
  const brd = Array.from({ length: N }, () => []);
  for (const [s, t] of world.board || []) brd[s].push(t);
  const ground = Uint8Array.from(nodes, (n, i) => (n.t === "c" || n.t === "s" || (!out[i].length && inc[i]) ? 1 : 0));
  // companhias do chão a que cada dono chega descendo pelas participações, com o peso de cada uma
  const memo = new Array(N).fill(null), state = new Uint8Array(N);
  const reach = (i) => {
    if (memo[i]) return memo[i];
    if (state[i]) return new Map();
    state[i] = 1;
    const m = new Map();
    for (const [t, p, f] of out[i]) {
      const w = (p > 0 ? p : 5) * (f & 1 ? 2 : 1);
      if (ground[t]) m.set(t, (m.get(t) || 0) + w * Math.max(1e8, nodes[t].mc || 0));
      else for (const [a, v] of reach(t)) m.set(a, (m.get(a) || 0) + (v * Math.min(100, w)) / 100);
    }
    state[i] = 0;
    return (memo[i] = m);
  };
  const anchor = new Int32Array(N).fill(-1), sky = new Uint8Array(N), depth = new Uint8Array(N);
  const big = (list) => list.slice().sort((a, b) => (nodes[b].mc || 0) - (nodes[a].mc || 0) || a - b)[0];
  let fallback = -1;
  for (let i = 0; i < N; i++) if (nodes[i].t === "c" && (fallback < 0 || (nodes[i].mc || 0) > (nodes[fallback].mc || 0))) fallback = i;
  for (let i = 0; i < N; i++) {
    if (ground[i]) continue;
    const m = reach(i);
    if (m.size === 1) anchor[i] = m.keys().next().value;
    else if (m.size >= 2) sky[i] = 1;
    else anchor[i] = brd[i].length ? big(brd[i]) : fallback; // só conselho: na praça da maior companhia em que senta
  }
  // degrau de cada dono: 1 = dono direto de algo no chão; no céu, um andar acima do mais alto que ele possui
  const lv = new Int16Array(N).fill(-1), busy = new Uint8Array(N);
  const level = (i) => {
    if (ground[i]) return 0;
    if (lv[i] >= 0) return lv[i];
    if (busy[i]) return 0;
    busy[i] = 1;
    let best = 0, near = 99;
    for (const [t] of out[i]) { const l = level(t); if (sky[i] ? sky[t] : true) best = Math.max(best, sky[t] || !sky[i] ? l : 0); near = Math.min(near, l); }
    busy[i] = 0;
    return (lv[i] = sky[i] ? best + 1 : (near === 99 ? 0 : near) + 1);
  };
  for (let i = 0; i < N; i++) if (!ground[i]) { const l = level(i); if (sky[i]) sky[i] = Math.min(6, l); else depth[i] = Math.min(9, l); }
  return { out, ground, reach, anchor, sky, depth };
}

export function mapLayout(world, { log = () => {}, aspect = ASPECT_WIDE } = {}) {
  const nodes = world.nodes, N = nodes.length;
  const pos = world.pos || [];
  const { out, ground, reach, anchor, sky, depth } = placement(world);
  const sec = sectorsOf(world);
  const K = SECTOR_ORDER.length;

  // a praça de cada companhia: quem mora nela, por anel
  const guests = new Map();
  for (let i = 0; i < N; i++) if (anchor[i] >= 0) (guests.get(anchor[i]) || guests.set(anchor[i], []).get(anchor[i])).push(i);
  const core = Float64Array.from(nodes, (n) => radius(n) * 0.62); // meia largura do prédio
  const rings = new Map(); // companhia → [{ r, list }]
  const lot = new Float64Array(N);
  const stake = (i, a) => { let b = -1; for (const [t, p, f] of out[i]) if (t === a) b = Math.max(b, (p > 0 ? p : 0) + (f & 1 ? 1000 : 0)); return b; };
  for (let a = 0; a < N; a++) {
    if (!ground[a]) continue;
    const g = guests.get(a);
    if (!g) { lot[a] = core[a] * 1.42 + 0.9; continue; }
    const byDepth = new Map();
    for (const i of g) { const d = depth[i] || 1; (byDepth.get(d) || byDepth.set(d, []).get(d)).push(i); }
    const list = [];
    let r = core[a] * 1.42 + RING0;
    for (const d of [...byDepth.keys()].sort((x, y) => x - y)) {
      const rest = byDepth.get(d);
      if (d === 1) rest.sort((x, y) => stake(y, a) - stake(x, a) || (nodes[y].v || 0) - (nodes[x].v || 0) || x - y);
      while (rest.length) {
        const cap = Math.max(4, Math.floor((2 * Math.PI * r) / RING_GAP));
        list.push({ r, d, list: rest.splice(0, cap) });
        r += RING_STEP;
      }
    }
    rings.set(a, list);
    lot[a] = r - RING_STEP + 1.3;
  }

  // área de cada bairro
  const area = new Float64Array(K);
  for (let i = 0; i < N; i++) if (ground[i]) area[sec[i]] += Math.PI * lot[i] * lot[i];
  const items = [];
  for (let k = 0; k < K; k++) if (area[k] > 0) items.push({ k, c: SECTOR_ORDER[k], a: area[k] / FILL });
  items.sort((a, b) => b.a - a.a);
  const total = items.reduce((s, it) => s + it.a, 0);
  const W = Math.sqrt(total * aspect), H = total / W;
  const rects = squarify(items, 0, 0, W, H);
  // avenidas entre os bairros (medidas pela escala do mapa, não pelo formato)
  const side = Math.sqrt(total);
  const gap = side * Math.sqrt(1.62) * 0.02;
  const plates = rects.map((p) => ({ c: p.c, k: p.k, x0: p.x0 + gap / 2, y0: p.y0 + gap / 2, x1: p.x1 - gap / 2, y1: p.y1 - gap / 2 }));
  const byK = new Map(plates.map((p, j) => [p.k, j]));

  // posição inicial dos terrenos: o mapa 2D de cada setor, esticado (por posto, para ocupar o bairro sem buracos)
  const X = new Float64Array(N), Y = new Float64Array(N);
  const inner = (p) => {
    const m = Math.min(p.x1 - p.x0, p.y1 - p.y0) * 0.03 + 1;
    const band = Math.min((p.y1 - p.y0) * 0.12, (side / Math.sqrt(1.62)) * 0.035); // faixa do nome do bairro
    return { x0: p.x0 + m, x1: p.x1 - m, y0: p.y0 + m + band, y1: p.y1 - m };
  };
  const norm = (vals) => {
    const order = vals.map((v, j) => j).sort((a, b2) => vals[a] - vals[b2] || a - b2);
    const rank = new Float64Array(vals.length);
    order.forEach((j, q) => { rank[j] = (q + 0.5) / vals.length; });
    const sorted = order.map((j) => vals[j]);
    const lo = sorted[Math.floor(sorted.length * 0.03)] ?? 0, hi = sorted[Math.ceil(sorted.length * 0.97) - 1] ?? 1;
    return vals.map((v, j) => 0.6 * rank[j] + 0.4 * Math.min(1, Math.max(0, (v - lo) / Math.max(1e-9, hi - lo))));
  };
  for (const p of plates) {
    const mem = [];
    for (let i = 0; i < N; i++) if (ground[i] && sec[i] === p.k) mem.push(i);
    const b = inner(p);
    const ux = norm(mem.map((i) => pos[2 * i] || 0)), uy = norm(mem.map((i) => pos[2 * i + 1] || 0));
    mem.forEach((i, j) => { X[i] = b.x0 + ux[j] * (b.x1 - b.x0); Y[i] = b.y0 + uy[j] * (b.y1 - b.y0); });
  }

  // acomodação dos terrenos: sem sobreposição, grupos juntos, ligações curtas, sempre dentro do bairro
  const G = [];
  for (let i = 0; i < N; i++) if (ground[i]) G.push(i);
  const springs = [];
  for (const [s, t, , f] of world.edges || []) if (ground[s] && ground[t] && sec[s] === sec[t]) springs.push([s, t, f & 1 ? 0.06 : 0.02]);
  const head = new Int32Array(N).fill(-1);
  for (const gr of world.groups || []) if (gr.nc >= 2 && ground[gr.h]) for (const m of gr.m) if (m !== gr.h && ground[m] && sec[m] === sec[gr.h] && nodes[m].t === "c") head[m] = gr.h;
  const bounds = new Map(plates.map((p) => [p.k, inner(p)]));
  const relax = (ids, r, iters, step, pull) => {
    const rs = ids.map((i) => r[i]).sort((a, b) => a - b);
    const cell = Math.max(2, (rs[Math.floor(rs.length / 2)] || 1) * 2.2);
    const key = (gx, gy) => (gx + 4096) * 8192 + (gy + 4096);
    const FX = new Float64Array(N), FY = new Float64Array(N);
    const grid = new Map();
    for (let it = 0; it < iters; it++) {
      const cool = 1 - it / iters;
      FX.fill(0); FY.fill(0);
      pull(FX, FY, Math.max(0, cool * 1.6 - 0.6));
      grid.clear();
      for (const i of ids) {
        const k = key(Math.floor(X[i] / cell), Math.floor(Y[i] / cell));
        let l = grid.get(k);
        if (!l) grid.set(k, (l = []));
        l.push(i);
      }
      for (const i of ids) {
        const gx = Math.floor(X[i] / cell), gy = Math.floor(Y[i] / cell), span = Math.ceil((2 * r[i]) / cell);
        for (let x = gx - span; x <= gx + span; x++) for (let y = gy - span; y <= gy + span; y++) {
          const l = grid.get(key(x, y));
          if (!l) continue;
          for (const j of l) {
            if (r[j] > r[i] || (r[j] === r[i] && j <= i) || !step.same(i, j)) continue;
            let dx = X[i] - X[j], dy = Y[i] - Y[j], d = Math.hypot(dx, dy);
            if (d < 1e-6) { dx = ((i * 7919) % 13) - 6 || 1; dy = ((j * 104729) % 11) - 5 || 1; d = Math.hypot(dx, dy); dx *= 1e-3 / d; dy *= 1e-3 / d; d = 1e-3; }
            const want = r[i] + r[j];
            if (d >= want) continue;
            const f = ((want - d) / d) * 0.5;
            FX[i] += dx * f; FY[i] += dy * f; FX[j] -= dx * f; FY[j] -= dy * f;
          }
        }
      }
      const maxStep = step.max * cool + 0.3;
      for (const i of ids) {
        let fx = FX[i], fy = FY[i];
        const m = Math.hypot(fx, fy);
        if (m > maxStep) { fx *= maxStep / m; fy *= maxStep / m; }
        step.move(i, X[i] + fx, Y[i] + fy);
      }
    }
  };
  relax(G, lot, 220, {
    max: 4,
    same: (i, j) => sec[i] === sec[j],
    move: (i, x, y) => {
      const b = bounds.get(sec[i]), m = Math.min(lot[i], (b.x1 - b.x0) / 2, (b.y1 - b.y0) / 2) * 0.9;
      X[i] = Math.min(b.x1 - m, Math.max(b.x0 + m, x));
      Y[i] = Math.min(b.y1 - m, Math.max(b.y0 + m, y));
    },
  }, (FX, FY, c) => {
    if (!c) return;
    for (const [a, b, k0] of springs) {
      const k = k0 * c;
      const dx = X[b] - X[a], dy = Y[b] - Y[a], d = Math.hypot(dx, dy) || 1e-9, rest = (lot[a] + lot[b]) * 1.05;
      if (d <= rest) continue;
      const f = (k * (d - rest)) / d;
      FX[a] += dx * f; FY[a] += dy * f; FX[b] -= dx * f; FY[b] -= dy * f;
    }
    for (const i of G) if (head[i] >= 0) { FX[i] += (X[head[i]] - X[i]) * 0.03 * c; FY[i] += (Y[head[i]] - Y[i]) * 0.03 * c; }
  });

  // as praças: cada morador no seu anel; o maior acionista de frente (sul), os demais alternando para os lados; os donos
  // dos donos, no anel de fora, o mais perto que der do que eles possuem
  const ang = new Float64Array(N);
  const FRONT = Math.PI / 2;
  for (const [a, list] of rings) {
    for (const ring of list) {
      const n = ring.list.length, minGap = RING_GAP / ring.r;
      let angles;
      if (ring.d === 1) {
        const g = Math.max(minGap, Math.min((2 * Math.PI) / n, minGap * 1.9));
        angles = ring.list.map((_, k) => FRONT + (k % 2 ? 1 : -1) * Math.ceil(k / 2) * g);
      } else {
        const want = ring.list.map((i) => { let s = 0, c = 0; for (const [t] of out[i]) if (anchor[t] === a) { s += Math.sin(ang[t]); c += Math.cos(ang[t]); } return s || c ? Math.atan2(s, c) : FRONT; });
        const order = ring.list.map((_, k) => k).sort((p, q) => want[p] - want[q] || p - q);
        angles = new Array(n);
        // varre em ordem de ângulo, empurrando quem ficaria colado no anterior; depois centra de volta
        let prevA = -Infinity, shift = 0;
        for (const k of order) { const v = Math.max(want[k], prevA + minGap); shift += v - want[k]; angles[k] = v; prevA = v; }
        const back = Math.min(shift / n, minGap * n * 0.5);
        for (let k = 0; k < n; k++) angles[k] -= back;
      }
      ring.list.forEach((i, k) => { ang[i] = angles[k]; X[i] = X[a] + Math.cos(angles[k]) * ring.r; Y[i] = Y[a] + Math.sin(angles[k]) * ring.r; });
    }
  }

  // o céu: cada dono de várias sobre o centro do que possui (puxado para onde tem mais), sem um em cima do outro
  const S = [];
  for (let i = 0; i < N; i++) if (sky[i]) S.push(i);
  const homeX = new Float64Array(N), homeY = new Float64Array(N), sr = new Float64Array(N);
  const plateOf = new Int16Array(N);
  for (let i = 0; i < N; i++) plateOf[i] = ground[i] ? sec[i] : anchor[i] >= 0 ? sec[anchor[i]] : 0;
  for (const i of S) {
    const m = reach(i);
    let sx = 0, sy = 0, sw = 0, best = -1, bw = -1;
    for (const [a, w0] of m) { const w = Math.sqrt(w0); sx += X[a] * w; sy += Y[a] * w; sw += w; if (w0 > bw) { bw = w0; best = a; } }
    homeX[i] = X[i] = sx / sw; homeY[i] = Y[i] = sy / sw;
    plateOf[i] = sec[best];
    sr[i] = radius(nodes[i]) * 1.5 + 0.6;
  }
  relax(S, sr, 140, { max: 3, same: () => true, move: (i, x, y) => { X[i] = Math.min(W - 2, Math.max(2, x)); Y[i] = Math.min(H - 2, Math.max(2, y)); } },
    (FX, FY, c) => { for (const i of S) { FX[i] += (homeX[i] - X[i]) * 0.04 * c; FY[i] += (homeY[i] - Y[i]) * 0.04 * c; } });

  log(`mapa: ${plates.length} bairros, ${G.length} terrenos, ${N - G.length - S.length} nas praças, ${S.length} no céu, ${W.toFixed(0)} × ${H.toFixed(0)}`);
  const rd = (v) => Math.round(v * 10) / 10;
  return {
    v: MAPA_VERSION, W: rd(W), H: rd(H),
    x: Array.from(X, rd), y: Array.from(Y, rd),
    plate: Array.from(plateOf, (k) => byK.get(k)),
    sky: Array.from(sky), anchor: Array.from(anchor), lot: Array.from(lot, rd),
    plates: plates.map((p) => ({ c: p.c, x0: rd(p.x0), y0: rd(p.y0), x1: rd(p.x1), y1: rd(p.y1) })),
  };
}
