/* Mundo das companhias — estrutura societária em 3D.
 *
 * Uma mesa escura com a entidade no centro (uma peça redonda com anel de luz), quem é dono dela atrás (cartões, em
 * fileiras por nível, do controlador final ao acionista direto) e o que ela tem na frente (controladas e
 * participações). Cabos sobre a mesa ligam cada cartão ao seu dono, com pulsos de energia correndo de quem é dono para
 * quem é possuído; os cabos de controle são mais grossos e acesos.
 *
 * Usa o mesmo renderizador do planeta (um contexto WebGL só). Arrastar move a mesa, rolar ou pinçar aproxima, um
 * clique num cartão mostra os detalhes, dois cliques recentralizam a estrutura nele.
 */
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const FONT = '"Inter", -apple-system, system-ui, sans-serif';
const MONO = '"IBM Plex Mono", ui-monospace, Menlo, monospace';

export function createTree(renderer, opts) {
  const { W, colorOf, kindLabel, shortName, brl, pct, accent = "#3cf0b4", onPick, onExt, canvas } = opts;
  const ACC = new THREE.Color(accent);
  const small = () => innerWidth <= 760;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x07090d);
  scene.fog = new THREE.Fog(0x07090d, 18, 46);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 120);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;

  // luz de estúdio: uma principal com sombra macia, preenchimento frio e contraluz
  const key = new THREE.DirectionalLight(0xfff4ea, 2.4);
  key.position.set(-6, 14, 7);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -22, right: 22, top: 22, bottom: -22, near: 1, far: 50 });
  key.shadow.bias = -0.0005; key.shadow.normalBias = 0.02; key.shadow.radius = 6;
  scene.add(key, key.target);
  const fill = new THREE.DirectionalLight(0x9db8ff, 0.5);
  fill.position.set(8, 6, -4);
  scene.add(fill);
  scene.add(new THREE.HemisphereLight(0xb8c6dd, 0x0b0d12, 0.45));

  // a mesa: grafite com uma grade fina de pontos que some ao longe
  const floorU = { uAcc: { value: ACC }, uGlow: { value: 0 } };
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x0f1319, roughness: 0.92, metalness: 0.0, envMapIntensity: 0.2 });
  floorMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, floorU);
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vWp;").replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvWp = (modelMatrix * vec4(transformed, 1.0)).xyz;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWp; uniform vec3 uAcc; uniform float uGlow;")
      .replace("#include <color_fragment>", `#include <color_fragment>
        vec2 g = abs(fract(vWp.xz / 0.5 + 0.5) - 0.5) * 0.5;
        float dotk = 1.0 - smoothstep(0.012, 0.022, length(g));
        float r = length(vWp.xz);
        diffuseColor.rgb += vec3(0.06, 0.075, 0.09) * dotk * (1.0 - smoothstep(6.0, 22.0, r));
        diffuseColor.rgb *= 1.0 - 0.45 * smoothstep(8.0, 26.0, r);`)
      .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
        totalEmissiveRadiance += uAcc * uGlow * 0.3 * exp(-pow(length(vWp.xz) / 2.0, 2.0));`);
  };
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  const content = new THREE.Group();
  scene.add(content);

  // ------------------------------------------------------------------ texturas de texto
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  // Safari antigo não tem roundRect no canvas
  if (typeof CanvasRenderingContext2D !== "undefined" && !CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
      this.moveTo(x + r, y); this.arcTo(x + w, y, x + w, y + h, r); this.arcTo(x + w, y + h, x, y + h, r); this.arcTo(x, y + h, x, y, r); this.arcTo(x, y, x + w, y, r); this.closePath();
    };
  }
  function textTexture(w, h, draw) {
    const c = document.createElement("canvas");
    const s = 2;
    c.width = w * s; c.height = h * s;
    const x = c.getContext("2d");
    x.scale(s, s);
    draw(x, w, h);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = Math.min(8, maxAniso);
    return t;
  }
  function wrap(x, text, maxW, maxLines) {
    const words = String(text).split(/\s+/);
    const lines = [];
    let cur = "";
    for (const w of words) {
      const t = cur ? `${cur} ${w}` : w;
      if (x.measureText(t).width <= maxW || !cur) cur = t;
      else { lines.push(cur); cur = w; }
    }
    if (cur) lines.push(cur);
    if (lines.length > maxLines) {
      lines.length = maxLines;
      let l = lines[maxLines - 1];
      while (l.length > 1 && x.measureText(`${l}…`).width > maxW) l = l.slice(0, -1);
      lines[maxLines - 1] = `${l}…`;
    }
    return lines;
  }
  function glyph(x, kind, cx, cy, s, color) {
    // pequenos ícones desenhados à mão: prédio (companhia), pessoa, fundo, governo, holding
    x.save();
    x.translate(cx, cy);
    x.strokeStyle = color; x.fillStyle = color; x.lineWidth = s * 0.09; x.lineJoin = "round"; x.lineCap = "round";
    const r = s / 2;
    x.beginPath();
    if (kind === "pf") {
      x.arc(0, -r * 0.32, r * 0.3, 0, Math.PI * 2); x.stroke();
      x.beginPath(); x.moveTo(-r * 0.6, r * 0.62); x.quadraticCurveTo(-r * 0.6, r * 0.05, 0, r * 0.05); x.quadraticCurveTo(r * 0.6, r * 0.05, r * 0.6, r * 0.62); x.stroke();
    } else if (kind === "gov") {
      x.moveTo(-r * 0.7, -r * 0.2); x.lineTo(0, -r * 0.65); x.lineTo(r * 0.7, -r * 0.2); x.closePath(); x.stroke();
      for (const k of [-0.45, 0, 0.45]) { x.beginPath(); x.moveTo(k * r, -r * 0.1); x.lineTo(k * r, r * 0.45); x.stroke(); }
      x.beginPath(); x.moveTo(-r * 0.75, r * 0.62); x.lineTo(r * 0.75, r * 0.62); x.stroke();
    } else if (kind === "fund" || kind === "pen") {
      x.arc(0, 0, r * 0.62, -Math.PI / 2, Math.PI * 1.25); x.stroke();
      x.beginPath(); x.moveTo(0, 0); x.lineTo(0, -r * 0.62); x.moveTo(0, 0); x.lineTo(-r * 0.44, r * 0.44); x.stroke();
    } else if (kind === "ext") {
      x.setLineDash([s * 0.12, s * 0.1]);
      x.strokeRect(-r * 0.6, -r * 0.45, r * 1.2, r * 0.95);
    } else {
      x.moveTo(-r * 0.62, r * 0.62); x.lineTo(-r * 0.62, -r * 0.35); x.lineTo(r * 0.05, -r * 0.65); x.lineTo(r * 0.05, r * 0.62);
      x.moveTo(r * 0.05, -r * 0.1); x.lineTo(r * 0.62, r * 0.05); x.lineTo(r * 0.62, r * 0.62);
      x.moveTo(-r * 0.8, r * 0.62); x.lineTo(r * 0.8, r * 0.62);
      x.stroke();
    }
    x.restore();
  }
  const kindKey = (n) => (n.t === "c" ? "c" : n.t === "p" ? "pf" : n.t === "s" ? "sub" : n.c);

  // ------------------------------------------------------------------ peças
  const CARD = { w: 2.9, h: 0.26, d: 1.12 };
  const cardGeo = new RoundedBoxGeometry(CARD.w, CARD.h, CARD.d, 5, 0.12);
  const labelGeo = new THREE.PlaneGeometry(CARD.w - 0.16, CARD.d - 0.12);
  labelGeo.rotateX(-Math.PI / 2);
  const rimGeo = (() => {
    // contorno aceso em volta da base do cartão (como a borda verde da referência)
    const s = new THREE.Shape();
    const w = CARD.w / 2 + 0.07, d = CARD.d / 2 + 0.07, r = 0.2;
    s.moveTo(-w + r, -d); s.lineTo(w - r, -d); s.quadraticCurveTo(w, -d, w, -d + r); s.lineTo(w, d - r); s.quadraticCurveTo(w, d, w - r, d);
    s.lineTo(-w + r, d); s.quadraticCurveTo(-w, d, -w, d - r); s.lineTo(-w, -d + r); s.quadraticCurveTo(-w, -d, -w + r, -d);
    const hole = new THREE.Path();
    const w2 = w - 0.035, d2 = d - 0.035, r2 = r - 0.03;
    hole.moveTo(-w2 + r2, -d2); hole.lineTo(w2 - r2, -d2); hole.quadraticCurveTo(w2, -d2, w2, -d2 + r2); hole.lineTo(w2, d2 - r2); hole.quadraticCurveTo(w2, d2, w2 - r2, d2);
    hole.lineTo(-w2 + r2, d2); hole.quadraticCurveTo(-w2, d2, -w2, d2 - r2); hole.lineTo(-w2, -d2 + r2); hole.quadraticCurveTo(-w2, -d2, -w2 + r2, -d2);
    s.holes.push(hole);
    const g = new THREE.ShapeGeometry(s, 8);
    g.rotateX(-Math.PI / 2);
    return g;
  })();
  const glowTex = (() => {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const x = c.getContext("2d");
    const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(0.4, "rgba(255,255,255,.35)"); gr.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  })();

  function cardTexture(info) {
    return textTexture(320, 124, (x, w, h) => {
      x.clearRect(0, 0, w, h);
      // ícone num quadrado claro, como um app
      const ix = 14, iy = 14, is = 44;
      x.fillStyle = info.dim ? "#e9ebee" : "#eef6f2";
      x.beginPath(); x.roundRect(ix, iy, is, is, 10); x.fill();
      x.strokeStyle = info.dim ? "#cfd3d8" : "#bfe7d7"; x.lineWidth = 1; x.stroke();
      glyph(x, info.kind, ix + is / 2, iy + is / 2, 26, info.dim ? "#8a9097" : "#1d9c70");
      // nome
      x.fillStyle = info.dim ? "#5b616a" : "#14171c";
      x.font = `700 19px ${FONT}`;
      x.textBaseline = "alphabetic";
      const lines = wrap(x, info.name, w - 80, 2);
      lines.forEach((l, k) => x.fillText(l, 70, 34 + k * 22));
      // linha de baixo: participação em destaque e o tipo
      const y = h - 18;
      x.font = `600 14px ${MONO}`;
      if (info.pct) {
        x.fillStyle = info.ctl ? "#0f8f63" : "#3d4652";
        x.fillText(info.pct, 14, y);
      }
      const pw = info.pct ? x.measureText(info.pct).width + 12 : 0;
      x.font = `500 12px ${MONO}`;
      x.fillStyle = "#6c7480";
      let sub = info.sub.toUpperCase();
      while (sub.length > 4 && x.measureText(sub).width > w - 28 - pw) sub = sub.slice(0, -2);
      x.fillText(sub, 14 + pw, y);
      // barra fina de cor (setor ou tipo)
      x.fillStyle = info.color;
      x.fillRect(14, h - 8, Math.min(w - 28, 40 + 200 * (info.share || 0)), 2.5);
    });
  }
  function hubTexture(n) {
    return textTexture(256, 256, (x, w, h) => {
      const bgr = x.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
      bgr.addColorStop(0, "#0f3a32"); bgr.addColorStop(1, "#08221d");
      x.fillStyle = bgr; x.fillRect(0, 0, w, h);
      x.textAlign = "center";
      const ini = n.tk || n.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((s) => s[0]).join("").toUpperCase();
      x.fillStyle = "#e9fff6";
      x.font = `700 ${ini.length > 5 ? 38 : 50}px ${FONT}`;
      x.fillText(ini, w / 2, h / 2 + 4);
      x.font = `600 15px ${FONT}`;
      x.fillStyle = "rgba(220,240,232,.78)";
      const nm = shortName(n.n);
      x.fillText(nm.length > 24 ? `${nm.slice(0, 22)}…` : nm, w / 2, h / 2 + 36);
      x.font = `500 12px ${MONO}`;
      x.fillStyle = "rgba(150,230,200,.75)";
      x.fillText((n.t === "c" ? (n.mc ? brl(n.mc) : "capital fechado") : kindLabel(n)).toUpperCase(), w / 2, h / 2 - 44);
    });
  }

  // cabo: tubo sobre a mesa com anéis (como uma mangueira corrugada) e energia correndo
  const cableU = { uTime: { value: 0 }, uAcc: { value: ACC }, uGrow: { value: 0 } };
  const cableMat = new THREE.ShaderMaterial({
    uniforms: cableU,
    vertexShader: `attribute float aCtl; attribute float aPhase; attribute float aDir; attribute float aLen; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying float vCtl; varying float vPhase; varying float vDir; varying float vLen;
      void main(){ vUv = uv; vCtl = aCtl; vPhase = aPhase; vDir = aDir; vLen = aLen; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uTime; uniform vec3 uAcc; uniform float uGrow; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying float vCtl; varying float vPhase; varying float vDir; varying float vLen;
      void main(){
        float t = vUv.x;
        float tf = vDir > 0.5 ? t : 1.0 - t; // 0 no dono, 1 no possuído
        if (tf > uGrow) discard;
        vec3 L = normalize(vec3(-0.3, 0.9, 0.35));
        float dif = 0.35 + 0.65 * max(dot(vN, L), 0.0);
        float rimk = pow(1.0 - max(dot(vN, vV), 0.0), 2.5);
        float rings = 0.82 + 0.18 * smoothstep(0.2, 0.8, abs(sin(t * vLen * 22.0)));
        vec3 base = mix(vec3(0.17, 0.19, 0.22), vec3(0.26, 0.29, 0.33), vCtl) * dif * rings + rimk * 0.08;
        // pulsos de comprimento fixo (em unidades da mesa), qualquer que seja o tamanho do cabo
        float w = 0.5 / max(1.0, vLen);
        float e = 0.0;
        for (int k = 0; k < 2; k++) {
          float c = fract(uTime * 0.55 / max(1.0, vLen) + vPhase + float(k) * 0.5);
          float d = c - tf;
          e += smoothstep(w, 0.0, abs(d)) * (d < 0.0 ? 0.5 : 1.0);
        }
        e *= 0.3 + 0.7 * vCtl;
        vec3 col = mix(base, uAcc * 1.6 * dif + uAcc * 0.5, clamp(e, 0.0, 1.0));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });

  // ------------------------------------------------------------------ montar a estrutura
  const T = { open: false, focus: -1, items: [], cables: null, hub: null, t0: 0, a: 0, aTo: 0, hover: null, bounds: null };
  const cam = { x: 0, z: 1.2, dist: 15, tx: 0, tz: 1.2, tdist: 15, vx: 0, vz: 0, yaw: 0 };
  function clear() {
    for (const o of [...content.children]) {
      content.remove(o);
      o.traverse((c) => {
        if (c.geometry && c.geometry !== cardGeo && c.geometry !== labelGeo && c.geometry !== rimGeo) c.geometry.dispose();
        if (c.material) { for (const m of [].concat(c.material)) { if (m.map && m.map !== glowTex) m.map.dispose(); if (m !== cableMat) m.dispose(); } }
      });
    }
    T.items = []; T.cables = null; T.hub = null;
  }

  function build(i, extra) {
    clear();
    const n = W.nodes[i];
    // sobe: quem é dono, até 4 níveis; desce: o que ela tem e o que essas controlam
    const nodes = [{ key: `w${i}`, w: i, lvl: 0 }];
    const keyOf = new Map([[i, nodes[0]]]);
    const links = [];
    let frontier = [i];
    for (let lvl = -1; lvl >= -4 && frontier.length; lvl--) {
      const next = [];
      for (const c of frontier) {
        const owners = W.inc[c].filter((j) => W.ef[j] & 1 || W.ep[j] >= 5 || W.ep[j] < 0).sort((a, b) => (W.ef[b] & 1) - (W.ef[a] & 1) || W.ep[b] - W.ep[a]).slice(0, lvl === -1 ? 14 : 5);
        for (const j of owners) {
          const o = W.es[j];
          if (!keyOf.has(o)) {
            if (lvl < -1 && !(W.ef[j] & 1)) continue; // acima do primeiro nível, só a cadeia de controle
            const nd = { key: `w${o}`, w: o, lvl };
            keyOf.set(o, nd); nodes.push(nd); next.push(o);
          }
          if (keyOf.get(o).lvl < keyOf.get(c).lvl) links.push({ a: keyOf.get(o), b: keyOf.get(c), p: W.ep[j], ctl: W.ef[j] & 1 });
        }
      }
      frontier = next;
    }
    const down = W.out[i].filter((j) => !keyOf.has(W.et[j])).sort((a, b) => (W.ef[b] & 1) - (W.ef[a] & 1) || W.ep[b] - W.ep[a]);
    for (const j of down) {
      const o = W.et[j];
      const nd = { key: `w${o}`, w: o, lvl: 1 };
      keyOf.set(o, nd); nodes.push(nd);
      links.push({ a: keyOf.get(i), b: nd, p: W.ep[j], ctl: W.ef[j] & 1 });
    }
    for (const x of extra || []) {
      const d = String(x.cnpj || "").replace(/\D/g, "");
      const wi = W.byCnpj.get(d);
      if (wi != null && keyOf.has(wi)) continue;
      const nd = wi != null ? { key: `w${wi}`, w: wi, lvl: 1 } : { key: `x${d || x.n}`, ext: x, lvl: 1 };
      if (wi != null) keyOf.set(wi, nd);
      nodes.push(nd);
      links.push({ a: keyOf.get(i), b: nd, p: x.pct, ctl: (x.pct || 0) > 50 });
    }
    for (const nd of nodes.filter((d) => d.lvl === 1 && d.w != null).slice(0, 18)) {
      for (const j of W.out[nd.w].filter((j2) => W.ef[j2] & 1).slice(0, 4)) {
        const o = W.et[j];
        if (keyOf.has(o)) continue;
        const nd2 = { key: `w${o}`, w: o, lvl: 2 };
        keyOf.set(o, nd2); nodes.push(nd2);
        links.push({ a: nd, b: nd2, p: W.ep[j], ctl: 1 });
      }
    }
    // no máximo 64 cartões na frente (as maiores participações primeiro)
    const front = nodes.filter((d) => d.lvl > 0);
    if (front.length > 64) {
      const keep = new Set(front.slice(0, 64));
      for (let k = nodes.length - 1; k >= 0; k--) if (nodes[k].lvl > 0 && !keep.has(nodes[k])) nodes.splice(k, 1);
      for (let k = links.length - 1; k >= 0; k--) if (!nodes.includes(links[k].b) || !nodes.includes(links[k].a)) links.splice(k, 1);
    }
    layout(nodes, links);

    // a peça central
    const hub = new THREE.Group();
    const R = 1.25;
    const prof = [[0, 0], [R, 0], [R + 0.06, 0.05], [R + 0.08, 0.16], [R + 0.06, 0.34], [R, 0.4], [R - 0.12, 0.42], [0, 0.42]].map(([a, b]) => new THREE.Vector2(a, b));
    const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 96), new THREE.MeshStandardMaterial({ color: 0x103a33, roughness: 0.32, metalness: 0.55 }));
    body.castShadow = true; body.receiveShadow = true;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(R - 0.2, 0.045, 16, 128), new THREE.MeshStandardMaterial({ color: ACC, emissive: ACC, emissiveIntensity: 1.6, roughness: 0.3 }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.43;
    const faceTex = hubTexture(n);
    const face = new THREE.Mesh(new THREE.CircleGeometry(R - 0.3, 64), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.45, metalness: 0.2, map: faceTex, emissive: 0xffffff, emissiveMap: faceTex, emissiveIntensity: 0.35 }));
    face.rotation.x = -Math.PI / 2; face.position.y = 0.425;
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), new THREE.MeshBasicMaterial({ map: glowTex, color: ACC, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false }));
    glow.rotation.x = -Math.PI / 2; glow.position.y = 0.012;
    hub.add(body, ring, face, glow);
    hub.userData = { key: `w${i}`, w: i, nd: nodes[0], ring, glow };
    content.add(hub);
    T.hub = hub;

    // os cartões
    const maxShare = Math.max(1, ...links.map((l) => l.p || 0));
    for (const nd of nodes) {
      if (nd.lvl === 0) continue;
      const wn = nd.w != null ? W.nodes[nd.w] : null;
      // a porcentagem do cartão: para quem é dono, a fatia que ele tem no nível de baixo; para o resto, a fatia que o dono
      // de cima tem nele
      const lk = nd.lvl < 0 ? links.find((l) => l.a === nd) : links.find((l) => l.b === nd);
      const ctl = !!(lk && lk.ctl);
      const info = wn
        ? { name: shortName(wn.n), kind: kindKey(wn), color: colorOf(wn), sub: wn.t === "c" ? [wn.tk, wn.mc ? brl(wn.mc) : "capital fechado"].filter(Boolean).join(" · ") : kindLabel(wn), pct: lk && lk.p >= 0 ? pct(lk.p) : "", ctl, share: (lk?.p || 0) / maxShare }
        : { name: nd.ext.n, kind: "ext", color: "#8a9097", sub: nd.ext.pais && !/^brasil$/i.test(nd.ext.pais) ? nd.ext.pais : "capital fechado", pct: lk && lk.p >= 0 ? pct(lk.p) : "", ctl, dim: true, share: (lk?.p || 0) / maxShare };
      const g = new THREE.Group();
      const card = new THREE.Mesh(cardGeo, new THREE.MeshStandardMaterial({ color: info.dim ? 0xb9bdc3 : 0xe8eaec, roughness: 0.5, metalness: 0.0 }));
      card.castShadow = true; card.receiveShadow = true;
      card.position.y = CARD.h / 2 + 0.02;
      const lab = new THREE.Mesh(labelGeo, new THREE.MeshStandardMaterial({ map: cardTexture(info), transparent: true, roughness: 0.55 }));
      lab.position.y = CARD.h + 0.022;
      const rim = new THREE.Mesh(rimGeo, new THREE.MeshBasicMaterial({ color: ctl ? ACC : new THREE.Color(0x6f7c8c), transparent: true, opacity: ctl ? 0.9 : 0.35, blending: THREE.AdditiveBlending, depthWrite: false }));
      rim.position.y = 0.015;
      g.add(card, lab, rim);
      g.position.set(nd.x, 0, nd.z);
      g.userData = { nd, card, rim, ctl, baseY: 0 };
      content.add(g);
      T.items.push(g);
    }

    // os cabos: de cada dono até o possuído, pela mesa
    const geos = [];
    links.forEach((l, k) => {
      const A = l.a.lvl === 0 ? null : l.a, B = l.b.lvl === 0 ? null : l.b;
      const pa = A ? new THREE.Vector3(A.x, 0.13, A.z + (A.z < (B ? B.z : 0) ? CARD.d / 2 : -CARD.d / 2)) : null;
      const pb = B ? new THREE.Vector3(B.x, 0.13, B.z + (B.z < (A ? A.z : 0) ? CARD.d / 2 : -CARD.d / 2)) : null;
      // ponta no centro: sai/chega na borda da peça, apontando para o cartão
      const hubEnd = (p) => { const d = new THREE.Vector3(p.x, 0, p.z).normalize(); return new THREE.Vector3(d.x * (R + 0.05), 0.16, d.z * (R + 0.05)); };
      const p0 = pa || hubEnd(pb), p3 = pb || hubEnd(pa);
      const dz = p3.z - p0.z;
      const p1 = p0.clone().add(new THREE.Vector3(0, 0, dz * 0.5)), p2 = p3.clone().add(new THREE.Vector3(0, 0, -dz * 0.5));
      if (!A) p1.copy(p0).add(new THREE.Vector3(p0.x * 0.5, 0, p0.z * 0.5));
      if (!B) p2.copy(p3).add(new THREE.Vector3(p3.x * 0.5, 0, p3.z * 0.5));
      const curve = new THREE.CubicBezierCurve3(p0, p1, p2, p3);
      const len = curve.getLength();
      const g = new THREE.TubeGeometry(curve, Math.max(24, Math.round(len * 10)), l.ctl ? 0.085 : 0.05, 10, false);
      const nv = g.attributes.position.count;
      g.setAttribute("aCtl", new THREE.BufferAttribute(new Float32Array(nv).fill(l.ctl ? 1 : 0), 1));
      g.setAttribute("aPhase", new THREE.BufferAttribute(new Float32Array(nv).fill((k * 0.173) % 1), 1));
      g.setAttribute("aDir", new THREE.BufferAttribute(new Float32Array(nv).fill(1), 1));
      g.setAttribute("aLen", new THREE.BufferAttribute(new Float32Array(nv).fill(len), 1));
      geos.push(g);
    });
    if (geos.length) {
      const merged = mergeTubes(geos);
      const mesh = new THREE.Mesh(merged, cableMat);
      mesh.castShadow = true;
      content.add(mesh);
      T.cables = mesh;
    }
    // limites para enquadrar
    let x0 = -2, x1 = 2, z0 = -2, z1 = 2;
    for (const nd of nodes) { x0 = Math.min(x0, nd.x - CARD.w / 2); x1 = Math.max(x1, nd.x + CARD.w / 2); z0 = Math.min(z0, nd.z - CARD.d / 2); z1 = Math.max(z1, nd.z + CARD.d / 2); }
    T.bounds = { x0, x1, z0, z1 };
    // enquadramento inicial: o centro, os donos diretos e as primeiras fileiras do que ela tem
    const firstFront = nodes.filter((d) => d.lvl === 1).sort((a, b) => a.z - b.z || a.x - b.x).slice(0, small() ? 6 : 10);
    T.near = nodes.filter((d) => d.lvl === 0 || d.lvl === -1).concat(firstFront);
  }
  function mergeTubes(geos) {
    let nv = 0, ni = 0;
    for (const g of geos) { nv += g.attributes.position.count; ni += g.index.count; }
    const out = new THREE.BufferGeometry();
    const attrs = ["position", "normal", "uv", "aCtl", "aPhase", "aDir", "aLen"];
    const arrs = {};
    for (const a of attrs) arrs[a] = new Float32Array(nv * geos[0].attributes[a].itemSize);
    const idx = new Uint32Array(ni);
    let ov = 0, oi = 0;
    for (const g of geos) {
      for (const a of attrs) arrs[a].set(g.attributes[a].array, ov * g.attributes[a].itemSize);
      const gi = g.index.array;
      for (let k = 0; k < gi.length; k++) idx[oi + k] = gi[k] + ov;
      ov += g.attributes.position.count; oi += gi.length;
      g.dispose();
    }
    for (const a of attrs) out.setAttribute(a, new THREE.BufferAttribute(arrs[a], geos[0].attributes[a].itemSize));
    out.setIndex(new THREE.BufferAttribute(idx, 1));
    return out;
  }

  // fileiras: atrás do centro os donos (do mais distante ao mais próximo), na frente o que a entidade tem
  function layout(nodes, links) {
    const per = small() ? 3 : 5;
    const gapX = 0.45, rowZ = 1.75, levelZ = 3.1;
    const byLvl = new Map();
    for (const nd of nodes) (byLvl.get(nd.lvl) || byLvl.set(nd.lvl, []).get(nd.lvl)).push(nd);
    const parentsX = (nd) => { const ps = links.filter((l) => l.b === nd).map((l) => l.a.x || 0); return ps.length ? ps.reduce((a, b) => a + b, 0) / ps.length : 0; };
    const childX = (nd) => { const cs = links.filter((l) => l.a === nd).map((l) => l.b.x || 0); return cs.length ? cs.reduce((a, b) => a + b, 0) / cs.length : 0; };
    const nodes0 = byLvl.get(0)[0];
    nodes0.x = 0; nodes0.z = 0;
    let z = -levelZ + 0.4;
    for (const lvl of [...byLvl.keys()].filter((l) => l < 0).sort((a, b) => b - a)) {
      const list = byLvl.get(lvl);
      list.sort((a, b) => childX(a) - childX(b));
      for (let r = 0; r < list.length; r += per) {
        const row = list.slice(r, r + per);
        const tw = row.length * CARD.w + (row.length - 1) * gapX;
        row.forEach((nd, k) => { nd.x = -tw / 2 + CARD.w / 2 + k * (CARD.w + gapX); nd.z = z; });
        z -= rowZ;
      }
      z -= levelZ - rowZ;
    }
    z = levelZ - 0.4;
    for (const lvl of [...byLvl.keys()].filter((l) => l > 0).sort((a, b) => a - b)) {
      const list = byLvl.get(lvl);
      if (lvl > 1) list.sort((a, b) => parentsX(a) - parentsX(b));
      for (let r = 0; r < list.length; r += per) {
        const row = list.slice(r, r + per);
        const tw = row.length * CARD.w + (row.length - 1) * gapX;
        row.forEach((nd, k) => { nd.x = -tw / 2 + CARD.w / 2 + k * (CARD.w + gapX); nd.z = z; });
        z += rowZ;
      }
      z += levelZ - rowZ;
    }
  }

  // ------------------------------------------------------------------ câmera da mesa
  const view = { W: 1, H: 1, offX: 0, offY: 0, freeW: 1, freeH: 1 };
  function applyOffset() { camera.setViewOffset(view.W, view.H, -view.offX, -view.offY, view.W, view.H); }
  function frameNear(instant) {
    const b = T.near && T.near.length > 1 ? T.near.reduce((acc, nd) => ({ x0: Math.min(acc.x0, nd.x - CARD.w / 2), x1: Math.max(acc.x1, nd.x + CARD.w / 2), z0: Math.min(acc.z0, nd.z - CARD.d / 2), z1: Math.max(acc.z1, nd.z + CARD.d / 2) }), { x0: -2, x1: 2, z0: -2, z1: 2 }) : T.bounds;
    fitBox(b, instant);
  }
  function fitBox(b, instant) {
    const wv = b.x1 - b.x0 + 1.2, dv = b.z1 - b.z0 + 1.6;
    const aspect = view.freeW / view.H;
    const halfV = (camera.fov * Math.PI) / 360;
    const distW = wv / 2 / Math.tan(halfV) / aspect;
    const distD = (dv / 2 / Math.tan(halfV)) * 0.82 * (view.H / Math.max(200, view.freeH));
    cam.tdist = clamp(Math.max(distW, distD) * 1.05, 6, 60);
    cam.tx = (b.x0 + b.x1) / 2; cam.tz = (b.z0 + b.z1) / 2 + 0.6;
    if (instant) { cam.dist = cam.tdist; cam.x = cam.tx; cam.z = cam.tz; }
  }
  function placeCamera() {
    const tilt = 0.86; // ~49° acima da mesa
    camera.position.set(cam.x + Math.sin(cam.yaw) * Math.cos(tilt) * cam.dist, Math.sin(tilt) * cam.dist, cam.z + Math.cos(cam.yaw) * Math.cos(tilt) * cam.dist);
    camera.lookAt(cam.x, 0, cam.z);
    key.position.set(cam.x - 6, 14, cam.z + 7);
    key.target.position.set(cam.x, 0, cam.z);
  }

  // ------------------------------------------------------------------ interação
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function hit(px, py) {
    ndc.set((px / view.W) * 2 - 1, -(py / view.H) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const objs = T.items.map((g) => g.userData.card);
    if (T.hub) objs.push(T.hub.children[0]);
    const h = ray.intersectObjects(objs, false)[0];
    if (!h) return null;
    return h.object === T.hub?.children[0] ? T.hub : T.items.find((g) => g.userData.card === h.object);
  }
  const ptrs = new Map();
  let drag = null, pinch = null, lastTap = 0;
  function groundAt(px, py) {
    ndc.set((px / view.W) * 2 - 1, -(py / view.H) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const t = -ray.ray.origin.y / ray.ray.direction.y;
    return ray.ray.origin.clone().addScaledVector(ray.ray.direction, t);
  }
  function down(e) {
    if (!T.open) return;
    try { canvas.setPointerCapture(e.pointerId); } catch {}
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) }; drag = null; return; }
    drag = { sx: e.clientX, sy: e.clientY, x: e.clientX, y: e.clientY, moved: false, g: groundAt(e.clientX, e.clientY) };
    cam.vx = cam.vz = 0;
  }
  function move(e) {
    if (!T.open) return;
    if (ptrs.has(e.pointerId)) ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      cam.tdist = clamp(cam.tdist * (pinch.d / Math.max(1, d)), 6.5, 70); cam.dist = cam.tdist;
      pinch.d = d;
      return;
    }
    if (drag) {
      if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > 6) { drag.moved = true; canvas.classList.add("dragging"); }
      if (drag.moved) {
        placeCamera(); camera.updateMatrixWorld();
        const g = groundAt(e.clientX, e.clientY);
        const dx = drag.g.x - g.x, dz = drag.g.z - g.z;
        cam.x += dx; cam.z += dz; cam.tx = cam.x; cam.tz = cam.z;
        cam.vx = dx; cam.vz = dz;
      }
      return;
    }
    if (e.pointerType === "mouse") {
      const h = hit(e.clientX, e.clientY);
      if (h !== T.hover) { T.hover = h; canvas.classList.toggle("pointing", !!h); }
    }
  }
  function up(e) {
    if (!T.open) return;
    ptrs.delete(e.pointerId);
    canvas.classList.remove("dragging");
    if (pinch) { if (ptrs.size < 2) pinch = null; return; }
    if (!drag) return;
    const d = drag;
    drag = null;
    if (d.moved) return;
    const now = performance.now(), dbl = now - lastTap < 320;
    lastTap = now;
    const h = hit(e.clientX, e.clientY);
    if (!h) return;
    const nd = h.userData.nd;
    if (nd.ext) { onExt(nd.ext); return; }
    T.selected = h;
    onPick(nd.w, dbl && h !== T.hub);
  }
  function wheel(e) {
    if (!T.open) return;
    e.preventDefault();
    const f = Math.exp(e.deltaY * (e.ctrlKey ? 0.012 : 0.0016));
    // aproxima em direção ao cursor
    const g = groundAt(e.clientX, e.clientY);
    const nd = clamp(cam.tdist * f, 6.5, 70);
    const k = 1 - nd / cam.tdist;
    cam.tx += (g.x - cam.tx) * k; cam.tz += (g.z - cam.tz) * k;
    cam.tdist = nd;
  }
  canvas.addEventListener("pointerdown", down);
  canvas.addEventListener("pointermove", move);
  canvas.addEventListener("pointerup", up);
  canvas.addEventListener("pointercancel", up);
  canvas.addEventListener("wheel", wheel, { passive: false });

  // ------------------------------------------------------------------ quadro
  let last = performance.now(), time = 0;
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now; time += dt;
    const k = clamp((now - T.t0) / 1400, 0, 1);
    // abertura: a peça sobe, os cartões entram em sequência, os cabos crescem
    if (T.hub) {
      const e = easeOut(clamp(k * 1.8, 0, 1));
      T.hub.scale.setScalar(0.6 + 0.4 * e);
      T.hub.position.y = -0.4 * (1 - e);
      T.hub.userData.ring.material.emissiveIntensity = 1.2 + 0.35 * Math.sin(time * 2.2);
    }
    T.items.forEach((g, idx) => {
      const nd = g.userData.nd;
      const d = clamp((k - 0.15 - Math.min(0.5, (Math.abs(nd.lvl) - 1) * 0.12 + (idx % 12) * 0.025)) / 0.35, 0, 1);
      const e = easeOut(d);
      const hov = T.hover === g ? 1 : 0, sel = T.selected === g ? 1 : 0;
      g.userData.lift = (g.userData.lift || 0) + ((hov * 0.18 + sel * 0.1) - (g.userData.lift || 0)) * Math.min(1, dt * 12);
      g.position.y = -0.5 * (1 - e) + g.userData.lift;
      g.scale.setScalar(0.85 + 0.15 * e);
      g.visible = d > 0;
      g.userData.rim.material.opacity = (g.userData.ctl ? 0.9 : 0.35) * e + sel * 0.4;
    });
    cableU.uGrow.value = easeInOut(clamp((k - 0.3) / 0.6, 0, 1));
    cableU.uTime.value = time;
    floorU.uGlow.value = easeOut(clamp(k * 1.5, 0, 1));
    if (!drag && !pinch) {
      cam.x += (cam.tx - cam.x) * Math.min(1, dt * 6);
      cam.z += (cam.tz - cam.z) * Math.min(1, dt * 6);
    }
    cam.dist += (cam.tdist - cam.dist) * Math.min(1, dt * 7);
    // a névoa acompanha a distância: o que está enquadrado fica nítido, o resto da mesa some no escuro
    scene.fog.near = cam.dist * 1.05; scene.fog.far = cam.dist * 2.6;
    // um leve giro de entrada, depois parado
    cam.yaw = 0.18 * (1 - easeInOut(k));
    placeCamera();
    renderer.render(scene, camera);
  }

  return {
    get focus() { return T.focus; },
    open(i, extra) {
      build(i, extra);
      T.open = true; T.focus = i; T.t0 = performance.now(); T.hover = null; T.selected = T.hub;
      frameNear(true);
      cam.dist = cam.tdist * 1.25;
    },
    close() { T.open = false; T.focus = -1; clear(); },
    frame,
    resize(w, h) { view.W = w; view.H = h; camera.aspect = w / h; camera.updateProjectionMatrix(); applyOffset(); },
    // a mesa fica no meio do espaço entre os painéis
    setFree(left, right, bottom) {
      view.offX = (left - right) / 2; view.offY = -bottom / 2;
      view.freeW = Math.max(200, view.W - left - right); view.freeH = Math.max(200, view.H - bottom);
      applyOffset();
      if (T.open) frameNear(false);
    },
    zoom(f) { cam.tdist = clamp(cam.tdist * f, 6.5, 70); },
    fit() { if (T.bounds) fitBox(T.bounds); },
  };
}
