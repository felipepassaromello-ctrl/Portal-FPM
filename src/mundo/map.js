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
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { sectorProps, rotorGeo, towerGeo, treeGeo, personGeo, carGeo, boatGeo } from "./props.js";
import { themeOf, themeDef, guyGeo, beach, sea } from "./temas.js";

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
  const vivid = (c, out = new THREE.Color()) => { out.set(c).getHSL(_hsl); return out.setHSL(_hsl.h, Math.min(1, _hsl.s * 1.2 + 0.06), _hsl.l * 0.86); };

  // ------------------------------------------------------------------ renderizador, luz do dia e sombras
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  let DPR = Math.min(devicePixelRatio || 1, small ? 1.75 : 1.5);
  renderer.setPixelRatio(DPR);
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  // a cidade é parada: a sombra só é refeita quando algo muda (abertura, camadas), não a cada quadro
  renderer.shadowMap.autoUpdate = false;
  let shadowDirty = 3;
  const HAZE = new THREE.Color(0xd3e4ee);
  const scene = new THREE.Scene();
  scene.background = HAZE;
  scene.fog = new THREE.Fog(HAZE, 160, 520);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.3, 1600);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.3;

  const sun = new THREE.DirectionalLight(0xfff1dd, 2.75);
  sun.position.set(-75, 105, 62);
  sun.castShadow = true;
  sun.shadow.mapSize.set(small ? 2048 : 4096, small ? 2048 : 4096);
  Object.assign(sun.shadow.camera, { left: -MW * 0.66, right: MW * 0.66, top: MH * 0.85, bottom: -MH * 0.85, near: 10, far: 360 });
  sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.035; sun.shadow.radius = 5; sun.shadow.blurSamples = 16;
  scene.add(sun, sun.target);
  scene.add(new THREE.HemisphereLight(0xd6e4f7, 0x9a9a84, 0.66));

  // pós-processamento: foco seletivo e saída de cor. Se o aparelho não der conta, desenha direto.
  let composer = null, tilt = null;
  try {
    const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 2 });
    composer = new EffectComposer(renderer, rt);
    composer.setPixelRatio(DPR);
    composer.addPass(new RenderPass(scene, camera));
    // foco seletivo (efeito de maquete): o meio da tela nítido, o alto e o pé levemente desfocados, só de perto
    tilt = new ShaderPass({
      uniforms: { tDiffuse: { value: null }, uAmt: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } },
      vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: `uniform sampler2D tDiffuse; uniform float uAmt; uniform vec2 uRes; varying vec2 vUv;
        void main(){ float k = smoothstep(0.16, 0.5, abs(vUv.y - 0.5)) * uAmt; if (k < 0.01) { gl_FragColor = texture2D(tDiffuse, vUv); return; }
          vec4 c = vec4(0.0); for (int i = 0; i < 12; i++) { float a = float(i) * 2.39996, r = sqrt((float(i) + 0.5) / 12.0) * k; c += texture2D(tDiffuse, vUv + vec2(cos(a), sin(a)) * r / uRes); }
          gl_FragColor = c / 12.0; }`,
    });
    composer.addPass(tilt);
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
  const DECOR = new Set(["util", "oil", "agro", "ind", "base", "log", "tech", "imob", "saude", "cons"]);
  const decor = [];
  const parks = [], trees = [], freeBlocks = [];
  // a praia central (onde fica a estátua): uma faixa de areia garantida na costa sul
  const BEACH = { x0: -20, x1: 20, z: MH / 2 + 8.2, r: 2.4 };
  const beachSd = (x, z) => Math.hypot(x - clamp(x, BEACH.x0, BEACH.x1), z - BEACH.z) - BEACH.r; // parques: [cx, cz, lago?]; árvores: [x, z, escala]
  const G_ = [];
  for (let i = 0; i < N; i++) if (isGround[i]) G_.push(i);
  for (const p of plates) {
    for (let ix = Math.ceil((p.x0 + 0.25) / GRID); (ix + 1) * GRID < p.x1 - 0.25; ix++) for (let iz = Math.ceil((p.z0 + 0.25) / GRID); (iz + 1) * GRID < p.z1 - 0.25; iz++) {
      const cx = (ix + 0.5) * GRID, cz = (iz + 0.5) * GRID;
      let free = true;
      for (const i of G_) { const r = LOT[i] + 0.85; if (Math.abs(X[i] - cx) < r && Math.abs(Z[i] - cz) < r && Math.hypot(X[i] - cx, Z[i] - cz) < r) { free = false; break; } }
      if (!free) continue;
      freeBlocks.push({ cx, cz, p });
    }
  }
  // perto de cada companhia (das maiores para as menores), a quadra livre mais próxima vira algo do negócio dela:
  // bar perto da cervejaria, posto perto da petroleira, escola perto do grupo de educação...
  const themed = [], themeCount = {}, TH = {};
  let nFree = 0;
  const thDef = (k) => TH[k] || (TH[k] = themeDef(k));
  const comps = G_.filter((i) => world.nodes[i].t === "c").sort((a, b) => (world.nodes[b].mc || 0) - (world.nodes[a].mc || 0));
  for (const i of comps) {
    const th = themeOf(world.nodes[i]);
    if (!th || (themeCount[th] || 0) >= 14) continue;
    let best = -1, bd = nFree > freeBlocks.length * 0.4 ? -1 : 6;
    for (let k = 0; k < freeBlocks.length; k++) { const f = freeBlocks[k]; if (f.used || f.p.j !== M.plate[i]) continue; // de preferência à frente ou ao lado: atrás (ao norte) o prédio taparia a vista
      const d = Math.hypot(f.cx - X[i], f.cz - Z[i]) + (f.cz < Z[i] - 0.3 && Math.abs(f.cx - X[i]) < SX[i] + 1.2 ? 4 : 0); if (d < bd) { bd = d; best = k; } }
    if (best < 0) {
      // sem quadra livre por perto: se a companhia for grande, o negócio fica no próprio terreno dela, do lado oeste
      const w = (SX[i] + SZ[i]) / 2, sc = clamp(w * 0.8, 0.8, 1.05);
      if (w < 0.8) continue;
      themeCount[th] = (themeCount[th] || 0) + 1;
      themed.push({ x: X[i] - SX[i] / 2 - 0.66 * sc, z: Z[i] + SZ[i] * 0.25, th, node: i, plate: M.plate[i], s: sc, inLot: true });
      continue;
    }
    nFree++;
    freeBlocks[best].used = true;
    themeCount[th] = (themeCount[th] || 0) + 1;
    themed.push({ x: freeBlocks[best].cx, z: freeBlocks[best].cz, th, node: i, plate: M.plate[i] });
    if (thDef(th).green) parks.push([freeBlocks[best].cx, freeBlocks[best].cz, false]);
  }
  for (const f of freeBlocks) {
    if (f.used) continue;
    const { cx, cz, p } = f;
    const pond = rnd() < 0.12;
    parks.push([cx, cz, pond]);
    // em parte das quadras livres, uma instalação do setor do bairro (turbina, silos, refinaria, fábrica...)
    if (!pond && rnd() < 0.42 && DECOR.has(p.c)) {
      decor.push({ x: cx, z: cz, plate: p.j, sec: p.c, s: 1.05 + rnd() * 0.25 });
      for (const [ax, az] of [[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5]]) trees.push([cx + ax, cz + az, 0.5 + rnd() * 0.25]);
      continue;
    }
    const n = 6 + Math.floor(rnd() * 6);
    for (let k = 0; k < n; k++) { const x = cx + (rnd() - 0.5) * 1.1, z = cz + (rnd() - 0.5) * 1.1; if (pond && Math.hypot(x - cx, z - cz) < 0.36) continue; trees.push([x, z, 0.55 + rnd() * 0.4]); }
  }
  // atrás de cada terreno (lado norte, para não tapar os donos), uma fileira de árvores
  for (const i of G_) {
    if (LOT[i] < 0.45) continue;
    const r = LOT[i] * 0.95, n = Math.min(14, Math.floor((Math.PI * r) / 0.42));
    for (let k = 0; k < n; k++) { const a = Math.PI + ((k + 0.5) / n) * Math.PI; trees.push([X[i] + Math.cos(a) * r, Z[i] + Math.sin(a) * r, 0.5 + rnd() * 0.2]); }
  }
  // canteiros das avenidas entre os bairros e a mata em volta da cidade
  for (let x = -MW / 2 - 0.6; x <= MW / 2 + 0.6; x += 0.46) for (let z = -MH / 2 - 0.6; z <= MH / 2 + 0.6; z += 0.46) {
    const d = plateSd(x, z);
    if (d > 0.62 && d < 1.2 && rnd() < 0.8) trees.push([x + (rnd() - 0.5) * 0.12, z + (rnd() - 0.5) * 0.12, 0.6 + rnd() * 0.25]);
  }
  for (let k = 0; k < (small ? 1500 : 2800); k++) {
    const x = (rnd() - 0.5) * (MW + 10), z = (rnd() - 0.5) * (MH + 9);
    if (plateSd(x, z) < 1.3 || beachSd(x, z) < 0.5 || (x < -MW / 2 - 3.5 && Math.abs(z + 4) < 5.5) || hash1(Math.floor(x / 3) * 31 + Math.floor(z / 3) * 17) < 0.42) continue;
    trees.push([x, z, 0.6 + rnd() * 0.7]);
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
    for (const t of themed) if (!t.inLot && !thDef(t.th).green) { g.beginPath(); g.roundRect(px(t.x - 0.6), pz(t.z - 0.6), 1.2 * k, 1.2 * k, 0.1 * k); g.fill(); }
    const t = new THREE.CanvasTexture(cv);
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
    return t;
  })();
  const aoTex = (() => {
    const CW = 2048, CH = Math.round((CW * M.H) / M.W), k = CW / MW;
    const cv = document.createElement("canvas");
    cv.width = CW; cv.height = CH;
    const g = cv.getContext("2d");
    g.fillStyle = "#000"; g.fillRect(0, 0, CW, CH);
    g.fillStyle = "#fff"; g.shadowColor = "#fff";
    for (const i of G_) { g.shadowBlur = Math.max(4, (0.16 + Hh[i] * 0.05) * k); g.fillRect((X[i] - SX[i] / 2 + MW / 2) * k, (Z[i] - SZ[i] / 2 + MH / 2) * k, SX[i] * k, SZ[i] * k); }
    const t = new THREE.CanvasTexture(cv);
    t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
    return t;
  })();
  const NR = plates.length;
  const groundU = {
    uMask: { value: maskTex }, uAo: { value: aoTex }, uBeach: { value: new THREE.Vector4(BEACH.x0, BEACH.x1, BEACH.z, BEACH.r) }, uTime: { value: 0 }, uSize: { value: new THREE.Vector2(MW, MH) }, uLand: { value: new THREE.Vector2(MW / 2 + 9, MH / 2 + 7) },
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
        varying vec3 vWp; uniform sampler2D uMask; uniform sampler2D uAo; uniform vec4 uBeach; uniform float uTime; uniform vec2 uSize; uniform vec2 uLand; uniform vec4 uRects[12]; uniform vec3 uCols[12];
        uniform vec4 uFocus; uniform float uFocusK; uniform float uDim;
        float gWater = 0.0;
        ${GLSL_NOISE}
        float sdRound(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }`)
      .replace("#include <color_fragment>", `#include <color_fragment>
        vec2 p = vWp.xz;
        float aa = fwidth(p.x) * 1.2;
        float n1 = vnoise(p * 0.3), n2 = vnoise(p * 1.7);
        vec2 bq = abs(p) - uLand;
        float land = length(max(bq, 0.0)) + min(max(bq.x, bq.y), 0.0) - 4.0 + vnoise(p * 0.07 + 3.1) * 7.0 + n1 * 1.5;
        float bd = length(vec2(p.x - clamp(p.x, uBeach.x, uBeach.y), p.y - uBeach.z)) - uBeach.w;
        land = min(land, bd);
        land = min(land, max(abs(p.y + 4.0) - 4.6, abs(p.x + uLand.x - 2.0) - 4.2) + 0.6);
        float d = 1e5; vec3 sec = uCols[0];
        for (int k = 0; k < ${NR}; k++) { float dk = sdRound(p - uRects[k].xy, uRects[k].zw, 0.6); if (dk < d) { d = dk; sec = uCols[k]; } }
        vec2 muv = vec2(p.x / uSize.x + 0.5, 0.5 - p.y / uSize.y);
        float n3 = vnoise(p * 9.0);
        float far = 1.0 - smoothstep(0.012, 0.045, aa);
        vec3 lawn = mix(vec3(0.4, 0.6, 0.29), vec3(0.5, 0.67, 0.34), n2) * (0.96 + 0.08 * n3);
        vec3 parkC = mix(vec3(0.27, 0.48, 0.22), vec3(0.35, 0.55, 0.27), n2) * (0.96 + 0.08 * n3);
        vec3 asphalt = vec3(0.27, 0.28, 0.3) * (0.95 + 0.1 * n3);
        vec3 walkC = vec3(0.86, 0.85, 0.82);
        vec3 waterC = mix(vec3(0.36, 0.7, 0.76), vec3(0.26, 0.58, 0.7), n2);
        vec3 col;
        if (land > 0.0) {
          // mar: turquesa claro na beira, azul fundo ao largo, com ondulação e a espuma batendo na praia
          col = mix(vec3(0.42, 0.8, 0.8), vec3(0.1, 0.4, 0.6), smoothstep(0.0, 9.0, land));
          col += vec3(0.05) * smoothstep(0.55, 0.9, vnoise(p * 1.1 + vec2(uTime * 0.18, uTime * 0.12))) * far;
          float wave = land + 0.1 * sin(uTime * 0.7 + p.x * 0.6 + p.y * 0.45);
          col = mix(col, vec3(0.98), (1.0 - smoothstep(0.0, 0.16 + aa, wave)) * 0.9);
          col = mix(col, vec3(0.95), (smoothstep(0.5, 0.56, wave) - smoothstep(0.56, 0.68 + aa, wave)) * 0.35 * far);
          gWater = 1.0;
        } else if (d < 0.0) {
          // dentro do bairro: ruas com faixas e carros, calçadas, praças com anel, gramados, parques e lagos
          vec4 m = texture2D(uMask, muv);
          vec2 gq = abs(fract(p / ${GRID.toFixed(1)} + 0.5) - 0.5) * ${GRID.toFixed(1)};
          float sd = min(gq.x, gq.y), along = gq.x < gq.y ? p.y : p.x;
          float road = 1.0 - smoothstep(0.085 - aa, 0.085 + aa, sd);
          float walk = 1.0 - smoothstep(0.135 - aa, 0.135 + aa, sd);
          float park = smoothstep(0.4, 0.6, m.r), pond = smoothstep(0.42, 0.58, m.b);
          float plaza = smoothstep(0.42, 0.58, m.g);
          float ring = smoothstep(0.3, 0.42, m.g) * (1.0 - smoothstep(0.5, 0.62, m.g));
          road *= 1.0 - plaza; walk *= 1.0 - plaza;
          col = mix(lawn, parkC, park);
          col = mix(col, mix(vec3(0.93, 0.92, 0.89), sec, 0.05) * (0.97 + 0.03 * n3), plaza);
          col = mix(col, waterC, pond);
          col = mix(col, vec3(0.9, 0.86, 0.72), (smoothstep(0.3, 0.42, m.b) - pond) * 0.9);
          gWater = pond * (1.0 - walk);
          col = mix(col, mix(sec, vec3(0.55), 0.3), ring * 0.5 * (1.0 - pond));
          col = mix(col, walkC, walk);
          col = mix(col, asphalt, road);
          col = mix(col, vec3(0.95), road * far * 0.85 * step(0.5, fract(along * 3.0)) * (1.0 - smoothstep(0.004, 0.009, sd)));
          // faixa de pedestres perto dos cruzamentos
          float mx = max(gq.x, gq.y);
          float cross = road * far * step(mx, 0.21) * step(0.15, mx) * step(0.5, fract((gq.x < gq.y ? p.x : p.y) * 22.0));
          col = mix(col, vec3(0.95), cross * 0.85);
          // a borda do bairro: calçada e um filete na cor do setor
          float e = -d;
          col = mix(col, walkC, 1.0 - smoothstep(0.16, 0.16 + aa, e));
          col = mix(col, sec, (smoothstep(0.035, 0.035 + aa, e) - smoothstep(0.11 + 2.0 * aa, 0.11 + 3.0 * aa, e)) * 0.92);
          col *= 1.0 - 0.45 * texture2D(uAo, muv).r;
        } else {
          // fora dos bairros: a avenida que contorna cada um, canteiros e, além deles, campo, mata e a praia
          vec3 country = mix(lawn * 0.97, vec3(0.3, 0.5, 0.28), smoothstep(0.42, 0.68, vnoise(p * 0.2 + 7.0)));
          float rd = 1.0 - smoothstep(0.44 - aa, 0.44 + aa, d);
          col = mix(country, asphalt, rd);
          col = mix(col, vec3(0.95), rd * far * 0.85 * (1.0 - smoothstep(0.005, 0.011, abs(d - 0.23))) * step(0.5, fract((p.x + p.y) * 2.1)));
          // praia: areia clara, mais escura e molhada junto à água
          float sand = max(smoothstep(-2.0, -1.2, land), 1.0 - smoothstep(-0.9, -0.3, bd));
          col = mix(col, mix(vec3(0.95, 0.9, 0.76), vec3(0.8, 0.74, 0.6), smoothstep(-0.5, 0.0, land)) * (0.97 + 0.05 * n3), sand);
        }
        // setor em foco e escolha: o resto esmaece para um cinza claro
        float inF = step(uFocus.x, p.x) * step(p.x, uFocus.z) * step(uFocus.y, p.y) * step(p.y, uFocus.w);
        float dk = max(uDim, uFocusK * (1.0 - inF));
        col = mix(col, vec3(dot(col, vec3(0.3, 0.59, 0.11))) * 0.82, 0.9 * dk);
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
  const FRAG_HEAD = `varying float vPart; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit; uniform float uDim; uniform float uTime; uniform vec3 uAcc; uniform sampler2D uSign; float gRough = -1.0;\n${GLSL_NOISE}`;
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
          vec3 concrete = mix(vec3(0.94, 0.935, 0.92), sec, 0.03);
          if (vPart > 0.5) {
            // detalhes e a peça do setor: concreto, tinta do setor, chama, metal, vidro, luz de obstáculo
            if (vPart < 1.5) diffuseColor.rgb = concrete * (0.86 + 0.14 * top);
            else if (vPart < 2.5) { diffuseColor.rgb = sec; gRough = 0.5; }
            else if (vPart < 3.5) { float fl = 0.72 + 0.28 * sin(uTime * 13.0 + vSeed * 50.0) * sin(uTime * 7.3 + vOp.y * 9.0); diffuseColor.rgb = vec3(1.0, 0.5, 0.1); glow = vec3(1.0, 0.42, 0.08) * 1.6 * fl; }
            else if (vPart < 4.5) { diffuseColor.rgb = vec3(0.56, 0.58, 0.62); gRough = 0.4; }
            else if (vPart < 5.5) {
              vec2 q = vec2((vOp.x + vOp.z) * 13.0, vOp.y * 12.0); vec2 f = fract(q);
              float mk = smoothstep(0.1, 0.2, f.x) * smoothstep(0.9, 0.8, f.x) * smoothstep(0.2, 0.32, f.y) * smoothstep(0.86, 0.74, f.y) * (1.0 - top);
              float px = max(fwidth(q.x), fwidth(q.y));
              mk = mix(mk, 0.45 * (1.0 - top), smoothstep(0.4, 1.0, px));
              diffuseColor.rgb = mix(concrete, mix(vec3(0.4, 0.5, 0.6), vec3(0.62, 0.73, 0.82), hash21(floor(q) + sdv * 17.0)), mk);
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
            float nx = max(3.0, floor(fw / (style < 0.6 ? 0.06 : 0.085))), ny = max(2.0, floor(vSize.y / 0.1));
            vec2 q = vec2(along * nx, vOp.y * ny);
            vec2 id = floor(q), f = fract(q);
            float face = floor(vOn.x + 0.5) + floor(vOn.z + 0.5) * 2.0;
            float hp = hash21(id + sdv * 71.0 + face * 13.0);
            float px = max(fwidth(q.x), fwidth(q.y)), lod = smoothstep(0.35, 0.9, px);
            // vidro azul-acinzentado, mais claro no alto (reflete o céu), com um toque da cor do setor
            vec3 glass = mix(vec3(0.2, 0.31, 0.43), vec3(0.5, 0.65, 0.78), smoothstep(0.0, 1.0, vOp.y) * 0.7 + hp * 0.3);
            glass = mix(glass, sec, 0.1);
            vec3 wall; float gk;
            if (style < 0.6) {
              // cortina de vidro: montantes e lajes em filetes brancos
              float frame = max(1.0 - smoothstep(0.02, 0.05, min(f.x, 1.0 - f.x)), 1.0 - smoothstep(0.06, 0.1, f.y));
              gk = mix(1.0 - frame, 0.86, lod);
              wall = mix(concrete, glass, gk);
            } else {
              // fachada branca com janelas recuadas
              float win = smoothstep(0.2, 0.26, f.x) * smoothstep(0.8, 0.74, f.x) * smoothstep(0.22, 0.3, f.y) * smoothstep(0.82, 0.74, f.y);
              gk = mix(win, 0.36, lod);
              wall = mix(concrete, glass * 0.62, gk);
            }
            float crown = smoothstep(vSize.y - 0.075, vSize.y - 0.065, hgt);
            wall = mix(wall, sec, crown);
            // letreiro: na fachada da frente, uma faixa na cor do setor com o nome da companhia
            float cell = abs(vLit) - 1.0;
            if (cell >= 0.0 && vOn.z > 0.5) {
              float tier = vLit < 0.0 && vOp.y > 0.665 ? 1.0 : 0.0;
              float al2 = mix(along, (along - 0.14) / 0.72, tier);
              float bw = (vLit < 0.0 ? 0.72 : 1.0) * vSize.x;
              float bh = clamp(bw * 0.25, 0.06, 0.42);
              vec2 suv = vec2(al2, (hgt - (vSize.y - bh - 0.035)) / bh);
              if (vSize.y > bh * 1.7 && suv.x > 0.0 && suv.x < 1.0 && suv.y > 0.0 && suv.y < 1.0) {
                vec2 auv = vec2((mod(cell, ${SIGN_COLS}.0) + suv.x) / ${SIGN_COLS}.0, 1.0 - (floor(cell / ${SIGN_COLS}.0) + 1.0 - suv.y) / ${Math.max(1, signRows)}.0);
                wall = mix(sec * 0.82, vec3(1.0), texture2D(uSign, auv).r);
                gk = 0.0;
              }
            }
            wall *= mix(0.8, 1.0, smoothstep(0.0, 0.7, hgt));
            float edge = max(abs(vOp.x), abs(vOp.z)) * 2.0 / (abs(vOp.x) > 0.37 || abs(vOp.z) > 0.37 || vOp.y < 0.99 ? 1.0 : 0.72);
            float rim = smoothstep(0.92, 0.95, edge);
            vec3 roof = mix(mix(vec3(0.9, 0.89, 0.87), sec, 0.3), vec3(0.97), rim);
            diffuseColor.rgb = mix(wall, roof, top);
            gRough = mix(mix(0.8, 0.12, gk * (1.0 - crown)), 0.9, top);
            glow = uAcc * vHL * vHL * (0.1 + 1.0 * crown * (1.0 - top) + 0.8 * rim * top + 0.15 * top) * (0.9 + 0.1 * sin(uTime * 3.0));
          }` : `
          // peças pequenas: figuras foscas na cor do tipo; nas pessoas, terno, camisa, pele, cabelo e sapatos
          if (vPart > 0.5) {
            float tone = hash21(vec2(sdv * 53.0, 4.0));
            vec3 suit = tone < 0.45 ? vec3(0.02, 0.03, 0.07) : tone < 0.8 ? vec3(0.035, 0.035, 0.045) : vec3(0.09, 0.09, 0.11);
            diffuseColor.rgb = vPart < 1.5 ? suit : vPart < 2.5 ? vec3(0.96) : vPart < 3.5 ? mix(vec3(0.95, 0.78, 0.64), vec3(0.5, 0.34, 0.24), hash21(vec2(sdv * 31.0, 8.0))) : vPart < 4.5 ? mix(vec3(0.1, 0.08, 0.07), vec3(0.5, 0.38, 0.24), step(0.7, hash21(vec2(sdv * 17.0, 2.0)))) : vec3(0.05);
            glow = uAcc * vHL * vHL * 0.5;
          } else {
            diffuseColor.rgb = sec * (0.82 + 0.18 * smoothstep(-0.3, 1.0, vOn.y));
            glow = sec * 0.1 + uAcc * vHL * vHL * 0.8 + sec * isHL * 0.25;
          }`}
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.86, 0.92 * dimK);
          glow *= 1.0 - 0.9 * dimK;`)
        .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nif (gRough >= 0.0) roughnessFactor = gRough;")
        .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance += glow;");
    };
    mat.customProgramCacheKey = () => `inst-${kind}`;
    const mesh = new THREE.InstancedMesh(geo, mat, n);
    // a sombra acompanha a peça (cresce na abertura, some com a camada)
    mesh.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
    mesh.customDepthMaterial.onBeforeCompile = (sh) => patch(sh);
    mesh.customDepthMaterial.customProgramCacheKey = () => `instd-${kind}`;
    const m4 = new THREE.Matrix4(), col = new THREE.Color(), sz = new THREE.Vector3();
    idx.forEach((i, k) => {
      if (typeof i === "number") inst[i].push([mesh, k]);
      place(i, m4, col, sz);
      mesh.setMatrixAt(k, m4);
      mesh.setColorAt(k, col);
      plate[k] = typeof i === "number" ? M.plate[i] : i.plate;
      sd[k] = hash1((typeof i === "number" ? i : k + 7001) * 3 + 1);
      size.set([sz.x, sz.y, sz.z], k * 3);
      lit[k] = sz.w || 0;
    });
    mesh.count = idx.length;
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.userData = { name, idx: typeof idx[0] === "number" ? idx : [], hl, vis, delay, geo };
    mesh.frustumCulled = false;
    if (kind !== "small") { mesh.castShadow = true; mesh.receiveShadow = true; }
    scene.add(mesh);
    meshes.push(mesh);
    return mesh;
  }
  const SIGN_COLS = 10, signCell = new Int32Array(N);
  const signRows = Math.ceil(G_.filter((i) => world.nodes[i].t === "c").length / SIGN_COLS);
  instU.uSign = { value: (() => {
    const CWD = 192, CHT = 48, cv = document.createElement("canvas");
    cv.width = SIGN_COLS * CWD; cv.height = Math.max(1, signRows) * CHT;
    const g = cv.getContext("2d");
    g.fillStyle = "#000"; g.fillRect(0, 0, cv.width, cv.height);
    g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle";
    let c = 0;
    for (const i of G_) {
      const n = world.nodes[i];
      if (n.t !== "c") continue;
      const name = String(n.n).replace(/[\s,]+(S\.?\/?A\.?|Ltda\.?|Holding|Participa[cç][oõ]es|Companhia|Cia\.?)\b.*$/i, "").replace(/\s*\(.*?\)\s*$/, "").slice(0, 18).trim().toUpperCase();
      g.font = '700 30px "Inter", "Helvetica Neue", Arial, sans-serif';
      const w = g.measureText(name).width, k = Math.min(1, (CWD - 18) / Math.max(1, w));
      g.font = `700 ${Math.round(30 * k)}px "Inter", "Helvetica Neue", Arial, sans-serif`;
      g.fillText(name, (c % SIGN_COLS + 0.5) * CWD, (Math.floor(c / SIGN_COLS) + 0.52) * CHT);
      signCell[i] = ++c;
    }
    const t = new THREE.CanvasTexture(cv);
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
    return t;
  })() };
  const pos3 = new THREE.Vector3(), quat = new THREE.Quaternion(), scl = new THREE.Vector3();
  const placeBld = (i, m4, col, sz) => {
    m4.compose(pos3.set(X[i], TOP, Z[i]), quat.identity(), scl.set(SX[i], Hh[i], SZ[i]));
    const n = world.nodes[i];
    vivid(n.t === "c" ? palette.sector(n.c) : palette.kind(n), col);
    sz.set(SX[i], Hh[i], SZ[i]); sz.w = signCell[i] * (shape[i] === "tower" && Hh[i] > 3.2 ? -1 : 1);
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
  const rotorItems = rotors.map((r) => ({ node: r[0], x: r[1], y: r[2], z: r[3], s: r[4] }));
  for (const sec of DECOR) {
    const pr = PROPS[sec], items = decor.filter((dc) => dc.sec === sec);
    if (!pr || !items.length) continue;
    instanced(`decor-${sec}`, pr.geo.clone(), bldMat(), items, (it, m4, col, sz) => {
      m4.compose(pos3.set(it.x, TOP, it.z), quat.identity(), scl.set(it.s, it.s, it.s));
      vivid(palette.sector(sec), col);
      sz.set(it.s, it.s, it.s); sz.w = 0;
      if (pr.rotor) rotorItems.push({ plate: it.plate, x: it.x + pr.rotor[0] * it.s, y: TOP + pr.rotor[1] * it.s, z: it.z + pr.rotor[2] * it.s, s: it.s });
      for (const p of pr.smoke || []) smokePts.push([-1, it.x + p[0] * it.s, TOP + p[1] * it.s, it.z + p[2] * it.s, it.s]);
    }, "bld");
  }
  for (const group of [rotorItems.filter((r) => r.node != null), rotorItems.filter((r) => r.node == null)]) {
    if (!group.length) continue;
    const byNode = new Map(group.map((r) => [r.node, r]));
    instanced("rotor", rotorGeo(), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }), group[0].node != null ? group.map((r) => r.node) : group, (i, m4, col, sz) => {
      const r = typeof i === "number" ? byNode.get(i) : i;
      m4.compose(pos3.set(r.x, r.y, r.z), quat.identity(), scl.set(r.s, r.s, r.s));
      col.setRGB(0.95, 0.95, 0.95);
      sz.set(r.s, r.s, r.s); sz.w = 0;
    }, "spin");
  }

  const by = { pawn: [], tile: [], inv: [] };
  for (let i = 0; i < N; i++) if (!isGround[i]) by[shape[i] === "pawn" ? "pawn" : shape[i] === "inv" ? "inv" : "tile"].push(i);
  const pawnGeo = personGeo();
  const cubeGeo = (() => { const g = new THREE.BoxGeometry(1.3, 1.3, 1.3); g.translate(0, 0.65, 0); return g; })();
  const invGeo = (() => { const g = new THREE.OctahedronGeometry(1, 0); g.scale(0.82, 1.15, 0.82); g.translate(0, 1.15, 0); return g; })();
  const placeSmall = (i, m4, col, sz) => {
    const s = R[i] * (shape[i] === "pawn" ? 1.3 : 1);
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
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 });
    const patch = (sh) => { Object.assign(sh.uniforms, treeU); sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nuniform float uRise;").replace("#include <begin_vertex>", "#include <begin_vertex>\ntransformed *= smoothstep(0.55, 1.2, uRise);"); };
    mat.onBeforeCompile = (sh) => {
      patch(sh);
      sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform float uDim;").replace("#include <color_fragment>", "#include <color_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.86, 0.9 * uDim);");
    };
    const mesh = new THREE.InstancedMesh(treeGeo(), mat, trees.length);
    mesh.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
    mesh.customDepthMaterial.onBeforeCompile = patch;
    const m4 = new THREE.Matrix4(), col = new THREE.Color(), e = new THREE.Euler();
    trees.forEach(([x, z, s], k) => {
      const r = hash1(k * 5.1 + 2);
      m4.compose(pos3.set(x, TOP, z), quat.setFromEuler(e.set(0, r * 6.28, 0)), scl.set(s, s * (0.85 + 0.4 * hash1(k + 9)), s));
      mesh.setMatrixAt(k, m4);
      if (r > 0.97) col.setRGB(0.95, 0.77, 0.2); else if (r > 0.945) col.setRGB(0.93, 0.56, 0.68); else if (r > 0.93) col.setRGB(0.62, 0.5, 0.82);
      else col.setHSL(0.26 + 0.06 * hash1(k * 1.3), 0.36 + 0.14 * hash1(k * 2.1), 0.3 + 0.1 * hash1(k * 3.7));
      mesh.setColorAt(k, col);
    });
    mesh.castShadow = true; mesh.receiveShadow = true; mesh.frustumCulled = false;
    scene.add(mesh);
  }

  const moverU = { uTime: { value: 0 }, uDim: { value: 0 }, uRise: { value: 1 }, uMask: { value: maskTex }, uSize: { value: new THREE.Vector2(MW, MH) } };
  function movers(geo, items, useMask, shadow = false) {
    if (!items.length) return;
    const n = items.length, move = new Float32Array(n * 3), ph = new Float32Array(n * 3);
    geo.setAttribute("aMove", new THREE.InstancedBufferAttribute(move, 3));
    geo.setAttribute("aPh", new THREE.InstancedBufferAttribute(ph, 3));
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.42, metalness: 0.1, envMapIntensity: 1.6 });
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, moverU);
      sh.vertexShader = sh.vertexShader
        .replace("#include <common>", "#include <common>\nattribute vec3 aMove; attribute vec3 aPh; uniform float uTime; uniform float uRise; uniform sampler2D uMask; uniform vec2 uSize;")
        .replace("#include <project_vertex>", `float mt = fract(aPh.x + uTime * aPh.y);
          vec3 ctr = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz + aMove * mt;
          ctr.y += aPh.z * sin(uTime * 1.3 + aPh.x * 30.0);
          float show = smoothstep(0.0, 0.03, mt) * smoothstep(1.0, 0.97, mt) * smoothstep(1.0, 1.3, uRise);
          ${useMask ? "show *= 1.0 - smoothstep(0.3, 0.5, texture2D(uMask, vec2(ctr.x / uSize.x + 0.5, 0.5 - ctr.z / uSize.y)).g);" : ""}
          vec4 mvPosition = modelViewMatrix * vec4(ctr + mat3(instanceMatrix) * transformed * show, 1.0);
          gl_Position = projectionMatrix * mvPosition;`);
      sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform float uDim;").replace("#include <color_fragment>", "#include <color_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.86, 0.9 * uDim);");
    };
    mat.customProgramCacheKey = () => `mover-${useMask ? 1 : 0}`;
    const mesh = new THREE.InstancedMesh(geo, mat, n);
    const m4 = new THREE.Matrix4(), col = new THREE.Color(), e = new THREE.Euler();
    items.forEach((it, k) => {
      m4.compose(pos3.set(it.x, it.y || TOP, it.z), quat.setFromEuler(e.set(0, it.yaw, 0)), scl.set(it.s, it.s, it.s));
      mesh.setMatrixAt(k, m4);
      mesh.setColorAt(k, col.setRGB(...it.col));
      move.set([it.mx, 0, it.mz], k * 3);
      ph.set([it.ph, it.sp, it.bob || 0], k * 3);
    });
    mesh.frustumCulled = false;
    if (shadow) { mesh.castShadow = true; mesh.receiveShadow = true; }
    scene.add(mesh);
  }
  {
    const CAR_COLS = [[0.93, 0.93, 0.92], [0.93, 0.93, 0.92], [0.72, 0.74, 0.77], [0.72, 0.74, 0.77], [0.14, 0.15, 0.18], [0.14, 0.15, 0.18], [0.75, 0.12, 0.1], [0.12, 0.28, 0.6], [0.95, 0.74, 0.12], [0.2, 0.42, 0.34]];
    const cars = [], gap = small ? 9 : 4.2;
    for (const p of plates) for (let ax = 0; ax < 2; ax++) {
      const a0 = (ax ? p.z0 : p.x0) + 0.3, a1 = (ax ? p.z1 : p.x1) - 0.3, b0 = ax ? p.x0 : p.z0, b1 = ax ? p.x1 : p.z1, len = a1 - a0;
      for (let k = Math.ceil((b0 + 0.5) / GRID); k * GRID < b1 - 0.5; k++) for (const dir of [1, -1]) {
        const n = Math.max(1, Math.round((len / gap) * (0.6 + rnd() * 0.8))), sp = (0.22 + rnd() * 0.2) / len;
        for (let c = 0; c < n; c++) {
          const lane = k * GRID + dir * (ax ? -0.043 : 0.043), start = dir > 0 ? a0 : a1;
          cars.push({ x: ax ? lane : start, z: ax ? start : lane, yaw: ax ? (dir > 0 ? -Math.PI / 2 : Math.PI / 2) : dir > 0 ? 0 : Math.PI, s: 1, mx: ax ? 0 : dir * len, mz: ax ? dir * len : 0, ph: (c + rnd() * 0.7) / n, sp, col: CAR_COLS[Math.floor(rnd() * CAR_COLS.length)] });
        }
      }
    }
    movers(carGeo(), cars, true);
    // barcos: veleiros e lanchas em volta da ilha, devagar, balançando
    const boats = [[], []];
    for (let k = 0; k < 400 && boats[0].length + boats[1].length < (small ? 26 : 46); k++) {
      const x = (rnd() - 0.5) * (MW + 50), z = (rnd() - 0.5) * (MH + 46);
      const qx = Math.abs(x) - (MW / 2 + 9), qz = Math.abs(z) - (MH / 2 + 7), sdl = Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0);
      if (sdl < 4.8 || sdl > 15) continue;
      const a = rnd() * 6.283, L = 5 + rnd() * 6, kind = rnd() < 0.62 ? 0 : 1;
      boats[kind].push({ x, z, y: 0.02, yaw: -a, s: 2.2 + rnd() * 1.8, mx: Math.cos(a) * L, mz: Math.sin(a) * L, ph: rnd(), sp: (kind ? 0.03 : 0.012) / L * 4, bob: 0.012, col: rnd() < 0.75 ? [0.95, 0.95, 0.94] : rnd() < 0.5 ? [0.2, 0.3, 0.5] : [0.75, 0.2, 0.16] });
    }
    movers(boatGeo(0), boats[0], false);
    movers(boatGeo(1), boats[1], false);
    // ao largo: plataformas de petróleo; na costa oeste, o porto com um navio atracado; cargueiros cruzando devagar
    const still0 = (x, z, sc, yaw = 0) => ({ x, y: TOP, z, yaw, s: sc, mx: 0, mz: 0, ph: 0.5, sp: 0, col: [1, 1, 1] });
    const ex = MW / 2 + 9, ez = MH / 2 + 7;
    movers(sea.platform(), [still0(ex + 15, -ez * 0.35, 2.6), still0(ex + 20, ez * 0.3, 2.2, 0.8), still0(-ex * 0.3, -ez - 15, 2.4, 2.2)], false, true);
    const PX = -ex - 2.2, PZ = -4;
    movers(sea.pier(), [still0(PX, PZ, 1.5, -Math.PI / 2)], false, true);
    const ships = [still0(PX - 1.75, PZ + 1.9, 2.1, Math.PI / 2), still0(PX - 1.75, PZ - 1.9, 2.1, -Math.PI / 2)];
    for (const [x, z, a, L] of [[-ex - 18, 16, -1.35, 30], [ex + 9, 16, 1.75, 30], [-18, -ez - 9, 0.1, 34]]) ships.push({ x, y: TOP, z, yaw: -a, s: 2.2, mx: Math.cos(a) * L, mz: Math.sin(a) * L, ph: rnd(), sp: 0.012, bob: 0.008, col: [1, 1, 1] });
    movers(sea.cargo(), ships, false, true);
  }

  // ---------------------------------------------------------------- a vizinhança de cada negócio, a praia e a estátua
  const still = (x, z, sc = 1, yaw = 0, col = [1, 1, 1], y = TOP) => ({ x, y, z, yaw, s: sc, mx: 0, mz: 0, ph: 0.5, sp: 0, col });
  const walker = (x, z, sc, a, len, speed, col = [1, 1, 1]) => ({ x, y: TOP, z, yaw: -a, s: sc, mx: Math.cos(a) * len, mz: Math.sin(a) * len, ph: rnd(), sp: speed / len, col });
  const boardItems = [];
  const board = (word, x, y, z, w) => boardItems.push({ word, x, y, z, w });
  const GUYS = [[[0.85, 0.2, 0.18], [0.1, 0.12, 0.2]], [[0.2, 0.42, 0.8], [0.9, 0.9, 0.88]], [[0.96, 0.8, 0.2], [0.2, 0.4, 0.3]], [[0.95, 0.95, 0.93], [0.75, 0.2, 0.2]]];
  const crowd = GUYS.map(() => []);
  {
    const byTheme = {};
    for (const t of themed) (byTheme[t.th] || (byTheme[t.th] = [])).push(t);
    for (const [th, list] of Object.entries(byTheme)) {
      const def = thDef(th);
      movers(def.geo, list.map((t) => still(t.x, t.z, t.s || 1.02)), false, true);
      for (const t of list) {
        const sc = t.s || 1.02;
        for (const [word, bx, by, bz, bw] of def.boards || []) board(word, t.x + bx * sc, TOP + by * sc, t.z + bz * sc + 0.004, bw * sc);
        // crianças correndo no parquinho
        for (let k = 0; k < (def.kids || 0); k++) { const a = rnd() * 6.283; crowd[k % 4].push(walker(t.x + (rnd() - 0.5) * 0.7 * sc, t.z + (0.1 + rnd() * 0.35) * sc, 0.42 * sc, a, (0.35 + rnd() * 0.4) * sc, 0.3 + rnd() * 0.25)); }
      }
    }
    // a praia: barraquinhas com placa, guarda-sóis com cadeiras, toalhas, pranchas, banhistas e gente caminhando
    const KIOSK = ["COCO GELADO", "AÇAÍ", "PASTEL", "SORVETE", "CAIPIRINHA", "MILHO VERDE", "ÁGUA DE COCO", "TAPIOCA"];
    const kiosks = [[], []];
    let kk = 0;
    for (let x = -18; x <= 18; x += 4.5) {
      if (Math.abs(x) < 3) continue;
      const z = BEACH.z - 1.45, sc = 1.7;
      kiosks[kk % 2].push(still(x, z, sc));
      board(KIOSK[kk % KIOSK.length], x, TOP + 0.4 * sc, z + 0.2 * sc, 0.42 * sc);
      for (let c = 0; c < 3; c++) crowd[(kk + c) % 4].push(still(x - 0.3 + c * 0.3 + rnd() * 0.1, z + 0.5 + rnd() * 0.2, 0.7, Math.PI + (rnd() - 0.5)));
      kk++;
    }
    movers(beach.kiosk([0.85, 0.2, 0.16]), kiosks[0], false, true);
    movers(beach.kiosk([0.15, 0.4, 0.75]), kiosks[1], false, true);
    const UMB = [[0.85, 0.2, 0.16], [0.96, 0.8, 0.2], [0.15, 0.45, 0.8], [0.95, 0.95, 0.93]], umb = UMB.map(() => []), towels = [], boards2 = [[], []];
    for (let k = 0; k < 110; k++) {
      const x = -21 + rnd() * 42, z = BEACH.z - 0.7 + rnd() * 2.3;
      if (Math.abs(x) < 2.4 && z < BEACH.z + 1.2) continue;
      const r = rnd();
      if (r < 0.5) { umb[k % 4].push(still(x, z, 1.5, rnd() * 6.28)); if (rnd() < 0.7) crowd[k % 4].push(still(x + 0.25, z + 0.15, 0.7, rnd() * 6.28)); }
      else if (r < 0.75) towels.push(still(x, z, 1.4, rnd() * 6.28, [[0.9, 0.3, 0.3], [0.3, 0.6, 0.9], [0.98, 0.85, 0.3], [0.4, 0.8, 0.6]][k % 4]));
      else if (r < 0.85) boards2[k % 2].push(still(x, z, 1.5, rnd() * 6.28));
      else crowd[k % 4].push(still(x, z, 0.7, rnd() * 6.28));
    }
    UMB.forEach((c, k) => movers(beach.umbrella(c), umb[k], false, true));
    movers(beach.towel(), towels, false);
    movers(beach.board([0.95, 0.75, 0.2]), boards2[0], false, true);
    movers(beach.board([0.2, 0.7, 0.8]), boards2[1], false, true);
    // caminhando na beira e crianças correndo na areia
    for (let k = 0; k < 22; k++) crowd[k % 4].push(walker(-19 + rnd() * 30, BEACH.z + 1.5 + rnd() * 0.5, 0.7, rnd() < 0.5 ? 0 : Math.PI, 5 + rnd() * 5, 0.25 + rnd() * 0.2));
    for (let k = 0; k < 12; k++) crowd[k % 4].push(walker(-18 + rnd() * 36, BEACH.z + rnd() * 1.2, 0.45, rnd() * 6.28, 0.8 + rnd(), 0.5 + rnd() * 0.3));
    GUYS.forEach(([shirt, shorts], k) => movers(guyGeo(shirt, shorts, k % 2 ? [0.45, 0.32, 0.18] : [0.12, 0.09, 0.07]), crowd[k], false));
    // a estátua dourada do Felipe Passaro, no meio da praia, de frente para a cidade... e para quem chega pelo mar
    const SX0 = 0, SZ0 = BEACH.z - 0.2;
    movers(beach.pedestal(), [still(SX0, SZ0, 1)], false, true);
    const gold = new THREE.Mesh(beach.statue(), new THREE.MeshStandardMaterial({ color: 0xffc83a, metalness: 0.45, roughness: 0.32, envMapIntensity: 3, emissive: 0x7a5200, emissiveIntensity: 0.55 }));
    gold.position.set(SX0, TOP + 1.08, SZ0);
    gold.scale.setScalar(0.92);
    gold.castShadow = true;
    scene.add(gold);
    board("FELIPE PASSARO", SX0, TOP + 0.74, SZ0 + 0.585, 1.02);
    board("CRIADOR DESTE MUNDO", SX0, TOP + 0.46, SZ0 + 0.585, 0.86);
  }
  // placas: cada palavra numa célula de uma textura; cada placa é um retângulo que mostra a sua célula
  if (boardItems.length) {
    const words = [...new Set(boardItems.map((b) => b.word))], BC = 4, BR = Math.ceil(words.length / BC), CWD = 256, CHT = 64;
    const BG = { "FELIPE PASSARO": "#2a2110", "CRIADOR DESTE MUNDO": "#2a2110", "CERVEJA GELADA": "#c98a12", BAR: "#7a2318", POSTO: "#0d6b3c", "GASOLINA · ETANOL": "#0d6b3c", ESCOLA: "#1f4fa3", "FARMÁCIA": "#0e7a48", "PRONTO-SOCORRO": "#b3261e", AEROPORTO: "#1c2f4d", SUPERMERCADO: "#c2371f", "PEDÁGIO": "#c2671a" };
    const cv = document.createElement("canvas");
    cv.width = BC * CWD; cv.height = BR * CHT;
    const g = cv.getContext("2d");
    g.textAlign = "center"; g.textBaseline = "middle";
    words.forEach((w, c) => {
      const x = (c % BC) * CWD, y = Math.floor(c / BC) * CHT;
      g.fillStyle = BG[w] || "#17335f"; g.fillRect(x, y, CWD, CHT);
      g.strokeStyle = "rgba(255,255,255,.85)"; g.lineWidth = 3; g.strokeRect(x + 4, y + 4, CWD - 8, CHT - 8);
      g.fillStyle = w.startsWith("FELIPE") || w.startsWith("CRIADOR") ? "#f3cf6b" : "#fff";
      g.font = '800 34px "Inter", "Helvetica Neue", Arial, sans-serif';
      const k = Math.min(1, (CWD - 30) / Math.max(1, g.measureText(w).width));
      g.font = `800 ${Math.round(34 * k)}px "Inter", "Helvetica Neue", Arial, sans-serif`;
      g.fillText(w, x + CWD / 2, y + CHT / 2 + 2);
    });
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const geo = new THREE.PlaneGeometry(1, 0.25), off = new Float32Array(boardItems.length * 2);
    geo.setAttribute("aOff", new THREE.InstancedBufferAttribute(off, 2));
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6, side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => { sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nattribute vec2 aOff;").replace("#include <uv_vertex>", `#include <uv_vertex>\nvMapUv = uv * vec2(${(1 / BC).toFixed(5)}, ${(1 / BR).toFixed(5)}) + aOff;`); };
    const mesh = new THREE.InstancedMesh(geo, mat, boardItems.length), m4 = new THREE.Matrix4();
    boardItems.forEach((b, k) => {
      const c = words.indexOf(b.word);
      m4.compose(pos3.set(b.x, b.y, b.z), quat.identity(), scl.set(b.w, b.w, 1));
      mesh.setMatrixAt(k, m4);
      off.set([(c % BC) / BC, 1 - (Math.floor(c / BC) + 1) / BR], k * 2);
    });
    mesh.frustumCulled = false;
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
          float nearK = smoothstep(2.6, 5.5, px);
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
      void main(){ float a = smoothstep(0.0, 0.08, vT) * (0.4 + 0.6 * vT); vec3 c = mix(vec3(0.3, 0.38, 0.55), vec3(0.05, 0.5, 0.38), vW.y);
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
        float want = uMinPx * (0.75 + 1.1 * aRad / 0.11) * depth / uPx;
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
        float s = fract((t * vLen - uTime * 1.6) / max(1.2, min(2.4, vLen)) + vPhase);
        float comet = pow(s, 5.0);
        // miolo claro e borda escura: o cabo se lê tanto sobre o piso claro quanto sobre a sombra
        gl_FragColor = vec4(base * (0.5 + 0.8 * core) + vec3(1.0) * comet * 0.6, smoothstep(0.0, 0.02, t));
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
      // dono na praça da própria companhia: um traço no chão, do dono até o pé do prédio (sem arco); os demais, um
      // arco fino que pousa no topo
      const plaza = samePlaza(a, b);
      let curve;
      if (plaza) {
        const dx = X[b] - X[a], dz = Z[b] - Z[a], d = Math.hypot(dx, dz) || 1;
        const cut = isGround[b] ? Math.min(0.9, (Math.max(SX[b], SZ[b]) * 0.56) / d) : Math.min(0.5, R[b] / d), c0 = Math.min(0.3, (R[a] * 0.9) / d);
        curve = new THREE.LineCurve3(new THREE.Vector3(X[a] + dx * c0, TOP + 0.035, Z[a] + dz * c0), new THREE.Vector3(X[b] - dx * cut, TOP + 0.035, Z[b] - dz * cut));
      } else curve = linkCurve(a, b);
      const len = curve.getLength();
      const rad = (plaza ? 0.014 + 0.03 * Math.sqrt(clamp((pct > 0 ? pct : ctl ? 30 : 5) / 100, 0.01, 1)) : 0.022 + 0.05 * Math.sqrt(clamp((pct > 0 ? pct : ctl ? 50 : 8) / 100, 0.02, 1))) * (small ? 1.2 : 1);
      const g = new THREE.TubeGeometry(curve, plaza ? 1 : clamp(Math.round(len * 2.2), 14, 80), rad, plaza ? 4 : 6, false);
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
  function fitAll(dur = 1100) { flyToBox(-MW / 2 - 2, MW / 2 + 2, -MH / 2 - 4, MH / 2 + 6, { pad: 1.03, dur }); }
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
    // a câmera pode passear por toda a ilha e um pouco de mar
    const lx = MW / 2 + 16, lz = MH / 2 + 13;
    cam.x = clamp(cam.x, -lx, lx); cam.z = clamp(cam.z, -lz, lz);
    cam.tx = clamp(cam.tx, -lx, lx); cam.tz = clamp(cam.tz, -lz, lz);
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
    function pick(px, py, visible) {
    ndc.set((px / view.W) * 2 - 1, -(py / view.H) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    let best = -1, bestD = Infinity;
    const o3 = ray.ray.origin, d3 = ray.ray.direction;
    for (let i = 0; i < N; i++) {
      if (visible && !visible[i]) continue;
      // caixa da peça: o prédio inteiro; para os donos, uma caixa um pouco maior que a figura (fácil de acertar)
      const hx = isGround[i] ? SX[i] / 2 : R[i] * 0.85, hz = isGround[i] ? SZ[i] / 2 : R[i] * 0.85, y0 = Y[i], y1 = Y[i] + Hh[i] * (isGround[i] ? 1 : 1.25);
      let t0 = 0, t1 = bestD;
      const ax = [[o3.x, d3.x, X[i] - hx, X[i] + hx], [o3.y, d3.y, y0, y1], [o3.z, d3.z, Z[i] - hz, Z[i] + hz]];
      let hit = true;
      for (const [o, d, lo, hi] of ax) {
        if (Math.abs(d) < 1e-9) { if (o < lo || o > hi) { hit = false; break; } continue; }
        let a = (lo - o) / d, b = (hi - o) / d;
        if (a > b) { const t = a; a = b; b = t; }
        if (a > t0) t0 = a;
        if (b < t1) t1 = b;
        if (t0 > t1) { hit = false; break; }
      }
      if (hit) { bestD = t0; best = i; }
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
    groundU.uDim.value = dv; groundU.uFocusK.value = focus.v;
    instU.uTime.value = flowU.uTime.value = groundU.uTime.value = haloU.uTime.value = smokeU.uTime.value = moverU.uTime.value = clock.t;
    moverU.uDim.value = Math.max(dv, focus.v * 0.6); moverU.uRise.value = instU.uRise.value;
    if (rise.dur) { const k = clamp((now - rise.t0) / rise.dur, 0, 1); instU.uRise.value = 1.4 * k; shadowDirty = 2; if (k >= 1) { rise.dur = 0; instU.uRise.value = 1.4; } }
    const r01 = instU.uRise.value;
    lineU.uAlpha.value = smooth(0.8, 1.35, r01);
    haloU.uRise.value = smokeU.uRise.value = treeU.uRise.value = r01;
    // de longe os fios de participação quase somem (ficam os de controle); de perto aparecem todos
    lineU.uFar.value = 0.12 + 0.88 * (1 - smooth(24, 110, cam.d));
    const pxScale = (view.H * DPR) / (2 * Math.tan((camera.fov * Math.PI) / 360));
    haloU.uPx.value = flowU.uPx.value = smokeU.uPx.value = pxScale;
    if (tilt) tilt.uniforms.uAmt.value = 4.2 * DPR * (1 - smooth(22, 90, cam.d)) * (1 - 0.6 * Math.min(1, dim.v * 1.3));
    flowGrow = Math.min(1, flowGrow + real * 1.25);
    flowU.uGrow.value = easeInOut(flowGrow);
  }
  // regulador: se o aparelho não segura uns 26 quadros por segundo, baixa a resolução, depois tira o pós-processamento e por fim vai à resolução mínima
  const perf = { n: 0, acc: 0, last: 0, skip: 45, level: 0 };
  function govern(now) {
    const d = now - perf.last;
    perf.last = now;
    if (fixedQuality || perf.level >= 3 || d > 250 || d <= 0) return;
    if (perf.skip > 0) { perf.skip--; return; }
    perf.acc += d;
    if (++perf.n < 40) return;
    const avg = perf.acc / perf.n;
    perf.n = perf.acc = 0;
    if (avg <= 38) return;
    perf.level++;
    perf.skip = 20;
    if (perf.level === 1 && DPR <= 1.3) perf.level = 2;
    const setDpr = (v) => { DPR = v; renderer.setPixelRatio(DPR); if (composer) composer.setPixelRatio(DPR); flowU.uMinPx.value = DPR; resize(view.W, view.H); };
    if (perf.level === 1) setDpr(1.25);
    else if (perf.level === 2) { if (composer) { composer.dispose(); composer = null; } }
    else if (DPR > 1) setDpr(1);
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
    if (composer) { composer.setSize(view.W, view.H); tilt.uniforms.uRes.value.set(view.W * DPR, view.H * DPR); }
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
    setHighlight, setFlows, setVisible, setFocusPlate, intro, skipIntro, touch, themed,
    isInv, isGround, sky, shape, X, Y, Z, R, TOP, PLATE_H: 0,
    get scale() { return S; },
    // andamento da abertura, de 0 a 1 (1 = não há abertura em curso)
    get introK() { return cam.fly && cam.fly.intro ? (introWait ? 0 : clamp((performance.now() - cam.fly.t0) / cam.fly.dur, 0, 1)) : 1; },
    dispose() { renderer.dispose(); pmrem.dispose(); },
  };
}
