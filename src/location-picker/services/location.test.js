'use strict';

describe('Location service:', function () {
  var location;
  var navStub = sinon.stub(navigator.geolocation, 'getCurrentPosition');

  beforeEach(module('locator'));

  beforeEach(function () {
    location = getService('location');
  });


  it('should exist', function () {
    expect(location).to.be.an('object');
    expect(location.get).to.be.a('function');
    expect(location.ready).to.be.a('function');
    expect(location.onReadyTasks).to.be.a('function');
    expect(location.isReady).to.be.false
    expect(location.gpsAvailable).to.be.true
  });


  it('should get current location', function () {
    navStub.callsArgWith(0, loc);

    location.get(function() {
      expect(location.current).to.be.an('object');
      expect(location.current).to.deep.equal(testLoc);
    });
  });


  it('should fail if GPS not available', function () {
    navStub.callsArgWith(1, {
      code: 2,
      message: 'Location information is unavailable.'
    });

    location.get(null, function() {
      expect(location.gpsAvailable).to.be.false;
    });
  });


  it('should execute registered tasks if ready', function () {
    var callback = sinon.spy();

    location.isReady = true;
    location.ready(callback);

    sinon.assert.called(callback);
  });
});