'use strict';

describe('Location Predictions Directive', function() {

  var $compile, scope;

  beforeEach(module('locator'));

  beforeEach(function () {
    $compile = getService('$compile');
    scope = getService('$rootScope').$new();
  });


  it('should fetch predictions if a query is entered', function() {
    var element = $compile('<location-predictions results="results"></location-predictions>')(scope);
    scope.$digest();

    var inputEl = element.find('input');
    inputEl.val('delhi');
    inputEl.triggerHandler('input');

    expect(scope.results.length).to.equal(2);
    expect(scope.results).to.deep.equal(predictionsResults);
  });

});