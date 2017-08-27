(function () {
'use strict';

angular.module('data').controller('ItemsController', ItemsController);

ItemsController.$inject = ['shortName', 'items'];
function ItemsController(shortName, items) {
	var ctrl = this;
	ctrl.shortName = shortName;
	ctrl.items = items;
}

})();
