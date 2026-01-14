// 2.Ejercicio
// Crear un formulario de login con validación básica, debe de tener dos campos, email y password.
// Hay que validar que los campos no estén vacíos
// Hay que validar con alguna expresión regular que el formato del email sea válido (preguntar a chatgpt)
// Hay que mostrar / ocultar la contraseña con un botoncito
// Hay que mostrar mensajes de error personalizados
// Que la contraseña tenga el mínimo de caractéres que queramos

import { useState } from "react";

interface UsuarioForm {
  email: string;
  password: string;
}

interface MensajeEstado {
  tipo: "error" | "success";
  mensaje: string;
}

const usuarios = [
  { email: "sergioramirezmoron@gmail.com", password: "12345678" },
  { email: "pepefiesta@gmail.com", password: "12345678" },
];

const EjercicioDeberes2 = () => {
  const usuarioBase = {
    email: "",
    password: "",
  };

  const [usuario, setUsuario] = useState<UsuarioForm>(usuarioBase);
  const [mensaje, setMensaje] = useState<MensajeEstado | null>(null);
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleChangeField = (campo: keyof UsuarioForm, valor: string) => {
    setUsuario({
      ...usuario,
      [campo]: valor,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje(null);

    if (!usuario.email.trim() || !usuario.password.trim()) {
      setMensaje({
        tipo: "error",
        mensaje: "Los campos no pueden estar vacíos",
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(usuario.email)) {
      setMensaje({ tipo: "error", mensaje: "E-Mail con formato incorrecto" });
      return;
    }

    if (usuario.password.length < 8) {
      setMensaje({
        tipo: "error",
        mensaje: "La contraseña debe tener al menos 8 caracteres",
      });
      return;
    }

    const exist = usuarios.find(
      (user) =>
        user.email === usuario.email && user.password === usuario.password
    );

    if (!exist) {
      setMensaje({
        tipo: "error",
        mensaje: "El usuario o contraseña no coinciden",
      });
      return;
    }

    setMensaje({ tipo: "success", mensaje: "¡¡Login Exitoso!!" });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {mensaje && (
        <div
          className={`border p-2 mb-4 ${
            mensaje.tipo === "error"
              ? "text-red-600 border-red-600 bg-red-50"
              : "text-green-600 border-green-600 bg-green-50"
          }`}
        >
          <p className="text-sm font-bold">{mensaje.mensaje}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">E-Mail</label>
          <input
            className="border border-gray-300 p-2 rounded w-full bg-amber-100"
            type="email"
            value={usuario.email}
            onChange={(e) => handleChangeField("email", e.target.value)}
          />
        </div>

        <div className="mb-6 relative">
          <label className="block text-sm font-medium mb-2">Contraseña</label>
          <div className="flex gap-2">
            <input
              className="border border-gray-300 p-2 rounded w-full bg-amber-100"
              type={mostrarPassword ? "text" : "password"}
              value={usuario.password}
              onChange={(e) => handleChangeField("password", e.target.value)}
            />

            <button
              type="button"
              onClick={() => setMostrarPassword(!mostrarPassword)}
              className="bg-gray-200 hover:bg-gray-300 rounded px-3 text-sm"
            >
              {mostrarPassword ? "Ocultar" : "Ver"}
            </button>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default EjercicioDeberes2;
