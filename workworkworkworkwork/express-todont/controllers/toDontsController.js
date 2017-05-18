var express     = require('express');
var router = express.Router();
var data = require('../data.js');

//route
router.get('/', function(req,res) {
res.render('../views/toDonts/index', {
    todos: data.seededToDonts
  });

});
module.exports = router;