(function(module) {
try { app = angular.module("locator"); }
catch(err) { app = angular.module("locator", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("location-lookup.html",
    "<div class=\"search-box\">\n" +
    "  <location-predictions results=\"results\"></location-predictions>\n" +
    "</div>\n" +
    "\n" +
    "<ul>\n" +
    "  <li ng-repeat=\"option in results | limitTo:limitTo\"\n" +
    "    ng-click=\"pickLocation(option);\"\n" +
    "    item=\"option\">{{option.description}}</li>\n" +
    "</ul>");
}]);
})();

(function(module) {
try { app = angular.module("locator"); }
catch(err) { app = angular.module("locator", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("location-picker.html",
    "<h1 class=\"text-center padding\" ng-if=\"!options\">\n" +
    "  <i class=\"icon ion-ios7-reloading\"></i>\n" +
    "</h1>\n" +
    "\n" +
    "<!-- Reverse Geocode Results -->\n" +
    "<ul ng-if=\"options.length > 0\">\n" +
    "  <li ng-repeat=\"option in options | limitTo:limitTo\"\n" +
    "    ng-click=\"pickLocation(option)\"\n" +
    "    item=\"option\">{{option.formatted_address}}</li>\n" +
    "</ul>");
}]);
})();
