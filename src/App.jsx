import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Produtos from "./components/Produtos";
import AlertaEstoque from "./components/AlertaEstoque";
import TabelaProdutos from "./components/TabelaProdutos";
import FormularioProduto from "./components/FormularioProduto";

function App() {
  return (
    <div className="flex h-screen bg-[#F4F6F9] overflow-hidden">
      <Sidebar nomePessoa="Eduardo" cargo="Gerente de estoque" />
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-h-0">
        <Header
          titulo="Produtos"
          descricao="Gerencie o catálogo e acompanhe os níveis de estoque."
        />
        <main className="flex-1 overflow-y-auto min-h-0">
          <Produtos />
          <AlertaEstoque />

          <div className="flex items-stretch">
            <TabelaProdutos
              produto="Teclado Mecânico K87"
              sku="TEC-0087 - Perriféricos"
              quantidadeInicial={148}
              estoqueMinimo={35}
              preco={157.59}
              status="Em estoque"
            />
            <FormularioProduto
              titulo="Cadastrar produto"
              descricao="Preencha os dados para adicionar ao estoque."
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
