/* Mundo das companhias — o mapa.
 *
 * Uma cidade numa ilha, vista do alto à luz do dia, como uma maquete de arquitetura: sol com sombras, mar em volta,
 * parques com árvores, lagos, ruas com faixas e carros. Cada setor é um bairro (scripts/mundo_mapa.mjs arruma os
 * bairros como quarteirões, todos à vista) e só o que é possuído fica no chão:
 *   companhia aberta  → prédio de vidro ou concreto (altura pelo valor de mercado, faixa na cor do setor), com a
 *                       operação do setor ao lado (props.js: refinaria, turbina, silos, fábrica...)
 *   capital fechado   → prédio baixo; controlada em comum → prédio baixo de faixa verde
 * Os donos ficam onde está o que possuem:
 *   quem só tem uma companhia → na praça dela, em anéis em volta do prédio (pessoa = peão, holding = cubo,
 *                               gestora/fundo/governo = diamante)
 *   quem tem várias           → paira acima da cidade, sobre o centro do que possui, um andar mais alto a cada degrau
 * Toda ligação desce de quem é dono para o que é possuído: fios finos na visão geral e, ao escolher alguém, cabos com
 * luz correndo no sentido dono → possuído, com ponta de seta e espessura pela fatia (verde controla, azul participa).
 * Arrastar move o mapa (norte para cima), rolar ou pinçar aproxima; de perto a câmera deita e a cidade ganha altura.
 *
 * Este módulo só desenha e responde a perguntas de geometria; a interface fica em main.js.
 */
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { sectorProps, rotorGeo, towerGeo, treeGeo } from "./props.js";

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const easeInOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const lerp = (a, b, t) => a + (b - a) * t;
const hash1 = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
export const nodeRadius = (n) => (n.t === "c" ? (n.mc ? 1.8 + 1.25 * Math.log10(1 + n.mc / 1e8) : 1.8) : n.t === "s" ? 1.2 : n.v ? 1 + 0.8 * Math.log10(1 + n.v / 1e8) : 1);

// tipo visual de cada nó (forma no mapa e na legenda)
export function shapeOf(n) {
  if (n.t === "c") return n.mc ? "tower" : "block";
  if (n.t === "s") return "sub";
  if (n.t === "p") return "pawn";
  if (n.c === "fund" || n.c === "pen" || n.c === "gov") return "inv";
  return "tile";
}

const GLSL_NOISE = `float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y); }`;

