(function() {
  'use strict';
  var x = 'hello';
  angular.module('myApp', [])
  .controller('myController', function ($scope) {
    $scope.name="Hristo";
    $scope.sayHello = function() {
      return "Hello";
    };
  });
})();
