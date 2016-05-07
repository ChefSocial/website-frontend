(function(angular) {
  'use strict';

  angular.module('chefSocial')
  .factory('httpInterceptor', ['$q','$localStorage', '$injector', function ($q, $localStorage, $injector){

    var requestInterceptor = {
      request: function(config) {
        var deferred = $q.defer();
        var data = $localStorage.logged_in_user.credentials;
        console.log(config);
        if(config.url != 'http://localhost:3000/auth/validate_token'){
          $injector.get('AuthService').validateToken(data)
            .then(function() {
              // Asynchronous operation succeeded, modify config accordingly
              console.log("token validated...");
              deferred.resolve(config);
            }, function() {
              // Asynchronous operation failed, modify config accordingly
              
              deferred.resolve(config);
            });
        }
        deferred.resolve(config);
        return deferred.promise;
      }
    };

    return requestInterceptor;
  }])

})(window.angular);