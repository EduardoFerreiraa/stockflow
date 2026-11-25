import { useState } from "react";

function validar(valores) {
  const erros = {};

  if (!valores.nome.trim()) {
    erros.nome = "Informe o nome do produto.";
  }

  if (!valores.sku.trim()) {
    erros.sku = "Informe o SKU.";
  }

  if (valores.quantidadeInicial.trim() === "") {
    erros.quantidadeInicial = "Informe a quantidade inicial.";
  } else if (
    !Number.isInteger(Number(valores.quantidadeInicial)) ||
    Number(valores.quantidadeInicial) < 0
  ) {
    erros.quantidadeInicial = "Use um número inteiro, 0 ou maior.";
  }

  if (valores.estoqueMinimo.trim() === "") {
    erros.estoqueMinimo = "Informe a quantidade mínima.";
  } else if (
    !Number.isInteger(Number(valores.estoqueMinimo)) ||
    Number(valores.estoqueMinimo) < 0
  ) {
    erros.estoqueMinimo = "Use um número inteiro, 0 ou maior.";
  }

  if (valores.precoDoCusto.trim() === "") {
    erros.precoDoCusto = "Informe o preço de custo.";
  } else if (Number(valores.precoDoCusto) <= 0) {
    erros.precoDoCusto = "O preço deve ser maior que zero.";
  }

  if (valores.precoDaVenda.trim() === "") {
    erros.precoDaVenda = "Informe o preço de venda.";
  } else if (Number(valores.precoDaVenda) <= 0) {
    erros.precoDaVenda = "O preço deve ser maior que zero.";
  }

  if (valores.categoria === "") {
    erros.categoria = "Selecione uma categoria.";
  }

  if (valores.fornecedor === "") {
    erros.fornecedor = "Selecione um fornecedor.";
  }

  return erros;
}

