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

   const templateHTML = `<li><h2>${inputValue}</h2> <p>${emailValue}, ${telefoneValue}</p></li>`;


// Incluir itens no HTML
lista.innerHTML += templateHTML;


});