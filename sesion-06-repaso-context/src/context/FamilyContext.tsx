import { createContext, useState, type ReactNode } from "react";
import type { FamilyContextType, FamilyState } from "../types";

// 1. Crear el contexto con un hook personalizado que se llama createContext
const FamilyContext = createContext<FamilyContextType | null>(null); // --> Recomendado siempre empiece en null

// 2. Asignar estado inicial del contexto
const estadoInicial: FamilyState = {
  mensaje: "Hola desde el contexto de la familia",
  contador: 0,
};

// 3. Crear el provider (Aquello que envuelve al componente que quiero aplicarle el contexto)
export const FamilyProvider = ({ children }: { children: ReactNode }) => {
  // Hooks
  const [estado, setEstado] = useState<FamilyState>(estadoInicial);

  // Funciones, para cambiar los elementos del contexto, etc...
  const setMensaje = (nuevoMensaje: string) => {
    setEstado((prev) => ({
      ...prev,
      mensaje: nuevoMensaje,
    }));
  };

  const incrementarContador = () => {
    setEstado((prev) => ({
      ...prev,
      contador: prev.contador++,
    }));
  };
  const decrementarContador = () => {
    setEstado((prev) => ({
      ...prev,
      contador: prev.contador--,
    }));
  };

  const value = {
    ...estado,
    setMensaje,
    incrementarContador,
    decrementarContador,
  };

  return <FamilyContext value={value}>{children}</FamilyContext>;
};

// 4. Exportar el contexto
export { FamilyContext }; // Si no queremos poner export, ponemos export default FamilyContext
