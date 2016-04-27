(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.service('UserService', ['$http', '$q', '$localStorage', function ($http, $q, $localStorage){
			
			var self = this;
			this.login = function (){
				var defer = $q.defer();
				var data = {
					'email': 'rox.rachit@gmail.com',
					'password': 'password'
				}
				$http.post('http://localhost:3000/auth/sign_in', data)
				.success(function (data, status, headers){
					self.logged_in_user = data['data'];
					captureUserCredentials(self, headers);
					defer.resolve(data);
				})
				.error(function (data){
					defer.reject(data);
				});
				return defer.promise;
			}

			this.logout = function (data){
				var defer = $q.defer();
				console.log("data posted to delete user is below...");
				console.log(data);
				// $http.delete('http://localhost:3000/auth/sign_out', data)
				// .success(function (data){
				// 	defer.resolve(data);
				// })
				// .error(function (data){
				// 	defer.reject(data);
				// });
				$http({
					method: 'DELETE',
					url: 'http://localhost:3000/auth/sign_out',
					headers: data
				})
				.success(function (data){
					defer.resolve(data);
				})
				.error(function (data){
					defer.reject(data);
				});
				return defer.promise;
			}

			var captureUserCredentials = function(self, data){
				$localStorage.logged_in_user = $localStorage.logged_in_user || {};
				$localStorage.logged_in_user.credentials = {
					'access-token': data()['access-token'],
					'client': data()['client'],
					'uid': data()['uid']
				}
				console.log("logged_in_user.credentials which are stored are below...");
				console.log($localStorage.logged_in_user.credentials);
			}

		}]);
})(window.angular);