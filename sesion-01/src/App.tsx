import FormularioLogin from "./components/FormularioLogin";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <main className="container bg-grey-100 mx-auto p-4">
        <FormularioLogin />
      </main>
    </div>
  );
};

export default App;
