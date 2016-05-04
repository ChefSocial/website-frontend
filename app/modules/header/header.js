(function (angular){
	'use strict';

	angular.module('chefSocial')
		.directive('csHeader', function(){
			return{
				templateUrl: '/modules/header/header.html',
				controller: ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope){

					$scope.gotoLogin = function(){
						$state.go('app.login');
					};

					$scope.gotosignUp = function(){
						$state.go('app.sign_up');
					};

				}]
			};
		});
})(window.angular);