/* Mundo das companhias — o mapa.
 *
 * Um tabuleiro escuro visto quase de cima. Cada setor é um bloco elevado com o nome escrito (scripts/mundo_mapa.mjs
 * arruma os blocos como quarteirões, todos à vista), e cada tipo de entidade tem forma própria:
 *   companhia aberta  → prédio (altura pelo valor de mercado, telhado na cor do setor)
 *   capital fechado   → bloco baixo
 *   holding/empresa   → placa quadrada; controlada em comum → placa verde
 *   pessoa física     → peão
 *   investidor institucional (gestora, fundo de pensão, governo) → diamante, no bloco dos investidores
 * As ligações de controle aparecem como arcos finos; ao selecionar, viram cabos com energia correndo de quem é dono
 * para quem é possuído. Arrastar move o mapa (norte sempre para cima), rolar ou pinçar aproxima.
 *
 * Este módulo só desenha e responde a perguntas de geometria; a interface fica em main.js.
 */
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const easeInOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
export const nodeRadius = (n) => (n.t === "c" ? (n.mc ? 1.8 + 1.25 * Math.log10(1 + n.mc / 1e8) : 1.8) : n.t === "s" ? 1.2 : n.v ? 1 + 0.8 * Math.log10(1 + n.v / 1e8) : 1);

// tipo visual de cada nó (forma no mapa e na legenda)
export function shapeOf(n, isInv) {
  if (isInv) return "inv";
  if (n.t === "c") return n.mc ? "tower" : "block";
  if (n.t === "p") return "pawn";
  if (n.t === "s") return "sub";
  return "tile";
}

