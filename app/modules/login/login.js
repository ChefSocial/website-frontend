(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.controller('login', ['$rootScope', '$scope', 'UserService', '$state', '$localStorage', '$auth', 
			function ($rootScope, $scope, UserService, $state, $localStorage, $auth){

			$scope.login = function (){
				var userData = {
					'email': $scope.user.email,
					'password': $scope.user.password
				};
				UserService.login(userData);
			}

		}]);
})(window.angular);