import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAllowed: boolean;
  children: ReactNode;
}

export const ProtectedRoute = ({
  isAllowed,
  children,
}: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to="/" replace/>; // replace reemplaza las rutas anteriores por la que le estemos pasando en el historial de rutas (Limpia las rutas buscadas anteriormente)
  }

  return <>{children}</>;
};
