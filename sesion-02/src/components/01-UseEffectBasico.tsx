import { useEffect, useState } from "react";

const UseEffectBasico = () => {
  // Hooks
  const [isTabActive, setIsTabActive] = useState(true);

  // Efectos
  useEffect(() => {
    /* const active = document.visibilityState === "visible";
    setIsTabActive(active);

    document.title = active ? "React 19" : "Payo"; */
  }, []);

  // Funciones

  // Return
  return (
    <div
      className={`p-8 rounded-3xl transition-all duration-300 border-2
    ${
      isTabActive
        ? "bg-white border-sky-500 shadow-md"
        : "bg-slate-50 border-slate-600 opacity-60"
    }`}
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        {isTabActive ? "🟢 Activa" : "🔴 Inactiva"}
      </h2>
    </div>
  );
};

export default UseEffectBasico;
