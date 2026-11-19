import CardsDashboard from "./CardsDashboard";

function Produtos() {
  return (
    <div className="w-full m-auto px-10">
      <div className="grid grid-cols-4 gap-5">
        <CardsDashboard
          titulo="Produtos cadastrados"
          valor="0"
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 44 44"
              role="img"
              aria-label="produtos cadastrados"
            >
              <rect width="44" height="44" rx="12" fill="#E8EEFF" />
              <g
                transform="translate(11 11)"
                fill="none"
                stroke="#2F5BE8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 8l-9-5-9 5 9 5 9-5z" />
                <path d="M3 8v8l9 5 9-5V8" />
                <path d="M12 13v8" />
              </g>
            </svg>
          }
        />
        <CardsDashboard
          titulo="Valor em estoque"
          valor={0}
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 44 44"
              role="img"
              aria-label="valor em estoque"
            >
              <rect width="44" height="44" rx="12" fill="#DCFCE7" />
              <g
                transform="translate(11 11)"
                fill="none"
                stroke="#166534"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2v20" />
                <path d="M17 6H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </g>
            </svg>
          }
        />
        <CardsDashboard
          titulo="Estoque baixo"
          valor="0"
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 44 44"
              role="img"
              aria-label="estoque baixo"
            >
              <rect width="44" height="44" rx="12" fill="#FEF3C7" />
              <g
                transform="translate(11 11)"
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
          }
        />
        <CardsDashboard
          titulo="Esgotados"
          valor="0"
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 44 44"
              role="img"
              aria-label="esgotados"
            >
              <rect width="44" height="44" rx="12" fill="#FEE2E2" />
              <g
                transform="translate(11 11)"
                fill="none"
                stroke="#991B1B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M15 9l-6 6" />
                <path d="M9 9l6 6" />
              </g>
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default Produtos;
