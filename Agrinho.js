const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Carrega tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.className = savedTheme;
}

toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
        body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark-theme");
    } else {
        body.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light-theme");
    }
});