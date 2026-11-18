import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar nomePessoa="Eduardo" cargo="Gerente de estoque" />
      <div className="w-full flex flex-col">
        <Header
          titulo="Produtos"
          descricao="Gerencie o catálogo e acompanhe os níveis de estoque."
        />
      </div>
    </div>
  );
}

export default App;
