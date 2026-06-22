//Variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");
const inputNome = document.getElementById("nome");

function resultadoNotaClick(event){
    event.preventDefault();
    const inputNotaValue = inputNota.value;
    const inputNomeValue = inputNome.value;
    //Validacao
    if (inputNotaValue == ""){
        message.style.display = "block"
        return false;
    }

      //Validacao
    if (inputNomeValue == ""){
        message.style.display = "block"
        return false;
    }

    //Logica
    if (inputNotaValue >=6){
        resultado.innerHTML = `O aluno(a) ${inputNomeValue}  foi aprovado(a)`
       
    } else {
        resultado.innerHTML = `O aluno(a) ${inputNomeValue} foi reprovado(a)`
    }

}