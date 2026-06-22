let inputProduto = document.querySelector("#produto")
let btnForm = document.querySelector("#btn-form")
let lista = document.querySelector("#lista")
const btnSumir = document.querySelector("#btn-sumir")
const btnMostrar = document.querySelector("#btn-mostrar")

btnForm.addEventListener("click", (e) => {
    e.preventDefault();

    alert("Funcionou!")

    let valorLista = inputProduto.value
    console.log(valorLista)

    if(valorLista == ""){
        alert("Preencher campo!")
        return  false
    }
})

btnSumir.addEventListener("click", (e) => {
    e.preventDefault();
    inputProduto.classList.add("sumir-input")
    inputProduto.classList.remove("mostrar-input")
})

btnMostrar.addEventListener("click", (e) => {
    e.preventDefault();
    inputProduto.classList.add("mostrar-input")
    inputProduto.classList.remove("sumir-input")
})
