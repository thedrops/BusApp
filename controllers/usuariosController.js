const Usuario = require('../models/usuarioModel');

exports.postNovoUsuario =  (req, res, next) =>{
    let novoUsuario = new Usuario(req.body.nome,req.body.email,req.body.senha)
    novoUsuario.salvar();
    res.redirect('/usuarios');
};

exports.postEditarUsuario =  (req, res, next) =>{
    let novoUsuario = new Usuario(req.body.nome,req.body.email,req.body.senha)
    novoUsuario.salvar();
    res.redirect('/usuarios');
};

exports.getNovoUsuario = (req, res, next) =>{
    res.render('usuario/novoUsuario');
}

exports.getUsuarios = (req, res, next) =>{
    Usuario.listar()
    .then((usuario) => {
        res.render('usuario/usuarios',{
            usuarios:usuario,
        });
    });
}

exports.getDeletarUsuario = (req, res, next) =>{
    
}

exports.getEditarUsuario = (req, res, next) =>{
    const id = req.params.idusuario;
    Usuario.getById(id)
        .then((usuario)=>{
            res.render('usuario/editarUsuario',{
                usuario:usuario,
            });
        })
        .catch((err) =>{
            console.log(err);
            res.sendStatus(404);
        })
}

