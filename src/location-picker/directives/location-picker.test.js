'use strict';

describe('Location Picker Directive', function() {

  var $compile, scope, $log, location, reverseGeocoder;

  beforeEach(module('locator'));

  beforeEach(function () {
    $compile = getService('$compile');
    scope = getService('$rootScope').$new();
    $log = getService('$log');
    location = getService('location');
    reverseGeocoder = getService('reverseGeocoder');
  });

  it('should display loading message', function() {
    var element = $compile('<location-picker ng-model="pickedLocation" limit-to="5"></location-picker>')(scope);
    scope.$digest();

    var liElement = element.find('li');

    expect(liElement.html()).to.match(/Loading …/i);
  });


  it('should display options', function() {
    var element = $compile('<location-picker ng-model="pickedLocation" limit-to="5"></location-picker>')(scope);
    scope.$digest();

    element.isolateScope().options = geocodeResults;
    element.isolateScope().$digest();

    var liElement = element.find('li');

    expect(liElement.html()).to.match(/Ontario, Canada/i);
    expect(liElement.length).to.equal(2);
  });


  it('should update the model if an option is selected', function() {

    location.current = testLoc;

    var element = $compile('<location-picker ng-model="pickedLocation" limit-to="5"></location-picker>')(scope);
    scope.$digest();

    element.isolateScope().options = geocodeResults;
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