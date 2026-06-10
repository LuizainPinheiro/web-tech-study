const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("resultado");

let idade = inputIdade; 

if (idade >= 18){
    console.log("Voce pode ir para a festa")
} else {
    console.log("Voce nao pode ir para a festa")
}



function resultadoidadeClick(event){
    event.preventDefaut();
    console.log(inputIdade.value)
}