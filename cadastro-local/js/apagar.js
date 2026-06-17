const apagarBtn = document.querySelector('#apagar');

//Adicionar evento de clique ao botão de apagar
apagarBtn.addEventListener('click', function(event) {
    
//Limpar todos os valores salvos no localStorage
localStorage.clear(); 

//Limpar a lista de valores exibida na página
listaValores.innerHTML = ''; 
});

