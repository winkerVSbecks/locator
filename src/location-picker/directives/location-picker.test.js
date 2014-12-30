'use strict';

describe('Location Picker Directive', function() {

  var $compile, scope, $log, location, reverseGeocoder, $templateCache;

  beforeEach(module('locator'));

  beforeEach(function () {
    $compile = getService('$compile');
    scope = getService('$rootScope').$new();
    $log = getService('$log');
    location = getService('location');
    reverseGeocoder = getService('reverseGeocoder');
  });

  beforeEach(inject(function( $templateCache) {
    var template = $templateCache.get('src/location-picker/directives/location-picker.html');
    $templateCache.put('location-picker/location-picker.html', template);
  }));


  it('should display loading message', function() {
    var element = $compile('<location-picker ng-model="pickedLocation" limit-to="5"></location-picker>')(scope);
    scope.$digest();

    var liElement = element.find('li');

    expect(liElement.html()).to.match(/Loading …/i);
  });


  it('should display options', function() {
    var element = $compile('<location-picker ng-model="pickedLocation" limit-to="5"></location-picker>')(scope);
    scope.$digest();

    element.isolateScope().options = [{
      "address_components": [{
        "long_name": "Ontario",
        "short_name": "ON",
        "types": [
          "administrative_area_level_1",
          "political"
        ]
      }, {
        "long_name": "Canada",
        "short_name": "CA",
        "types": [
          "country",
          "political"
        ]
      }],
      "formatted_address": "Ontario, Canada",
      "geometry": {
        "bounds": {
          "Ea": {
            "k": 41.6801344,
            "j": 56.8565279
          },
          "wa": {
            "j": -95.15622710000002,
            "k": -74.34388230000002
          }
        },
        "location": {
          "k": 51.253775,
          "D": -85.32321389999998
        },
        "location_type": "APPROXIMATE",
        "viewport": {
          "Ea": {
            "k": 41.6803864,
            "j": 56.8565279
          },
          "wa": {
            "j": -95.155081,
            "k": -74.34388230000002
          }
        }
      },
      "types": [
        "administrative_area_level_1",
        "political"
      ]
    }];
    element.isolateScope().$digest();

    var liElement = element.find('li');

    expect(liElement.html()).to.match(/Ontario, Canada/i);
    expect(liElement.length).to.equal(1);
  });


  it('should update the model if an option is selected', function() {

    location.current = {
      latitude: 43.6533137,
      longitude: -79.3683951
    };

    var element = $compile('<location-picker ng-model="pickedLocation" limit-to="5"></location-picker>')(scope);
    scope.$digest();

    element.isolateScope().options = [{
      "address_components": [{
        "long_name": "Ontario",
        "short_name": "ON",
        "types": [
          "administrative_area_level_1",
          "political"
        ]
      }, {
        "long_name": "Canada",
        "short_name": "CA",
        "types": [
          "country",
          "political"
        ]
      }],
      "formatted_address": "Ontario, Canada",
      "geometry": {
        "bounds": {
          "Ea": {
            "k": 41.6801344,
            "j": 56.8565279
          },
          "wa": {
            "j": -95.15622710000002,
            "k": -74.34388230000002
          }
        },
        "location": {
          "k": 51.253775,
          "D": -85.32321389999998
        },
        "location_type": "APPROXIMATE",
        "viewport": {
          "Ea": {
            "k": 41.6803864,
            "j": 56.8565279
          },
          "wa": {
            "j": -95.155081,
            "k": -74.34388230000002
          }
        }
      },
      "types": [
        "administrative_area_level_1",
        "political"
      ]
    }];
    element.isolateScope().$digest();

    element.isolateScope().pickLocation(element.isolateScope().options[0]);

    expect(scope.pickedLocation).to.deep.equal({
      latitude: 43.6533137,
      longitude: -79.3683951,
      name: 'ON',
      description: 'Ontario, Canada'
    });
  });

});