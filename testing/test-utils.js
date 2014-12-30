'use strict';

var navigator = {
  geolocation: {
    getCurrentPosition: function() {}
  }
};

var expect = chai.expect;

var getService = function(serviceName) {
  var injectedService;

  inject([serviceName, function(serviceInstance) {
    injectedService = serviceInstance;
  }]);

  return injectedService;
};

var testLoc = {
  latitude: 43.6533137,
  longitude: -79.3683951
};
var loc = {
  coords: testLoc
};

var geocodeResults = [{
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

var predictionsResults = [{
  "description": "Delhi Street, Guelph, ON, Canada",
  "id": "2daf57a4a2c708b0286ba4144fc1b458b9e2c79e",
  "matched_substrings": [{
    "length": 5,
    "offset": 0
  }],
  "place_id": "EiBEZWxoaSBTdHJlZXQsIEd1ZWxwaCwgT04sIENhbmFkYQ",
  "reference": "CjQkAAAAId2u1LytVDu4KHdnrBcfP8C0jgYjm2B7NcArmDCCJkj5pvsxUmuip6aoDKiDpE-OEhCs1ElG0C0Y3oHXQ1v8me-QGhRdkKA8HSEhv2677G8KkNl8qbUgkg",
  "terms": [{
    "offset": 0,
    "value": "Delhi Street"
  }, {
    "offset": 14,
    "value": "Guelph"
  }, {
    "offset": 22,
    "value": "ON"
  }, {
    "offset": 26,
    "value": "Canada"
  }],
  "types": [
    "route",
    "geocode"
  ]
}, {
  "description": "Delhi Crescent, Unionville, ON, Canada",
  "id": "b34c7acd5d1cdf31186743ef96fbdfdef967f7d9",
  "matched_substrings": [{
    "length": 5,
    "offset": 0
  }],
  "place_id": "EiZEZWxoaSBDcmVzY2VudCwgVW5pb252aWxsZSwgT04sIENhbmFkYQ",
  "reference": "CjQqAAAAhNuuML92kjXZKJzp0pytLm4C5n-gQSzZmiyGPTbJh1ID4tWMcI0kPWj3J0HXtwO9EhD35HAvOwtCSMsTjGfD9BdHGhTeL4eSjeZKG5AxTPJoR_1XQP_egw",
  "terms": [{
    "offset": 0,
    "value": "Delhi Crescent"
  }, {
    "offset": 16,
    "value": "Unionville"
  }, {
    "offset": 28,
    "value": "ON"
  }, {
    "offset": 32,
    "value": "Canada"
  }],
  "types": [
    "route",
    "geocode"
  ]
}];