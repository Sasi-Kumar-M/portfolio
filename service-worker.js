const CACHE_NAME="sasi-portfolio-v2";
const ASSETS=["./","./index.html","./style.css","./script.js","./manifest.json","./assets/profile.jpg"];

self.addEventListener("install",e=>{
self.skipWaiting();
e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));
});

self.addEventListener("activate",e=>{
e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE_NAME).map(x=>caches.delete(x)))));
self.clients.claim();
});

self.addEventListener("fetch",e=>{
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});

self.addEventListener("message",e=>{
if(e.data==="SKIP_WAITING") self.skipWaiting();
});
