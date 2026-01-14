const nombreTS: string = "Pepe";
console.log(nombreTS);
const edadTS: number = 25;
console.log(edadTS);
const isAdminTS: boolean = false;
console.log(isAdminTS);
const nuloTS: null = null;
console.log(nuloTS);
const indefinidoTS: undefined = undefined;
console.log(indefinidoTS);

const lenguajes: string[] = ["JavaScript", "TypeScript", "Python"];
console.log(lenguajes);
const numeros: number[] = [1, 2, 3, 4, 5];
console.log(numeros);

//Array de objetos
const usuarios: { nombre: string; edad: number }[] = [
  { nombre: "Pepe", edad: 41 },
  { nombre: "Sara", edad: 32 },
  { nombre: "Jose", edad: 65 },
];
console.log(usuarios);

// Objecto simple
const persona: { nombre: string; edad: number; isAdmin: boolean } = {
  nombre: "Jose",
  edad: 24,
  isAdmin: true,
}; // ---------> Si accedemos a persona.apellidos saldra un Error property doesn't exists
console.log(persona);

// ********* Interfaces *********
// las interfaces son un 'contrato' que van a definir la forma que tiene un objeto.
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number; // ------> ? significa que puede o no puede existir (es opcional)
  activo: boolean;
}

const usuario1: Usuario = {
  id: 1,
  nombre: "juan",
  email: "juan@correo.es",
  edad: 12, // Es opcional
  activo: true,
};
console.log(usuario1);

const usuario2: Usuario = {
  id: 2,
  nombre: "paula",
  email: "paula@correo.es",
  activo: false,
};
console.log(usuario2);

function sumar(a: number, b: number): number {
  return a + b;
}
console.log(sumar(1, 2));

function saludar(nombre: string): void {
  console.log(`Bienvenido ${nombre}`);
}
console.log(saludar("Sergio"));

// Funciones con parametros opcionales.
function crearUsuario(nombre: string, edad?: number): Usuario {
  return {
    id: Date.now(),
    nombre,
    email: `${nombre.toLowerCase()}@gmail.com`,
    edad,
    activo: true,
  };
}
crearUsuario("Sergio");

// Unión Types (Posibles valores que puede tomar una variable)
//let id: string | number;
// id=true --> Explota

type Tamano = "small" | "medium" | "large";

const talla: Tamano = "medium";
console.log(talla);
// Si ponemos mal el nombre de la variable, se quejará.

// Cuando usar Type y cuando usar Interfaces
// Usar Types con primitivos y uniones.
// Usar interface con Objetos.

// Ejemplo:
//type ID = string | number;
//type Estado = "pendiente" | "completado" | "cancelado";

interface Persona {
  nombre: string;
  edad: number;
}

// Extender una interfaz
interface Empleado extends Persona {
  puesto: string;
  salario: number;
}

const empleado1: Empleado = {
  nombre: "Sergio",
  edad: 19,
  puesto: "Estudiante",
  salario: 2500,
};
console.log(empleado1);

const Recuerdo = () => {
  return <div>Recuerdo</div>;
};

export default Recuerdo;
