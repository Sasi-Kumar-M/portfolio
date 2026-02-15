document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     1. DARK MODE TOGGLE
  ========================== */

  const toggle = document.getElementById("themeToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      // Change icon
      toggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  /* =========================
     2. CONTACT FORM
  ========================== */

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic validation
      if (name.length < 2) {
        alert("Please enter a valid name");
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
      }

      if (phone.length < 8) {
        alert("Please enter a valid phone number");
        return;
      }

      if (message.length < 5) {
        alert("Please enter a message");
        return;
      }

      // Success
      alert("✅ Message sent successfully!");
      form.reset();
    });
  }

  /* =========================
     3. SCROLL REVEAL ANIMATION
  ========================== */

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
