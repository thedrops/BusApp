const Linha = require('../models/linhaModel'); 

exports.postNovaLinha = (req, res, next) => {
    let novaLinha = new Linha(
      req.body.origem,
      req.body.destino,
      req.body.tarifa,
      req.body.horarioSaida,
    );

    novaLinha.salvar();
    res.redirect('/linhas');

};

exports.getNovaLinha = (req, res, next) => {
    res.render('novaLinha', {
      titulo: 'Nova Linha'
    });
};

exports.getLinhas = (req,res,next) => {
    res.render('linhas',{
      'linhas' : Linha.listar(),
    });
};

