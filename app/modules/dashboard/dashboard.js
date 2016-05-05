(function (angular) {
	'use strict'

	angular.module('chefSocial')
	.controller('dashboard', ['$rootScope', '$scope', 'UserService', '$localStorage', '$state', 'ChefService', function ($rootScope, $scope, UserService, $localStorage, $state, ChefService){

		var init = function(){
			ChefService.fetchChefs()
				.then(
					
				);
		};

		$scope.logout = function (){
			UserService.logout($localStorage.logged_in_user.credentials)
				.then(
					function(data){
						$scope.loggedInUserData = data;
						console.log("Successfully logged out");
						$state.go('app.login');
						$rootScope.$emit('showAlert', {'status':'success', 'message':'You have successfully logged out.'});
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