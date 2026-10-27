/* Portal FPM — Mundo das companhias.
 *
 * Desenha o grafo montado pelo scripts/mundo.py (data/cias/mundo.json): companhias abertas, quem é dono delas, os
 * grupos econômicos e as pessoas que sentam em mais de um conselho. As posições vêm prontas do layout
 * (scripts/mundo_layout.mjs): uma galáxia em que cada setor ocupa uma fatia do disco e cada grupo econômico é uma
 * constelação.
 *
 * Duas camadas: WebGL para o mundo inteiro (fundo, estrelas, milhares de ligações e nós, sempre nítidos e a 60 quadros
 * por segundo) e um canvas 2D por cima para o que é texto ou destaque (rótulos, bússola dos setores, ligações
 * selecionadas com o fluxo de quem é dono para quem é possuído, estrutura societária). Sem WebGL, o canvas 2D desenha
 * uma versão simples do mapa.
 *
 * Três modos: o mundo (tudo de uma vez), a estrutura societária de uma entidade (árvore de quem controla para cima e
 * do que ela controla para baixo) e o caminho entre duas entidades. Desenho sob demanda: só redesenha quando algo muda
 * ou há animação rodando.
 */
(() => {
  "use strict";

  // ---------------------------------------------------------- utilidades
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fold = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const nf = (v, d = 0) => Number(v).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const isNum = (v) => typeof v === "number" && isFinite(v);
  const brl = (v) => (!isNum(v) ? "–" : v >= 1e12 ? `R$ ${nf(v / 1e12, 2)} tri` : v >= 1e9 ? `R$ ${nf(v / 1e9, v >= 1e11 ? 0 : 1)} bi` : v >= 1e6 ? `R$ ${nf(v / 1e6, 0)} mi` : `R$ ${nf(v)}`);
  const pct = (p) => (isNum(p) && p >= 0 ? `${nf(p, p >= 10 || p === Math.round(p) ? (p === Math.round(p) ? 0 : 1) : 2)}%` : "–");
  const plural = (n, s, p) => `${nf(n)} ${n === 1 ? s : p}`;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const icon = (n, cls = "ic") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  const store = {
    get: (k, d) => { try { const v = localStorage.getItem(`n1:${k}`); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set: (k, v) => { try { localStorage.setItem(`n1:${k}`, JSON.stringify(v)); } catch {} },
  };
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const TOUCH = matchMedia("(pointer: coarse)").matches;
  const easeOut = (t) => 1 - Math.pow(1 - t, 4);
  const easeInOut = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2);
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const FONT = "Inter, -apple-system, system-ui, sans-serif";
  const MONO = "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(() => { t.hidden = true; }, 2800);
  }

  // ---------------------------------------------------------- cores
  // Setores em volta do círculo de cores (mesma luminosidade, matiz girando), na mesma ordem das fatias do disco
  // (scripts/mundo_layout.mjs, SECTOR_ORDER): o mapa vira um arco-íris contínuo em vez de manchas soltas.
  // [tema escuro, tema claro, nome curto]
  const SECTOR = {
    fin: ["#80c1ff", "#2d74ca", "Financeiro"], tech: ["#40cfff", "#0084b6", "Tecnologia e telecom"], saude: ["#10d8d8", "#008d90", "Saúde e educação"],
    log: ["#58d9a8", "#008e5e", "Transporte e logística"], agro: ["#8dd37e", "#3d892a", "Agro e alimentos"], ind: ["#c0c657", "#787b00", "Indústria"],
    util: ["#e5b64a", "#9c6a00", "Energia e saneamento"], oil: ["#ffa564", "#b45600", "Petróleo e química"], base: ["#ff9b89", "#bc4a3c", "Mineração e siderurgia"],
    cons: ["#ff97ba", "#b74771", "Varejo e consumo"], imob: ["#e4a0f4", "#9a53aa", "Construção e imóveis"], out: ["#aeb9c4", "#69737d", "Holdings e outros"],
  };
  // nome de uma palavra para a bússola (o nome completo aparece ao passar o mouse)
  const RING_NAME = { fin: "Financeiro", tech: "Tecnologia", saude: "Saúde", log: "Logística", agro: "Agro", ind: "Indústria", util: "Energia", oil: "Petróleo",
    base: "Mineração", cons: "Consumo", imob: "Imobiliário", out: "Holdings" };
  const KIND = {
    pf: ["#e7ccae", "#997243", "Pessoa física"], hold: ["#9badc1", "#3b5b7b", "Holding ou empresa"], fund: ["#9bafeb", "#4458a1", "Gestora ou fundo"],
    pen: ["#baa4e2", "#694b96", "Fundo de pensão"], gov: ["#ebc573", "#9a6b00", "Governo"], sub: ["#8ccfb1", "#007c59", "Controlada em comum"],
  };
  let dark = true;
  const css = {};
  function readTheme() {
    const st = getComputedStyle(document.body);
    for (const k of ["--m-ctl", "--m-hl", "--m-label", "--m-label-2", "--m-label-halo", "--m-group", "--m-card", "--m-card-line", "--m-ink", "--m-muted", "--m-ring"]) css[k] = st.getPropertyValue(k).trim();
    dark = st.getPropertyValue("color-scheme").trim() !== "light";
    if (gl && W.ready) uploadColors();
    request();
  }
  const sectorColor = (c) => (SECTOR[c] || SECTOR.out)[dark ? 0 : 1];
  const colorOf = (n) => (n.t === "c" ? SECTOR[n.c] || SECTOR.out : KIND[n.t === "s" ? "sub" : n.t === "p" ? "pf" : n.c] || KIND.hold)[dark ? 0 : 1];
  const kindLabel = (n) => (n.t === "c" ? "Companhia aberta" : n.t === "s" ? KIND.sub[2] : n.t === "p" ? KIND.pf[2] : (KIND[n.c] || KIND.hold)[2]);
  const hexRGB = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

  // ---------------------------------------------------------- dados
  const W = { ready: false };
  // raio no mapa: o mesmo critério do layout (scripts/mundo_layout.mjs, radius)
  const nodeRadius = (n) => (n.t === "c" ? (n.mc ? 1.8 + 1.25 * Math.log10(1 + n.mc / 1e8) : 1.8) : n.t === "s" ? 1.2 : n.v ? 1 + 0.8 * Math.log10(1 + n.v / 1e8) : 1);

  function prepare(data) {
    const nodes = data.nodes, N = nodes.length;
    Object.assign(W, { data, nodes, N, groups: data.groups || [], setores: data.setores || {} });
    W.x = new Float32Array(N); W.y = new Float32Array(N); W.R = new Float32Array(N);
    const pos = data.pos || [];
    nodes.forEach((n, i) => {
      W.x[i] = pos[2 * i] ?? Math.cos(i) * i * 0.3;
      W.y[i] = pos[2 * i + 1] ?? Math.sin(i) * i * 0.3;
      W.R[i] = nodeRadius(n);
      n.i = i;
      n.f = fold(n.n);
    });
    // arestas de participação (s tem p% de t) com ponto de controle da curva
    const E = data.edges || [];
    const M = E.length;
    W.M = M;
    W.es = new Int32Array(M); W.et = new Int32Array(M); W.ep = new Float32Array(M); W.ef = new Uint8Array(M);
    W.ecx = new Float32Array(M); W.ecy = new Float32Array(M);
    E.forEach(([s, t, p, f], j) => { W.es[j] = s; W.et[j] = t; W.ep[j] = p; W.ef[j] = f; });
    // conselhos: pessoa ↔ companhia
    const B = data.board || [];
    W.B = B.length;
    W.bs = new Int32Array(W.B); W.bt = new Int32Array(W.B); W.br = B.map((b) => b[2]);
    W.bcx = new Float32Array(W.B); W.bcy = new Float32Array(W.B);
    B.forEach(([s, t], j) => { W.bs[j] = s; W.bt[j] = t; });
    curveControls();
    // adjacência
    W.out = Array.from({ length: N }, () => []); W.inc = Array.from({ length: N }, () => []); W.brd = Array.from({ length: N }, () => []);
    for (let j = 0; j < M; j++) { W.out[W.es[j]].push(j); W.inc[W.et[j]].push(j); }
    for (let j = 0; j < W.B; j++) { W.brd[W.bs[j]].push(j); W.brd[W.bt[j]].push(j); }
    // grupos: centro, raio e setor dominante
    W.groups.forEach((g, gi) => {
      g.i = gi;
      g.f = fold(g.n);
      const cos = g.m.filter((m) => nodes[m].t === "c");
      let sx = 0, sy = 0, sw = 0;
      for (const m of cos) { const w = Math.sqrt(nodes[m].mc || 1e8); sx += W.x[m] * w; sy += W.y[m] * w; sw += w; }
      g.cx = sw ? sx / sw : W.x[g.h]; g.cy = sw ? sy / sw : W.y[g.h];
      g.rad = Math.max(8, ...cos.map((m) => Math.hypot(W.x[m] - g.cx, W.y[m] - g.cy) + W.R[m]));
      const cnt = {};
      for (const m of cos) cnt[nodes[m].c] = (cnt[nodes[m].c] || 0) + (nodes[m].mc || 1e8);
      g.sector = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0]?.[0] || "out";
    });
    // grade espacial para achar o nó sob o cursor
    W.cell = 24;
    W.grid = new Map();
    for (let i = 0; i < N; i++) {
      const key = `${Math.floor(W.x[i] / W.cell)},${Math.floor(W.y[i] / W.cell)}`;
      (W.grid.get(key) || W.grid.set(key, []).get(key)).push(i);
    }
    // ordem de prioridade para rótulos: companhias pelo valor de mercado, depois quem tem mais valor ou ligações
    W.deg = Float32Array.from(nodes, (n, i) => W.out[i].length + W.inc[i].length + W.brd[i].length);
    W.labelOrder = nodes.map((n, i) => i).sort((a, b) => prio(b) - prio(a));
    W.crank = new Int32Array(N).fill(1e9);
    nodes.map((n, i) => i).filter((i) => nodes[i].t === "c").sort((a, b) => (nodes[b].mc || 0) - (nodes[a].mc || 0)).forEach((i, r) => { W.crank[i] = r; });
    // extensão do mundo: o disco do anel (com as legendas da bússola) ou, sem anel, a caixa dos nós
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (let i = 0; i < N; i++) { x0 = Math.min(x0, W.x[i]); x1 = Math.max(x1, W.x[i]); y0 = Math.min(y0, W.y[i]); y1 = Math.max(y1, W.y[i]); }
    W.ring = data.ring && data.ring.r ? data.ring : null;
    if (W.ring) {
      const r = W.ring.r * 1.1;
      W.bounds = { x0: -r, x1: r, y0: -r, y1: r };
      W.arcs = W.ring.arcs.map(([c, a0, a1]) => ({ c, a0, a1, mid: (a0 + a1) / 2 }));
    } else W.bounds = { x0, x1, y0, y1 };
    W.byId = new Map(nodes.map((n) => [n.id, n.i]));
    W.byK = new Map(nodes.filter((n) => n.k).map((n) => [n.k, n.i]));
    W.bySlug = new Map(nodes.filter((n) => n.s).map((n) => [n.s, n.i]));
    W.byCnpj = new Map(nodes.filter((n) => n.cnpj).map((n) => [n.cnpj, n.i]));
    W.ready = true;
  }
  const prio = (i) => {
    const n = W.nodes[i];
    return n.t === "c" ? 1e15 + (n.mc || 0) + W.deg[i] * 1e8 : (n.v || 0) + W.deg[i] * 5e8;
  };

  // curvas levemente arqueadas, sempre para o mesmo lado de quem é dono para quem é possuído (ida e volta não se
  // sobrepõem)
  function curveControls() {
    const bend = 0.14;
    for (let j = 0; j < W.M; j++) {
      const a = W.es[j], b = W.et[j], dx = W.x[b] - W.x[a], dy = W.y[b] - W.y[a];
      W.ecx[j] = (W.x[a] + W.x[b]) / 2 - dy * bend; W.ecy[j] = (W.y[a] + W.y[b]) / 2 + dx * bend;
    }
    for (let j = 0; j < W.B; j++) {
      const a = W.bs[j], b = W.bt[j], dx = W.x[b] - W.x[a], dy = W.y[b] - W.y[a];
      W.bcx[j] = (W.x[a] + W.x[b]) / 2 + dy * 0.1; W.bcy[j] = (W.y[a] + W.y[b]) / 2 - dx * 0.1;
    }
  }

  // ---------------------------------------------------------- estado da interface
  const ui = {
    mode: "world", // world | tree | path
    hover: -1, sel: -1, group: -1, sector: null,
    hl: null, // Set de nós destacados (vizinhança, grupo, setor ou caminho)
    hlE: null, hlB: null, // Sets de arestas destacadas
    layers: { people: true, funds: true, board: false, ctlonly: false, groups: true, ...store.get("mundo-layers", {}) },
    pathIds: null,
    intro: 1.4, // 0..1.4: abertura (nós em onda do centro para fora, depois ligações, rótulos e bússola)
    dim: 0, dimTarget: 0, // quanto o resto do mundo apaga
    treeA: 0, treeTarget: 0,
  };
  const INTRO_END = 1.4;
  let vis = new Uint8Array(1);
  let visE = new Uint8Array(1);
  function computeVisibility() {
    vis = new Uint8Array(W.N);
    const L = ui.layers;
    for (let i = 0; i < W.N; i++) {
      const n = W.nodes[i];
      let v = 1;
      if (n.t === "p" && !L.people) v = 0;
      if (n.t === "j" && (n.c === "fund" || n.c === "pen") && !L.funds) v = 0;
      // quem só aparece por estar em dois conselhos some quando a camada de conselhos está desligada
      if (n.b && !L.board && !W.out[i].length && !W.inc[i].length) v = 0;
      if (L.ctlonly && n.t !== "c" && !W.out[i].some((j) => W.ef[j] & 1)) v = 0;
      vis[i] = v;
    }
    visE = new Uint8Array(W.M + W.B);
    for (let j = 0; j < W.M; j++) visE[j] = vis[W.es[j]] && vis[W.et[j]] && (!L.ctlonly || W.ef[j] & 1) ? 1 : 0;
    for (let j = 0; j < W.B; j++) visE[W.M + j] = L.board && vis[W.bs[j]] && vis[W.bt[j]] ? 1 : 0;
    if (gl) uploadState();
    request();
  }

  // ---------------------------------------------------------- câmera
  const cam = { cx: 0, cy: 0, k: 1 };
  let anim = null, inertia = null;
  let Wpx = 0, Hpx = 0, DPR = 1;
  const kMin = () => 0.5 * fitK(), kMax = () => 40;
  // espaço ocupado pelos painéis, para enquadrar o que interessa na área livre
  function insets() {
    const mobile = innerWidth <= 760;
    const panelOpen = !$("#m-panel").hidden;
    return {
      top: mobile ? 64 : 76, bottom: mobile ? (panelOpen ? $("#m-panel").getBoundingClientRect().height || innerHeight * 0.64 : 76) : 24,
      left: !mobile && !$("#m-explore").classList.contains("collapsed") ? 340 : 24,
      right: !mobile && panelOpen ? 424 : 24,
    };
  }
  function fitK(b = W.bounds, pad = 1.02) {
    const ins = insets();
    const w = Math.max(80, Wpx - ins.left - ins.right), h = Math.max(80, Hpx - ins.top - ins.bottom);
    return Math.min(w / ((b.x1 - b.x0) * pad || 1), h / ((b.y1 - b.y0) * pad || 1));
  }
  function fitView(b = W.bounds, pad = 1.02) {
    const ins = insets(), k = fitK(b, pad);
    // centro da área livre, convertido para o mundo
    const sx = (ins.left + Wpx - ins.right) / 2, sy = (ins.top + Hpx - ins.bottom) / 2;
    const cx = (b.x0 + b.x1) / 2 - (sx - Wpx / 2) / k, cy = (b.y0 + b.y1) / 2 - (sy - Hpx / 2) / k;
    return { cx, cy, k };
  }
  const toScreenX = (wx) => (wx - cam.cx) * cam.k + Wpx / 2;
  const toScreenY = (wy) => (wy - cam.cy) * cam.k + Hpx / 2;
  const toWorldX = (sx) => (sx - Wpx / 2) / cam.k + cam.cx;
  const toWorldY = (sy) => (sy - Hpx / 2) / cam.k + cam.cy;
  function flyTo(target, dur = 700) {
    inertia = null;
    if (REDUCED) { Object.assign(cam, target); request(); return; }
    // voo em arco: afasta um pouco no meio quando a distância é grande, como um mapa
    anim = { from: { ...cam }, to: target, t0: performance.now(), dur };
    request();
  }

  // tamanho na tela: de perto, o tamanho real; de longe, maior do que o real (senão o mundo vira poeira), crescendo
  // devagar com o zoom
  const K_REF = 1.6;
  const pxPerUnit = (k = cam.k) => k * Math.max(1, Math.pow(K_REF / k, 0.7));
  const screenR = (i, s = pxPerUnit()) => Math.max(W.R[i] * s, W.nodes[i].t === "c" ? 1.5 : 0.75);

  // ---------------------------------------------------------- laço de desenho sob demanda
  let raf = 0, lastT = 0, lastActive = 0, twinkleReq = false;
  function request() { if (!raf) raf = requestAnimationFrame(frame); }
  function frame(t) {
    raf = 0;
    if (!twinkleReq) lastActive = t;
    twinkleReq = false;
    const dt = Math.min(64, t - (lastT || t));
    lastT = t;
    let busy = false;
    if (anim) {
      const p = clamp((t - anim.t0) / anim.dur, 0, 1), e = anim.ease ? anim.ease(p) : easeInOut(p);
      const { from: a, to: b } = anim;
      // zoom interpolado em escala logarítmica: a velocidade aparente fica constante
      const lk = Math.log(a.k) + (Math.log(b.k) - Math.log(a.k)) * e;
      const dist = Math.hypot(b.cx - a.cx, b.cy - a.cy) * Math.min(a.k, b.k);
      const arc = dist > Wpx * 0.8 ? Math.sin(Math.PI * e) * Math.min(0.55, dist / (Wpx * 6)) : 0;
      cam.k = Math.exp(lk) * (1 - arc);
      cam.cx = a.cx + (b.cx - a.cx) * e;
      cam.cy = a.cy + (b.cy - a.cy) * e;
      if (p >= 1) anim = null;
      busy = true;
    }
    if (inertia) {
      const decay = Math.pow(0.996, dt);
      inertia.vx *= decay; inertia.vy *= decay;
      cam.cx -= (inertia.vx * dt) / cam.k; cam.cy -= (inertia.vy * dt) / cam.k;
      if (Math.hypot(inertia.vx, inertia.vy) < 0.01) inertia = null;
      busy = true;
    }
    if (ui.intro < INTRO_END) { ui.intro = REDUCED ? INTRO_END : clamp((performance.now() - (ui.introT0 || 0)) / 1900, 0, INTRO_END); busy = true; }
    for (const [k, tk, ms] of [["dim", "dimTarget", 320], ["treeA", "treeTarget", 360]]) {
      if (ui[k] !== ui[tk]) {
        const step = dt / (REDUCED ? 1 : ms);
        ui[k] = ui[tk] > ui[k] ? Math.min(ui[tk], ui[k] + step) : Math.max(ui[tk], ui[k] - step);
        busy = true;
      }
    }
    draw(t);
    const flowing = !REDUCED && (ui.hlE?.size || ui.mode === "tree");
    // estrelas piscam devagar: um quadro a cada ~80 ms basta
    if (busy || flowing || pulse()) request();
    else if (gl && dark && !REDUCED && document.visibilityState === "visible" && t - lastActive < 20000) {
      clearTimeout(frame.tw);
      frame.tw = setTimeout(() => { if (!raf) { twinkleReq = true; request(); } }, 80);
    }
    updateHud();
  }
  const pulse = () => !REDUCED && ui.sel >= 0 && ui.mode === "world";

  function resize() {
    DPR = Math.min(2, devicePixelRatio || 1);
    Wpx = innerWidth; Hpx = innerHeight;
    for (const c of [glCanvas, ovl]) { c.width = Math.round(Wpx * DPR); c.height = Math.round(Hpx * DPR); }
    if (gl) gl.viewport(0, 0, glCanvas.width, glCanvas.height);
    drawMini.base = null;
    request();
  }

  // ---------------------------------------------------------- WebGL
  const glCanvas = $("#map");
  const ovl = $("#ovl");
  const ctx = ovl.getContext("2d");
  let gl = null;
  const G = {}; // programas, buffers e contagens
  const SEG = 12; // segmentos de cada curva

  const BG_VS = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`;
  const BG_FS = `precision mediump float;
    uniform vec2 u_view; uniform vec2 u_center; uniform float u_rad; uniform vec3 u_c0; uniform vec3 u_c1; uniform vec3 u_c2; uniform float u_dpr;
    void main(){
      vec2 p = vec2(gl_FragCoord.x, u_view.y * u_dpr - gl_FragCoord.y) / u_dpr;
      float d = length(p - u_center) / max(u_rad, 1.0);
      vec3 col = mix(u_c0, u_c1, smoothstep(0.0, 1.15, d));
      col = mix(col, u_c2, smoothstep(1.05, 2.6, d));
      vec2 q = p / u_view - 0.5;
      col *= 1.0 - dot(q, q) * 0.45;
      float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
      gl_FragColor = vec4(col + (n - 0.5) / 160.0, 1.0);
    }`;
  const STAR_VS = `attribute vec3 a; uniform vec2 u_view; uniform vec2 u_off; uniform float u_dpr; uniform float u_time; uniform float u_alpha; varying float v_b;
    void main(){
      vec2 p = mod(a.xy * u_view * 1.25 + u_off * (0.4 + a.z), u_view * 1.25) - u_view * 0.125;
      gl_Position = vec4(p.x * 2.0 / u_view.x - 1.0, 1.0 - p.y * 2.0 / u_view.y, 0.0, 1.0);
      gl_PointSize = (0.6 + a.z * 1.6) * u_dpr;
      v_b = (0.25 + 0.75 * a.z) * (0.7 + 0.3 * sin(u_time * (0.4 + a.z * 1.3) + a.x * 90.0)) * u_alpha;
    }`;
  const STAR_FS = `precision mediump float; varying float v_b;
    void main(){ float d = length(gl_PointCoord * 2.0 - 1.0); float a = (1.0 - smoothstep(0.2, 1.0, d)) * v_b * 0.55; gl_FragColor = vec4(vec3(0.82, 0.88, 1.0) * a, a); }`;
  const EDGE_VS = `attribute vec2 a_pos; attribute vec4 a_col; attribute vec2 a_st; attribute float a_t;
    uniform vec3 u_cam; uniform vec2 u_view; uniform float u_dim; uniform float u_alpha;
    varying vec4 v_col; varying float v_t;
    void main(){
      vec2 p = (a_pos - u_cam.xy) * u_cam.z;
      gl_Position = vec4(p.x * 2.0 / u_view.x, -p.y * 2.0 / u_view.y, 0.0, 1.0);
      float m = a_st.x * mix(1.0, mix(0.04, 1.0, a_st.y), u_dim) * u_alpha * a_col.a;
      v_col = vec4(a_col.rgb * m, m);
      v_t = a_t;
    }`;
  const EDGE_FS = `precision mediump float; varying vec4 v_col; varying float v_t;
    void main(){ if (v_t > 1.5 && fract((v_t - 2.0) * 26.0) > 0.5) discard; gl_FragColor = v_col; }`;
  const NODE_VS = `attribute vec2 a_pos; attribute float a_r; attribute vec4 a_col; attribute vec2 a_st; attribute vec2 a_misc;
    uniform vec3 u_cam; uniform vec2 u_view; uniform float u_dim; uniform float u_intro; uniform float u_scale; uniform float u_dpr;
    uniform float u_glowV; uniform float u_maxpt; uniform float u_alpha;
    varying vec4 v_col; varying float v_kind; varying float v_px; varying float v_a;
    void main(){
      float t = clamp((u_intro - a_misc.y) / 0.42, 0.0, 1.0);
      t = 1.0 - pow(1.0 - t, 3.0);
      vec2 w = a_pos * mix(0.62, 1.0, t);
      vec2 p = (w - u_cam.xy) * u_cam.z;
      gl_Position = vec4(p.x * 2.0 / u_view.x, -p.y * 2.0 / u_view.y, 0.0, 1.0);
      float company = step(0.5, a_misc.x);
      float r = max(a_r * u_scale, mix(0.75, 1.5, company));
      float on = a_st.x;
      float hl = mix(1.0, mix(0.1, 1.0, a_st.y), u_dim);
      if (u_glowV > 0.5) { r *= 4.5; on *= company; }
      v_px = r * u_dpr;
      gl_PointSize = on > 0.0 ? min(2.0 * v_px + 2.0, u_maxpt) : 0.0;
      v_a = on * hl * t * u_alpha;
      v_col = a_col; v_kind = a_misc.x;
    }`;
  const NODE_FS = `precision mediump float;
    varying vec4 v_col; varying float v_kind; varying float v_px; varying float v_a;
    uniform float u_dark; uniform float u_glow;
    void main(){
      vec2 c = gl_PointCoord * 2.0 - 1.0;
      float d = length(c) * (v_px + 1.0) / max(v_px, 0.001);
      if (u_glow > 0.5) {
        float g = exp(-d * d * 4.0) * 0.3 * v_a;
        gl_FragColor = vec4(v_col.rgb * g, 0.0);
        return;
      }
      float aa = 1.3 / max(v_px, 0.7);
      float body = 1.0 - smoothstep(1.0 - aa, 1.0, d);
      if (body <= 0.002) discard;
      vec3 col = v_col.rgb;
      if (v_kind > 0.5) {
        if (u_dark > 0.5) col = mix(col, vec3(1.0), (1.0 - smoothstep(0.0, 0.62, d)) * 0.62);
        else col = mix(col, vec3(1.0), smoothstep(0.68, 0.84, d) * step(2.6, v_px) * 0.9);
      }
      float a = body * v_a * v_col.a;
      gl_FragColor = vec4(col * a, a);
    }`;

  function compile(vs, fs) {
    const mk = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    };
    const p = gl.createProgram();
    gl.attachShader(p, mk(gl.VERTEX_SHADER, vs)); gl.attachShader(p, mk(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    const loc = { p, a: {}, u: {} };
    for (let i = 0, n = gl.getProgramParameter(p, gl.ACTIVE_ATTRIBUTES); i < n; i++) { const a = gl.getActiveAttrib(p, i); loc.a[a.name] = gl.getAttribLocation(p, a.name); }
    for (let i = 0, n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS); i < n; i++) { const u = gl.getActiveUniform(p, i); loc.u[u.name] = gl.getUniformLocation(p, u.name); }
    return loc;
  }
  function initGL() {
    try {
      gl = glCanvas.getContext("webgl", { antialias: true, alpha: false, premultipliedAlpha: true, powerPreference: "high-performance" });
      if (!gl) return false;
      G.bg = compile(BG_VS, BG_FS);
      G.star = compile(STAR_VS, STAR_FS);
      G.edge = compile(EDGE_VS, EDGE_FS);
      G.node = compile(NODE_VS, NODE_FS);
      G.maxPt = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1] || 64;
      G.quad = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, G.quad);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      // estrelas: posição relativa na tela e brilho
      let s = 11;
      const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
      const stars = new Float32Array(900 * 3);
      for (let i = 0; i < 900; i++) { stars[3 * i] = rnd(); stars[3 * i + 1] = rnd(); stars[3 * i + 2] = Math.pow(rnd(), 3); }
      G.stars = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, G.stars);
      gl.bufferData(gl.ARRAY_BUFFER, stars, gl.STATIC_DRAW);
      glCanvas.addEventListener("webglcontextlost", (e) => { e.preventDefault(); gl = null; request(); });
      // o sistema pode devolver a placa de vídeo depois (aba em segundo plano, troca de GPU): refaz tudo
      glCanvas.addEventListener("webglcontextrestored", () => { if (initGL() && W.ready) { resize(); buildBuffers(); } request(); }, { once: true });
      return true;
    } catch (err) {
      console.warn("WebGL indisponível:", err);
      gl = null;
      return false;
    }
  }

  // nós em ordem de tamanho (os grandes por cima); slot ↔ nó
  function buildBuffers() {
    const N = W.N;
    G.order = Array.from({ length: N }, (_, i) => i).sort((a, b) => W.R[a] - W.R[b]);
    G.slot = new Int32Array(N);
    G.order.forEach((i, s) => { G.slot[i] = s; });
    const pos = new Float32Array(N * 2), r = new Float32Array(N), misc = new Float32Array(N * 2);
    const R0 = W.ring ? W.ring.r : 1500;
    let seed = 3;
    const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
    G.order.forEach((i, s) => {
      pos[2 * s] = W.x[i]; pos[2 * s + 1] = W.y[i]; r[s] = W.R[i];
      misc[2 * s] = W.nodes[i].t === "c" ? 1 : 0;
      // abertura em onda: do centro para fora, com um pouco de acaso para não parecer um anel duro
      misc[2 * s + 1] = clamp(Math.hypot(W.x[i], W.y[i]) / R0, 0, 1) * 0.62 + rnd() * 0.12;
    });
    const buf = (data, usage = gl.STATIC_DRAW) => { const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, usage); return b; };
    G.nPos = buf(pos); G.nR = buf(r); G.nMisc = buf(misc);
    G.nColData = new Uint8Array(N * 4);
    G.nCol = buf(G.nColData, gl.DYNAMIC_DRAW);
    G.nStData = new Uint8Array(N * 2);
    G.nSt = buf(G.nStData, gl.DYNAMIC_DRAW);
    // arestas: cada curva em SEG segmentos (pares de vértices para gl.LINES); participação e depois conselho
    const E = W.M + W.B, V = E * SEG * 2;
    const ep = new Float32Array(V * 2), et = new Float32Array(V);
    for (let j = 0; j < E; j++) {
      const board = j >= W.M, jj = board ? j - W.M : j;
      const a = board ? W.bs[jj] : W.es[j], b = board ? W.bt[jj] : W.et[j];
      const cx = board ? W.bcx[jj] : W.ecx[j], cy = board ? W.bcy[jj] : W.ecy[j];
      const ax = W.x[a], ay = W.y[a], bx = W.x[b], by = W.y[b];
      for (let s = 0; s < SEG; s++) {
        for (let e = 0; e < 2; e++) {
          const u = (s + e) / SEG, iu = 1 - u, v = (j * SEG + s) * 2 + e;
          ep[2 * v] = iu * iu * ax + 2 * iu * u * cx + u * u * bx;
          ep[2 * v + 1] = iu * iu * ay + 2 * iu * u * cy + u * u * by;
          et[v] = board ? 2 + u : u;
        }
      }
    }
    G.eCount = V;
    G.ePos = buf(ep); G.eT = buf(et);
    G.eColData = new Uint8Array(V * 4);
    G.eCol = buf(G.eColData, gl.DYNAMIC_DRAW);
    G.eStData = new Uint8Array(V * 2);
    G.eSt = buf(G.eStData, gl.DYNAMIC_DRAW);
    uploadColors();
    uploadState();
  }

  // cores dos nós e das ligações, conforme o tema; a ligação vai da cor de quem é dono para a cor de quem é possuído
  function uploadColors() {
    if (!gl || !G.nCol) return;
    const N = W.N, nc = G.nColData;
    const rgb = new Array(N);
    for (let i = 0; i < N; i++) rgb[i] = hexRGB(colorOf(W.nodes[i]));
    G.order.forEach((i, s) => {
      const c = rgb[i], n = W.nodes[i];
      nc[4 * s] = c[0]; nc[4 * s + 1] = c[1]; nc[4 * s + 2] = c[2];
      nc[4 * s + 3] = n.t === "c" ? 255 : n.t === "p" ? (dark ? 150 : 170) : dark ? 190 : 200;
    });
    gl.bindBuffer(gl.ARRAY_BUFFER, G.nCol); gl.bufferSubData(gl.ARRAY_BUFFER, 0, nc);
    const ec = G.eColData;
    const gold = dark ? [255, 214, 150] : [176, 112, 16], ink = [38, 48, 82], violet = dark ? [190, 160, 255] : [110, 70, 200];
    const inst = (i) => W.nodes[i].t === "j" && (W.nodes[i].c === "fund" || W.nodes[i].c === "pen");
    for (let j = 0; j < W.M + W.B; j++) {
      const board = j >= W.M, jj = board ? j - W.M : j;
      const a = board ? W.bs[jj] : W.es[j], b = board ? W.bt[jj] : W.et[j];
      const ctl = !board && W.ef[j] & 1;
      let A, B, al;
      if (board) { A = B = violet; al = dark ? 0.16 : 0.22; }
      else if (ctl) { A = mix3(rgb[a], gold, 0.55); B = mix3(rgb[b], gold, 0.55); al = dark ? 0.34 : 0.5; if (!dark) { A = B = gold; } }
      else if (dark) { A = rgb[a]; B = rgb[b]; al = inst(a) ? 0.045 : 0.13; }
      else { A = B = ink; al = inst(a) ? 0.05 : 0.12; }
      for (let s = 0; s < SEG; s++) {
        for (let e = 0; e < 2; e++) {
          const u = (s + e) / SEG, v = (j * SEG + s) * 2 + e;
          ec[4 * v] = A[0] + (B[0] - A[0]) * u; ec[4 * v + 1] = A[1] + (B[1] - A[1]) * u; ec[4 * v + 2] = A[2] + (B[2] - A[2]) * u;
          ec[4 * v + 3] = al * 255;
        }
      }
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, G.eCol); gl.bufferSubData(gl.ARRAY_BUFFER, 0, ec);
  }
  const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

  // visível (camadas) e destacado (seleção, vizinhança, grupo, caminho); o quanto o resto apaga é animado no shader
  function uploadState() {
    if (!gl || !G.nSt) return;
    const hl = ui.hl, hlE = ui.hlE, hlB = ui.hlB;
    const ns = G.nStData;
    for (let i = 0; i < W.N; i++) {
      const s = G.slot[i];
      ns[2 * s] = vis[i] ? 255 : 0;
      ns[2 * s + 1] = !hl || hl.has(i) ? 255 : 0;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, G.nSt); gl.bufferSubData(gl.ARRAY_BUFFER, 0, ns);
    const es = G.eStData, per = SEG * 2;
    for (let j = 0; j < W.M + W.B; j++) {
      const on = visE[j] ? 255 : 0;
      // as destacadas vão para a camada de cima, mais grossas; aqui ficam só um rastro
      const h = !hl ? 255 : (j < W.M ? hlE?.has(j) : hlB?.has(j - W.M)) ? 110 : 0;
      for (let v = j * per, e = v + per; v < e; v++) { es[2 * v] = on; es[2 * v + 1] = h; }
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, G.eSt); gl.bufferSubData(gl.ARRAY_BUFFER, 0, es);
  }

  function attr(loc, buffer, size, type = gl.FLOAT, norm = false) {
    if (loc == null || loc < 0) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, size, type, norm, 0, 0);
  }
  function disableAttrs(prog) { for (const k in prog.a) gl.disableVertexAttribArray(prog.a[k]); }

  // cores do fundo (centro do disco, borda do disco, longe)
  const BG = { dark: [[0.07, 0.095, 0.17], [0.03, 0.042, 0.085], [0.008, 0.011, 0.024]], light: [[0.985, 0.982, 0.972], [0.95, 0.947, 0.935], [0.9, 0.9, 0.89]] };

  function drawGL(t, worldA) {
    const th = dark ? BG.dark : BG.light;
    gl.disable(gl.DEPTH_TEST);
    // fundo: uma nebulosa centrada no disco, que acompanha a câmera
    gl.useProgram(G.bg.p);
    gl.disable(gl.BLEND);
    attr(G.bg.a.a, G.quad, 2);
    gl.uniform2f(G.bg.u.u_view, Wpx, Hpx);
    gl.uniform1f(G.bg.u.u_dpr, DPR);
    gl.uniform2f(G.bg.u.u_center, toScreenX(0), toScreenY(0));
    gl.uniform1f(G.bg.u.u_rad, (W.ring ? W.ring.r : 1500) * cam.k);
    gl.uniform3fv(G.bg.u.u_c0, th[0]); gl.uniform3fv(G.bg.u.u_c1, th[1]); gl.uniform3fv(G.bg.u.u_c2, th[2]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    disableAttrs(G.bg);
    gl.enable(gl.BLEND);
    const intro = ui.intro;
    // estrelas, com paralaxe lenta
    if (dark) {
      gl.useProgram(G.star.p);
      gl.blendFunc(gl.ONE, gl.ONE);
      attr(G.star.a.a, G.stars, 3);
      gl.uniform2f(G.star.u.u_view, Wpx, Hpx);
      gl.uniform2f(G.star.u.u_off, -cam.cx * cam.k * 0.03, -cam.cy * cam.k * 0.03);
      gl.uniform1f(G.star.u.u_dpr, DPR);
      gl.uniform1f(G.star.u.u_time, REDUCED ? 0 : t / 1000);
      gl.uniform1f(G.star.u.u_alpha, smooth(0, 0.5, intro));
      gl.drawArrays(gl.POINTS, 0, 900);
      disableAttrs(G.star);
    }
    if (worldA <= 0.01) return;
    // ligações: soma de luz no escuro (os feixes brilham onde se cruzam); tinta normal no claro
    gl.useProgram(G.edge.p);
    gl.blendFunc(gl.ONE, dark ? gl.ONE : gl.ONE_MINUS_SRC_ALPHA);
    attr(G.edge.a.a_pos, G.ePos, 2);
    attr(G.edge.a.a_col, G.eCol, 4, gl.UNSIGNED_BYTE, true);
    attr(G.edge.a.a_st, G.eSt, 2, gl.UNSIGNED_BYTE, true);
    attr(G.edge.a.a_t, G.eT, 1);
    gl.uniform3f(G.edge.u.u_cam, cam.cx, cam.cy, cam.k);
    gl.uniform2f(G.edge.u.u_view, Wpx, Hpx);
    gl.uniform1f(G.edge.u.u_dim, ui.dim);
    // de perto, as ligações ganham um pouco de força (são menos e mais longas na tela)
    gl.uniform1f(G.edge.u.u_alpha, worldA * smooth(0.5, 1.15, intro) * clamp(0.85 + Math.log2(cam.k / fitK()) * 0.12, 0.85, 1.6));
    gl.drawArrays(gl.LINES, 0, G.eCount);
    disableAttrs(G.edge);
    // nós: brilho (só no escuro) e depois o corpo
    gl.useProgram(G.node.p);
    attr(G.node.a.a_pos, G.nPos, 2);
    attr(G.node.a.a_r, G.nR, 1);
    attr(G.node.a.a_col, G.nCol, 4, gl.UNSIGNED_BYTE, true);
    attr(G.node.a.a_st, G.nSt, 2, gl.UNSIGNED_BYTE, true);
    attr(G.node.a.a_misc, G.nMisc, 2);
    gl.uniform3f(G.node.u.u_cam, cam.cx, cam.cy, cam.k);
    gl.uniform2f(G.node.u.u_view, Wpx, Hpx);
    gl.uniform1f(G.node.u.u_dim, ui.dim);
    gl.uniform1f(G.node.u.u_intro, intro);
    gl.uniform1f(G.node.u.u_scale, pxPerUnit());
    gl.uniform1f(G.node.u.u_dpr, DPR);
    gl.uniform1f(G.node.u.u_maxpt, G.maxPt);
    gl.uniform1f(G.node.u.u_alpha, worldA);
    gl.uniform1f(G.node.u.u_dark, dark ? 1 : 0);
    if (dark) {
      gl.blendFunc(gl.ONE, gl.ONE);
      gl.uniform1f(G.node.u.u_glowV, 1); gl.uniform1f(G.node.u.u_glow, 1);
      gl.drawArrays(gl.POINTS, 0, W.N);
    }
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.uniform1f(G.node.u.u_glowV, 0); gl.uniform1f(G.node.u.u_glow, 0);
    gl.drawArrays(gl.POINTS, 0, W.N);
    disableAttrs(G.node);
  }

  // ---------------------------------------------------------- desenho
  function draw(t) {
    const worldA = 1 - ui.treeA * 0.93;
    if (gl && W.ready) drawGL(t, worldA);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ovl.width, ovl.height);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    if (!W.ready) return;
    if (!gl) drawFallback(worldA);
    // na estrutura societária o mundo vira só um fundo: sem bússola, destaques nem nomes
    const overA = worldA * (1 - smooth(0, 0.5, ui.treeA));
    if (overA > 0.02) {
      drawCompass(t, overA);
      drawHighlights(t, overA);
      drawLabels(overA * smooth(0.9, INTRO_END, ui.intro));
    }
    if (ui.treeA > 0.01 && tree) drawTree(t, ui.treeA);
    drawMini();
  }

  // sem WebGL: só as companhias e as ligações de controle, em 2D
  function drawFallback(alpha) {
    ctx.fillStyle = dark ? "#060a14" : "#f3f2ee";
    ctx.fillRect(0, 0, Wpx, Hpx);
    const s = pxPerUnit();
    ctx.globalAlpha = alpha * 0.5;
    ctx.strokeStyle = `rgb(${css["--m-ctl"]})`;
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    for (let j = 0; j < W.M; j++) {
      if (!(W.ef[j] & 1) || !visE[j]) continue;
      ctx.moveTo(toScreenX(W.x[W.es[j]]), toScreenY(W.y[W.es[j]])); ctx.lineTo(toScreenX(W.x[W.et[j]]), toScreenY(W.y[W.et[j]]));
    }
    ctx.stroke();
    for (const i of W.labelOrder) {
      if (!vis[i]) continue;
      const x = toScreenX(W.x[i]), y = toScreenY(W.y[i]);
      if (x < -10 || x > Wpx + 10 || y < -10 || y > Hpx + 10) continue;
      ctx.globalAlpha = alpha * (ui.hl && !ui.hl.has(i) ? 1 - ui.dim * 0.85 : 1);
      ctx.fillStyle = colorOf(W.nodes[i]);
      ctx.beginPath(); ctx.arc(x, y, screenR(i, s), 0, 6.2832); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  // ---------------------------------------------------------- bússola dos setores (anel em volta do disco)
  function ringGeom() {
    if (!W.ring) return null;
    const cx = toScreenX(0), cy = toScreenY(0), r = W.ring.r * 1.035 * cam.k;
    return { cx, cy, r };
  }
  function drawCompass(t, alpha) {
    const g = ringGeom();
    if (!g || !W.arcs) return;
    const { cx, cy, r } = g;
    // fora da tela (de muito perto, o anel passa longe): nada a desenhar
    const far = Math.hypot(Math.max(Math.abs(cx - Wpx / 2) - Wpx / 2, 0), Math.max(Math.abs(cy - Hpx / 2) - Hpx / 2, 0));
    if (r < 40 || far > r + 80 || Math.hypot(Wpx, Hpx) < r - Math.hypot(cx - Wpx / 2, cy - Hpx / 2) - 60) return;
    const sweep = smooth(0.7, INTRO_END, ui.intro); // o anel se desenha na abertura
    const a = alpha * sweep;
    ctx.save();
    ctx.lineCap = "butt";
    // anel fino e marcas de grau, como um instrumento
    ctx.globalAlpha = a;
    ctx.strokeStyle = `rgba(${css["--m-ring"]},.16)`;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, r + 9, -Math.PI, -Math.PI + 2 * Math.PI * sweep); ctx.stroke();
    if (r > 180) {
      ctx.strokeStyle = `rgba(${css["--m-ring"]},.13)`;
      ctx.beginPath();
      const step = r > 600 ? 1 : 2;
      for (let d = 0; d < 360 * sweep; d += step) {
        const ang = -Math.PI + (d * Math.PI) / 180, long = d % 10 === 0;
        const r0 = r + 9, r1 = r0 + (long ? 6 : 3);
        ctx.moveTo(cx + Math.cos(ang) * r0, cy + Math.sin(ang) * r0); ctx.lineTo(cx + Math.cos(ang) * r1, cy + Math.sin(ang) * r1);
      }
      ctx.stroke();
    }
    // arcos coloridos dos setores
    const gap = Math.min(0.012, 4 / r);
    const hov = ui.sector;
    for (const arc of W.arcs) {
      const end = Math.min(arc.a1, -Math.PI + 2 * Math.PI * sweep);
      if (end <= arc.a0) continue;
      const on = !hov || hov === arc.c;
      ctx.globalAlpha = a * (on ? 1 : 0.3);
      ctx.strokeStyle = sectorColor(arc.c);
      ctx.lineWidth = hov === arc.c ? 3.5 : 2;
      ctx.beginPath(); ctx.arc(cx, cy, r, arc.a0 + gap, end - gap); ctx.stroke();
    }
    // nomes dos setores, curvados ao longo do anel (de cabeça para cima também na metade de baixo)
    if (r > 150) {
      const fs = clamp(r / 46, 9.5, 12);
      ctx.font = `600 ${fs}px ${FONT}`;
      ctx.textBaseline = "middle"; ctx.textAlign = "center";
      for (const arc of W.arcs) {
        const label = (RING_NAME[arc.c] || arc.c).toUpperCase();
        const spacing = fs * 0.16;
        const chars = [...label];
        const widths = chars.map((ch) => ctx.measureText(ch).width + spacing);
        const total = widths.reduce((s2, w) => s2 + w, 0);
        const rr = r + 26;
        const span = (arc.a1 - arc.a0) * rr;
        if (total > span * 0.92 || arc.mid > -Math.PI + 2 * Math.PI * sweep) continue;
        const on = !hov || hov === arc.c;
        ctx.globalAlpha = a * (on ? 0.95 : 0.35);
        ctx.fillStyle = sectorColor(arc.c);
        const bottom = Math.sin(arc.mid) > 0.05; // metade de baixo: escreve no sentido inverso para ler de pé
        let ang = arc.mid + ((bottom ? 1 : -1) * total) / 2 / rr;
        for (let ci = 0; ci < chars.length; ci++) {
          const w = widths[ci];
          const am = ang + ((bottom ? -1 : 1) * w) / 2 / rr;
          ctx.save();
          ctx.translate(cx + Math.cos(am) * rr, cy + Math.sin(am) * rr);
          ctx.rotate(am + (bottom ? -Math.PI / 2 : Math.PI / 2));
          ctx.fillText(chars[ci], 0, 0);
          ctx.restore();
          ang += ((bottom ? -1 : 1) * w) / rr;
        }
      }
      ctx.textAlign = "left";
    }
    ctx.restore();
  }
  // o setor sob o cursor, se ele estiver em cima do anel ou do nome
  function pickSector(sx, sy) {
    const g = ringGeom();
    if (!g || !W.arcs || g.r < 150) return null;
    const d = Math.hypot(sx - g.cx, sy - g.cy);
    if (d < g.r - 6 || d > g.r + 40) return null;
    const ang = Math.atan2(sy - g.cy, sx - g.cx);
    return W.arcs.find((a) => ang >= a.a0 && ang < a.a1)?.c || null;
  }
  function sectorMembers(c) {
    const set = new Set();
    for (let i = 0; i < W.N; i++) if (W.nodes[i].t === "c" && W.nodes[i].c === c) set.add(i);
    return set;
  }
  function flyToSector(c) {
    const arc = W.arcs.find((a) => a.c === c);
    const mem = [...sectorMembers(c)].filter((i) => { const ang = Math.atan2(W.y[i], W.x[i]); return ang >= arc.a0 - 0.2 && ang <= arc.a1 + 0.2; });
    if (!mem.length) return;
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const i of mem) { x0 = Math.min(x0, W.x[i]); x1 = Math.max(x1, W.x[i]); y0 = Math.min(y0, W.y[i]); y1 = Math.max(y1, W.y[i]); }
    flyTo(fitView({ x0, x1, y0, y1 }, 1.15), 900);
  }

  // ---------------------------------------------------------- destaques (ligações selecionadas, fluxo e anéis)
  const sx = (i) => toScreenX(W.x[i]), sy = (i) => toScreenY(W.y[i]);
  function drawHighlights(t, alpha) {
    if (ui.intro < INTRO_END * 0.8) return;
    const a = alpha * ui.dim;
    if ((ui.hlE?.size || ui.hlB?.size) && a > 0.01) {
      ctx.lineCap = "round";
      for (const j of ui.hlB || []) {
        const p = W.bs[j], q = W.bt[j];
        ctx.globalAlpha = a * 0.9;
        ctx.strokeStyle = dark ? "rgba(200,170,255,.85)" : "rgba(110,70,200,.8)";
        ctx.lineWidth = 1.2; ctx.setLineDash([3, 4]);
        ctx.beginPath(); ctx.moveTo(sx(p), sy(p)); ctx.quadraticCurveTo(toScreenX(W.bcx[j]), toScreenY(W.bcy[j]), sx(q), sy(q)); ctx.stroke();
      }
      ctx.setLineDash([]);
      for (const j of ui.hlE || []) {
        const p = W.es[j], q = W.et[j], ctl = W.ef[j] & 1, pc = W.ep[j];
        const x1 = sx(p), y1 = sy(p), x2 = sx(q), y2 = sy(q);
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        if (ctl) { grad.addColorStop(0, `rgba(${css["--m-ctl"]},.95)`); grad.addColorStop(1, `rgba(${css["--m-ctl"]},.7)`); }
        else { grad.addColorStop(0, colorOf(W.nodes[p])); grad.addColorStop(1, colorOf(W.nodes[q])); }
        ctx.globalAlpha = a * (ctl ? 1 : 0.8);
        ctx.strokeStyle = grad;
        ctx.lineWidth = clamp(0.9 + (pc > 0 ? pc / 35 : 0), 0.9, 3) * (ctl ? 1.2 : 1);
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.quadraticCurveTo(toScreenX(W.ecx[j]), toScreenY(W.ecy[j]), x2, y2); ctx.stroke();
      }
      if (!REDUCED) flowDots(t, a);
    }
    // anéis no destacado e no que está sob o cursor
    const s = pxPerUnit();
    for (const i of [ui.sel, ui.hover]) {
      if (i < 0 || i >= W.N) continue;
      const r = screenR(i, s);
      const x = sx(i), y = sy(i);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = i === ui.sel ? `rgb(${css["--m-hl"]})` : `rgba(${css["--m-ring"]},.8)`;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(x, y, r + 4, 0, 6.2832); ctx.stroke();
      if (i === ui.sel && !REDUCED) {
        const ph = ((t || 0) % 2600) / 2600;
        ctx.globalAlpha = alpha * (1 - ph) * 0.55;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(x, y, r + 4 + easeOut(ph) * 22, 0, 6.2832); ctx.stroke();
        // retícula: quatro traços em volta, como uma mira
        ctx.globalAlpha = alpha * 0.7;
        ctx.beginPath();
        const rr = r + 9;
        for (let q = 0; q < 4; q++) { const ang = q * Math.PI / 2 + Math.PI / 4; ctx.moveTo(x + Math.cos(ang) * rr, y + Math.sin(ang) * rr); ctx.lineTo(x + Math.cos(ang) * (rr + 5), y + Math.sin(ang) * (rr + 5)); }
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }
  // pontos que correm pelas ligações destacadas, do dono para o possuído
  function flowDots(t, a) {
    const speed = 0.00032;
    for (const j of ui.hlE) {
      const p = W.es[j], q = W.et[j];
      const x1 = sx(p), y1 = sy(p), x2 = sx(q), y2 = sy(q);
      const len = Math.hypot(x2 - x1, y2 - y1);
      if (len < 16) continue;
      const n = Math.max(1, Math.min(4, Math.round(len / 130)));
      const ctl = W.ef[j] & 1;
      const cx = toScreenX(W.ecx[j]), cy = toScreenY(W.ecy[j]);
      for (let m = 0; m < n; m++) {
        const u = ((t * speed * (320 / Math.max(80, len)) + m / n + j * 0.137) % 1 + 1) % 1;
        const iu = 1 - u;
        const px = iu * iu * x1 + 2 * iu * u * cx + u * u * x2;
        const py = iu * iu * y1 + 2 * iu * u * cy + u * u * y2;
        const fade = Math.sin(Math.PI * u);
        ctx.globalAlpha = a * fade;
        ctx.fillStyle = ctl ? `rgb(${css["--m-ctl"]})` : dark ? "#fff" : colorOf(W.nodes[q]);
        ctx.beginPath(); ctx.arc(px, py, ctl ? 2 : 1.6, 0, 6.2832); ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }

  // ---------------------------------------------------------- rótulos
  // sem sobreposição: em ordem de importância, cada um só entra se couber
  const textW = new Map();
  function measure(s, font) {
    const key = font + s;
    let w = textW.get(key);
    if (w == null) { ctx.font = font; w = ctx.measureText(s).width; textW.set(key, w); }
    return w;
  }
  // áreas cobertas pelos instrumentos de vidro: rótulo ali ficaria escondido
  let uiRects = [], uiRectsT = 0;
  function glassRects() {
    const now = performance.now();
    if (now - uiRectsT < 250) return uiRects;
    uiRectsT = now;
    uiRects = [];
    for (const el of document.querySelectorAll(".m-top > :not(.m-pop), #m-explore, #m-panel, .m-nav > *, #m-hud, #m-mode, #m-hint")) {
      if (el.hidden || el.offsetParent === null) continue;
      const r = el.getBoundingClientRect();
      if (r.width && r.height) uiRects.push([r.left - 4, r.top - 4, r.right + 4, r.bottom + 4]);
    }
    return uiRects;
  }
  function drawLabels(a) {
    if (a <= 0.01) return;
    const k = cam.k, hl = ui.hl, s = pxPerUnit();
    const placed = [...glassRects()];
    const fits = (x0, y0, x1, y1) => {
      if (x0 < 6 || y0 < 6 || x1 > Wpx - 6 || y1 > Hpx - 6) return false;
      for (const r of placed) if (x0 < r[2] && x1 > r[0] && y0 < r[3] && y1 > r[1]) return false;
      return true;
    };
    // a bússola ocupa o anel: rótulos não entram nela
    const g = ringGeom();
    const offRing = (x, y) => !g || g.r < 150 || Math.abs(Math.hypot(x - g.cx, y - g.cy) - g.r - 20) > 26;
    const maxLabels = TOUCH ? 40 : innerWidth < 1100 ? 70 : 120;
    const z = k / fitK();
    const budget = (TOUCH ? 12 : 26) * Math.pow(z, 1.7);
    ctx.textBaseline = "middle";
    ctx.lineJoin = "round";
    // nomes dos grupos econômicos (de longe), em versalete espaçado
    const kf = fitK();
    if (ui.layers.groups && !hl && k > kf * 1.5 && k < kf * 7) {
      const ga = a * smooth(kf * 1.5, kf * 2.1, k) * (1 - smooth(kf * 5, kf * 7, k));
      const fs = 10;
      ctx.font = `600 ${fs}px ${FONT}`;
      let shown = 0;
      const lim = innerWidth < 760 ? 6 : 14;
      for (const gr of W.groups) {
        if (gr.nc < 2 || !gr.mc || shown >= lim) continue;
        if (gr.dup == null) gr.dup = gr.m.some((m) => W.nodes[m].t === "c" && fold(shortName(W.nodes[m].n)) === gr.f);
        if (gr.dup) continue;
        const x = toScreenX(gr.cx), y = toScreenY(gr.cy) - Math.max(gr.rad * k, 8) - 12;
        const label = gr.n.toUpperCase();
        const w = measure(label, ctx.font) + label.length * 1.6 + 4;
        if (!fits(x - w / 2, y - 7, x + w / 2, y + 7) || !offRing(x, y)) continue;
        placed.push([x - w / 2, y - 7, x + w / 2, y + 7]);
        ctx.globalAlpha = ga;
        ctx.fillStyle = css["--m-group"];
        ctx.letterSpacing = "1.6px";
        ctx.fillText(label, x - w / 2 + 2, y);
        ctx.letterSpacing = "0px";
        // traço fino ligando o nome ao grupo
        ctx.globalAlpha = ga * 0.5;
        ctx.fillRect(x - 0.5, y + 7, 1, 5);
        shown++;
      }
    }
    let n = 0;
    const order = hl ? [...hl].sort((p, q) => prio(q) - prio(p)).concat(W.labelOrder) : W.labelOrder;
    const seen = new Set();
    for (const i of order) {
      if (n >= maxLabels) break;
      if (seen.has(i) || !vis[i]) continue;
      seen.add(i);
      const node = W.nodes[i];
      const r = screenR(i, s);
      const inHl = hl && hl.has(i);
      if (hl && !inHl && ui.dim > 0.5) continue;
      // orçamento pelo zoom: de longe só as maiores companhias (a bússola e as cores já orientam); perto, quase todos
      if (!inHl) {
        if (node.t === "c" ? W.crank[i] > budget : z < 5 || r < 3) continue;
      } else if (ui.sector && W.crank[i] > budget * 0.8 + 14) continue;
      const x = sx(i), y = sy(i);
      if (x < -50 || x > Wpx + 50 || y < -20 || y > Hpx + 20) continue;
      const big = node.t === "c" && (W.crank[i] < 12 || r > 7);
      const font = `${big ? 600 : node.t === "c" ? 550 : 500} ${big ? 12.5 : 11}px ${FONT}`;
      const name = shortName(node.n);
      const w = measure(name, font);
      const lx = x + r + 5, ly = y;
      if (!fits(lx - 2, ly - 7, lx + w + 2, ly + 7) || !offRing(lx + w / 2, ly)) continue;
      placed.push([lx - 2, ly - 7, lx + w + 2, ly + 7]);
      ctx.font = font;
      ctx.globalAlpha = a * (hl && !inHl ? 1 - ui.dim : 1);
      ctx.strokeStyle = css["--m-label-halo"];
      ctx.lineWidth = 3;
      ctx.strokeText(name, lx, ly);
      ctx.fillStyle = node.t === "c" || inHl ? css["--m-label"] : css["--m-label-2"];
      ctx.fillText(name, lx, ly);
      // valor de mercado ao lado das maiores, quando há espaço (de perto)
      if (big && node.mc && k > kf * 2.2) {
        const f2 = `500 10px ${MONO}`, v = brl(node.mc).replace("R$ ", "");
        const w2 = measure(v, f2);
        if (fits(lx + w + 6, ly - 6, lx + w + 10 + w2, ly + 6)) {
          placed.push([lx + w + 6, ly - 6, lx + w + 10 + w2, ly + 6]);
          ctx.font = f2; ctx.fillStyle = css["--m-muted"];
          ctx.fillText(v, lx + w + 8, ly + 0.5);
        }
      }
      n++;
    }
    ctx.globalAlpha = 1;
  }
  const shortName = (s) => {
    const t = String(s).replace(/[\s,]+(S\.?\/?A\.?|S\/a|Ltda\.?|Inc\.?|LLC|S\.à ?r\.l\.?|Sarl|S\.R\.L\.)\s*$/i, "").replace(/\s*\(.*?\)\s*$/, "").replace(/[\s,;-]+$/, "");
    return t.length > 34 ? `${t.slice(0, 32)}…` : t;
  };

  // ---------------------------------------------------------- minimapa (o disco inteiro, com a área visível)
  const mini = $("#m-mini");
  const mctx = mini ? mini.getContext("2d") : null;
  function drawMini() {
    if (!mctx || !W.ready || mini.offsetParent === null) return;
    const S = mini.clientWidth, dpr = DPR;
    if (mini.width !== Math.round(S * dpr)) { mini.width = mini.height = Math.round(S * dpr); drawMini.base = null; }
    const R0 = W.ring ? W.ring.r * 1.08 : 1500, sc = (S / 2 - 6) / R0;
    if (!drawMini.base || drawMini.dark !== dark) {
      const b = document.createElement("canvas");
      b.width = b.height = mini.width;
      const c = b.getContext("2d");
      c.scale(dpr, dpr);
      for (let i = W.N - 1; i >= 0; i--) {
        const n = W.nodes[i];
        if (n.t !== "c") continue;
        c.fillStyle = colorOf(n);
        c.globalAlpha = 0.85;
        const r = n.mc > 2e10 ? 1.4 : 0.8;
        c.beginPath(); c.arc(S / 2 + W.x[i] * sc, S / 2 + W.y[i] * sc, r, 0, 6.2832); c.fill();
      }
      if (W.arcs) {
        c.globalAlpha = 0.9; c.lineWidth = 1.5;
        for (const arc of W.arcs) { c.strokeStyle = sectorColor(arc.c); c.beginPath(); c.arc(S / 2, S / 2, W.ring.r * 1.035 * sc, arc.a0 + 0.03, arc.a1 - 0.03); c.stroke(); }
      }
      drawMini.base = b; drawMini.dark = dark;
    }
    mctx.setTransform(1, 0, 0, 1, 0, 0);
    mctx.clearRect(0, 0, mini.width, mini.height);
    mctx.drawImage(drawMini.base, 0, 0);
    mctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // retângulo da área visível
    const x0 = S / 2 + toWorldX(0) * sc, y0 = S / 2 + toWorldY(0) * sc, x1 = S / 2 + toWorldX(Wpx) * sc, y1 = S / 2 + toWorldY(Hpx) * sc;
    if (x1 - x0 < S * 1.2) {
      mctx.strokeStyle = `rgba(${css["--m-ring"]},.9)`;
      mctx.lineWidth = 1;
      mctx.fillStyle = `rgba(${css["--m-ring"]},.07)`;
      mctx.beginPath(); mctx.rect(x0, y0, Math.max(3, x1 - x0), Math.max(3, y1 - y0)); mctx.fill(); mctx.stroke();
    }
    drawMini.sc = sc; drawMini.S = S;
  }
  function miniToWorld(e) {
    const r = mini.getBoundingClientRect();
    const S = drawMini.S || r.width, sc = drawMini.sc || 1;
    return { x: (e.clientX - r.left - S / 2) / sc, y: (e.clientY - r.top - S / 2) / sc };
  }

  // ---------------------------------------------------------- leitura da posição (onde você está)
  let hudKey = "";
  function updateHud() {
    const el = $("#m-hud");
    if (!el || !W.ready) return;
    const kf = fitK();
    const z = cam.k / kf;
    let place = "Visão geral";
    if (ui.mode === "tree") place = "Estrutura societária";
    else if (z > 1.6 && W.arcs) {
      const wx = toWorldX(Wpx / 2), wy = toWorldY(Hpx / 2);
      const rr = Math.hypot(wx, wy);
      if (rr > (W.ring?.r || 0) * 1.15) place = "Fora do mapa";
      else if (rr < (W.ring?.r || 0) * 0.12) place = "Centro do mapa";
      else {
        const ang = Math.atan2(wy, wx);
        const arc = W.arcs.find((a) => ang >= a.a0 && ang < a.a1);
        if (arc) place = SECTOR[arc.c]?.[2] || arc.c;
      }
    }
    const key = `${place}|${z.toFixed(1)}`;
    if (key === hudKey) return;
    hudKey = key;
    el.innerHTML = `<span class="m-hud-place">${esc(place)}</span><span class="m-hud-zoom">${z < 10 ? z.toFixed(1) : Math.round(z)}×</span>`;
  }

  // ---------------------------------------------------------- achar o nó sob o cursor
  function pick(px, py) {
    if (!W.ready) return -1;
    const k = cam.k, s = pxPerUnit();
    const wx = toWorldX(px), wy = toWorldY(py);
    const tol = (TOUCH ? 16 : 6) / k;
    const reach = Math.ceil((tol + 12 * s / k) / W.cell) + 1;
    const cx = Math.floor(wx / W.cell), cy = Math.floor(wy / W.cell);
    let best = -1, bestD = Infinity;
    for (let gx = cx - reach; gx <= cx + reach; gx++) {
      for (let gy = cy - reach; gy <= cy + reach; gy++) {
        const cell = W.grid.get(`${gx},${gy}`);
        if (!cell) continue;
        for (const i of cell) {
          if (!vis[i]) continue;
          const r = screenR(i, s) / k;
          // companhias têm prioridade sobre a poeira de acionistas em volta
          const d = Math.hypot(W.x[i] - wx, W.y[i] - wy) - r - (W.nodes[i].t === "c" ? 2 / k : 0);
          if (d < tol && d < bestD) { best = i; bestD = d; }
        }
      }
    }
    return best;
  }

  // ---------------------------------------------------------- destaque e seleção
  function neighborhood(i) {
    const nodes = new Set([i]), edges = new Set(), brd = new Set();
    for (const j of W.out[i]) { if (vis[W.et[j]] && (!ui.layers.ctlonly || W.ef[j] & 1)) { nodes.add(W.et[j]); edges.add(j); } }
    for (const j of W.inc[i]) { if (vis[W.es[j]] && (!ui.layers.ctlonly || W.ef[j] & 1)) { nodes.add(W.es[j]); edges.add(j); } }
    if (ui.layers.board || W.nodes[i].b) for (const j of W.brd[i]) { const o = W.bs[j] === i ? W.bt[j] : W.bs[j]; nodes.add(o); brd.add(j); }
    return { nodes, edges, brd };
  }
  function setHighlight(nodes, edges, brd, strength = 1) {
    ui.hl = nodes; ui.hlE = edges; ui.hlB = brd;
    ui.dimTarget = nodes ? strength : 0;
    if (gl) uploadState();
    request();
  }
  function select(i, { fly = true, push = true } = {}) {
    if (ui.mode !== "world") exitMode(false);
    hideHint();
    ui.sel = i;
    ui.group = -1;
    if (i < 0) {
      setHighlight(null, null, null);
      closePanel();
      if (push) route("");
      return;
    }
    const nb = neighborhood(i);
    setHighlight(nb.nodes, nb.edges, nb.brd);
    renderPanel(i);
    markRank();
    if (fly) flyToNodes([...nb.nodes]);
    if (push) route(`n/${W.nodes[i].id}`);
  }
  function selectGroup(gi, { push = true } = {}) {
    if (ui.mode !== "world") exitMode(false);
    hideHint();
    const g = W.groups[gi];
    ui.sel = -1; ui.group = gi;
    const nodes = new Set(g.m), edges = new Set();
    for (const m of g.m) for (const j of W.out[m]) if (nodes.has(W.et[j])) edges.add(j);
    setHighlight(nodes, edges, new Set());
    renderGroupPanel(gi);
    markRank();
    flyToNodes(g.m);
    if (push) route(`g/${gi}`);
  }
  function flyToNodes(list) {
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const i of list) { x0 = Math.min(x0, W.x[i] - W.R[i]); x1 = Math.max(x1, W.x[i] + W.R[i]); y0 = Math.min(y0, W.y[i] - W.R[i]); y1 = Math.max(y1, W.y[i] + W.R[i]); }
    const span = Math.max(x1 - x0, y1 - y0);
    // vizinhança enorme (um fundo com 60 participações): enquadra mas sem afastar demais
    const minSpan = 60;
    if (span < minSpan) { const c = [(x0 + x1) / 2, (y0 + y1) / 2]; x0 = c[0] - minSpan / 2; x1 = c[0] + minSpan / 2; y0 = c[1] - minSpan / 2; y1 = c[1] + minSpan / 2; }
    const v = fitView({ x0, x1, y0, y1 }, 1.3);
    v.k = clamp(v.k, kMin(), 16);
    flyTo(v, 900);
  }

  // ---------------------------------------------------------- dica ao passar o mouse
  function showTip(i, px, py) {
    const tip = $("#m-tip");
    if (i < 0 || TOUCH) { tip.hidden = true; return; }
    const n = W.nodes[i];
    const rows = [];
    if (n.t === "c") {
      rows.push([n.tk || "Capital fechado", n.mc ? brl(n.mc) : ""]);
      const ctl = mainController(i);
      if (ctl >= 0) rows.push(["Controle", shortName(W.nodes[ctl].n)]);
    } else {
      rows.push([kindLabel(n), n.v ? `≈ ${brl(n.v)}` : ""]);
    }
    const cos = new Set([...W.out[i].map((j) => W.et[j]), ...W.inc[i].map((j) => W.es[j])]).size;
    rows.push(["Ligações", nf(cos + W.brd[i].length)]);
    tip.innerHTML = `<div class="m-tip-head"><i style="background:${colorOf(n)}"></i><b>${esc(n.n)}</b></div>${rows.map(([a, b]) => `<div class="row"><span>${esc(a)}</span><span>${esc(b)}</span></div>`).join("")}`;
    tip.hidden = false;
    const w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = `${clamp(px + 18, 8, Wpx - w - 8)}px`;
    tip.style.top = `${py + 18 + h > Hpx - 8 ? py - h - 14 : py + 18}px`;
  }
  function showSectorTip(c, px, py) {
    const tip = $("#m-tip");
    if (!c || TOUCH) { tip.hidden = true; return; }
    const mem = sectorMembers(c);
    let mc = 0;
    for (const i of mem) mc += W.nodes[i].mc || 0;
    tip.innerHTML = `<div class="m-tip-head"><i style="background:${sectorColor(c)}"></i><b>${esc(W.setores[c] || SECTOR[c]?.[2] || c)}</b></div><div class="row"><span>Companhias</span><span>${nf(mem.size)}</span></div><div class="row"><span>Valor de mercado</span><span>${brl(mc)}</span></div><div class="row muted"><span>Clique para ir até lá</span></div>`;
    tip.hidden = false;
    const w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = `${clamp(px + 18, 8, Wpx - w - 8)}px`;
    tip.style.top = `${py + 18 + h > Hpx - 8 ? py - h - 14 : py + 18}px`;
  }

  // ---------------------------------------------------------- controle societário
  // o principal controlador: entre quem tem o controle, o de maior participação
  function mainController(i) {
    let best = -1, bp = -2;
    for (const j of W.inc[i]) if (W.ef[j] & 1 && W.ep[j] > bp) { bp = W.ep[j]; best = W.es[j]; }
    return best;
  }
  function controlChain(i) {
    const chain = [i], seen = new Set([i]);
    for (;;) {
      const p = mainController(chain[chain.length - 1]);
      if (p < 0 || seen.has(p)) break;
      seen.add(p); chain.push(p);
    }
    return chain;
  }
  const edgeBetween = (a, b) => W.out[a].find((j) => W.et[j] === b);

  // ---------------------------------------------------------- painel
  function badgeHtml(n) {
    const col = colorOf(n);
    if (n.t === "c") {
      const ini = n.n.replace(/[^A-Za-zÀ-ÿ0-9 ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
      return `<span class="m-badge" style="--c:${col}"><span>${esc(ini)}</span>${n.tk ? `<img src="https://icons.brapi.dev/icons/${esc(n.tk)}.svg" alt="" loading="lazy" onload="this.naturalWidth > 1 ? this.classList.add('ok') : this.remove()" onerror="this.remove()">` : ""}</span>`;
    }
    if (n.t === "p") {
      const ini = n.n.split(/\s+/).filter((w) => w && !/^(de|da|do|das|dos|e)$/i.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
      return `<span class="m-badge round" style="--c:${col}"><span>${esc(ini)}</span></span>`;
    }
    return `<span class="m-badge" style="--c:${col}">${icon("cias")}</span>`;
  }
  function rowHtml(i, pctText, sub, ctl) {
    const n = W.nodes[i];
    return `<li data-go="${i}"><span class="m-dot" style="--c:${colorOf(n)}"></span><span class="nm">${esc(n.n)}</span>
      <span class="pc ${ctl ? "m-ctl" : ""}">${esc(pctText)}</span>${sub ? `<small>${esc(sub)}</small>` : ""}</li>`;
  }
  function listHtml(rows, limit = 8, id = "") {
    if (!rows.length) return "";
    const shown = rows.slice(0, limit).join("");
    return `<ul class="m-list" ${id ? `data-list="${id}"` : ""}>${shown}${rows.length > limit ? `<li class="more" data-more="${id}">Mostrar mais ${rows.length - limit}</li>` : ""}</ul>`;
  }
  // composição acionária em rosca: cada acionista relevante uma fatia, o resto em cinza
  function donutHtml(inc) {
    const holders = inc.filter((x) => x.p > 0).slice(0, 7);
    if (!holders.length) return "";
    let sum = holders.reduce((s, x) => s + x.p, 0);
    const scale = sum > 100 ? 100 / sum : 1;
    sum = Math.min(100, sum);
    const R = 46, C = 2 * Math.PI * R;
    let acc = 0;
    const segs = holders.map((x) => {
      const frac = (x.p * scale) / 100, len = Math.max(0, frac * C - 2);
      const seg = `<circle r="${R}" cx="60" cy="60" fill="none" stroke="${colorOf(W.nodes[x.o])}" stroke-width="${x.ctl ? 13 : 10}" stroke-dasharray="${len.toFixed(2)} ${(C - len).toFixed(2)}" stroke-dashoffset="${(-acc * C).toFixed(2)}" data-go="${x.o}"><title>${esc(W.nodes[x.o].n)} · ${pct(x.p)}</title></circle>`;
      acc += frac;
      return seg;
    }).join("");
    const top = holders[0];
    const legend = holders.slice(0, 5).map((x) => `<li data-go="${x.o}"><i style="--c:${colorOf(W.nodes[x.o])}"></i><span>${esc(shortName(W.nodes[x.o].n))}</span><b>${pct(x.p)}</b></li>`).join("")
      + (sum < 99.5 ? `<li class="rest"><i></i><span>Demais acionistas</span><b>${pct(100 - sum)}</b></li>` : "");
    return `<div class="m-donut"><svg viewBox="0 0 120 120" aria-hidden="true"><circle r="${R}" cx="60" cy="60" fill="none" class="m-donut-track" stroke-width="10"/><g transform="rotate(-90 60 60)">${segs}</g>
      <text x="60" y="56" text-anchor="middle" class="m-donut-v">${pct(top.p)}</text><text x="60" y="72" text-anchor="middle" class="m-donut-l">${top.ctl ? "controle" : "maior fatia"}</text></svg>
      <ul>${legend}</ul></div>`;
  }
  let panelRows = {};
  const ROLE = { P: "Presidente do conselho", E: "Diretor-presidente (CEO)", C: "Conselho de administração", D: "Diretoria" };

  function renderPanel(i) {
    const n = W.nodes[i];
    const body = $("#m-panel-body");
    const inc = W.inc[i].map((j) => ({ j, o: W.es[j], p: W.ep[j], ctl: W.ef[j] & 1 })).sort((a, b) => b.ctl - a.ctl || b.p - a.p);
    const out = W.out[i].map((j) => ({ j, o: W.et[j], p: W.ep[j], ctl: W.ef[j] & 1 })).sort((a, b) => b.ctl - a.ctl || (W.nodes[b.o].mc || 0) * b.p - (W.nodes[a.o].mc || 0) * a.p || b.p - a.p);
    const brd = W.brd[i].map((j) => ({ j, o: W.bs[j] === i ? W.bt[j] : W.bs[j], r: W.br[j] }));
    const g = n.g != null ? W.groups[n.g] : null;
    const chain = controlChain(i);
    const ctlOut = out.filter((x) => x.ctl).length;
    const subs = [];
    if (n.t === "c") subs.push(n.tk || "capital fechado", n.st, n.uf);
    else subs.push(kindLabel(n), n.pais, n.cnpj ? fmtCnpj(n.cnpj) : "");
    const stats = n.t === "c"
      ? [["Valor de mercado", n.mc ? brl(n.mc) : "–"], ["Acionistas", nf(inc.length)], ["Participações", nf(out.length)]]
      : [["Participações", nf(out.length)], ["Valor estimado", n.v ? brl(n.v) : "–"], [brd.length ? "Cargos" : "Controla", nf(brd.length || ctlOut)]];
    panelRows = {
      inc: inc.map((x) => rowHtml(x.o, pct(x.p), [x.ctl ? "controlador" : "", W.ef[x.j] & 2 ? "acordo de acionistas" : "", kindLabel(W.nodes[x.o])].filter(Boolean).join(" · "), x.ctl)),
      out: out.map((x) => rowHtml(x.o, pct(x.p), [x.ctl ? "controla" : "", W.nodes[x.o].mc ? `valor de mercado ${brl(W.nodes[x.o].mc)}` : kindLabel(W.nodes[x.o])].filter(Boolean).join(" · "), x.ctl)),
      brd: brd.map((x) => {
        const o = W.nodes[x.o];
        if (n.t === "c") {
          const others = W.brd[x.o].map((j) => (W.bs[j] === x.o ? W.bt[j] : W.bs[j])).filter((c) => c !== i).map((c) => shortName(W.nodes[c].n));
          return rowHtml(x.o, "", `${ROLE[x.r] || "Cargo"} aqui · também em ${others.slice(0, 3).join(", ")}${others.length > 3 ? ` e mais ${others.length - 3}` : ""}`, false);
        }
        return rowHtml(x.o, "", `${ROLE[x.r] || "Cargo"}${o.mc ? ` · ${brl(o.mc)}` : ""}`, false);
      }),
    };
    const profile = n.t === "c" && n.k ? `cias.html#cia/${encodeURIComponent(n.k)}` : n.s ? `cias.html#pessoa/${encodeURIComponent(n.s)}` : "";
    const sectorName = n.t === "c" ? W.setores[n.c] || SECTOR[n.c]?.[2] : "";
    body.innerHTML = `
      <div class="m-kicker" style="--c:${colorOf(n)}"><i></i>${esc(n.t === "c" ? sectorName || "Companhia aberta" : kindLabel(n))}</div>
      <div class="m-head">${badgeHtml(n)}<div><h2>${esc(n.n)}</h2><p>${esc(subs.filter(Boolean).join(" · "))}</p></div></div>
      ${g && g.nc >= 2 ? `<div class="m-chips"><button class="m-chip gold" data-group="${g.i}" type="button">${icon("cias", "ic ic-xs")}Grupo ${esc(g.n)} · ${plural(g.nc, "companhia", "companhias")}</button></div>` : ""}
      <div class="m-stats">${stats.map(([a, b]) => `<div class="m-stat"><span>${a}</span><b>${esc(b)}</b></div>`).join("")}</div>
      <div class="m-btns">
        <button class="m-btn primary" type="button" data-act="tree">${icon("tree")}Estrutura societária</button>
        <button class="m-btn" type="button" data-act="path">${icon("path")}Conectar com…</button>
        ${profile ? `<a class="m-btn wide ghost" href="${profile}">${n.t === "c" ? "Perfil completo da companhia" : "Perfil completo"} ${icon("ext")}</a>` : ""}
      </div>
      <div id="m-pick-slot"></div>
      ${n.t === "c" && inc.length ? `<div class="m-sec"><h3>Composição acionária<small>participações relevantes</small></h3>${donutHtml(inc)}</div>` : ""}
      ${chain.length > 1 ? `<div class="m-sec"><h3>Quem controla<small>do controlador final até aqui</small></h3><ol class="m-chain">${chain.slice().reverse().map((c, idx, arr) => {
        const next = arr[idx + 1];
        const e = next != null ? edgeBetween(c, next) : null;
        const label = e == null ? "" : W.ef[e] & 2 ? `bloco de controle · ${pct(W.ep[e])}` : `controla com ${pct(W.ep[e])}`;
        return `<li data-go="${c}" class="${c === i ? "me" : ""}"><span class="nm">${esc(W.nodes[c].n)}</span><span class="pc">${label}</span></li>`;
      }).join("")}</ol></div>` : ""}
      ${inc.length ? `<div class="m-sec"><h3>${n.t === "c" ? "Acionistas" : "Quem é dono"}<small>${plural(inc.length, "acionista", "acionistas")} relevante${inc.length === 1 ? "" : "s"}</small></h3>${listHtml(panelRows.inc, 8, "inc")}</div>` : ""}
      ${out.length ? `<div class="m-sec"><h3>${n.t === "c" ? "Participações em outras" : "Participações"}<small>${plural(out.length, "empresa", "empresas")}</small></h3>${listHtml(panelRows.out, 8, "out")}</div>` : ""}
      ${brd.length ? `<div class="m-sec"><h3>${n.t === "c" ? "Quem do conselho ou da diretoria também está em outras" : "Cargos"}<small>${plural(brd.length, n.t === "c" ? "pessoa" : "companhia", n.t === "c" ? "pessoas" : "companhias")}</small></h3>${listHtml(panelRows.brd, 8, "brd")}</div>` : ""}
      <p class="m-foot">Participações acima de 5% e controladores, como declarados no Formulário de Referência de cada companhia à CVM${n.v ? "; valor estimado = participação × valor de mercado" : ""}.</p>`;
    openPanel();
  }
  const fmtCnpj = (d) => (d.length === 14 ? `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}` : d);

  function renderGroupPanel(gi) {
    const g = W.groups[gi];
    const cos = g.m.filter((m) => W.nodes[m].t === "c").sort((a, b) => (W.nodes[b].mc || 0) - (W.nodes[a].mc || 0));
    const head = W.nodes[g.h];
    panelRows = { cos: cos.map((m) => rowHtml(m, W.nodes[m].mc ? brl(W.nodes[m].mc) : "", [W.nodes[m].tk, m === g.h ? "topo do grupo" : ""].filter(Boolean).join(" · "), false)) };
    // barra com o peso de cada companhia no valor do grupo
    const tot = cos.reduce((s, m) => s + (W.nodes[m].mc || 0), 0);
    const bar = tot ? `<div class="m-bar">${cos.filter((m) => W.nodes[m].mc).slice(0, 12).map((m) => `<span data-go="${m}" style="flex:${W.nodes[m].mc / tot};--c:${colorOf(W.nodes[m])}" title="${esc(W.nodes[m].n)} · ${brl(W.nodes[m].mc)}"></span>`).join("")}</div>` : "";
    $("#m-panel-body").innerHTML = `
      <div class="m-kicker" style="--c:${sectorColor(g.sector)}"><i></i>Grupo econômico · ${esc(SECTOR[g.sector]?.[2] || "")}</div>
      <div class="m-head"><span class="m-badge" style="--c:${sectorColor(g.sector)}">${icon("cias")}</span><div><h2>Grupo ${esc(g.n)}</h2><p>${plural(g.nc, "companhia aberta", "companhias abertas")} · ${plural(g.m.length, "entidade", "entidades")}</p></div></div>
      <div class="m-stats">
        <div class="m-stat"><span>Valor de mercado</span><b>${esc(g.mc ? brl(g.mc) : "–")}</b></div>
        <div class="m-stat"><span>Companhias</span><b>${nf(g.nc)}</b></div>
        <div class="m-stat"><span>Entidades</span><b>${nf(g.m.length)}</b></div>
      </div>
      ${bar}
      <div class="m-btns">
        <button class="m-btn primary wide" type="button" data-act="tree" data-node="${g.h}">${icon("tree")}Estrutura a partir de ${esc(shortName(head.n))}</button>
      </div>
      ${g.r.length ? `<div class="m-sec"><h3>Controle final</h3>${listHtml(g.r.map((r) => rowHtml(r, "", kindLabel(W.nodes[r]), true)), 6)}</div>` : ""}
      <div class="m-sec"><h3>Companhias do grupo<small>valor de mercado</small></h3>${listHtml(panelRows.cos, 12, "cos")}</div>
      <p class="m-foot">Grupo = companhias que chegam ao mesmo topo seguindo, em cada uma, o acionista controlador de maior participação.</p>`;
    openPanel();
  }

  const glassChanged = () => { uiRectsT = 0; request(); };
  function openPanel() {
    const p = $("#m-panel");
    // no celular, na estrutura e no caminho a folha abre baixa: o desenho é o que importa
    p.classList.toggle("peek", innerWidth <= 760 && ui.mode !== "world");
    p.hidden = false;
    document.body.classList.add("panel-open");
    $("#m-panel-body").scrollTop = 0;
    glassChanged();
  }
  function closePanel() {
    $("#m-panel").hidden = true;
    document.body.classList.remove("panel-open");
    glassChanged();
  }

  // ---------------------------------------------------------- estrutura societária (árvore)
  let tree = null;
  const tcam = { cx: 0, cy: 0, k: 1 };
  const CARD_W = 214, CARD_H = 58, GAP_X = 18, GAP_Y = 100;

  async function openTree(i, { push = true } = {}) {
    const n = W.nodes[i];
    ui.mode = "tree";
    ui.sel = i;
    setHighlight(null, null, null);
    // sobe: quem é dono, até 4 níveis; desce: o que ela tem (e o que essas têm), mais as controladas do Formulário
    const nodes = [{ key: `w${i}`, w: i, lvl: 0 }];
    const keyOf = new Map([[i, nodes[0]]]);
    const links = [];
    let frontier = [i];
    for (let lvl = -1; lvl >= -4 && frontier.length; lvl--) {
      const next = [];
      for (const c of frontier) {
        const owners = W.inc[c].filter((j) => W.ef[j] & 1 || W.ep[j] >= 5 || W.ep[j] < 0).sort((a, b) => (W.ef[b] & 1) - (W.ef[a] & 1) || W.ep[b] - W.ep[a]).slice(0, lvl === -1 ? 16 : 6);
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
    // desce
    const down1 = W.out[i].filter((j) => !keyOf.has(W.et[j])).sort((a, b) => (W.ef[b] & 1) - (W.ef[a] & 1) || W.ep[b] - W.ep[a]);
    for (const j of down1) {
      const o = W.et[j];
      const nd = { key: `w${o}`, w: o, lvl: 1 };
      keyOf.set(o, nd); nodes.push(nd);
      links.push({ a: keyOf.get(i), b: nd, p: W.ep[j], ctl: W.ef[j] & 1 });
    }
    // controladas que não estão no mapa (capital fechado), do perfil da companhia
    let extra = [];
    if (n.t === "c" && n.k) {
      try {
        const p = await fetch(`data/cias/perfil/${encodeURIComponent(n.k)}.json`, { cache: "no-cache" }).then((r) => (r.ok ? r.json() : {}));
        extra = (p.participacoes || []).filter((x) => !W.byCnpj.has(String(x.cnpj || "").replace(/\D/g, "")) || !keyOf.has(W.byCnpj.get(String(x.cnpj || "").replace(/\D/g, ""))));
      } catch { extra = []; }
      if (ui.mode !== "tree" || ui.sel !== i) return;
    }
    for (const x of extra) {
      const wi = W.byCnpj.get(String(x.cnpj || "").replace(/\D/g, ""));
      if (wi != null && keyOf.has(wi)) continue;
      const nd = wi != null ? { key: `w${wi}`, w: wi, lvl: 1 } : { key: `x${x.cnpj || x.n}`, ext: x, lvl: 1 };
      if (wi != null) keyOf.set(wi, nd);
      nodes.push(nd);
      links.push({ a: keyOf.get(i), b: nd, p: x.pct, ctl: (x.pct || 0) > 50 });
    }
    // segundo nível para baixo: só o que as companhias controladas no mapa controlam
    for (const nd of nodes.filter((d) => d.lvl === 1 && d.w != null).slice(0, 24)) {
      for (const j of W.out[nd.w].filter((j2) => W.ef[j2] & 1).slice(0, 6)) {
        const o = W.et[j];
        if (keyOf.has(o)) continue;
        const nd2 = { key: `w${o}`, w: o, lvl: 2 };
        keyOf.set(o, nd2); nodes.push(nd2);
        links.push({ a: nd, b: nd2, p: W.ep[j], ctl: 1 });
      }
    }
    tree = layoutTree(nodes, links, i);
    tree.t0 = performance.now();
    renderPanel(i); // antes de enquadrar: no celular a folha baixa muda a área livre
    // câmera da árvore: enquadra o foco e seus vizinhos imediatos
    const b = tree.bounds;
    const ins = insets();
    // nunca tão longe que o texto dos cartões fique ilegível; o que não couber se vê arrastando
    const k = clamp(Math.min((Wpx - ins.left - ins.right) / (b.x1 - b.x0 + 80), (Hpx - ins.top - ins.bottom - 40) / (b.y1 - b.y0 + 80)), TOUCH ? 0.62 : 0.72, 1.15);
    Object.assign(tcam, { cx: (b.x0 + b.x1) / 2 - ((ins.left - ins.right) / 2) / k, cy: (b.y0 + b.y1) / 2 - ((ins.top - ins.bottom) / 2) / k, k });
    ui.treeTarget = 1;
    hideHint();
    $("#m-mode").hidden = false;
    $("#m-mode-text").innerHTML = `<span class="m-mode-k">Estrutura societária</span><b>${esc(n.n)}</b>`;
    request();
    if (push) route(`e/${n.id}`);
  }

  // camadas: cada nível em linhas; muitos itens quebram em várias linhas; ordem pelo pai (menos cruzamentos)
  function layoutTree(nodes, links, focus) {
    const byLvl = new Map();
    for (const nd of nodes) (byLvl.get(nd.lvl) || byLvl.set(nd.lvl, []).get(nd.lvl)).push(nd);
    const lvls = [...byLvl.keys()].sort((a, b) => a - b);
    const maxPerRow = Math.max(4, Math.floor((Math.max(900, Wpx * 1.4)) / (CARD_W + GAP_X)));
    const parentsOf = new Map();
    for (const l of links) (parentsOf.get(l.b.key) || parentsOf.set(l.b.key, []).get(l.b.key)).push(l);
    let y = 0;
    const place = (lvl) => {
      const list = byLvl.get(lvl) || [];
      if (lvl > 0) list.sort((a, b) => (parentX(a) - parentX(b)) || pctOf(b) - pctOf(a));
      else if (lvl < 0) list.sort((a, b) => childX(a) - childX(b) || pctOf(b) - pctOf(a));
      const rows = [];
      for (let r = 0; r < list.length; r += maxPerRow) rows.push(list.slice(r, r + maxPerRow));
      return rows;
    };
    const parentX = (nd) => { const ps = parentsOf.get(nd.key) || []; return ps.length ? ps.reduce((s, l) => s + (l.a.x || 0), 0) / ps.length : 0; };
    const childX = (nd) => { const cs = links.filter((l) => l.a === nd); return cs.length ? cs.reduce((s, l) => s + (l.b.x || 0), 0) / cs.length : 0; };
    const pctOf = (nd) => { const ps = parentsOf.get(nd.key) || links.filter((l) => l.a === nd); return Math.max(0, ...ps.map((l) => l.p || 0)); };
    const setRow = (row, ry, wFocus) => {
      const total = row.reduce((s, nd) => s + (nd.lvl === 0 ? wFocus : CARD_W), 0) + GAP_X * (row.length - 1);
      let x = -total / 2;
      for (const nd of row) { const w = nd.lvl === 0 ? wFocus : CARD_W; nd.x = x + w / 2; nd.y = ry; nd.w2 = w; x += w + GAP_X; }
    };
    const focusNode = byLvl.get(0)[0];
    focusNode.x = 0; focusNode.y = 0; focusNode.w2 = CARD_W + 56;
    y = 0;
    for (const lvl of lvls.filter((l) => l < 0).sort((a, b) => b - a)) {
      const rows = place(lvl);
      for (const row of rows) { y -= CARD_H + GAP_Y * (row === rows[0] ? 1 : 0.35); setRow(row, y, CARD_W); }
    }
    y = 0;
    for (const lvl of lvls.filter((l) => l > 0).sort((a, b) => a - b)) {
      const rows = place(lvl);
      for (const row of rows) { y += CARD_H + GAP_Y * (row === rows[0] ? 1 : 0.35); setRow(row, y, CARD_W); }
    }
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const nd of nodes) { x0 = Math.min(x0, nd.x - nd.w2 / 2); x1 = Math.max(x1, nd.x + nd.w2 / 2); y0 = Math.min(y0, nd.y - CARD_H / 2); y1 = Math.max(y1, nd.y + CARD_H / 2); }
    // enquadramento inicial: foco, um nível acima e o começo de baixo
    const near = nodes.filter((nd) => Math.abs(nd.lvl) <= 1);
    let nx0 = Infinity, nx1 = -Infinity, ny0 = Infinity, ny1 = -Infinity;
    for (const nd of near) { nx0 = Math.min(nx0, nd.x - nd.w2 / 2); nx1 = Math.max(nx1, nd.x + nd.w2 / 2); ny0 = Math.min(ny0, nd.y - CARD_H / 2); ny1 = Math.max(ny1, nd.y + CARD_H / 2); }
    ny1 = Math.min(ny1, (near.find((nn) => nn.lvl === 0)?.y || 0) + (CARD_H + GAP_Y) * 2.2);
    return { nodes, links, focus, all: { x0, x1, y0, y1 }, bounds: { x0: Math.max(nx0, -Wpx), x1: Math.min(nx1, Wpx), y0: ny0, y1: ny1 }, hover: null };
  }

  function treeCardText(nd) {
    if (nd.w != null) {
      const n = W.nodes[nd.w];
      return { name: n.n, color: colorOf(n), kind: n.t === "c" ? (n.tk || "Companhia aberta") : kindLabel(n), sub: n.t === "c" ? (n.mc ? brl(n.mc) : "capital fechado") : n.v ? `≈ ${brl(n.v)}` : "", inMap: true };
    }
    const x = nd.ext;
    return { name: x.n, color: dark ? "#6b7280" : "#9ca3af", kind: "Capital fechado", sub: x.pais && !/^brasil$/i.test(x.pais) ? x.pais : x.uf || "", inMap: false };
  }
  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  function fitText(s, font, max) {
    if (measure(s, font) <= max) return s;
    let lo = 0, hi = s.length;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (measure(s.slice(0, mid) + "…", font) <= max) lo = mid; else hi = mid - 1; }
    return s.slice(0, lo) + "…";
  }
  const tx = (x) => (x - tcam.cx) * tcam.k + Wpx / 2, ty = (y) => (y - tcam.cy) * tcam.k + Hpx / 2;
  function drawTree(t, a) {
    const k = tcam.k;
    const e = easeOut(a);
    const ctlRGB = css["--m-ctl"];
    // os cartões entram nível a nível, a partir do foco
    const age = REDUCED ? 1e9 : (t || performance.now()) - (tree.t0 || 0);
    const appear = (lvl) => easeOut(clamp((age - Math.abs(lvl) * 90) / 380, 0, 1));
    // ligações em curva vertical, com a porcentagem perto de quem é dono (acima) ou da controlada (abaixo)
    for (const l of tree.links) {
      const ap = appear(Math.max(Math.abs(l.a.lvl), Math.abs(l.b.lvl)));
      const x1 = tx(l.a.x), y1 = ty(l.a.y + CARD_H / 2), x2 = tx(l.b.x), y2 = ty(l.b.y - CARD_H / 2);
      if (Math.max(y1, y2) < 0 || Math.min(y1, y2) > Hpx || Math.max(x1, x2) < -200 || Math.min(x1, x2) > Wpx + 200) continue;
      const hov = tree.hover && (tree.hover === l.a || tree.hover === l.b);
      const my = (y1 + y2) / 2;
      ctx.globalAlpha = e * ap;
      ctx.strokeStyle = l.ctl ? `rgba(${ctlRGB},${hov ? 1 : 0.75})` : `rgba(${css["--m-ring"]},${hov ? 0.7 : 0.28})`;
      ctx.lineWidth = (l.ctl ? 1.6 : 1) * clamp(k, 0.7, 1.3);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.bezierCurveTo(x1, my, x2, my, x2, y2); ctx.stroke();
      if (!REDUCED) {
        const u = ((t || 0) * 0.00026 + (l.a.x + l.b.x) * 0.0007) % 1;
        const iu = 1 - u;
        const px = iu ** 3 * x1 + 3 * iu * iu * u * x1 + 3 * iu * u * u * x2 + u ** 3 * x2;
        const py = iu ** 3 * y1 + 3 * iu * iu * u * my + 3 * iu * u * u * my + u ** 3 * y2;
        ctx.globalAlpha = e * ap * Math.sin(Math.PI * u);
        ctx.fillStyle = l.ctl ? `rgb(${ctlRGB})` : `rgba(${css["--m-ring"]},.9)`;
        ctx.beginPath(); ctx.arc(px, py, 2 * clamp(k, 0.7, 1.3), 0, 6.2832); ctx.fill();
      }
      if (isNum(l.p) && l.p >= 0 && k > 0.45) {
        const label = pct(l.p);
        const fs = 10.5 * clamp(k, 0.8, 1.25);
        const font = `500 ${fs}px ${MONO}`;
        const w = measure(label, font) + 12, h = 17 * clamp(k, 0.8, 1.25);
        const u = l.a.lvl < 0 ? 0.22 : 0.78, iu = 1 - u;
        const lx = iu ** 3 * x1 + 3 * iu * iu * u * x1 + 3 * iu * u * u * x2 + u ** 3 * x2;
        const ly = iu ** 3 * y1 + 3 * iu * iu * u * my + 3 * iu * u * u * my + u ** 3 * y2;
        ctx.globalAlpha = e * ap;
        ctx.fillStyle = css["--m-card"];
        roundRect(lx - w / 2, ly - h / 2, w, h, h / 2); ctx.fill();
        ctx.strokeStyle = l.ctl ? `rgba(${ctlRGB},.6)` : css["--m-card-line"]; ctx.lineWidth = 1; ctx.stroke();
        ctx.fillStyle = l.ctl ? `rgb(${ctlRGB})` : css["--m-muted"];
        ctx.font = font; ctx.textBaseline = "middle"; ctx.textAlign = "center";
        ctx.fillText(label, lx, ly + 0.5);
        ctx.textAlign = "left";
      }
    }
    // cartões
    for (const nd of tree.nodes) {
      const ap = appear(nd.lvl);
      if (ap <= 0) continue;
      const w = nd.w2 * k, h = CARD_H * k;
      const x = tx(nd.x) - w / 2, y = ty(nd.y) - h / 2 + (1 - ap) * 10 * Math.sign(nd.lvl || 1);
      if (x > Wpx || x + w < 0 || y > Hpx || y + h < 0) continue;
      const { name, color, kind, sub, inMap } = treeCardText(nd);
      const focus = nd.lvl === 0, hov = tree.hover === nd;
      ctx.globalAlpha = e * ap;
      // halo da cor do setor atrás do foco
      if (focus && dark) {
        const gr = ctx.createRadialGradient(x + w / 2, y + h / 2, 0, x + w / 2, y + h / 2, w * 0.75);
        gr.addColorStop(0, color + "33"); gr.addColorStop(1, color + "00");
        ctx.fillStyle = gr; ctx.fillRect(x - w * 0.3, y - h * 1.5, w * 1.6, h * 4);
      }
      ctx.shadowColor = dark ? "rgba(0,0,0,.5)" : "rgba(20,30,60,.12)";
      ctx.shadowBlur = focus || hov ? 24 : 10; ctx.shadowOffsetY = 4;
      ctx.fillStyle = css["--m-card"];
      roundRect(x, y, w, h, 12 * k); ctx.fill();
      ctx.shadowColor = "transparent"; ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
      ctx.strokeStyle = focus ? color : hov ? `rgba(${css["--m-hl"]},.75)` : css["--m-card-line"];
      ctx.lineWidth = focus ? 1.5 : 1;
      ctx.stroke();
      // ponto da cor do setor ou do tipo, com brilho
      const dx = x + 16 * k, dy = y + h * 0.33;
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(dx, dy, 3.5 * k, 0, 6.2832); ctx.fill();
      if (k > 0.32) {
        const fs1 = (focus ? 14.5 : 12.5) * k, fs0 = 9 * k, fs2 = 10.5 * k;
        const f0 = `600 ${fs0}px ${FONT}`, f1 = `${focus ? 650 : 600} ${fs1}px ${FONT}`, f2 = `500 ${fs2}px ${MONO}`;
        ctx.textBaseline = "middle";
        // o valor à direita primeiro; o tipo ocupa o que sobrar
        let subW = 0;
        if (sub) {
          const st = fitText(sub, f2, w * 0.42);
          subW = measure(st, f2) + 10 * k;
          ctx.font = f2; ctx.fillStyle = css["--m-muted"];
          ctx.textAlign = "right";
          ctx.fillText(st, x + w - 12 * k, dy + 0.5);
          ctx.textAlign = "left";
        }
        ctx.font = f0; ctx.fillStyle = css["--m-muted"];
        ctx.letterSpacing = `${0.8 * k}px`;
        ctx.fillText(fitText(kind.toUpperCase(), f0, w - 37 * k - subW), dx + 9 * k, dy + 0.5);
        ctx.letterSpacing = "0px";
        ctx.font = f1; ctx.fillStyle = inMap ? css["--m-ink"] : css["--m-muted"];
        ctx.fillText(fitText(name, f1, w - 26 * k), x + 13 * k, y + h * 0.68);
      }
    }
    ctx.globalAlpha = 1;
    if (age < 1200) request();
  }
  function pickTree(px, py) {
    if (!tree) return null;
    const x = (px - Wpx / 2) / tcam.k + tcam.cx, y = (py - Hpx / 2) / tcam.k + tcam.cy;
    return tree.nodes.find((nd) => Math.abs(x - nd.x) <= nd.w2 / 2 && Math.abs(y - nd.y) <= CARD_H / 2) || null;
  }

  // ---------------------------------------------------------- caminho entre duas entidades
  function findPath(a, b) {
    // busca em largura no grafo sem direção (participações e conselhos); gestoras e fundos não servem de ponte,
    // porque ligam quase tudo a quase tudo com 5% e escondem as ligações que importam
    const bridgeOk = (i) => !(W.nodes[i].t === "j" && (W.nodes[i].c === "fund" || W.nodes[i].c === "pen")) || i === a || i === b;
    const prev = new Int32Array(W.N).fill(-1), via = new Int32Array(W.N).fill(-1);
    const q = [a];
    prev[a] = a;
    while (q.length) {
      const u = q.shift();
      if (u === b) break;
      if (u !== a && !bridgeOk(u)) continue;
      const step = (v, e) => { if (prev[v] === -1) { prev[v] = u; via[v] = e; q.push(v); } };
      for (const j of W.out[u]) step(W.et[j], j);
      for (const j of W.inc[u]) step(W.es[j], j);
      for (const j of W.brd[u]) step(W.bs[j] === u ? W.bt[j] : W.bs[j], -2 - j);
    }
    if (prev[b] === -1) return null;
    const path = [b], ev = [];
    for (let v = b; v !== a; v = prev[v]) { ev.unshift(via[v]); path.unshift(prev[v]); }
    return { path, ev };
  }
  function showPath(a, b, { push = true } = {}) {
    const r = findPath(a, b);
    if (!r) { toast(`Não há ligação entre ${shortName(W.nodes[a].n)} e ${shortName(W.nodes[b].n)} sem passar por gestoras ou fundos`); return; }
    ui.mode = "path";
    ui.sel = -1;
    const nodes = new Set(r.path), edges = new Set(), brd = new Set();
    for (const e of r.ev) { if (e >= 0) edges.add(e); else brd.add(-2 - e); }
    ui.pathIds = [a, b];
    hideHint();
    setHighlight(nodes, edges, brd);
    $("#m-mode").hidden = false;
    $("#m-mode-text").innerHTML = `<span class="m-mode-k">Caminho</span><b>${esc(shortName(W.nodes[a].n))} → ${esc(shortName(W.nodes[b].n))}</b><span class="m-mode-n">${plural(r.ev.length, "passo", "passos")}</span>`;
    const steps = r.ev.map((e) => {
      const nm = (i) => `<b data-go="${i}">${esc(W.nodes[i].n)}</b>`;
      if (e >= 0) {
        const own = W.es[e], owned = W.et[e], p = W.ep[e], ctl = W.ef[e] & 1;
        return `<li>${nm(own)} ${ctl ? "controla" : "tem"} ${p >= 0 ? `${pct(p)} de` : "participação em"} ${nm(owned)}</li>`;
      }
      const j = -2 - e, person = W.bs[j], co = W.bt[j];
      return `<li>${nm(person)} está ${({ P: "na presidência do conselho", E: "na presidência executiva", C: "no conselho de administração", D: "na diretoria" })[W.br[j]] || "na administração"} de ${nm(co)}</li>`;
    });
    $("#m-panel-body").innerHTML = `
      <div class="m-kicker" style="--c:rgb(${css["--m-hl"]})"><i></i>Caminho mais curto</div>
      <div class="m-head"><span class="m-badge" style="--c:rgb(${css["--m-hl"]})">${icon("path")}</span><div><h2>Como se conectam</h2><p>${esc(shortName(W.nodes[a].n))} e ${esc(shortName(W.nodes[b].n))}</p></div></div>
      <div class="m-sec"><h3>O caminho<small>${plural(r.ev.length, "ligação", "ligações")}</small></h3><ol class="m-path">${steps.join("")}</ol></div>
      <div class="m-btns"><button class="m-btn wide" type="button" data-sel="${a}">Voltar para ${esc(shortName(W.nodes[a].n))}</button><button class="m-btn wide" type="button" data-sel="${b}">Ir para ${esc(shortName(W.nodes[b].n))}</button></div>
      <p class="m-foot">Ligações por participação acionária (5% ou mais, ou controle) e por pessoas que estão no conselho ou na diretoria das duas. Gestoras e fundos não contam como ponte.</p>`;
    openPanel();
    flyToNodes(r.path);
    if (push) route(`c/${W.nodes[a].id}/${W.nodes[b].id}`);
  }

  function exitMode(push = true) {
    if (ui.mode === "tree") { ui.treeTarget = 0; setTimeout(() => { if (ui.treeTarget === 0) tree = null; }, 450); }
    ui.mode = "world";
    $("#m-mode").hidden = true;
    ui.pathIds = null;
    if (push) {
      if (ui.sel >= 0) select(ui.sel, { fly: false });
      else { setHighlight(null, null, null); route(""); }
    }
    request();
  }

  // ---------------------------------------------------------- busca
  function search(q, limit = 9) {
    const f = fold(q.trim());
    if (f.length < 2) return [];
    const words = f.split(/\s+/);
    const out = [];
    for (const g of W.groups) {
      if (g.nc < 2) continue;
      if (words.every((w) => g.f.includes(w))) out.push({ g: g.i, s: (g.f.startsWith(f) ? 100 : 50) + Math.log10(g.mc || 10) });
    }
    for (const n of W.nodes) {
      if (!vis[n.i] && n.t !== "c") continue;
      let s = 0;
      if (n.f === f || (n.tk && fold(n.tk) === f)) s = 120;
      else if (n.f.startsWith(f) || (n.tk && fold(n.tk).startsWith(f))) s = 90;
      else if (words.every((w) => n.f.includes(w))) s = n.f.split(/\s+/).some((w) => w.startsWith(words[0])) ? 60 : 35;
      if (!s) continue;
      s += n.t === "c" ? 12 + Math.log10(n.mc || 1e6) : Math.log10(n.v || 1e6) + W.deg[n.i] * 0.2;
      out.push({ i: n.i, s });
    }
    return out.sort((a, b) => b.s - a.s).slice(0, limit);
  }
  function resultsHtml(res) {
    if (!res.length) return `<li class="none">Nada com esse nome no mapa.</li>`;
    const groups = [["Grupos econômicos", res.filter((r) => r.g != null)], ["Companhias", res.filter((r) => r.i != null && W.nodes[r.i].t === "c")], ["Pessoas e investidores", res.filter((r) => r.i != null && W.nodes[r.i].t !== "c")]];
    let k = 0;
    return groups.filter(([, l]) => l.length).map(([label, l]) => `<li class="grp" role="presentation">${label}</li>` + l.map((r) => {
      const idx = k++;
      if (r.g != null) {
        const g = W.groups[r.g];
        return `<li role="option" data-idx="${idx}" aria-selected="false"><span class="m-dot" style="--c:${sectorColor(g.sector)}"></span><span class="m-r-txt"><b>Grupo ${esc(g.n)}</b><small>${plural(g.nc, "companhia", "companhias")}${g.mc ? ` · ${brl(g.mc)}` : ""}</small></span></li>`;
      }
      const n = W.nodes[r.i];
      return `<li role="option" data-idx="${idx}" aria-selected="false"><span class="m-dot" style="--c:${colorOf(n)}"></span><span class="m-r-txt"><b>${esc(n.n)}</b><small>${esc(n.t === "c" ? [n.tk, n.mc ? brl(n.mc) : "capital fechado", n.st].filter(Boolean).join(" · ") : [kindLabel(n), n.v ? `≈ ${brl(n.v)}` : ""].filter(Boolean).join(" · "))}</small></span></li>`;
    }).join("")).join("");
  }
  function wireSearch(input, list, onPick) {
    let res = [], sel = 0;
    const render = () => {
      res = search(input.value);
      const order = [...res.filter((r) => r.g != null), ...res.filter((r) => r.i != null && W.nodes[r.i].t === "c"), ...res.filter((r) => r.i != null && W.nodes[r.i].t !== "c")];
      res = order;
      sel = Math.min(sel, Math.max(0, res.length - 1));
      list.hidden = !input.value.trim();
      list.innerHTML = resultsHtml(res);
      list.querySelectorAll("[data-idx]").forEach((li) => li.setAttribute("aria-selected", String(+li.dataset.idx === sel)));
      input.closest("[role=combobox]")?.setAttribute("aria-expanded", String(!list.hidden));
    };
    const choose = (r) => { if (!r) return; input.value = ""; list.hidden = true; input.blur(); onPick(r); };
    input.addEventListener("input", () => { sel = 0; render(); });
    input.addEventListener("focus", () => { if (input.value.trim()) render(); });
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + res.length) % Math.max(1, res.length); render(); }
      else if (e.key === "Enter") { e.preventDefault(); choose(res[sel]); }
      else if (e.key === "Escape") { input.value = ""; list.hidden = true; input.blur(); }
    });
    list.addEventListener("pointerdown", (e) => { const li = e.target.closest("[data-idx]"); if (li) { e.preventDefault(); choose(res[+li.dataset.idx]); } });
    document.addEventListener("pointerdown", (e) => { if (!list.contains(e.target) && e.target !== input) list.hidden = true; });
  }

  // ---------------------------------------------------------- explorar
  let rankTab = "groups";
  function renderRank() {
    const list = $("#m-rank");
    const note = $("#m-tab-note");
    let html = "";
    if (rankTab === "groups") {
      note.textContent = "Grupos econômicos pelo valor de mercado das companhias abertas que reúnem.";
      const top = W.groups.filter((g) => g.nc >= 2);
      const max = top[0]?.mc || 1;
      html = top.slice(0, 60).map((g) => `<li data-group="${g.i}" class="${ui.group === g.i ? "on" : ""}" style="--c:${sectorColor(g.sector)};--w:${((g.mc || 0) / max * 100).toFixed(1)}%"><b>${esc(g.n)}</b><span class="v">${g.mc ? brl(g.mc).replace("R$ ", "") : ""}</span>
        <small>${plural(g.nc, "companhia", "companhias")}${g.r.length ? ` · ${esc(g.r.slice(0, 2).map((r) => shortName(W.nodes[r].n)).join(", "))}` : ""}</small><i class="m-rank-bar"></i></li>`).join("");
    } else if (rankTab === "investors") {
      note.textContent = "Quem tem mais valor em participações diretas (participação × valor de mercado).";
      const top = W.nodes.filter((n) => n.t !== "c" && n.v).sort((a, b) => b.v - a.v).slice(0, 60);
      const max = top[0]?.v || 1;
      html = top.map((n) => `<li data-go="${n.i}" class="${ui.sel === n.i ? "on" : ""}" style="--c:${colorOf(n)};--w:${(n.v / max * 100).toFixed(1)}%"><b>${esc(shortName(n.n))}</b><span class="v">${brl(n.v).replace("R$ ", "")}</span>
        <small>${esc(kindLabel(n))} · ${plural(W.out[n.i].length, "participação", "participações")}</small><i class="m-rank-bar"></i></li>`).join("");
    } else {
      note.textContent = "Pessoas e empresas que mais ligam companhias entre si: participações e cadeiras em conselhos e diretorias.";
      const score = (n) => new Set([...W.out[n.i].map((j) => W.et[j]), ...W.brd[n.i].map((j) => W.bt[j])].filter((c) => W.nodes[c].t === "c")).size;
      const top = W.nodes.filter((n) => n.t === "p" || n.t === "j").map((n) => [n, score(n)]).filter(([, s]) => s >= 3).sort((a, b) => b[1] - a[1] || (b[0].v || 0) - (a[0].v || 0)).slice(0, 60);
      const max = top[0]?.[1] || 1;
      html = top.map(([n, s]) => `<li data-go="${n.i}" class="${ui.sel === n.i ? "on" : ""}" style="--c:${colorOf(n)};--w:${(s / max * 100).toFixed(1)}%"><b>${esc(shortName(n.n))}</b><span class="v">${s}</span>
        <small>${esc(kindLabel(n))} · ${s} companhias</small><i class="m-rank-bar"></i></li>`).join("");
    }
    list.innerHTML = html;
  }
  function markRank() {
    for (const li of $("#m-rank").children) li.classList.toggle("on", (li.dataset.group != null && +li.dataset.group === ui.group) || (li.dataset.go != null && +li.dataset.go === ui.sel));
  }

  // ---------------------------------------------------------- legenda (dentro do menu de camadas)
  function renderLegend() {
    const sec = (W.arcs || []).map((a) => a.c);
    $("#m-legend").innerHTML = `<div class="m-lg-sec">${sec.map((c) => `<button class="lg" type="button" data-sector="${c}"><i style="--c:${sectorColor(c)}"></i>${esc(SECTOR[c]?.[2] || c)}</button>`).join("")}</div>
      <div class="m-lg-kinds">${["pf", "hold", "fund", "pen", "gov", "sub"].map((k) => `<span class="lg"><i class="sm" style="--c:${KIND[k][dark ? 0 : 1]}"></i>${KIND[k][2]}</span>`).join("")}
      <span class="lg"><i class="ln" style="--c:rgb(${css["--m-ctl"]})"></i>Controle</span><span class="lg"><i class="ln thin"></i>Participação</span></div>`;
  }

  // ---------------------------------------------------------- endereço (links compartilháveis)
  function route(h) {
    const want = h ? `#${h}` : "";
    if (location.hash !== want) history.replaceState(null, "", want || location.pathname + location.search);
  }
  function readRoute() {
    const h = decodeURIComponent(location.hash.replace(/^#/, ""));
    const [kind, a, b] = h.split("/");
    const node = (id) => {
      if (!id) return -1;
      if (W.byId.has(id)) return W.byId.get(id);
      if (id.startsWith("k") && W.byK.has(id.slice(1))) return W.byK.get(id.slice(1));
      if (W.bySlug.has(id)) return W.bySlug.get(id);
      if (W.byK.has(id)) return W.byK.get(id);
      return -1;
    };
    if (kind === "n" && node(a) >= 0) select(node(a), { push: false });
    else if (kind === "s" && W.bySlug.has(a)) select(W.bySlug.get(a), { push: false });
    else if (kind === "g" && W.groups[+a]) selectGroup(+a, { push: false });
    else if (kind === "e" && node(a) >= 0) openTree(node(a), { push: false });
    else if (kind === "c" && node(a) >= 0 && node(b) >= 0) showPath(node(a), node(b), { push: false });
    else if (kind === "n" || kind === "s") toast("Essa entidade não está no mapa: ela não tem participação relevante em companhia aberta.");
  }

  // ---------------------------------------------------------- interação com o mapa
  const pointers = new Map();
  let drag = null, pinch = null, lastTap = 0;
  function onDown(e) {
    glCanvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    anim = null; inertia = null;
    hideHint();
    if (pointers.size === 2) {
      const [p, q] = [...pointers.values()];
      pinch = { d: Math.hypot(p.x - q.x, p.y - q.y), mx: (p.x + q.x) / 2, my: (p.y + q.y) / 2 };
      drag = null;
      return;
    }
    drag = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: false, hist: [{ x: e.clientX, y: e.clientY, t: performance.now() }] };
  }
  function activeCam() { return ui.mode === "tree" && tree ? tcam : cam; }
  function onMove(e) {
    if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && pointers.size === 2) {
      const [p, q] = [...pointers.values()];
      const d = Math.hypot(p.x - q.x, p.y - q.y), mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
      const c = activeCam();
      zoomCam(c, pinch.mx, pinch.my, d / pinch.d);
      c.cx -= (mx - pinch.mx) / c.k; c.cy -= (my - pinch.my) / c.k;
      pinch = { d, mx, my };
      request();
      return;
    }
    if (drag) {
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > (TOUCH ? 8 : 4)) { drag.moved = true; glCanvas.classList.add("dragging"); showTip(-1); }
      if (drag.moved) {
        const c = activeCam();
        c.cx -= dx / c.k; c.cy -= dy / c.k;
        drag.x = e.clientX; drag.y = e.clientY;
        const now = performance.now();
        drag.hist.push({ x: e.clientX, y: e.clientY, t: now });
        while (drag.hist.length > 6 || (drag.hist.length > 2 && now - drag.hist[0].t > 100)) drag.hist.shift();
        request();
      }
      return;
    }
    if (e.pointerType === "mouse") hoverAt(e.clientX, e.clientY);
  }
  function zoomCam(c, px, py, f) {
    const k = clamp(c.k * f, c === tcam ? 0.15 : kMin(), c === tcam ? 3 : kMax());
    const wx = (px - Wpx / 2) / c.k + c.cx, wy = (py - Hpx / 2) / c.k + c.cy;
    c.k = k; c.cx = wx - (px - Wpx / 2) / k; c.cy = wy - (py - Hpx / 2) / k;
  }
  function setSectorHover(c) {
    if (ui.sector === c) return;
    ui.sector = c;
    if (ui.sel < 0 && ui.group < 0 && ui.mode === "world") {
      if (c) {
        const nodes = sectorMembers(c), edges = new Set();
        for (const i of nodes) for (const j of W.out[i]) if (nodes.has(W.et[j])) edges.add(j);
        setHighlight(nodes, edges, new Set(), 0.75);
      } else setHighlight(null, null, null);
    }
    request();
  }
  function hoverAt(px, py) {
    if (ui.mode === "tree" && tree) {
      const nd = pickTree(px, py);
      if (nd !== tree.hover) { tree.hover = nd; glCanvas.classList.toggle("pointing", !!nd); request(); }
      if (nd && nd.w != null) showTip(nd.w, px, py); else showTip(-1);
      return;
    }
    const i = pick(px, py);
    const sec = i < 0 ? pickSector(px, py) : null;
    if (sec || ui.sector) setSectorHover(sec);
    if (sec) { glCanvas.classList.add("pointing"); showSectorTip(sec, px, py); return; }
    if (i !== ui.hover) {
      ui.hover = i;
      glCanvas.classList.toggle("pointing", i >= 0);
      // sem seleção, parar o mouse sobre um nó mostra a vizinhança, de leve; passar por cima sem parar não pisca o mapa
      clearTimeout(hoverAt.t);
      if (ui.sel < 0 && ui.group < 0 && ui.mode === "world") {
        hoverAt.t = setTimeout(() => {
          if (ui.sel >= 0 || ui.group >= 0 || ui.mode !== "world" || ui.hover !== i) return;
          if (i >= 0) { const nb = neighborhood(i); setHighlight(nb.nodes, nb.edges, nb.brd, 0.7); } else setHighlight(null, null, null);
        }, i >= 0 ? 110 : 70);
      }
      request();
    }
    showTip(i, px, py);
  }
  function onUp(e) {
    pointers.delete(e.pointerId);
    glCanvas.classList.remove("dragging");
    if (pinch) { if (pointers.size < 2) pinch = null; return; }
    if (!drag) return;
    const d = drag;
    drag = null;
    if (d.moved) {
      // inércia: continua com a velocidade do dedo e desacelera
      const h = d.hist;
      if (h.length >= 2 && !REDUCED) {
        const a = h[0], b = h[h.length - 1], dt = Math.max(16, b.t - a.t);
        const vx = (b.x - a.x) / dt, vy = (b.y - a.y) / dt;
        if (Math.hypot(vx, vy) > 0.15 && performance.now() - b.t < 80) {
          if (ui.mode !== "tree") { inertia = { vx, vy }; request(); }
        }
      }
      return;
    }
    // toque ou clique
    const now = performance.now(), dbl = now - lastTap < 320;
    lastTap = now;
    if (ui.mode === "tree" && tree) {
      const nd = pickTree(e.clientX, e.clientY);
      if (nd && nd.w != null) {
        // um toque mostra os detalhes; dois toques recentralizam a estrutura nesse cartão
        if (dbl) { openTree(nd.w); return; }
        ui.sel = nd.w; renderPanel(nd.w);
      } else if (nd && nd.ext) toast(`${nd.ext.n}: controlada de capital fechado (${pct(nd.ext.pct)})`);
      return;
    }
    const i = pick(e.clientX, e.clientY);
    if (dbl && i >= 0) { openTree(i); return; }
    if (i >= 0) { select(i); return; }
    const sec = pickSector(e.clientX, e.clientY);
    if (sec) { setSectorHover(null); showTip(-1); flyToSector(sec); return; }
    if (dbl) flyTo({ cx: toWorldX(e.clientX), cy: toWorldY(e.clientY), k: clamp(cam.k * 2, kMin(), kMax()) }, 450);
    else if (ui.sel >= 0 || ui.group >= 0 || ui.mode === "path") { if (ui.mode === "path") exitMode(false); select(-1); }
  }
  function onWheel(e) {
    e.preventDefault();
    anim = null; inertia = null;
    hideHint();
    const c = activeCam();
    // trackpad (pinça vem com ctrlKey) é mais fino; roda do mouse dá passos
    const f = Math.exp(-e.deltaY * (e.ctrlKey ? 0.012 : e.deltaMode === 1 ? 0.06 : 0.0022));
    zoomCam(c, e.clientX, e.clientY, f);
    request();
  }

  let hintTimer = 0;
  function hideHint() { const h = $("#m-hint"); if (!h.hidden) { h.hidden = true; store.set("mundo-hint", 1); glassChanged(); } clearTimeout(hintTimer); }

  // ---------------------------------------------------------- ligações dos controles
  function wire() {
    addEventListener("resize", () => { resize(); });
    glCanvas.addEventListener("pointerdown", onDown);
    glCanvas.addEventListener("pointermove", onMove);
    glCanvas.addEventListener("pointerup", onUp);
    glCanvas.addEventListener("pointercancel", onUp);
    glCanvas.addEventListener("pointerleave", () => {
      if (drag) return;
      showTip(-1);
      if (ui.sector) setSectorHover(null);
      if (ui.hover >= 0) { ui.hover = -1; if (ui.sel < 0 && ui.group < 0 && ui.mode === "world") setHighlight(null, null, null); request(); }
    });
    glCanvas.addEventListener("wheel", onWheel, { passive: false });
    if (mini) {
      let mdrag = false;
      const go = (e, fly) => { const p = miniToWorld(e); if (fly) flyTo({ cx: p.x, cy: p.y, k: Math.max(cam.k, fitK() * 2.5) }, 650); else { anim = null; cam.cx = p.x; cam.cy = p.y; request(); } };
      mini.addEventListener("pointerdown", (e) => { mdrag = true; mini.setPointerCapture(e.pointerId); go(e, true); });
      mini.addEventListener("pointermove", (e) => { if (mdrag && e.buttons) go(e, false); });
      mini.addEventListener("pointerup", () => { mdrag = false; });
    }
    $("#m-zin").onclick = () => { const c = activeCam(); if (c === cam) flyTo({ ...cam, k: clamp(cam.k * 1.8, kMin(), kMax()) }, 380); else { zoomCam(tcam, Wpx / 2, Hpx / 2, 1.4); request(); } };
    $("#m-zout").onclick = () => { const c = activeCam(); if (c === cam) flyTo({ ...cam, k: clamp(cam.k / 1.8, kMin(), kMax()) }, 380); else { zoomCam(tcam, Wpx / 2, Hpx / 2, 1 / 1.4); request(); } };
    $("#m-zfit").onclick = () => {
      if (ui.mode === "tree" && tree) {
        const b = tree.all, ins = insets();
        const k = clamp(Math.min((Wpx - ins.left - ins.right) / (b.x1 - b.x0 + 60), (Hpx - ins.top - ins.bottom) / (b.y1 - b.y0 + 60)), 0.15, 1.2);
        Object.assign(tcam, { cx: (b.x0 + b.x1) / 2 - ((ins.left - ins.right) / 2) / k, cy: (b.y0 + b.y1) / 2 - ((ins.top - ins.bottom) / 2) / k, k });
        request();
      } else flyTo(fitView(), 800);
    };
    $("#m-layers-btn").onclick = (e) => { e.stopPropagation(); const p = $("#m-layers"); p.hidden = !p.hidden; $("#m-layers-btn").setAttribute("aria-expanded", String(!p.hidden)); };
    document.addEventListener("pointerdown", (e) => { if (!e.target.closest("#m-layers, #m-layers-btn")) { $("#m-layers").hidden = true; $("#m-layers-btn").setAttribute("aria-expanded", "false"); } });
    for (const inp of document.querySelectorAll("#m-layers [data-layer]")) {
      inp.checked = !!ui.layers[inp.dataset.layer];
      inp.onchange = () => {
        ui.layers[inp.dataset.layer] = inp.checked;
        store.set("mundo-layers", ui.layers);
        computeVisibility();
        if (ui.sel >= 0 && ui.mode === "world") { const nb = neighborhood(ui.sel); setHighlight(nb.nodes, nb.edges, nb.brd); }
        renderRank();
        request();
      };
    }
    $("#m-legend").onclick = (e) => {
      const b = e.target.closest("[data-sector]");
      if (!b) return;
      $("#m-layers").hidden = true;
      if (ui.mode !== "world") exitMode(false);
      select(-1);
      flyToSector(b.dataset.sector);
    };
    $("#m-explore-toggle").onclick = () => {
      const ex = $("#m-explore");
      ex.classList.toggle("collapsed");
      $("#m-explore-toggle").setAttribute("aria-expanded", String(!ex.classList.contains("collapsed")));
      store.set("mundo-explore", !ex.classList.contains("collapsed"));
      glassChanged();
    };
    $(".m-tabs").onclick = (e) => {
      const b = e.target.closest("[data-tab]");
      if (!b) return;
      rankTab = b.dataset.tab;
      for (const x of document.querySelectorAll(".m-tabs [data-tab]")) x.setAttribute("aria-checked", String(x === b));
      renderRank();
      $("#m-rank").scrollTop = 0;
    };
    $(".m-grab").onclick = () => $("#m-panel").classList.toggle("peek");
    $("#m-panel-close").onclick = () => { if (ui.mode !== "world") exitMode(false); select(-1); };
    $("#m-mode-close").onclick = () => { const s = ui.sel; exitMode(false); if (s >= 0) select(s); else select(-1); };
    // cliques dentro dos painéis: ir a um nó, a um grupo, ações
    document.addEventListener("click", (e) => {
      const more = e.target.closest("[data-more]");
      if (more) { const id = more.dataset.more; more.closest("ul").innerHTML = panelRows[id].join(""); return; }
      const go = e.target.closest("[data-go]");
      if (go && (go.closest("#m-panel") || go.closest("#m-explore"))) {
        const i = +go.dataset.go;
        if (ui.mode === "tree") { openTree(i); return; }
        select(i);
        return;
      }
      const sel = e.target.closest("[data-sel]");
      if (sel) { exitMode(false); select(+sel.dataset.sel); return; }
      const grp = e.target.closest("[data-group]");
      if (grp && (grp.closest("#m-panel") || grp.closest("#m-explore"))) { selectGroup(+grp.dataset.group); if (innerWidth <= 760) $("#m-explore").classList.add("collapsed"); return; }
      const act = e.target.closest("[data-act]");
      if (act) {
        const i = act.dataset.node != null ? +act.dataset.node : ui.sel;
        if (act.dataset.act === "tree" && i >= 0) openTree(i);
        if (act.dataset.act === "path" && i >= 0) openPicker(i);
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.target.matches("input[type=search], input[type=text], textarea")) return;
      if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); $("#m-q").focus(); }
      else if (e.key === "Escape") { if (ui.mode !== "world") { const s = ui.sel; exitMode(false); s >= 0 ? select(s) : select(-1); } else select(-1); }
      else if (e.key === "+" || e.key === "=") $("#m-zin").click();
      else if (e.key === "-") $("#m-zout").click();
      else if (e.key === "0") $("#m-zfit").click();
    });
    wireSearch($("#m-q"), $("#m-results"), (r) => { if (r.g != null) selectGroup(r.g); else { if (ui.mode === "tree") openTree(r.i); else select(r.i); } });
    addEventListener("hashchange", () => readRoute());
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") request(); });
  }

  function openPicker(from) {
    const slot = $("#m-pick-slot");
    slot.innerHTML = `<div class="m-pick"><div class="m-search" role="combobox" aria-expanded="false"><svg class="ic"><use href="#i-path"/></svg>
      <input id="m-pick-q" type="search" placeholder="Com quem? Empresa, pessoa ou investidor" autocomplete="off" aria-label="Conectar com"><ul id="m-pick-res" class="m-results" role="listbox" hidden></ul></div></div>`;
    const inp = $("#m-pick-q");
    wireSearch(inp, $("#m-pick-res"), (r) => {
      if (r.g != null) { showPath(from, W.groups[r.g].h); return; }
      showPath(from, r.i);
    });
    inp.focus();
  }

  // ---------------------------------------------------------- início
  async function init() {
    initGL();
    document.body.classList.toggle("no-gl", !gl);
    readTheme();
    resize();
    wire();
    if (innerWidth <= 760 || store.get("mundo-explore", true) === false) $("#m-explore").classList.add("collapsed");
    let data;
    try {
      data = await fetch("data/cias/mundo.json", { cache: "no-cache" }).then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); });
    } catch {
      $("#m-empty").hidden = false;
      $("#m-empty").textContent = "O mapa ainda não foi montado. Ele é refeito a cada atualização do portal; tente de novo em alguns minutos.";
      document.body.classList.remove("loading");
      return;
    }
    prepare(data);
    computeVisibility();
    if (gl) buildBuffers();
    const fit = fitView();
    const s = data.stats || {};
    $("#m-sub").textContent = `${nf(s.cias || 0)} companhias · ${nf(s.grupos || 0)} grupos · ${nf((s.acionistas || 0) + (s.pessoas_conselho || 0))} acionistas e conselheiros`;
    renderLegend();
    renderRank();
    document.body.classList.remove("loading");
    // abertura: o mundo nasce do centro enquanto a câmera recua devagar até enquadrar tudo
    if (!location.hash && !REDUCED) {
      ui.intro = 0;
      ui.introT0 = performance.now();
      Object.assign(cam, { ...fit, k: fit.k * 1.6 });
      anim = { from: { ...cam }, to: fit, t0: performance.now(), dur: 2600, ease: easeOut };
    } else Object.assign(cam, fit);
    request();
    readRoute();
    if (!store.get("mundo-hint", 0) && !location.hash) setTimeout(() => { if (ui.sel < 0 && ui.mode === "world") { $("#m-hint").hidden = false; hintTimer = setTimeout(hideHint, 9000); } }, 2400);
  }

  // para testes automatizados (mundo.html?debug)
  if (/[?&]debug\b/.test(location.search)) window.__mundo = { ui, cam, W, get gl() { return gl; }, fitK };
  init();
})();
