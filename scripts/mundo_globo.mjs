// Posições do Mundo das companhias no globo.
//
// O mapa 2D (scripts/mundo_layout.mjs) já agrupa as companhias por setor e por grupo econômico. Aqui ele vira um
// planeta: cada setor é um continente (uma calota com área proporcional ao que ele tem), os continentes ficam em volta
// do globo na ordem das cores, com oceanos entre eles; dentro de cada um, os grupos econômicos ficam juntos como
// cidades. Os grandes investidores institucionais (gestoras, fundos de pensão, governo) não ficam no chão: ficam em
// órbita, acima das companhias em que investem.
//
// Saída em world.globo: { v, R, pad, lat, lon (graus, um por nó), alt (altitude para quem está em órbita, 0 no
// chão), sec (índice do continente de cada nó), cont: [[setor, lat, lon, raio em graus], ...] }.
//
// Determinístico: as mesmas posições 2D dão o mesmo globo.

export const GLOBO_VERSION = "globo-1";

const SECTOR_ORDER = ["fin", "tech", "saude", "log", "agro", "ind", "util", "oil", "base", "cons", "imob", "out"];
const LAND = 0.32; // fração do planeta coberta por continentes
const PAD = 1.55; // folga em volta de cada nó (o chão de cada um)

function radius(n) {
  if (n.t === "c") return n.mc ? 1.8 + 1.25 * Math.log10(1 + n.mc / 1e8) : 1.8;
  if (n.t === "s") return 1.2;
  return n.v ? 1 + 0.8 * Math.log10(1 + n.v / 1e8) : 1;
}

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

const norm3 = (v, i) => {
  const l = Math.hypot(v[i], v[i + 1], v[i + 2]) || 1;
  v[i] /= l; v[i + 1] /= l; v[i + 2] /= l;
};
const toXYZ = (lat, lon) => {
  const a = (lat * Math.PI) / 180, b = (lon * Math.PI) / 180;
  return [Math.cos(a) * Math.sin(b), Math.sin(a), Math.cos(a) * Math.cos(b)];
};
const toLatLon = (x, y, z) => [(Math.asin(Math.max(-1, Math.min(1, y))) * 180) / Math.PI, (Math.atan2(x, z) * 180) / Math.PI];

