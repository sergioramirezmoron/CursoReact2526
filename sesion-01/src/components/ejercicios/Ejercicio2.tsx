/* import React, { useState } from "react";

interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

type Estado = "pendiente" | "aprobado" | "rechazado";

const Ejercicio2 = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null); // Se le puede pasar o null o un objeto. (Luego se le pasa un objeto tipo Usuario)

  const [productos, setProductos] = useState<Producto | null>(null); // Cuando lo vaya a renderizar podre gestionar con el null si hay o no productos

  const [estado, setEstado] = useState<Estado>("pendiente");

  // MODO DIOS
  // Voy a crear un type llamado CamposUsuario que tenga como posibles valores las claves de la interfaz Usuario.
  type CamposUsuario = keyof Usuario;

  if (productos == null) {
    return <p>Cargando los datos...</p>;
  } else {
    <h1>{productos.nombre}</h1>;
  }

  // setEstado("No me gusta"); No sirve porque tenemos el type, solo sirve lo que tenga asignado el type.

  let campo: CamposUsuario = "nombre";

  return <div>Ejercicio2</div>;
};

export default Ejercicio2; */
