const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

  
  router.post('/novo', usuariosController.postNovoUsuario);
  
  router.get('/novo', usuariosController.getNovoUsuario);
  
  router.get('/', usuariosController.getUsuarios);

  module.exports = router;  