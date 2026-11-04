/* Mundo das companhias — globo aproximado, para quando o mundo.json ainda não tem as posições no planeta
 * (scripts/mundo_globo.mjs roda no CI). Projeta o mapa 2D: cada fatia de setor do disco vira um continente em volta do
 * seu centro, sem o relaxamento do layout de verdade. */
const ORDER = ["fin", "tech", "saude", "log", "agro", "ind", "util", "oil", "base", "cons", "imob", "out"];

export function fallbackGlobe(data) {
  const nodes = data.nodes, N = nodes.length, pos = data.pos || [];
  const arcs = data.ring?.arcs || [];
  const sec = new Int16Array(N);
  for (let i = 0; i < N; i++) {
    const n = nodes[i];
    let c = n.t === "c" ? n.c : null;
    if (!c && arcs.length) {
      const a = Math.atan2(pos[2 * i + 1] || 0, pos[2 * i] || 0);
      c = (arcs.find(([, a0, a1]) => a >= a0 && a < a1) || arcs[0])[0];
    }
    const k = ORDER.indexOf(c || "out");
    sec[i] = k < 0 ? ORDER.length - 1 : k;
  }
  const cnt = new Float64Array(ORDER.length);
  for (let i = 0; i < N; i++) cnt[sec[i]]++;
  const present = ORDER.map((_, k) => k).filter((k) => cnt[k]);
  const tot = present.reduce((s, k) => s + Math.sqrt(cnt[k]), 0);
  let acc = 0;
  const cont = present.map((k, idx) => {
    const w = Math.sqrt(cnt[k]) / tot;
    const lon = -180 + 360 * (acc + w / 2);
    acc += w;
    return [ORDER[k], idx % 2 ? -24 : 24, lon, Math.max(8, 150 * w)];
  });
  const byK = Object.fromEntries(cont.map((c, j) => [ORDER.indexOf(c[0]), c]));
  const lat = new Array(N), lon = new Array(N);
  for (const k of present) {
    const mem = [];
    for (let i = 0; i < N; i++) if (sec[i] === k) mem.push(i);
    let cx = 0, cy = 0;
    for (const i of mem) { cx += pos[2 * i] || 0; cy += pos[2 * i + 1] || 0; }
    cx /= mem.length; cy /= mem.length;
    let rms = 0;
    for (const i of mem) rms += ((pos[2 * i] || 0) - cx) ** 2 + ((pos[2 * i + 1] || 0) - cy) ** 2;
    rms = Math.sqrt(rms / mem.length) || 1;
    const [, la0, lo0, r] = byK[k];
    for (const i of mem) {
      const dx = ((pos[2 * i] || 0) - cx) / rms, dy = ((pos[2 * i + 1] || 0) - cy) / rms;
      const d = Math.min(1.6, Math.hypot(dx, dy)) / (Math.hypot(dx, dy) || 1);
      lat[i] = Math.max(-80, Math.min(80, la0 + dy * d * r * 0.5));
      lon[i] = lo0 + (dx * d * r * 0.5) / Math.max(0.3, Math.cos((lat[i] * Math.PI) / 180));
    }
  }
  return { v: "aprox", R: 150, pad: 1.55, lat, lon, alt: new Array(N).fill(0), sec: Array.from(sec), order: ORDER, cont };
}
