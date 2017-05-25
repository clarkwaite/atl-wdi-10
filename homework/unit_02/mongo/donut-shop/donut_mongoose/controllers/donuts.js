//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/donut_mongoose');
var db = mongoose.connection;

var Donut = require("../models/donuts.js");

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', function(req, res) {
    Donut.find({})
    .exec(function(err, users) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(users);
        res.send(users);
    })
});


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form



//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page




//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"



//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it



//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"



//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;

// USER UPDATE ROUTE
router.patch('/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    email: req.body.email
  }, {new: true})
  .exec(function(err, user) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(user);
    res.send(user);
  });
});


// USER DESTROY
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if(err) console.log(err);

    console.log('User deleted!');
    res.send("User deleted");
  });
});

// ADD A NEW ITEM
router.post('/:id/items', function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    user.items.push(new Item({name: req.body.name}));
    user.save(function(err) {
      if (err) console.log(err);

      res.send(user);
    });
  });
});

// REMOVE AN ITEM
router.delete('/:userId/items/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.userId, {
    $pull: {
      items: {_id: req.params.id}
    }
  })
  .exec(function(err, item) {
    if (err) console.log(err);

    res.send(item + " Item deleted");
  });
});
