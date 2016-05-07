(function (angular) {
	'use strict'

	angular.module('chefSocial')
	.controller('dashboard', ['$rootScope', '$scope', '$localStorage', '$state', 'ChefService', '$auth',
		function ($rootScope, $scope, $localStorage, $state, ChefService, $auth){

			var init = function(){
				ChefService.fetchChefs()
					.then(
						function (response){
							// Success
							$scope.chefs = response.chefs;
							console.log("success....");
						}, 
						function (response){
							// Error
						});
			};
			init();

		}]);
})(window.angular);