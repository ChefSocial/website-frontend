(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.service('AuthService', ['$http', '$q', '$localStorage', function ($http, $q, $localStorage){
			
			var self = this;
			
			this.validateToken = function (data){
				var defer = $q.defer();
				$http({
					method: 'DELETE',
					url: 'http://localhost:3000/auth/sign_out',
					headers: data
				})
				.success(function (data, status, headers){
					defer.resolve(data);
				})
				.error(function (data){
					defer.reject(data);
				});
				return defer.promise;
			}

		}]);
})(window.angular);