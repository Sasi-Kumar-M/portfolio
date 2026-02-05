// Dark mode
const toggle=document.getElementById("themeToggle");
toggle.onclick=()=>{
document.body.classList.toggle("dark");
}

// Scroll animations
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
reveals.forEach(r=>{
const top=r.getBoundingClientRect().top;
if(top<window.innerHeight-100){r.classList.add("active")}
});
});
