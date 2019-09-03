const path = require('path');
const fs  = require('fs');

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
        let usuarios = [];
        try{
            let data = fs.readFileSync(dbPath);
            usuarios = JSON.parse(data.toString());
        }
        catch (e){}
        usuarios.push(this);
        fs.writeFileSync(dbPath,JSON.stringify(usuarios));
        
        usuarios.push(this);
    }
    static listar(){
        let usuarios = [];
        try{
            let data = fs.readFileSync(dbPath);
            usuarios = JSON.parse(data.toString());
        }
        catch (e){}
        return usuarios;
    }
}

module.exports = Usuario;