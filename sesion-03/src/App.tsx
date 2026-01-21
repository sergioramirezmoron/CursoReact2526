import { Suspense, useState } from "react";
import Header from "./components/Header";
import PlatosList from "./components/PlatosList";
import LoadingFallback from "./components/LoadingFallback";
import { fetchPlatos } from "./utils/api";
import BuscarPlato from "./components/BuscarPlato";

const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const [platos] = useState(() => {
    return fetchPlatos();
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />

        <main>
          <Suspense
            fallback={
              <LoadingFallback message="🍽️ Cocinando platos para ti..." />
            }
          >
            <div className="mb-8 flex justify-center">
              <BuscarPlato busqueda={busqueda} setBusqueda={setBusqueda} />
            </div>
            <PlatosList platosPromise={platos} busqueda={busqueda} />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default App;
