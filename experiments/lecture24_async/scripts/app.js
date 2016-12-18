(function() {
  'use strict';
  angular.module('asyncApp', [])
         .controller('asyncController', asyncController);

  asyncController.$inject = ['$scope', '$q', '$timeout'];
  function asyncController($scope, $q, $timeout) {
    function asyncFunction(param) {
      // create deferred object
      var deferred = $q.defer();

      // asynchronous part
      $timeout(function () {
        if (param === true) {
          deferred.resolve("success");
        } else {
          deferred.reject("failure");
        }
      }, 3000);

      // return the promise
      return deferred.promise;
    }

    var promise = asyncFunction(false);

    promise.then(function(result) {
      $scope.async = result;
    }, function(error) {
      $scope.async = error;
    });
  }
})();
