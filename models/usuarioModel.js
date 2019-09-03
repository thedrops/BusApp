const path = require('path');
const fs  = require('fs');
const usuarios = [];

const dbPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'usuarios.json'
);

class Usuario{
    constructor(nome,email,senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    salvar(){
        usuarios.push(this);
    }
    static listar(){
        return usuarios;
    }
}

module.exports = Usuario;