document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("themeToggle");

  toggle.onclick = () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  };

  document.getElementById("contactForm").onsubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

});
