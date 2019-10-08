const Usuario = require('../database/index').Usuario;
const bcrypt = require('bcrypt');

exports.postNovoUsuario =  async (req, res, next) =>{
    const hash = bcrypt.hashSync(req.body.senha, 10);

    try {
      let usuario = await Usuario.create(
        Object.assign(req.body, { senha: hash })
      );
      
      res.redirect('/usuarios');

    } catch(err) {
      return res.status(400).send(err);
    }

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

