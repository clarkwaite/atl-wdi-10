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

app.get('/topping', function(req, res) {
  res.render("toppings", {
    data: req.query.type
  });
});

app.get('/order', function(req, res) {
    res.render("order", {
    data: [req.query.amount, req.query.size]
  });
});

app.get('/favorite-foods', function(req,res) {
 
 var favoriteFoods = ["Country Fried Steak", "Taco Bell", "Mashed Potatoes", "Reese's Peanut Butter Cups"]
 res.render('favorite-foods', {
        data: favoriteFoods
   });
});
