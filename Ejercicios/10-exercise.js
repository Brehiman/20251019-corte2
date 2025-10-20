//Ejercicio 10: Integración de Conceptos - Sistema de Gestión

class Libro {
  constructor(id, titulo, autor, categoria, disponible = true) { //Aqui definimos la clase Libro con sus propiedades
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.disponible = disponible;
  }
}

class Usuario {
  constructor(id, nombre) { //Definimos la clase Usuario con sus propiedades
    this.id = id;
    this.nombre = nombre;
  }
}

class Prestamo { //Definimos la clase Prestamo con sus propiedades
  constructor(libro, usuario, fechaPrestamo, fechaDevolucion = null) { //Usamos una estructura condicional para verificar si el libro está disponible
    if (!libro.disponible) throw new Error(`El libro "${libro.titulo}" no está disponible.`); //Lanzamos un error si el libro no está disponible
    this.libro = libro;
    this.usuario = usuario;
    this.fechaPrestamo = fechaPrestamo;
    this.fechaDevolucion = fechaDevolucion;
    libro.disponible = false;
  }

  devolverLibro() { //Se define el método devolverLibro para actualizar el estado del libro y la fecha de devolución
    this.libro.disponible = true; //Marcamos el libro como disponible
    this.fechaDevolucion = new Date(); //Asignamos la fecha actual como fecha de devolución
  }
}

const libros = [
  new Libro(1, "Halo: The Fall of Reach", "Eric Nylund", "Ciencia Ficción"), //Creamos un arreglo de libros usando la clase Libro
  new Libro(2, "El Señor de los Anillos", "J.R.R. Tolkien", "Fantasía"),
  new Libro(3, "One Punch Man", "ONE", "Manga"),
  new Libro(4, "Naruto", "Masashi Kishimoto", "Manga"),
  new Libro(5, "Sandman", "Neil Gaiman", "Cómic"),
  new Libro(6, "Dune", "Frank Herbert", "Ciencia Ficción"),
  new Libro(7, "Harry Potter", "J.K. Rowling", "Fantasía"),
  new Libro(8, "Watchmen", "Alan Moore", "Cómic"),
];

const usuarios = [
  new Usuario(1, "Alejandro Melchor"), //Creamos un arreglo de usuarios usando la clase Usuario
  new Usuario(2, "Juliana Lugo"),
];

const prestamos = []; //Arreglo para almacenar los préstamos

function buscarPorTitulo(titulo) { //Se define la función buscarPorTitulo para buscar libros por título
  const resultado = libros.filter(l => l.titulo.toLowerCase().includes(titulo.toLowerCase())); //Usamos filter para buscar libros que coincidan con el título usando toLowerCase para ignorar mayúsculas/minúsculas para que la búsqueda sea más flexible
  if (resultado.length === 0) throw new Error("No se encontraron libros con ese título."); //Lanzamos un error si no se encuentran libros, al usar una estructura condicional con throw new Error nos permite manejar errores de manera efectiva
  return resultado;
}

function buscarPorAutor(autor) { //Se define la función buscarPorAutor para buscar libros por autor
  const resultado = libros.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase())); //Usamos filter para buscar libros que coincidan con el autor
  if (resultado.length === 0) throw new Error("No se encontraron libros de ese autor."); //Lanzamos un error si no se encuentran libros de ese autor, usando una estructura condicional con throw new Error
  return resultado;
}

function buscarPorCategoria(categoria) { //se define la función buscarPorCategoria para buscar libros por categoría
  const resultado = libros.filter(l => l.categoria.toLowerCase() === categoria.toLowerCase()); //Usamos filter para buscar libros que coincidan con la categoría
  if (resultado.length === 0) throw new Error("No hay libros en esa categoría."); //Lanzamos un error si no se encuentran libros en esa categoría, usando una estructura condicional con throw new Error
  return resultado;
}

function prestarLibro(idLibro, idUsuario) { //Se define la función prestarLibro para prestar un libro a un usuario
  const libro = libros.find(l => l.id === idLibro); //Usamos find para buscar el libro por su ID usando una arrow function para una sintaxis más concisa
  const usuario = usuarios.find(u => u.id === idUsuario); //Usamos find para buscar el usuario por su ID y también usamos arrow function
  if (!libro) throw new Error("Libro no encontrado."); //Lanzamos un error si no se encuentra el libro
  if (!usuario) throw new Error("Usuario no encontrado."); //Se lanza un error si no se encuentra
  const prestamo = new Prestamo(libro, usuario, new Date()); // Indicamos la fecha de prestamo
  prestamos.push(prestamo);
  console.log(`Libro "${libro.titulo}" prestado a ${usuario.nombre}`);
}

function devolverLibro(idLibro) { //Se define la funcion devolverLibro
  const prestamo = prestamos.find(p => p.libro.id === idLibro && !p.fechaDevolucion); //Se usa find para buscar el libro
  if (!prestamo) throw new Error("No se encontró un préstamo activo para ese libro."); //Mostramos un error si no lo encuentra
  prestamo.devolverLibro();
  console.log(`Libro "${prestamo.libro.titulo}" devuelto correctamente.`);
}

function generarReporte() {
  const totalLibros = libros.length; //Cuento cuántos libros hay en total
  const prestados = libros.filter(l => !l.disponible).length; //Se filtra los que no están disponibles (prestados)
  const disponibles = totalLibros - prestados; //resto para saber cuántos sí están disponibles

  const prestamosPorUsuario = prestamos.reduce((acc, p) => { //uso reduce para contar préstamos por usuario
    acc[p.usuario.nombre] = (acc[p.usuario.nombre] || 0) + 1; //sumo 1 cada vez que un usuario tiene un préstamo
    return acc; //retorno el acumulador con los conteos
  }, {}); //empiezo con un objeto vacío

  const categoriasInteres = ["fantasía", "ciencia ficción", "cómic", "manga"]; //defino las categorías que quiero destacar
  const librosEspeciales = libros.filter(l => //filtro los libros que pertenezcan a esas categorías
    categoriasInteres.includes(l.categoria.toLowerCase()) //paso la categoría a minúscula para comparar bien
  );

  console.log("\nReporte de Biblioteca:"); //Al usar \n se hace un salto de linea para que se vea más organizado
  console.log(`Total de libros: ${totalLibros}`); //muestro el total
  console.log(`Libros disponibles: ${disponibles}`); //Muestro los disponibles
  console.log(`Libros prestados: ${prestados}`); //muestro los prestados
  console.log("Préstamos por usuario:", prestamosPorUsuario); //muestro el conteo por usuario
  console.log("\nLibros de Fantasía, Ciencia Ficción, Cómics y Mangas:"); //encabezado de la sección especial
  librosEspeciales.forEach(l => console.log(`- ${l.titulo} (${l.categoria})`)); //muestro los títulos especiales
}

try {
  prestarLibro(1, 1); //presto el libro con id 1 al usuario 1
  prestarLibro(3, 2); //presto el libro con id 3 al usuario 2
  devolverLibro(1); //devuelvo el libro con id 1
  console.log("\nBúsqueda por categoría 'Manga':", buscarPorCategoria("Manga")); //pruebo la búsqueda por categoría
  generarReporte(); //llamo a la función para mostrar todo el reporte
} catch (error) {
  console.error("Error:", error.message); //Si algo falla, muestro el error
}