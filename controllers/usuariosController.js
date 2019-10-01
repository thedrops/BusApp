const Usuario = require('../database/index').Usuario;


exports.postNovoUsuario =  (req, res, next) =>{
    Usuario.create(req.body)
    .then((usuario) => {
      res.redirect('/usuarios');
    }).catch(console.error);
};

exports.postEditarUsuario = (req, res, next) => {
    let usuarioId = req.params.usuarioId;
    Usuario.findByPk(usuarioId).then(usuario => {
      usuario.update(req.body).then(() => {
        res.redirect('/usuarios');
      });
    }).catch(console.error);
};

exports.getNovoUsuario = (req, res, next) =>{
    res.render('usuario/formUsuario',{
        formAction:"/usuarios/novo",
        usuario: Usuario.build({})
    });
}

exports.getUsuarios = (req, res, next) =>{
    
    Usuario.findAll({
        role: 'Usuario'
      })
      .then(usuarioTable => {
        res.render('usuario/usuarios',{
            usuarios:usuarioTable,
        });
      });  
    
}

exports.getExcluirUsuario = (req, res, next) => {
    let usuarioId = req.params.usuarioId;
    Usuario.findByPk(usuarioId).then(user => {
      return user.destroy();
    }).then(() => {
      res.redirect('/usuarios');
    }).catch(console.error);
  };

exports.getEditarUsuario = (req, res, next) =>{
    let usuarioId = req.params.usuarioId;
    Usuario.findByPk(usuarioId)
        .then((user)=>{
            res.render('usuario/formUsuario',{
                usuario:user,
                formAction: '/usuarios/editar/' + usuarioId,
            });
        })
        .catch((err) =>{
            console.log(err);
            res.sendStatus(404);
        })
}

