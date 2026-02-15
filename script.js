// Contact form
document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();
 alert("Thank you! Message sent.");
 e.target.reset();
});

// Dark mode
const toggle=document.getElementById("themeToggle");
toggle.onclick=()=>{
 document.body.classList.toggle("dark");
 toggle.textContent=document.body.classList.contains("dark")?"☀":"🌙";
};

// Scroll reveal
const reveals=document.querySelectorAll(".reveal,.timeline-item");
const obs=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add("show");
 });
},{threshold:.2});

reveals.forEach(r=>obs.observe(r));
