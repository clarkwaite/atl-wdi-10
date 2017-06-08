//Your QUOTES CONTROLLER HERE!

QuotesController.$inject = ['QuotesService'];

function QuotesController(QuotesService) {
    const vm = this;
    vm.getQuote = getQuote;
    vm.quote = '';
    vm.favoriteQuotes = [];
    vm.saveQuote = saveQuote;
    vm.getQuotes = getQuotes;

    // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW

    // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
    activate();

    function activate() {
        getQuotes();
    }

    // HOW IT DOES STUFF
    function getQuote() {
        QuotesService.getQuote()
            .then(function resolve(response) {
                vm.quote = response.data[0]
            });
    }

    function saveQuote() {
        QuotesService.saveQuote(vm.quote).then(function resolve(response) {
            getQuotes();
        });
    };

    function getQuotes() {
        QuotesService.getQuotes().then(function resolve(response) {
            console.log(response);
            vm.favoriteQuotes=response.data.quotes;
        })
    };


};

module.exports = QuotesController;