const Linha = require('../database/index').Sac;

exports.postNovoSac =  (req, res, next) =>{
  Sac.create(req.body)
  .then((saque) => {
    res.redirect('http://localhost:3000/sac/').status(200);
  }).catch(console.error);
};

exports.postEditarSac =  (req, res, next) =>{
  let sacId = req.params.idSac;
  Sac.findByPk(sacId).then(sac => {
    sac.update(req.body).then(() => {
        res.redirect('http://localhost:3000/sac/').status(200);
    });
  }).catch(console.error);
};


exports.getEditarSac = (req, res, next) => {
  const id = req.params.idSac;
  Sac.findByPk(id)
    .then((sac) => {
      res.render('sac/formSac',{
        sac:sac,
        formAction: '/sacs/editar/' + sac.id,
        title:'Editar Sac',
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    })

}
exports.getExcluirSac = (req, res, next) => {
  let sacId = req.params.idSac;
  Sac.findByPk(sacId).then(sac => {
    return sac.destroy();
  }).then(() => {
    res.redirect('/sac');
  }).catch(console.error);
};
exports.getNovoSac = (req, res, next) => {
  res.render('sac/formSac', {
    formAction:"/sac/novo",
    sac: Sac.build({}),
    title: 'Novo Sac'
  });
};

exports.getSac = (req, res, next) => {
  Linha.findAll({
    role: 'Sac'
  })
  .then(sac => {
    // res.render('linha/sac',{
    //     sac:sac,
    // });
    res.json({'sac': sac});
  });  

}