const Usuario = require('../database/index').Usuario;
const bcrypt = require('bcrypt');

exports.postAutenticacao = async (req, res) => {
    const { email, senha } = req.body;
  
    if (!email || !senha) {
      return res.status(400).send(
        'Preencha o campo email e senha!'
      );
    }
  
    try {
        
      const usuario = await Usuario.findOne({ where: { email } });

      if (bcrypt.compareSync(senha,usuario.senha)) {
        return res.json(usuario);
      }
  
    } catch (err) {
      return res.status(400).send('Senha ou Email invalido');
    }
  
  }
  