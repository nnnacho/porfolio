if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
let toggleDarkMode = document.documentElement.className.indexOf("dark");
const changeDarkMode = () => {
  toggleDarkMode = document.documentElement.classList.toggle("dark");
  toggleDarkMode
    ? (localStorage.theme = "dark")
    : (localStorage.theme = "light");
};

const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", () => {
  changeDarkMode();
});
