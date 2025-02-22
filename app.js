// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arregloaAmigos = [];
let sorteosMaximos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    arregloaAmigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";
    actualizarLista();
  }
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (
    let numeroAmigos = 0;
    numeroAmigos < arregloaAmigos.length;
    numeroAmigos++
  ) {
    lista.innerHTML += `<li>${arregloaAmigos[numeroAmigos]}</li>`;
  }
}

function sortearAmigo() {
  if (arregloaAmigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  let amigoAleatorio = Math.floor(Math.random() * arregloaAmigos.length);
  let amigoSorteado = arregloaAmigos[amigoAleatorio];
  let amigoSecreto = document.getElementById("resultado");

  if (sorteosMaximos.length === arregloaAmigos.length) {
    alert("Se han sorteado todos los amigos");
  } else if (sorteosMaximos.includes(amigoSorteado)) {
    return sortearAmigo();
  } else {
    amigoSecreto.innerHTML = `<li>Amigo secreto: ${amigoSorteado}</li>`;
    sorteosMaximos.push(amigoSorteado);
  }
}