const express = require('express');

const router = express.Router();

const linhasController = require('../controllers/linhasController');

router.get('/excluir/:idLinha', linhasController.getExcluirLinha);

router.post('/novo', linhasController.postNovaLinha);

router.get('/novo', linhasController.getNovaLinha);

router.post('/editar/:idLinha', linhasController.postEditarLinha);

router.get('/editar/:idLinha', linhasController.getEditarLinha);

router.get('/', linhasController.getLinhas);
  
module.exports = router;