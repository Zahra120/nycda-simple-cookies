const express = require('express'),
      cookieParser = require('cookie-parser'),
      pug = require('pug');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index', { visited: req.cookies.visited });
});

app.listen(3000, () => {
  console.log('Web server running on port 3000');
});
