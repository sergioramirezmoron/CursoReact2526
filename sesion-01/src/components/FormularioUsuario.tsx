import { useState } from "react";

// Crear un formulario llamado FormularioUsuario que gestione nombre, edad y email de los usuarios, que tenga de formulario nombre, edad y email
interface UsuarioProps {
  nombre: string;
  edad: number;
  email: string;
}

const FormularioUsuario = () => {
  const [usuario, setUsuario] = useState<UsuarioProps>({
    nombre: "",
    edad: 0,
    email: "",
  });

  const handleActualizarCampo = (
    campo: keyof UsuarioProps,
    valor: string | number
  ) => {
    setUsuario({
      ...usuario,
      [campo]: valor,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("usuario", JSON.stringify(usuario));
  };

  return (
    // Formulario de datos
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h3 className="text-xl font-bold mb-4">Registro</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nombre</label>
          <input
            type="text"
            value={usuario.nombre}
            onChange={(e) => handleActualizarCampo("nombre", e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Edad</label>
          <input
            type="number"
            value={usuario.edad}
            onChange={(e) =>
              handleActualizarCampo("edad", e.target.value === "" ? "" : Number(e.target.value))
            }
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">E-Mail</label>
          <input
            type="email"
            value={usuario.email}
            onChange={(e) => handleActualizarCampo("email", e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-900 font-semibold"
        >
          Registrarse
        </button>
        <div className="mt-6 mb-6 p-4 bg-grey-100 rounded">
          <h4 className="font-semibold mb-2">Datos actuales:</h4>
          <pre className="text-sm">{JSON.stringify(usuario)}</pre>
        </div>
      </form>
    </div>
  );
};

export default FormularioUsuario;

