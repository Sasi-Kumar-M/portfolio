// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 1200);
});

// Lenis Smooth Scroll
const lenis = new Lenis();

function raf(time){
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Section Activation
const sections = document.querySelectorAll("section");

function activateSections(){
  const trigger = window.innerHeight * 0.75;

  sections.forEach(section=>{
    const top = section.getBoundingClientRect().top;
    if(top < trigger){
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateSections);
window.addEventListener("load", activateSections);

// Progress Bar
window.addEventListener("scroll", ()=>{
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / height) * 100;

  document.getElementById("progressBar").style.width = progress + "%";
});

// Parallax
window.addEventListener("scroll", ()=>{
  const scrolled = window.scrollY;

  document.querySelectorAll(".parallax").forEach(el=>{
    const speed = el.dataset.speed || 0.2;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Magnetic Button Effect
document.querySelectorAll(".btn").forEach(btn=>{
  btn.addEventListener("mousemove",(e)=>{
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    btn.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
  });

  btn.addEventListener("mouseleave", ()=>{
    btn.style.transform = "translate(0,0)";
  });
});
