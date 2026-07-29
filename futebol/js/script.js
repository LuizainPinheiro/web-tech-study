const jogadores = [
    "Neymar",
    "Vini Jr",
    "Rodrigo",
    "Endrick",
    "Raphinha",
    "Casemiro",
    "Alisson",
    "Marquinhos"
];

function listarJogadores(){
    let lista = document.getElementById("listaJogadores");

    lista.innerHTML = "";
    
    for (let i = 0; i < jogadores.length; i++) {
        lista.innerHTML += "<li>" + jogadores[i] + "</li>";
    }
}