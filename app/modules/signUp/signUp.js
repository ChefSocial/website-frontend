(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.controller('signUp', ['$rootScope', '$scope', '$state', 'UserService', '$auth',
			function ($rootScope, $scope, $state, UserService, $auth){
			
			$scope.signUp = function (){
				var userData = {
					'email': $scope.user.email,
					'password': $scope.user.password,
					'password_confirmation': $scope.user.confirmPassword,
					'config_name': $scope.user.username,
					'confirm_success_url': 'http://localhost:3000'
				};
				UserService.signUp(userData);
				
			};
		}]);
})(window.angular);