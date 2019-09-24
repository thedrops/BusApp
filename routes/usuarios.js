const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');
  
  router.post('/novo', usuariosController.postNovoUsuario);
  //router.post('/editar/:usuarioId', usuarioController.postEditarProva);

  router.get('/excluir/:usuarioId', usuariosController.getExcluirUsuario);
  router.get('/novo', usuariosController.getNovoUsuario);
  router.get('/', usuariosController.getUsuarios);
//  router.get('/editar/:usuarioId', usuarioController.getEditarProva);


  module.exports = router;  