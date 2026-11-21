function FormularioProduto({ titulo, descricao }) {
  const styleLabel = "text-[#334155] text-[16px]";
  const styleInput =
    "w-full p-2.5 my-1 outline-none border border-[#CBD5E1] rounded-xl text-[#0F172A] transition-all duration- focus:border-[#2F5BE8]";

  return (
    <div className="w-full h-full mr-10 my-6">
      <form className="flex flex-col py-5 px-7 bg-white border border-[#E5EAF1] rounded-2xl gap-3">
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
              className={styleInput}
              type="text"
              id="nome"
              placeholder="Ex: Teclado Mecânico K87"
            />
          </div>

          <div className="w-full flex items-center justify-between gap-4">
            <div className="w-full flex flex-col gap-1">
              <label className={styleLabel} htmlFor="sku">
                Sku
              </label>
              <input
                className={styleInput}
                type="text"
                id="sku"
                placeholder="TEC-0087"
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <label className={styleLabel} htmlFor="categoria">
                Categoria
              </label>
              <select
                className={styleInput}
                id="categoria"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                <option value="perifericos">Periféricos</option>
                <option value="monitores">Monitores</option>
                <option value="cabos">Cabos</option>
                <option value="audio">Áudio</option>
                <option value="acessorios">Acessórios</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="fornecedor">Fornecedor</label>
            <select
              className={styleInput}
              id="fornecedor"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecione um fornecedor
              </option>
              <option value="1">Distribuidora Alfa</option>
              <option value="2">Tech Importados</option>
              <option value="3">Atacado Central</option>
            </select>
          </div>

          <div className="w-full flex items-center gap-5">
            <div className="flex flex-col items-start">
              <label htmlFor="quantidadeInicial">Quantidade inicial</label>
              <input
                className={styleInput}
                type="number"
                id="quantidadeInicial"
                placeholder="0"
              />
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="estoqueMinimo">Estoque mínimo</label>
              <input className={styleInput} type="number" placeholder="0" />
            </div>
          </div>

          <p className="text-[#64748B] text-[15px]">
            Você será alertado quando a quantidade ficar abaixo do estoque
            mínimo.
          </p>

          <div className="w-full flex items-center gap-5">
            <div className="flex flex-col items-start">
              <label htmlFor="quantidadeInicial">Preço do custo</label>
              <input
                className={styleInput}
                type="number"
                id="quantidadeInicial"
                placeholder="0"
              />
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="estoqueMinimo">Preço da venda</label>
              <input className={styleInput} type="number" placeholder="0" />
            </div>
          </div>

          <div className="w-full justify-between flex items-center gap-4">
            <button className="cursor-pointer w-full border border-[#CBD5E1] p-3 rounded-xl bg-white font-black">
              Cancelar
            </button>
            <button className="cursor-pointer w-full border border-[#2F5BE8] p-3 rounded-xl bg-[#2F5BE8] text-white font-black">
              Salvar produto
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormularioProduto;
