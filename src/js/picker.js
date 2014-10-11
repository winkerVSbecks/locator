angular.module('locator')
  .directive('locationPicker', ['$log', 'location', 'reverseGeocoder',
    function($log, location, reverseGeocoder) {
      return {
        restrict: 'E',
        require: '?ngModel',
        scope: {},
        templateUrl: 'location-picker.html',
        link: function(scope, iElement, iAttrs, model) {
          scope.limitTo = scope.$eval(iAttrs.limitTo) || 15;
          // Get options
          location.ready(function() {
            reverseGeocoder.geocode(location.current).then(
              function(results) {
                scope.options = results;
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