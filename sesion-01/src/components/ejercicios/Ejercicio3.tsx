import { useState } from "react";
// Uso de formularios con TypeScript

interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

const Ejercicio3 = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    edad: 0,
    email: "",
  });

  const actualizarCampo = (campo: keyof Usuario, valor: string | number) => {
    setUsuario({
      ...usuario,
      [campo]: valor,
    });
  };

  return (
    <>
      <div>Ejercicio3</div>
      <label>Introduce tu nombre</label>
      <input
        value={usuario.nombre}
        onChange={(e) => actualizarCampo("nombre", e.target.value)}
      />
      <label>Introduce tu edad</label>
      <input
        value={usuario.edad}
        onChange={(e) => actualizarCampo("edad", Number(e.target.value))}
      />
      <label>Introduce tu E-Mail</label>
      <input
        value={usuario.email}
        onChange={(e) => actualizarCampo("email", e.target.value)}
      />
    </>
  );
};

export default Ejercicio3;

// Crear un componente Header estilado con typescript donde aparezcan vuestros datos