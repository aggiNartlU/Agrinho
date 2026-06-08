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

    // CALCULADORA DE SEMENTES

const botaoCalc = document.getElementById("calcular-sementes");

botaoCalc.addEventListener("click", () => {

    const area = Number(document.getElementById("area").value);
    const linha = Number(document.getElementById("linha").value);
    const planta = Number(document.getElementById("planta").value);
    const germ = Number(document.getElementById("germinacao").value) / 100;

    const resultado = document.getElementById("resultado-sementes");

    if (!area || !linha || !planta || !germ) {
        resultado.textContent = "Preencha todos os campos corretamente.";
        return;
    }

    const areaPorPlanta = linha * planta;
    const plantas = area / areaPorPlanta;
    const sementes = plantas / germ;

    resultado.textContent =
        `Quantidade aproximada: ${Math.ceil(sementes)} sementes`;
});

