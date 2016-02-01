'use strict';

angular.module('chefSocial.version', [
  'chefSocial.version.interpolate-filter',
  'chefSocial.version.version-directive'
])

.value('version', '0.1');
