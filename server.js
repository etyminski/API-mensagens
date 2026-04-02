const express = require("express");
const app = express();

app.use(express.json());

let mensagens = [];

app.post("/webhook", (req, res) => {
  const body = req.body;

  if (!body.id || !body.mensagem) {
    return res.status(400).send("Dados inválidos");
  }

  mensagens.push(body);

  res.send("ok");
});

app.get("/mensagens", (req, res) => {
  res.json(mensagens);
});

app.listen(3000, () => {
  console.log("rodando");
});