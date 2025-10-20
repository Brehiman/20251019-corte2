
const prompt = require('prompt-sync')();

let puntaje = parseInt(prompt("Escribe tu puntuación (0 a 100):"));

let letra = "";
let estado = "";

if (puntaje >= 90) {
  letra = "A";
  estado = "Aprobado";
} else if (puntaje >= 80) {
  letra = "B";
  estado = "Aprobado";
} else if (puntaje >= 70) {
  letra = "C";
  estado = "Aprobado";
} else if (puntaje >= 60) {
  letra = "D";
  estado = "Reprobado";
} else {
  letra = "F";
  estado = "Reprobado";
}

console.log("Tu calificación es: " + letra);
console.log("Estado: " + estado);
