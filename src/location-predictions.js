'use strict';

angular.module('locator')
  .directive('locationPredictions', [

    function() {
      return {
        restrict: 'A',
        scope: {
          ngModel: '=',
          results: '='
        },
        link: function(scope, iElement, iAttrs, model) {
          // Setup Google Auto-complete Service
          var service = new google.maps.places.AutocompleteService();
          // Fetch predictions based on query
          scope.fetch = function() {
            if (scope.ngModel)
              service.getPlacePredictions({
                input: scope.ngModel
              }, scope.fetchCallback);
          };
          // Display predictions to the user
          scope.fetchCallback = function(predictions, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              scope.results = null;
              return;
            } else {
              scope.results = predictions;
            }
          };
          // Refresh on every edit
          scope.$watch('ngModel', function() {
            scope.fetch();
          });
        }
      }
    }
  ]);

