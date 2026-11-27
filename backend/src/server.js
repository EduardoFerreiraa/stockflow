const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API do StockFlow está rodando!",
  });
});

app.get("/teste-db", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT NOW()");
    res.json({
      hora: resultado.rows[0].now,
    });
  } catch (erro) {
    res.status(500).json({
      erro: "Erro ao conectar no banco",
      detalhe: erro.message,
    });
  }
});

app.post("/produtos", (req, res) => {
  console.log("Recebi: ", req.body);

  res.status(201).json({
    mensagem: "Recebido!",
    dados: req.body,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
