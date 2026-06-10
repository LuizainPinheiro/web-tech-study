//Variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

function resultadoNotaClick(event){
    event.preventDefault();
    const inputNotaValue = inputNota.value;

    //Validacao
    if (inputNotaValue == ""){
        alert("Digite a nota");
        return false;
    }

    //Logica
    if (inputNotaValue >=6){
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }

}