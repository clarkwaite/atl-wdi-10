var express = require('express');
var app     = express();

var hbs = require('hbs');
app.set("view engine", "hbs");
app.set('views', './views');

var port    = 3000;
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

app.get('/', function(req, res) { 
  // when a request comes in at localhost:3000, it will respond 
  res.send('Welcome to Pizza Express!');
});

app.get('/topping/:type', function(req, res, next) {
  // when a request comes in at localhost:3000, it will respond 
  res.send(`${req.params.type} pizza! Good choice!`);
});

app.get('/order/:amount/:size', function(req, res, next) {
  // when a request comes in at localhost:3000, it will respond 
  res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`);
});
