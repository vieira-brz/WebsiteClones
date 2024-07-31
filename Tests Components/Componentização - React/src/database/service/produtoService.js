const Produto = require("../model/produtoModel");
const databaseConnection = require("../connection/");

const db = databaseConnection();

const listaProduto = async () => {
    const listagemProdutos = await Produto.find();
    return listagemProdutos;
};

const buscaProduto = async (codigo_peca) => {
    try {
        const produto = await Produto.find({ pn: codigo_peca });
        return produto;
    } catch (err) {
        console.log(err);
        return false;
    }
};

const criaProduto = async (produto) => {
    try {
        const produtoCriado = await Produto.create(produto); //
        return produtoCriado;
    } catch (err) {
        console.log(err);
        return false;
    }
};

const deletaProduto = async (codigo_peca) => {
    const produtoDeletado = await Produto.findOneAndDelete({ pn: codigo_peca });
    return produtoDeletado;
};

module.exports = {
    listaProduto,
    buscaProduto,
    criaProduto,
    deletaProduto,
};