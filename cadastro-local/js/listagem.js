const listaValores = document.querySelector('#listaValores');

//Carregar os valores salvos quando a página for carregada
carregarValoresSalvos();

//Função para exibir valores na lista
function carregarValoresSalvos() {
    //Limpar a lista antes de exibir os valores salvos
    listaValores.innerHTML = ''; 

    //Recuperar os valores do localStorage e exibi-los na lista
    for (let i = 0; i < localStorage.length; i++) {

        //Obter a chave do item no localStorage
        const chave = localStorage.key(i);

        //Obter o valor associado à chave
        const valor = localStorage.getItem(chave);

        //Verificar se a chave começa com valorSalvo_ 
        if (chave.startsWith('valorSalvo')) {
            //Criar um item de lista para cada valor salvo e adicioná-lo à lista
            const valor = localStorage.getItem(chave);

            //Criar um elemento de lista (li) para exibir o valor 
            const listItem = document.createElement('li');

            //Manda o texto para o html do item de lista
            listItem.textContent = valor;

            //Adicionar o item de lista à lista de valores
            listaValores.appendChild(listItem);

        }
    }

}


