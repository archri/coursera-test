(function() {
  'use strict';
  angular.module('asyncApp', [])
         .controller('asyncController', asyncController);

  asyncController.$inject = ['$scope', '$q'];
  function asyncController($scope, $q) {
    function asyncFunction(param) {
      var deferred = $q.defer();

      if (param === true) {
        deferred.resolve("success");
      } else {
        deferred.reject("failure");
      }
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
