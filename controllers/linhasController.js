const Linha = require('../database/index').Linha;

exports.postNovaLinha =  (req, res, next) =>{
  Linha.create(req.body)
  .then((linha) => {
    res.redirect('linha/formLinha');
  }).catch(console.error);
};

exports.postEditarLinha =  (req, res, next) =>{
  let linhaId = req.params.idLinha;
  Linha.findByPk(linhaId).then(linha => {
    linha.update(req.body).then(() => {
      res.redirect('linha/linhas');
    });
  }).catch(console.error);
};


exports.getEditarLinha = (req, res, next) => {
  const id = req.params.idLinha;
  Linha.findByPk(id)
    .then((linha) => {
      res.render('linha/formLinha',{
        linha:linha,
        formAction: '/linha/editar/' + linha.id,
        title:'Editar Linha',
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
    res.redirect('linha/linhas');
  }).catch(console.error);
};
exports.getNovaLinha = (req, res, next) => {
  res.render('linha/novaLinha', {
    formAction:"/linha/nova",
    linha: Linha.build({}),
    title: 'Nova Linha'
  });
};

exports.getLinhas = (req, res, next) => {
  Linha.findAll({
    role: 'Linha'
  })
  .then(linhas => {
    res.render('linha/linhas',{
        linhas:linhas,
    });
  });  

}