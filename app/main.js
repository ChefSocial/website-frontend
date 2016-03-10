(function(angular) {
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('chefSocial', [
	  'ui.bootstrap',
	  'ngRoute',
	  'ui.router',
	  'ngStorage'
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
	  	})
	  	.state('app.logout', {
	  		url: '/logout',
	  		views: {
	  			'module': {
	  				templateUrl: 'modules/logout/logout.html',
	  				controller: 'logout'
	  			}
	  		}
	  	})
	  	.state('app.dashboard', {
	  		url: '/dashboard',
	  		views: {
	  			'module': {
	  				templateUrl: 'modules/dashboard/dashboard.html',
	  				controller: 'dashboard'
	  			}
	  		}
	  	});
	}]);
})(window.angular);