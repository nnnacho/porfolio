const htmlElement = document.querySelector("html");
const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", () => {
  // Alterna clase dark
  htmlElement.classList.toggle("dark");

  // Otra opción más simple
  // htmlElement.classList.remove('dark')
});
