(function (angular) {
	'use strict'

	angular.module('chefSocial')
	.controller('dashboard', ['$scope', 'UserService', function ($scope, UserService){

		$scope.logout = function(){
			UserService.logout()
				.then(
					function(data){

					}, 
					function(){

					}
				);	
		}

	}]);
})(window.angular);