/* Ejercicio No.1 */

/*Crear un programa que declare variables para almacenar
información de un estudiante (nombre, edad, promedio,
semestre) y muestre un mensaje personalizado según su estado
académico.*/

// Pasos para ejecutar los ejercicios://

// Se intaló una librería llamada prompt-sync para poder recibir entradas por consola ( para que me reconociera el prompt usando node), por lo tanto, para ejecutar los ejercicios, primero se debe instalar la librería con el siguiente comando en la terminal: npm install prompt-sync

//luego de instarla, para hacer la ejecución, se debe usar el comando node seguido del nombre del archivo en pacakage.json, 

//Por ejemplo: npm run 01-exercise.js


const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese el nombre del estudiante: ");
let edad = parseInt(prompt("Ingrese la edad del estudiante: "));
let promedio = parseFloat(prompt("Ingrese el promedio del estudiante: "));
let semestre = parseInt(prompt("Ingrese el semestre actual del estudiante: "));


let estado;
switch (true) {

    case (promedio >= 5.0):
        estado = "¡Felicitaciones! Desempeño sobresaliente ";
        break;

    case (promedio >= 4.5):
        estado = "Excelente desempeño académico ";
        break;

    case (promedio >= 4.0 && promedio < 4.5):
        estado = "Muy buen rendimiento académico ";
        break;

    case (promedio >= 3.0 && promedio < 4.0):
        estado = "Pasó raspando";
        break;

    case (promedio >= 2.0 && promedio < 3.0):
        estado = "Debe mejorar, perdió";
        break;

    default:
        estado = "Reprobado ";
}

console.log("")
console.log ("Nombre: " + nombre);
console.log ("Edad: " + edad +" años");
console.log ("Semestre: " + semestre);
console.log ("Promedio: " + promedio);
console.log ("Estado académico: "+ estado);

