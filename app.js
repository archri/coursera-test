(function() {
  'use strict';

  angular.module('SomeApplication', [])
  .filter('replaceSome', replaceSomeFilterFactory);

  function replaceSomeFilterFactory() {
    return function (input) {
      input = input || "";
      return input.replace(/some/g, "another");
    };
  }
})();
