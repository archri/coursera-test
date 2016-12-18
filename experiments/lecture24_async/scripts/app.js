(function() {
  'use strict';
  angular.module('asyncApp', [])
         .controller('asyncController', asyncController);

  asyncController.$inject = ['$scope', '$q', '$timeout'];
  function asyncController($scope, $q, $timeout) {
    function asyncFunction1() {
      // create deferred object
      var deferred = $q.defer();

      // asynchronous part
      $timeout(function () {
          deferred.resolve("first success");
      }, 1000);

      // return the promise
      return deferred.promise;
    }

    function asyncFunction2(param) {
      // create deferred object
      var deferred = $q.defer();

      // asynchronous part
      $timeout(function () {
        if (param === true) {
          deferred.resolve("second success");
        } else {
          deferred.reject("failure");
        }
      }, 3000);

      // return the promise
      return deferred.promise;
    }

    var promise1 = asyncFunction1();

    $scope.async = "start";
    promise1
      .then(function(result) {
        $scope.async = result;
        return asyncFunction2(true);
      })
      .then(function(result) {
        $scope.async = result;
      })
      .catch(function(error) {
        $scope.async = error;
      });
  }
})();
