console.log("Quotes Controller Works!")

//Your QUOTES CONTROLLER HERE!

QuotesController.$inject = ['QuotesService'];

function QuotesController(QuotesService) {
	const vm = this;

	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.quotes = [];
	vm.loading = true;


	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		getQuote();
	}


	// HOW IT DOES STUFF
	function getQuote() {
		QuotesService
			.getQuote()
			.then(function resolve(response) {
				console.log(response)
				vm.quotes = response.data.quotes; // array of quotes
				vm.loading = false;
			});
	}
}

module.exports = QuotesController;