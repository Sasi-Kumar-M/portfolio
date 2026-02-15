// Loader
window.addEventListener("load", () => {
  setTimeout(()=>{
    document.getElementById("loader").classList.add("hide");
  },1000);
});

// Lenis
const lenis = new Lenis();
function raf(time){
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Section Animation
const sections = document.querySelectorAll("section");

function showSections(){
  const trigger = window.innerHeight * 0.8;

  sections.forEach(sec=>{
    if(sec.getBoundingClientRect().top < trigger){
      sec.classList.add("active");
    }
  });
}

window.addEventListener("scroll", showSections);
showSections();

// Progress Bar
window.addEventListener("scroll", ()=>{
  let sc = window.scrollY;
  let h = document.body.scrollHeight - window.innerHeight;
  document.getElementById("progressBar").style.width = (sc/h)*100 + "%";
});

// Modal
function openModal(file){
  document.getElementById("certModal").style.display="flex";
  document.getElementById("certFrame").src=file;
}

function closeModal(){
  document.getElementById("certModal").style.display="none";
}
