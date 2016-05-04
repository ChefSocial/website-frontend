(function (angular){
	'use strict';

	angular.module('chefSocial')
		.directive('csHeader', function(){
			return{
				templateUrl: '/modules/header/header.html',
				controller: ['$scope', '$rootScope', function ($scope, $rootScope){

				}]
			};
		});
})(window.angular);