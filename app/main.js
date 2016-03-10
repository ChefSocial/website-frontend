(function(angular) {
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('chefSocial', [
	  'ui.bootstrap',
	  'ngRoute',
	  'ui.router'
	]).
	config(['$routeProvider', '$stateProvider', function ($routeProvider, $stateProvider) {
	  
	  $routeProvider.otherwise({redirectTo: '/login'});
	  $stateProvider
	  	.state('app', {
	  		views: {
	  			'content': {
	  				templateUrl: 'views/chefSocialApp.html'
	  			}
	  		},
	  		abstract: true
	  	})
	  	.state('app.login', {
	  		url: '/login',
	  		views: {
	  			'module': {
	  				templateUrl: 'modules/login/login.html',
	  				controller: 'login'
	  			}
	  		}
	  	});
	}]);
})(window.angular);