var express = require('express');
var router = express.Router();
var Quote = require('../../models/quote.js');

//your routes here

module.exports = router;

// GET
router.get('/', function(request, response) {
  Quote.find(function(error, quotes) {
    if(error) response.json({message: 'Could not find any quote'});

    response.json({quotes: quotes});
  })
});

// POST
router.post('/', function(request, response) {
  var quote = new Quote({quote: request.body.quote});
   quote.save(function(error) {
     if(error) {
     
     response.json({message: 'Could not save quote because of:' + error});
     return;
   }
    response.json({quote: quote});
});
//DELETE
router.delete('/:id', function(request, response) {
  var id = request.params.id;

  Quote.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete quote b/c:' + error});

    response.json({message: 'quote successfully deleted'});
  })
});

});