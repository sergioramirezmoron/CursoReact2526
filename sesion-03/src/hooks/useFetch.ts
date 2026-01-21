import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  // states
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // effect
  // Efecto que cuando cargue el componente (o que renderice por primera vez haremos useEffect)
  useEffect(() => {
    setLoading(true);
    setError(null);
    // Creamos un mando a distancia para abortar el fetch
    const controller = new AbortController();
    const { signal } = controller; // El signal es una señal que va por el cable del fetch
    const fetchData = async () => {
      try {
        // Hacemos la llamada y pasamos la señal de cancelación.
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Error en la petición");
        }
        setError(null);
        setData(await response.json());
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    // ************* HAY QUE LLAMAR AL fetchData() DENTRO DEL useEffect()*************
    fetchData();

    // EL return se ejecuta cuando se va a desmontar el componente. (Cuando haya errores)
    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
