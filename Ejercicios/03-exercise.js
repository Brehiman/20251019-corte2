/* Ejercicio No.3*/

let numeros = [12, 5, 8, 21, 4, 15, 9, 30];


let mayor = numeros[0];     
let menor = numeros[0];     
let suma = 0;              
let pares = [];             

for (let i = 0; i < numeros.length; i++) {
  let num = numeros[i];

  if (num > mayor) mayor = num;
  if (num < menor) menor = num;

  suma += num;

  if (num % 2 === 0) pares.push(num);
}


let promedio = suma / numeros.length;

numeros.sort(function(a, b) {
  return a - b;
});

console.log("Mayor:", mayor);
console.log("Menor:", menor);
console.log("Promedio:", promedio.toFixed(2));
console.log("Pares:", pares);
console.log("Ordenados:", numeros);
 