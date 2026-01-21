import { useState, type FormEvent } from "react";

interface BuscarPlatoProps {
  busqueda: string;
  setBusqueda: (busqueda: string) => void;
}

const BuscarPlato = ({ busqueda, setBusqueda }: BuscarPlatoProps) => {
  const [search, setSearch] = useState(busqueda);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setBusqueda(search);
  };

  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm shadow-sm transition-all duration-200"
          placeholder="Buscar por nombre o ingrediente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none bg-amber-200 px-3 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-200"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default BuscarPlato;
