angular.module('locator', [])
  .factory('location', ['$log', '$q',
    function($log, $q) {

      var service = {
        isReady: false,
        gpsAvailable: true,
        detail: {}
      };

      var readyCallbacks = [];

      // Get Current Location
      service.get = function(s_cb, e_cb) {
        // Actually get location
        navigator.geolocation.getCurrentPosition(function(location) {
          // Geolocation is available
          service.gpsAvailable = true;
          // parse current location
          service.current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          };
          console.log('CORDOVA', 'Latitude: ' + location.coords.latitude + ' , Longitude: ' + location.coords.longitude);
          // Location is ready
          service.isReady = true;
          // Execute the on ready tasks
          service.onReadyTasks();
          // success callback
          s_cb();
        }, function(error) {
          service.gpsAvailable = false;
          console.log('CORDOVA', 'code: ' + error.code + 'message: ' + error.message);
          // error callback
          e_cb();
        });
      };

      // Execute registered tasks
      service.onReadyTasks = function() {
        for (var i = readyCallbacks.length - 1; i >= 0; i--) {
          readyCallbacks[i]();
        };
      };

      // Execute registered tasks if ready
      // or register tasks if not ready yet
      service.ready = function(callback) {
        if (service.isReady) {
          callback();
        } else {
          // If not ready yet, add it to this array
          // which will be called once location is ready
          readyCallbacks.push(callback);
        }
      };

      return service;
    }
  ]);