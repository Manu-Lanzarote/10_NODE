// 9.	Crea un módulo propio con una función. La función esPar() devuelve “true” en caso de que el número sea par y “false” en caso contrario. En el archivo index.js, genera un número aleatorio, llama a la función esPar() y muestra el resultado de la función.

let aleatorio = Math.floor(Math.random() * 10) + 1;
console.log(aleatorio);
let parImpar = require("./par");

let resultado = parImpar(aleatorio);
console.log(resultado);

// MacBook-Air-de-manu:ejercicio9 Manu$ node index.js
// 8
// Número par
