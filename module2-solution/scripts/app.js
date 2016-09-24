(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.toBuyArray;
    this.buy = function(item) {
      ShoppingListCheckOffService.buy(item);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.alreadyBoughtArray;
  }

  function ShoppingListCheckOffService() {
    var service = this;
    service.toBuyArray = [
      {name: "common bean", quantity: 1},
      {name: "lentil", quantity: 2},
      {name: 'chickpea', quantity: 1},
      {name: 'peas', quantity: 3},
      {name: 'mung', quantity: 5}];
    service.alreadyBoughtArray = [];

    service.buy = function(index) {
      var item = service.toBuyArray.splice(index, 1)[0];
      service.alreadyBoughtArray.push(item);
      console.log(item)
    };
  }
})();
