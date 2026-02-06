document.addEventListener("DOMContentLoaded",()=>{

const typed=document.getElementById("typedName");
if(typed){
 let t="Sasi Kumar M",i=0;
 (function type(){if(i<t.length){typed.textContent+=t[i++];setTimeout(type,80)}})();
}

document.querySelectorAll(".preview-btn").forEach(b=>{
 b.onclick=()=>{
  document.getElementById("certFrame").src=b.dataset.src;
  document.getElementById("certModal").style.display="block";
 };
});

document.getElementById("closeCert").onclick=()=>{
 certModal.style.display="none";
 certFrame.src="";
};

window.onscroll=()=>{
 backToTop.style.display=scrollY>300?"block":"none";
};

backToTop.onclick=()=>scrollTo(0,0);

});
