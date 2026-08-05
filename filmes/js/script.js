const form = document.getElementById("filme-form");
const nomeInput = document.getElementById("nome");
const personagemInput = document.getElementById("personagem");
const imagemInput = document.getElementById("imagem");
const filmesContainer = document.getElementById("filmes-container");

// 2. Evento ao enviar o formulário
form.addEventListener("submit", function(event) {
    event.preventDefault(); 


    const card = document.createElement("div");
    card.className = "filme-card";

    card.innerHTML = `
        <img src="${imagemInput.value}" alt="${nomeInput.value}">
        <div class="filme-info">
            <h3>${nomeInput.value}</h3>
            <p><strong>Personagem:</strong> ${personagemInput.value}</p>
        </div>
        <button class="btn-deletar">Deletar</button>
    `;

    const btnDeletar = card.querySelector(".btn-deletar");
    btnDeletar.addEventListener("click", function() {
        card.remove();
    });

    filmesContainer.appendChild(card);
    
    form.reset();
});