const Usuario = require('../database/index').Usuario;
const bcrypt = require('bcrypt');

exports.postNovoUsuario =  async (req, res, next) =>{
    const hash = bcrypt.hashSync(req.body.senha, 10);

    try {
      let usuario = await Usuario.create(
        Object.assign(req.body, { senha: hash })
      );
      
      res.redirect('http://localhost:3000/usuarios/').status(200);

    } catch(err) {
      return res.status(400).send(err);
    }

};

exports.postEditarUsuario = (req, res, next) => {
    let usuarioId = req.params.usuarioId;
    Usuario.findByPk(usuarioId).then(usuario => {
      usuario.update(req.body).then(() => {
        res.redirect('http://localhost:3000/usuarios/').status(200);
      });
    }).catch(console.error);
};

exports.getNovoUsuario = (req, res, next) =>{
    res.render('usuario/formUsuario',{
        formAction:"/usuarios/novo",
        usuario: Usuario.build({}),
        title:'Novo Usuário',
    });
}

exports.getUsuarios = (req, res, next) =>{
    
    Usuario.findAll({
        role: 'Usuario'
      })
      .then(usuarioTable => {
        // res.render('usuario/usuarios',{
        //     usuarios:usuarioTable,
        // });
        res.json({'usuarios': usuarioTable});
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
          res.json({'usuario' : user});
        })
        .catch((err) =>{
            console.log(err);
            res.sendStatus(404);
        })
}

