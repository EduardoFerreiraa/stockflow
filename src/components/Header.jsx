function Header({ titulo, descricao }) {
  return (
    <header className="flex justify-around items-center p-5">
      <div>
        <h1 className="text-2xl font-semibold">{titulo}</h1>
        <p className="text-gray-500">{descricao}</p>
      </div>

      <div className="flex gap-5">
        <input
          className="w-72 border border-gray-300 py-2 px-5 rounded-lg outline-none transition-all duration-200 focus:border-gray-600"
          type="search"
          placeholder="Buscar por nome ou SKU"
        />
        <button className="cursor-pointer text-white font-semibold bg-blue-600 py-2 px-5 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1">
          + Novo produto
        </button>
      </div>
    </header>
  );
}

export default Header;
