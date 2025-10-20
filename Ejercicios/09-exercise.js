//Ejercicio 9: Manejo de Arrays Complejos

const ventas = [
  { producto: "Laptop", categoria: "Tecnología", cantidad: 5, precio: 2000000 }, //Creamos un arreglo de objetos con las ventas
  { producto: "Celular", categoria: "Tecnología", cantidad: 10, precio: 800000 },
  { producto: "Camiseta", categoria: "Ropa", cantidad: 10, precio: 45000 },
  { producto: "Pantalón", categoria: "Ropa", cantidad: 6, precio: 80000 },
  { producto: "Libro", categoria: "Educación", cantidad: 4, precio: 15000 },
  { producto: "Tablet", categoria: "Tecnología", cantidad: 3, precio: 150000 },
];

const totalesPorCategoria = ventas.reduce((acumulador, venta) => { //Usamos reduce para calcular el total de ventas por categoría
  const totalVenta = venta.cantidad * venta.precio; //Calculamos el total de la venta con una operación
  if (!acumulador[venta.categoria]) { //Si la categoría no existe en el acumulador, la inicializamos en 0 usando una estructura condicional
    acumulador[venta.categoria] = 0; //Inicializamos la categoria en 0
  }
  acumulador[venta.categoria] += totalVenta; //Sumamos el total de la venta a la categoría correspondiente
  return acumulador;
}, {});

const productoMasVendido = ventas.reduce((masVendido, venta) => { //Usamos reduce para encontrar el producto más vendido y usamos arrow function para una mejor sintaxis
  return venta.cantidad > masVendido.cantidad ? venta : masVendido; //Usamos un operador ternario para comparar las cantidades vendidas
});

console.log("Totales por categoría: ", totalesPorCategoria, "pesos");
console.log("Producto más vendido: ", productoMasVendido.producto, "(", productoMasVendido.cantidad, "unidades )");
