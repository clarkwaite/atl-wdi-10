var express = require('express');
var router = express.Router();
var data = require('../models/pirates.js');
// var data = require('../data.js');

/* INDEX PIRATES */
router.get('/', function(req,res) {
  res.render('../views/index.hbs', {
    pirates: data,
    numberOfPirates: data.length
  });
});

/* NEW PIRATE */
router.get('/new', function(req, res){
  res.render('../views/new.hbs');
});

/* SHOW PIRATE */
router.get('/:id', function(req,res) {
  var pirate = data[req.params.id];

  res.render('../views/show.hbs', {
    pirate: pirate
  });
});

// /* CREATE/POST PIRATE */
router.post('/', function(req, res){
  var newPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
  };
  
  data.push(newPirate);
  res.redirect('/pirates');
});


module.exports = router;
