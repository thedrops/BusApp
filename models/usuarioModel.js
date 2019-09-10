const path = require('path');
const fs  = require('fs');
const uuid = require('uuid/v4');

const dbPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'usuarios.json'
);


const lerUsuarios = () =>{
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, (err, data) =>{
            if (err)
                return reject(err);
            
            let usuarios = JSON.parse(data.toString());
            return resolve(usuarios)
        })
    })       
}



class Usuario{

    constructor(nome,email,senha, id){
        if (!id){
            this.id = uuid();
        }else{
            this.id = id;
        }
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    
    static getById(id){
        return lerUsuarios()
            .then((usuarios) =>{
                return usuarios.find((element) =>{
                    return element.id == id;
                })
            })
    }

    salvar(){
        lerUsuarios() 
            .then((usuarios) => {
                usuarios.push(this);
                fs.writeFileSync(dbPath,JSON.stringify(usuarios));
            }).catch((err) =>{
                console.log(err);
                let usuarios = [this];
                fs.writeFileSync(dbPath,JSON.stringify(usuarios));
            }) 
    }

    

    static listar(){
        return lerUsuarios();
    }

}

module.exports = Usuario;