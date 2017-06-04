var app = angular.module('WorldBankApp', [])
   
app.controller('WorldBankController', ['$http', '$scope', function ($http, $scope) {

    var vm = this;
    vm.totalRecords = '';
    vm.regions = '';
    vm.infos = "";
    vm.formInfo = {};

    $http
        .get('/wbInfo/count')
        .then(function (response) {
            vm.totalRecords = response.data;
        })

    $http
        .get('/wbInfo/uniqueRegions')
        .then(function (response) {
            vm.regions = response.data;
        })

    this.getRegionInfo = function (name) {
        $http
            .get('/wbInfo/byName/' + name)
            .then(function (response) {
                vm.infos = response.data;
            }),
            function (err) {
                console.log(err);
            }
    }

    //this is to add a new record: it will automatically display the region name
	this.addRecord = function() {
		console.log("Hey it worked");
		$http({
			method: 'POST',
			url: '/wbinfo',
			data: this.formInfo
		}).then(
		function(response) {
			//push this formdata into the regions array
			vm.regions.push(response.data.region);
			//reset & clears the form
			vm.formInfo = {};
		}),
		function(err) {
			console.log(err);
		}
	};

    this.edit = function (data, index) {
        var id = data._id
        $http({
            method: 'PUT',
            url: '/wbinfo/' + id,
            data: this.infos[index]})
            .then(function (response) {
            }),
            function (err) {
                console.log(err);
                console.log('update');
            }
    };

	this.delete = function(data, index) {
		//get the id of the data coming in; this is used to access the URL below
		var id = data._id;
		// console.log("delete button fired: ", data._id)
		$http({
			method: 'DELETE',
			url: '/wbinfo/' + id,
			data: this
		}).then( 
			function(response) {
		
			vm.infos.splice(index, 1);
			vm.regions.pop(response.data.region);
		}),
		function(err) {
			console.log(err);
            console.log('delete');
		}
	};

}]);