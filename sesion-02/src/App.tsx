import React from "react";
import UseEffectBasico from "./components/01-UseEffectBasico";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main>{/** Aqui vendrán 2 componentes */}</main>
      <UseEffectBasico />
    </div>
  );
};

export default App;
