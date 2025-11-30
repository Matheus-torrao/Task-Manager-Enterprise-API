const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerTarefa.cjs')

router.get('/',  async function (req, res) {
    console.log('Método http utilizado:',req.method);
    let menu = controller.menu();
    let question = controller.questUser();
    res.status(200);
    return res.json({message:`Servidor Funcionando!`});
});

router.get('/visualizar', async function (req,res) {
    console.log('Método http utilizado:',req.method);
    let result = controller.visualizarUser(req.body);
    res.status(200);
    return res.json({message: `Error,`})
    
});

router.post('/cadastrar', async function (req,res) {
    console.log('Método http utilizado:',req.method);
    let result = controller.cadastrarTarefa(req.body);
    res.status(200);
    return res.json({message: `Error,`})
    
});

router.put('/atualizar', async function (req,res) {
    console.log('Método http utilizado:',req.method);
    let result = controller.atualizarTarefa(req.body);
    res.status(200);
    return res.json({message: `Error,`})
    
});

router.delete('/excluir', async function (req,res) {
    console.log('Método http utilizado:',req.method);
    let result = controller.excluirTarefa(req.body);
    res.status(200);
    return res.json({message: `Error,`})
    
});

module.exports = router