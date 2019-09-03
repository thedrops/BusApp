const linhas = [];

class Linha {
    constructor(origem, destino, tarifa, horarioSaida){
        this.origem = origem;
        this.destino = destino;
        this.tarifa = tarifa;
        this.horarioSaida = horarioSaida;
    }

    salvar() {
        linhas.push(this);
    }

    static listar() {
        return linhas;
    }
}

module.exports = Linha;