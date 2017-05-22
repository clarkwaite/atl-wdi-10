
var express = require('express');
var router = express.Router();

//SEARCH MOVIES
router.get('/', function(req, res) {
  res.render('search/index', {
  });
});

//Show Movie
router.get('/:id', function(req, res) {
  var imdbID = [req.params.id]
  res.render('search/show', {
    imdbID: imdbID
  });
});

module.exports = router;