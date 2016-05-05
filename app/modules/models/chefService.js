(function (angular) {
	'use strict';

	angular.module('chefSocial')
		.service('ChefService', ['$http', '$q', function ($http, $q){


			var self = this;

			this.fetchChefs = function(){
				var defer = $q.defer();
				$http.get('http://localhost:3000/chefs')
					.success(function (data){
						defer.resolve(data);
					})
					.error(function (data){
						defer.reject(data);
					});
					return defer.promise;
			};
		}]);
})(window.angular);