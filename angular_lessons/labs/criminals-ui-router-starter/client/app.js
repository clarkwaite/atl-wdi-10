const angular = require('angular');
require('angular-ui-router');

angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
		})
		.state('criminals', {
			url: '/criminals',
		//if components name is 2 words such as CriminalsShow
		//it will be camel case in the component, but here it will be with a hyphen. criminals-show
			template: '<criminals></criminals>'
		})
		.state('criminalsNew', {
			url: '/criminals/new',
		//if components name is 2 words such as CriminalsShow
		//it will be camel case in the component, but here it will be with a hyphen. criminals-show
			template: '<criminals-new></criminals-new>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
		//if components name is 2 words such as CriminalsShow
		//it will be camel case in the component, but here it will be with a hyphen. criminals-show
			template: '<criminals-show></criminals-show>'
		});

	$urlRouterProvider.otherwise('/');
}
