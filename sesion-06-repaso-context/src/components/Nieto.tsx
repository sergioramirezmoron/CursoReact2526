import { useState, type FormEvent } from "react";
import { useFamily } from "../hooks/useFamily";

const Nieto = () => {
  const { setMensaje } = useFamily();
  const [form, setForm] = useState("");

  const handleChange = (texto: string) => {
    setForm(texto);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMensaje(form);
  };

  return (
    <div className="border-4 border-yellow-500 rounded-lg p-4 bg-yellow-50">
      <h1>Nieto</h1>
      <div className="flex gap-2 my-4">
        <input
          className="border-2 border-gray-300 rounded-lg px-4 py-2"
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="Texto"
        />
        <button
          className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-gray-700 transition-all"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Enviar
        </button>
        <button
          onClick={() => setMensaje("")}
          className="px-4 py-2 rounded-xl bg-orange-600 text-white hover:bg-gray-700 transition-all"
        >
          Resetear
        </button>
      </div>
    </div>
  );
};

export default Nieto;