export function createMap(canvas, world, opts = {}) {
  const { palette, accent = "#3cf0b4" } = opts;
  const N = world.nodes.length;
  const M = world.mapa;
  const small = Math.min(innerWidth, innerHeight) < 700;
  const ACC = new THREE.Color(accent);
  const S = 100 / M.W; // unidades do mapa → unidades da cena (o mapa tem 100 de largura)
  const MW = 100, MH = M.H * S;
  const PLATE_H = 0.55;
  const toX = (x) => x * S - MW / 2, toZ = (y) => y * S - MH / 2;

  // ------------------------------------------------------------------ renderizador e cena
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  // o mapa é parado: a sombra só é refeita quando algo muda (abertura, camadas), não a cada quadro
  renderer.shadowMap.autoUpdate = false;
  let shadowDirty = true;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05070b);
  scene.fog = new THREE.Fog(0x05070b, 160, 420);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.5, 1200);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.42;

  // luz: principal do noroeste com sombra macia, preenchimento frio e céu
  const key = new THREE.DirectionalLight(0xfff3e6, 2.3);
  key.position.set(-60, 120, -40);
  key.castShadow = true;
  key.shadow.mapSize.set(small ? 2048 : 4096, small ? 2048 : 4096);
  Object.assign(key.shadow.camera, { left: -MW * 0.62, right: MW * 0.62, top: MH * 0.75, bottom: -MH * 0.75, near: 20, far: 320 });
  key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03; key.shadow.radius = 3;
  scene.add(key, key.target);
  const fill = new THREE.DirectionalLight(0x9db8ff, 0.45);
  fill.position.set(70, 60, 90);
  scene.add(fill);
  scene.add(new THREE.HemisphereLight(0xb8c6dd, 0x0b0d12, 0.42));

  // ------------------------------------------------------------------ a mesa e os blocos dos setores
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x0b0e13, roughness: 0.95, envMapIntensity: 0.2 });
  floorMat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vWp;").replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvWp = (modelMatrix * vec4(transformed, 1.0)).xyz;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vWp;").replace("#include <color_fragment>", `#include <color_fragment>
      vec2 g = abs(fract(vWp.xz / 2.0 + 0.5) - 0.5) * 2.0;
      float dotk = 1.0 - smoothstep(0.045, 0.085, length(g));
      diffuseColor.rgb += vec3(0.05, 0.06, 0.075) * dotk;
      diffuseColor.rgb *= 1.0 - 0.55 * smoothstep(60.0, 160.0, length(vWp.xz));`);
  };
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(700, 700), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  function roundedRect(w, h, r) {
    const s = new THREE.Shape();
    s.moveTo(-w / 2 + r, -h / 2); s.lineTo(w / 2 - r, -h / 2); s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
    s.lineTo(w / 2, h / 2 - r); s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); s.lineTo(-w / 2 + r, h / 2);
    s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r); s.lineTo(-w / 2, -h / 2 + r); s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
    return s;
  }
  const plateU = { uDimOthers: { value: 0 }, uFocus: { value: -1 } };
  const plates = M.plates.map((p, j) => {
    const w = (p.x1 - p.x0) * S, h = (p.y1 - p.y0) * S, cx = toX((p.x0 + p.x1) / 2), cz = toZ((p.y0 + p.y1) / 2);
    const r = Math.min(1.2, Math.min(w, h) * 0.06);
    const col = new THREE.Color(p.c === "inv" ? palette.investor : palette.sector(p.c));
    const geo = new THREE.ExtrudeGeometry(roundedRect(w, h, r), { depth: PLATE_H, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 3, curveSegments: 8 });
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(0x141920).lerp(col, 0.055), roughness: 0.82, metalness: 0.05, envMapIntensity: 0.35 });
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, plateU, { uMe: { value: j } });
      sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vWp; varying vec3 vNo;").replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvWp = (modelMatrix * vec4(transformed, 1.0)).xyz; vNo = normal;");
      sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vWp; varying vec3 vNo; uniform float uDimOthers; uniform float uFocus; uniform float uMe;").replace("#include <color_fragment>", `#include <color_fragment>
        // grade fina de pontos no tampo, como uma placa de circuito
        vec2 g = abs(fract(vWp.xz / 1.0 + 0.5) - 0.5) * 2.0;
        float dotk = (1.0 - smoothstep(0.06, 0.12, length(g))) * step(0.5, vNo.y);
        diffuseColor.rgb += vec3(0.035, 0.04, 0.05) * dotk;
        float other = uFocus >= 0.0 && abs(uFocus - uMe) > 0.5 ? 1.0 : 0.0;
        diffuseColor.rgb *= 1.0 - 0.5 * uDimOthers * other;`);
    };
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(cx, 0, cz);
    mesh.receiveShadow = true; mesh.castShadow = false;
    scene.add(mesh);
    // filete aceso na borda do tampo, na cor do setor
    const outer = roundedRect(w + 0.1, h + 0.1, r + 0.05), hole = roundedRect(w - 0.22, h - 0.22, Math.max(0.05, r - 0.11));
    outer.holes.push(new THREE.Path(hole.getPoints(48)));
    const rimGeo = new THREE.ShapeGeometry(outer, 12);
    rimGeo.rotateX(-Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
    rim.position.set(cx, PLATE_H + 0.1, cz);
    scene.add(rim);
    return { ...p, j, mesh, rim, col, w, h, cx, cz, x0: toX(p.x0), x1: toX(p.x1), z0: toZ(p.y0), z1: toZ(p.y1) };
  });
  const TOP = PLATE_H + 0.08;

  // ------------------------------------------------------------------ onde cada nó fica
  const isInv = new Uint8Array(N);
  // escala do diamante de um investidor: do tamanho da sua casa na grade do bloco (o maior ocupa a casa)
  const invScale = (i) => R[i] * (0.32 + 0.22 * Math.sqrt(clamp(Math.log10(1 + (world.nodes[i].v || 0) / 1e8) / 4, 0, 1)));
  M.plates.forEach((p, j) => { if (p.c === "inv") for (let i = 0; i < N; i++) if (M.plate[i] === j) isInv[i] = 1; });
  const X = new Float32Array(N), Z = new Float32Array(N), R = new Float32Array(N), Hh = new Float32Array(N);
  const shape = new Array(N);
  for (let i = 0; i < N; i++) {
    const n = world.nodes[i];
    X[i] = toX(M.x[i]); Z[i] = toZ(M.y[i]);
    R[i] = nodeRadius(n) * (M.pad || 1.5) * S; // raio do "terreno" do nó
    shape[i] = shapeOf(n, isInv[i]);
    if (shape[i] === "tower") Hh[i] = 0.7 + 7.6 * Math.pow(clamp(Math.log10(n.mc / 2e8) / Math.log10(4e3), 0, 1), 1.45);
    else if (shape[i] === "block") Hh[i] = 0.42;
    else if (shape[i] === "inv") Hh[i] = 2.8 * invScale(i); // diamante (altura 2,3) flutuando 0,5 acima, tudo na escala da peça
    else if (shape[i] === "pawn") Hh[i] = 0.42;
    else Hh[i] = 0.14;
  }

  // ------------------------------------------------------------------ peças (instâncias)
  const instU = { uRise: { value: 1 }, uDim: { value: 0 }, uTime: { value: 0 }, uAcc: { value: ACC }, uFocus: { value: -1 } };
  const kindOf = new Int32Array(N).fill(-1);
  const meshes = [];
  function instanced(name, geo, mat, idx, place, { roof = false, lift = 0 } = {}) {
    const n = Math.max(1, idx.length);
    const hl = new Float32Array(n), vis = new Float32Array(n).fill(1), delay = new Float32Array(n), plate = new Float32Array(n);
    geo.setAttribute("aHL", new THREE.InstancedBufferAttribute(hl, 1));
    geo.setAttribute("aVis", new THREE.InstancedBufferAttribute(vis, 1));
    geo.setAttribute("aDelay", new THREE.InstancedBufferAttribute(delay, 1));
    geo.setAttribute("aPlate", new THREE.InstancedBufferAttribute(plate, 1));
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, instU);
      sh.vertexShader = sh.vertexShader
        .replace("#include <common>", "#include <common>\nattribute float aHL; attribute float aVis; attribute float aDelay; attribute float aPlate; uniform float uRise; uniform float uTime; uniform float uFocus; varying float vY; varying float vTopN; varying float vHL; varying float vOther;")
        .replace("#include <begin_vertex>", `#include <begin_vertex>
          float rise = smoothstep(aDelay, aDelay + 0.35, uRise);
          vY = position.y; vTopN = normal.y; vHL = aHL;
          vOther = uFocus >= 0.0 && abs(uFocus - aPlate) > 0.5 ? 1.0 : 0.0;
          transformed.y *= max(0.001, rise * aVis);
          transformed.xz *= aVis;
          ${lift ? `transformed.y += ${lift.toFixed(2)} * aVis + 0.18 * sin(uTime * 1.3 + aDelay * 40.0) * aVis;` : ""}`);
      sh.fragmentShader = sh.fragmentShader
        .replace("#include <common>", "#include <common>\nvarying float vY; varying float vTopN; varying float vHL; varying float vOther; uniform float uDim; uniform float uTime; uniform vec3 uAcc;")
        .replace("#include <color_fragment>", `#include <color_fragment>
          float top = step(0.5, vTopN);
          ${roof ? `vec3 secCol = diffuseColor.rgb;
          diffuseColor.rgb = mix(vec3(0.86, 0.87, 0.89), secCol, top);
          diffuseColor.rgb *= mix(0.62, 1.0, smoothstep(0.0, 0.3, vY));` : ""}
          float isHL = step(0.01, vHL);
          float dimK = max(uDim * (1.0 - isHL), 0.75 * vOther * (1.0 - isHL));
          // o que não está em destaque fica escuro e sem cor, para o destaque saltar
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))), 0.6 * dimK);
          diffuseColor.rgb *= 1.0 - 0.84 * dimK;
          diffuseColor.rgb = mix(diffuseColor.rgb, uAcc, vHL * (0.25 + 0.6 * top));`)
        .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
          totalEmissiveRadiance += uAcc * vHL * (0.10 + 0.5 * top) * (0.85 + 0.15 * sin(uTime * 3.0));`);
    };
    const mesh = new THREE.InstancedMesh(geo, mat, n);
    const m4 = new THREE.Matrix4(), col = new THREE.Color();
    idx.forEach((i, k) => {
      kindOf[i] = k;
      place(i, m4, col);
      mesh.setMatrixAt(k, m4);
      mesh.setColorAt(k, col);
      plate[k] = M.plate[i];
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
  const by = { tower: [], block: [], tile: [], sub: [], pawn: [], inv: [] };
  for (let i = 0; i < N; i++) by[shape[i]].push(i);
  const pos3 = new THREE.Vector3(), quat = new THREE.Quaternion(), scl = new THREE.Vector3();
  const boxGeo = () => { const g = new THREE.BoxGeometry(1, 1, 1); g.translate(0, 0.5, 0); return g; };

  const towers = instanced("tower", boxGeo(), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.42, metalness: 0.05 }), by.tower, (i, m4, col) => {
    const s = R[i] * 1.05;
    m4.compose(pos3.set(X[i], TOP, Z[i]), quat.identity(), scl.set(s, Hh[i], s));
    col.set(palette.sector(world.nodes[i].c));
  }, { roof: true });
  towers.castShadow = true; towers.receiveShadow = true;
  const blocks = instanced("block", boxGeo(), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55 }), by.block, (i, m4, col) => {
    const s = R[i] * 1.0;
    m4.compose(pos3.set(X[i], TOP, Z[i]), quat.identity(), scl.set(s, Hh[i], s));
    col.set(palette.sector(world.nodes[i].c)).lerp(new THREE.Color(0x9aa3ad), 0.35);
  }, { roof: true });
  blocks.castShadow = true; blocks.receiveShadow = true;
  const tileMat = () => new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 });
  const tiles = instanced("tile", boxGeo(), tileMat(), by.tile, (i, m4, col) => {
    const s = R[i] * 0.7;
    m4.compose(pos3.set(X[i], TOP, Z[i]), quat.identity(), scl.set(s, Hh[i], s));
    col.set(palette.kind(world.nodes[i]));
  });
  tiles.receiveShadow = true;
  const subs = instanced("sub", boxGeo(), tileMat(), by.sub, (i, m4, col) => {
    const s = R[i] * 0.75;
    m4.compose(pos3.set(X[i], TOP, Z[i]), quat.identity(), scl.set(s, Hh[i], s));
    col.set(palette.kind(world.nodes[i]));
  });
  subs.receiveShadow = true;
  const pawnGeo = (() => {
    // poucos polígonos: são ~3 mil peões e de perto ninguém conta os lados
    const base = new THREE.CylinderGeometry(0.42, 0.5, 0.2, 9, 1, false); base.translate(0, 0.1, 0);
    const body = new THREE.CylinderGeometry(0.16, 0.32, 0.55, 9, 1, true); body.translate(0, 0.47, 0);
    const head = new THREE.SphereGeometry(0.24, 9, 6); head.translate(0, 0.86, 0);
    const g = mergeGeometries([base, body, head]);
    g.scale(1, 1 / 1.1, 1);
    return g;
  })();
  const pawns = instanced("pawn", pawnGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.45, metalness: 0.05 }), by.pawn, (i, m4, col) => {
    const s = R[i] * 0.62;
    m4.compose(pos3.set(X[i], TOP, Z[i]), quat.identity(), scl.set(s, s * 1.1, s));
    col.set(palette.kind(world.nodes[i]));
  });
  pawns.castShadow = true;
  const invGeo = (() => { const g = new THREE.OctahedronGeometry(1, 0); g.scale(0.8, 1.15, 0.8); g.translate(0, 1.15, 0); return g; })();
  const invs = instanced("inv", invGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25, metalness: 0.35, flatShading: true }), by.inv, (i, m4, col) => {
    const n = world.nodes[i];
    const s = invScale(i);
    m4.compose(pos3.set(X[i], TOP, Z[i]), quat.identity(), scl.set(s, s, s));
    col.set(palette.kind(n));
  }, { lift: 0.5 });
  invs.castShadow = true;

  // ------------------------------------------------------------------ arcos e cabos
  const ARC_SEG = 28;
  const topY = (i) => TOP + Hh[i];
  function arcPoints(a, b, out) {
    const ax = X[a], az = Z[a], bx = X[b], bz = Z[b];
    const ya = topY(a), yb = topY(b);
    const d = Math.hypot(bx - ax, bz - az);
    const h = 0.6 + d * 0.22;
    for (let k = 0; k <= ARC_SEG; k++) {
      const t = k / ARC_SEG;
      out[k * 3] = ax + (bx - ax) * t;
      out[k * 3 + 1] = ya + (yb - ya) * t + h * Math.sin(Math.PI * t);
      out[k * 3 + 2] = az + (bz - az) * t;
    }
    return out;
  }
  const arcU = { uDim: { value: 0 }, uAlpha: { value: 1 } };
  const arcMat = new THREE.ShaderMaterial({
    uniforms: arcU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: "attribute float aT; attribute float aW; varying float vT; varying float vW; void main(){ vT = aT; vW = aW; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
    fragmentShader: `uniform float uAlpha; uniform float uDim; varying float vT; varying float vW;
      void main(){ float a = smoothstep(0.0, 0.1, vT) * smoothstep(1.0, 0.9, vT); gl_FragColor = vec4(vec3(0.78, 0.85, 1.0) * a * vW * uAlpha * (1.0 - 0.9 * uDim), 1.0); }`,
  });
  let baseArcs = null;
  function buildBaseArcs(visible) {
    // na visão geral: só as ligações de controle para companhias e controladas, dentro de cada bloco (de holdings, só as longas)
    const list = [];
    for (const [s, t, , f] of world.edges || []) {
      if (!(f & 1) || (visible && (!visible[s] || !visible[t]))) continue;
      // só dentro do mesmo bloco: as ligações entre setores aparecem ao escolher alguém (senão viram um emaranhado)
      if (M.plate[s] !== M.plate[t]) continue;
      const nt = world.nodes[t], ns = world.nodes[s];
      if (nt.t !== "c" && nt.t !== "s") continue;
      const d = Math.hypot(X[s] - X[t], Z[s] - Z[t]);
      if (ns.t !== "c" && d < 6) continue;
      list.push([s, t, 0.1 + 0.3 * smooth(2, 40, d)]);
    }
    const pos = new Float32Array(list.length * ARC_SEG * 6), at = new Float32Array(list.length * ARC_SEG * 2), aw = new Float32Array(list.length * ARC_SEG * 2);
    const pts = new Float32Array((ARC_SEG + 1) * 3);
    list.forEach(([a, b, w], e) => {
      arcPoints(a, b, pts);
      for (let k = 0; k < ARC_SEG; k++) {
        const o = (e * ARC_SEG + k) * 2;
        pos.set(pts.subarray(k * 3, k * 3 + 6), o * 3);
        at[o] = k / ARC_SEG; at[o + 1] = (k + 1) / ARC_SEG;
        aw[o] = aw[o + 1] = w;
      }
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aT", new THREE.BufferAttribute(at, 1));
    g.setAttribute("aW", new THREE.BufferAttribute(aw, 1));
    if (baseArcs) { baseArcs.geometry.dispose(); baseArcs.geometry = g; }
    else { baseArcs = new THREE.LineSegments(g, arcMat); baseArcs.frustumCulled = false; scene.add(baseArcs); }
  }
  buildBaseArcs(null);

  const flowU = { uTime: { value: 0 }, uAcc: { value: ACC }, uGrow: { value: 1 } };
  const flowMat = new THREE.ShaderMaterial({
    uniforms: flowU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `attribute float aPhase; attribute float aCtl; attribute float aLen; varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vPhase = aPhase; vCtl = aCtl; vLen = aLen; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uTime; uniform vec3 uAcc; uniform float uGrow; varying vec2 vUv; varying float vPhase; varying float vCtl; varying float vLen; varying vec3 vN; varying vec3 vV;
      void main(){
        float t = vUv.x;
        if (t > uGrow) discard;
        float ends = smoothstep(0.0, 0.03, t) * smoothstep(1.0, 0.97, t);
        float core = pow(abs(dot(vN, vV)), 1.3);
        float w = 1.6 / max(2.0, vLen);
        float pulse = 0.0;
        for (int k = 0; k < 2; k++) { float c = fract(uTime * 3.0 / max(4.0, vLen) + vPhase + float(k) * 0.5); float d = c - t; pulse += smoothstep(w, 0.0, abs(d)) * (d < 0.0 ? 0.4 : 1.0); }
        vec3 base = mix(vec3(0.40, 0.48, 0.60), uAcc, vCtl);
        vec3 c = base * (0.25 + 0.45 * core) + mix(vec3(0.85, 0.92, 1.0), uAcc * 1.3 + 0.15, vCtl) * pulse * (0.5 + 0.5 * core);
        gl_FragColor = vec4(c * ends, 1.0);
      }`,
  });
  const flows = new THREE.Mesh(new THREE.BufferGeometry(), flowMat);
  flows.frustumCulled = false;
  scene.add(flows);
  let flowGrow = 1;
  function setFlows(list) {
    flows.geometry.dispose();
    if (!list.length) { flows.geometry = new THREE.BufferGeometry(); return; }
    const pts = new Float32Array((ARC_SEG + 1) * 3);
    const geos = list.slice(0, 300).map(([a, b, ctl], e) => {
      arcPoints(a, b, pts);
      const curve = new THREE.CatmullRomCurve3(Array.from({ length: ARC_SEG + 1 }, (_, k) => new THREE.Vector3().fromArray(pts, k * 3)));
      const len = curve.getLength();
      const g = new THREE.TubeGeometry(curve, Math.max(24, Math.min(90, Math.round(len * 2))), ctl ? 0.11 : 0.065, 6, false);
      const nv = g.attributes.position.count;
      g.setAttribute("aPhase", new THREE.BufferAttribute(new Float32Array(nv).fill((e * 0.137) % 1), 1));
      g.setAttribute("aCtl", new THREE.BufferAttribute(new Float32Array(nv).fill(ctl ? 1 : 0), 1));
      g.setAttribute("aLen", new THREE.BufferAttribute(new Float32Array(nv).fill(len), 1));
      return g;
    });
    flows.geometry = mergeGeometries(geos);
    geos.forEach((g) => g.dispose());
    flowGrow = 0;
  }

  // ------------------------------------------------------------------ destaque, foco de setor, camadas, abertura
  const dim = { v: 0, to: 0 }, focus = { v: 0, to: 0, plate: -1 };
  function setHighlight(levels, dimTo = 0.7) {
    for (const mesh of meshes) mesh.userData.hl.fill(0);
    if (levels) for (const [i, lv] of levels) { const k = kindOf[i]; if (k < 0) continue; meshByShape[shape[i]].userData.hl[k] = lv; }
    for (const mesh of meshes) mesh.userData.geo.attributes.aHL.needsUpdate = true;
    dim.to = levels ? dimTo : 0;
  }
  const meshByShape = { tower: towers, block: blocks, tile: tiles, sub: subs, pawn: pawns, inv: invs };
  function setFocusPlate(j) {
    focus.plate = j;
    focus.to = j >= 0 ? 1 : 0;
    instU.uFocus.value = plateU.uFocus.value = j;
    plates.forEach((p, k) => { p.rim.material.opacity = j < 0 ? 0.55 : k === j ? 0.95 : 0.18; });
  }
  function setVisible(visible) {
    for (const mesh of meshes) {
      const { idx, vis, geo } = mesh.userData;
      idx.forEach((i, k) => { vis[k] = visible[i] ? 1 : 0; });
      geo.attributes.aVis.needsUpdate = true;
    }
    buildBaseArcs(visible);
    shadowDirty = true;
  }
  const rise = { t0: 0, dur: 0 };
  function intro() {
    for (const mesh of meshes) {
      const { idx, delay, geo } = mesh.userData;
      idx.forEach((i, k) => { delay[k] = clamp(Math.hypot(X[i], Z[i] * 1.3) / 70, 0, 1) * 0.7 + (i % 7) * 0.01; });
      geo.attributes.aDelay.needsUpdate = true;
    }
    instU.uRise.value = 0;
    rise.t0 = performance.now(); rise.dur = 2400;
  }

  // ------------------------------------------------------------------ câmera de mapa: arrastar move, rolar aproxima
  // inset: o que os painéis, a barra de cima e a legenda cobrem em cada lado (o mapa se enquadra no que sobra)
  const view = { W: 1, H: 1, offX: 0, offY: 0, toX: 0, toY: 0, inset: { l: 0, r: 0, t: 0, b: 0 } };
  const cam = { x: 0, z: 0, d: 160, tx: 0, tz: 0, td: 160, vx: 0, vz: 0, tilt: 0.3, fly: null };
  const D_MIN = 9;
  let D_MAX = Math.max(260, MH * 2.2);
  function placeCamera() {
    camera.position.set(cam.x, Math.cos(cam.tilt) * cam.d, cam.z + Math.sin(cam.tilt) * cam.d);
    camera.up.set(0, 1, 0);
    camera.lookAt(cam.x, 0, cam.z);
    scene.fog.near = cam.d * 1.2; scene.fog.far = cam.d * 3.2;
  }
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), _v = new THREE.Vector3();
  function groundAt(px, py, y = TOP) {
    ndc.set((px / view.W) * 2 - 1, -(py / view.H) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const t = (y - ray.ray.origin.y) / ray.ray.direction.y;
    return ray.ray.origin.clone().addScaledVector(ray.ray.direction, t);
  }
  // distância para enquadrar uma caixa (no plano) na área livre da tela
  function fitDist(x0, x1, z0, z1, pad = 1.08) {
    const halfV = (camera.fov * Math.PI) / 360;
    const I = view.inset;
    const freeW = Math.max(200, view.W - I.l - I.r), freeH = Math.max(160, view.H - I.t - I.b);
    const aspect = freeW / freeH;
    const w = (x1 - x0) * pad, h = (z1 - z0) * pad;
    const dH = (h / 2) / Math.tan(halfV) / Math.cos(cam.tilt) * (view.H / freeH);
    const dW = (w / 2) / (Math.tan(halfV) * aspect) * (view.H / freeH);
    return clamp(Math.max(dH, dW) + 2, D_MIN, D_MAX);
  }
  function flyTo(x, z, d, dur = 1100) {
    cam.fly = { a: { x: cam.x, z: cam.z, d: cam.d }, b: { x, z, d }, t0: performance.now(), dur };
    cam.tx = x; cam.tz = z; cam.td = d; cam.vx = cam.vz = 0;
  }
  function flyToBox(x0, x1, z0, z1, opts = {}) {
    const d = Math.max(opts.minD || D_MIN, fitDist(x0, x1, z0, z1, opts.pad || 1.12));
    flyTo((x0 + x1) / 2, (z0 + z1) / 2 + (opts.dz || 0), d, opts.dur || 1100);
  }
  function flyToNodes(list, opts = {}) {
    if (!list.length) return;
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const i of list) { x0 = Math.min(x0, X[i] - R[i]); x1 = Math.max(x1, X[i] + R[i]); z0 = Math.min(z0, Z[i] - R[i] - Hh[i] * 0.45 - 1.5); z1 = Math.max(z1, Z[i] + R[i]); }
    const minSpan = opts.minSpan || 14;
    if (x1 - x0 < minSpan) { const c = (x0 + x1) / 2; x0 = c - minSpan / 2; x1 = c + minSpan / 2; }
    if (z1 - z0 < minSpan * 0.6) { const c = (z0 + z1) / 2; z0 = c - minSpan * 0.3; z1 = c + minSpan * 0.3; }
    flyToBox(x0, x1, z0, z1, opts);
  }
  function flyToPlate(j, opts = {}) { const p = plates[j]; flyToBox(p.x0, p.x1, p.z0 - 1.5, p.z1, { pad: 1.06, ...opts }); }
  function fitAll(dur = 1100) { flyToBox(-MW / 2, MW / 2, -MH / 2 - 2, MH / 2, { pad: 1.04, dur }); }
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
    cam.x = clamp(cam.x, -MW * 0.6, MW * 0.6); cam.z = clamp(cam.z, -MH * 0.7, MH * 0.7);
    cam.tx = clamp(cam.tx, -MW * 0.6, MW * 0.6); cam.tz = clamp(cam.tz, -MH * 0.7, MH * 0.7);
  }

  // ------------------------------------------------------------------ geometria da tela
  const _p = new THREE.Vector3();
  function project(i, out = {}) {
    _p.set(X[i], topY(i) * (shape[i] === "tower" ? instU.uRise.value >= 1 ? 1 : 0.6 : 1), Z[i]).project(camera);
    out.x = (_p.x * 0.5 + 0.5) * view.W; out.y = (-_p.y * 0.5 + 0.5) * view.H;
    out.f = _p.z < 1 && out.x > -40 && out.x < view.W + 40 && out.y > -40 && out.y < view.H + 40 ? 1 : 0;
    out.r = R[i]; // raio no mapa
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
    // na tela, com raio de toque generoso, preferindo companhias
    const touch = matchMedia("(pointer: coarse)").matches ? 16 : 8;
    const ppu = pxPerUnit(), o = {};
    let bs = Infinity;
    for (let i = 0; i < N; i++) {
      if (visible && !visible[i]) continue;
      projectPoint(X[i], TOP, Z[i], o);
      const d = Math.hypot(o.x - px, o.y - py), rpx = Math.max(2, R[i] * 0.6 * ppu);
      if (d > touch + rpx) continue;
      const s = d - rpx - (world.nodes[i].t === "c" ? 3 : 0);
      if (s < bs) { bs = s; best = i; }
    }
    return best;
  }
  function plateAt(px, py) {
    const g = groundAt(px, py, PLATE_H);
    for (const p of plates) if (g.x >= p.x0 && g.x <= p.x1 && g.z >= p.z0 && g.z <= p.z1) return p.j;
    return -1;
  }

  // ------------------------------------------------------------------ quadro
  const clock = { t: 0, last: performance.now() };
  function update(now = performance.now()) {
    const dt = Math.min(0.05, (now - clock.last) / 1000);
    clock.last = now;
    clock.t += dt;
    if (cam.fly) {
      const f = cam.fly, k = clamp((now - f.t0) / f.dur, 0, 1), e = easeInOut(k);
      cam.x = f.a.x + (f.b.x - f.a.x) * e; cam.z = f.a.z + (f.b.z - f.a.z) * e; cam.d = f.a.d + (f.b.d - f.a.d) * e;
      if (k >= 1) cam.fly = null;
    } else {
      cam.x += cam.vx; cam.z += cam.vz; cam.tx += cam.vx; cam.tz += cam.vz;
      const fr = Math.pow(0.88, dt * 60);
      cam.vx *= fr; cam.vz *= fr;
      if (Math.abs(cam.vx) + Math.abs(cam.vz) < 1e-3) cam.vx = cam.vz = 0;
      const k = Math.min(1, dt * 9);
      cam.x += (cam.tx - cam.x) * k; cam.z += (cam.tz - cam.z) * k; cam.d += (cam.td - cam.d) * k;
      limit();
    }
    if (Math.abs(view.toX - view.offX) + Math.abs(view.toY - view.offY) > 0.3) {
      const k = Math.min(1, dt * 7);
      applyOffset(view.offX + (view.toX - view.offX) * k, view.offY + (view.toY - view.offY) * k);
    }
    placeCamera();
    camera.updateMatrixWorld();
    dim.v += (dim.to - dim.v) * Math.min(1, dt * 5);
    focus.v += (focus.to - focus.v) * Math.min(1, dt * 5);
    instU.uDim.value = dim.v; arcU.uDim.value = Math.max(dim.v, focus.v * 0.6);
    plateU.uDimOthers.value = focus.v;
    instU.uTime.value = flowU.uTime.value = clock.t;
    if (rise.dur) { const k = clamp((now - rise.t0) / rise.dur, 0, 1); instU.uRise.value = 1.4 * k; shadowDirty = true; if (k >= 1) { rise.dur = 0; instU.uRise.value = 1.4; } }
    arcU.uAlpha.value = smooth(0.8, 1.35, instU.uRise.value);
    flowGrow = Math.min(1, flowGrow + dt * 1.5);
    flowU.uGrow.value = easeInOut(flowGrow);
  }
  function render() {
    if (shadowDirty) { renderer.shadowMap.needsUpdate = true; shadowDirty = false; }
    renderer.render(scene, camera);
  }
  function warmup() { update(); try { renderer.compile(scene, camera); } catch {} render(); clock.last = performance.now(); }
  function resize(w, h) {
    view.W = Math.max(1, w); view.H = Math.max(1, h);
    renderer.setSize(view.W, view.H, false);
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
    setHighlight, setFlows, setVisible, setFocusPlate, intro,
    isInv, shape, X, Z, R, TOP, PLATE_H,
    get scale() { return S; },
    dispose() { renderer.dispose(); pmrem.dispose(); },
  };
}
