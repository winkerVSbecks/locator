angular.module('locator')
  .directive('locationPicker', ['$log', 'location', 'reverseGeocoder',
    function($log, location, reverseGeocoder) {

      'use strict';

      return {
        restrict: 'E',
        require: '?ngModel',
        templateUrl: 'location-picker.html',
        link: function(scope, iElement, iAttrs, model) {
          // Get options
          location.ready(function() {
            reverseGeocoder.geocode(location.current).then(
              function(results) {
                scope.options = results;
                console.log('####', results)
              }, $log.error);
          });

          // Pick A Option
          scope.pickLocation = function(locData) {
            var locData = {
              latitude: location.current.latitude,
              longitude: location.current.longitude,
              name: locData.address_components[0].short_name,
              description: locData.formatted_address
            };
            // Update model
            model.$setViewValue(locData);
          };
        }
      }
    }
  ]);