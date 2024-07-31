const express = require("express");
const bodyParser = require("body-parser");
const produtoController = require("./controller/produtoController");

const app = express();
const cors = require("cors");

app.use(bodyParser.json());

// Todas as rotas relacionadas a produto
app.use("/produto", produtoController);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});