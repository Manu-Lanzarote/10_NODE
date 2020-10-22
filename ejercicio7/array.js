//Importo el número aleatorio del archivo aleatorio.js
let numAleatorio = require("./aleatorio.js");

//Creo un array vacío donde guardaré la lista de números que me genere el bucle for
const arrayDiez = [];

function resultado(numero) {
  for (let i = 1; i <= 10; i++) {
    arrayDiez.push((numero = numero + 1));
  }
}
resultado(numAleatorio);

//Exporto el array a index.js
module.exports = arrayDiez;
