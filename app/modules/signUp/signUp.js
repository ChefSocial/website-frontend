(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.controller('signUp', ['$rootScope', '$scope', '$state', 'UserService', function ($rootScope, $scope, $state, UserService){
			
			$scope.signUp = function (){
				var data = {
					'email': $scope.user.email,
					'password': $scope.user.password,
					'password_confirmation': $scope.user.confirmPassword,
					'config_name': $scope.user.username,
					'confirm_success_url': 'http://localhost:3000'
				};
				UserService.signUp(data)
					.then(
						function(data){
							$scope.loggedInUserData = data;
							// $state.go('app.dashboard');
							$rootScope.$emit('showAlert', {'status':'success', 'message':'A confirmation link has been sent to ' + data.email + '. Please confirm your Email ID to login.'});
						},
						function(data){
							$rootScope.$emit('showAlert', {'status':'danger', 'message':data.errors.full_messages[0]});
						}
					);
			};
		}]);
})(window.angular);