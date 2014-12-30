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