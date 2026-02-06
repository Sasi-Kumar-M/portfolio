// Counter animation
document.querySelectorAll("[data-count]").forEach(el=>{
 let t=+el.dataset.count,c=0;
 let i=setInterval(()=>{
  c++;
  el.textContent=c;
  if(c>=t)clearInterval(i);
 },30);
});

// WhatsApp
document.getElementById("waBtn").onclick=()=>{
 const msg=document.getElementById("message").value;
 window.open("https://wa.me/919164657851?text="+encodeURIComponent(msg));
};
