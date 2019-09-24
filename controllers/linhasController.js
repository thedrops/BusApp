const Linha = require('../database/index').Linha;

exports.postNovaLinha =  (req, res, next) =>{
  Linha.create(req.body)
  .then((linha) => {
    res.redirect('/linhas');
  }).catch(console.error);
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
exports.getExcluirLinha = (req, res, next) => {
  let linhaId = req.params.idLinha;
  Linha.findByPk(linhaId).then(linha => {
    return linha.destroy();
  }).then(() => {
    res.redirect('/linhas');
  }).catch(console.error);
};
exports.getNovaLinha = (req, res, next) => {
  res.render('novaLinha', {
    titulo: 'Nova Linha'
  });
};

exports.getLinhas = (req, res, next) => {
  Linha.findAll({
    role: 'Linha'
  })
  .then(linhas => {
    res.render('linhas',{
        linhas:linhas,
    });
  });  

}
