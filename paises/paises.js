const paises = [
    "Brasil",
    "Japão",
    "Canadá",
    "França",
    "Austrália",
    "Argentina",
    "Alemanha",
    "Itália"
];

function listarPaises() {
    let lista = document.getElementById("listaPaises");
    let totalElemento = document.getElementById("totalPaises");

    // Limpa a lista antes de preencher novamente para evitar duplicação
    lista.innerHTML = "";
    
    // Percorre o array utilizando o laço for
    for (let i = 0; i < paises.length; i++) {
        lista.innerHTML += "<li>" + paises[i] + "</li>";
    }

    // Desafio (Opcional): Exibe a quantidade total de países
    totalElemento.innerText = "Total de países cadastrados: " + paises.length;
}