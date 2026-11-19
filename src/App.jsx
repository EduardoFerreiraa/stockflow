import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Produtos from "./components/Produtos";

function App() {
  return (
    <div className="flex h-screen bg-[#F4F6F9] overflow-hidden">
      <Sidebar nomePessoa="Eduardo" cargo="Gerente de estoque" />
      <div className="flex-1 flex-col h-screen">
        <Header
          titulo="Produtos"
          descricao="Gerencie o catálogo e acompanhe os níveis de estoque."
        />
        <main className="flex-1">
          <Produtos />
        </main>
      </div>
    </div>
  );
}

export default App;
