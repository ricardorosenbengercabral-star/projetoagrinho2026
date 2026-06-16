// Botão Saiba Mais
function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML =
    "A tecnologia e a sustentabilidade podem caminhar juntas para garantir um futuro melhor.";
}

// Quando a página carregar
window.addEventListener("load", function () {
    console.log("Site Agro Forte carregado com sucesso!");
});

// Quando o HTML estiver pronto
document.addEventListener("DOMContentLoaded", function () {

    // Validação do formulário
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const mensagem = document.querySelector("textarea").value;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert("Mensagem enviada com sucesso! Obrigado pela sua participação.");
        formulario.reset();
    });

    // Efeito nos cards
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseover", function () {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseout", function () {
            card.style.transform = "scale(1)";
        });

    });

});
