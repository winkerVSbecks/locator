'use strict';

describe('Location Lookup directive', function() {

  var $compile, scope, element;

  beforeEach(module('locator'));

  beforeEach(function () {
    $compile = getService('$compile');
    scope = getService('$rootScope').$new();

    element = $compile('<location-lookup ng-model="lookedUpLocation" limit-to="4"></location-lookup>')(scope);
    scope.$digest();

    element.isolateScope().results = predictionsResults;
    element.isolateScope().$digest();
  });


  it('should display options', function() {
    var liElements = element.find('li');
    expect(liElements.length).to.equal(2);
  });


  it('should fetch details of the location', function() {
    element.isolateScope().pickLocation(predictionOption);

    expect(scope.lookedUpLocation).to.deep.equal({
      name: 'Delhi Street',
      description: 'Delhi Street, Guelph, ON, Canada',
      latitude: 43.5584753,
      longitude: -80.25752160000002
    });
  });

});