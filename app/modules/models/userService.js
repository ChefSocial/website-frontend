(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.service('UserService', ['$http', '$q', '$localStorage', '$auth', '$rootScope', '$state',
			function ($http, $q, $localStorage, $auth, $rootScope, $state){
			
			var self = this;
			
			this.signUp = function (userData){
				$auth.submitRegistration(userData)
			        .then(
			        	function(response) {
				          	// handle success response
				          $rootScope.$emit('showAlert', {'status':'success', 'message':'A confirmation link has been sent to ' + response.email + '. Please confirm your Email ID to login.'});
			        	},
			        	function(response) {
				          	// handle error response
				          $rootScope.$emit('showAlert', {'status':'danger', 'message':response.data.errors.full_messages[0]});
			        	})
			        .catch(function(data) {
			          // handle error response
			        });
			}

			this.login = function (userData){
				$auth.submitLogin(userData)
			        .then(
			        	function(data) {
				          	// handle success response
				          $state.go('app.dashboard');
				          $rootScope.$emit('showAlert', {'status':'success', 'message':'Welcome to ChefSocial ' + data.email});
			        	},
			        	function(data) {
				          	// handle success response
				          $rootScope.$emit('showAlert', {'status':'danger', 'message':data.errors[0]});
			        	})
			        .catch(function(data) {
			          // handle error response
			        });
			}

			this.logout = function (){
				$auth.signOut()
					.then(
						function(response) {
					        // handle success response
					        $state.go('app.login');
					        $rootScope.$emit('showAlert', {'status':'success', 'message':'You have successfully logged out ' + response.config.headers.uid });
					    },
					    function(response) {
					        // handle success response
					        $rootScope.$emit('showAlert', {'status':'danger', 'message':response.data.errors[0]});
					    })
					.catch(function(response) {
				        // handle error response
				    });
			}

		}]);
})(window.angular);