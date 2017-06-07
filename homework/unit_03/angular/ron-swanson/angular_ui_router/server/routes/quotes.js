var express = require('express');
var router = express.Router();
var Quote = require('../../models/quote.js');

//your routes here

module.exports = router;

// GET
router.get('/', function(request, response) {
  Quote.find({}).exec(function(error, quotes) {
    if(error) { console.log(error); }
    console.log(quotes);
    response.json({quotes: quotes});
    //could be response.json({ quotes })
  })
});

// router.get(‘/’, function(request, response) {
//   Quote.find(function(error, quotes) {
//     if(error) response.json({message: ‘Could not find any quote’});

//    response.json({quotes: quotes});
//   });
// });

// // POST
// router.post(‘/’, function(request, response) {
//   console.log(‘in POST’);
//   console.log(‘body:‘,request.body);

//  var quote = new Quote(request.body);

//  quote.save(function(error) {
//     if(error) response.json({messsage: ‘Could not save quote b/c:’ + error});

//    response.json({quote: quote});
//   });
// });
