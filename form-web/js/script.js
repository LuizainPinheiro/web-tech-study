/* 
    Criando variáves
*/
const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");

/* 
    Criando função
*/
button.addEventListener("click", (event) => {
   event.preventDefault();
   const inputValue = nome.value;
   const emailValue = email.value;
   const telefoneValue = telefone.value

   const templateHTML = `<li><h2 class="nome-js">${inputValue}</h2> <p class="contato-js">${emailValue}, ${telefoneValue}</p></li>`;

// Incluir itens no HTML
lista.innerHTML += templateHTML;

});