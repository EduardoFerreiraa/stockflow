function AlertaEstoque({ quantidadeProdutos, estoquebaixo, esgotados }) {
  return (
    <div className="w-full px-10 m-auto mt-6 hidden">
      <div className="flex px-10 py-6 justify-between items-center border border-[#FCD34D] bg-[#FFFBEB] rounded-2xl">
        <div className="flex items-center justify-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 40 40"
            role="img"
            aria-label="Alerta de estoque"
          >
            <circle cx="20" cy="20" r="20" fill="#FEF3C7" />
            <g
              transform="translate(9 9)"
              fill="none"
              stroke="#92400E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3l10 18H2z" />
              <path d="M12 10v4" />
              <path d="M12 17h.01" />
            </g>
          </svg>

          <div className="flex flex-col">
            <p className="text-[#78350F] font-black">
              {quantidadeProdutos} produtos precisam de reposição
            </p>
            <p className="text-[#92400E] text-[15px]">
              {estoquebaixo} estão abaixo do estoque mínimo e {esgotados}{" "}
              esgotaram. Reponha antes que as vendas sejam afetadas.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="cursor-pointer px-5 py-2 border border-[#F59E0B] bg-white text-[#78350F] rounded-2xl transition-all duration-200 hover:bg-[#FEF3C7] hover:text-[#78350F]">
            Ver apenas alertas
          </button>
          <button className="cursor-pointer px-5 py-2  border border-[#92400E] bg-[#92400E] text-white rounded-2xl transition-all duration-200 hover:bg-[#78350F] hover:border-[#78350F]">
            Gerar pedido de compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlertaEstoque;
