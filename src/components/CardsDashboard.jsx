function CardsDashboard({ titulo, valor, logo }) {
  return (
    <div className="w-full flex justify-between items-center gap-1 p-5 bg-white border border-gray-300 rounded-2xl">
      <div>
        <h3 className="text-[15px] text-gray-500">{titulo}</h3>
        <p className="text-3xl font-bold">
          {valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div className="w-15 h-15 mb-2 flex items-center justify-center">
        {logo}
      </div>
    </div>
  );
}

export default CardsDashboard;
