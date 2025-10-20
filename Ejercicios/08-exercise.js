//Ejercicio No.8 //

const prompt = require("prompt-sync")();

console.log("¡Bienvenido a nuestra calculadora ! ")
console.log("Por favor, siga lasa indicaciones")

console.log("")
const num1 = parseFloat(prompt("Ingresa el primer número: "));
const num2 = parseFloat(prompt("Ingresa el segundo número: "));

console.log("\n--- CALCULADORA BÁSICA ---");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");
console.log("5. Módulo");
console.log("6. Promedio");
console.log("7. Comparar números");

const opcion = parseInt(prompt("Elige una opción (1-7): "));

switch (opcion) {
  case 1:
    console.log(`La suma de ${num1} + ${num2} = ${num1 + num2}`);
    break;

  case 2:
    console.log(`La resta de ${num1} - ${num2} = ${num1 - num2}`);
    break;

  case 3:
    console.log(`La multiplicación de ${num1} * ${num2} = ${num1 * num2}`);
    break;

  case 4:
    if (num2 !== 0) {
      console.log(`La división de ${num1} / ${num2} = ${num1 / num2}`);
    } 
    else {
      console.log("Error: No se puede dividir por cero");
    }
    break;

  case 5:
    if (num2 !== 0) {
      console.log(`El módulo de ${num1} % ${num2} = ${num1 % num2}`);
    } 
    else {
      console.log("Error: No se puede calcular el módulo con divisor cero");
    }
    break;

  case 6:
    const promedio = (num1 + num2) / 2;
    console.log(`El promedio de ${num1} y ${num2} es ${promedio}`);
    break;

  case 7:
    if (num1 > num2) {
      console.log(`${num1} es mayor que ${num2}`);
    } 
    else if (num1 < num2) {
      console.log(`${num2} es mayor que ${num1}`);
    } 
    else {
      console.log("Ambos números son iguales");
    }
    break;

  default:
    console.log("Opción no válida. Por favor elige un número del 1 al 7.");
    break;
}
