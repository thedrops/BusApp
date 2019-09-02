const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.render('index', {
    titulo: 'Bus App'
  });
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000);
