angular.module('RonSwansonApp')
  .service('QuotesService', QuotesService);

QuotesService.$inject = ['$http'];

function QuotesService($http) {
  console.log("QuotesService ready for action!");

  const self = this;

  self.getQuote = function () {
    return $http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(function (response) {
        return response;
      });
  };
  self.saveQuote = function (quoteToSave) {
    return $http.post('/quotes', { quote: quoteToSave })
  };
  self.getQuotes = function () {
    return $http.get('/quotes')
      .then(function (response) {
        console.log('this is diferent than before GET');
        return response;
      });
  };
  self.deleteQuote = function(quote){
    console.log(`/quotes/${quote._id}`);
    return $http.delete(`/quotes/${quote._id}`);
  };

};