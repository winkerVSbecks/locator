'use strict';

var navigator = {
  geolocation: {
    getCurrentPosition: function() {}
  }
};

var expect = chai.expect;

var getService = function(serviceName) {
  var injectedService;

  inject([serviceName, function(serviceInstance) {
    injectedService = serviceInstance;
  }]);

  return injectedService;
};

var testLoc = {
  latitude: 43.6533137,
  longitude: -79.3683951
};
var loc = {
  coords: testLoc
};