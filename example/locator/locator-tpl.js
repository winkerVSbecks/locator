(function(module) {
try { app = angular.module("locator"); }
catch(err) { app = angular.module("locator", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("location-lookup/location-lookup.html",
    "<div class=\"search-box\">\n" +
    "  <location-predictions results=\"results\"></location-predictions>\n" +
    "</div>\n" +
    "\n" +
    "<ul>\n" +
    "\n" +
    "  <!-- Results -->\n" +
    "  <li ng-repeat=\"option in results | limitTo:limitTo\"\n" +
    "    ng-click=\"pickLocation(option);\"\n" +
    "    item=\"option\">{{option.description}}</li>\n" +
    "\n" +
    "</ul>");
}]);
})();

(function(module) {
try { app = angular.module("locator"); }
catch(err) { app = angular.module("locator", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("location-picker/location-picker.html",
    "<ul>\n" +
    "\n" +
    "  <!-- Reverse Geocode Results -->\n" +
    "  <li ng-repeat=\"option in options | limitTo:limitTo\"\n" +
    "    ng-click=\"pickLocation(option)\"\n" +
    "    item=\"option\">{{option.formatted_address}}</li>\n" +
    "\n" +
    "  <!-- Loading -->\n" +
    "  <li ng-if=\"!options\">Loading &hellip;</li>\n" +
    "\n" +
    "</ul>");
}]);
})();
