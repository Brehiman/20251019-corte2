//Ejercicio 7: Programación Funcional

const estudiantes = [
  { nombre: "Jhon", promedio: 92 },
  { nombre: "Sara Palmer", promedio: 58 },
  { nombre: "Kat", promedio: 72 },
  { nombre: "Jorge", promedio: 83 },
];

const estudiantesConEstado = estudiantes.map(est => { //Usamos map para crear un nuevo arreglo con el estado de cada estudiante
  const estado = est.promedio >= 60 ? "Aprobado" : "Reprobado"; // usamos un operador ternario para determinar el estado
  return { ...est, estado }; // copiamos las propiedades originales + agregamos "estado"
});

console.log("Notas generales de los estudiantes: ",estudiantesConEstado);

const aprobados = estudiantesConEstado.filter(est => est.estado === "Aprobado"); //Con filter obtenemos solo los aprobados

const promedioGeneral = estudiantes.reduce((suma, est) => suma + est.promedio, 0) / estudiantes.length; //Usando reduce para calcular el promedio general

console.log("Aprobados: ", aprobados);
console.log("Promedio general del grupo: ", promedioGeneral);