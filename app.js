(function () {
  'use strict';

  angular.module('watchersApplication', [])
  .controller('watchersController', watchersController);

  watchersController.$inject = ['$scope'];
  function watchersController($scope) {
    $scope.setInitialValue = function () {
      $scope.number = 10;
    };

    $scope.incrementValue = function () {
      $scope.number++;
    };

    $scope.$watch('number', function (newValue, oldValue) {
      console.log("old: ", oldValue);
      console.log("new: ", newValue);
    });

    $scope.getWatchers = function () {
      console.log( $scope.$$watchersCount, " watchers: ", $scope.$$watchers);
    };

    $scope.getScope = function () {
      console.log($scope);
    };
  }
})();
