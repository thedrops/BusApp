const express = require('express');

const router = express.Router();

const sacController = require('../controllers/sacController');

router.get('/excluir/:idSac', sacController.getExcluirSac);

router.post('/nova', sacController.postNovoSac);

router.get('/nova', sacController.getNovoSac);

router.post('/editar/:idSac', sacController.postEditarSac);

router.get('/editar/:idSac', sacController.getEditarSac);

router.get('/', sacController.getSac);
  
module.exports = router;