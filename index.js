const express = require('express');
const morgan = require('morgan');
 const bodyParser = require('body-parser');
 const cors = require('cors')


const usuarioRouter = require('./routes/usuarios');
const linhasRouter = require ('./routes/linhas');
const loginRouter = require ('./routes/login');

const app = express();

app.use(cors())
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/usuarios', usuarioRouter);
app.use('/linhas', linhasRouter);
app.use('/autenticacao', loginRouter);

app.get('/', (req, res, next) => {
  res.render('site/index', {
    titulo: 'Bus App'
  });
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

 app.listen(3001);
