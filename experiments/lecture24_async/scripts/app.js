(function() {
  'use strict';
  angular.module('asyncApp', [])
         .controller('asyncController', asyncController);

  asyncController.$inject = ['$scope', '$q', '$timeout'];
  function asyncController($scope, $q, $timeout) {
    function asyncFunction1(param) {
      // create deferred object
      var deferred = $q.defer();

      // asynchronous part
      $timeout(function () {
        if (param === true) {
          deferred.resolve("first success");
        } else {
          deferred.reject("first failure");
        }
      }, 7000);

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
          deferred.reject("second failure");
        }
      }, 3000);

      // return the promise
      return deferred.promise;
    }

    var promise1 = asyncFunction1(false);
    var promise2 = asyncFunction2(false);

    $scope.async = "start";
    $q.all([promise1, promise2])
      .then(function (response) {
        console.log(response);
        // $scope.async = response;
      })
      .catch(function(error) {
        $scope.async = error;
      });
  }
})();
