/* Mundo das companhias — o planeta.
 *
 * Cena Three.js com o globo: continentes em relevo (um por setor) desenhados a partir das posições do layout
 * (scripts/mundo_globo.mjs), oceano escuro com reflexo do sol e grade de carta náutica, companhias como torres com
 * altura pelo valor de mercado e telhado na cor do setor, acionistas e controladas como construções baixas no chão,
 * investidores institucionais como satélites em órbita, e as ligações de controle como arcos. Ao selecionar, as
 * ligações viram cabos com energia correndo de quem é dono para quem é possuído.
 *
 * A luz fica presa à câmera (o lado visível do planeta está sempre iluminado, com sombra das torres). Este módulo só
 * desenha e responde a perguntas de geometria (o que está sob o cursor, onde cada nó aparece na tela); a interface
 * fica em main.js.
 */
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const DEG = Math.PI / 180;
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const easeInOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

// lat/lon (graus) → ponto na esfera; mesma convenção do layout (scripts/mundo_globo.mjs)
export function llToVec(lat, lon, r = 1, out = new THREE.Vector3()) {
  const a = lat * DEG, b = lon * DEG;
  return out.set(Math.cos(a) * Math.sin(b) * r, Math.sin(a) * r, Math.cos(a) * Math.cos(b) * r);
}
export const vecToLL = (v) => [Math.asin(clamp(v.y / v.length(), -1, 1)) / DEG, Math.atan2(v.x, v.z) / DEG];

// raio do nó em unidades do mapa (mesmo critério de scripts/mundo_layout.mjs)
export const nodeRadius = (n) => (n.t === "c" ? (n.mc ? 1.8 + 1.25 * Math.log10(1 + n.mc / 1e8) : 1.8) : n.t === "s" ? 1.2 : n.v ? 1 + 0.8 * Math.log10(1 + n.v / 1e8) : 1);

