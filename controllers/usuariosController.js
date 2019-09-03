const Usuario = require('../models/usuarioModel');

exports.postNovoUsuario =  (req, res, next) =>{
    let novoUsuario = new Usuario(req.body.nome,req.body.email,req.body.senha)
    novoUsuario.salvar();
    res.redirect('/usuarios');
};

exports.getNovoUsuario = (req, res, next) =>{
    res.render('novoUsuario');
}

exports.getUsuarios = (req, res, next) =>{
    res.render('usuarios',{
      'usuarios' : Usuario.listar(),
    })
}