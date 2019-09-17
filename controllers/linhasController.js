const Linha = require('../app/models');

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

exports.getEditarLinha = (req, res, next) => {
  const id = req.params.idLinha;
  Linha.getById(id)
    .then((linha) => {
      res.render('editarLinha',{
        linha:linha
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    })

}

exports.getNovaLinha = (req, res, next) => {
  res.render('novaLinha', {
    titulo: 'Nova Linha'
  });
};

exports.getLinhas = (req, res, next) => {
  Linha.listar()
    .then((linha) => {
      res.render('linhas', {
        linhas: linha,
      });
    });
}
