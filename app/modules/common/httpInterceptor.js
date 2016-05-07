(function(angular) {
  'use strict';

  angular.module('chefSocial')
  .factory('httpInterceptor', ['$q','$localStorage', '$injector', function ($q, $localStorage, $injector){

    var requestInterceptor = {
      request: function(config) {
        var deferred = $q.defer();        
        
        deferred.resolve(config);
        
        return deferred.promise;
      }
    };

    return requestInterceptor;
  }])

})(window.angular);