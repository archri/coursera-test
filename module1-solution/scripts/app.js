(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']

  function LunchCheckController($scope) {
    $scope.check = function() {
      if ($scope.lunchMenu) {
        var menuItems = $scope.lunchMenu.split(',');
        $scope.message = (menuItems.length <= 3 ? "Enjoy!" : "Too much!");
      } else {
        $scope.message = "Please enter data first";
      }
    }
  }
})();
