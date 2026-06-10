const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("resultado");

function resultadoIdadeClick(event){
    event.preventDefault();
    console.log(inputIdade.value)


    //Validacao
    if (inputIdade.value == ""){
        alert("Digite a idade");
        return false;
    }

    //Logica
    if (inputIdade.value >= 18){
        resultado.innerHTML = "Você pode ir na festa";
       
    } else {
        resultado.innerHTML = "Você não pode ir a festa";
    }
}