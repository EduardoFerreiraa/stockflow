function TabelaProdutos({
  produto,
  sku,
  quantidadeInicial,
  estoqueMinimo,
  preco,
  status,
}) {
  const styleButton =
    "cursor-pointer px-5 py-2 border border-gray-300 rounded-2xl transition-all duration-200 hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A]";
  const styleButtonActive =
    "cursor-pointer px-5 py-2 border-transparent bg-[#0F172A] text-white rounded-2xl";

  const styleTheadTh =
    "px-6 py-3 text-slate-600 uppercase text-[15px] text-left";

  return (
    <div className="w-full my-6 px-10">
      <div className="border rounded-2xl bg-white border-[#E5EAF1]">
        <div className="px-10 py-5 flex justify-between items-center">
          <div>
            <h3 className="text-[#0F172A] text-[1.1rem] font-bold">
              Todos os produtos
            </h3>
          </div>

          <div className="flex justify-center items-center gap-3">
            <button className={styleButtonActive}>Todos</button>
            <button className={styleButton}>Estoque baixo</button>
            <button className={styleButton}>Esgotados</button>
          </div>
        </div>

        <table className="w-full table-fixed">
          <colgroup>
            <col />
            <col className="w-50" />
            <col className="w-30" />
            <col className="w-120" />
            <col className="w-50" />
          </colgroup>
          <thead className="border-b border-t border-[#E5EAF1] bg-slate-50">
            <tr>
              <th className={styleTheadTh} scope="col">
                Produto
              </th>
              <th className={styleTheadTh} scope="col">
                Quantidade
              </th>
              <th className={styleTheadTh} scope="col">
                Preço
              </th>
              <th className={styleTheadTh} scope="col">
                Status
              </th>
              <th className={styleTheadTh} scope="col">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-slate-200">
              <td className="px-6 py-3">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 40 40"
                    role="img"
                    aria-label="Caixa"
                  >
                    <rect width="40" height="40" rx="10" fill="#EEF2F7" />
                    <g
                      transform="translate(10 10)"
                      fill="none"
                      stroke="#64748B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
                      <path d="M3 8v8l9 5 9-5V8" />
                      <path d="M12 13v8" />
                    </g>
                  </svg>
                  <div>
                    <p className="text-[#0F172A]">{produto}</p>
                    <p className="text-[14px] text-[#64748B]">{sku}</p>
                  </div>
                </div>
              </td>

              <td>
                <div className="flex items-center px-6 py-3">
                  <p className="text-[#0F172A] font-black">
                    {quantidadeInicial}
                  </p>
                  <p className="text-gray-500">/ mín. {estoqueMinimo}</p>
                </div>
              </td>

              <td className="text-[#0F172A] font-black px-6 py-3">
                {Number(preco ?? 0).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>

              <td className="px-6 py-3">{status}</td>

              <td className="px-6 py-3">
                <div className="flex items-center gap-4">
                  <button className="cursor-pointer p-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#64748B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      role="img"
                      aria-label="Editar"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
                    </svg>
                  </button>
                  <button className="cursor-pointer p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#64748B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      role="img"
                      aria-label="Excluir"
                    >
                      <path d="M3 6h18" />
                      <path d="M8 6V4h8v2" />
                      <path d="M6 6l1 14h10l1-14" />
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelaProdutos;
