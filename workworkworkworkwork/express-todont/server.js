// packages
var express     = require('express');
var hbs         = require('hbs');
//app settings
var app         = express();
var port        = process.env.PORT || 3000;

//require controllers
var toDontsController = require('./controllers/toDontsController.js');



//Views
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use('/toDonts', toDontsController);

//Home Page
app.get('/', function(req,res) {
  // res.send('This is our Home Page');
  res.send('This is the home page');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot toDonts on port', port,"//", new Date());
});