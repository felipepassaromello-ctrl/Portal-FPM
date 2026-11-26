/* Mundo das companhias — o mapa.
 *
 * Uma cidade à noite vista do alto. Cada setor é um bairro (scripts/mundo_mapa.mjs arruma os bairros como quarteirões,
 * todos à vista) e só o que é possuído fica no chão:
 *   companhia aberta  → arranha-céu de janelas acesas (altura pelo valor de mercado, coroa na cor do setor)
 *   capital fechado   → prédio baixo; controlada em comum → prédio baixo de teto verde
 * Os donos ficam onde está o que possuem:
 *   quem só tem uma companhia → na praça dela, em anéis em volta do prédio (pessoa = peão, holding = cubo,
 *                               gestora/fundo/governo = diamante)
 *   quem tem várias           → paira acima da cidade, sobre o centro do que possui, um andar mais alto a cada degrau
 * Toda ligação desce de quem é dono para o que é possuído: fios finos na visão geral (controle em verde) e, ao escolher
 * alguém, feixes com luz correndo no sentido dono → possuído, com ponta de seta e espessura pela fatia.
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

const GLSL_HASH = "float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }";

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
  // as cores dos setores são tons de pó (para o painel); como luz, à noite, precisam de mais saturação
  const _hsl = {};
  const vivid = (c, out = new THREE.Color()) => { out.set(c).getHSL(_hsl); return out.setHSL(_hsl.h, Math.min(1, _hsl.s * 1.55 + 0.12), _hsl.l * 0.86); };

  // ------------------------------------------------------------------ renderizador e cena
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  let DPR = Math.min(devicePixelRatio || 1, small ? 2 : 1.75);
  renderer.setPixelRatio(DPR);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  // a mesa da estrutura societária (tree.js) usa sombras neste mesmo renderizador; a cidade, não
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;
  const NIGHT = new THREE.Color(0x05070d);
  const scene = new THREE.Scene();
  scene.background = NIGHT;
  scene.fog = new THREE.Fog(0x070b16, 160, 420);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.3, 1400);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.22;

  // luar frio de um lado, um resto de pôr do sol do outro
  const moon = new THREE.DirectionalLight(0x9fc0ff, 1.5);
  moon.position.set(-60, 110, 40);
  scene.add(moon);
  const dusk = new THREE.DirectionalLight(0xffa972, 0.7);
  dusk.position.set(90, 30, -70);
  scene.add(dusk);
  scene.add(new THREE.HemisphereLight(0x33456b, 0x06070a, 0.9));

  // pós-processamento: o brilho das luzes (bloom). Se o aparelho não der conta, desenha direto.
  let composer = null, bloom = null;
  try {
    const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: small ? 2 : 4 });
    composer = new EffectComposer(renderer, rt);
    composer.setPixelRatio(DPR);
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.5, 0.55, 0.8);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  } catch { composer = null; }

  // ------------------------------------------------------------------ onde cada nó fica
  const shape = new Array(N);
  const X = new Float32Array(N), Y = new Float32Array(N), Z = new Float32Array(N), R = new Float32Array(N), Hh = new Float32Array(N);
  const SX = new Float32Array(N), SZ = new Float32Array(N); // largura e profundidade dos prédios
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

  // ------------------------------------------------------------------ o chão: a cidade acesa
  const plateRects = M.plates.map((p) => ({ ...p }));
  const groundTex = (() => {
    const CW = small ? 2048 : 4096, CH = Math.round((CW * M.H) / M.W), k = CW / M.W;
    const cv = document.createElement("canvas");
    cv.width = CW; cv.height = CH;
    const g = cv.getContext("2d");
    g.fillStyle = "#000"; g.fillRect(0, 0, CW, CH);
    const rgb = (c, a) => { const col = new THREE.Color(c); return `rgba(${Math.round(col.r * 255)},${Math.round(col.g * 255)},${Math.round(col.b * 255)},${a})`; };
    const rr = (x0, y0, x1, y1, r) => { g.beginPath(); g.roundRect(x0, y0, x1 - x0, y1 - y0, r); };
    // bairros: um tom do setor e o contorno aceso
    for (const p of M.plates) {
      const col = vivid(palette.sector(p.c)), r = 2.2 * k;
      rr(p.x0 * k, p.y0 * k, p.x1 * k, p.y1 * k, r);
      const gr = g.createLinearGradient(0, p.y0 * k, 0, p.y1 * k);
      gr.addColorStop(0, rgb(col, 0.17)); gr.addColorStop(1, rgb(col, 0.07));
      g.fillStyle = gr; g.fill();
    }
    // o clarão de cada terreno (mais forte nas maiores) e a praça onde ficam os donos
    g.globalCompositeOperation = "lighter";
    for (let i = 0; i < N; i++) {
      if (!isGround[i]) continue;
      const n = world.nodes[i], lot = M.lot[i] * k, x = M.x[i] * k, y = M.y[i] * k;
      const col = vivid(n.t === "c" ? palette.sector(n.c) : palette.kind(n));
      const pw = n.mc ? 0.16 + 0.34 * clamp(Math.log10(n.mc / 2e8) / 3.6, 0, 1) : 0.1;
      const rad = lot * (n.mc ? 2.1 : 1.5);
      const gr = g.createRadialGradient(x, y, 0, x, y, rad);
      gr.addColorStop(0, rgb(col, pw)); gr.addColorStop(0.45, rgb(col, pw * 0.4)); gr.addColorStop(1, rgb(col, 0));
      g.fillStyle = gr; g.beginPath(); g.arc(x, y, rad, 0, 6.2832); g.fill();
    }
    g.globalCompositeOperation = "source-over";
    for (let i = 0; i < N; i++) {
      if (!isGround[i]) continue;
      const lot = M.lot[i] * k * 0.93, x = M.x[i] * k, y = M.y[i] * k;
      g.beginPath(); g.arc(x, y, lot, 0, 6.2832);
      g.fillStyle = "rgba(255,255,255,0.028)"; g.fill();
      g.lineWidth = Math.max(1, k * 0.09); g.strokeStyle = "rgba(255,255,255,0.11)"; g.stroke();
    }
    for (const p of M.plates) {
      rr(p.x0 * k, p.y0 * k, p.x1 * k, p.y1 * k, 2.2 * k);
      g.lineWidth = Math.max(1.5, k * 0.22); g.strokeStyle = rgb(vivid(palette.sector(p.c)), 0.8); g.stroke();
    }
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
    return t;
  })();
  const groundU = {
    uTex: { value: groundTex }, uTime: { value: 0 }, uSize: { value: new THREE.Vector2(MW, MH) },
    uFocus: { value: new THREE.Vector4(0, 0, 0, 0) }, uFocusK: { value: 0 }, uDim: { value: 0 },
    uFogColor: { value: scene.fog.color }, uFogNear: { value: 100 }, uFogFar: { value: 400 }, uRise: { value: 1 },
  };
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), new THREE.ShaderMaterial({
    uniforms: groundU,
    vertexShader: "varying vec3 vWp; varying float vDepth; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; vec4 mv = viewMatrix * wp; vDepth = -mv.z; gl_Position = projectionMatrix * mv; }",
    fragmentShader: `uniform sampler2D uTex; uniform float uTime; uniform vec2 uSize; uniform vec4 uFocus; uniform float uFocusK; uniform float uDim; uniform float uRise;
      uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar; varying vec3 vWp; varying float vDepth;
      ${GLSL_HASH}
      // luzes miúdas da cidade: uma por célula, mais onde o bairro é mais denso
      float lights(vec2 p, float cell, float dens, float seed){
        vec2 q = p / cell; vec2 id = floor(q); vec2 f = fract(q) - 0.5;
        float h = hash21(id + seed);
        vec2 jit = (vec2(hash21(id + seed + 7.3), hash21(id + seed + 2.9)) - 0.5) * 0.5;
        float tw = 0.75 + 0.25 * sin(uTime * (0.6 + 2.0 * hash21(id + 5.1)) + h * 40.0);
        float on = step(1.0 - dens, h);
        float px = fwidth(q.x) + fwidth(q.y);
        float dot_ = smoothstep(0.2, 0.04, length(f - jit));
        return mix(on * dot_ * tw, dens * 0.07, smoothstep(0.5, 1.4, px));
      }
      void main(){
        vec2 uv = vec2(vWp.x / uSize.x + 0.5, 0.5 - vWp.z / uSize.y);
        float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        vec3 t = texture2D(uTex, uv).rgb * inside;
        float lum = dot(t, vec3(0.3, 0.59, 0.11));
        vec3 col = vec3(0.012, 0.016, 0.026);
        // malha de ruas
        vec2 g1 = abs(fract(vWp.xz / 1.6) - 0.5); float st = 1.0 - smoothstep(0.0, 0.02 + fwidth(vWp.x) * 0.9, min(g1.x, g1.y));
        col += t * (0.6 + 0.12 * st) * uRise;
        col += vec3(0.02, 0.026, 0.04) * st * inside * 0.25;
        vec2 g2 = abs(fract(vWp.xz / 0.4) - 0.5); float st2 = (1.0 - smoothstep(0.0, 0.03 + fwidth(vWp.x) * 3.0, min(g2.x, g2.y))) * (1.0 - smoothstep(0.02, 0.07, fwidth(vWp.x)));
        col += (vec3(0.006, 0.008, 0.013) + t * 0.035) * st2 * inside;
        float dens = clamp(lum * 3.2, 0.0, 0.85);
        vec3 warm = mix(vec3(1.0, 0.72, 0.42), normalize(t + 0.001) * 1.3, 0.35);
        col += warm * (lights(vWp.xz, 0.21, dens, 0.0) * 0.9 + lights(vWp.xz + 3.7, 0.55, dens * 0.6, 9.0) * 0.8) * uRise;
        // setor em foco: o resto apaga
        float inF = step(uFocus.x, vWp.x) * step(vWp.x, uFocus.z) * step(uFocus.y, vWp.z) * step(vWp.z, uFocus.w);
        col *= 1.0 - 0.8 * uFocusK * (1.0 - inF);
        col *= 1.0 - 0.62 * uDim;
        float fog = smoothstep(uFogNear, uFogFar, vDepth);
        col = mix(col, uFogColor, fog);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,
  }));
  ground.rotation.x = -Math.PI / 2;
  ground.renderOrder = -2;
  scene.add(ground);
  const plates = M.plates.map((p, j) => ({ ...p, j, col: new THREE.Color(palette.sector(p.c)), x0: toX(p.x0), x1: toX(p.x1), z0: toZ(p.y0), z1: toZ(p.y1) }));

  // ------------------------------------------------------------------ peças (instâncias)
  const instU = { uRise: { value: 1.4 }, uDim: { value: 0 }, uTime: { value: 0 }, uAcc: { value: ACC }, uFocus: { value: -1 } };
  const inst = new Array(N).fill(null); // nó → [malha, índice]
  const meshes = [];
  const VERT_HEAD = "attribute float aHL; attribute float aVis; attribute float aDelay; attribute float aPlate; attribute float aSeed; attribute vec3 aSize; attribute float aLit; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit;";
  const FRAG_HEAD = `varying vec3 vOp; varying vec3 vOn; varying vec3 vSize; varying float vHL; varying float vOther; varying float vSeed; varying float vLit; uniform float uDim; uniform float uTime; uniform vec3 uAcc;\n${GLSL_HASH}`;
  function instanced(name, geo, mat, idx, place, kind) {
    const n = Math.max(1, idx.length);
    const hl = new Float32Array(n), vis = new Float32Array(n).fill(1), delay = new Float32Array(n), plate = new Float32Array(n), seed = new Float32Array(n), size = new Float32Array(n * 3), lit = new Float32Array(n);
    const attr = (k, a, s = 1) => geo.setAttribute(k, new THREE.InstancedBufferAttribute(a, s));
    attr("aHL", hl); attr("aVis", vis); attr("aDelay", delay); attr("aPlate", plate); attr("aSeed", seed); attr("aSize", size, 3); attr("aLit", lit);
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, instU);
      sh.vertexShader = sh.vertexShader
        .replace("#include <common>", `#include <common>\n${VERT_HEAD}`)
        .replace("#include <begin_vertex>", `#include <begin_vertex>
          float rise = smoothstep(aDelay, aDelay + 0.35, uRise);
          vOp = position; vOn = normal; vSize = aSize; vHL = aHL; vSeed = aSeed; vLit = aLit;
          vOther = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          ${kind === "bld" ? "transformed.y *= max(0.001, rise * aVis); transformed.xz *= aVis;"
            // peças pequenas: crescem no lugar; as do céu (aLit = 1) balançam devagar
            : "transformed *= max(0.001, rise * aVis); transformed.y += aLit * 0.22 * sin(uTime * 0.9 + aSeed * 40.0) / max(0.05, aSize.x);"}`);
      sh.fragmentShader = sh.fragmentShader
        .replace("#include <common>", `#include <common>\n${FRAG_HEAD}`)
        .replace("#include <color_fragment>", `#include <color_fragment>
          float top = step(0.5, vOn.y);
          float isHL = step(0.01, vHL);
          float dimK = max(uDim * (1.0 - isHL), 0.8 * vOther * (1.0 - isHL));
          vec3 sec = diffuseColor.rgb;
          vec3 glow = vec3(0.0);
          ${kind === "bld" ? `
          // fachada de vidro escuro com janelas acesas; a coroa e o teto levam a cor do setor
          float side = abs(vOn.x) > 0.5 ? 1.0 : 0.0;
          float fw = mix(vSize.x, vSize.z, side);
          float along = mix(vOp.x, vOp.z, side) + 0.5;
          float hgt = vOp.y * vSize.y;
          float nx = max(2.0, floor(fw / 0.085)), ny = max(2.0, floor(vSize.y / 0.11));
          vec2 q = vec2(along * nx, vOp.y * ny);
          vec2 id = floor(q), f = fract(q);
          float face = vOn.x * 1.0 + vOn.z * 2.0;
          float h = hash21(id + vSeed * 71.0 + face * 13.0);
          float tw = hash21(id * 1.7 + vSeed * 31.0 + face);
          float flick = step(0.93, tw) * floor(uTime * 0.35 + tw * 9.0) * 0.37;
          float on = step(1.0 - vLit, fract(h + flick));
          float mask = smoothstep(0.1, 0.2, f.x) * smoothstep(0.9, 0.8, f.x) * smoothstep(0.2, 0.32, f.y) * smoothstep(0.86, 0.74, f.y);
          float px = max(fwidth(q.x), fwidth(q.y));
          float win = mix(on * mask, vLit * 0.2, smoothstep(0.4, 1.0, px)) * (1.0 - top);
          vec3 winCol = mix(vec3(1.0, 0.66, 0.32), vec3(0.62, 0.8, 1.0), step(0.78, hash21(id + vSeed * 3.1)));
          winCol = mix(winCol, sec, 0.22 + 0.4 * smoothstep(0.4, 1.0, px));
          float crownH = min(0.14, vSize.y * 0.12);
          float crown = smoothstep(vSize.y - crownH - 0.012, vSize.y - crownH, hgt) * (1.0 - top);
          float edge = max(abs(vOp.x), abs(vOp.z)) * 2.0;
          float roofRim = top * smoothstep(0.86, 0.95, edge);
          float foot = (1.0 - top) * (1.0 - smoothstep(0.0, 0.5, hgt));
          diffuseColor.rgb = mix(vec3(0.03, 0.04, 0.06), sec, 0.07 + 0.06 * top);
          float live = 1.0 - 0.93 * dimK;
          // luz de obstáculo no topo dos mais altos, piscando
          float beacon = top * smoothstep(0.1, 0.05, length(vOp.xz)) * step(3.2, vSize.y) * (0.35 + 0.65 * step(0.0, sin(uTime * 2.2 + vSeed * 40.0)));
          glow = (winCol * win * 0.78 + sec * (crown * 1.25 + roofRim * 0.95 + top * 0.04 + foot * 0.1) + vec3(1.0, 0.12, 0.08) * beacon * 2.2) * live;
          glow += uAcc * vHL * vHL * (0.1 + 1.3 * crown + 0.9 * roofRim + 0.25 * top + 0.25 * foot) * (0.9 + 0.1 * sin(uTime * 3.0));
          glow += sec * step(0.01, vHL) * (1.0 - vHL) * (0.5 * crown + 0.4 * roofRim);` : `
          // peças pequenas: luzes da cor do tipo
          float live = 1.0 - 0.92 * dimK;
          diffuseColor.rgb = sec * (0.35 + 0.3 * top);
          glow = sec * (0.42 + 0.38 * vLit) * live * (0.75 + 0.5 * smoothstep(-0.2, 1.0, vOn.y));
          glow += uAcc * vHL * vHL * 0.9 + sec * step(0.01, vHL) * 0.35;`}
          diffuseColor.rgb *= 1.0 - 0.85 * dimK;`)
        .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance += glow;");
    };
    const mesh = new THREE.InstancedMesh(geo, mat, n);
    const m4 = new THREE.Matrix4(), col = new THREE.Color(), sz = new THREE.Vector3();
    idx.forEach((i, k) => {
      inst[i] = [mesh, k];
      place(i, m4, col, sz);
      mesh.setMatrixAt(k, m4);
      mesh.setColorAt(k, col);
      plate[k] = M.plate[i];
      seed[k] = hash1(i * 3 + 1);
      size.set([sz.x, sz.y, sz.z], k * 3);
      lit[k] = sz.w || 0;
    });
    mesh.count = idx.length;
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.userData = { name, idx, hl, vis, delay, geo };
    mesh.frustumCulled = false;
    scene.add(mesh);
    meshes.push(mesh);
    return mesh;
  }
  const pos3 = new THREE.Vector3(), quat = new THREE.Quaternion(), scl = new THREE.Vector3();
  const boxGeo = () => { const g = new THREE.BoxGeometry(1, 1, 1); g.translate(0, 0.5, 0); return g; };
  // arranha-céu com recuo: o terço de cima é mais estreito
  const tierGeo = () => {
    const a = new THREE.BoxGeometry(1, 0.66, 1); a.translate(0, 0.33, 0);
    const b = new THREE.BoxGeometry(0.72, 0.34, 0.72); b.translate(0, 0.83, 0);
    return mergeGeometries([a, b]);
  };
  const litOf = (i) => (shape[i] === "tower" ? 0.38 + 0.3 * hash1(i + 3) : shape[i] === "block" ? 0.2 + 0.15 * hash1(i + 3) : 0.16);
  const placeBld = (i, m4, col, sz) => {
    m4.compose(pos3.set(X[i], TOP, Z[i]), quat.identity(), scl.set(SX[i], Hh[i], SZ[i]));
    const n = world.nodes[i];
    vivid(n.t === "c" ? palette.sector(n.c) : palette.kind(n), col);
    sz.set(SX[i], Hh[i], SZ[i]); sz.w = litOf(i);
  };
  const bldMat = () => new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.36, metalness: 0.4, envMapIntensity: 0.55 });
  const tall = [], low = [];
  for (let i = 0; i < N; i++) if (isGround[i]) (shape[i] === "tower" && Hh[i] > 3.2 ? tall : low).push(i);
  instanced("tall", tierGeo(), bldMat(), tall, placeBld, "bld");
  instanced("low", boxGeo(), bldMat(), low, placeBld, "bld");

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
    col.set(palette.kind(world.nodes[i]));
    sz.set(s, s, s); sz.w = sky[i] ? 1 : 0;
  };
  const smallMat = (flat) => new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35, metalness: 0.2, flatShading: !!flat });
  instanced("pawn", pawnGeo, smallMat(), by.pawn, placeSmall, "small");
  instanced("tile", cubeGeo, smallMat(), by.tile, placeSmall, "small");
  instanced("inv", invGeo, smallMat(true), by.inv, placeSmall, "small");

  // halos: um ponto de luz em cada dono (de longe as praças viram luzes da cidade; os do céu, estrelas)
  const haloIdx = [];
  for (let i = 0; i < N; i++) if (!isGround[i]) haloIdx.push(i);
  const haloU = { uDim: { value: 0 }, uPx: { value: 1 }, uRise: { value: 1 }, uTime: { value: 0 }, uFocus: { value: -1 } };
  const halo = (() => {
    const n = haloIdx.length, p = new Float32Array(n * 3), c = new Float32Array(n * 3), sz = new Float32Array(n), col = new THREE.Color();
    const g = new THREE.BufferGeometry();
    haloIdx.forEach((i, k) => {
      p.set([X[i], Y[i] + Hh[i] * 0.55, Z[i]], k * 3);
      col.set(palette.kind(world.nodes[i])); c.set([col.r, col.g, col.b], k * 3);
      sz[k] = sky[i] ? R[i] * 5.5 : R[i] * 3.4;
    });
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    g.setAttribute("aCol", new THREE.BufferAttribute(c, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(sz, 1));
    g.setAttribute("aHL", new THREE.BufferAttribute(new Float32Array(n), 1));
    g.setAttribute("aVis", new THREE.BufferAttribute(new Float32Array(n).fill(1), 1));
    g.setAttribute("aSky", new THREE.BufferAttribute(Float32Array.from(haloIdx, (i) => (sky[i] ? 1 : 0)), 1));
    g.setAttribute("aPlate", new THREE.BufferAttribute(Float32Array.from(haloIdx, (i) => M.plate[i]), 1));
    const m = new THREE.ShaderMaterial({
      uniforms: haloU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `attribute vec3 aCol; attribute float aSize; attribute float aHL; attribute float aVis; attribute float aSky; attribute float aPlate; uniform float uPx; uniform float uDim; uniform float uRise; uniform float uTime; uniform float uFocus; varying vec3 vCol; varying float vA;
        void main(){ vec3 p = position; p.y += aSky * 0.22 * sin(uTime * 0.9 + p.x * 3.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          float px = aSize * uPx / -mv.z;
          gl_PointSize = clamp(px, aSky > 0.5 ? 5.0 : 1.6, 90.0) * aVis;
          float isHL = step(0.01, aHL);
          float other = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          float dimK = max(uDim, 0.8 * other) * (1.0 - isHL);
          // de perto a peça aparece e o halo recua
          float near = smoothstep(26.0, 7.0, px);
          vA = (aSky > 0.5 ? 0.46 : mix(0.2, 0.75, near)) * (1.0 - 0.9 * dimK) * (1.0 + 0.9 * isHL) * aVis * smoothstep(0.7, 1.3, uRise);
          vCol = aCol; }`,
      fragmentShader: "varying vec3 vCol; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(max(0.0, 1.0 - d), 2.2); gl_FragColor = vec4(vCol * a * vA, 1.0); }",
    });
    const pts = new THREE.Points(g, m);
    pts.frustumCulled = false;
    pts.renderOrder = 2;
    scene.add(pts);
    return pts;
  })();
  const haloK = new Int32Array(N).fill(-1);
  haloIdx.forEach((i, k) => { haloK[i] = k; });

  // poeira de luz subindo devagar (dá ar e profundidade à cidade)
  const dustU = { uTime: { value: 0 }, uPx: { value: 1 }, uDim: { value: 0 } };
  if (!reduced) {
    const n = small ? 260 : 520, p = new Float32Array(n * 3), s = new Float32Array(n);
    for (let k = 0; k < n; k++) { p.set([(hash1(k) - 0.5) * MW * 1.15, hash1(k + 0.5) * 24, (hash1(k * 1.7 + 3) - 0.5) * MH * 1.2], k * 3); s[k] = hash1(k * 2.3 + 9); }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    g.setAttribute("aS", new THREE.BufferAttribute(s, 1));
    const pts = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: dustU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: "attribute float aS; uniform float uTime; uniform float uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y + uTime * (0.12 + 0.25 * aS), 24.0); p.x += sin(uTime * 0.2 + aS * 30.0) * 0.6; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.1 + 0.16 * aS) * uPx / -mv.z, 1.0, 5.0); vA = (0.1 + 0.25 * aS) * smoothstep(0.0, 2.0, p.y) * smoothstep(24.0, 18.0, p.y); }",
      fragmentShader: "uniform float uDim; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(0.75, 0.86, 1.0) * max(0.0, 1.0 - d) * vA * (1.0 - 0.6 * uDim), 1.0); }",
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
  const lineU = { uDim: { value: 0 }, uAlpha: { value: 1 }, uAcc: { value: ACC }, uFar: { value: 1 } };
  const lineMat = new THREE.ShaderMaterial({
    uniforms: lineU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: "attribute float aT; attribute vec2 aW; varying float vT; varying vec2 vW; void main(){ vT = aT; vW = aW; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
    // aW.x = força; aW.y = 1 controle, 0 participação
    fragmentShader: `uniform float uAlpha; uniform float uDim; uniform vec3 uAcc; uniform float uFar; varying float vT; varying vec2 vW;
      void main(){ float a = smoothstep(0.0, 0.08, vT) * (0.35 + 0.65 * vT); vec3 c = mix(vec3(0.55, 0.68, 1.0), mix(vec3(0.6, 0.85, 1.0), uAcc, 0.55), vW.y);
        gl_FragColor = vec4(c * a * vW.x * uAlpha * (1.0 - 0.94 * uDim) * mix(uFar, 1.0, 0.35 * vW.y), 1.0); }`,
  });
  let baseLines = null;
  function buildBaseLines(visible) {
    const P = [], T = [], Wt = [];
    const seg = (x0, y0, z0, x1, y1, z1, t0, t1, w, ctl) => { P.push(x0, y0, z0, x1, y1, z1); T.push(t0, t1); Wt.push(w, ctl, w, ctl); };
    for (const [s, t, , f] of world.edges || []) {
      if (visible && (!visible[s] || !visible[t])) continue;
      const ctl = f & 1;
      if (samePlaza(s, t)) {
        // na praça: um risco de luz no chão, do dono até o prédio
        const dx = X[t] - X[s], dz = Z[t] - Z[s], d = Math.hypot(dx, dz) || 1, cut = isGround[t] ? Math.min(0.92, (Math.max(SX[t], SZ[t]) * 0.5) / d) : 0;
        seg(X[s], TOP + 0.02, Z[s], X[t] - dx * cut, TOP + 0.02, Z[t] - dz * cut, 0.2, 1, ctl ? 0.3 : 0.11, ctl);
        continue;
      }
      const c = linkCurve(s, t), w = ctl ? 0.15 : 0.05;
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

  // feixes do destaque: tubos com luz correndo do dono para o possuído e ponta de seta na chegada
  const flowU = { uTime: { value: 0 }, uAcc: { value: ACC }, uGrow: { value: 1 }, uPx: { value: 1 }, uMinPx: { value: DPR } };
  const flowMat = new THREE.ShaderMaterial({
    uniforms: flowU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    // de longe o feixe não some: a espessura tem um mínimo em pixels (aRad = raio do tubo; aCenter = base da seta)
    vertexShader: `attribute float aPhase; attribute float aCtl; attribute float aLen; attribute float aHead; attribute float aRad; attribute vec3 aCenter; uniform float uPx; uniform float uMinPx;
      varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying float vHead; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vPhase = aPhase; vCtl = aCtl; vLen = aLen; vHead = aHead; vN = normalize(normalMatrix * normal);
        vec3 p = position;
        float depth = -(modelViewMatrix * vec4(aHead > 0.5 ? aCenter : position, 1.0)).z;
        float want = uMinPx * (0.9 + 1.3 * aRad / 0.11) * depth / uPx;
        if (aHead > 0.5) p = aCenter + (position - aCenter) * max(1.0, want / aRad);
        else p += normal * max(0.0, want - aRad);
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uTime; uniform vec3 uAcc; uniform float uGrow; varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying float vHead; varying vec3 vN; varying vec3 vV;
      void main(){
        vec3 base = mix(vec3(0.36, 0.55, 1.0), uAcc, vCtl);
        if (vHead > 0.5) { if (uGrow < 0.97) discard; gl_FragColor = vec4(base * 1.5 + 0.2, 1.0); return; }
        float t = vUv.x;
        if (t > uGrow) discard;
        float ends = smoothstep(0.0, 0.02, t);
        float core = pow(abs(dot(vN, vV)), 1.2);
        // cometas a cada 2,4 unidades, correndo para o possuído: cabeça clara, cauda que some para trás
        float s = fract((t * vLen - uTime * 2.6) / 2.4 + vPhase);
        float comet = pow(s, 5.0);
        vec3 c = base * (0.4 + 0.5 * core) + (base * 0.9 + 0.35) * comet * 1.5;
        gl_FragColor = vec4(c * ends, 1.0);
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
    const geos = [];
    list.slice(0, 320).forEach(([a, b, ctl, pct], e) => {
      const curve = linkCurve(a, b);
      const len = curve.getLength();
      const rad = (0.035 + 0.075 * Math.sqrt(clamp((pct > 0 ? pct : ctl ? 50 : 8) / 100, 0.02, 1))) * (small ? 1.25 : 1);
      const g = new THREE.TubeGeometry(curve, clamp(Math.round(len * 2.2), 14, 80), rad, 6, false);
      const center = (gg, x, y, z) => { const n = gg.attributes.position.count, a = new Float32Array(n * 3); for (let k = 0; k < n; k++) a.set([x, y, z], k * 3); gg.setAttribute("aCenter", new THREE.BufferAttribute(a, 3)); };
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
    if (levels) for (const [i, lv] of levels) { const it = inst[i]; if (!it) continue; it[0].userData.hl[it[1]] = lv; if (haloK[i] >= 0) hh.array[haloK[i]] = lv; }
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
  }
  const rise = { t0: 0, dur: 0 };
  // abertura: a cidade acende do centro para fora enquanto a câmera sobe de perto do maior prédio até a visão geral
  function intro(dur = 5200) {
    let big = 0;
    for (let i = 0; i < N; i++) if (Hh[i] > Hh[big] && isGround[i]) big = i;
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
    introWait = 3;
  }
  // a abertura só começa a contar quando a cena já está na tela (os primeiros quadros compilam os shaders)
  let introWait = 0;
  function skipIntro() {
    if (cam.fly && cam.fly.intro) { const f = cam.fly; cam.fly = null; cam.tx = f.b.x; cam.tz = f.b.z; cam.td = f.b.d; cam.yaw = 0; }
    if (rise.dur) { rise.t0 = Math.min(rise.t0, performance.now() - rise.dur * 0.7); }
  }

  // ------------------------------------------------------------------ câmera: arrastar move, rolar aproxima
  // inset: o que os painéis, a barra de cima e a legenda cobrem em cada lado (o mapa se enquadra no que sobra)
  const view = { W: 1, H: 1, offX: 0, offY: 0, toX: 0, toY: 0, inset: { l: 0, r: 0, t: 0, b: 0 } };
  const cam = { x: 0, z: 0, d: 160, tx: 0, tz: 0, td: 160, vx: 0, vz: 0, tilt: 0.5, yaw: 0, sway: 0, idleAt: performance.now(), fly: null };
  const D_MIN = 7;
  let D_MAX = Math.max(260, MH * 2.4);
  // de longe quase de cima (tudo à vista); de perto a câmera deita e os prédios ganham altura
  const tiltFor = (d) => 0.5 + 0.48 * (1 - smooth(16, 120, d));
  function placeCamera() {
    cam.tilt = tiltFor(cam.d);
    const yaw = cam.yaw + cam.sway, st = Math.sin(cam.tilt) * cam.d;
    camera.position.set(cam.x + Math.sin(yaw) * st, Math.cos(cam.tilt) * cam.d, cam.z + Math.cos(yaw) * st);
    camera.up.set(0, 1, 0);
    camera.lookAt(cam.x, 0, cam.z);
    scene.fog.near = cam.d * 1.05; scene.fog.far = cam.d * 3.4;
    groundU.uFogNear.value = scene.fog.near; groundU.uFogFar.value = scene.fog.far;
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
  function fitAll(dur = 1100) { flyToBox(-MW / 2, MW / 2, -MH / 2 - 3, MH / 2, { pad: 1.03, dur }); }
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
    cam.x = clamp(cam.x, -MW * 0.6, MW * 0.6); cam.z = clamp(cam.z, -MH * 0.7, MH * 0.75);
    cam.tx = clamp(cam.tx, -MW * 0.6, MW * 0.6); cam.tz = clamp(cam.tz, -MH * 0.7, MH * 0.75);
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
    cam.swayK = lerp(cam.swayK || 0, idle, Math.min(1, dt * 1.5));
    cam.sway = Math.sin(clock.t * 0.16) * 0.075 * cam.swayK;
    if (Math.abs(view.toX - view.offX) + Math.abs(view.toY - view.offY) > 0.3) {
      const k = 1 - Math.exp(-real * 7);
      applyOffset(view.offX + (view.toX - view.offX) * k, view.offY + (view.toY - view.offY) * k);
    }
    placeCamera();
    camera.updateMatrixWorld();
    dim.v += (dim.to - dim.v) * (1 - Math.exp(-real * 5));
    focus.v += (focus.to - focus.v) * (1 - Math.exp(-real * 5));
    instU.uDim.value = haloU.uDim.value = Math.min(1, dim.v * 1.25);
    lineU.uDim.value = Math.max(Math.min(1, dim.v * 1.3), focus.v * 0.7);
    groundU.uDim.value = dim.v; groundU.uFocusK.value = focus.v; dustU.uDim.value = dim.v;
    instU.uTime.value = flowU.uTime.value = groundU.uTime.value = haloU.uTime.value = dustU.uTime.value = clock.t;
    if (rise.dur) { const k = clamp((now - rise.t0) / rise.dur, 0, 1); instU.uRise.value = 1.4 * k; if (k >= 1) { rise.dur = 0; instU.uRise.value = 1.4; } }
    const r01 = instU.uRise.value;
    lineU.uAlpha.value = smooth(0.8, 1.35, r01);
    haloU.uRise.value = r01; groundU.uRise.value = smooth(0.0, 0.9, r01 + 0.15);
    // de longe os fios de participação quase somem (ficam os de controle); de perto aparecem todos
    lineU.uFar.value = 0.3 + 0.7 * (1 - smooth(30, 120, cam.d));
    const pxScale = (view.H * DPR) / (2 * Math.tan((camera.fov * Math.PI) / 360));
    haloU.uPx.value = dustU.uPx.value = flowU.uPx.value = pxScale;
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
    get dimV() { return dim.v; },
    // andamento da abertura, de 0 a 1 (1 = não há abertura em curso)
    get introK() { return cam.fly && cam.fly.intro ? (introWait ? 0 : clamp((performance.now() - cam.fly.t0) / cam.fly.dur, 0, 1)) : 1; },
    dispose() { renderer.dispose(); pmrem.dispose(); },
  };
}