function FormularioProduto({ titulo, descricao }) {
  const styleLabel = "text-[#334155] text-[16px]";
  const styleInput =
    "w-full p-2.5 my-1 outline-none border border-[#CBD5E1] rounded-xl text-[#0F172A] transition-all duration-200 focus:border-[#2F5BE8]";

  const styleErros = "text-sm text-red-700";

  const [form, setForm] = useState({
    nome: "",
    sku: "",
    categoria: "",
    fornecedor: "",
    quantidadeInicial: "",
    estoqueMinimo: "",
    precoDoCusto: "",
    precoDaVenda: "",
  });

  const [erros, setErros] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((atual) => ({
      ...atual,
      [name]: value,
    }));

    if (erros[name]) {
      setErros({
        ...erros,
        [name]: "",
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novosErros = validar(form);
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) return;

    console.log("Enviando: ", form);
  }

  return (
    <div className="w-2/5 mr-10 my-6">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col py-5 px-7 bg-white border border-[#E5EAF1] rounded-2xl gap-3"
      >
        <div>
          <h3 className="text-[#0F172A] text-[19px] font-black">{titulo}</h3>
          <p className="text-[#64748B] text-[15px]">{descricao}</p>
        </div>

        <div className="flex flex-col items-start gap-5">
          <div className="w-full flex flex-col items-start">
            <label className={styleLabel} htmlFor="nome">
              Nome do produto
            </label>
            <input
              name="nome"
              className={`${styleInput} ${erros.nome ? "border-red-600" : ""}`}
              value={form.nome}
              onChange={handleChange}
              type="text"
              id="nome"
              placeholder="Ex: Teclado Mecânico K87"
            />
            {erros.nome && <p className={styleErros}>{erros.nome}</p>}
          </div>

          <div className="w-full flex items-start justify-between gap-4">
            <div className="w-full flex flex-col gap-1">
              <label className={styleLabel} htmlFor="sku">
                Sku
              </label>
              <input
                name="sku"
                className={`${styleInput} ${erros.sku ? "border-red-600" : ""}`}
                value={form.sku}
                onChange={handleChange}
                type="text"
                id="sku"
                placeholder="TEC-0087"
              />
              {erros.sku && <p className={styleErros}>{erros.sku}</p>}
            </div>

            <div className="w-full flex flex-col gap-1">
              <label className={styleLabel} htmlFor="categoria">
                Categoria
              </label>
              <select
                name="categoria"
                className={`${styleInput} ${erros.categoria ? "border-red-600" : ""}`}
                value={form.categoria}
                onChange={handleChange}
                id="categoria"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="perifericos">Periféricos</option>
                <option value="monitores">Monitores</option>
                <option value="cabos">Cabos</option>
                <option value="audio">Áudio</option>
                <option value="acessorios">Acessórios</option>
              </select>
              {erros.categoria && (
                <p className={styleErros}>{erros.categoria}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="fornecedor">Fornecedor</label>
            <select
              name="fornecedor"
              className={`${styleInput} ${erros.fornecedor ? "border-red-600" : ""}`}
              value={form.fornecedor}
              onChange={handleChange}
              id="fornecedor"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione um fornecedor
              </option>
              <option value="1">Distribuidora Alfa</option>
              <option value="2">Tech Importados</option>
              <option value="3">Atacado Central</option>
            </select>
            {erros.fornecedor && (
              <p className={styleErros}>{erros.fornecedor}</p>
            )}
          </div>

          <div>
            <div className="w-full flex items-center gap-5">
              <div className="flex flex-col items-start">
                <label htmlFor="quantidadeInicial">Quantidade inicial</label>
                <input
                  name="quantidadeInicial"
                  type="number"
                  className={`${styleInput} ${erros.quantidadeInicial ? "border-red-600" : ""}`}
                  value={form.quantidadeInicial}
                  onChange={handleChange}
                  id="quantidadeInicial"
                  placeholder="0"
                />
                {erros.quantidadeInicial && (
                  <p className={styleErros}>{erros.quantidadeInicial}</p>
                )}
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="estoqueMinimo">Estoque mínimo</label>
                <input
                  name="estoqueMinimo"
                  value={form.estoqueMinimo}
                  onChange={handleChange}
                  id="estoqueMinimo"
                  type="number"
                  className={`${styleInput} ${erros.estoqueMinimo ? "border-red-600" : ""}`}
                  placeholder="0"
                />
                {erros.estoqueMinimo && (
                  <p className={styleErros}>{erros.estoqueMinimo}</p>
                )}
              </div>
            </div>

            <p className="text-[#64748B] text-[14px] mt-2">
              Você será alertado quando a quantidade ficar abaixo do estoque
              mínimo.
            </p>
          </div>

          <div className="w-full flex items-center gap-5">
            <div className="flex flex-col items-start">
              <label htmlFor="precoCusto">Preço de custo</label>
              <input
                name="precoDoCusto"
                type="number"
                step="0.01"
                className={`${styleInput} ${erros.precoDoCusto ? "border-red-600" : ""}`}
                value={form.precoDoCusto}
                onChange={handleChange}
                id="precoCusto"
                placeholder="0"
              />
              {erros.precoDoCusto && (
                <p className={styleErros}>{erros.precoDoCusto}</p>
              )}
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="precoDaVenda">Preço de venda</label>
              <input
                name="precoDaVenda"
                id="precoDaVenda"
                type="number"
                step="0.01"
                className={`${styleInput} ${erros.precoDaVenda ? "border-red-600" : ""}`}
                value={form.precoDaVenda}
                onChange={handleChange}
                placeholder="0"
              />
              {erros.precoDaVenda && (
                <p className={styleErros}>{erros.precoDaVenda}</p>
              )}
            </div>
          </div>

          <div className="w-full justify-between flex items-center gap-4">
            <button className="cursor-pointer w-full border border-[#CBD5E1] p-3 rounded-xl bg-white font-black transition-all duration-200 hover:bg-[#F1F5F9] hover:border-[#94A3B8]">
              Cancelar
            </button>
            <button
              type="submit"
              className="cursor-pointer w-full border border-[#2F5BE8] p-3 rounded-xl bg-[#2F5BE8] text-white font-black hover:bg-[#2B54D5]"
            >
              Salvar produto
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormularioProduto;
