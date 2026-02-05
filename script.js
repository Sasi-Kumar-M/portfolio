document.addEventListener("DOMContentLoaded",()=>{

document.getElementById("themeToggle").onclick=()=>document.body.classList.toggle("dark");

const reveals=document.querySelectorAll(".reveal");

function reveal(){
reveals.forEach(r=>{
if(r.getBoundingClientRect().top<window.innerHeight-100){
r.classList.add("active");
}
});
}

window.addEventListener("scroll",reveal);
reveal();

});
