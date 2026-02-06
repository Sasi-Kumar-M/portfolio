document.addEventListener("DOMContentLoaded",()=>{

let t="Sasi Kumar M",i=0;
(function type(){if(i<t.length){typedName.textContent+=t[i++];setTimeout(type,80)}})();

document.querySelectorAll(".preview-btn").forEach(b=>{
 b.onclick=()=>{
  certFrame.src=b.dataset.src;
  certModal.style.display="block";
 };
});

closeCert.onclick=()=>{certModal.style.display="none";certFrame.src=""};

window.onscroll=()=>{backToTop.style.display=scrollY>300?"block":"none"};
backToTop.onclick=()=>scrollTo(0,0);

});
