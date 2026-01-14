// Crear un componente llamado Botón (Nos lo llevaremos a todos los proyectos) que le pase como props un texto, el tipo de botón y el evento onClick.
// El tipo de botón lo llamaré TipoBoton de tipo type ("primary", "secondary", "danger")

// Si es primary tendra un bg-blue-500 y cuando me ponga encima, el hover tendra un bg-blue-700.
// Si es secondary tendrá un bg-grey-500 y cuando me ponga encima, el hover tendra un bg-grey-700
// Si es secondary tendrá un bg-red-500 y cuando me ponga encima, el hover tendra un bg-red-700

// Todos tendrán texto blanco de letra

type Button = "primary" | "secondary" | "danger";

interface BotonProps {
  text: string;
  tipo: Button;
  submit: boolean;
  onClick: () => void;
}

const Boton = ({ text, tipo, onClick, submit }: BotonProps) => {
  const estilos = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    danger: "bg-red-500 hover:bg-red-700",
  };

  return (
    <button
      className={`${estilos[tipo]} px-4 py-2 rounded font-semibold shadow transition text-white`}
      type={submit ? "submit" : "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Boton;
