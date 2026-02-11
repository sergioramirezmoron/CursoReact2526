// Los tipos globales
export interface FamilyState {
  mensaje: string;
  contador: number;
}

// Acciones a realizar
export interface FamilyActions {
  setMensaje: (mensaje: string) => void;
  incrementarContador: () => void;
  decrementarContador: () => void;
}

// Exportar los tipos
export type FamilyContextType = FamilyState & FamilyActions;
