const express = require('express'),
      session = require('express-session'),
      pug = require('pug');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }));

app.get('/', (req, res) => {
  console.log(req.session);

  var sess = req.session;

  if (sess.views) {
    sess.views++;
    res.send(
      '<p>views: ' + sess.views + '</p>' +
      '<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>'
    );
  } else {
    sess.views = 1;
    res.send('welcome to the session demo. refresh!');
  }
});

app.listen(3000, () => {
  console.log('Web server is listening on port 3000');
});
