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

//calculadora

document.addEventListener("DOMContentLoaded", () => {

    const botaoCustos = document.getElementById("calcular-custos");

    if (!botaoCustos) return;

    botaoCustos.addEventListener("click", () => {

        const area = Number(document.getElementById("area").value);
        const semente = Number(document.getElementById("semente").value);
        const fertilizante = Number(document.getElementById("fertilizante").value);
        const defensivo = Number(document.getElementById("defensivo").value);
        const maodeobra = Number(document.getElementById("maodeobra").value);
        const outros = Number(document.getElementById("outros").value);

        const resultado = document.getElementById("resultado-custos");

        if (!area || !semente || !fertilizante || !defensivo || !maodeobra || !outros) {
            resultado.textContent = "Preencha todos os campos corretamente.";
            return;
        }

        const custoPorHa =
            semente + fertilizante + defensivo + maodeobra + outros;

        const custoTotal = custoPorHa * area;

        resultado.textContent =
            `💰 Custo total estimado: R$ ${custoTotal.toFixed(2)} (R$ ${custoPorHa.toFixed(2)}/ha)`;
    });

});

