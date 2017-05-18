var express     = require('express');
var hbs         = require('hbs');
var bodyParser  = require('body-parser');
var router      = express.Router();
var piratesController = require('./controllers/piratesController.js');
var app         = express();
var port        = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: false
}));
	app.use(bodyParser.json());
    
app.use("/pirates", piratesController);

app.set('view engine', 'hbs');
/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});




app.listen(port, function() {
  console.info('Server Up -- Yar har har on port', port,"//", new Date());
});