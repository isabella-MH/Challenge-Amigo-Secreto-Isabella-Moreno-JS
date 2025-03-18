// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Paso 1: Crear un array para almacenar los nombres
let amigos = [];

// Paso 2: Implementa una función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

// Paso 3: Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Paso 4: Implementa una función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
