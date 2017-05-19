var express = require('express');
var router = express.Router();
var data = require('../models/pirates.js');

//INDEX PIRATES
router.get('/', function(req,res) {
  res.render('../views/index.hbs', {
    pirates: data,
    numberOfPirates: data.length
  });
});

// NEW PIRATE
router.get('/new', function(req, res){
  res.render('../views/new.hbs');
});

//SHOW PIRATE
router.get('/:id', function(req,res) {
  var pirate = data[req.params.id];

  res.render('../views/show.hbs', {
    pirate: pirate
  });
});

//CREATE/POST PIRATE
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

/* EDIT PIRATES */
router.get('/:id/edit', function(req, res) {
  res.render('../views/edit.hbs', {
    pirates: {
      name: data[req.params.id].name,
      birthplace: data[req.params.id].birthplace,
      death_year: data[req.params.id].death_year,
      base: data[req.params.id].base,
      nickname: data[req.params.id].nickname,
      id: req.params.id
    }
  });
});

/* UPDATE TODO */
router.put('/:id', function(req, res) {
  var pirateEdit = data[req.params.id];
  console.log(req.params.id)
    pirateEdit.name = req.body.name,
    pirateEdit.birthplace = req.body.birthplace,
    pirateEdit.death_year = req.body.death_year,
    pirateEdit.base = req.body.base,
    pirateEdit.nickname = req.body.nickname

  res.redirect('/pirates');
});

/* DELETE TODO */
router.delete('/:id', function(req, res) {
  data.splice(req.params.id, 1);

  res.redirect('/pirates');
});


module.exports = router;
