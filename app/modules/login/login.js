(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.controller('login', ['$scope', 'LoginService', function ($scope, LoginService){

			$scope.login = function (){
				LoginService.signIn()
					.then(
						function(data){
							$scope.loggedInUserData = data;
							console.log(data);
						},
						function(){
							console.log('Something went wrong.');
						}
					);
			}

		}]);
})(window.angular);