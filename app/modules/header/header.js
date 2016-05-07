(function (angular){
	'use strict';

	angular.module('chefSocial')
		.directive('csHeader', function(){
			return{
				templateUrl: '/modules/header/header.html',
				controller: ['$scope', '$state', '$rootScope', '$auth', 'UserService',
				function ($scope, $state, $rootScope, $auth, UserService){

					$scope.gotoLogin = function(){
						$state.go('app.login');
					};

					$scope.gotosignUp = function(){
						$state.go('app.sign_up');
					};

					$scope.logout = function (){
						UserService.logout();
					}

				}]
			};
		});
})(window.angular);