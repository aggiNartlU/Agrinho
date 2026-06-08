const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Carregar tema salvo
const temaSalvo = localStorage.getItem("theme");

if (temaSalvo) {

    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(temaSalvo);

    toggleButton.textContent =
        temaSalvo === "dark-theme"
        ? "☀️ Tema Claro"
        : "🌙 Tema Escuro";
}

// Alternar tema

toggleButton.addEventListener("click", () => {

    if (body.classList.contains("light-theme")) {

        body.classList.replace(
            "light-theme",
            "dark-theme"
        );

        localStorage.setItem(
            "theme",
            "dark-theme"
        );

        toggleButton.textContent =
            "☀️ Tema Claro";

    } else {

        body.classList.replace(
            "dark-theme",
            "light-theme"
        );

        localStorage.setItem(
            "theme",
            "light-theme"
        );

        toggleButton.textContent =
            "🌙 Tema Escuro";
    }

});


