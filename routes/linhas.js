const express = require('express');

const router = express.Router();

const linhasController = require('../controllers/linhasController');

router.get('/deletar/:idLinha', linhasController.getExcluirLinha);

router.post('/nova', linhasController.postNovaLinha);

router.get('/nova', linhasController.getNovaLinha);

router.get('/editar/:idLinha', linhasController.getEditarLinha);

router.get('/', linhasController.getLinhas);
  
module.exports = router;