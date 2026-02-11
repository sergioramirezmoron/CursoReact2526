import { useFamily } from "../hooks/useFamily";
import Nieto from "./Nieto";

const Hijo = () => {
  const { incrementarContador, decrementarContador } = useFamily();
  return (
    <div className="border-4 border-orange-500 rounded-lg p-4 bg-orange-50">
      <h1>Hijo</h1>
      <div className="mt-4 border-4 border-orange-200">
        <div className="flex gap-2 my-3 pt-5">
          <button
            onClick={incrementarContador}
            className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-gray-700 transition-all"
          >
            +
          </button>
          <button
            onClick={decrementarContador}
            className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-gray-700 transition-all"
          >
            -
          </button>
        </div>
        <Nieto />
      </div>
    </div>
  );
};

export default Hijo;
