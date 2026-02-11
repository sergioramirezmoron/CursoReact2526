import { createContext, useState, type ReactNode } from "react";
import type { Language, Theme, User } from "../types/AppContextType";

export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, setState] = useState<AppState>({
    user: {
      id: "1",
      name: "Profe React",
      email: "profereact@gmail.com",
      avatar: "public/images/1.png",
      role: "admin",
    },
    theme: "dark",
    language: "es",
  });

  // Habra que usar el useEffect para cargar el idioma, tema al iniciar el componente

  const setUser = (user: User | null) => {
    //setState((prev) => ({ ...prev, user })); // Recomendado
    setState({ ...state, user });
  };

  const setTheme = (theme: Theme | null) => {
    //setState((prev) => ({ ...prev, theme })); // Recomendado
    setState({ ...state, theme });
  };

  const setLanguage = (language: Language | null) => {
    //setState((prev) => ({ ...prev, language })); // Recomendado
    setState({ ...state, language });
  };

  const value = {
    ...state,
    setUser,
    setTheme,
    setLanguage,
  };

  return <AppContext value={value}>{children}</AppContext>;
};
