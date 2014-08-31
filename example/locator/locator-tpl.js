(function(module) {
try { app = angular.module("locator"); }
catch(err) { app = angular.module("locator", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("location-lookup.html",
    "<div\n" +
    "  class=\"search-box\">\n" +
    "  <form>\n" +
    "    <label>search by city (usa &amp; canada)</label>\n" +
    "    <input\n" +
    "      location-predictions\n" +
    "      type=\"search\"\n" +
    "      ng-model=\"query\"\n" +
    "      results=\"results\">\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Search Results -->\n" +
    "<ul>\n" +
    "  <li\n" +
    "    ng-repeat=\"option in results | limitTo:limitTo\"\n" +
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
    "<ion-list ng-if=\"options.length > 0\">\n" +
    "  <ion-item \n" +
    "    ng-repeat=\"option in options\" \n" +
    "    ng-click=\"pickLocation(option); locationPicker.hide()\"\n" +
    "    item=\"option\">{{option.formatted_address}}</ion-item>\n" +
    "</ion-list>");
}]);
})();