export function globeLayout(world, { log = () => {} } = {}) {
  const nodes = world.nodes, N = nodes.length;
  const pos = world.pos || [];
  const edges = world.edges || [], board = world.board || [];

  // quem é dono de quem, para classificar
  const inc = Array.from({ length: N }, () => []), out = Array.from({ length: N }, () => []);
  for (const [s, t, p, f] of edges) { out[s].push([t, p, f]); inc[t].push([s, p, f]); }

  // em órbita: governo e investidores institucionais sem dono no mapa que têm fatia em duas ou mais companhias
  const sat = new Uint8Array(N);
  nodes.forEach((n, i) => {
    if (n.t !== "j") return;
    if (n.c === "gov") { sat[i] = 1; return; }
    if ((n.c === "fund" || n.c === "pen") && !inc[i].length && out[i].filter(([t]) => nodes[t].t === "c").length >= 2) sat[i] = 1;
  });

  // continente de cada nó: companhias pelo setor dominante do seu grupo (o grupo fica num continente só); os demais
  // pelo setor das companhias a que estão ligados
  const secIdx = new Int16Array(N).fill(-1);
  const byGroup = new Map();
  for (const gr of world.groups || []) {
    const w = {};
    for (const m of gr.m) { const n = nodes[m]; if (n.t === "c") w[n.c] = (w[n.c] || 0) + Math.sqrt(n.mc || 1e8); }
    const top = Object.entries(w).sort((a, b) => b[1] - a[1])[0];
    if (top) for (const m of gr.m) if (!byGroup.has(m)) byGroup.set(m, top[0]);
  }
  const sIndex = (c) => { const k = SECTOR_ORDER.indexOf(c); return k < 0 ? SECTOR_ORDER.length - 1 : k; };
  nodes.forEach((n, i) => { if (n.t === "c") secIdx[i] = sIndex(byGroup.get(i) || n.c); });
  const adj = Array.from({ length: N }, () => []);
  for (const [s, t, p, f] of edges) { const w = f & 1 ? 3 : 1; adj[s].push([t, w]); adj[t].push([s, w]); }
  for (const [s, t] of board) { adj[s].push([t, 0.3]); adj[t].push([s, 0.3]); }
  for (let pass = 0; pass < 6; pass++) {
    let changed = 0;
    for (let i = 0; i < N; i++) {
      if (secIdx[i] >= 0 && (nodes[i].t === "c" || pass > 0)) continue;
      if (byGroup.has(i)) { secIdx[i] = sIndex(byGroup.get(i)); changed++; continue; }
      const vote = new Float64Array(SECTOR_ORDER.length);
      let any = false;
      for (const [j, w] of adj[i]) if (secIdx[j] >= 0 && !sat[j]) { vote[secIdx[j]] += w * (nodes[j].t === "c" ? 2 : 1); any = true; }
      if (any) { let b = 0; for (let k = 1; k < vote.length; k++) if (vote[k] > vote[b]) b = k; secIdx[i] = b; changed++; }
    }
    if (!changed) break;
  }
  for (let i = 0; i < N; i++) if (secIdx[i] < 0) secIdx[i] = SECTOR_ORDER.length - 1;

  // escala: a área de chão de todos os nós cobre LAND do planeta
  const r2d = Float64Array.from(nodes, radius);
  let area = 0;
  const secArea = new Float64Array(SECTOR_ORDER.length);
  for (let i = 0; i < N; i++) if (!sat[i]) { const a = Math.PI * (r2d[i] * PAD) ** 2; area += a; secArea[secIdx[i]] += a; }
  const R = Math.sqrt(area / (4 * Math.PI * LAND)); // raio do planeta em unidades do mapa
  const rr = Float64Array.from(r2d, (v) => (v * PAD) / R); // raio do chão de cada nó, em radianos (esfera unitária)

  // centros dos continentes: em zigue-zague em volta do globo, na ordem das cores, e depois afastados entre si
  const present = SECTOR_ORDER.map((c, k) => k).filter((k) => secArea[k] > 0);
  const alpha = new Float64Array(SECTOR_ORDER.length);
  for (const k of present) alpha[k] = Math.acos(Math.max(-1, 1 - (secArea[k] / R ** 2) / (2 * Math.PI)));
  const totW = present.reduce((s, k) => s + alpha[k], 0);
  const C = new Float64Array(SECTOR_ORDER.length * 3);
  let acc = 0;
  present.forEach((k, idx) => {
    const lon = -180 + (360 * (acc + alpha[k] / 2)) / totW;
    acc += alpha[k];
    const lat = (idx % 2 ? -1 : 1) * 24 + (idx % 3 === 2 ? 8 : 0);
    const [x, y, z] = toXYZ(lat, lon);
    C[3 * k] = x; C[3 * k + 1] = y; C[3 * k + 2] = z;
  });
  for (let it = 0; it < 400; it++) {
    for (const a of present) {
      let fx = 0, fy = 0, fz = 0;
      for (const b of present) {
        if (a === b) continue;
        const dx = C[3 * a] - C[3 * b], dy = C[3 * a + 1] - C[3 * b + 1], dz = C[3 * a + 2] - C[3 * b + 2];
        const d = Math.hypot(dx, dy, dz) || 1e-6;
        const ang = 2 * Math.asin(Math.min(1, d / 2));
        const want = alpha[a] + alpha[b] + 0.16; // oceano entre continentes
        if (ang < want) { const f = (want - ang) * 0.08; fx += (dx / d) * f; fy += (dy / d) * f; fz += (dz / d) * f; }
      }
      // os continentes ficam longe dos polos (o planeta tem calotas de oceano)
      const lat = Math.asin(C[3 * a + 1]);
      const lim = (62 * Math.PI) / 180 - alpha[a];
      if (Math.abs(lat) > lim) fy -= Math.sign(lat) * (Math.abs(lat) - lim) * 0.2;
      C[3 * a] += fx; C[3 * a + 1] += fy; C[3 * a + 2] += fz;
      norm3(C, 3 * a);
    }
  }

  // posição inicial: a nuvem 2D de cada setor projetada em volta do centro do seu continente
  const P = new Float64Array(N * 3);
  const rand = rng(11);
  for (const k of present) {
    const mem = [];
    for (let i = 0; i < N; i++) if (!sat[i] && secIdx[i] === k) mem.push(i);
    let cx = 0, cy = 0;
    for (const i of mem) { cx += pos[2 * i] || 0; cy += pos[2 * i + 1] || 0; }
    cx /= mem.length || 1; cy /= mem.length || 1;
    let rms = 0;
    for (const i of mem) rms += ((pos[2 * i] || 0) - cx) ** 2 + ((pos[2 * i + 1] || 0) - cy) ** 2;
    rms = Math.sqrt(rms / (mem.length || 1)) || 1;
    const scale = (alpha[k] * 0.62) / rms;
    // base tangente no centro do continente
    const c = [C[3 * k], C[3 * k + 1], C[3 * k + 2]];
    const up = Math.abs(c[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0];
    let e1 = [up[1] * c[2] - up[2] * c[1], up[2] * c[0] - up[0] * c[2], up[0] * c[1] - up[1] * c[0]];
    const l1 = Math.hypot(...e1); e1 = e1.map((v) => v / l1);
    const e2 = [c[1] * e1[2] - c[2] * e1[1], c[2] * e1[0] - c[0] * e1[2], c[0] * e1[1] - c[1] * e1[0]];
    for (const i of mem) {
      let dx = ((pos[2 * i] || 0) - cx) * scale + (rand() - 0.5) * 1e-3, dy = ((pos[2 * i + 1] || 0) - cy) * scale + (rand() - 0.5) * 1e-3;
      // quem ficou longe no mapa 2D não vira ilha perdida: começa dentro do continente
      const lim = alpha[k] * 0.85, dd = Math.hypot(dx, dy);
      if (dd > lim) { dx *= lim / dd; dy *= lim / dd; }
      const th = Math.hypot(dx, dy), s = th ? Math.sin(th) / th : 1;
      for (let a = 0; a < 3; a++) P[3 * i + a] = c[a] * Math.cos(th) + (e1[a] * dx + e2[a] * dy) * s;
      norm3(P, 3 * i);
    }
  }

  // relaxamento na esfera: ligações aproximam, grupos se juntam, cada nó tem o seu chão (sem sobreposição) e setores
  // diferentes se afastam (os oceanos)
  const surf = [];
  for (let i = 0; i < N; i++) if (!sat[i]) surf.push(i);
  const springs = [];
  for (const [s, t, p, f] of edges) if (!sat[s] && !sat[t]) springs.push([s, t, f & 1 ? 0.5 : 0.12]);
  for (const [s, t] of board) if (!sat[s] && !sat[t]) springs.push([s, t, 0.02]);
  const SEP = 2.2; // setores diferentes: distância mínima em múltiplos do chão
  const gHead = new Int32Array(N).fill(-1);
  for (const gr of world.groups || []) if (gr.nc >= 2) for (const m of gr.m) if (nodes[m].t === "c" && !sat[m] && gHead[m] < 0 && m !== gr.h) gHead[m] = gr.h;
  const F = new Float64Array(N * 3);
  // grade 3D com chave numérica; cada par é visto pelo nó de raio maior (que olha até 2× o próprio raio)
  const radii = surf.map((i) => rr[i]).sort((a, b) => a - b);
  const cell = Math.max(0.006, radii[Math.floor(radii.length * 0.5)] * 2.2);
  const key = (x, y, z) => ((x + 512) << 20) | ((y + 512) << 10) | (z + 512);
  const iters = 240;
  const grid = new Map();
  for (let it = 0; it < iters; it++) {
    const cool = 1 - it / iters;
    F.fill(0);
    // molas das ligações
    for (const [a, b, k] of springs) {
      const dx = P[3 * b] - P[3 * a], dy = P[3 * b + 1] - P[3 * a + 1], dz = P[3 * b + 2] - P[3 * a + 2];
      const d = Math.hypot(dx, dy, dz) || 1e-9;
      const rest = (rr[a] + rr[b]) * 1.05;
      if (d <= rest) continue;
      const f = (k * (d - rest)) / d;
      F[3 * a] += dx * f; F[3 * a + 1] += dy * f; F[3 * a + 2] += dz * f;
      F[3 * b] -= dx * f; F[3 * b + 1] -= dy * f; F[3 * b + 2] -= dz * f;
    }
    // grupos e âncoras dos continentes
    for (const i of surf) {
      const h = gHead[i];
      if (h >= 0) for (let a = 0; a < 3; a++) F[3 * i + a] += (P[3 * h + a] - P[3 * i + a]) * 0.05;
      const k = secIdx[i];
      // âncora do continente: fraca dentro dele, forte para quem escapa (ilhas soltas no oceano)
      const cd = Math.hypot(C[3 * k] - P[3 * i], C[3 * k + 1] - P[3 * i + 1], C[3 * k + 2] - P[3 * i + 2]);
      const ka = cd > alpha[k] * 0.9 ? 0.03 : 0.004;
      for (let a = 0; a < 3; a++) F[3 * i + a] += (C[3 * k + a] - P[3 * i + a]) * ka;
    }
    // sem sobreposição; setores diferentes guardam distância (os oceanos)
    grid.clear();
    for (const i of surf) {
      const k = key(Math.floor(P[3 * i] / cell), Math.floor(P[3 * i + 1] / cell), Math.floor(P[3 * i + 2] / cell));
      let l = grid.get(k);
      if (!l) grid.set(k, (l = []));
      l.push(i);
    }
    for (const i of surf) {
      const gx = Math.floor(P[3 * i] / cell), gy = Math.floor(P[3 * i + 1] / cell), gz = Math.floor(P[3 * i + 2] / cell);
      const span = Math.ceil((2 * rr[i] * SEP) / cell);
      for (let x = gx - span; x <= gx + span; x++) for (let y = gy - span; y <= gy + span; y++) for (let z = gz - span; z <= gz + span; z++) {
        const l = grid.get(key(x, y, z));
        if (!l) continue;
        for (const j of l) {
          if (rr[j] > rr[i] || (rr[j] === rr[i] && j <= i)) continue;
          const dx = P[3 * i] - P[3 * j], dy = P[3 * i + 1] - P[3 * j + 1], dz = P[3 * i + 2] - P[3 * j + 2];
          const d = Math.hypot(dx, dy, dz) || 1e-9;
          const same = secIdx[i] === secIdx[j];
          const want = (rr[i] + rr[j]) * (same ? 1 : SEP);
          if (d >= want) continue;
          const f = ((want - d) / d) * (same ? 0.5 : 0.18);
          F[3 * i] += dx * f; F[3 * i + 1] += dy * f; F[3 * i + 2] += dz * f;
          F[3 * j] -= dx * f; F[3 * j + 1] -= dy * f; F[3 * j + 2] -= dz * f;
        }
      }
    }
    // passo: só a parte tangente, limitado, e de volta para a esfera
    const maxStep = 0.02 * cool + 0.002;
    for (const i of surf) {
      let fx = F[3 * i], fy = F[3 * i + 1], fz = F[3 * i + 2];
      const dot = fx * P[3 * i] + fy * P[3 * i + 1] + fz * P[3 * i + 2];
      fx -= dot * P[3 * i]; fy -= dot * P[3 * i + 1]; fz -= dot * P[3 * i + 2];
      const m = Math.hypot(fx, fy, fz);
      if (m > maxStep) { fx *= maxStep / m; fy *= maxStep / m; fz *= maxStep / m; }
      P[3 * i] += fx; P[3 * i + 1] += fy; P[3 * i + 2] += fz;
      norm3(P, 3 * i);
    }
  }

  // órbita: acima do centro das companhias em que o investidor tem fatia (pesado pelo valor da fatia); quanto maior o
  // valor investido, mais alto
  const alt = new Float64Array(N);
  const satList = [];
  for (let i = 0; i < N; i++) {
    if (!sat[i]) continue;
    let x = 0, y = 0, z = 0;
    for (const [t, p] of out[i]) {
      if (sat[t]) continue;
      const w = Math.max(0.5, p) * Math.sqrt((nodes[t].mc || 1e8) / 1e8);
      x += P[3 * t] * w; y += P[3 * t + 1] * w; z += P[3 * t + 2] * w;
    }
    if (!x && !y && !z) { const a = rand() * 2 * Math.PI, b = Math.acos(2 * rand() - 1); x = Math.sin(b) * Math.cos(a); y = Math.cos(b); z = Math.sin(b) * Math.sin(a); }
    P[3 * i] = x; P[3 * i + 1] = y; P[3 * i + 2] = z;
    norm3(P, 3 * i);
    satList.push(i);
  }
  // espalha os satélites para não ficarem empilhados
  for (let it = 0; it < 120; it++) {
    for (const a of satList) for (const b of satList) {
      if (b <= a) continue;
      const dx = P[3 * a] - P[3 * b], dy = P[3 * a + 1] - P[3 * b + 1], dz = P[3 * a + 2] - P[3 * b + 2];
      const d = Math.hypot(dx, dy, dz) || 1e-9;
      const want = 0.05;
      if (d >= want) continue;
      const f = ((want - d) / d) * 0.3;
      P[3 * a] += dx * f; P[3 * a + 1] += dy * f; P[3 * a + 2] += dz * f;
      P[3 * b] -= dx * f; P[3 * b + 1] -= dy * f; P[3 * b + 2] -= dz * f;
      norm3(P, 3 * a); norm3(P, 3 * b);
    }
  }
  const vmax = Math.max(1, ...satList.map((i) => nodes[i].v || 0));
  for (const i of satList) alt[i] = 1.16 + 0.2 * Math.sqrt(Math.log10(1 + (nodes[i].v || 0)) / Math.log10(1 + vmax));

  const lat = new Array(N), lon = new Array(N);
  for (let i = 0; i < N; i++) {
    const [la, lo] = toLatLon(P[3 * i], P[3 * i + 1], P[3 * i + 2]);
    lat[i] = Math.round(la * 100) / 100;
    lon[i] = Math.round(lo * 100) / 100;
  }
  const cont = present.map((k) => {
    const [la, lo] = toLatLon(C[3 * k], C[3 * k + 1], C[3 * k + 2]);
    return [SECTOR_ORDER[k], Math.round(la * 10) / 10, Math.round(lo * 10) / 10, Math.round((alpha[k] * 180) / Math.PI * 10) / 10];
  });
  log(`globo: ${surf.length} no chão, ${satList.length} em órbita, raio ${R.toFixed(1)}`);
  return {
    v: GLOBO_VERSION, R: Math.round(R * 100) / 100, pad: PAD, lat, lon,
    alt: Array.from(alt, (a) => Math.round(a * 1000) / 1000), sec: Array.from(secIdx), order: SECTOR_ORDER, cont,
  };
}
