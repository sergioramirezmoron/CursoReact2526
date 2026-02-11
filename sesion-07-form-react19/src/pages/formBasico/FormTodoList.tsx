import { useActionState } from "react";
import type { FormState, TodoData } from "../../types";

// Simular guardar en una base de datos.
const guardarEnBaseDeDatos = async (todo: TodoData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  localStorage.setItem("todo", JSON.stringify(todo));
};

// Funcion que ejecuta react al enviar el formulario
const guardarAction = async (
  _prevState: FormState,
  formData: FormData, // El objeto que contiene los datos del formulario
): Promise<FormState> => {
  // Extraer todos los datos de un formulario
  const nombreTodo = formData.get("nombreTodo") as string;
  const fechaTodo = formData.get("fechaTodo") as string;

  // Ponemos restricciones
  if (!nombreTodo || !fechaTodo) {
    return {
      error: "Todos los campos son obligatorios",
      success: null,
    };
  }

  try {
    await guardarEnBaseDeDatos({
      nombre: nombreTodo,
      fecha: fechaTodo,
    });
    return {
      error: null,
      success: "Todo guardado correctamente",
    };
  } catch (error) {
    return {
      error: `Error al guardar el todo : ${error}`,
      success: null,
    };
  }
};

const FormTodoList = () => {
  const { state, formAction, isPending } = useActionState(guardarAction, {
    error: null,
    success: null,
  });

  return (
    <div>
      <h1>Formulario Básico ToDo</h1>
      <form action={formAction}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            id="nombreTodo"
            name="nombreTodo"
            disabled={isPending}
          />
          {state.error && <p>Error jeje</p>}
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            id="fechaTodo"
            name="fechaTodo"
            disabled={isPending}
          />
          {state.error && <p>Error jeje</p>}
        </div>
        <button type="submit" disabled={isPending}>
          {isPending ? "Guardando..." : "Guardar todo"}
        </button>
      </form>
    </div>
  );
};

export default FormTodoList;
