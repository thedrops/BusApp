const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

  
  router.post('/novo', usuariosController.postNovoUsuario);

  router.post('/editar', usuariosController.postEditarUsuario);
  
  router.get('/novo', usuariosController.getNovoUsuario);
  
  router.get('/', usuariosController.getUsuarios);

  router.get('/deletar/', usuariosController.getDeletarUsuario);

  router.get('/editar/:idusuario', usuariosController.getEditarUsuario);

  module.exports = router;  