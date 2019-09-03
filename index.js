const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const usuarioRouter = require('./routes/usuarios');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/usuarios', usuarioRouter);



app.get('/', (req, res, next) => {
  res.render('index', {
    titulo: 'Bus App'
  });
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000);
