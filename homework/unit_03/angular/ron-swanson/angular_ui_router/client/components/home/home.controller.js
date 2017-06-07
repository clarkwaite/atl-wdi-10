HomeController.$inject = [];

function HomeController() {

  // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
  const vm = this;
console.log('HomeController');
  // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
  activate();

  function activate() {

  }
}

module.exports = HomeController;

