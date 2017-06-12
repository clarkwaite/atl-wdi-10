angular.module('RonSwansonApp')
  .service('QuotesService', QuotesService);

QuotesService.$inject = ['$http'];

function QuotesService($http) {

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
        return response;
      });
  };
  self.deleteQuote = function(quote){
    return $http.delete(`/quotes/${quote._id}`);
  };

};