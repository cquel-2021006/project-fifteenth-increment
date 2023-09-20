const elementosNumero = [
    document.getElementById("number"),
    document.getElementById("number1"),
    document.getElementById("number2")
];
const limites = [12000, 5000, 7500];

function mostrarNumero(index, numero) {
    elementosNumero[index].textContent = numero;
}

function incrementarNumero(index, limite) {
    for (let i = 0; i <= limite; i++) {
        setTimeout(function () {
            mostrarNumero(index, i);
        }, 0.1 * i);
    }
}

for (let i = 0; i < elementosNumero.length; i++) {
    incrementarNumero(i, limites[i]);
}
