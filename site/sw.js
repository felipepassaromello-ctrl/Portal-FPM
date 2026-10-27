/* Portal FPM — service worker: rede primeiro (o portal muda a cada hora) e, sem conexão, a última versão vista. */
const CACHE = "fpm-v5";
const SHELL = ["./", "index.html", "cias.html", "styles.css", "app.js", "cias.js", "manifest.webmanifest", "icons/icon-192.png?v=2"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // os dados vêm com ?t=… para furar cache; guarda sem a query, para achar de volta offline
  const key = url.pathname.includes("/data/") ? url.origin + url.pathname : e.request;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res.ok && (url.pathname.includes("/data/digest") || url.pathname.includes("/data/cias/resumo") || !url.pathname.includes("/data/"))) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(key, copy));
        }
        return res;
      })
      .catch(() => caches.match(key, { ignoreSearch: true }).then((r) => r || caches.match("index.html"))),
  );
});
