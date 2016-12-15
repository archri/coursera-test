(function() {
  'use strict';
  angular.module('asyncApp', [])
         .controller('asyncController', asyncController);

  asyncController.$inject = ['$scope'];
  function asyncController($scope) {
    $scope.async = 'async avriable text';
  }

  console.log('hik');
})();
