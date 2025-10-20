
/* Ejercicio No.2 */


const prompt = require('prompt-sync')();

function calcularArea(figura) {
  figura = figura.toLowerCase(); // Para evitar problemas con mayúsculas (si el usuario ingresa Circulo en lugar de circulo)

  if (figura === "triangulo") {
    let base = parseFloat(prompt("Ingrese la base: "));
    let altura = parseFloat(prompt("Ingrese la altura: "));
    let operacion = (base * altura) / 2;
    
    return operacion;

  } 
  else if (figura === "rectangulo") {
    let base = parseFloat(prompt("Ingrese la base: "));
    let altura = parseFloat(prompt("Ingrese la altura: "));
    let operacion = base * altura;

    return operacion;

  } 
 
  else if (figura === "circulo") {
    let PI = 3.14;
    let radio = parseFloat(prompt("Ingrese el radio: "));
    let operacion = PI * (radio ** 2);

    return operacion;

  } 
  else {
    return "La figura ingresada no es válida.";
  }
}

let figura = prompt("Ingrese la figura que desea (triangulo, rectangulo, circulo):  ");
let resultado = calcularArea(figura);

// Fixed me permite elejir cuántos decimales me aparecerán en el resultado//
resultado = resultado.toFixed(2);

console.log("El área del " + figura + " es:  " + resultado + " cm");
