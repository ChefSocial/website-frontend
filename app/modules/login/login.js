(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.controller('login', ['$rootScope', '$scope', 'UserService', '$state', '$localStorage', function ($rootScope, $scope, UserService, $state, $localStorage){

			$scope.login = function (){
				var data = {
					'email': $scope.user.email,
					'password': $scope.user.password
				};
				UserService.login(data)
					.then(
						function(data){
							$scope.loggedInUserData = data;
							$state.go('app.dashboard');
							$rootScope.$emit('showAlert', {'status':'success', 'message':'Welcome to ChefSocial ' + data.data.email});
						},
						function(data){
							$rootScope.$emit('showAlert', {'status':'danger', 'message':data.errors[0]});
						}
					);
			}

		}]);
})(window.angular);