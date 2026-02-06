document.addEventListener("DOMContentLoaded",()=>{

// Typing animation
let t="Sasi Kumar M",i=0;
(function type(){if(i<t.length){typedName.textContent+=t[i++];setTimeout(type,80)}})();

// Certificate preview
document.querySelectorAll(".preview-btn").forEach(b=>{
 b.onclick=()=>{
  certFrame.src=b.dataset.src;
  certModal.style.display="block";
 };
});
closeCert.onclick=()=>{certModal.style.display="none";certFrame.src=""};

// Back to top
window.onscroll=()=>{backToTop.style.display=scrollY>300?"block":"none"};
backToTop.onclick=()=>scrollTo({top:0,behavior:"smooth"});

// Timeline scroll reveal
const items=document.querySelectorAll(".timeline-item");
const obs=new IntersectionObserver(es=>{
 es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show");});
},{threshold:.2});
items.forEach(i=>obs.observe(i));

// Expand / Collapse achievements
document.querySelectorAll(".toggle-achievements").forEach(btn=>{
 btn.addEventListener("click",()=>{
  const body=btn.nextElementSibling;
  body.classList.toggle("show");
  btn.textContent=body.classList.contains("show")?"Hide Key Achievements":"Show Key Achievements";
 });
});

// Animated counters
function animateCounters(){
 document.querySelectorAll("[data-count]").forEach(el=>{
  const target=+el.dataset.count;
  let c=0;
  const step=target/40;
  const i=setInterval(()=>{
    c+=step;
    if(c>=target){el.textContent=target;clearInterval(i);}
    else el.textContent=Math.round(c);
  },25);
 });
}
setTimeout(animateCounters,800);

});
