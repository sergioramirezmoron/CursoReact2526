export interface FormState {
  error: string | null;
  success: string | null;
}

export interface TodoData {
  nombre: string;
  fecha: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface Register {
  username: string;
  password: string;
}
