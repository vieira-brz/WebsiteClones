// URL = http://......../produto
const produtoService = require('../service/produtoService');
const criaXLS = require('../service/produtoXLS');

const Router = require('express');
const router = Router();


// GET na url irá retornar a lista de transcalcs
router.get('/', async (req, res) => {
    const lista = await produtoService.listaProduto();
    res.status(200).send(lista);
})

router.post('/downloadXLS', async (req, res) => {
    const xls = await criaXLS(req.body);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=arquivo.xlsx');

    xls ? res.status(201).send(xls) : res.status(500).send("Erro")
})


// POST na url irá cadastrar um transcalc ( se ele nao existir )
router.post('/', async (req, res, next) => {

    const busca = await produtoService.buscaProduto(req.body.pn)

    if (busca != false && busca[0].pn == req.body.pn) {

        res.status(500).send('PN já cadastrado!!');

    } else {

        const produto = await produtoService.criaProduto(req.body);
        produto ? res.status(201).send('Produto criado com sucesso!') : res.status(500).send("Erro ao cadastrar");

        next();
        return;
    }


})

// DELETE na url irá deletar um transcalc
router.delete('/', async (req, res, next) => {

    if (req.params.pn != '') {
        const deleta = await produtoService.deletaProduto(req.params.pn)
        next();
        return;
    }

})

module.exports = router;