//===========================
// REQUIREMENTS
//===========================
var express = require("express");
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
var hbs = require('hbs');

//===========================
// MIDDLEWARE
//===========================
//this is for morgan
app.use(logger("dev"));
//these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//set handlebars as view engine
app.set("view engine", "hbs");
app.set('views', './views');
    
app.use("/pirates", piratesController);

app.set('view engine', 'hbs');
/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});




app.listen(port, function() {
  console.info('Server Up -- Yar har har on port', port,"//", new Date());
});