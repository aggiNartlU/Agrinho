const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Carrega o tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.className = savedTheme;

    if (savedTheme === "dark-theme") {
        toggleButton.textContent = "☀️ Tema Claro";
    }
}

// Alterna entre tema claro e escuro
toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
        body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark-theme");
        toggleButton.textContent = "☀️ Tema Claro";
    } else {
        body.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light-theme");
        toggleButton.textContent = "🌙 Tema Escuro";
    }
});