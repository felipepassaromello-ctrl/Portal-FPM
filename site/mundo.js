/* Portal FPM — Mundo das companhias.
 *
 * Desenha em canvas o grafo montado pelo scripts/mundo.py (data/cias/mundo.json): companhias abertas, quem é dono
 * delas, os grupos econômicos e as pessoas que sentam em mais de um conselho. As posições vêm prontas do layout
 * (scripts/mundo_layout.mjs); aqui só se desenha, navega e explica.
 *
 * Três modos: o mundo (tudo de uma vez), a estrutura societária de uma entidade (árvore de quem controla para cima e
 * do que ela controla para baixo) e o caminho entre duas entidades. Renderização sob demanda: só redesenha quando
 * algo muda ou há animação rodando.
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
    set: (k, v) => { try { localStorage.setItem(`n1:${k}`, JSON.stringify(v)); } catch { /* sem armazenamento */ } },
  };
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const TOUCH = matchMedia("(pointer: coarse)").matches;
  // curvas: ease-out forte para respostas, ease-in-out para movimentos de câmera (mesmas do styles.css)
  const easeOut = (t) => 1 - Math.pow(1 - t, 4);
  const easeInOut = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2);

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(() => { t.hidden = true; }, 2800);
  }

  // ---------------------------------------------------------- cores
  const SECTOR = {
    fin: ["#3B8BFF", "#0060df"], util: ["#FFD43B", "#c99700"], oil: ["#FF5A4E", "#d42a1e"], base: ["#C9A27C", "#8f6a45"],
    agro: ["#3DDC84", "#16a34a"], cons: ["#FF9F43", "#e07000"], imob: ["#C77DFF", "#9333ea"], ind: ["#5BD3FF", "#0891b2"],
    log: ["#7C83FF", "#4f46e5"], tech: ["#2EE6C8", "#0d9488"], saude: ["#FF5C8A", "#e11d48"], out: ["#A8B0BF", "#64748b"],
  };
  const KIND = {
    pf: ["#F6C28B", "#c2701d", "Pessoa física"], hold: ["#B8C0D0", "#64748b", "Holding ou empresa"], fund: ["#8FB4FF", "#3b5bdb", "Gestora ou fundo"],
    pen: ["#C3A6FF", "#7c3aed", "Fundo de pensão"], gov: ["#FFE08A", "#b45309", "Governo"], sub: ["#7EE8B0", "#059669", "Controlada em comum"],
  };
  let dark = true;
  const css = {};
  function readTheme() {
    const st = getComputedStyle(document.body);
    for (const k of ["--m-edge", "--m-edge-a", "--m-ctl", "--m-hl", "--m-label", "--m-label-halo", "--m-group", "--m-card", "--m-card-line", "--m-ink", "--m-muted"]) css[k] = st.getPropertyValue(k).trim();
    dark = getComputedStyle(document.body).getPropertyValue("color-scheme").trim() !== "light";
    sprites.clear();
    bump();
  }
  const colorOf = (n) => (n.t === "c" ? SECTOR[n.c] || SECTOR.out : KIND[n.t === "s" ? "sub" : n.t === "p" ? "pf" : n.c] || KIND.hold)[dark ? 0 : 1];
  const kindLabel = (n) => (n.t === "c" ? "Companhia aberta" : n.t === "s" ? KIND.sub[2] : n.t === "p" ? KIND.pf[2] : (KIND[n.c] || KIND.hold)[2]);

  // brilho pré-desenhado (um por cor): desenhar sombra com blur a cada quadro custaria caro
  const sprites = new Map();
  function glow(color) {
    if (sprites.has(color)) return sprites.get(color);
    const s = 64, c = document.createElement("canvas");
    c.width = c.height = s;
    const g = c.getContext("2d"), gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    gr.addColorStop(0, color + (dark ? "55" : "30"));
    gr.addColorStop(0.45, color + (dark ? "22" : "12"));
    gr.addColorStop(1, color + "00");
    g.fillStyle = gr;
    g.fillRect(0, 0, s, s);
    sprites.set(color, c);
    return c;
  }

  // ---------------------------------------------------------- dados
  const W = { ready: false };
  const canvas = $("#map");
  const mainCtx = canvas.getContext("2d");
  let ctx = mainCtx;
  // camada com o mundo já desenhado: animações (fluxo, pulso) e quadros de movimento reaproveitam essa imagem em vez
  // de redesenhar milhares de curvas e círculos
  const layer = document.createElement("canvas");
  const layerCtx = layer.getContext("2d");
  let layerKey = "", layerCam = null, sceneVer = 0, fullMs = 0, lastFull = false, lastWheel = 0, settleTimer = 0;
  const bump = () => { sceneVer++; request(); };

  // raio no mapa: o mesmo critério do layout (scripts/mundo_layout.mjs, radius)
  const nodeRadius = (n) => (n.t === "c" ? (n.mc ? 3 + 1.15 * Math.sqrt(n.mc / 1e9) : 3) : n.t === "s" ? 2.2 : n.v ? 2 + 0.9 * Math.sqrt(n.v / 1e9) : 2);

  function prepare(data) {
    const nodes = data.nodes, N = nodes.length;
    Object.assign(W, { data, nodes, N, groups: data.groups || [], setores: data.setores || {} });
    W.x = new Float32Array(N); W.y = new Float32Array(N); W.R = new Float32Array(N);
    W.sx = new Float32Array(N); W.sy = new Float32Array(N); // posições na tela, refeitas a cada quadro
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
    // grupos: centro, raio e cor dominante; cada nó sabe seu grupo
    W.groups.forEach((g, gi) => {
      g.i = gi;
      g.f = fold(g.n);
      const cos = g.m.filter((m) => nodes[m].t === "c");
      let sx = 0, sy = 0, sw = 0;
      for (const m of cos) { const w = Math.sqrt(nodes[m].mc || 1e8); sx += W.x[m] * w; sy += W.y[m] * w; sw += w; }
      g.cx = sw ? sx / sw : W.x[g.h]; g.cy = sw ? sy / sw : W.y[g.h];
      g.rad = Math.max(30, ...g.m.map((m) => Math.hypot(W.x[m] - g.cx, W.y[m] - g.cy) + W.R[m]));
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
    // extensão do mundo
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (let i = 0; i < N; i++) { x0 = Math.min(x0, W.x[i]); x1 = Math.max(x1, W.x[i]); y0 = Math.min(y0, W.y[i]); y1 = Math.max(y1, W.y[i]); }
    W.bounds = { x0, x1, y0, y1 };
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
    hover: -1, sel: -1, group: -1,
    hl: null, // Set de nós destacados (vizinhança, grupo ou caminho)
    hlE: null, hlB: null, // Sets de arestas destacadas
    layers: { people: true, funds: true, board: false, ctlonly: false, groups: true, ...store.get("mundo-layers", {}) },
    sectorOff: new Set(),
    pathIds: null,
    intro: 0, // 0..1 animação de abertura
    dim: 0, dimTarget: 0, // quanto o resto do mundo apaga
    treeA: 0, treeTarget: 0,
  };
  const visible = new Uint8Array(1);
  let vis = visible;
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
    bump();
  }

  // ---------------------------------------------------------- câmera
  const cam = { cx: 0, cy: 0, k: 1 };
  let anim = null, inertia = null;
  let Wpx = 0, Hpx = 0, DPR = 1;
  const kMin = () => 0.25 * fitK(), kMax = () => 60;
  // espaço ocupado pelos painéis, para enquadrar o que interessa na área livre
  function insets() {
    const mobile = innerWidth <= 760;
    const panelOpen = !$("#m-panel").hidden;
    return {
      top: 72, bottom: mobile ? (panelOpen ? $("#m-panel").getBoundingClientRect().height || innerHeight * 0.64 : 70) : 70,
      left: !mobile && !$("#m-explore").classList.contains("collapsed") ? 330 : 20,
      right: !mobile && panelOpen ? 412 : 20,
    };
  }
  function fitK(b = W.bounds, pad = 1.06) {
    const ins = insets();
    const w = Math.max(80, Wpx - ins.left - ins.right), h = Math.max(80, Hpx - ins.top - ins.bottom);
    return Math.min(w / ((b.x1 - b.x0) * pad || 1), h / ((b.y1 - b.y0) * pad || 1));
  }
  function fitView(b = W.bounds, pad = 1.06) {
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
  function zoomAt(sx, sy, factor) {
    const k = clamp(cam.k * factor, kMin(), kMax());
    const wx = toWorldX(sx), wy = toWorldY(sy);
    cam.k = k;
    cam.cx = wx - (sx - Wpx / 2) / k;
    cam.cy = wy - (sy - Hpx / 2) / k;
    request();
  }

  // ---------------------------------------------------------- laço de desenho sob demanda
  let raf = 0, lastT = 0;
  function request() { if (!raf) raf = requestAnimationFrame(frame); }
  function frame(t) {
    raf = 0;
    const dt = Math.min(64, t - (lastT || t));
    lastT = t;
    let busy = false;
    if (anim) {
      const p = clamp((t - anim.t0) / anim.dur, 0, 1), e = easeInOut(p);
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
    if (ui.intro < 1) { ui.intro = REDUCED ? 1 : Math.min(1, ui.intro + dt / 1500); busy = true; }
    for (const [k, tk] of [["dim", "dimTarget"], ["treeA", "treeTarget"]]) {
      if (ui[k] !== ui[tk]) {
        const step = dt / (REDUCED ? 1 : 260);
        ui[k] = ui[tk] > ui[k] ? Math.min(ui[tk], ui[k] + step) : Math.max(ui[tk], ui[k] - step);
        busy = true;
      }
    }
    const flowing = !REDUCED && (ui.hlE?.size || ui.mode === "tree");
    // quanto custa um quadro completo neste aparelho (média móvel do intervalo depois de redesenhar tudo)
    if (lastFull && dt > 0) fullMs = fullMs ? fullMs * 0.7 + dt * 0.3 : dt;
    draw(t);
    if (busy || flowing || pulse()) request();
  }
  const pulse = () => !REDUCED && ui.sel >= 0 && ui.mode === "world";

  function resize() {
    DPR = Math.min(2, devicePixelRatio || 1);
    Wpx = innerWidth; Hpx = innerHeight;
    canvas.width = layer.width = Math.round(Wpx * DPR); canvas.height = layer.height = Math.round(Hpx * DPR);
    bump();
  }

  // ---------------------------------------------------------- desenho do mundo
  const interacting = () => !!(drag?.moved || pinch || anim || inertia || performance.now() - lastWheel < 140);
  function draw(t) {
    ctx = mainCtx;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lastFull = false;
    if (!W.ready) return;
    const worldA = 1 - ui.treeA * 0.94;
    if (worldA > 0.02) {
      const key = `${cam.cx.toFixed(3)}|${cam.cy.toFixed(3)}|${cam.k.toFixed(5)}|${sceneVer}|${ui.dim.toFixed(3)}|${ui.intro.toFixed(3)}|${worldA.toFixed(3)}`;
      // aparelho lento e a câmera em movimento: move e escala a última imagem; o desenho nítido vem quando parar
      const reuse = key !== layerKey && layerCam && fullMs > 24 && interacting() && ui.intro >= 1;
      if (key !== layerKey && !reuse) {
        ctx = layerCtx;
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        ctx.clearRect(0, 0, Wpx, Hpx);
        drawWorld(t, worldA);
        ctx = mainCtx;
        layerKey = key; layerCam = { ...cam };
        lastFull = true;
      }
      if (!reuse) {
        ctx.drawImage(layer, 0, 0);
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        if (ui.intro >= 1) drawOverlay(t, worldA);
      } else {
        const f = cam.k / layerCam.k;
        const ox = Wpx / 2 - (Wpx / 2) * f + (layerCam.cx - cam.cx) * cam.k, oy = Hpx / 2 - (Hpx / 2) * f + (layerCam.cy - cam.cy) * cam.k;
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        ctx.drawImage(layer, ox, oy, Wpx * f, Hpx * f);
        clearTimeout(settleTimer);
        settleTimer = setTimeout(request, 150);
      }
    }
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    if (ui.treeA > 0.01 && tree) drawTree(t, ui.treeA);
  }

  // o que se mexe por cima da camada: fluxo nas ligações destacadas e o anel da seleção
  function drawOverlay(t, alpha) {
    const X = W.sx, Y = W.sy, k = cam.k;
    const qx = (cx) => (cx - cam.cx) * k + Wpx / 2, qy = (cy) => (cy - cam.cy) * k + Hpx / 2;
    if (ui.hlE?.size && !REDUCED) flowDots(t, X, Y, qx, qy, alpha);
    const sizeK = sizeScale(), hlRGB = css["--m-hl"];
    for (const i of [ui.sel, ui.hover]) {
      if (i < 0 || i >= W.N) continue;
      const n = W.nodes[i];
      const r = Math.max(n.t === "c" ? 3.2 : 2.5, inflate(W.R[i] * k, sizeK));
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = `rgb(${hlRGB})`;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(X[i], Y[i], r + 3, 0, 6.2832); ctx.stroke();
      if (i === ui.sel && !REDUCED) {
        const ph = ((t || 0) % 2400) / 2400;
        ctx.globalAlpha = alpha * (1 - ph) * 0.6;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(X[i], Y[i], r + 3 + easeOut(ph) * 18, 0, 6.2832); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }

  function drawWorld(t, alpha) {
    const k = cam.k, N = W.N;
    const e = easeOut(ui.intro);
    // abertura: o mundo se expande a partir do centro
    const s = 0.12 + 0.88 * e;
    const X = W.sx, Y = W.sy;
    const ox = Wpx / 2 - cam.cx * k * s, oy = Hpx / 2 - cam.cy * k * s;
    for (let i = 0; i < N; i++) { X[i] = W.x[i] * k * s + ox; Y[i] = W.y[i] * k * s + oy; }
    drawCache.X = X; drawCache.Y = Y;
    const hl = ui.hl, dim = ui.dim;
    const baseA = alpha * e;
    const sizeK = sizeScale();

    // halos dos grupos (de longe): uma névoa de cor por grupo, como continentes
    if (ui.layers.groups && !hl && k < 1.4) {
      const ga = baseA * clamp((1.4 - k) / 0.8, 0, 1) * (dark ? 0.1 : 0.07);
      for (const g of W.groups) {
        if (g.nc < 2 || !g.mc) continue;
        const gx = (g.cx - cam.cx) * k * s + Wpx / 2, gy = (g.cy - cam.cy) * k * s + Hpx / 2, gr = g.rad * k * s * 1.25 + 14;
        if (gx + gr < 0 || gx - gr > Wpx || gy + gr < 0 || gy - gr > Hpx) continue;
        const col = SECTOR[g.sector][dark ? 0 : 1];
        const grd = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        grd.addColorStop(0, col + alphaHex(ga));
        grd.addColorStop(1, col + "00");
        ctx.fillStyle = grd;
        ctx.beginPath(); ctx.arc(gx, gy, gr, 0, 6.2832); ctx.fill();
      }
    }

    // arestas
    const edgeRGB = css["--m-edge"], ctlRGB = css["--m-ctl"], hlRGB = css["--m-hl"];
    const eA = parseFloat(css["--m-edge-a"]) || 0.09;
    const fadeOthers = 1 - dim * 0.82;
    const onScreen = (a, b) => !((X[a] < -40 && X[b] < -40) || (X[a] > Wpx + 40 && X[b] > Wpx + 40) || (Y[a] < -40 && Y[b] < -40) || (Y[a] > Hpx + 40 && Y[b] > Hpx + 40));
    const qx = (cx) => (cx - cam.cx) * k * s + Wpx / 2, qy = (cy) => (cy - cam.cy) * k * s + Hpx / 2;
    // largura cresce de leve com o zoom para não sumir de perto
    const lw = clamp(0.6 + k * 0.25, 0.6, 1.6);
    ctx.lineCap = "round";
    if (ui.layers.board) {
      ctx.strokeStyle = `rgba(${dark ? "190,150,255" : "120,70,200"},${(dark ? 0.1 : 0.12) * baseA * fadeOthers})`;
      ctx.lineWidth = lw * 0.8;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      for (let j = 0; j < W.B; j++) {
        const a = W.bs[j], b = W.bt[j];
        if (!vis[a] || !vis[b] || !onScreen(a, b) || ui.hlB?.has(j)) continue;
        ctx.moveTo(X[a], Y[a]); ctx.quadraticCurveTo(qx(W.bcx[j]), qy(W.bcy[j]), X[b], Y[b]);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }
    for (const ctlPass of [false, true]) {
      ctx.beginPath();
      for (let j = 0; j < W.M; j++) {
        const f = W.ef[j];
        if (!!(f & 1) !== ctlPass) continue;
        if (ui.layers.ctlonly && !(f & 1)) continue;
        const a = W.es[j], b = W.et[j];
        if (!vis[a] || !vis[b] || !onScreen(a, b) || ui.hlE?.has(j)) continue;
        ctx.moveTo(X[a], Y[a]); ctx.quadraticCurveTo(qx(W.ecx[j]), qy(W.ecy[j]), X[b], Y[b]);
      }
      ctx.strokeStyle = ctlPass ? `rgba(${ctlRGB},${(dark ? 0.42 : 0.5) * baseA * fadeOthers})` : `rgba(${edgeRGB},${eA * 1.6 * baseA * fadeOthers})`;
      ctx.lineWidth = ctlPass ? lw * 1.15 : lw * 0.8;
      ctx.stroke();
    }
    // arestas destacadas, com o fluxo de quem é dono para quem é possuído
    if (ui.hlE?.size || ui.hlB?.size) {
      for (const j of ui.hlB || []) {
        const a = W.bs[j], b = W.bt[j];
        ctx.strokeStyle = `rgba(${dark ? "200,165,255" : "120,70,200"},${0.85 * baseA})`;
        ctx.lineWidth = 1.4; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(X[a], Y[a]); ctx.quadraticCurveTo(qx(W.bcx[j]), qy(W.bcy[j]), X[b], Y[b]); ctx.stroke();
      }
      ctx.setLineDash([]);
      for (const j of ui.hlE || []) {
        const a = W.es[j], b = W.et[j], ctl = W.ef[j] & 1, p = W.ep[j];
        ctx.strokeStyle = ctl ? `rgba(${ctlRGB},${0.95 * baseA})` : `rgba(${hlRGB},${0.75 * baseA})`;
        ctx.lineWidth = clamp(1 + (p > 0 ? p / 30 : 0), 1, 3.2) * (ctl ? 1.15 : 1);
        ctx.beginPath(); ctx.moveTo(X[a], Y[a]); ctx.quadraticCurveTo(qx(W.ecx[j]), qy(W.ecy[j]), X[b], Y[b]); ctx.stroke();
      }
    }

    // nós
    const minC = 2.2, minO = TOUCH ? 1.3 : 1.1;
    const sel = ui.sel;
    // brilho das companhias grandes (atrás dos círculos)
    if (k * sizeK > 0) {
      for (let i = 0; i < Math.min(W.N, 260); i++) {
        const n = W.nodes[i];
        if (n.t !== "c" || !vis[i]) continue;
        const r = Math.max(minC, inflate(W.R[i] * k, sizeK));
        if (r < 4) continue;
        if (X[i] + r * 3 < 0 || X[i] - r * 3 > Wpx || Y[i] + r * 3 < 0 || Y[i] - r * 3 > Hpx) continue;
        const a = hl ? (hl.has(i) ? 1 : 1 - dim) : 1;
        ctx.globalAlpha = baseA * a * (ui.sectorOff.has(n.c) ? 0.2 : 1);
        const g = r * 4.2;
        ctx.drawImage(glow(colorOf(n)), X[i] - g / 2, Y[i] - g / 2, g, g);
      }
      ctx.globalAlpha = 1;
    }
    // primeiro os que não estão em destaque, agrupados por cor (um fill por cor)
    const byColor = drawCache.byColor || (drawCache.byColor = groupByColor());
    for (const [col, idx] of byColor) {
      ctx.fillStyle = col;
      for (const pass of [0, 1]) {
        ctx.globalAlpha = baseA * (pass === 0 ? 1 - dim * 0.88 : 0.2);
        ctx.beginPath();
        for (const i of idx) {
          if (!vis[i] || (hl && hl.has(i))) continue;
          const off = ui.sectorOff.has(W.nodes[i].c) && W.nodes[i].t === "c";
          if (off !== (pass === 1)) continue;
          const n = W.nodes[i];
          const r = Math.max(n.t === "c" ? minC : minO, inflate(W.R[i] * k, sizeK));
          if (X[i] + r < 0 || X[i] - r > Wpx || Y[i] + r < 0 || Y[i] - r > Hpx) continue;
          ctx.moveTo(X[i] + r, Y[i]); ctx.arc(X[i], Y[i], r, 0, 6.2832);
        }
        ctx.fill();
      }
    }
    ctx.globalAlpha = baseA;
    // contorno fino nas companhias, para separar do fundo
    if (k > 0.5) {
      ctx.strokeStyle = dark ? "rgba(255,255,255,.22)" : "rgba(255,255,255,.9)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      for (let i = 0; i < W.N; i++) {
        const n = W.nodes[i];
        if (n.t !== "c" || !vis[i] || (hl && hl.has(i))) continue;
        const r = Math.max(minC, inflate(W.R[i] * k, sizeK));
        if (r < 3.5 || X[i] + r < 0 || X[i] - r > Wpx || Y[i] + r < 0 || Y[i] - r > Hpx) continue;
        ctx.moveTo(X[i] + r, Y[i]); ctx.arc(X[i], Y[i], r, 0, 6.2832);
      }
      ctx.globalAlpha = baseA * (1 - dim * 0.88);
      ctx.stroke();
    }
    // destacados por cima, com anel
    if (hl) {
      ctx.globalAlpha = baseA;
      for (const i of hl) {
        if (!vis[i] && i !== sel) continue;
        const n = W.nodes[i];
        const r = Math.max(n.t === "c" ? minC + 1 : minO + 1.4, inflate(W.R[i] * k, sizeK));
        ctx.fillStyle = colorOf(n);
        ctx.beginPath(); ctx.arc(X[i], Y[i], r, 0, 6.2832); ctx.fill();
        ctx.strokeStyle = dark ? "rgba(255,255,255,.75)" : "rgba(20,24,40,.55)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    if (ui.intro > 0.5) drawLabels(X, Y, baseA * clamp((ui.intro - 0.5) * 2.5, 0, 1), sizeK);
  }
  const drawCache = {};
  function groupByColor() {
    const m = new Map();
    for (let i = W.N - 1; i >= 0; i--) {
      const c = colorOf(W.nodes[i]);
      (m.get(c) || m.set(c, []).get(c)).push(i);
    }
    // pequenos primeiro, grandes por cima
    return [...m.entries()].map(([c, idx]) => [c, idx.sort((a, b) => W.R[a] - W.R[b])]);
  }
  // de longe os nós pequenos aparecem um pouco maiores (o mínimo em pixels cuida dos minúsculos); os grandes crescem
  // no máximo 12%, que é a folga deixada pelo layout: vizinhos grandes nunca se sobrepõem
  const inflate = (r, sizeK) => Math.min(r * sizeK, r * 1.12 + 0.8);
  // de longe os nós aparecem um pouco maiores do que o tamanho real, senão o mundo vira poeira
  const sizeScale = () => clamp(1.6 / Math.pow(cam.k, 0.35), 1, 2.4);
  const alphaHex = (a) => Math.round(clamp(a, 0, 1) * 255).toString(16).padStart(2, "0");

  // pontos que correm pelas arestas destacadas, do dono para o possuído
  function flowDots(t, X, Y, qx, qy, baseA) {
    const speed = 0.00035;
    ctx.globalAlpha = baseA;
    for (const j of ui.hlE) {
      const a = W.es[j], b = W.et[j];
      const len = Math.hypot(X[b] - X[a], Y[b] - Y[a]);
      if (len < 14) continue;
      const n = Math.max(1, Math.min(4, Math.round(len / 120)));
      ctx.fillStyle = W.ef[j] & 1 ? `rgb(${css["--m-ctl"]})` : `rgb(${css["--m-hl"]})`;
      const cx = qx(W.ecx[j]), cy = qy(W.ecy[j]);
      for (let m = 0; m < n; m++) {
        const u = ((t * speed * (300 / Math.max(80, len)) + m / n + j * 0.137) % 1 + 1) % 1;
        const iu = 1 - u;
        const px = iu * iu * X[a] + 2 * iu * u * cx + u * u * X[b];
        const py = iu * iu * Y[a] + 2 * iu * u * cy + u * u * Y[b];
        ctx.beginPath(); ctx.arc(px, py, 1.8, 0, 6.2832); ctx.fill();
      }
    }
  }

  // rótulos sem sobreposição: em ordem de importância, cada um só entra se couber
  const textW = new Map();
  function measure(s, font) {
    const key = font + s;
    let w = textW.get(key);
    if (w == null) { ctx.font = font; w = ctx.measureText(s).width; textW.set(key, w); }
    return w;
  }
  function drawLabels(X, Y, a, sizeK) {
    if (a <= 0.01) return;
    const k = cam.k, hl = ui.hl;
    const placed = [];
    const fits = (x0, y0, x1, y1) => {
      if (x0 < 4 || y0 < 60 || x1 > Wpx - 4 || y1 > Hpx - 4) return false;
      for (const r of placed) if (x0 < r[2] && x1 > r[0] && y0 < r[3] && y1 > r[1]) return false;
      return true;
    };
    const maxLabels = TOUCH ? 45 : innerWidth < 1100 ? 80 : 130;
    ctx.textBaseline = "middle";
    ctx.lineJoin = "round";
    // nomes dos grupos econômicos (de longe), em versalete
    if (ui.layers.groups && !hl && k < 1.8) {
      const ga = a * clamp((1.8 - k) / 1, 0, 1);
      ctx.font = `600 ${11}px Inter, -apple-system, system-ui, sans-serif`;
      let shown = 0;
      for (const g of W.groups) {
        if (g.nc < 2 || !g.mc || shown >= (innerWidth < 760 ? 8 : 16)) continue;
        const sx = toScreenX(g.cx), sy = toScreenY(g.cy) - g.rad * k * 0.7 - 10;
        const label = g.n.toUpperCase();
        const w = measure(label, ctx.font) * 1.12 + 6;
        if (!fits(sx - w / 2, sy - 8, sx + w / 2, sy + 8)) continue;
        placed.push([sx - w / 2, sy - 8, sx + w / 2, sy + 8]);
        ctx.globalAlpha = ga;
        ctx.fillStyle = css["--m-group"];
        ctx.letterSpacing = "1.2px";
        ctx.fillText(label, sx - w / 2 + 3, sy);
        ctx.letterSpacing = "0px";
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
      const r = Math.max(node.t === "c" ? 2.2 : 1.1, inflate(W.R[i] * k, sizeK));
      const inHl = hl && hl.has(i);
      if (hl && !inHl && ui.dim > 0.5) continue;
      // de longe só as maiores; perto, quase todos
      const need = inHl ? 0 : node.t === "c" ? 3.2 : 4.5;
      if (r < need && !(node.t === "c" && k > 2.5)) continue;
      const x = X[i], y = Y[i];
      if (x < -50 || x > Wpx + 50 || y < -20 || y > Hpx + 20) continue;
      const big = node.t === "c" && r > 11;
      const font = `${big ? 650 : node.t === "c" ? 600 : 500} ${big ? 13 : 11.5}px Inter, -apple-system, system-ui, sans-serif`;
      const name = shortName(node.n);
      const w = measure(name, font);
      const lx = x + r + 4, ly = y;
      if (!fits(lx - 2, ly - 8, lx + w + 2, ly + 8)) continue;
      placed.push([lx - 2, ly - 8, lx + w + 2, ly + 8]);
      ctx.font = font;
      ctx.globalAlpha = a * (hl && !inHl ? 1 - ui.dim : 1) * (ui.sectorOff.has(node.c) && node.t === "c" ? 0.3 : 1);
      ctx.strokeStyle = css["--m-label-halo"];
      ctx.lineWidth = 3.5;
      ctx.strokeText(name, lx, ly);
      ctx.fillStyle = node.t === "c" ? css["--m-label"] : css["--m-muted"];
      if (inHl) ctx.fillStyle = css["--m-label"];
      ctx.fillText(name, lx, ly);
      n++;
    }
    ctx.globalAlpha = 1;
  }
  const shortName = (s) => {
    const t = String(s).replace(/[\s,]+(S\.?\/?A\.?|S\/a|Ltda\.?|Inc\.?|LLC|S\.à ?r\.l\.?|Sarl|S\.R\.L\.)\s*$/i, "").replace(/\s*\(.*?\)\s*$/, "").replace(/[\s,;-]+$/, "");
    return t.length > 34 ? `${t.slice(0, 32)}…` : t;
  };

  // ---------------------------------------------------------- achar o nó sob o cursor
  function pick(sx, sy) {
    if (!W.ready) return -1;
    const k = cam.k, sizeK = sizeScale();
    const wx = toWorldX(sx), wy = toWorldY(sy);
    const tol = (TOUCH ? 16 : 7) / k;
    const reach = Math.ceil((tol + 40 * sizeK) / W.cell);
    const cx = Math.floor(wx / W.cell), cy = Math.floor(wy / W.cell);
    let best = -1, bestD = Infinity;
    for (let gx = cx - reach; gx <= cx + reach; gx++) {
      for (let gy = cy - reach; gy <= cy + reach; gy++) {
        const cell = W.grid.get(`${gx},${gy}`);
        if (!cell) continue;
        for (const i of cell) {
          if (!vis[i]) continue;
          const n = W.nodes[i];
          const r = Math.max(n.t === "c" ? 2.2 : 1.1, inflate(W.R[i] * k, sizeK)) / k;
          const d = Math.hypot(W.x[i] - wx, W.y[i] - wy) - r;
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
  function setHighlight(nodes, edges, brd) {
    ui.hl = nodes; ui.hlE = edges; ui.hlB = brd;
    ui.dimTarget = nodes ? 1 : 0;
    bump();
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
    if (fly) flyToNodes([...nb.nodes], i);
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
    flyToNodes(g.m, g.h);
    if (push) route(`g/${gi}`);
  }
  function flyToNodes(list, focus) {
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const i of list) { x0 = Math.min(x0, W.x[i] - W.R[i]); x1 = Math.max(x1, W.x[i] + W.R[i]); y0 = Math.min(y0, W.y[i] - W.R[i]); y1 = Math.max(y1, W.y[i] + W.R[i]); }
    const span = Math.max(x1 - x0, y1 - y0);
    // vizinhança enorme (um fundo com 60 participações): enquadra mas sem afastar demais
    const minSpan = 70;
    if (span < minSpan) { const c = [(x0 + x1) / 2, (y0 + y1) / 2]; x0 = c[0] - minSpan / 2; x1 = c[0] + minSpan / 2; y0 = c[1] - minSpan / 2; y1 = c[1] + minSpan / 2; }
    const v = fitView({ x0, x1, y0, y1 }, 1.25);
    v.k = clamp(v.k, kMin(), 14);
    flyTo(v, 800);
  }

  // ---------------------------------------------------------- dica ao passar o mouse
  function showTip(i, sx, sy) {
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
    tip.innerHTML = `<b>${esc(n.n)}</b>${rows.map(([a, b]) => `<div class="row"><span>${esc(a)}</span><span>${esc(b)}</span></div>`).join("")}`;
    tip.hidden = false;
    const w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = `${clamp(sx + 16, 8, Wpx - w - 8)}px`;
    tip.style.top = `${sy + 16 + h > Hpx - 8 ? sy - h - 12 : sy + 16}px`;
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
      return `<span class="m-badge" style="background:${col}"><span>${esc(ini)}</span>${n.tk ? `<img src="https://icons.brapi.dev/icons/${esc(n.tk)}.svg" alt="" loading="lazy" onload="this.naturalWidth > 1 ? this.classList.add('ok') : this.remove()" onerror="this.remove()">` : ""}</span>`;
    }
    if (n.t === "p") {
      const ini = n.n.split(/\s+/).filter((w) => w && !/^(de|da|do|das|dos|e)$/i.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
      return `<span class="m-badge round" style="background:${col};color:#1b1b1f">${esc(ini)}</span>`;
    }
    return `<span class="m-badge" style="background:${col};color:#1b1b1f">${icon("cias")}</span>`;
  }
  function rowHtml(i, pctText, sub, ctl) {
    const n = W.nodes[i];
    return `<li data-go="${i}"><span class="m-dot" style="background:${colorOf(n)}"></span><span class="nm">${esc(n.n)}</span>
      <span class="pc ${ctl ? "m-ctl" : ""}">${esc(pctText)}</span>${sub ? `<small>${esc(sub)}</small>` : ""}</li>`;
  }
  function listHtml(rows, limit = 8, id = "") {
    if (!rows.length) return "";
    const shown = rows.slice(0, limit).join("");
    return `<ul class="m-list" ${id ? `data-list="${id}"` : ""}>${shown}${rows.length > limit ? `<li class="more" data-more="${id}">Mostrar mais ${rows.length - limit}</li>` : ""}</ul>`;
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
          return rowHtml(x.o, ROLE[x.r] ? "" : "", `${ROLE[x.r] || "Cargo"} aqui · também em ${others.slice(0, 3).join(", ")}${others.length > 3 ? ` e mais ${others.length - 3}` : ""}`, false);
        }
        return rowHtml(x.o, "", `${ROLE[x.r] || "Cargo"}${o.mc ? ` · ${brl(o.mc)}` : ""}`, false);
      }),
    };
    const profile = n.t === "c" && n.k ? `cias.html#cia/${encodeURIComponent(n.k)}` : n.s ? `cias.html#pessoa/${encodeURIComponent(n.s)}` : "";
    body.innerHTML = `
      <div class="m-head">${badgeHtml(n)}<div><h2>${esc(n.n)}</h2><p>${esc(subs.filter(Boolean).join(" · "))}</p></div></div>
      ${g && g.nc >= 2 ? `<div class="m-chips"><button class="m-chip gold" data-group="${g.i}" type="button">Grupo ${esc(g.n)} · ${plural(g.nc, "companhia", "companhias")}</button></div>` : ""}
      <div class="m-stats">${stats.map(([a, b]) => `<div class="m-stat"><span>${a}</span><b>${esc(b)}</b></div>`).join("")}</div>
      <div class="m-btns">
        <button class="m-btn primary" type="button" data-act="tree">${icon("tree")}Estrutura societária</button>
        <button class="m-btn" type="button" data-act="path">${icon("path")}Conectar com…</button>
        ${profile ? `<a class="m-btn wide" href="${profile}">${n.t === "c" ? "Perfil completo da companhia" : "Perfil completo"} ${icon("ext")}</a>` : ""}
      </div>
      <div id="m-pick-slot"></div>
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
    $("#m-panel-body").innerHTML = `
      <div class="m-head"><span class="m-badge" style="background:${SECTOR[g.sector][dark ? 0 : 1]}">${icon("cias")}</span><div><h2>Grupo ${esc(g.n)}</h2><p>Grupo econômico · ${plural(g.nc, "companhia aberta", "companhias abertas")}</p></div></div>
      <div class="m-stats">
        <div class="m-stat"><span>Valor de mercado</span><b>${esc(g.mc ? brl(g.mc) : "–")}</b></div>
        <div class="m-stat"><span>Companhias</span><b>${nf(g.nc)}</b></div>
        <div class="m-stat"><span>Entidades</span><b>${nf(g.m.length)}</b></div>
      </div>
      <div class="m-btns">
        <button class="m-btn primary wide" type="button" data-act="tree" data-node="${g.h}">${icon("tree")}Estrutura a partir de ${esc(shortName(head.n))}</button>
      </div>
      ${g.r.length ? `<div class="m-sec"><h3>Controle final</h3>${listHtml(g.r.map((r) => rowHtml(r, "", kindLabel(W.nodes[r]), true)), 6)}</div>` : ""}
      <div class="m-sec"><h3>Companhias do grupo<small>valor de mercado</small></h3>${listHtml(panelRows.cos, 12, "cos")}</div>
      <p class="m-foot">Grupo = companhias que chegam ao mesmo topo seguindo, em cada uma, o acionista controlador de maior participação.</p>`;
    openPanel();
  }

  function openPanel() {
    const p = $("#m-panel");
    // no celular, na estrutura e no caminho a folha abre baixa: o desenho é o que importa
    p.classList.toggle("peek", innerWidth <= 760 && ui.mode !== "world");
    p.hidden = false;
    document.body.classList.add("panel-open");
    $("#m-panel-body").scrollTop = 0;
  }
  function closePanel() {
    $("#m-panel").hidden = true;
    document.body.classList.remove("panel-open");
  }

  // ---------------------------------------------------------- estrutura societária (árvore)
  let tree = null;
  const tcam = { cx: 0, cy: 0, k: 1 };
  const CARD_W = 210, CARD_H = 54, GAP_X = 18, GAP_Y = 96;

  async function openTree(i, { push = true } = {}) {
    const n = W.nodes[i];
    ui.mode = "tree";
    ui.sel = i;
    setHighlight(null, null, null);
    // sobe: quem é dono, até 4 níveis; desce: o que ela tem (e o que essas têm), mais as controladas do Formulário
    const levels = new Map([[i, 0]]);
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
    $("#m-mode-text").innerHTML = `Estrutura societária · <b>${esc(n.n)}</b>`;
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
    const rowsY = new Map();
    // posições: o foco no zero; acima e abaixo empilhados
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
    // foco
    const focusNode = byLvl.get(0)[0];
    focusNode.x = 0; focusNode.y = 0; focusNode.w2 = CARD_W + 50;
    // para cima: do -1 em diante
    y = 0;
    for (const lvl of lvls.filter((l) => l < 0).sort((a, b) => b - a)) {
      const rows = place(lvl);
      for (const row of rows) { y -= CARD_H + GAP_Y * (row === rows[0] ? 1 : 0.35); setRow(row, y, CARD_W); }
      rowsY.set(lvl, y);
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
    ny1 = Math.min(ny1, (near.find((n) => n.lvl === 0)?.y || 0) + (CARD_H + GAP_Y) * 2.2);
    return { nodes, links, focus, all: { x0, x1, y0, y1 }, bounds: { x0: Math.max(nx0, -Wpx), x1: Math.min(nx1, Wpx), y0: ny0, y1: ny1 }, hover: null };
  }

  function treeCardText(nd) {
    if (nd.w != null) {
      const n = W.nodes[nd.w];
      return { name: n.n, color: colorOf(n), sub: n.t === "c" ? [n.tk, n.mc ? brl(n.mc) : "capital fechado"].filter(Boolean).join(" · ") : kindLabel(n) + (n.v ? ` · ≈ ${brl(n.v)}` : ""), inMap: true };
    }
    const x = nd.ext;
    return { name: x.n, color: dark ? "#6b7280" : "#9ca3af", sub: [x.tipo, x.pais || x.uf].filter(Boolean).join(" · ") || "controlada ou coligada", inMap: false };
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
    ctx.globalAlpha = e;
    const ctlRGB = css["--m-ctl"], edgeRGB = css["--m-edge"];
    // ligações em curva vertical, com a porcentagem no meio
    for (const l of tree.links) {
      const x1 = tx(l.a.x), y1 = ty(l.a.y + CARD_H / 2), x2 = tx(l.b.x), y2 = ty(l.b.y - CARD_H / 2);
      if (Math.max(y1, y2) < 0 || Math.min(y1, y2) > Hpx || Math.max(x1, x2) < -200 || Math.min(x1, x2) > Wpx + 200) continue;
      const hov = tree.hover && (tree.hover === l.a || tree.hover === l.b);
      ctx.strokeStyle = l.ctl ? `rgba(${ctlRGB},${hov ? 1 : 0.7})` : `rgba(${edgeRGB},${hov ? 0.9 : 0.45})`;
      ctx.lineWidth = (l.ctl ? 1.8 : 1.1) * clamp(k, 0.6, 1.4);
      const my = (y1 + y2) / 2;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.bezierCurveTo(x1, my, x2, my, x2, y2); ctx.stroke();
      if (!REDUCED) {
        const u = ((t || 0) * 0.00028 + (l.a.x + l.b.x) * 0.0007) % 1;
        const iu = 1 - u;
        const px = iu ** 3 * x1 + 3 * iu * iu * u * x1 + 3 * iu * u * u * x2 + u ** 3 * x2;
        const py = iu ** 3 * y1 + 3 * iu * iu * u * my + 3 * iu * u * u * my + u ** 3 * y2;
        ctx.fillStyle = l.ctl ? `rgb(${ctlRGB})` : `rgba(${edgeRGB},.9)`;
        ctx.beginPath(); ctx.arc(px, py, 2 * clamp(k, 0.7, 1.3), 0, 6.2832); ctx.fill();
      }
      if (isNum(l.p) && l.p >= 0 && k > 0.45) {
        const label = pct(l.p);
        const font = `600 ${10.5 * clamp(k, 0.8, 1.25)}px Inter, system-ui, sans-serif`;
        const w = measure(label, font) + 10, h = 16 * clamp(k, 0.8, 1.25);
        // a porcentagem fica perto de quem é dono quando ele está acima (muitos donos convergem no foco) e perto da
        // controlada quando ela está abaixo: os rótulos se espalham em vez de empilhar no meio
        const u = l.a.lvl < 0 ? 0.22 : 0.78, iu = 1 - u;
        const lx = iu ** 3 * x1 + 3 * iu * iu * u * x1 + 3 * iu * u * u * x2 + u ** 3 * x2;
        const ly = iu ** 3 * y1 + 3 * iu * iu * u * my + 3 * iu * u * u * my + u ** 3 * y2;
        ctx.fillStyle = css["--m-card"];
        roundRect(lx - w / 2, ly - h / 2, w, h, h / 2); ctx.fill();
        ctx.strokeStyle = l.ctl ? `rgba(${ctlRGB},.55)` : css["--m-card-line"]; ctx.lineWidth = 1; ctx.stroke();
        ctx.fillStyle = l.ctl ? `rgb(${ctlRGB})` : css["--m-muted"];
        ctx.font = font; ctx.textBaseline = "middle"; ctx.textAlign = "center";
        ctx.fillText(label, lx, ly + 0.5);
        ctx.textAlign = "left";
      }
    }
    // cartões
    for (const nd of tree.nodes) {
      const w = nd.w2 * k, h = CARD_H * k;
      const x = tx(nd.x) - w / 2, y = ty(nd.y) - h / 2;
      if (x > Wpx || x + w < 0 || y > Hpx || y + h < 0) continue;
      const { name, color, sub, inMap } = treeCardText(nd);
      const focus = nd.lvl === 0, hov = tree.hover === nd;
      ctx.shadowColor = dark ? "rgba(0,0,0,.45)" : "rgba(20,30,60,.14)";
      ctx.shadowBlur = focus || hov ? 18 : 8; ctx.shadowOffsetY = 3;
      ctx.fillStyle = css["--m-card"];
      roundRect(x, y, w, h, 11 * k); ctx.fill();
      ctx.shadowColor = "transparent"; ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
      ctx.strokeStyle = focus ? `rgb(${css["--m-hl"]})` : hov ? `rgba(${css["--m-hl"]},.7)` : css["--m-card-line"];
      ctx.lineWidth = focus ? 2 : 1;
      ctx.stroke();
      // barra de cor do setor ou tipo
      ctx.fillStyle = color;
      roundRect(x + 7 * k, y + 9 * k, 4 * k, h - 18 * k, 2 * k); ctx.fill();
      if (k > 0.32) {
        const fs1 = (focus ? 14 : 12.5) * k, fs2 = 11 * k;
        const f1 = `${focus ? 700 : 600} ${fs1}px Inter, system-ui, sans-serif`, f2 = `500 ${fs2}px Inter, system-ui, sans-serif`;
        ctx.textBaseline = "middle";
        ctx.font = f1; ctx.fillStyle = inMap ? css["--m-ink"] : css["--m-muted"];
        ctx.fillText(fitText(name, f1, w - 26 * k), x + 18 * k, y + h * 0.37);
        ctx.font = f2; ctx.fillStyle = css["--m-muted"];
        ctx.fillText(fitText(sub, f2, w - 26 * k), x + 18 * k, y + h * 0.68);
      }
    }
    ctx.globalAlpha = 1;
  }
  function pickTree(sx, sy) {
    if (!tree) return null;
    const x = (sx - Wpx / 2) / tcam.k + tcam.cx, y = (sy - Hpx / 2) / tcam.k + tcam.cy;
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
    $("#m-mode-text").innerHTML = `${esc(shortName(W.nodes[a].n))} → ${esc(shortName(W.nodes[b].n))} · ${plural(r.ev.length, "passo", "passos")}`;
    const steps = r.ev.map((e, s) => {
      const u = r.path[s], v = r.path[s + 1];
      const nm = (i) => `<b data-go="${i}">${esc(W.nodes[i].n)}</b>`;
      if (e >= 0) {
        const own = W.es[e], owned = W.et[e], p = W.ep[e], ctl = W.ef[e] & 1;
        return `<li>${nm(own)} ${ctl ? "controla" : "tem"} ${p >= 0 ? `${pct(p)} de` : "participação em"} ${nm(owned)}</li>`;
      }
      const j = -2 - e, person = W.bs[j], co = W.bt[j];
      return `<li>${nm(person)} está ${({ P: "na presidência do conselho", E: "na presidência executiva", C: "no conselho de administração", D: "na diretoria" })[W.br[j]] || "na administração"} de ${nm(co)}</li>`;
    });
    $("#m-panel-body").innerHTML = `
      <div class="m-head"><span class="m-badge" style="background:rgb(${css["--m-hl"]})">${icon("path")}</span><div><h2>Como se conectam</h2><p>${esc(shortName(W.nodes[a].n))} e ${esc(shortName(W.nodes[b].n))}</p></div></div>
      <div class="m-sec"><h3>O caminho mais curto<small>${plural(r.ev.length, "ligação", "ligações")}</small></h3><ol class="m-path">${steps.join("")}</ol></div>
      <div class="m-btns"><button class="m-btn wide" type="button" data-sel="${a}">Voltar para ${esc(shortName(W.nodes[a].n))}</button><button class="m-btn wide" type="button" data-sel="${b}">Ir para ${esc(shortName(W.nodes[b].n))}</button></div>
      <p class="m-foot">Ligações por participação acionária (5% ou mais, ou controle) e por pessoas que estão no conselho ou na diretoria das duas. Gestoras e fundos não contam como ponte.</p>`;
    openPanel();
    flyToNodes(r.path, a);
    if (push) route(`c/${W.nodes[a].id}/${W.nodes[b].id}`);
  }

  function exitMode(push = true) {
    if (ui.mode === "tree") { ui.treeTarget = 0; setTimeout(() => { if (ui.treeTarget === 0) tree = null; }, 400); }
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
        return `<li role="option" data-idx="${idx}" aria-selected="false"><span class="m-dot" style="background:${SECTOR[g.sector][dark ? 0 : 1]}"></span><span class="m-r-txt"><b>Grupo ${esc(g.n)}</b><small>${plural(g.nc, "companhia", "companhias")}${g.mc ? ` · ${brl(g.mc)}` : ""}</small></span></li>`;
      }
      const n = W.nodes[r.i];
      return `<li role="option" data-idx="${idx}" aria-selected="false"><span class="m-dot" style="background:${colorOf(n)}"></span><span class="m-r-txt"><b>${esc(n.n)}</b><small>${esc(n.t === "c" ? [n.tk, n.mc ? brl(n.mc) : "capital fechado", n.st].filter(Boolean).join(" · ") : [kindLabel(n), n.v ? `≈ ${brl(n.v)}` : ""].filter(Boolean).join(" · "))}</small></span></li>`;
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
      html = W.groups.filter((g) => g.nc >= 2).slice(0, 60).map((g) => `<li data-group="${g.i}" class="${ui.group === g.i ? "on" : ""}"><b><span class="m-dot" style="background:${SECTOR[g.sector][dark ? 0 : 1]}"></span>${esc(g.n)}</b><span class="v">${g.mc ? brl(g.mc) : ""}</span>
        <small>${plural(g.nc, "companhia", "companhias")}${g.r.length ? ` · ${esc(g.r.slice(0, 2).map((r) => shortName(W.nodes[r].n)).join(", "))}` : ""}</small></li>`).join("");
    } else if (rankTab === "investors") {
      note.textContent = "Quem tem mais valor em participações diretas (participação × valor de mercado).";
      html = W.nodes.filter((n) => n.t !== "c" && n.v).sort((a, b) => b.v - a.v).slice(0, 60).map((n) => `<li data-go="${n.i}" class="${ui.sel === n.i ? "on" : ""}"><b><span class="m-dot" style="background:${colorOf(n)}"></span>${esc(shortName(n.n))}</b><span class="v">≈ ${brl(n.v)}</span>
        <small>${esc(kindLabel(n))} · ${plural(W.out[n.i].length, "participação", "participações")}</small></li>`).join("");
    } else {
      note.textContent = "Pessoas e empresas que mais ligam companhias entre si: participações e cadeiras em conselhos e diretorias.";
      const score = (n) => new Set([...W.out[n.i].map((j) => W.et[j]), ...W.brd[n.i].map((j) => W.bt[j])].filter((c) => W.nodes[c].t === "c")).size;
      html = W.nodes.filter((n) => n.t === "p" || n.t === "j").map((n) => [n, score(n)]).filter(([, s]) => s >= 3).sort((a, b) => b[1] - a[1] || (b[0].v || 0) - (a[0].v || 0)).slice(0, 60)
        .map(([n, s]) => `<li data-go="${n.i}" class="${ui.sel === n.i ? "on" : ""}"><b><span class="m-dot" style="background:${colorOf(n)}"></span>${esc(shortName(n.n))}</b><span class="v">${s}</span>
        <small>${esc(kindLabel(n))} · ${s} companhias</small></li>`).join("");
    }
    list.innerHTML = html;
  }
  function markRank() {
    for (const li of $("#m-rank").children) li.classList.toggle("on", (li.dataset.group != null && +li.dataset.group === ui.group) || (li.dataset.go != null && +li.dataset.go === ui.sel));
  }

  // ---------------------------------------------------------- legenda
  function renderLegend() {
    const sec = Object.entries(W.setores).filter(([c]) => W.nodes.some((n) => n.t === "c" && n.c === c));
    requestAnimationFrame(() => document.body.style.setProperty("--legend-h", `${$("#m-legend").offsetHeight || 0}px`));
    const SHORT = { fin: "Financeiro", util: "Energia e água", oil: "Petróleo e química", base: "Mineração e aço", agro: "Agro e alimentos",
      cons: "Varejo e consumo", imob: "Imobiliário", ind: "Indústria", log: "Transporte", tech: "Telecom e tecnologia", saude: "Saúde e educação", out: "Holdings e outros" };
    $("#m-legend").innerHTML = sec.map(([c, label]) => `<button class="lg ${ui.sectorOff.has(c) ? "off" : ""}" type="button" data-sector="${c}" title="${esc(label)}: clique para apagar ou acender o setor"><i style="background:${SECTOR[c][dark ? 0 : 1]}"></i>${esc(SHORT[c] || label)}</button>`).join("")
      + `<hr>` + ["pf", "hold", "fund", "pen", "gov", "sub"].map((k) => `<span class="lg" title="${KIND[k][2]}"><i class="sq" style="background:${KIND[k][dark ? 0 : 1]}"></i>${k === "sub" ? "Controlada comum" : KIND[k][2]}</span>`).join("")
      + `<span class="lg"><i class="ln" style="background:rgb(${css["--m-ctl"]})"></i>Controle</span><span class="lg"><i class="ln" style="background:rgba(${css["--m-edge"]},.6)"></i>Participação</span>`;
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
    canvas.setPointerCapture(e.pointerId);
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
      if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > (TOUCH ? 8 : 4)) { drag.moved = true; canvas.classList.add("dragging"); showTip(-1); }
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
  function zoomCam(c, sx, sy, f) {
    const k = clamp(c.k * f, c === tcam ? 0.15 : kMin(), c === tcam ? 3 : kMax());
    const wx = (sx - Wpx / 2) / c.k + c.cx, wy = (sy - Hpx / 2) / c.k + c.cy;
    c.k = k; c.cx = wx - (sx - Wpx / 2) / k; c.cy = wy - (sy - Hpx / 2) / k;
  }
  function hoverAt(sx, sy) {
    if (ui.mode === "tree" && tree) {
      const nd = pickTree(sx, sy);
      if (nd !== tree.hover) { tree.hover = nd; canvas.classList.toggle("pointing", !!nd); request(); }
      if (nd && nd.w != null) showTip(nd.w, sx, sy); else showTip(-1);
      return;
    }
    const i = pick(sx, sy);
    if (i !== ui.hover) {
      ui.hover = i;
      canvas.classList.toggle("pointing", i >= 0);
      // sem seleção, passar o mouse já mostra a vizinhança
      if (ui.sel < 0 && ui.group < 0 && ui.mode === "world") {
        if (i >= 0) { const nb = neighborhood(i); setHighlight(nb.nodes, nb.edges, nb.brd); } else setHighlight(null, null, null);
      }
      request();
    }
    showTip(i, sx, sy);
  }
  function onUp(e) {
    pointers.delete(e.pointerId);
    canvas.classList.remove("dragging");
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
    if (i >= 0) select(i);
    else if (dbl) flyTo({ cx: toWorldX(e.clientX), cy: toWorldY(e.clientY), k: clamp(cam.k * 2, kMin(), kMax()) }, 450);
    else if (ui.sel >= 0 || ui.group >= 0 || ui.mode === "path") { if (ui.mode === "path") exitMode(false); select(-1); }
  }
  function onWheel(e) {
    e.preventDefault();
    lastWheel = performance.now();
    anim = null; inertia = null;
    hideHint();
    const c = activeCam();
    // trackpad (pinça vem com ctrlKey) é mais fino; roda do mouse dá passos
    const f = Math.exp(-e.deltaY * (e.ctrlKey ? 0.012 : e.deltaMode === 1 ? 0.06 : 0.0022));
    zoomCam(c, e.clientX, e.clientY, f);
    request();
  }

  let hintTimer = 0;
  function hideHint() { const h = $("#m-hint"); if (!h.hidden) { h.hidden = true; store.set("mundo-hint", 1); } clearTimeout(hintTimer); }

  // ---------------------------------------------------------- ligações dos controles
  function wire() {
    addEventListener("resize", () => { resize(); });
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("pointerleave", () => { if (!drag) { showTip(-1); if (ui.hover >= 0) { ui.hover = -1; if (ui.sel < 0 && ui.group < 0 && ui.mode === "world") setHighlight(null, null, null); request(); } } });
    canvas.addEventListener("wheel", onWheel, { passive: false });
    $("#m-zin").onclick = () => { const c = activeCam(); if (c === cam) flyTo({ ...cam, k: clamp(cam.k * 1.8, kMin(), kMax()) }, 350); else { zoomCam(tcam, Wpx / 2, Hpx / 2, 1.4); request(); } };
    $("#m-zout").onclick = () => { const c = activeCam(); if (c === cam) flyTo({ ...cam, k: clamp(cam.k / 1.8, kMin(), kMax()) }, 350); else { zoomCam(tcam, Wpx / 2, Hpx / 2, 1 / 1.4); request(); } };
    $("#m-zfit").onclick = () => {
      if (ui.mode === "tree" && tree) {
        const b = tree.all, ins = insets();
        const k = clamp(Math.min((Wpx - ins.left - ins.right) / (b.x1 - b.x0 + 60), (Hpx - ins.top - ins.bottom) / (b.y1 - b.y0 + 60)), 0.15, 1.2);
        Object.assign(tcam, { cx: (b.x0 + b.x1) / 2 - ((ins.left - ins.right) / 2) / k, cy: (b.y0 + b.y1) / 2 - ((ins.top - ins.bottom) / 2) / k, k });
        request();
      } else flyTo(fitView(), 700);
    };
    $("#m-theme").onclick = () => {
      const isDark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      const next = isDark ? "light" : "dark";
      fpmTheme(next); store.set("theme", next);
      requestAnimationFrame(() => { readTheme(); drawCache.byColor = null; renderLegend(); renderRank(); if (ui.sel >= 0) renderPanel(ui.sel); request(); });
    };
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { readTheme(); drawCache.byColor = null; renderLegend(); request(); });
    $("#m-layers-btn").onclick = (e) => { e.stopPropagation(); const p = $("#m-layers"); p.hidden = !p.hidden; $("#m-layers-btn").setAttribute("aria-expanded", String(!p.hidden)); $("#m-legend").classList.toggle("show", !p.hidden); };
    document.addEventListener("pointerdown", (e) => { if (!e.target.closest("#m-layers, #m-layers-btn")) { $("#m-layers").hidden = true; $("#m-legend").classList.remove("show"); } });
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
    $("#m-explore-toggle").onclick = () => {
      const ex = $("#m-explore");
      ex.classList.toggle("collapsed");
      $("#m-explore-toggle").setAttribute("aria-expanded", String(!ex.classList.contains("collapsed")));
      store.set("mundo-explore", !ex.classList.contains("collapsed"));
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
    $("#m-legend").onclick = (e) => {
      const b = e.target.closest("[data-sector]");
      if (!b) return;
      const c = b.dataset.sector;
      if (ui.sectorOff.has(c)) ui.sectorOff.delete(c); else ui.sectorOff.add(c);
      b.classList.toggle("off", ui.sectorOff.has(c));
      bump();
    };
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
    Object.assign(cam, fitView());
    const s = data.stats || {};
    $("#m-sub").textContent = `${nf(s.cias || 0)} companhias · ${nf(s.grupos || 0)} grupos · ${nf((s.acionistas || 0) + (s.pessoas_conselho || 0))} acionistas e conselheiros`;
    renderLegend();
    renderRank();
    document.body.classList.remove("loading");
    ui.intro = location.hash ? 1 : 0;
    request();
    readRoute();
    if (!store.get("mundo-hint", 0) && !location.hash) { $("#m-hint").hidden = false; hintTimer = setTimeout(hideHint, 9000); }
  }

  init();
})();
