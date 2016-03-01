(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.service('LoginService', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q){
			
			this.signIn = function (){
				var defer = $q.defer();
				var data = {
					'email': 'rox.rachit@gmail.com',
					'password': 'password'
				}
				$http.post('http://localhost:3000/auth/sign_in', data)
				.success(function (data){
					defer.resolve(data);
				})
				.error(function (data){
					defer.reject(data);
				});
				return defer.promise;
			}

		}]);
})(window.angular);