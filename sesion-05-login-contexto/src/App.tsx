import { NavLink, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ProtectedRoute } from "./helpers/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState } from "react";

const App = () => {
  const [isAllowed, setIsAllowed] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <nav className="max-w-5xl mx-auto flex items-center justify-between bg-slate-800 rounded shadow-2xl">
        <div className="flex gap-8 ml-6">
          <NavLink
            className={(isActive) => `
              text-xs font-bold p-8 py-3 rounded-xl transition-all ${isActive ? "text-white" : "hover:text-yellow-400"}
            `}
            to="/"
          >
            Public
          </NavLink>
          <NavLink
            className={(isActive) => `
              text-xs font-bold p-8 py-3 rounded-xl transition-all ${isActive ? "text-white" : "text-yellow"}
            `}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={(isActive) => `
              text-xs font-bold p-8 py-3 rounded-xl transition-all ${isActive ? "text-white" : "text-yellow"}
            `}
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </nav>

      <main className="max-h-4xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute isAllowed={isAllowed}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAllowed={isAllowed}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
// Crear un formulario de Login con usuario admin@admin.com, y contraseña 1234 que permitirá visualizar una ruta llamada dashboard que tendrá un botón para cerrar la sesión, para el resto de usuarios solo estará disponible la ruta /.

// Utilizar sonner para mostrar un mensaje de bienvenida para iniciar sesión, y para cerrar sesión
