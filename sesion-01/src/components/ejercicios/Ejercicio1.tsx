//1. Crear una interfaz llamada Producto que tenga Id, nombre, precio, disponible y opcionalmente categoría.
//2. Implementar una función llamada calcularTotal que reciba un array de tipo Producto, que retorne un numero,
// y que sume todos los precios de los productos disponibles.
//3. Crear un array de productos con al menos 3 productos diferentes.
//4. Probar la función.

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  categoria?: string;
}

const calcularTotal = (array: Producto[]): number => {
  return array.reduce((total, producto) => {
    if (producto.disponible) {
      return total + producto.precio;
    }
    return total;
  }, 0);
};

const productos: Producto[] = [
  { id: 1, nombre: "Producto 1", precio: 10, disponible: true },
  { id: 2, nombre: "Producto 2", precio: 20, disponible: false },
  { id: 3, nombre: "Producto 3", precio: 30, disponible: true },
];

const Ejercicio1 = () => {
  return <div>{calcularTotal(productos)}</div>;
};

export default Ejercicio1;
