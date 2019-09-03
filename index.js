const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

var usuarios = [
  {
    nome : 'João', 
    email : 'teste@gmail.com' ,
    senha : 'teste123',
  }
];

app.post('/usuarios/novo', (req, res, next) =>{
  let novoUsuario = {
    nome : req.body.nome,
    email : req.body.email,
    senha : req.body.senha,
  }
  usuarios.push(novoUsuario);
  res.redirect('/usuarios');
});

app.get('/usuarios/novo',(req, res, next) =>{
  res.render('novoUsuario');
});

app.get('/usuarios', (req, res, next) =>{
  res.render('usuarios',{
    'usuarios' : usuarios,
  })
});

app.get('/', (req, res, next) => {
  res.render('index', {
    titulo: 'Bus App'
  });
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000);
