//Definir variáveis para o campo de entrada e o botão de salvar
const campo = document.querySelector('#campo');
const salvarBtn = document.querySelector('#salvar');

//Adicionar evento de clique ao botão de salvar
salvarBtn.addEventListener('click', function(event) {
    //Prevenir o comportamento padrão do formulário
    event.preventDefault(); 

    //Obter o valor digitado no campo de entrada
   const valor = campo.value;
   //Mostrar o valor no console
   console.log('Valor digitado:', valor);

   //Verificar se o campo está vazio ou contém apenas espaços em branco
    if (!valor.trim()) {
        alert("Campo vazio, digite algo para salvar");
    }

    //Gerar uma chave única para armazenar o valor no localStorage
    const chave = `valorSalvo_${Date.now()}`;

    //Salvar o valor no localStorage usando a chave gerada
    localStorage.setItem(chave, valor);
    
    //Limpar o campo de entrada após salvar
   campo.value = '';

   //Exibir os valores salvos
   carregarValoresSalvos();
});
