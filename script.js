document.addEventListener("DOMContentLoaded", function () {

  // Dark mode
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.onclick = () => {
      document.body.classList.toggle("dark");
    };
  }

  // Scroll animations
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach(r => {
      const top = r.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        r.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

});
