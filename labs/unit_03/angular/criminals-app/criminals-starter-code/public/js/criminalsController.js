//standard boilerplate -use the title of the angular app
angular.module('InfamousCriminals', [])
    //name the controller
    .controller('CriminalsController', CriminalsController);
//telling the app that we are using $http, and this allows us to use it inside the controller
CriminalsController.$inject = ['$http']



//this begins the criminals controller - everything (routes) will go inside of this
function CriminalsController($http) {


    var vm = this;
    vm.all = [];
    //vm.newCriminal tells the function to expect an object item
    vm.newCriminal = {};
    vm.updateCriminal = updateCriminal;
    vm.deleteCriminal = deleteCriminal;

    console.log(vm.all);
    //get (url, [config]);
    function getCriminals() {
        $http
            .get('/criminals')
            .then(function (response) {
                vm.all = response.data.criminals;
            })
    };

    getCriminals();

    //vm.addCriminal allows you to call the function from the angular controller
    vm.addCriminal = addCriminal;

    function addCriminal() {
        $http
            .post('/criminals', vm.newCriminal)
            .then(function (response) {
                vm.all.push(response.data.criminal);
                console.log(vm.newCriminal);
                vm.newCriminal = {};
            });
    }

    function updateCriminal(criminal) {
        console.log('updateCriminal is called')
        $http
            .patch('/criminals/' + criminal._id, criminal)
            .then(function (response) {
                criminal.isEditing = false
            });
    }
    function deleteCriminal(criminalId) {
        $http
            .delete('/criminals/' + criminalId)
            .then(function (response) {
                getCriminals();
            });
    }
}