import { useState } from "react";
import Boton from "./Boton";

interface Credenciales {
  email: string;
  password: string;
}

const FormularioLogin = () => {
  const [credenciales, setCredenciales] = useState<Credenciales>({
    email: "",
    password: "",
  });
  const [errores, setErrores] = useState({ tipo: "", mensaje: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validarFormulario = () => {
    if (!credenciales.email.trim() || !credenciales.password.trim()) {
      setErrores({
        tipo: "error",
        mensaje: "Los campos no pueden estar vacíos",
      });
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(credenciales.email)) {
      setErrores({ tipo: "error", mensaje: "E-Mail con formato incorrecto" });
      return false;
    }

    if (credenciales.password.length < 8) {
      setErrores({
        tipo: "error",
        mensaje: "La contraseña debe tener al menos 8 caracteres",
      });
      return false;
    }

    setErrores({
      tipo: "success",
      mensaje: "Correcto!",
    });
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validarFormulario();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-amber-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      {errores.mensaje && (
        <div
          className={`border p-2 mb-4 ${
            errores.tipo === "error"
              ? "text-red-600 border-red-600 bg-red-50"
              : "text-green-600 border-green-600 bg-green-50"
          }`}
        >
          <p className="text-sm font-bold">{errores.mensaje}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">E-Mail</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-4"
            type="email"
            placeholder="Ej: correo@correo.com"
            required
            value={credenciales.email}
            onChange={(e) => {
              setCredenciales({ ...credenciales, email: e.target.value });
              setErrores({ tipo: "", mensaje: "" });
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Contraseña</label>
          <div className="flex gap-2">
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-4"
              type={showPassword ? "text" : "password"}
              placeholder="Introduzca su contraseña"
              required
              value={credenciales.password}
              onChange={(e) => {
                setCredenciales({ ...credenciales, password: e.target.value });
                setErrores({ tipo: "", mensaje: "" });
              }}
            />
            <Boton
              text={showPassword ? "Ocultar" : "Mostrar"}
              tipo="secondary"
              onClick={() => setShowPassword(!showPassword)}
              submit={false}
            />
          </div>
        </div>
        <div>
          <Boton
            text="Enviar"
            tipo="primary"
            submit={true}
            onClick={() => handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default FormularioLogin;
