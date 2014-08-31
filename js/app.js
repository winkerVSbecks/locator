'use strict';

angular.module('locatorDemo', [
  'locator'
])
  .controller('MainCtrl', ['$scope', 'location', function ($scope, location) {
  	location.get();
  }]);