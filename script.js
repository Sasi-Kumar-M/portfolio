// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 800);
});

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight - 80;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Smooth Scroll (SAFE check)
if (typeof Lenis !== "undefined") {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// Progress Bar
window.addEventListener("scroll", () => {
  const sc = window.scrollY;
  const h = document.body.scrollHeight - window.innerHeight;
  document.getElementById("progressBar").style.width = (sc / h) * 100 + "%";
});

// Certificate Modal
function openModal(file) {
  document.getElementById("certModal").style.display = "flex";
  document.getElementById("certFrame").src = file;
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}
