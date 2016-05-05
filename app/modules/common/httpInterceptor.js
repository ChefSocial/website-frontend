(function(angular) {
  'use strict';

  angular.module('chefSocial')
  .factory('httpInterceptor', ['$q','$localStorage', function ($q, $localStorage){

    var requestInterceptor = {
      request: function(config) {
        var deferred = $q.defer();
        someAsyncService.doAsyncOperation().then(function() {
                // Asynchronous operation succeeded, modify config accordingly
                ...
                deferred.resolve(config);
              }, function() {
                // Asynchronous operation failed, modify config accordingly
                ...
                deferred.resolve(config);
              });
        return deferred.promise;
      }
    };

    return requestInterceptor;
  }])

})(window.angular);