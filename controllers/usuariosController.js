const Usuario = require('../database/index').Usuario;


exports.postNovoUsuario =  (req, res, next) =>{
    Usuario.create(req.body)
    .then((usuario) => {
      res.redirect('/usuarios');
    }).catch(console.error);
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
    Usuario.findByPk(usuarioId).then(isso => {
      return isso.destroy();
    }).then(() => {
      res.redirect('/usuarios');
    }).catch(console.error);
  };

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

