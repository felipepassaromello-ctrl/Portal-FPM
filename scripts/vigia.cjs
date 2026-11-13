// Vigia do Portal FPM: confere o site no ar do jeito que o Felipe usa e lista o que estiver errado, para ser corrigido
// antes de ele perceber. Roda fora do CI (precisa do Playwright com Chromium), pela tarefa agendada do vigia.
//
//   node scripts/vigia.cjs            # imprime os problemas; sai com código 1 se houver algum
//
// O que confere:
//   - páginas (index e abas, cias, perfil, mundo) no computador e no iPhone: erro de JavaScript, requisição do próprio
//     site falhando, conteúdo escapando da tela;
//   - edição do dia: digest de hoje (dias úteis, depois das 08:40), com briefing e análise;
//   - e-mail da manhã enviado (dias úteis, depois das 09:00);
//   - áudio do briefing igual ao briefing publicado;
//   - PDFs: cada fato relevante dos últimos 2 dias tem cópia no site (pdf/<protocolo>.pdf) e a cópia abre como PDF;
//   - links "PDF" das companhias apontam para a cópia quando ela existe;
//   - execuções recentes do "Atualizar portal" e do e-mail sem falha, e o portal atualizado nas últimas 2h30 em dia útil.
const { chromium, devices } = require("playwright");

const SITE = "https://felipepassaromello-ctrl.github.io/Portal-FPM/";
const API = "https://api.github.com/repos/felipepassaromello-ctrl/Portal-FPM";
const problems = [];
const warn = (area, msg) => problems.push(`[${area}] ${msg}`);

const brt = () => new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const { execFileSync } = require("child_process");
const getJson = async (url) => {
  if (url.startsWith(API)) {
    // a API do GitHub vai pelo curl: na sessão do vigia, o curl passa pelo proxy autenticado; o fetch do Node sai direto e
    // cai no limite de 60 pedidos por hora sem autenticação (403 "API rate limit exceeded")
    const out = execFileSync("curl", ["-sS", "--max-time", "30", "-H", "Accept: application/vnd.github+json", "-w", "\n%{http_code}", url], { encoding: "utf8" });
    const cut = out.lastIndexOf("\n"), code = out.slice(cut + 1).trim();
    if (code !== "200") throw new Error(`${code} em ${url}`);
    return JSON.parse(out.slice(0, cut));
  }
  const r = await fetch(`${url}${url.includes("?") ? "&" : "?"}t=${Date.now()}`, { cache: "no-store" });
  if (!r.ok) throw new Error(`${r.status} em ${url}`);
  return r.json();
};

async function checkData() {
  const now = brt(), today = iso(now), hhmm = now.getHours() * 100 + now.getMinutes(), weekday = now.getDay() >= 1 && now.getDay() <= 5;
  const digest = await getJson(`${SITE}data/digest.json`).catch((e) => warn("dados", `digest não abre: ${e.message}`));
  if (digest) {
    const ed = String(digest.edition || digest.generated_at || digest.date || "").slice(0, 10);
    if (weekday && hhmm >= 840 && ed && ed < today) warn("edição", `o site ainda mostra a edição de ${ed}`);
    if (!digest.brief?.headline) warn("edição", "o digest publicado não tem briefing");
    const items = digest.items || [];
    const sem = items.filter((it) => !it.summary).length;
    if (items.length && sem / items.length > 0.6) warn("edição", `${sem} de ${items.length} notícias sem análise`);
    const audio = await getJson(`${SITE}audio/briefing.json`).catch(() => null);
    if (digest.brief?.headline && (!audio || audio.headline !== digest.brief.headline))
      warn("áudio", `o áudio é de outro briefing ("${(audio?.headline || "nenhum").slice(0, 60)}"); o portal está usando a voz do navegador`);
  }
  if (weekday && hhmm >= 900) {
    const sent = await getJson(`${SITE}data/email_sent.json`).catch(() => null);
    if (!sent || sent.date !== today) warn("e-mail", `o e-mail de hoje não consta como enviado (último: ${sent?.date || "nenhum"})`);
  }
  // PDFs: fatos relevantes dos últimos 2 dias, entregues há mais de 2 horas (tempo para a coleta pegar)
  const idx = await getJson(`${SITE}pdf/index.json`).catch(() => null);
  if (!idx) warn("pdf", "pdf/index.json não existe: o site não tem cópias dos PDFs da CVM");
  const month = await getJson(`${SITE}data/cias/mes/${today.slice(0, 7)}.json`).catch(() => []);
  const since = iso(new Date(now.getTime() - 2 * 864e5));
  const limit = new Date(now.getTime() - 2 * 36e5);
  const frs = month.filter((d) => d.c === "Fato Relevante" && d.d >= since && new Date(`${d.d}T${d.h || "00:00"}:00`) < limit);
  const missing = frs.filter((d) => !idx || !idx[d.id]);
  if (idx && missing.length) warn("pdf", `${missing.length} de ${frs.length} fatos relevantes recentes sem cópia no site: ${missing.slice(0, 8).map((d) => `${d.n} ${d.id}`).join("; ")}`);
  for (const d of frs.filter((d) => idx?.[d.id]).slice(0, 5)) {
    const r = await fetch(`${SITE}pdf/${d.id}.pdf`).catch(() => null);
    const head = r?.ok ? Buffer.from(await r.arrayBuffer()).subarray(0, 5).toString() : "";
    if (head !== "%PDF-") warn("pdf", `a cópia de ${d.n} (${d.id}) não abre como PDF (HTTP ${r?.status ?? "sem resposta"})`);
  }
  return { frs, idx };
}

