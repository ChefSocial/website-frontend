(function(angular) {
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('chefSocial', [
	  'ui.bootstrap',
	  'ngRoute',
	  'ui.router',
	  'ngStorage',
	  'ng-token-auth'
	])
	.config(['$routeProvider', '$stateProvider', '$httpProvider', '$authProvider', 
		function ($routeProvider, $stateProvider, $httpProvider, $authProvider) {
	  
		$httpProvider.interceptors.push('httpInterceptor');

		$authProvider.configure({
	      apiUrl:                  'http://localhost:3000',
	      tokenValidationPath:     '/auth/validate_token',
	      signOutUrl:              '/auth/sign_out',
	      emailRegistrationPath:   '/auth',
	      // accountUpdatePath:       '/auth',
	      // accountDeletePath:       '/auth',
	      confirmationSuccessUrl:  window.location.href,
	      // passwordResetPath:       '/auth/password',
	      passwordUpdatePath:      '/auth/password',
	      passwordResetSuccessUrl: window.location.href,
	      emailSignInPath:         '/auth/sign_in',
	      storage:                 'cookies',
	      forceValidateToken:      false,
	      validateOnPageLoad:      true,
	      proxyIf:                 function() { return false; },
	      proxyUrl:                '/proxy',
	      omniauthWindowType:      'sameWindow',
	      authProviderPaths: {
	        github:   '/auth/github',
	        facebook: '/auth/facebook',
	        google:   '/auth/google'
	      }
	    });

	  	$stateProvider
	  	.state('app', {
	  		views: {
	  			'content': {
	  				templateUrl: 'views/chefSocialApp.html'
	  			}
	  		},
	  		abstract: true
	  	})
	  	.state('app.sign_up', {
	  		url: '/sign_up',
	  		views: {
	  			'module': {
	  				templateUrl: 'modules/signUp/signUp.html',
	  				controller: 'signUp'
	  			}
	  		},
	  		public: true
	  	})
	  	.state('app.login', {
	  		url: '/login',
	  		views: {
	  			'module': {
	  				templateUrl: 'modules/login/login.html',
	  				controller: 'login'
	  			}
	  		},
	  		public: true
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
	  		},
	  		resolve: {
	        	auth: function($auth) {
	            	return $auth.validateUser();
	          	}
	        }
	  	});
	  	$routeProvider.otherwise({redirectTo: '/login'});

	}]);
})(window.angular);

// ======================== NOTES ========================

// An abstract state will never be directly activated, but can provide inherited properties to its 
// common children states.