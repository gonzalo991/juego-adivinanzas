let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    // Si el numero generado esta incluido en la lista
    if (listaNumerosSecretos.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya sorteamos todos los numeros!");
    } else {
        if (listaNumerosSecretos.includes(numeroSecreto)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSecretos.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `¡Has acertado el número secreto! En ${intentos} ${(intentos == 1) ? "intento." : "intentos."}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "¡El número secreto menor!");
        } else {
            asignarTextoElemento("p", "¡El número secreto mayor!");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del Número Secreto");
    asignarTextoElemento("p", "Indica un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    document.getElementById("valorUsuario").value = "";
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Reiniciar el número de intentos
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();