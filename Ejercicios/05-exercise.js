//Ejercicio 5: Programación Estructurada - Condicionales

// Importar prompt-sync para leer desde consola usando node
const prompt = require("prompt-sync")();

let puntuacion = Number(prompt("Ingrese la puntuación (0 - 100): "));

let letra;

if (isNaN(puntuacion) || puntuacion < 0 || puntuacion > 100) { //Aqui validamos que la puntuacion este entre 0 y 100
  console.log("Error: La puntuación debe ser un número entre 0 y 100."); //Si no es asi mostramos un mensaje de error
} else {
  if (puntuacion >= 90) { //Aqui asignamos la calificacion segun la puntuacion
    letra = "A";
  } else if (puntuacion >= 80) {
    letra = "B";
  } else if (puntuacion >= 70) {
    letra = "C";
  } else if (puntuacion >= 60) {
    letra = "D";
  } else {
    letra = "F";
  }

  let resultado = puntuacion >= 60 ? "Aprobado" : "Reprobado"; //Aqui usamos un operador ternario para determinar si el estudiante aprobo o reprobo

  console.log(`Calificación: ${letra}`);
  console.log(`Resultado final: ${resultado}`);
}
