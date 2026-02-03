const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerTarefa.cjs')

router.get('/', controller.listar);

router.get('/:id', controller.buscarPorID);

router.post('/', controller.criar);

router.put('/:id', controller.atualizar);

router.delete('/:id', controller.excluir);

module.exports = router;