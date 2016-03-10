(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.controller('logout', ['$rootScope', '$scope', 'UserService', function ($rootScope, $scope, UserService){

			$scope.logout = function (){
				UserService.logout(UserService.credentials)
					.then(
						function(data){
							$scope.loggedInUserData = data;
							console.log("Successfully logged in with user data as below:");
							console.log(data);
							// Show an alert of successful logout
							// transition to the dashboard state
							$state.go('app.dashboard');
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