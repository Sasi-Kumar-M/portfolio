// Typing animation for name
const nameText = "Sasi Kumar M";
const typedEl = document.getElementById("typedName");

if (typedEl) {
  let i = 0;
  typedEl.style.opacity = 0;

  function typeName() {
    if (i === 0) typedEl.style.opacity = 1;
    if (i < nameText.length) {
      typedEl.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeName, 100); // typing speed
    }
  }

  // small delay for nicer entrance
  setTimeout(typeName, 300);
}
