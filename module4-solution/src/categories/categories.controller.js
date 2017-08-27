(function () {
'use strict';

angular.module('data').controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
	var ctrl = this;
	console.log('CategoriesController', categories);
	ctrl.items = categories;
}

})();