export function createMap(canvas, world, opts = {}) {
  const { palette, accent = "#3cf0b4", reduced = false, fixedQuality = false } = opts;
  const N = world.nodes.length;
  const M = world.mapa;
  const small = Math.min(innerWidth, innerHeight) < 700;
  const ACC = new THREE.Color(accent);
  const S = 100 / M.W; // unidades do mapa → unidades da cena (o mapa tem 100 de largura)
  const MW = 100, MH = M.H * S;
  const toX = (x) => x * S - MW / 2, toZ = (y) => y * S - MH / 2;
  const TOP = 0.02;
  const GRID = 1.6; // malha de ruas
  // as cores dos setores são tons de pó (para o painel); como tinta nos prédios, à luz do dia, pedem mais saturação
  const _hsl = {};
  const vivid = (c, out = new THREE.Color()) => { out.set(c).getHSL(_hsl); return out.setHSL(_hsl.h, Math.min(1, _hsl.s * 1.35 + 0.1), _hsl.l * 0.8); };

  // ------------------------------------------------------------------ renderizador, luz do dia e sombras
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  let DPR = Math.min(devicePixelRatio || 1, small ? 2 : 1.75);
  renderer.setPixelRatio(DPR);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  // a cidade é parada: a sombra só é refeita quando algo muda (abertura, camadas), não a cada quadro
  renderer.shadowMap.autoUpdate = false;
  let shadowDirty = 3;
  const HAZE = new THREE.Color(0xc9dbe8);
  const scene = new THREE.Scene();
  scene.background = HAZE;
  scene.fog = new THREE.Fog(HAZE, 160, 520);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.3, 1600);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.2;

  const sun = new THREE.DirectionalLight(0xfff0d8, 3.1);
  sun.position.set(-75, 105, 62);
  sun.castShadow = true;
  sun.shadow.mapSize.set(small ? 2048 : 4096, small ? 2048 : 4096);
  Object.assign(sun.shadow.camera, { left: -MW * 0.66, right: MW * 0.66, top: MH * 0.85, bottom: -MH * 0.85, near: 10, far: 360 });
  sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.035; sun.shadow.radius = 2.2;
  scene.add(sun, sun.target);
  scene.add(new THREE.HemisphereLight(0xc4dcff, 0x7d8a5c, 0.62));

  // pós-processamento: só um brilho leve nos cabos de ligação. Se o aparelho não der conta, desenha direto.
  let composer = null, bloom = null;
  try {
    const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: small ? 2 : 4 });
    composer = new EffectComposer(renderer, rt);
    composer.setPixelRatio(DPR);
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.16, 0.4, 1.05);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  } catch { composer = null; }

  // ------------------------------------------------------------------ onde cada nó fica
  const shape = new Array(N);
  const X = new Float32Array(N), Y = new Float32Array(N), Z = new Float32Array(N), R = new Float32Array(N), Hh = new Float32Array(N);
  const SX = new Float32Array(N), SZ = new Float32Array(N), LOT = new Float32Array(N);
  const sky = Uint8Array.from(M.sky || new Array(N).fill(0));
  const isGround = new Uint8Array(N), isInv = new Uint8Array(N);
  const SKY0 = 12.5, SKY_STEP = 3.1;
  for (let i = 0; i < N; i++) {
    const n = world.nodes[i];
    shape[i] = shapeOf(n);
    isInv[i] = shape[i] === "inv" ? 1 : 0;
    X[i] = toX(M.x[i]); Z[i] = toZ(M.y[i]);
    const lot = (M.lot && M.lot[i]) || 0;
    isGround[i] = lot > 0 ? 1 : 0;
    LOT[i] = lot * S;
    if (isGround[i]) {
      const w = nodeRadius(n) * 1.24 * S, k = hash1(i);
      SX[i] = w * (0.86 + 0.3 * k); SZ[i] = w * (1.14 - 0.3 * k);
      R[i] = w * 0.6;
      if (shape[i] === "tower") Hh[i] = 0.9 + 10.2 * Math.pow(clamp(Math.log10(n.mc / 2e8) / Math.log10(4e3), 0, 1), 1.5);
      else Hh[i] = w * (shape[i] === "block" ? 0.42 + 0.3 * hash1(i + 7) : 0.3);
      Y[i] = TOP;
    } else if (sky[i]) {
      R[i] = nodeRadius(n) * 0.5 * S + 0.12;
      Hh[i] = R[i] * 2.3;
      Y[i] = SKY0 + (sky[i] - 1) * SKY_STEP + (hash1(i) - 0.5) * 1.4;
    } else {
      R[i] = (0.5 + 0.1 * Math.min(4, Math.log10(1 + (n.v || 0) / 1e8))) * S;
      Hh[i] = R[i] * (shape[i] === "tile" ? 1.3 : 2.1);
      Y[i] = TOP;
    }
  }
  const topY = (i) => Y[i] + Hh[i];
  const plates = M.plates.map((p, j) => ({ ...p, j, col: vivid(palette.sector(p.c)), x0: toX(p.x0), x1: toX(p.x1), z0: toZ(p.y0), z1: toZ(p.y1) }));
  const plateSd = (x, z) => { let d = 1e9; for (const p of plates) { const qx = Math.abs(x - (p.x0 + p.x1) / 2) - (p.x1 - p.x0) / 2, qz = Math.abs(z - (p.z0 + p.z1) / 2) - (p.z1 - p.z0) / 2; d = Math.min(d, Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0)); } return d; };

  // ------------------------------------------------------------------ parques, lagos e árvores
  let seed = 20261126;
  const rnd = () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const parks = [], trees = []; // parques: [cx, cz, lago?]; árvores: [x, z, escala]
  const G_ = [];
  for (let i = 0; i < N; i++) if (isGround[i]) G_.push(i);
  for (const p of plates) {
    for (let ix = Math.ceil((p.x0 + 0.25) / GRID); (ix + 1) * GRID < p.x1 - 0.25; ix++) for (let iz = Math.ceil((p.z0 + 0.25) / GRID); (iz + 1) * GRID < p.z1 - 0.25; iz++) {
      const cx = (ix + 0.5) * GRID, cz = (iz + 0.5) * GRID;
      let free = true;
      for (const i of G_) { const r = LOT[i] + 0.85; if (Math.abs(X[i] - cx) < r && Math.abs(Z[i] - cz) < r && Math.hypot(X[i] - cx, Z[i] - cz) < r) { free = false; break; } }
      if (!free) continue;
      const pond = rnd() < 0.12;
      parks.push([cx, cz, pond]);
      const n = 6 + Math.floor(rnd() * 6);
      for (let k = 0; k < n; k++) { const x = cx + (rnd() - 0.5) * 1.1, z = cz + (rnd() - 0.5) * 1.1; if (pond && Math.hypot(x - cx, z - cz) < 0.36) continue; trees.push([x, z, 0.75 + rnd() * 0.6]); }
    }
  }
  // atrás de cada terreno (lado norte, para não tapar os donos), uma fileira de árvores
  for (const i of G_) {
    if (LOT[i] < 0.45) continue;
    const r = LOT[i] * 0.95, n = Math.min(14, Math.floor((Math.PI * r) / 0.42));
    for (let k = 0; k < n; k++) { const a = Math.PI + ((k + 0.5) / n) * Math.PI; trees.push([X[i] + Math.cos(a) * r, Z[i] + Math.sin(a) * r, 0.6 + rnd() * 0.4]); }
  }
  // canteiros das avenidas entre os bairros e a mata em volta da cidade
  for (let x = -MW / 2 - 0.6; x <= MW / 2 + 0.6; x += 0.46) for (let z = -MH / 2 - 0.6; z <= MH / 2 + 0.6; z += 0.46) {
    const d = plateSd(x, z);
    if (d > 0.62 && d < 1.2 && rnd() < 0.8) trees.push([x + (rnd() - 0.5) * 0.2, z + (rnd() - 0.5) * 0.2, 0.7 + rnd() * 0.5]);
  }
  for (let k = 0; k < (small ? 1500 : 2800); k++) {
    const x = (rnd() - 0.5) * (MW + 10), z = (rnd() - 0.5) * (MH + 9);
    if (plateSd(x, z) < 1.3 || hash1(Math.floor(x / 3) * 31 + Math.floor(z / 3) * 17) < 0.42) continue;
    trees.push([x, z, 0.8 + rnd() * 0.9]);
  }

  // ------------------------------------------------------------------ o chão: quadras, ruas, praças, campo e mar
  const maskTex = (() => {
    const CW = small ? 2048 : 4096, CH = Math.round((CW * M.H) / M.W), k = CW / MW;
    const cv = document.createElement("canvas");
    cv.width = CW; cv.height = CH;
    const g = cv.getContext("2d");
    g.fillStyle = "#000"; g.fillRect(0, 0, CW, CH);
    g.globalCompositeOperation = "lighter";
    const px = (x) => (x + MW / 2) * k, pz = (z) => (z + MH / 2) * k;
    // vermelho = gramado dos parques; azul = lago; verde = praça de cada terreno
    for (const [cx, cz, pond] of parks) {
      g.fillStyle = "#f00"; g.beginPath(); g.roundRect(px(cx - 0.6), pz(cz - 0.6), 1.2 * k, 1.2 * k, 0.14 * k); g.fill();
      if (pond) { g.fillStyle = "#00f"; g.beginPath(); g.ellipse(px(cx), pz(cz), 0.34 * k, 0.26 * k, cx, 0, 6.2832); g.fill(); }
    }
    g.fillStyle = "#0f0";
    for (const i of G_) { g.beginPath(); g.arc(px(X[i]), pz(Z[i]), LOT[i] * 0.93 * k, 0, 6.2832); g.fill(); }
    const t = new THREE.CanvasTexture(cv);
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
    return t;
  })();
  const NR = plates.length;
  const groundU = {
    uMask: { value: maskTex }, uTime: { value: 0 }, uSize: { value: new THREE.Vector2(MW, MH) }, uLand: { value: new THREE.Vector2(MW / 2 + 9, MH / 2 + 7) },
    uRects: { value: Array.from({ length: 12 }, (_, k) => { const p = plates[k % NR]; return new THREE.Vector4((p.x0 + p.x1) / 2, (p.z0 + p.z1) / 2, (p.x1 - p.x0) / 2, (p.z1 - p.z0) / 2); }) },
    uCols: { value: Array.from({ length: 12 }, (_, k) => { const c = plates[k % NR].col; return new THREE.Vector3(c.r, c.g, c.b); }) },
    uFocus: { value: new THREE.Vector4(0, 0, 0, 0) }, uFocusK: { value: 0 }, uDim: { value: 0 },
  };
  const groundMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.94, metalness: 0, envMapIntensity: 0.6 });
  groundMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, groundU);
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vWp;").replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvWp = (modelMatrix * vec4(transformed, 1.0)).xyz;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", `#include <common>
        varying vec3 vWp; uniform sampler2D uMask; uniform float uTime; uniform vec2 uSize; uniform vec2 uLand; uniform vec4 uRects[12]; uniform vec3 uCols[12];
        uniform vec4 uFocus; uniform float uFocusK; uniform float uDim;
        float gWater = 0.0;
        ${GLSL_NOISE}
        float sdRound(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }`)
      .replace("#include <color_fragment>", `#include <color_fragment>
        vec2 p = vWp.xz;
        float aa = fwidth(p.x) * 1.2;
        float n1 = vnoise(p * 0.35), n2 = vnoise(p * 2.3), n3 = vnoise(p * 11.0);
        vec2 bq = abs(p) - uLand;
        float land = length(max(bq, 0.0)) + min(max(bq.x, bq.y), 0.0) - 4.0 + vnoise(p * 0.07 + 3.1) * 7.0 + n1 * 1.5;
        vec3 grass = mix(vec3(0.19, 0.36, 0.12), vec3(0.36, 0.52, 0.2), n1 * 0.55 + n2 * 0.45) * (0.9 + 0.2 * n3);
        vec3 asphalt = vec3(0.15, 0.16, 0.18) * (0.9 + 0.2 * n3);
        vec3 paving = vec3(0.56, 0.55, 0.52) * (0.93 + 0.12 * n3);
        float far = 1.0 - smoothstep(0.012, 0.045, aa);
        float d = 1e5; vec3 sec = uCols[0];
        for (int k = 0; k < ${NR}; k++) { float dk = sdRound(p - uRects[k].xy, uRects[k].zw, 0.45); if (dk < d) { d = dk; sec = uCols[k]; } }
        vec3 col;
        if (land > 0.0) {
          // mar: raso e claro junto à praia, fundo ao largo, com marolas e espuma
          float depth = smoothstep(0.0, 10.0, land);
          col = mix(vec3(0.2, 0.6, 0.62), vec3(0.04, 0.2, 0.35), depth);
          col += vec3(0.07) * smoothstep(0.6, 0.9, vnoise(p * 1.3 + vec2(uTime * 0.22, uTime * 0.16))) * far;
          col = mix(col, vec3(0.96), (1.0 - smoothstep(0.0, 0.3, land + 0.12 * sin(uTime * 0.8 + p.x * 0.7 + p.y * 0.5))) * 0.65);
          gWater = 1.0;
        } else if (d < 0.0) {
          // dentro do bairro: malha de ruas, calçadas, e em cada quadra praça, parque ou piso
          vec4 m = texture2D(uMask, vec2(p.x / uSize.x + 0.5, 0.5 - p.y / uSize.y));
          vec2 gq = abs(fract(p / ${GRID.toFixed(1)} + 0.5) - 0.5) * ${GRID.toFixed(1)};
          float sd = min(gq.x, gq.y), along = gq.x < gq.y ? p.y : p.x;
          float road = 1.0 - smoothstep(0.1 - aa, 0.1 + aa, sd);
          float walk = 1.0 - smoothstep(0.17 - aa, 0.17 + aa, sd);
          float park = smoothstep(0.35, 0.65, m.r), plaza = smoothstep(0.3, 0.7, m.g), pond = smoothstep(0.4, 0.6, m.b);
          vec2 tq = abs(fract(p / 0.16) - 0.5);
          vec3 stone = mix(vec3(0.7, 0.68, 0.63), sec, 0.2) * (0.94 + 0.06 * n3) * (1.0 - 0.07 * far * step(0.46, max(tq.x, tq.y)));
          vec3 lawn = mix(vec3(0.33, 0.5, 0.2), vec3(0.42, 0.57, 0.25), n2) * (0.92 + 0.16 * n3);
          vec3 block = mix(lawn, grass, park);
          block = mix(block, stone, plaza);
          block = mix(block, mix(vec3(0.2, 0.52, 0.56), vec3(0.1, 0.36, 0.46), n2), pond);
          gWater = pond * (1.0 - walk);
          col = mix(block, paving * 1.07, walk);
          col = mix(col, asphalt, road);
          col = mix(col, vec3(0.92), road * far * step(0.5, fract(along * 2.4)) * (1.0 - smoothstep(0.007, 0.014, sd)));
          // faixa de pedestres perto dos cruzamentos
          float cross = road * far * step(max(gq.x, gq.y), 0.26) * step(0.14, max(gq.x, gq.y)) * step(0.5, fract((gq.x < gq.y ? p.x : p.y) * 14.0));
          col = mix(col, vec3(0.9), cross * 0.8);
          // carros: retângulos coloridos correndo, cada pista num sentido
          if (far > 0.01) for (int ax = 0; ax < 2; ax++) {
            vec2 pq = ax == 0 ? p : p.yx;
            float lane = floor(pq.y / ${GRID.toFixed(1)} + 0.5), off = pq.y - lane * ${GRID.toFixed(1)}, sideL = sign(off);
            float inLane = smoothstep(0.03, 0.018, abs(abs(off) - 0.05));
            float sp = (0.35 + 0.5 * hash21(vec2(lane, float(ax) + 3.0))) * sideL;
            float u = pq.x * 4.0 - uTime * sp * 4.0, id = floor(u);
            float hc = hash21(vec2(id, lane * 7.0 + sideL + float(ax) * 13.0));
            float car = step(0.8, hc) * smoothstep(0.34, 0.26, abs(fract(u) - 0.5));
            vec3 cc = hc > 0.95 ? vec3(0.85, 0.12, 0.1) : hc > 0.91 ? vec3(0.95, 0.75, 0.1) : hc > 0.87 ? vec3(0.15, 0.3, 0.7) : hc > 0.83 ? vec3(0.92) : vec3(0.12, 0.13, 0.15);
            col = mix(col, cc, car * inLane * far * road);
          }
          // a borda do bairro: calçada larga com o meio-fio na cor do setor
          float e = -d;
          col = mix(col, paving * 1.08, 1.0 - smoothstep(0.2, 0.2 + aa, e));
          col = mix(col, sec, (smoothstep(0.04, 0.04 + aa, e) - smoothstep(0.16 + 3.0 * aa, 0.16 + 4.0 * aa, e)) * 0.92);
        } else {
          // fora dos bairros: a avenida que contorna cada um, canteiros, e além deles campo, mata e praia
          vec3 country = mix(grass, vec3(0.12, 0.27, 0.11), smoothstep(0.42, 0.7, vnoise(p * 0.22 + 7.0)));
          country = mix(country, vec3(0.5, 0.56, 0.28), smoothstep(0.6, 0.75, vnoise(p * 0.5 + 21.0)) * 0.5);
          float rd = 1.0 - smoothstep(0.52 - aa, 0.52 + aa, d);
          col = mix(country, asphalt, rd);
          col = mix(col, vec3(0.92), rd * far * (1.0 - smoothstep(0.008, 0.016, abs(d - 0.27))) * step(0.5, fract((p.x + p.y) * 1.7)));
          col = mix(col, vec3(0.86, 0.81, 0.64), smoothstep(-1.3, -0.25, land));
        }
        // setor em foco e escolha: o resto perde cor e escurece
        float inF = step(uFocus.x, p.x) * step(p.x, uFocus.z) * step(uFocus.y, p.y) * step(p.y, uFocus.w);
        float dk = max(uDim, uFocusK * (1.0 - inF));
        col = mix(col, vec3(dot(col, vec3(0.3, 0.59, 0.11))) * 0.85, 0.8 * dk) * (1.0 - 0.42 * dk);
        diffuseColor.rgb = col;`)
      .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.1, gWater);");
  };
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(1800, 1800), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // ------------------------------------------------------------------ peças (instâncias)
  const instU = { uRise: { value: 1.4 }, uDim: { value: 0 }, uTime: { value: 0 }, uAcc: { value: ACC }, uFocus: { value: -1 } };
  const inst = Array.from({ length: N }, () => []); // nó → [[malha, índice], ...] (o prédio e a peça do setor)
  const meshes = [];
  const VERT_HEAD = "attribute float aHL; attribute float aVis; attribute float aDelay; attribute float aPlate; attribute float aSeed; attribute vec3 aSize; attribute float aLit; attribute float aPart; varying float vPart; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit;";
  const FRAG_HEAD = `varying float vPart; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit; uniform float uDim; uniform float uTime; uniform vec3 uAcc; float gRough = -1.0;\n${GLSL_NOISE}`;
  function instanced(name, geo, mat, idx, place, kind) {
    const n = Math.max(1, idx.length);
    const hl = new Float32Array(n), vis = new Float32Array(n).fill(1), delay = new Float32Array(n), plate = new Float32Array(n), sd = new Float32Array(n), size = new Float32Array(n * 3), lit = new Float32Array(n);
    const attr = (k, a, s = 1) => geo.setAttribute(k, new THREE.InstancedBufferAttribute(a, s));
    attr("aHL", hl); attr("aVis", vis); attr("aDelay", delay); attr("aPlate", plate); attr("aSeed", sd); attr("aSize", size, 3); attr("aLit", lit);
    const patch = (sh) => {
      Object.assign(sh.uniforms, instU);
      sh.vertexShader = sh.vertexShader
        .replace("#include <common>", `#include <common>\n${VERT_HEAD}`)
        .replace("#include <begin_vertex>", `#include <begin_vertex>
          float rise = smoothstep(aDelay, aDelay + 0.35, uRise);
          vPart = aPart; vOp = position; vOn = normal; vSize = aSize; vHL = aHL; vSeed = aSeed; vLit = aLit;
          vOther = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          ${kind === "spin" ? "float sa = uTime * (1.1 + 1.4 * aSeed) + aSeed * 20.0; transformed.xy = mat2(cos(sa), -sin(sa), sin(sa), cos(sa)) * transformed.xy; transformed *= max(0.001, rise * aVis);"
            : kind === "bld" ? "transformed.y *= max(0.001, rise * aVis); transformed.xz *= aVis;"
            // peças pequenas: crescem no lugar; as do céu (aLit = 1) balançam devagar
            : "transformed *= max(0.001, rise * aVis); transformed.y += aLit * 0.22 * sin(uTime * 0.9 + aSeed * 40.0) / max(0.05, aSize.x);"}`);
      return sh;
    };
    mat.onBeforeCompile = (sh) => {
      patch(sh);
      sh.fragmentShader = sh.fragmentShader
        .replace("#include <common>", `#include <common>\n${FRAG_HEAD}`)
        .replace("#include <color_fragment>", `#include <color_fragment>
          float top = step(0.5, vOn.y);
          float isHL = step(0.01, vHL);
          float dimK = max(uDim * (1.0 - isHL), 0.85 * vOther * (1.0 - isHL));
          vec3 sec = diffuseColor.rgb;
          vec3 glow = vec3(0.0);
          float sdv = floor(vSeed * 997.0) / 997.0;
          ${kind === "bld" ? `
          vec3 concrete = mix(vec3(0.86, 0.85, 0.82), sec, 0.05);
          if (vPart > 0.5) {
            // detalhes e a peça do setor: concreto, tinta do setor, chama, metal, vidro, luz de obstáculo
            if (vPart < 1.5) diffuseColor.rgb = concrete * (0.86 + 0.14 * top);
            else if (vPart < 2.5) { diffuseColor.rgb = sec; gRough = 0.5; }
            else if (vPart < 3.5) { float fl = 0.72 + 0.28 * sin(uTime * 13.0 + vSeed * 50.0) * sin(uTime * 7.3 + vOp.y * 9.0); diffuseColor.rgb = vec3(1.0, 0.5, 0.1); glow = vec3(1.0, 0.42, 0.08) * 1.6 * fl; }
            else if (vPart < 4.5) { diffuseColor.rgb = vec3(0.27, 0.29, 0.33); gRough = 0.45; }
            else if (vPart < 5.5) {
              vec2 q = vec2((vOp.x + vOp.z) * 13.0, vOp.y * 12.0); vec2 f = fract(q);
              float mk = smoothstep(0.1, 0.2, f.x) * smoothstep(0.9, 0.8, f.x) * smoothstep(0.2, 0.32, f.y) * smoothstep(0.86, 0.74, f.y) * (1.0 - top);
              float px = max(fwidth(q.x), fwidth(q.y));
              mk = mix(mk, 0.45 * (1.0 - top), smoothstep(0.4, 1.0, px));
              diffuseColor.rgb = mix(concrete, mix(vec3(0.14, 0.24, 0.34), vec3(0.4, 0.58, 0.7), hash21(floor(q) + sdv * 17.0)), mk);
              gRough = mix(0.8, 0.15, mk);
            } else { diffuseColor.rgb = vec3(0.7, 0.05, 0.04); glow = vec3(1.0, 0.1, 0.06) * 1.6 * step(0.0, sin(uTime * 2.6 + vSeed * 40.0)); }
            glow += uAcc * vHL * vHL * 0.25;
          } else {
            // fachada: cortina de vidro ou grelha de concreto com janelas; faixa do setor no alto; cobertura de brita
            float side = abs(vOn.x) > 0.5 ? 1.0 : 0.0;
            float fw = mix(vSize.x, vSize.z, side);
            float along = mix(vOp.x, vOp.z, side) + 0.5;
            float hgt = vOp.y * vSize.y;
            float style = hash21(vec2(sdv * 91.0, 3.0));
            float nx = max(2.0, floor(fw / (style < 0.55 ? 0.075 : 0.1))), ny = max(2.0, floor(vSize.y / 0.105));
            vec2 q = vec2(along * nx, vOp.y * ny);
            vec2 id = floor(q), f = fract(q);
            float face = floor(vOn.x + 0.5) + floor(vOn.z + 0.5) * 2.0;
            float hp = hash21(id + sdv * 71.0 + face * 13.0);
            float px = max(fwidth(q.x), fwidth(q.y)), lod = smoothstep(0.4, 1.0, px);
            // o vidro reflete o céu: mais claro no alto, cada painel um pouco diferente, alguns com a persiana fechada
            vec3 tint = mix(vec3(0.3, 0.5, 0.62), mix(vec3(0.24, 0.42, 0.5), vec3(0.42, 0.5, 0.56), hash21(vec2(sdv * 13.0, 1.0))), 0.6);
            vec3 glass = mix(tint * 0.34, tint * 1.0, smoothstep(0.0, 1.0, vOp.y) * 0.65 + hp * 0.35);
            glass = mix(glass, vec3(0.78, 0.76, 0.7), step(0.9, hp) * 0.7);
            vec3 wall; float gk;
            if (style < 0.55) {
              // cortina de vidro: montantes finos e uma faixa opaca em cada laje
              float frame = max(1.0 - smoothstep(0.03, 0.07, min(f.x, 1.0 - f.x)), 1.0 - smoothstep(0.1, 0.16, f.y));
              gk = mix(1.0 - frame, 0.8, lod);
              wall = mix(mix(vec3(0.2, 0.24, 0.28), concrete * 0.8, step(0.5, hash21(vec2(sdv * 7.0, 9.0)))), glass, gk);
            } else {
              // grelha de concreto: janelas recuadas entre pilares
              float win = smoothstep(0.16, 0.24, f.x) * smoothstep(0.84, 0.76, f.x) * smoothstep(0.26, 0.36, f.y) * smoothstep(0.86, 0.78, f.y);
              gk = mix(win, 0.42, lod);
              wall = mix(mix(concrete, vec3(0.74, 0.68, 0.6), step(0.6, hash21(vec2(sdv * 5.0, 2.0)))), glass * 0.8, gk);
            }
            float crownH = min(0.16, vSize.y * 0.1);
            float crown = smoothstep(vSize.y - crownH - 0.01, vSize.y - crownH, hgt);
            float lobby = 1.0 - smoothstep(0.1, 0.11, hgt);
            wall = mix(wall, sec, crown);
            wall = mix(wall, mix(vec3(0.12, 0.18, 0.24), vec3(0.5, 0.62, 0.7), f.x * 0.5 + 0.2), lobby * (1.0 - crown));
            float edge = max(abs(vOp.x), abs(vOp.z)) * 2.0 / (abs(vOp.x) > 0.37 || abs(vOp.z) > 0.37 || vOp.y < 0.99 ? 1.0 : 0.72);
            float rim = smoothstep(0.9, 0.93, edge);
            vec2 rq = fract(vOp.xz * vec2(vSize.x, vSize.z) / 0.22);
            vec3 roof = mix(vec3(0.5, 0.5, 0.5), sec, 0.3) * (0.92 + 0.08 * step(0.06, min(rq.x, rq.y)));
            float pad = step(0.9, vSize.x) * (1.0 - smoothstep(0.2, 0.21, length(vOp.xz + vec2(0.2, -0.18))));
            roof = mix(roof, mix(sec, vec3(0.95), step(0.17, length(vOp.xz + vec2(0.2, -0.18)))), pad);
            roof = mix(roof, vec3(0.9), rim);
            diffuseColor.rgb = mix(wall, roof, top);
            gRough = mix(mix(0.75, 0.1, gk * (1.0 - crown)), 0.9, top);
            glow = uAcc * vHL * vHL * (0.12 + 1.1 * crown * (1.0 - top) + 0.9 * rim * top + 0.2 * top) * (0.9 + 0.1 * sin(uTime * 3.0));
          }` : `
          // peças pequenas: figuras foscas na cor do tipo
          diffuseColor.rgb = sec * (0.82 + 0.18 * smoothstep(-0.3, 1.0, vOn.y));
          glow = sec * 0.1 + uAcc * vHL * vHL * 0.8 + sec * isHL * 0.25;`}
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.85, 0.85 * dimK) * (1.0 - 0.4 * dimK);
          glow *= 1.0 - 0.9 * dimK;`)
        .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nif (gRough >= 0.0) roughnessFactor = gRough;")
        .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance += glow;");
    };
    const mesh = new THREE.InstancedMesh(geo, mat, n);
    // a sombra acompanha a peça (cresce na abertura, some com a camada)
    mesh.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
    mesh.customDepthMaterial.onBeforeCompile = (sh) => patch(sh);
    const m4 = new THREE.Matrix4(), col = new THREE.Color(), sz = new THREE.Vector3();
    idx.forEach((i, k) => {
      inst[i].push([mesh, k]);
      place(i, m4, col, sz);
      mesh.setMatrixAt(k, m4);
      mesh.setColorAt(k, col);
      plate[k] = M.plate[i];
      sd[k] = hash1(i * 3 + 1);
      size.set([sz.x, sz.y, sz.z], k * 3);
      lit[k] = sz.w || 0;
    });
    mesh.count = idx.length;
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.userData = { name, idx, hl, vis, delay, geo };
    mesh.frustumCulled = false;
    if (kind !== "small") { mesh.castShadow = true; mesh.receiveShadow = true; }
    scene.add(mesh);
    meshes.push(mesh);
    return mesh;
  }
  const pos3 = new THREE.Vector3(), quat = new THREE.Quaternion(), scl = new THREE.Vector3();
  const placeBld = (i, m4, col, sz) => {
    m4.compose(pos3.set(X[i], TOP, Z[i]), quat.identity(), scl.set(SX[i], Hh[i], SZ[i]));
    const n = world.nodes[i];
    vivid(n.t === "c" ? palette.sector(n.c) : palette.kind(n), col);
    sz.set(SX[i], Hh[i], SZ[i]); sz.w = 0;
  };
  const bldMat = () => new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7, metalness: 0, envMapIntensity: 2.2 });
  const tall = [], low = [];
  for (const i of G_) (shape[i] === "tower" && Hh[i] > 3.2 ? tall : low).push(i);
  instanced("tall", towerGeo(true), bldMat(), tall, placeBld, "bld");
  instanced("low", towerGeo(false), bldMat(), low, placeBld, "bld");

  // a operação de cada setor ao lado da sede (props.js): o setor se lê pela forma
  const PROPS = sectorProps();
  const smokePts = [], rotors = [];
  for (const [sec, pr] of Object.entries(PROPS)) {
    const list = [];
    for (const i of G_) if (world.nodes[i].t === "c" && world.nodes[i].c === sec && (!pr.top || (shape[i] === "tower" && Hh[i] > 3.2))) list.push(i);
    if (!list.length) continue;
    instanced(`prop-${sec}`, pr.geo, bldMat(), list, (i, m4, col, sz) => {
      const w = (SX[i] + SZ[i]) / 2, s2 = pr.top ? w * 0.62 : w * (shape[i] === "tower" ? 0.95 : 0.8);
      const px = pr.top ? X[i] : X[i] + SX[i] / 2 + s2 * 0.52, py = pr.top ? TOP + Hh[i] : TOP, pz = pr.top ? Z[i] : Z[i] + SZ[i] * 0.12;
      m4.compose(pos3.set(px, py, pz), quat.identity(), scl.set(s2, s2, s2));
      vivid(palette.sector(sec), col);
      sz.set(s2, s2, s2); sz.w = 0;
      if (pr.rotor) rotors.push([i, px + pr.rotor[0] * s2, py + pr.rotor[1] * s2, pz + pr.rotor[2] * s2, s2]);
      for (const p of pr.smoke || []) smokePts.push([i, px + p[0] * s2, py + p[1] * s2, pz + p[2] * s2, s2]);
    }, "bld");
  }
  if (rotors.length) {
    const byNode = new Map(rotors.map((r) => [r[0], r]));
    instanced("rotor", rotorGeo(), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }), rotors.map((r) => r[0]), (i, m4, col, sz) => {
      const r = byNode.get(i);
      m4.compose(pos3.set(r[1], r[2], r[3]), quat.identity(), scl.set(r[4], r[4], r[4]));
      col.setRGB(0.95, 0.95, 0.95);
      sz.set(r[4], r[4], r[4]); sz.w = 0;
    }, "spin");
  }

  const by = { pawn: [], tile: [], inv: [] };
  for (let i = 0; i < N; i++) if (!isGround[i]) by[shape[i] === "pawn" ? "pawn" : shape[i] === "inv" ? "inv" : "tile"].push(i);
  const pawnGeo = (() => {
    const base = new THREE.CylinderGeometry(0.42, 0.5, 0.2, 9, 1, false); base.translate(0, 0.1, 0);
    const body = new THREE.CylinderGeometry(0.16, 0.32, 0.55, 9, 1, true); body.translate(0, 0.47, 0);
    const head = new THREE.SphereGeometry(0.24, 9, 6); head.translate(0, 0.86, 0);
    const g = mergeGeometries([base, body, head]);
    g.scale(1, 1.9, 1); // altura 2,1 para raio 1
    return g;
  })();
  const cubeGeo = (() => { const g = new THREE.BoxGeometry(1.3, 1.3, 1.3); g.translate(0, 0.65, 0); return g; })();
  const invGeo = (() => { const g = new THREE.OctahedronGeometry(1, 0); g.scale(0.82, 1.15, 0.82); g.translate(0, 1.15, 0); return g; })();
  const placeSmall = (i, m4, col, sz) => {
    const s = R[i];
    m4.compose(pos3.set(X[i], Y[i], Z[i]), quat.identity(), scl.set(s, s, s));
    vivid(palette.kind(world.nodes[i]), col);
    sz.set(s, s, s); sz.w = sky[i] ? 1 : 0;
  };
  const smallMat = (flat) => new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.05, flatShading: !!flat });
  instanced("pawn", pawnGeo, smallMat(), by.pawn, placeSmall, "small");
  instanced("tile", cubeGeo, smallMat(), by.tile, placeSmall, "small");
  instanced("inv", invGeo, smallMat(true), by.inv, placeSmall, "small");

  // árvores: copas verdes, com ipês amarelos e rosas e jacarandás roxos de vez em quando
  const treeU = { uDim: { value: 0 }, uRise: { value: 1 } };
  {
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 });
    const patch = (sh) => { Object.assign(sh.uniforms, treeU); sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nuniform float uRise;").replace("#include <begin_vertex>", "#include <begin_vertex>\ntransformed *= smoothstep(0.55, 1.2, uRise);"); };
    mat.onBeforeCompile = (sh) => {
      patch(sh);
      sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform float uDim;").replace("#include <color_fragment>", "#include <color_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.85, 0.8 * uDim) * (1.0 - 0.4 * uDim);");
    };
    const mesh = new THREE.InstancedMesh(treeGeo(), mat, trees.length);
    mesh.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
    mesh.customDepthMaterial.onBeforeCompile = patch;
    const m4 = new THREE.Matrix4(), col = new THREE.Color(), e = new THREE.Euler();
    trees.forEach(([x, z, s], k) => {
      const r = hash1(k * 5.1 + 2);
      m4.compose(pos3.set(x, TOP, z), quat.setFromEuler(e.set(0, r * 6.28, 0)), scl.set(s, s * (0.85 + 0.4 * hash1(k + 9)), s));
      mesh.setMatrixAt(k, m4);
      if (r > 0.965) col.setRGB(0.93, 0.74, 0.08); else if (r > 0.935) col.setRGB(0.9, 0.45, 0.62); else if (r > 0.92) col.setRGB(0.55, 0.4, 0.78);
      else col.setHSL(0.27 + 0.1 * hash1(k * 1.3), 0.5 + 0.2 * hash1(k * 2.1), 0.2 + 0.13 * hash1(k * 3.7));
      mesh.setColorAt(k, col);
    });
    mesh.castShadow = true; mesh.receiveShadow = true; mesh.frustumCulled = false;
    scene.add(mesh);
  }

  // marca de cada dono vista de longe: um ponto da cor do tipo (as praças viram gente; quem paira, um balão de luz)
  const haloIdx = [];
  for (let i = 0; i < N; i++) if (!isGround[i]) haloIdx.push(i);
  const haloU = { uDim: { value: 0 }, uPx: { value: 1 }, uRise: { value: 1 }, uTime: { value: 0 }, uFocus: { value: -1 } };
  const halo = (() => {
    const n = haloIdx.length, p = new Float32Array(n * 3), c = new Float32Array(n * 3), sz = new Float32Array(n), col = new THREE.Color();
    const g = new THREE.BufferGeometry();
    haloIdx.forEach((i, k) => {
      p.set([X[i], Y[i] + Hh[i] * 0.55, Z[i]], k * 3);
      vivid(palette.kind(world.nodes[i]), col); c.set([col.r, col.g, col.b], k * 3);
      sz[k] = sky[i] ? R[i] * 5 : R[i] * 2.4;
    });
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    g.setAttribute("aCol", new THREE.BufferAttribute(c, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(sz, 1));
    g.setAttribute("aHL", new THREE.BufferAttribute(new Float32Array(n), 1));
    g.setAttribute("aVis", new THREE.BufferAttribute(new Float32Array(n).fill(1), 1));
    g.setAttribute("aSky", new THREE.BufferAttribute(Float32Array.from(haloIdx, (i) => (sky[i] ? 1 : 0)), 1));
    g.setAttribute("aPlate", new THREE.BufferAttribute(Float32Array.from(haloIdx, (i) => M.plate[i]), 1));
    const m = new THREE.ShaderMaterial({
      uniforms: haloU, transparent: true, depthWrite: false,
      vertexShader: `attribute vec3 aCol; attribute float aSize; attribute float aHL; attribute float aVis; attribute float aSky; attribute float aPlate; uniform float uPx; uniform float uDim; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vCol; varying float vA; varying float vSky;
        void main(){ vec3 p = position; p.y += aSky * 0.22 * sin(uTime * 0.9 + p.x * 3.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          float px = aSize * uPx / -mv.z;
          gl_PointSize = clamp(px, aSky > 0.5 ? 6.0 : 2.2, 80.0) * aVis;
          float isHL = step(0.01, aHL);
          float other = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          float dimK = max(uDim, 0.8 * other) * (1.0 - isHL);
          // de perto a peça aparece e a marca some
          float nearK = smoothstep(5.0, 16.0, px);
          vA = (aSky > 0.5 ? 0.3 + 0.3 * isHL : mix(0.9, 0.0, nearK)) * (1.0 - 0.8 * dimK) * aVis * smoothstep(0.7, 1.3, uRise);
          vCol = aCol; vSky = aSky; }`,
      fragmentShader: "varying vec3 vCol; varying float vA; varying float vSky; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = vSky > 0.5 ? pow(max(0.0, 1.0 - d), 1.6) : 1.0 - smoothstep(0.6, 1.0, d); gl_FragColor = vec4(mix(vCol, vec3(1.0), vSky * 0.5), a * vA); }",
    });
    const pts = new THREE.Points(g, m);
    pts.frustumCulled = false;
    pts.renderOrder = 2;
    scene.add(pts);
    return pts;
  })();
  const haloK = new Int32Array(N).fill(-1);
  haloIdx.forEach((i, k) => { haloK[i] = k; });

  // fumaça das chaminés (indústria e siderurgia): bolinhas claras que sobem, crescem e somem
  const smokeU = { uTime: { value: 0 }, uPx: { value: 1 }, uDim: { value: 0 }, uRise: { value: 1 } };
  if (smokePts.length && !reduced) {
    const PER = 5, n = smokePts.length * PER, p = new Float32Array(n * 3), a = new Float32Array(n * 2);
    smokePts.forEach((sp, j) => { for (let k = 0; k < PER; k++) { p.set([sp[1], sp[2], sp[3]], (j * PER + k) * 3); a.set([(k + hash1(j)) / PER, sp[4]], (j * PER + k) * 2); } });
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    g.setAttribute("aPh", new THREE.BufferAttribute(a, 2));
    const pts = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: smokeU, transparent: true, depthWrite: false,
      vertexShader: "attribute vec2 aPh; uniform float uTime; uniform float uPx; varying float vA; void main(){ float t = fract(uTime * 0.16 + aPh.x); vec3 p = position; p.y += t * 1.5 * aPh.y; p.x += (t * t * 0.7 + 0.06 * sin(uTime + aPh.x * 20.0)) * aPh.y; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.12 + 0.5 * t) * aPh.y * uPx / -mv.z, 1.0, 60.0); vA = smoothstep(0.0, 0.12, t) * (1.0 - t) * 0.5; }",
      fragmentShader: "uniform float uDim; uniform float uRise; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.93, 0.94, 0.96), pow(max(0.0, 1.0 - d), 1.4) * vA * (1.0 - 0.7 * uDim) * smoothstep(1.0, 1.35, uRise)); }",
    }));
    pts.frustumCulled = false;
    scene.add(pts);
  }

  // ------------------------------------------------------------------ ligações: do dono para o possuído
  const SEG = 26;
  const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();
  // curva de a (dono) até b (possuído): sai do dono e pousa de cima no possuído
  function linkCurve(a, b) {
    const ya = sky[a] ? Y[a] + Hh[a] * 0.15 : topY(a) * 0.9, yb = topY(b);
    _a.set(X[a], ya, Z[a]); _b.set(X[b], yb, Z[b]);
    const d = Math.hypot(X[b] - X[a], Z[b] - Z[a]);
    if (sky[a]) _c.set(lerp(X[b], X[a], 0.12), lerp(yb, ya, 0.82), lerp(Z[b], Z[a], 0.12));
    else if (isGround[a]) _c.set((X[a] + X[b]) / 2, Math.max(ya, yb) + 0.7 + d * 0.3, (Z[a] + Z[b]) / 2);
    else _c.set(lerp(X[a], X[b], 0.6), Math.max(ya, yb) + 0.12 + d * 0.22, lerp(Z[a], Z[b], 0.6));
    return new THREE.QuadraticBezierCurve3(_a.clone(), _c.clone(), _b.clone());
  }
  const samePlaza = (a, b) => !sky[a] && !isGround[a] && (M.anchor[a] === b || (!isGround[b] && !sky[b] && M.anchor[a] === M.anchor[b]));
  const lineU = { uDim: { value: 0 }, uAlpha: { value: 1 }, uFar: { value: 1 } };
  const lineMat = new THREE.ShaderMaterial({
    uniforms: lineU, transparent: true, depthWrite: false,
    vertexShader: "attribute float aT; attribute vec2 aW; varying float vT; varying vec2 vW; void main(){ vT = aT; vW = aW; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
    // aW.x = força; aW.y = 1 controle, 0 participação
    fragmentShader: `uniform float uAlpha; uniform float uDim; uniform float uFar; varying float vT; varying vec2 vW;
      void main(){ float a = smoothstep(0.0, 0.08, vT) * (0.4 + 0.6 * vT); vec3 c = mix(vec3(0.16, 0.26, 0.5), vec3(0.0, 0.42, 0.3), vW.y);
        gl_FragColor = vec4(c, a * vW.x * uAlpha * (1.0 - 0.92 * uDim) * mix(uFar, 1.0, 0.4 * vW.y)); }`,
  });
  let baseLines = null;
  function buildBaseLines(visible) {
    const P = [], T = [], Wt = [];
    const seg = (x0, y0, z0, x1, y1, z1, t0, t1, w, ctl) => { P.push(x0, y0, z0, x1, y1, z1); T.push(t0, t1); Wt.push(w, ctl, w, ctl); };
    for (const [s, t, , f] of world.edges || []) {
      if (visible && (!visible[s] || !visible[t])) continue;
      const ctl = f & 1;
      if (samePlaza(s, t)) {
        // na praça: um risco no piso, do dono até o prédio
        const dx = X[t] - X[s], dz = Z[t] - Z[s], d = Math.hypot(dx, dz) || 1, cut = isGround[t] ? Math.min(0.92, (Math.max(SX[t], SZ[t]) * 0.5) / d) : 0;
        seg(X[s], TOP + 0.03, Z[s], X[t] - dx * cut, TOP + 0.03, Z[t] - dz * cut, 0.2, 1, ctl ? 0.75 : 0.35, ctl);
        continue;
      }
      const c = linkCurve(s, t), w = ctl ? 0.5 : 0.2;
      let px = 0, py = 0, pz = 0;
      for (let k = 0; k <= SEG; k++) {
        const p = c.getPoint(k / SEG, _a);
        if (k) seg(px, py, pz, p.x, p.y, p.z, (k - 1) / SEG, k / SEG, w, ctl);
        px = p.x; py = p.y; pz = p.z;
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(P), 3));
    g.setAttribute("aT", new THREE.BufferAttribute(new Float32Array(T), 1));
    g.setAttribute("aW", new THREE.BufferAttribute(new Float32Array(Wt), 2));
    if (baseLines) { baseLines.geometry.dispose(); baseLines.geometry = g; }
    else { baseLines = new THREE.LineSegments(g, lineMat); baseLines.frustumCulled = false; baseLines.renderOrder = 1; scene.add(baseLines); }
  }
  buildBaseLines(null);

  // cabos do destaque: tubos com luz correndo do dono para o possuído e ponta de seta na chegada
  const flowU = { uTime: { value: 0 }, uGrow: { value: 1 }, uPx: { value: 1 }, uMinPx: { value: DPR } };
  const flowMat = new THREE.ShaderMaterial({
    uniforms: flowU, transparent: true, depthWrite: false,
    // de longe o cabo não some: a espessura tem um mínimo em pixels (aRad = raio do tubo; aCenter = base da seta)
    vertexShader: `attribute float aPhase; attribute float aCtl; attribute float aLen; attribute float aHead; attribute float aRad; attribute vec3 aCenter; uniform float uPx; uniform float uMinPx;
      varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying float vHead; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vPhase = aPhase; vCtl = aCtl; vLen = aLen; vHead = aHead; vN = normalize(normalMatrix * normal);
        vec3 p = position;
        float depth = -(modelViewMatrix * vec4(aHead > 0.5 ? aCenter : position, 1.0)).z;
        float want = uMinPx * (1.5 + 1.9 * aRad / 0.11) * depth / uPx;
        if (aHead > 0.5) p = aCenter + (position - aCenter) * max(1.0, want / aRad);
        else p += normal * max(0.0, want - aRad);
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uTime; uniform float uGrow; varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying float vHead; varying vec3 vN; varying vec3 vV;
      void main(){
        vec3 base = mix(vec3(0.04, 0.28, 1.0), vec3(0.0, 0.66, 0.42), vCtl);
        if (vHead > 0.5) { if (uGrow < 0.97) discard; gl_FragColor = vec4(base * 1.15, 1.0); return; }
        float t = vUv.x;
        if (t > uGrow) discard;
        float core = pow(abs(dot(vN, vV)), 1.2);
        // luzes a cada 2,4 unidades, correndo para o possuído: cabeça clara, cauda que some para trás
        float s = fract((t * vLen - uTime * 2.6) / 2.4 + vPhase);
        float comet = pow(s, 5.0);
        // miolo claro e borda escura: o cabo se lê tanto sobre o piso claro quanto sobre a sombra
        gl_FragColor = vec4(base * (0.35 + 0.95 * core) + vec3(1.0) * comet * 0.85, smoothstep(0.0, 0.02, t));
      }`,
  });
  const flows = new THREE.Mesh(new THREE.BufferGeometry(), flowMat);
  flows.frustumCulled = false; flows.renderOrder = 3;
  scene.add(flows);
  let flowGrow = 1;
  const _up = new THREE.Vector3(0, 1, 0), _q = new THREE.Quaternion();
  // list: [dono, possuído, controle (0/1), fatia em % (ou -1)]
  function setFlows(list) {
    flows.geometry.dispose();
    if (!list.length) { flows.geometry = new THREE.BufferGeometry(); return; }
    const fill = (g, k, v) => g.setAttribute(k, new THREE.BufferAttribute(new Float32Array(g.attributes.position.count).fill(v), 1));
    const center = (gg, x, y, z) => { const n = gg.attributes.position.count, a = new Float32Array(n * 3); for (let k = 0; k < n; k++) a.set([x, y, z], k * 3); gg.setAttribute("aCenter", new THREE.BufferAttribute(a, 3)); };
    const geos = [];
    list.slice(0, 320).forEach(([a, b, ctl, pct], e) => {
      const curve = linkCurve(a, b);
      const len = curve.getLength();
      const rad = (0.035 + 0.075 * Math.sqrt(clamp((pct > 0 ? pct : ctl ? 50 : 8) / 100, 0.02, 1))) * (small ? 1.25 : 1);
      const g = new THREE.TubeGeometry(curve, clamp(Math.round(len * 2.2), 14, 80), rad, 6, false);
      fill(g, "aPhase", (e * 0.137) % 1); fill(g, "aCtl", ctl ? 1 : 0); fill(g, "aLen", len); fill(g, "aHead", 0); fill(g, "aRad", rad); center(g, 0, 0, 0);
      geos.push(g);
      // ponta de seta na chegada
      const h = new THREE.ConeGeometry(rad * 2.6, rad * 7, 10, 1);
      const tan = curve.getTangent(0.985, _a).normalize();
      h.translate(0, rad * 3.5, 0);
      h.applyQuaternion(_q.setFromUnitVectors(_up, tan));
      const end = curve.getPoint(1, _b);
      h.translate(end.x - tan.x * rad * 7, end.y - tan.y * rad * 7, end.z - tan.z * rad * 7);
      fill(h, "aPhase", 0); fill(h, "aCtl", ctl ? 1 : 0); fill(h, "aLen", len); fill(h, "aHead", 1); fill(h, "aRad", rad); center(h, end.x, end.y, end.z);
      geos.push(h);
    });
    flows.geometry = mergeGeometries(geos);
    geos.forEach((g) => g.dispose());
    flowGrow = 0;
  }

  // ------------------------------------------------------------------ destaque, foco de setor, camadas, abertura
  const dim = { v: 0, to: 0 }, focus = { v: 0, to: 0, plate: -1 };
  function setHighlight(levels, dimTo = 0.7) {
    for (const mesh of meshes) mesh.userData.hl.fill(0);
    const hh = halo.geometry.attributes.aHL;
    hh.array.fill(0);
    if (levels) for (const [i, lv] of levels) { for (const it of inst[i]) it[0].userData.hl[it[1]] = lv; if (haloK[i] >= 0) hh.array[haloK[i]] = lv; }
    for (const mesh of meshes) mesh.userData.geo.attributes.aHL.needsUpdate = true;
    hh.needsUpdate = true;
    dim.to = levels ? dimTo : 0;
  }
  function setFocusPlate(j) {
    focus.plate = j;
    focus.to = j >= 0 ? 1 : 0;
    instU.uFocus.value = haloU.uFocus.value = j;
    if (j >= 0) { const p = plates[j]; groundU.uFocus.value.set(p.x0, p.z0, p.x1, p.z1); }
  }
  function setVisible(visible) {
    for (const mesh of meshes) {
      const { idx, vis, geo } = mesh.userData;
      idx.forEach((i, k) => { vis[k] = visible[i] ? 1 : 0; });
      geo.attributes.aVis.needsUpdate = true;
    }
    const hv = halo.geometry.attributes.aVis;
    haloIdx.forEach((i, k) => { hv.array[k] = visible[i] ? 1 : 0; });
    hv.needsUpdate = true;
    buildBaseLines(visible);
    shadowDirty = 2;
  }
  const rise = { t0: 0, dur: 0 };
  // abertura: a cidade sobe do centro para fora enquanto a câmera se afasta do maior prédio até a visão geral
  let introWait = 0;
  function intro(dur = 5200) {
    let big = G_[0];
    for (const i of G_) if (Hh[i] > Hh[big]) big = i;
    for (const mesh of meshes) {
      const { idx, delay, geo } = mesh.userData;
      idx.forEach((i, k) => { delay[k] = clamp(Math.hypot(X[i] - X[big], (Z[i] - Z[big]) * 1.2) / 95, 0, 1) * 0.85 + (i % 7) * 0.01; });
      geo.attributes.aDelay.needsUpdate = true;
    }
    instU.uRise.value = 0;
    rise.t0 = performance.now(); rise.dur = dur * 0.8;
    const end = { x: cam.tx, z: cam.tz, d: cam.td };
    cam.x = X[big] + 3; cam.z = Z[big] + 6; cam.d = 30; cam.yaw = -0.5;
    cam.fly = { a: { x: cam.x, z: cam.z, d: cam.d, yaw: cam.yaw }, b: { ...end, yaw: 0 }, t0: performance.now(), dur, intro: true };
    // só começa a contar quando a cena já está na tela (os primeiros quadros compilam os shaders)
    introWait = 3;
  }
  function skipIntro() {
    if (cam.fly && cam.fly.intro) { const f = cam.fly; cam.fly = null; cam.tx = f.b.x; cam.tz = f.b.z; cam.td = f.b.d; cam.yaw = 0; }
    if (rise.dur) rise.t0 = Math.min(rise.t0, performance.now() - rise.dur * 0.7);
  }

  // ------------------------------------------------------------------ câmera: arrastar move, rolar aproxima
  // inset: o que os painéis, a barra de cima e a legenda cobrem em cada lado (o mapa se enquadra no que sobra)
  const view = { W: 1, H: 1, offX: 0, offY: 0, toX: 0, toY: 0, inset: { l: 0, r: 0, t: 0, b: 0 } };
  const cam = { x: 0, z: 0, d: 160, tx: 0, tz: 0, td: 160, vx: 0, vz: 0, tilt: 0.5, yaw: 0, sway: 0, swayK: 0, idleAt: performance.now(), fly: null };
  const D_MIN = 7;
  const D_MAX = Math.max(260, MH * 2.4);
  // de longe quase de cima (tudo à vista); de perto a câmera deita e os prédios ganham altura
  const tiltFor = (d) => 0.5 + 0.48 * (1 - smooth(16, 120, d));
  function placeCamera() {
    cam.tilt = tiltFor(cam.d);
    const yaw = cam.yaw + cam.sway, st = Math.sin(cam.tilt) * cam.d;
    camera.position.set(cam.x + Math.sin(yaw) * st, Math.cos(cam.tilt) * cam.d, cam.z + Math.cos(yaw) * st);
    camera.up.set(0, 1, 0);
    camera.lookAt(cam.x, 0, cam.z);
    scene.fog.near = cam.d * 1.3; scene.fog.far = cam.d * 4.4 + 60;
  }
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function groundAt(px, py, y = TOP) {
    ndc.set((px / view.W) * 2 - 1, -(py / view.H) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const t = (y - ray.ray.origin.y) / ray.ray.direction.y;
    return ray.ray.origin.clone().addScaledVector(ray.ray.direction, t);
  }
  // distância para enquadrar uma caixa (no chão) na área livre da tela
  function fitDist(x0, x1, z0, z1, pad = 1.08) {
    const halfV = (camera.fov * Math.PI) / 360;
    const I = view.inset;
    const freeW = Math.max(200, view.W - I.l - I.r), freeH = Math.max(160, view.H - I.t - I.b);
    const aspect = freeW / freeH;
    const w = (x1 - x0) * pad, h = (z1 - z0) * pad;
    let d = 100;
    for (let k = 0; k < 4; k++) {
      const tl = tiltFor(d);
      const dH = (h / 2) * (Math.cos(tl) / Math.tan(halfV) + Math.sin(tl));
      const dW = (w / 2) / (Math.tan(halfV) * aspect) + (h / 2) * Math.sin(tl) * 0.6;
      d = Math.max(dH, dW) * (view.H / freeH);
    }
    return clamp(d + 1, D_MIN, D_MAX);
  }
  function flyTo(x, z, d, dur = 1100) {
    cam.fly = { a: { x: cam.x, z: cam.z, d: cam.d, yaw: cam.yaw }, b: { x, z, d, yaw: 0 }, t0: performance.now(), dur };
    cam.tx = x; cam.tz = z; cam.td = d; cam.vx = cam.vz = 0;
  }
  function flyToBox(x0, x1, z0, z1, opts = {}) {
    const d = Math.max(opts.minD || D_MIN, fitDist(x0, x1, z0, z1, opts.pad || 1.12));
    flyTo((x0 + x1) / 2, (z0 + z1) / 2 + (opts.dz || 0), d, opts.dur || 1100);
  }
  function flyToNodes(list, opts = {}) {
    if (!list.length) return;
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    // o que tem altura (prédios, quem paira) aparece mais para o norte na tela: a caixa cresce para lá
    for (const i of list) { x0 = Math.min(x0, X[i] - R[i]); x1 = Math.max(x1, X[i] + R[i]); z0 = Math.min(z0, Z[i] - R[i] - topY(i) * 0.75 - 0.6); z1 = Math.max(z1, Z[i] + R[i] + 0.4); }
    const minSpan = opts.minSpan || 14;
    if (x1 - x0 < minSpan) { const c = (x0 + x1) / 2; x0 = c - minSpan / 2; x1 = c + minSpan / 2; }
    if (z1 - z0 < minSpan * 0.6) { const c = (z0 + z1) / 2; z0 = c - minSpan * 0.3; z1 = c + minSpan * 0.3; }
    flyToBox(x0, x1, z0, z1, opts);
  }
  function flyToPlate(j, opts = {}) { const p = plates[j]; flyToBox(p.x0, p.x1, p.z0 - 2.5, p.z1, { pad: 1.06, ...opts }); }
  function fitAll(dur = 1100) { flyToBox(-MW / 2 - 2, MW / 2 + 2, -MH / 2 - 4, MH / 2 + 1, { pad: 1.03, dur }); }
  function pan(dxPx, dyPx) {
    // move o mapa junto com o dedo: o ponto sob o cursor acompanha o cursor
    const a = groundAt(view.W / 2, view.H / 2), b = groundAt(view.W / 2 + dxPx, view.H / 2 + dyPx);
    cam.x -= b.x - a.x; cam.z -= b.z - a.z;
    cam.tx = cam.x; cam.tz = cam.z; cam.fly = null;
    limit();
  }
  function fling(vx, vy) {
    const a = groundAt(view.W / 2, view.H / 2), b = groundAt(view.W / 2 + vx * 16, view.H / 2 + vy * 16);
    cam.vx = -(b.x - a.x); cam.vz = -(b.z - a.z);
  }
  function zoom(f, px, py) {
    const before = cam.td;
    const nd = clamp(cam.td * f, D_MIN, D_MAX);
    cam.fly = null;
    if (px != null) {
      // aproxima em direção ao cursor (o ponto sob o cursor fica parado)
      const g = groundAt(px, py);
      const k = 1 - nd / before;
      cam.tx += (g.x - cam.tx) * k; cam.tz += (g.z - cam.tz) * k;
    }
    cam.td = nd;
  }
  function limit() {
    cam.x = clamp(cam.x, -MW * 0.62, MW * 0.62); cam.z = clamp(cam.z, -MH * 0.72, MH * 0.78);
    cam.tx = clamp(cam.tx, -MW * 0.62, MW * 0.62); cam.tz = clamp(cam.tz, -MH * 0.72, MH * 0.78);
  }
  function touch() { cam.idleAt = performance.now(); }

  // ------------------------------------------------------------------ geometria da tela
  const _p = new THREE.Vector3();
  function project(i, out = {}) {
    const grown = isGround[i] && shape[i] === "tower" ? clamp(instU.uRise.value, 0.3, 1) : 1;
    _p.set(X[i], Y[i] + Hh[i] * grown, Z[i]).project(camera);
    out.x = (_p.x * 0.5 + 0.5) * view.W; out.y = (-_p.y * 0.5 + 0.5) * view.H;
    out.f = _p.z < 1 && out.x > -40 && out.x < view.W + 40 && out.y > -40 && out.y < view.H + 40 ? 1 : 0;
    out.r = R[i];
    return out;
  }
  function projectPoint(x, y, z, out = {}) {
    _p.set(x, y, z).project(camera);
    out.x = (_p.x * 0.5 + 0.5) * view.W; out.y = (-_p.y * 0.5 + 0.5) * view.H; out.f = _p.z < 1 ? 1 : 0;
    return out;
  }
  // pixels por unidade do mapa no centro da tela (escala da vista)
  function pxPerUnit() { const a = projectPoint(cam.x, TOP, cam.z), b = projectPoint(cam.x + 1, TOP, cam.z); return Math.hypot(b.x - a.x, b.y - a.y); }
  const _hits = [];
  function pick(px, py, visible) {
    ndc.set((px / view.W) * 2 - 1, -(py / view.H) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    let best = -1, bestD = Infinity;
    for (const mesh of meshes) {
      _hits.length = 0;
      mesh.raycast(ray, _hits);
      for (const h of _hits) {
        const i = mesh.userData.idx[h.instanceId];
        if (i == null || (visible && !visible[i])) continue;
        if (h.distance < bestD) { bestD = h.distance; best = i; }
      }
    }
    if (best >= 0) return best;
    // na tela, com raio de toque generoso, preferindo companhias e quem paira
    const tch = matchMedia("(pointer: coarse)").matches ? 16 : 8;
    const ppu = pxPerUnit(), o = {};
    let bs = Infinity;
    for (let i = 0; i < N; i++) {
      if (visible && !visible[i]) continue;
      projectPoint(X[i], Y[i] + Hh[i] * 0.5, Z[i], o);
      if (!o.f) continue;
      const d = Math.hypot(o.x - px, o.y - py), rpx = Math.max(2, R[i] * 0.8 * ppu);
      if (d > tch + rpx) continue;
      const s = d - rpx - (isGround[i] || sky[i] ? 3 : 0);
      if (s < bs) { bs = s; best = i; }
    }
    return best;
  }
  function plateAt(px, py) {
    const g = groundAt(px, py, 0);
    for (const p of plates) if (g.x >= p.x0 && g.x <= p.x1 && g.z >= p.z0 && g.z <= p.z1) return p.j;
    return -1;
  }

  // ------------------------------------------------------------------ quadro
  const clock = { t: 0, last: performance.now() };
  function update(now = performance.now()) {
    const real = Math.min(0.5, (now - clock.last) / 1000), dt = Math.min(0.05, real);
    clock.last = now;
    clock.t += dt;
    if (introWait && !--introWait) { rise.t0 = now; if (cam.fly && cam.fly.intro) cam.fly.t0 = now; }
    if (cam.fly) {
      const f = cam.fly, k = clamp((now - f.t0) / f.dur, 0, 1), e = f.intro ? k * k * (3 - 2 * k) : easeInOut(k);
      cam.x = lerp(f.a.x, f.b.x, e); cam.z = lerp(f.a.z, f.b.z, e); cam.yaw = lerp(f.a.yaw, f.b.yaw, e);
      // o afastamento vai em escala (log): a aproximação parece constante
      cam.d = f.intro ? Math.exp(lerp(Math.log(f.a.d), Math.log(f.b.d), e)) : lerp(f.a.d, f.b.d, e);
      if (k >= 1) { cam.fly = null; cam.tx = f.b.x; cam.tz = f.b.z; cam.td = f.b.d; }
      cam.idleAt = now;
    } else {
      cam.x += cam.vx; cam.z += cam.vz; cam.tx += cam.vx; cam.tz += cam.vz;
      const fr = Math.pow(0.88, dt * 60);
      cam.vx *= fr; cam.vz *= fr;
      if (Math.abs(cam.vx) + Math.abs(cam.vz) < 1e-3) cam.vx = cam.vz = 0;
      const k = Math.min(1, dt * 9);
      cam.x += (cam.tx - cam.x) * k; cam.z += (cam.tz - cam.z) * k; cam.d += (cam.td - cam.d) * k;
      cam.yaw += (0 - cam.yaw) * Math.min(1, dt * 4);
      limit();
    }
    // parado, o mapa respira: a câmera balança devagar para os lados (dá para ver a altura das coisas)
    const idle = reduced ? 0 : smooth(2500, 7000, now - cam.idleAt);
    cam.swayK = lerp(cam.swayK, idle, Math.min(1, dt * 1.5));
    cam.sway = Math.sin(clock.t * 0.16) * 0.075 * cam.swayK;
    if (Math.abs(view.toX - view.offX) + Math.abs(view.toY - view.offY) > 0.3) {
      const k = 1 - Math.exp(-real * 7);
      applyOffset(view.offX + (view.toX - view.offX) * k, view.offY + (view.toY - view.offY) * k);
    }
    placeCamera();
    camera.updateMatrixWorld();
    dim.v += (dim.to - dim.v) * (1 - Math.exp(-real * 5));
    focus.v += (focus.to - focus.v) * (1 - Math.exp(-real * 5));
    const dv = Math.min(1, dim.v * 1.25);
    instU.uDim.value = haloU.uDim.value = smokeU.uDim.value = dv;
    treeU.uDim.value = Math.max(dv, focus.v * 0.6);
    lineU.uDim.value = Math.max(Math.min(1, dim.v * 1.3), focus.v * 0.7);
    groundU.uDim.value = dv * 0.85; groundU.uFocusK.value = focus.v * 0.8;
    instU.uTime.value = flowU.uTime.value = groundU.uTime.value = haloU.uTime.value = smokeU.uTime.value = clock.t;
    if (rise.dur) { const k = clamp((now - rise.t0) / rise.dur, 0, 1); instU.uRise.value = 1.4 * k; shadowDirty = 2; if (k >= 1) { rise.dur = 0; instU.uRise.value = 1.4; } }
    const r01 = instU.uRise.value;
    lineU.uAlpha.value = smooth(0.8, 1.35, r01);
    haloU.uRise.value = smokeU.uRise.value = treeU.uRise.value = r01;
    // de longe os fios de participação quase somem (ficam os de controle); de perto aparecem todos
    lineU.uFar.value = 0.12 + 0.88 * (1 - smooth(24, 110, cam.d));
    const pxScale = (view.H * DPR) / (2 * Math.tan((camera.fov * Math.PI) / 360));
    haloU.uPx.value = flowU.uPx.value = smokeU.uPx.value = pxScale;
    flowGrow = Math.min(1, flowGrow + real * 1.25);
    flowU.uGrow.value = easeInOut(flowGrow);
  }
  // regulador: se o aparelho não segura uns 24 quadros por segundo, primeiro baixa a resolução, depois tira o bloom
  const perf = { n: 0, acc: 0, last: 0, skip: 45, level: 0 };
  function govern(now) {
    const d = now - perf.last;
    perf.last = now;
    if (fixedQuality || perf.level >= 2 || d > 250 || d <= 0) return;
    if (perf.skip > 0) { perf.skip--; return; }
    perf.acc += d;
    if (++perf.n < 50) return;
    const avg = perf.acc / perf.n;
    perf.n = perf.acc = 0;
    if (avg <= 42) return;
    perf.level++;
    perf.skip = 20;
    if (perf.level === 1 && DPR > 1.3) {
      DPR = 1.25;
      renderer.setPixelRatio(DPR);
      if (composer) composer.setPixelRatio(DPR);
      flowU.uMinPx.value = DPR;
      resize(view.W, view.H);
    } else { perf.level = 2; if (composer) { composer.dispose(); composer = null; } }
  }
  function render() {
    govern(performance.now());
    if (shadowDirty > 0) { renderer.shadowMap.needsUpdate = true; shadowDirty--; }
    if (composer) composer.render(); else renderer.render(scene, camera);
  }
  function warmup() { update(); try { renderer.compile(scene, camera); } catch {} render(); clock.last = performance.now(); }
  function resize(w, h) {
    view.W = Math.max(1, w); view.H = Math.max(1, h);
    renderer.setSize(view.W, view.H, false);
    if (composer) { composer.setSize(view.W, view.H); bloom.resolution.set(view.W * 0.5, view.H * 0.5); }
    camera.aspect = view.W / view.H;
    camera.updateProjectionMatrix();
    applyOffset(view.offX, view.offY);
  }
  function setOffset(x, y, instant = false) { view.toX = x; view.toY = y; if (instant) applyOffset(x, y); }
  function setInsets(l, r, t, b, instant = false) { view.inset = { l, r, t, b }; setOffset((l - r) / 2, (t - b) / 2, instant); }
  function applyOffset(x, y) { view.offX = x; view.offY = y; camera.setViewOffset(view.W, view.H, -x, -y, view.W, view.H); }

  return {
    renderer, scene, camera, cam, view, plates, update, render, warmup, resize, setOffset, setInsets,
    pan, fling, zoom, flyTo, flyToBox, flyToNodes, flyToPlate, fitAll, pick, plateAt, project, projectPoint, pxPerUnit,
    setHighlight, setFlows, setVisible, setFocusPlate, intro, skipIntro, touch,
    isInv, isGround, sky, shape, X, Y, Z, R, TOP, PLATE_H: 0,
    get scale() { return S; },
    // andamento da abertura, de 0 a 1 (1 = não há abertura em curso)
    get introK() { return cam.fly && cam.fly.intro ? (introWait ? 0 : clamp((performance.now() - cam.fly.t0) / cam.fly.dur, 0, 1)) : 1; },
    dispose() { renderer.dispose(); pmrem.dispose(); },
  };
}
