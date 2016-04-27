(function (angular) {
	'use strict'

	angular.module('chefSocial')
	.controller('dashboard', ['$scope', 'UserService', '$localStorage', '$state', function ($scope, UserService, $localStorage, $state){

		$scope.logout = function (){
				UserService.logout($localStorage.logged_in_user.credentials)
					.then(
						function(data){
							$scope.loggedInUserData = data;
							console.log("Successfully logged out");
							// Show an alert of successful logout
							// transition to the dashboard state
							$state.go('app.login');
							// console.log(UserService);
						},
						function(){
							console.log('Something went wrong.');
							// Show an alert that credentials were wrong
							// Stay at the same state
						}
					);
			}

	}]);
})(window.angular);