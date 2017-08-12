(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var itemBuyer = this;

	itemBuyer.items = ShoppingListCheckOffService.getItems();
	
	itemBuyer.buy = function (index) {
		ShoppingListCheckOffService.buyItem(index);
	};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var showList = this;

  	showList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
	var service = this;

  	var items = [{ name: "cookies", quantity: 10 },
  	             { name: "cheesecakes", quantity: 2 },
  	             { name: "muffins", quantity: 5 },
  	             { name: "ice creams", quantity: 7 },
  	             { name: "candy bar", quantity: 1 }];
  
  	var boughtItems = [];

  	service.buyItem = function (index) {
	  var item = items[index];
    	boughtItems.push(item);
    	items.splice(index, 1);
  	};

  	service.getItems = function () {
	  return items;
  	};
  
  	service.getBoughtItems = function () {
	  return boughtItems;
  	};
}

})();