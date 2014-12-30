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

    return reverseGeocoder.geocode(testLoc)
            .then(function(geocodeResults) {
              expect(geocodeResults).to.be.instanceof(Array);
              expect(geocodeResults).to.deep.equal(geocodeResults);
            }, console.error);
  });

});