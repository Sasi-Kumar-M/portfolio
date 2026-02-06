const CACHE_NAME="sasi-portfolio-v1";
const ASSETS=[
 "./","./index.html","./style.css","./script.js","./manifest.json",
 "./assets/profile.jpg","./assets/svu-logo.png",
 "./powerbi-workshop.pdf","./generative-ai-mastermind.pdf"
];

self.addEventListener("install",e=>{
 self.skipWaiting();
 e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));
});

self.addEventListener("activate",e=>{
 e.waitUntil(caches.keys().then(k=>Promise.all(k.map(x=>x!==CACHE_NAME&&caches.delete(x)))));
 self.clients.claim();
});

self.addEventListener("fetch",e=>{
 e.respondWith(
  fetch(e.request).then(r=>{
   const c=r.clone();
   caches.open(CACHE_NAME).then(cache=>cache.put(e.request,c));
   return r;
  }).catch(()=>caches.match(e.request))
 );
});
