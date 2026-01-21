import { use } from "react";
import type { Plato } from "../types";
import PlatoCard from "./PlatoCard";

interface PlatosListProps {
  platosPromise: Promise<Plato[]>;
  busqueda?: string;
}

const PlatosList = ({ platosPromise, busqueda }: PlatosListProps) => {
  const platos = use(platosPromise);
  const platosFiltrados = platos.filter(
    (plato) =>
      plato.nombre.toLowerCase().includes(busqueda?.toLowerCase() || "") ||
      plato.ingredientes.some((ingrediente) =>
        ingrediente.toLowerCase().includes(busqueda?.toLowerCase() || "")
      )
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {platosFiltrados.map((plato: Plato) => (
        <PlatoCard key={plato.id} plato={plato} />
      ))}
    </div>
  );
};

export default PlatosList;