export function createGlobe(canvas, world, opts = {}) {
  const { palette, sectorOrder, accent = 0x3cf0b4 } = opts;
  const N = world.nodes.length;
  const G = world.globo;
  const small = Math.min(innerWidth, innerHeight) < 700;
  const ACC = new THREE.Color(accent);

  // ------------------------------------------------------------------ renderizador e cena
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.005, 200);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.3;

  // fundo: degradê radial com ruído (sem faixas), centrado no planeta
  const bgU = { uRes: { value: new THREE.Vector2(1, 1) }, uCenter: { value: new THREE.Vector2(0.5, 0.5) }, uScale: { value: 0.4 } };
  const bg = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({
      depthTest: false, depthWrite: false, uniforms: bgU,
      vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",
      fragmentShader: `varying vec2 vUv; uniform vec2 uRes; uniform vec2 uCenter; uniform float uScale;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        void main(){
          vec2 p = (vUv - uCenter) * vec2(uRes.x / uRes.y, 1.0);
          float d = length(p) / max(0.2, uScale);
          vec3 c = mix(vec3(0.040, 0.052, 0.078), vec3(0.006, 0.008, 0.013), smoothstep(0.6, 2.6, d));
          c += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
          gl_FragColor = vec4(c, 1.0);
        }`,
    }),
  );
  bg.frustumCulled = false;
  bg.renderOrder = -10;
  scene.add(bg);

  // estrelas: poucas, pequenas e paradas
  {
    const n = 1600, p = new Float32Array(n * 3), c = new Float32Array(n * 3);
    let s = 7;
    const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < n; i++) {
      const u = rnd() * 2 - 1, th = rnd() * Math.PI * 2, r = 60 + rnd() * 30;
      const qq = Math.sqrt(1 - u * u);
      p.set([qq * Math.cos(th) * r, u * r, qq * Math.sin(th) * r], i * 3);
      const b = 0.22 + Math.pow(rnd(), 3) * 0.7, w = rnd();
      c.set([b * (0.85 + 0.15 * w), b * 0.92, b * (1.05 - 0.15 * w)], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    g.setAttribute("color", new THREE.BufferAttribute(c, 3));
    const stars = new THREE.Points(g, new THREE.PointsMaterial({ size: 1.1 * Math.min(devicePixelRatio || 1, 2), sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0.7, depthWrite: false }));
    stars.renderOrder = -5;
    scene.add(stars);
  }

  // ------------------------------------------------------------------ luz (presa à câmera)
  const sun = new THREE.DirectionalLight(0xfff3e6, 2.2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(small ? 1536 : 2048, small ? 1536 : 2048);
  Object.assign(sun.shadow.camera, { left: -1.2, right: 1.2, top: 1.2, bottom: -1.2, near: 0.5, far: 8 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.0015; sun.shadow.radius = 2.5;
  scene.add(sun, sun.target);
  const rim = new THREE.DirectionalLight(0x9ab8ff, 0.42);
  scene.add(rim, rim.target);
  scene.add(new THREE.HemisphereLight(0x8aa0c0, 0x0a0c10, 0.35));
  const SUN_DIR = new THREE.Vector3(-0.62, 0.62, 0.48).normalize(); // em coordenadas da câmera
  const RIM_DIR = new THREE.Vector3(0.75, 0.15, -0.65).normalize();

  // ------------------------------------------------------------------ onde cada nó fica
  const surf = new Uint8Array(N); // 1 = no chão, 0 = em órbita
  const P = new Float32Array(N * 3); // posição (raio 1 no chão; altitude em órbita)
  const NRM = new Float32Array(N * 3); // direção radial
  const groundR = new Float32Array(N); // raio do chão do nó (radianos)
  const height = new Float32Array(N); // altura da torre (companhias)
  const tmp = new THREE.Vector3();
  const scaleR = 1 / (G.R || 150);
  for (let i = 0; i < N; i++) {
    const n = world.nodes[i];
    const alt = (G.alt && G.alt[i]) || 0;
    llToVec(G.lat[i], G.lon[i], 1, tmp);
    NRM.set([tmp.x, tmp.y, tmp.z], i * 3);
    surf[i] = alt ? 0 : 1;
    const r = alt || 1;
    P.set([tmp.x * r, tmp.y * r, tmp.z * r], i * 3);
    groundR[i] = nodeRadius(n) * (G.pad || 1.55) * scaleR;
    if (n.t === "c") height[i] = n.mc ? 0.006 + 0.11 * Math.pow(clamp(Math.log10(n.mc / 2e8) / Math.log10(4e3), 0, 1), 1.6) : 0.0035;
  }

  // ------------------------------------------------------------------ texturas do planeta
  // máscara da terra em alta resolução (cada nó do chão deixa uma mancha; o desfoque funde as manchas em continentes)
  // e a tinta dos setores em baixa resolução (é suave)
  const TW = small ? 2048 : 4096, TH = TW / 2;
  function paint(w, h, scaleR2, colorOf) {
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    const x = c.getContext("2d", { willReadFrequently: true });
    x.fillStyle = "#000"; x.fillRect(0, 0, w, h);
    const pxPerRad = w / (2 * Math.PI);
    x.fillStyle = "#fff";
    for (let i = 0; i < N; i++) {
      if (!surf[i]) continue;
      const lat = G.lat[i], lon = G.lon[i];
      const px = ((lon + 180) / 360) * w, py = ((90 - lat) / 180) * h;
      const ry = Math.max(1.1, groundR[i] * scaleR2 * pxPerRad), rx = ry / Math.max(0.15, Math.cos(lat * DEG));
      if (colorOf) x.fillStyle = colorOf(i);
      for (const off of [0, w, -w]) {
        if (off && (off > 0 ? px - rx >= 0 : px + rx <= w)) continue;
        x.beginPath(); x.ellipse(px + off, py, rx, ry, 0, 0, Math.PI * 2); x.fill();
      }
    }
    return x.getImageData(0, 0, w, h).data;
  }
  function blur(a, w, h, r, passes) {
    // caixa repetida (aproxima o gaussiano); na horizontal dá a volta no globo
    const t = new Float32Array(a.length);
    for (let p = 0; p < passes; p++) {
      for (let y = 0; y < h; y++) {
        const o = y * w;
        let acc = 0;
        for (let k = -r; k <= r; k++) acc += a[o + ((k + w) % w)];
        for (let xx = 0; xx < w; xx++) { t[o + xx] = acc / (2 * r + 1); acc += a[o + ((xx + r + 1) % w)] - a[o + ((xx - r + w) % w)]; }
      }
      for (let xx = 0; xx < w; xx++) {
        let acc = 0;
        for (let k = -r; k <= r; k++) acc += t[clamp(k, 0, h - 1) * w + xx];
        for (let y = 0; y < h; y++) { a[y * w + xx] = acc / (2 * r + 1); acc += t[clamp(y + r + 1, 0, h - 1) * w + xx] - t[clamp(y - r, 0, h - 1) * w + xx]; }
      }
    }
  }
  const mask = new Float32Array(TW * TH);
  {
    const d = paint(TW, TH, 1.25, null);
    for (let k = 0; k < mask.length; k++) mask[k] = d[k * 4] / 255;
    blur(mask, TW, TH, Math.max(2, Math.round(TW / 900)), 3);
  }
  const maskBytes = new Uint8Array(TW * TH);
  for (let k = 0; k < mask.length; k++) maskBytes[k] = Math.round(clamp(mask[k], 0, 1) * 255);
  const landTex = new THREE.DataTexture(maskBytes, TW, TH, THREE.RedFormat, THREE.UnsignedByteType);
  const tintW = 1024, tintH = 512;
  const tintBytes = new Uint8Array(tintW * tintH * 4);
  {
    const d = paint(tintW, tintH, 2.6, (i) => palette.sector(sectorOrder[G.sec[i]]));
    const ch = [0, 1, 2].map(() => new Float32Array(tintW * tintH));
    for (let k = 0; k < tintW * tintH; k++) for (let c = 0; c < 3; c++) ch[c][k] = d[k * 4 + c] / 255;
    for (const a of ch) blur(a, tintW, tintH, 3, 2);
    for (let k = 0; k < tintW * tintH; k++) {
      const mx = Math.max(ch[0][k], ch[1][k], ch[2][k], 1e-4);
      for (let c = 0; c < 3; c++) tintBytes[k * 4 + c] = Math.round((ch[c][k] / mx) * 255);
      tintBytes[k * 4 + 3] = 255;
    }
  }
  const tintTex = new THREE.DataTexture(tintBytes, tintW, tintH, THREE.RGBAFormat);
  for (const t of [landTex, tintTex]) {
    t.flipY = true;
    t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearFilter; t.generateMipmaps = false;
    t.wrapS = THREE.RepeatWrapping; t.wrapT = THREE.ClampToEdgeWrapping;
    t.needsUpdate = true;
  }
  const landAt = (lat, lon) => {
    const px = ((Math.floor(((lon + 180) / 360) * TW) % TW) + TW) % TW, py = clamp(Math.floor(((90 - lat) / 180) * TH), 0, TH - 1);
    return mask[py * TW + px];
  };

  // ------------------------------------------------------------------ o planeta
  const planetU = { uLand: { value: landTex }, uTint: { value: tintTex }, uTexel: { value: new THREE.Vector2(1 / TW, 1 / TH) }, uDim: { value: 0 } };
  const planetMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.8, metalness: 0.0, envMapIntensity: 0.04, specularIntensity: 0.3 });
  planetMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, planetU);
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vObj; varying vec3 vEast; varying vec3 vNorth;")
      .replace("#include <begin_vertex>", `#include <begin_vertex>
        vObj = normalize(position);
        vec3 eastO = normalize(vec3(vObj.z, 0.0, -vObj.x) + vec3(1e-5, 0.0, 0.0));
        vec3 northO = cross(vObj, eastO);
        vEast = normalize(normalMatrix * eastO); vNorth = normalize(normalMatrix * northO);`);
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", `#include <common>
        varying vec3 vObj; varying vec3 vEast; varying vec3 vNorth;
        uniform sampler2D uLand; uniform sampler2D uTint; uniform vec2 uTexel; uniform float uDim;
        vec2 llUv(vec3 p){ float lon = atan(p.x, p.z); float lat = asin(clamp(p.y, -1.0, 1.0)); return vec2(lon / 6.2831853 + 0.5, lat / 3.1415927 + 0.5); }
        float gratLine(float v, float stp, float w){ float f = abs(fract(v / stp + 0.5) - 0.5) * stp; return 1.0 - smoothstep(0.0, w, f); }
        float landM(vec2 uv){ return texture2D(uLand, uv).r; }`)
      .replace("#include <map_fragment>", `
        vec2 luv = llUv(vObj);
        float m = landM(luv);
        vec3 tint = texture2D(uTint, luv).rgb;
        float landK = smoothstep(0.30, 0.42, m);
        float shelf = smoothstep(0.05, 0.30, m) * (1.0 - landK);
        vec3 ocean = mix(vec3(0.008, 0.013, 0.024), vec3(0.018, 0.036, 0.058), shelf);
        // grade de latitude e longitude no oceano, como numa carta náutica
        float lat = asin(clamp(vObj.y, -1.0, 1.0)) * 57.29578, lon = atan(vObj.x, vObj.z) * 57.29578;
        float gw = fwidth(lat) * 0.9;
        float grat = max(gratLine(lat, 15.0, gw), gratLine(lon, 15.0, gw * max(0.2, cos(radians(lat)))));
        ocean += vec3(0.07, 0.10, 0.14) * grat * 0.32 * (1.0 - shelf);
        vec3 ground = vec3(0.030, 0.034, 0.041) + (tint - 0.5) * 0.012;
        ground *= 0.92 + 0.16 * smoothstep(0.42, 0.9, m);
        float coast = smoothstep(0.26, 0.31, m) * (1.0 - smoothstep(0.31, 0.37, m));
        diffuseColor.rgb = mix(ocean, ground, landK) + (tint * 0.5 + 0.5) * coast * 0.16;
        diffuseColor.rgb *= 1.0 - 0.35 * uDim;
      `)
      .replace("#include <roughnessmap_fragment>", "float roughnessFactor = mix(0.34, 0.9, landK);")
      .replace("#include <normal_fragment_maps>", `#include <normal_fragment_maps>
        {
          // relevo: a borda dos continentes sobe como um platô (gradiente da máscara)
          float mx = landM(luv + vec2(uTexel.x, 0.0)) - landM(luv - vec2(uTexel.x, 0.0));
          float my = landM(luv + vec2(0.0, uTexel.y)) - landM(luv - vec2(0.0, uTexel.y));
          float k = 2.6 * smoothstep(0.05, 0.45, m) * (1.0 - smoothstep(0.55, 0.9, m));
          normal = normalize(normal - (vEast * mx + vNorth * my) * k);
        }`);
  };
  const planet = new THREE.Mesh(new THREE.SphereGeometry(1, small ? 128 : 192, small ? 96 : 128), planetMat);
  planet.receiveShadow = true;
  scene.add(planet);

  // atmosfera: halo fino na borda, mais forte do lado do sol
  const atmoU = { uSun: { value: SUN_DIR.clone() }, uColor: { value: new THREE.Color(0x7fa6ff) } };
  const atmoVS = "varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(normalMatrix * normal); vec4 w = modelViewMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * w; }";
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(1.06, 96, 64),
    new THREE.ShaderMaterial({
      uniforms: atmoU, side: THREE.BackSide, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexShader: atmoVS,
      fragmentShader: `uniform vec3 uSun; uniform vec3 uColor; varying vec3 vN; varying vec3 vW;
        void main(){
          float c = abs(dot(vN, normalize(-vW)));
          float f = pow(clamp(1.0 - c, 0.0, 1.0), 2.0) * smoothstep(0.0, 0.35, c);
          float lit = 0.35 + 0.65 * smoothstep(-0.4, 0.6, dot(-vN, uSun));
          gl_FragColor = vec4(uColor * f * lit * 0.55, 1.0);
        }`,
    }),
  ));
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(1.002, 96, 64),
    new THREE.ShaderMaterial({
      uniforms: atmoU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexShader: atmoVS,
      fragmentShader: `uniform vec3 uSun; uniform vec3 uColor; varying vec3 vN; varying vec3 vW;
        void main(){
          float f = pow(1.0 - clamp(dot(vN, normalize(-vW)), 0.0, 1.0), 3.5);
          float lit = 0.3 + 0.7 * smoothstep(-0.3, 0.7, dot(vN, uSun));
          gl_FragColor = vec4(uColor * f * lit * 0.5, 1.0);
        }`,
    }),
  ));

  // ------------------------------------------------------------------ torres, construções baixas e satélites
  const UP = new THREE.Vector3(0, 1, 0);
  const _e = new THREE.Vector3(), _s = new THREE.Vector3(), _mb = new THREE.Matrix4();
  // orientação local: y para fora do planeta, x para leste (as torres alinhadas como quarteirões)
  function basisAt(n, outQ) {
    _e.crossVectors(UP, n);
    if (_e.lengthSq() < 1e-8) _e.set(1, 0, 0);
    _e.normalize();
    _s.crossVectors(_e, n).normalize();
    _mb.makeBasis(_e, n, _s);
    return outQ.setFromRotationMatrix(_mb);
  }
  const q = new THREE.Quaternion(), m4 = new THREE.Matrix4(), sv = new THREE.Vector3(), col = new THREE.Color();
  const towerIdx = [], lowIdx = [], satIdx = [];
  for (let i = 0; i < N; i++) (surf[i] ? (world.nodes[i].t === "c" ? towerIdx : lowIdx) : satIdx).push(i);
  const kindOf = new Int32Array(N).fill(-1); // índice dentro do seu InstancedMesh
  // uniformes comuns: subida das torres na abertura, escurecimento do resto quando algo está em destaque
  const instU = { uRise: { value: 1 }, uDim: { value: 0 }, uTime: { value: 0 }, uAcc: { value: ACC } };
  // aHL: 0 = normal, 0.5 = vizinho do destaque, 1 = o próprio destaque; aVis: 0 esconde (camadas); aDelay: abertura
  function instanced(geo, mat, idx, setup, { body = true } = {}) {
    const n = Math.max(1, idx.length);
    const hl = new Float32Array(n), vis = new Float32Array(n).fill(1), delay = new Float32Array(n);
    geo.setAttribute("aHL", new THREE.InstancedBufferAttribute(hl, 1));
    geo.setAttribute("aVis", new THREE.InstancedBufferAttribute(vis, 1));
    geo.setAttribute("aDelay", new THREE.InstancedBufferAttribute(delay, 1));
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, instU);
      sh.vertexShader = sh.vertexShader
        .replace("#include <common>", "#include <common>\nattribute float aHL; attribute float aVis; attribute float aDelay; uniform float uRise; varying float vY; varying float vTopN; varying float vHL;")
        .replace("#include <begin_vertex>", `#include <begin_vertex>
          float rise = smoothstep(aDelay, aDelay + 0.35, uRise);
          vY = position.y; vTopN = normal.y; vHL = aHL;
          transformed.y *= rise * aVis * (1.0 + ${body ? "0.0" : "2.5"} * aHL);
          transformed.xz *= aVis;`);
      sh.fragmentShader = sh.fragmentShader
        .replace("#include <common>", "#include <common>\nvarying float vY; varying float vTopN; varying float vHL; uniform float uDim; uniform float uTime; uniform vec3 uAcc;")
        .replace("#include <color_fragment>", `#include <color_fragment>
          float top = step(0.5, vTopN);
          ${body ? `vec3 secCol = diffuseColor.rgb;
          diffuseColor.rgb = mix(vec3(0.84, 0.85, 0.87), secCol, top);
          diffuseColor.rgb *= mix(0.55, 1.0, smoothstep(0.0, 0.35, vY));` : ""}
          float isHL = step(0.01, vHL);
          diffuseColor.rgb *= 1.0 - uDim * 0.62 * (1.0 - isHL);
          diffuseColor.rgb = mix(diffuseColor.rgb, uAcc, vHL * (0.25 + 0.6 * top));`)
        .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
          totalEmissiveRadiance += uAcc * vHL * (0.10 + 0.5 * top) * (0.85 + 0.15 * sin(uTime * 3.0));`);
    };
    const mesh = new THREE.InstancedMesh(geo, mat, n);
    idx.forEach((i, k) => { kindOf[i] = k; setup(i, k, mesh); });
    mesh.count = idx.length;
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.userData = { idx, hl, vis, delay, geo };
    mesh.frustumCulled = false;
    scene.add(mesh);
    return mesh;
  }
  const towerGeo = new THREE.BoxGeometry(1.6, 1, 1.6);
  towerGeo.translate(0, 0.5, 0);
  const towers = instanced(towerGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.42, metalness: 0.05 }), towerIdx, (i, k, mesh) => {
    const n = world.nodes[i];
    sv.fromArray(NRM, i * 3);
    basisAt(sv, q);
    const r = groundR[i] * (n.mc ? 0.3 : 0.26);
    m4.compose(sv.clone().multiplyScalar(1.0005), q, new THREE.Vector3(r, height[i], r));
    mesh.setMatrixAt(k, m4);
    mesh.setColorAt(k, col.set(palette.sector(n.c)));
  });
  towers.castShadow = true; towers.receiveShadow = true;

  const lowGeo = new THREE.CylinderGeometry(1, 1, 1, 6, 1, false);
  lowGeo.translate(0, 0.5, 0);
  const lows = instanced(lowGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }), lowIdx, (i, k, mesh) => {
    const n = world.nodes[i];
    sv.fromArray(NRM, i * 3);
    basisAt(sv, q);
    const r = groundR[i] * 0.22;
    const h = n.t === "p" ? 0.0012 : n.t === "s" ? 0.0026 : 0.002;
    m4.compose(sv.clone().multiplyScalar(1.0003), q, new THREE.Vector3(r, h, r));
    mesh.setMatrixAt(k, m4);
    mesh.setColorAt(k, col.set(palette.kind(n)).lerp(new THREE.Color(0x4a515b), 0.82).multiplyScalar(0.62));
  }, { body: false });
  lows.receiveShadow = true;

  const satGeo = (() => {
    const body = new THREE.BoxGeometry(0.6, 0.6, 1.0);
    const panel = new THREE.BoxGeometry(2.4, 0.04, 0.7);
    const dish = new THREE.CylinderGeometry(0.3, 0.05, 0.25, 16); dish.rotateX(Math.PI / 2); dish.translate(0, 0, -0.62);
    return mergeGeometries([body, panel, dish]);
  })();
  const sats = instanced(satGeo, new THREE.MeshStandardMaterial({ color: 0xc9ced6, roughness: 0.32, metalness: 0.85 }), satIdx, (i, k, mesh) => {
    const n = world.nodes[i];
    sv.fromArray(P, i * 3);
    m4.lookAt(sv, new THREE.Vector3(), Math.abs(sv.y / sv.length()) > 0.9 ? new THREE.Vector3(1, 0, 0) : UP);
    q.setFromRotationMatrix(m4);
    const s = 0.009 + 0.007 * Math.sqrt(clamp(Math.log10(1 + (n.v || 0) / 1e8) / 4, 0, 1));
    m4.compose(sv, q, new THREE.Vector3(s, s, s));
    mesh.setMatrixAt(k, m4);
    mesh.setColorAt(k, col.set(palette.kind(n)).lerp(new THREE.Color(0xd8dde4), 0.65));
  }, { body: false });
  // a abertura: as torres sobem do centro do lado visível para fora
  const meshes = [towers, lows, sats];

  // órbitas decorativas: anéis finos, como numa carta de navegação
  const orbits = new THREE.Group();
  for (const [r, tx, tz, a] of [[1.32, 18, 6, 0.10], [1.48, -26, 14, 0.07], [1.22, 64, -10, 0.06]]) {
    const pts = [];
    for (let k = 0; k <= 256; k++) { const t = (k / 256) * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(t) * r, 0, Math.sin(t) * r)); }
    const ln = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x9fb6d8, transparent: true, opacity: a, depthWrite: false }));
    ln.rotation.set(tx * DEG, 0, tz * DEG);
    orbits.add(ln);
  }
  scene.add(orbits);

  // ------------------------------------------------------------------ arcos
  const ARC_SEG = 32;
  const _A = new THREE.Vector3(), _B = new THREE.Vector3(), _p = new THREE.Vector3();
  // pontos de um arco de a até b: do alto da torre de a, por cima do planeta, até o alto da torre de b. De um satélite,
  // desce quase reto até o chão.
  function arcPoints(a, b, out) {
    _A.fromArray(NRM, a * 3); _B.fromArray(NRM, b * 3);
    const ra = surf[a] ? 1 + height[a] : G.alt[a], rb = surf[b] ? 1 + height[b] : G.alt[b];
    const ang = _A.angleTo(_B), s = Math.sin(ang) || 1e-6;
    const fromSat = !surf[a] || !surf[b];
    const h = fromSat ? 0.03 + 0.08 * ang : Math.min(0.26, 0.01 + 0.3 * ang);
    for (let k = 0; k <= ARC_SEG; k++) {
      const t = k / ARC_SEG;
      // satélite: a curva sai devagar do alto e cai perto do alvo
      const tt = fromSat ? (surf[a] ? 1 - Math.pow(1 - t, 1.6) : Math.pow(t, 1.6)) : t;
      const w1 = ang < 1e-5 ? 1 - tt : Math.sin((1 - tt) * ang) / s, w2 = ang < 1e-5 ? tt : Math.sin(tt * ang) / s;
      _p.copy(_A).multiplyScalar(w1).addScaledVector(_B, w2).normalize();
      const r = ra * (1 - t) + rb * t + h * Math.sin(Math.PI * t);
      out[k * 3] = _p.x * r; out[k * 3 + 1] = _p.y * r; out[k * 3 + 2] = _p.z * r;
    }
    return out;
  }
  const arcU = { uDim: { value: 0 }, uAlpha: { value: 1 } };
  const arcMat = new THREE.ShaderMaterial({
    uniforms: arcU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: "attribute float aT; attribute float aW; varying float vT; varying float vW; void main(){ vT = aT; vW = aW; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
    fragmentShader: `uniform float uAlpha; uniform float uDim; varying float vT; varying float vW;
      void main(){
        float a = smoothstep(0.0, 0.12, vT) * smoothstep(1.0, 0.86, vT);
        gl_FragColor = vec4(vec3(0.80, 0.86, 1.0) * a * vW * uAlpha * (1.0 - 0.85 * uDim), 1.0);
      }`,
  });
  let baseArcs = null;
  function buildBaseArcs(visible) {
    const list = [];
    for (const [s, t, , f] of world.edges || []) {
      if (!(f & 1) || !surf[s] || !surf[t] || (visible && (!visible[s] || !visible[t]))) continue;
      const nt = world.nodes[t], ns = world.nodes[s];
      if (nt.t !== "c" && nt.t !== "s") continue;
      const ang = _A.fromArray(NRM, s * 3).angleTo(_B.fromArray(NRM, t * 3));
      if (ang < 0.03 && ns.t !== "c") continue; // ligações curtas de holdings somem na visão geral
      list.push([s, t, 0.1 + 0.24 * smooth(0.02, 0.5, ang)]);
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

  // destaque: cabos com energia correndo de quem é dono para quem é possuído
  const flowU = { uTime: { value: 0 }, uAcc: { value: ACC }, uGrow: { value: 1 } };
  const flowMat = new THREE.ShaderMaterial({
    uniforms: flowU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `attribute float aPhase; attribute float aCtl; varying vec2 vUv; varying float vPhase; varying float vCtl; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vPhase = aPhase; vCtl = aCtl; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uTime; uniform vec3 uAcc; uniform float uGrow; varying vec2 vUv; varying float vPhase; varying float vCtl; varying vec3 vN; varying vec3 vV;
      void main(){
        float t = vUv.x;
        if (t > uGrow) discard;
        float ends = smoothstep(0.0, 0.04, t) * smoothstep(1.0, 0.97, t);
        float core = pow(abs(dot(vN, vV)), 1.4);
        float pulse = 0.0;
        for (int k = 0; k < 2; k++) { float c = fract(uTime * 0.32 + vPhase + float(k) * 0.5); float d = c - t; pulse += smoothstep(0.12, 0.0, d) * step(0.0, d); }
        vec3 base = mix(vec3(0.42, 0.50, 0.62), uAcc, vCtl);
        vec3 c = base * (0.22 + 0.42 * core) + mix(vec3(0.85, 0.92, 1.0), uAcc * 1.25 + 0.15, vCtl) * pulse * (0.45 + 0.55 * core);
        gl_FragColor = vec4(c * ends, 1.0);
      }`,
  });
  const flows = new THREE.Mesh(new THREE.BufferGeometry(), flowMat);
  flows.frustumCulled = false;
  scene.add(flows);
  function setFlows(list) {
    // list: [[dono, possuído, controle 0/1]]
    flows.geometry.dispose();
    if (!list.length) { flows.geometry = new THREE.BufferGeometry(); return; }
    const pts = new Float32Array((ARC_SEG + 1) * 3);
    const geos = list.slice(0, 260).map(([a, b, ctl], e) => {
      arcPoints(a, b, pts);
      const curve = new THREE.CatmullRomCurve3(Array.from({ length: ARC_SEG + 1 }, (_, k) => new THREE.Vector3().fromArray(pts, k * 3)));
      const g = new THREE.TubeGeometry(curve, 48, ctl ? 0.0024 : 0.0014, 6, false);
      const nv = g.attributes.position.count;
      g.setAttribute("aPhase", new THREE.BufferAttribute(new Float32Array(nv).fill((e * 0.137) % 1), 1));
      g.setAttribute("aCtl", new THREE.BufferAttribute(new Float32Array(nv).fill(ctl ? 1 : 0), 1));
      return g;
    });
    flows.geometry = mergeGeometries(geos);
    geos.forEach((g) => g.dispose());
    flowGrow = 0;
  }
  let flowGrow = 1;

  // ------------------------------------------------------------------ destaque, camadas e abertura
  const dim = { v: 0, to: 0 };
  function setHighlight(levels, dimTo = 0.75) {
    // levels: Map(nó → 0.5 vizinho | 1 destaque) ou null
    for (const mesh of meshes) mesh.userData.hl.fill(0);
    if (levels) for (const [i, lv] of levels) { const k = kindOf[i]; if (k < 0) continue; (surf[i] ? (world.nodes[i].t === "c" ? towers : lows) : sats).userData.hl[k] = lv; }
    for (const mesh of meshes) mesh.userData.geo.attributes.aHL.needsUpdate = true;
    dim.to = levels ? dimTo : 0;
  }
  function setVisible(visible) {
    for (const mesh of meshes) {
      const { idx, vis, geo } = mesh.userData;
      idx.forEach((i, k) => { vis[k] = visible[i] ? 1 : 0; });
      geo.attributes.aVis.needsUpdate = true;
    }
    buildBaseArcs(visible);
  }
  const rise = { t0: 0, dur: 0 };
  function intro(fromLat, fromLon) {
    // as torres sobem em onda, a partir do ponto que está de frente para a câmera
    const c = llToVec(fromLat, fromLon);
    for (const mesh of meshes) {
      const { idx, delay, geo } = mesh.userData;
      idx.forEach((i, k) => { const d = Math.acos(clamp(_A.fromArray(NRM, i * 3).dot(c), -1, 1)) / Math.PI; delay[k] = d * 0.75 + (i % 7) * 0.008; });
      geo.attributes.aDelay.needsUpdate = true;
    }
    instU.uRise.value = 0;
    rise.t0 = performance.now(); rise.dur = 2600;
  }

  // ------------------------------------------------------------------ câmera: órbita em volta do planeta, com inércia
  const cam = { lat: 16, lon: -20, dist: 5.6, tDist: 5.6, vLat: 0, vLon: 0, auto: 0, fly: null };
  const DIST_MIN = 1.2;
  let DIST_MAX = 9;
  // distância em que o planeta ocupa uma fração da menor metade da tela (no celular em pé, a largura manda)
  function fitDist(fill = 0.8) {
    const halfV = (camera.fov * DEG) / 2;
    const halfH = Math.atan(Math.tan(halfV) * (view.W / view.H));
    const half = Math.min(halfV, halfH);
    return 1 / Math.sin(Math.atan(Math.tan(half) * fill));
  }
  const view = { W: 1, H: 1, offX: 0, offY: 0, toX: 0, toY: 0 };
  function closeness() { return 1 - smooth(1.3, 3.2, cam.dist); }
  function placeCamera() {
    // de longe a câmera olha para o centro; perto do chão inclina para ver as torres de lado (como um avião)
    const close = closeness();
    const tilt = close * 52 * DEG;
    const focus = llToVec(cam.lat, cam.lon, 1);
    const east = _e.set(Math.cos(cam.lon * DEG), 0, -Math.sin(cam.lon * DEG));
    const north = _s.crossVectors(focus, east).normalize();
    const alt = cam.dist - 1;
    camera.position.copy(focus).multiplyScalar(1 + Math.cos(tilt) * alt).addScaledVector(north, -Math.sin(tilt) * alt);
    camera.up.copy(north);
    // mira o ponto em foco na superfície: sem inclinação é a mesma direção do centro do planeta
    camera.lookAt(focus);
  }
  // px de tela por radiano de rotação do globo: o raio aparente do planeta
  function globePx() {
    const f = view.H / 2 / Math.tan((camera.fov * DEG) / 2);
    return f / Math.sqrt(Math.max(0.05, cam.dist * cam.dist - 1));
  }
  function rotate(dx, dy) {
    const k = 1 / globePx() / DEG;
    const z = 0.35 + 0.65 * (1 - closeness());
    cam.lon -= dx * k * z / Math.max(0.25, Math.cos(cam.lat * DEG));
    cam.lat = clamp(cam.lat + dy * k * z, -75, 75);
    cam.fly = null;
  }
  function fling(vx, vy) {
    // velocidade em px/ms → graus por quadro
    const k = 1 / globePx() / DEG * 16;
    cam.vLon = -vx * k / Math.max(0.25, Math.cos(cam.lat * DEG));
    cam.vLat = vy * k;
  }
  function zoom(f, px, py) {
    const before = cam.tDist;
    cam.tDist = clamp(cam.tDist * f, DIST_MIN, DIST_MAX);
    cam.fly = null;
    // aproximar puxa o ponto sob o cursor para o centro
    if (px != null && f < 1) {
      const hit = rayGlobe(px, py);
      if (hit) {
        const [la, lo] = vecToLL(hit);
        const w = clamp((before - cam.tDist) / Math.max(0.2, before - 1), 0, 1) * 0.9;
        let d = lo - cam.lon; d = ((d + 540) % 360) - 180;
        cam.lat += (la - cam.lat) * w; cam.lon += d * w;
      }
    }
  }
  function flyTo(lat, lon, dist, dur = 1500) {
    let dLon = lon - cam.lon;
    dLon = ((dLon + 540) % 360) - 180;
    const ang = Math.acos(clamp(llToVec(cam.lat, cam.lon).dot(llToVec(lat, lon)), -1, 1));
    cam.fly = { a: { lat: cam.lat, lon: cam.lon, dist: cam.dist }, b: { lat, lon, dist }, dLon, t0: performance.now(), dur, hop: Math.max(0, ang - 0.5) * 0.9 };
    cam.tDist = dist; cam.vLat = cam.vLon = 0;
  }
  // centraliza um nó e afasta o bastante para mostrar os vizinhos que estão do mesmo lado do planeta
  function flyToNode(i, others = [], { dur = 1500, minDist = 1.5 } = {}) {
    const c = new THREE.Vector3().fromArray(NRM, i * 3);
    let spread = 0.06;
    for (const j of others) { const a = Math.acos(clamp(_A.fromArray(NRM, j * 3).dot(c), -1, 1)); if (a < 0.9) spread = Math.max(spread, a); }
    const halfFov = Math.min(camera.fov, camera.fov * (view.W / view.H)) * 0.5 * DEG;
    const dist = clamp(1 + Math.sin(Math.min(1.3, spread * 1.25 + 0.05)) / Math.tan(halfFov), minDist, Math.max(5.2, fitDist(0.9)));
    const [la, lo] = vecToLL(c);
    flyTo(clamp(la, -72, 72), lo, dist, dur);
  }
  // enquadra um conjunto de nós: centro na média das direções, distância pela abertura
  function flyToNodes(list, { dur = 1500, minDist = 1.55, pad = 1.25 } = {}) {
    if (!list.length) return;
    const c = new THREE.Vector3();
    for (const i of list) c.add(_A.fromArray(NRM, i * 3));
    if (c.lengthSq() < 1e-6) c.copy(_A.fromArray(NRM, list[0] * 3));
    c.normalize();
    let spread = 0;
    for (const i of list) spread = Math.max(spread, Math.acos(clamp(_A.fromArray(NRM, i * 3).dot(c), -1, 1)));
    const halfFov = Math.min(camera.fov, camera.fov * (view.W / view.H)) * 0.5 * DEG;
    const need = Math.sin(Math.min(1.4, spread * pad + 0.04));
    const dist = clamp(1 + need / Math.tan(halfFov) + (spread > 0.9 ? 1.2 : 0), minDist, 6.2);
    const [la, lo] = vecToLL(c);
    flyTo(clamp(la, -72, 72), lo, dist, dur);
  }

  // ------------------------------------------------------------------ geometria da tela
  const _ray = new THREE.Raycaster();
  function rayGlobe(px, py) {
    _ray.setFromCamera({ x: (px / view.W) * 2 - 1, y: -(py / view.H) * 2 + 1 }, camera);
    const o = _ray.ray.origin, d = _ray.ray.direction;
    const b = o.dot(d), c = o.lengthSq() - 1, disc = b * b - c;
    if (disc < 0) return null;
    const t = -b - Math.sqrt(disc);
    return t > 0 ? o.clone().addScaledVector(d, t) : null;
  }
  // posição de tela do alto de um nó; f = quanto está de frente (≤ 0: atrás do planeta)
  const _w = new THREE.Vector3(), _cdir = new THREE.Vector3();
  function project(i, out = {}) {
    const r = surf[i] ? 1 + height[i] * instU.uRise.value : G.alt[i];
    _w.fromArray(NRM, i * 3).multiplyScalar(r);
    _cdir.copy(camera.position).sub(_w);
    const dist = _cdir.length();
    // atrás do planeta: o raio do nó até a câmera atravessa a esfera
    const n = _A.fromArray(NRM, i * 3);
    let f = n.dot(_cdir.normalize());
    if (!surf[i]) { const hit = segHitsGlobe(_w, camera.position); f = hit ? -1 : 1; }
    _w.project(camera);
    out.x = (_w.x * 0.5 + 0.5) * view.W; out.y = (-_w.y * 0.5 + 0.5) * view.H; out.f = f; out.d = dist;
    return out;
  }
  function segHitsGlobe(a, b) {
    const d = _B.copy(b).sub(a), L = d.length();
    d.divideScalar(L);
    const bb = a.dot(d), c = a.lengthSq() - 0.995, disc = bb * bb - c;
    if (disc < 0) return false;
    const t = -bb - Math.sqrt(disc);
    return t > 0 && t < L;
  }
  // o nó sob o cursor: primeiro as torres e satélites (raio), depois o mais perto na tela (construções pequenas)
  const _hits = [];
  function pick(px, py, visible) {
    _ray.setFromCamera({ x: (px / view.W) * 2 - 1, y: -(py / view.H) * 2 + 1 }, camera);
    let best = -1, bestD = Infinity;
    for (const mesh of [towers, sats]) {
      _hits.length = 0;
      mesh.raycast(_ray, _hits);
      for (const h of _hits) {
        const i = mesh.userData.idx[h.instanceId];
        if (i == null || (visible && !visible[i])) continue;
        if (h.distance < bestD) { bestD = h.distance; best = i; }
      }
    }
    if (best >= 0) return best;
    // na tela: raio de toque generoso, preferindo os maiores
    const R = matchMedia("(pointer: coarse)").matches ? 18 : 10;
    const o = {};
    let bs = Infinity;
    for (let i = 0; i < N; i++) {
      if (visible && !visible[i]) continue;
      project(i, o);
      if (o.f <= 0.05) continue;
      const d = Math.hypot(o.x - px, o.y - py);
      const rpx = Math.max(3, groundR[i] * 0.4 * globePx());
      if (d > R + rpx) continue;
      const s = d - rpx * 0.8 - (world.nodes[i].t === "c" ? 4 : 0);
      if (s < bs) { bs = s; best = i; }
    }
    return best;
  }

  // ------------------------------------------------------------------ quadro
  const clock = { t: 0, last: performance.now() };
  function update(now = performance.now()) {
    const dt = Math.min(0.05, (now - clock.last) / 1000);
    clock.last = now;
    clock.t += dt;
    if (cam.fly) {
      const f = cam.fly, k = clamp((now - f.t0) / f.dur, 0, 1), e = easeInOut(k);
      cam.lat = f.a.lat + (f.b.lat - f.a.lat) * e;
      cam.lon = f.a.lon + f.dLon * e;
      cam.dist = f.a.dist + (f.b.dist - f.a.dist) * e + Math.sin(Math.PI * k) * f.hop;
      if (k >= 1) cam.fly = null;
    } else {
      cam.lon += cam.vLon + cam.auto * dt;
      cam.lat = clamp(cam.lat + cam.vLat, -75, 75);
      const fr = Math.pow(0.9, dt * 60);
      cam.vLon *= fr; cam.vLat *= fr;
      if (Math.abs(cam.vLon) < 1e-4) cam.vLon = 0;
      if (Math.abs(cam.vLat) < 1e-4) cam.vLat = 0;
      cam.dist += (cam.tDist - cam.dist) * Math.min(1, dt * 8);
    }
    if (Math.abs(view.toX - view.offX) + Math.abs(view.toY - view.offY) > 0.3) {
      const k = Math.min(1, dt * 7);
      applyOffset(view.offX + (view.toX - view.offX) * k, view.offY + (view.toY - view.offY) * k);
    }
    placeCamera();
    camera.updateMatrixWorld();
    sun.position.copy(SUN_DIR).applyQuaternion(camera.quaternion).multiplyScalar(4);
    rim.position.copy(RIM_DIR).applyQuaternion(camera.quaternion).multiplyScalar(4);
    dim.v += (dim.to - dim.v) * Math.min(1, dt * 5);
    // de perto o reflexo do sol no oceano some (ele só faz sentido visto do espaço)
    planetMat.specularIntensity = 0.16 * (1 - 0.85 * closeness());
    instU.uDim.value = arcU.uDim.value = planetU.uDim.value = dim.v;
    instU.uTime.value = flowU.uTime.value = clock.t;
    if (rise.dur) { const k = clamp((now - rise.t0) / rise.dur, 0, 1); instU.uRise.value = 1.4 * k; if (k >= 1) rise.dur = 0; }
    arcU.uAlpha.value = smooth(0.7, 1.3, instU.uRise.value);
    flowGrow = Math.min(1, flowGrow + dt * 1.6);
    flowU.uGrow.value = easeInOut(flowGrow);
    return { moving: !!cam.fly || Math.abs(cam.vLon) + Math.abs(cam.vLat) > 0 || Math.abs(cam.tDist - cam.dist) > 1e-3 || cam.auto !== 0 || rise.dur > 0 };
  }
  function render() { renderer.render(scene, camera); }
  // compila os shaders antes da abertura (no celular a primeira compilação leva quase um segundo e comeria a animação)
  function warmup() {
    update();
    try { renderer.compile(scene, camera); } catch {}
    render();
    clock.last = performance.now();
  }
  function resize(w, h) {
    view.W = Math.max(1, w); view.H = Math.max(1, h);
    renderer.setSize(view.W, view.H, false);
    camera.aspect = view.W / view.H;
    camera.updateProjectionMatrix();
    DIST_MAX = Math.max(9, fitDist(0.55));
    bgU.uRes.value.set(view.W, view.H);
    applyOffset(view.offX, view.offY);
  }
  // o planeta fica no meio da área livre (painéis abertos ocupam um lado da tela); desliza até lá
  function setOffset(x, y, instant = false) {
    view.toX = x; view.toY = y;
    if (instant) applyOffset(x, y);
  }
  function applyOffset(x, y) {
    view.offX = x; view.offY = y;
    camera.setViewOffset(view.W, view.H, -x, -y, view.W, view.H);
    bgU.uCenter.value.set(0.5 + x / view.W, 0.5 - y / view.H);
  }

  return {
    renderer, scene, camera, cam, view, update, render, warmup, resize, setOffset,
    rotate, fling, zoom, flyTo, flyToNodes, flyToNode, fitDist, pick, project, rayGlobe, globePx, closeness,
    setHighlight, setFlows, setVisible, intro, landAt,
    surf, height, groundR, NRM,
    nodeLL: (i) => [G.lat[i], G.lon[i]],
    dispose() { renderer.dispose(); pmrem.dispose(); },
  };
}
