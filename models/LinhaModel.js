const path = require('path');
const fs = require('fs');
const uuid = require('uuid/v4');

const dbPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'linhas.json'
);

class Linha {
    constructor(origem, destino, tarifa, horarioSaida,id){
        if(!id){
            this.id = uuid();
        }
        else{
            this.id = id;
        }
        this.origem = origem;
        this.destino = destino;
        this.tarifa = tarifa;
        this.horarioSaida = horarioSaida;
    }

    static getById(id){
        return lerLinhas()
            .then((linhas)=>{
                return linhas.find((element)=>{
                    return element.id == id;
                });
            })
    }

    salvar() {
        lerLinhas()
        .then((linhas)=>{
            linhas.push(this);
            fs.writeFileSync(dbPath, JSON.stringify(linhas));
        })
        .catch((err) => {
            console.log(err);
            let linhas = [this];
            fs.writeFileSync(dbPath, JSON.stringify(linhas));
        })
    }
    
    
    static listar(){
        return lerLinhas();
    }
}

    const lerLinhas = () => {

        return new Promise((resolve,reject) => {
            fs.readFile(dbPath, (err, data) => {
                if (err) {
                    return reject(linhas);
                }
                let linhas = JSON.parse(data.toString());
                return resolve(linhas);
        });
    });
    


    }



module.exports = Linha;