const botoes = document.querySelectorAll(".item");

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener('click', clicar)
}

function clicar(){
    console.log("CLICOU")
}



