//Ejercicio 4: Objetos y Propiedades

const Producto = { // Aqui creamos el objeto Producto
  nombre: "Laptop Lenovo",
  precio: 2500000,
  stock: 10,

  calcularDescuento: function (porcentaje) { // Aqui creamos el metodo para calcular el descuento
    const descuento = this.precio * (porcentaje / 100);
    const precioFinal = this.precio - descuento;
    return precioFinal;
  },

  verificarDisponibilidad: function (cantidad) { // Aqui creamos el metodo para verificar la disponibilidad
    return cantidad <= this.stock
      ? "Disponible"
      : "No hay suficiente stock";
  },

  mostrarInformacion: function () { // Aqui creamos el metodo para mostrar la informacion del producto
    console.log(`Producto: ${this.nombre}`);
    console.log(`Precio: $${this.precio}`);
    console.log(`Stock disponible: ${this.stock}`);
  }
};

Producto.mostrarInformacion(); // Aqui ya llamamos al metodo para mostrar la informacion y los otros metodosl
console.log("---------------------------");
console.log("Precio con 20% de descuento:", Producto.calcularDescuento(20));
console.log("Disponibilidad de 5 unidades:", Producto.verificarDisponibilidad(5));