async function checkRuns() {
  for (const wf of ["update.yml", "email.yml"]) {
    const j = await getJson(`${API}/actions/workflows/${wf}/runs?per_page=6`).catch((e) => { warn("vigia", `não consegui ler as execuções de ${wf}: ${e.message}`); return null; });
    if (!j) continue;
    const bad = j.workflow_runs.filter((r) => r.conclusion === "failure" && Date.now() - new Date(r.created_at) < 864e5);
    for (const r of bad) warn("execução", `${r.name} #${r.run_number} falhou (${r.html_url})`);
    const stuck = j.workflow_runs.filter((r) => r.status !== "completed" && Date.now() - new Date(r.created_at) > 45 * 6e4);
    for (const r of stuck) warn("execução", `${r.name} #${r.run_number} está há mais de 45 minutos sem terminar (${r.html_url})`);
    if (wf === "update.yml") {
      // o agendador do GitHub atrasa horas: em dia útil, das 09h às 21h, o portal não pode ficar mais de 2h30 sem atualizar
      const now = brt(), h = now.getHours(), weekday = now.getDay() >= 1 && now.getDay() <= 5;
      const last = j.workflow_runs.find((r) => r.conclusion === "success");
      const age = last ? (Date.now() - new Date(last.created_at)) / 6e4 : Infinity;
      if (weekday && h >= 9 && h < 21 && age > 150 && !j.workflow_runs.some((r) => r.status !== "completed"))
        warn("execução", `o portal não é atualizado há ${Math.round(age / 60 * 10) / 10} h (agendador do GitHub atrasado): dispare o update.yml`);
    }
  }
}

async function checkPages(pdf) {
  const b = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
  const pages = ["index.html", "index.html#feed", "index.html#deals", "index.html#leads", "index.html#ofertas", "index.html#base",
    "index.html#official", "index.html#agenda", "cias.html", "cias.html#cia/9512", "mundo.html"];
  const fr = pdf.frs.find((d) => pdf.idx?.[d.id]);
  if (fr) pages.push(`cias.html#cia/${fr.k}`);
  for (const [dev, opts] of [["computador", { viewport: { width: 1440, height: 900 } }], ["iPhone", { ...devices["iPhone 13"], deviceScaleFactor: 1 }]]) {
    const ctx = await b.newContext(opts);
    for (const url of pages) {
      const p = await ctx.newPage();
      const errs = [], failed = [];
      p.on("pageerror", (e) => errs.push(e.message.slice(0, 140)));
      p.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource|ERR_|CERT|fonts\.g|brapi/.test(m.text())) errs.push(m.text().slice(0, 140)); });
      p.on("response", (r) => { if (r.url().startsWith(SITE) && r.status() >= 400) failed.push(`${r.status()} ${r.url().replace(SITE, "")}`); });
      try {
        await p.goto(SITE + url, { waitUntil: "load", timeout: 45000 });
        await p.waitForTimeout(3500);
      } catch (e) {
        warn("página", `${url} (${dev}) não carregou: ${e.message.slice(0, 100)}`);
        await p.close();
        continue;
      }
      const wide = await p.evaluate(() => {
        const W = document.documentElement.clientWidth;
        if (document.documentElement.scrollWidth <= W + 1) return "";
        const el = [...document.querySelectorAll("body *")].find((n) => { const r = n.getBoundingClientRect(); return r.width > 0 && r.right > W + 2 && getComputedStyle(n).position !== "fixed"; });
        return el ? `${el.tagName.toLowerCase()}.${String(el.className).split(" ")[0]}` : "?";
      });
      if (errs.length) warn("página", `${url} (${dev}): erro de JavaScript: ${[...new Set(errs)].slice(0, 2).join(" | ")}`);
      if (failed.length) warn("página", `${url} (${dev}): ${[...new Set(failed)].slice(0, 3).join(", ")}`);
      if (wide) warn("página", `${url} (${dev}): conteúdo escapando da tela (${wide})`);
      if (fr && url === `cias.html#cia/${fr.k}` && dev === "iPhone") {
        // o link "PDF" do fato relevante tem de abrir a cópia do site, não a CVM
        const link = p.locator(`a[href*="${fr.id}"]:visible`).first(); // o perfil repete o link em abas escondidas
        if (await link.count()) {
          const [pop] = await Promise.all([ctx.waitForEvent("page", { timeout: 15000 }).catch(() => null), link.click().catch(() => null)]);
          await p.waitForTimeout(1500);
          const href = await link.getAttribute("href");
          if (!String(href).includes(`pdf/${fr.id}.pdf`)) warn("pdf", `o link "PDF" de ${fr.n} (${fr.id}) ainda abre a CVM, não a cópia do site`);
          if (pop) await pop.close();
        }
      }
      await p.close();
    }
    await ctx.close();
  }
  await b.close();
}

(async () => {
  const pdf = await checkData().catch((e) => { warn("vigia", `checagem de dados falhou: ${e.message}`); return { frs: [], idx: null }; });
  await checkRuns().catch((e) => warn("vigia", `checagem das execuções falhou: ${e.message}`));
  await checkPages(pdf).catch((e) => warn("vigia", `checagem das páginas falhou: ${e.message}`));
  if (!problems.length) {
    console.log("Vigia: nenhum problema encontrado.");
    return;
  }
  console.log(`Vigia: ${problems.length} problema(s):`);
  for (const p of problems) console.log(" - " + p);
  process.exitCode = 1;
})();
