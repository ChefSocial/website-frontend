'use strict';

// Declare app level module which depends on views, and components
angular.module('chefSocial', [
  'ngRoute',
  'chefSocial.view1',
  'chefSocial.view2',
  'chefSocial.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
