const path = require('path');
const fs = require('fs');

const dbPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'linhas.json'
);

class Linha {
    constructor(origem, destino, tarifa, horarioSaida){
        this.origem = origem;
        this.destino = destino;
        this.tarifa = tarifa;
        this.horarioSaida = horarioSaida;
    }

    salvar() {
        let linhas = [];
        try{
            let data = fs.readFileSync(dbPath);
            linhas = JSON.parse(data.toString()); 
        }
        catch(e){}

        linhas.push(this);
        fs.writeFileSync(dbPath, JSON.stringify(linhas));
    }

    static listar() {
        let linhas = [];
        try{
            let data = fs.readFileSync(dbPath);
            linhas = JSON.parse(data.toString()); 
        }
        catch(e){}
        return linhas;
    }
}

module.exports = Linha;