(function() {
  'use strict';

  angular.module('NameCalculator', [])
  .filter('cipher', cipherFilterFactory)
  .controller('NameCalculatorController', function ($scope, cipherFilter) {
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.displayNumeric = function() {
      var totalNameValue = calculateNumerticForString($scope.name);
      $scope.totalValue = totalNameValue;
    };

    function calculateNumerticForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      var message
          = "Total Numeric value of person`s name is: " + totalStringValue;
      return cipherFilter(message);
    };
  });

  function cipherFilterFactory() {
    return function(message) {
      return message.replace(/\s/g, "pi");
    }
  }
})();
