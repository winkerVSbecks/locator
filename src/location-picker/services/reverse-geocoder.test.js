'use strict';

describe('Location service:', function () {
  var reverseGeocoder, $document;

  beforeEach(module('locator'));

  beforeEach(module(function($provide){
    $provide.service('$q', function() {
      return Q;
    });
  }));

  beforeEach(function () {
    reverseGeocoder = getService('reverseGeocoder');
    $document = getService('$document');
  });


  it('should exist', function () {
    expect(reverseGeocoder).to.be.an('object');
    expect(reverseGeocoder.geocode).to.be.a('function');
  });


  it('should fetch location results for the provided LatLng value', function () {

    reverseGeocoder.geocoder = new google.maps.Geocoder();

    var results = [{
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
    }, {
      "address_components": [{
        "long_name": "Canada",
        "short_name": "CA",
        "types": [
          "country",
          "political"
        ]
      }],
      "formatted_address": "Canada",
      "geometry": {
        "bounds": {
          "Ea": {
            "k": 41.6765559,
            "j": 83.0956562
          },
          "wa": {
            "j": -141.00187,
            "k": -52.619408599999986
          }
        },
        "location": {
          "k": 56.130366,
          "D": -106.34677099999999
        },
        "location_type": "APPROXIMATE",
        "viewport": {
          "Ea": {
            "k": 42,
            "j": 70
          },
          "wa": {
            "j": -142,
            "k": -50
          }
        }
      },
      "types": [
        "country",
        "political"
      ]
    }];

    return reverseGeocoder.geocode(testLoc)
            .then(function(results) {
              expect(results).to.be.instanceof(Array);
              expect(results).to.deep.equal(results);
            }, console.error);
  });

});