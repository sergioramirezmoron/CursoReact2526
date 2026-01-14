// Usar LocalStorage
// 1.Ejercicio
// Crear un componente que gestione una lista de contactos, el usuario debe de poder agregar y eliminar contactos, para ello los requisitos son:
// 1. Crear una interfaz llamada Contacto con el id, nombre, telefono e email.
// 2. El componente debe de tener un formulario con 3 inputs, nombre, telefono e email. Un botón para agregar el contacto, una lista que muestre todos los contactos, un botón para eliminar un contacto.
// 3. Las funcionalidades deben de ser:
// - Agregar nuevo contacto (Generar un id automatico con alguna libreria npm)
// - Eliminar un contacto por su id.
// - Limpiar el formulario después de agregar.
// - Mostrar un mensaje si no hay contactos almacenados.

import { CustomIdx } from "npm-shortidx";
import { useState } from "react";

interface Contacto {
  id: number;
  nombre: string;
  telefono: number;
  email: string;
}

const EjercicioDeberes1 = () => {
  const estadoInicial: Contacto = {
    id: 0,
    nombre: "",
    telefono: 0,
    email: "",
  };

  const [contacto, setContacto] = useState<Contacto>(estadoInicial);

  const [listaContactos, setListaContactos] = useState<Contacto[]>(() => {
    const guardado = localStorage.getItem("contactos");
    return guardado ? JSON.parse(guardado) : [];
  });

  const handleActualizarCampo = (
    campo: keyof Contacto,
    valor: string | number
  ) => {
    setContacto({
      ...contacto,
      [campo]: valor,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nuevoContacto = {
      ...contacto,
      id: parseInt(CustomIdx("0123456789"), 10),
    };

    const nuevaLista = [...listaContactos, nuevoContacto];

    setListaContactos(nuevaLista);
    localStorage.setItem("contactos", JSON.stringify(nuevaLista));
    setContacto(estadoInicial);
  };

  const handleRemoveLS = (id: number) => {
    const nuevaLista = listaContactos.filter((contacto) => contacto.id !== id);
    setListaContactos(nuevaLista);
    localStorage.setItem("contactos", JSON.stringify(nuevaLista));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nombre</label>
            <input
              className="border border-gray-300 p-2 rounded w-full bg-amber-100"
              type="text"
              name="nombre"
              value={contacto.nombre}
              onChange={(e) => handleActualizarCampo("nombre", e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Teléfono</label>
            <input
              className="border border-gray-300 p-2 rounded w-full bg-amber-100"
              type="tel"
              name="telefono"
              value={contacto.telefono}
              onChange={(e) =>
                handleActualizarCampo("telefono", e.target.value)
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">E-Mail</label>
            <input
              className="border border-gray-300 p-2 rounded w-full bg-amber-100"
              type="email"
              name="email"
              value={contacto.email}
              onChange={(e) => handleActualizarCampo("email", e.target.value)}
              required
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Agregar Contacto
          </button>
        </form>
      </div>
      <h1 className="text-3xl mt-4">Lista de Contactos</h1>
      <ul className="list-disc pl-5 mt-2">
        {listaContactos.length === 0 ? (
          <li className="mb-2">No hay contactos almacenados.</li>
        ) : (
          listaContactos.map((contacto) => (
            <li key={contacto.id} className="mb-2">
              {contacto.nombre} - {contacto.telefono} - {contacto.email}
              <button
                onClick={() => handleRemoveLS(contacto.id)}
                className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Eliminar
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default EjercicioDeberes1;
