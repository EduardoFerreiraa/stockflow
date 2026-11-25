import LogoStockFlow from "../assets/stockflow-logo.svg";

function Sidebar({ nomePessoa, cargo }) {
  const styleButton =
    "flex items-center gap-4 text-[#A9B6CC] px-4 py-3 text-[1rem] rounded-lg transition-all duration-200 hover:bg-[rgba(255,255,255,.09)]";
  const styleButtonActive =
    "flex items-center gap-4 text-[#FFFFFF] bg-[rgba(255,255,255,.09)] px-4 py-3 text-[1rem] transition-all duration-200 rounded-lg hover:bg-[rgba(255,255,255,.13)]";

  return (
    <aside className="bg-[#0E1A2F] text-white h-screen w-72 flex flex-col shrink-0">
      <div className="flex items-center gap-3 my-2 mx-6">
        <img className="w-10 " src={LogoStockFlow} alt="Logo" />
        <h1 className="text-center font-black text-[23px] my-5">StockFlow</h1>
      </div>
      <div className="flex-1 flex flex-col mx-4">
        <div>
          <p className="text-[#A9B6CC] text-[13px] font-bold uppercase mt-2 mb-4 px-4">
            Menu
          </p>
          <nav className="flex flex-col gap-2">
            <a href="#" className={styleButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="9" rx="1" />
                <rect x="14" y="3" width="7" height="5" rx="1" />
                <rect x="14" y="12" width="7" height="9" rx="1" />
                <rect x="3" y="16" width="7" height="5" rx="1" />
              </svg>

              <span>Painel</span>
            </a>
            <a href="#" className={styleButtonActive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 8l-9-5-9 5 9 5 9-5z" />
                <path d="M3 8v8l9 5 9-5V8" />
                <path d="M12 13v8" />
              </svg>

              <span>Produtos</span>
            </a>
            <a href="#" className={styleButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 8h16" />
                <path d="M16 4l4 4-4 4" />
                <path d="M20 16H4" />
                <path d="M8 12l-4 4 4 4" />
              </svg>

              <span>Movimentações</span>
            </a>
            <a href="#" className={`${styleButton} `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M1 6h13v10H1z" />
                <path d="M14 9h4l3 3v4h-7z" />
                <circle cx="6" cy="18" r="2" />
                <circle cx="17" cy="18" r="2" />
              </svg>

              <span>Fornecedores</span>
            </a>
            <a href="#" className={styleButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 20V10" />
                <path d="M12 20V4" />
                <path d="M19 20v-7" />
              </svg>

              <span>Relatórios</span>
            </a>
          </nav>
        </div>
        <div className="cursor-pointer mt-auto flex items-center mb-10 bg-[rgba(255,255,255,0.06)] p-3 rounded-lg hover:bg-[rgba(255,255,255,.13)]">
          <div className="flex items-center justify-center rounded-full bg-[#0E1A2F] w-10 h-10 font-black">
            {nomePessoa?.charAt(0) || "U"}
          </div>
          <div className="flex flex-col">
            <p className="text-[15px] px-3">{nomePessoa}</p>
            <p className="text-[12px] font-bold px-3 text-gray-400">{cargo}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
