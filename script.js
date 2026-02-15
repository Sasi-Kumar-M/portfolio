document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("themeToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Message sent successfully!");
      form.reset();
    });
  }

  const elements = document.querySelectorAll(".reveal, .timeline-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));

});
