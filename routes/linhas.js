const express = require('express');

const router = express.Router();

const linhasController = require('../controllers/linhasController');

app.post('/register', async (req, res) => {
    const linha = await Linha.create(req.body);
    res.json(linha);
  });
router.post('/nova', linhasController.postNovaLinha);

router.get('/nova', linhasController.getNovaLinha);

router.get('/editar/:idLinha', linhasController.getEditarLinha);

router.get('/', linhasController.getLinhas);
  
module.exports = router;