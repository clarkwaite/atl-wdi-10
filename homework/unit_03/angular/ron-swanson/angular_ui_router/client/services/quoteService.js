angular.module('RonSwansonApp')
  .service('QuoteService', QuoteService);

QuoteService.$inject = ['$http'];

function QuoteService($http){
  console.log("$QuoteService ready for action!");

  this.getQuote = function() {
    return $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(function(quoteResponse) {
        return quoteResponse.data.data.image_url;
      });
    }
  
};
