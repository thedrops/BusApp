const Usuario = require('../database/index').Usuario;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require("../config/auth.json");

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
        const token = jwt.sign({ id : usuario.id},authConfig.secret,{
            expiresIn: 86400,
        });

        res.send("logado!");
      }
  
    } catch (err) {
      return res.status(400).send('Senha ou Email invalido');
    }
  
  }
  