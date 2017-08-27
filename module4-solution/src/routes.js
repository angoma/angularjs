(function () {
'use strict';

angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');
  
  $stateProvider

  // Home page
  .state('home', {
	  url: '/',
	  templateUrl: 'templates/home.template.html'
  })

  // categories list
  .state('categories', {
	  url: '/categories-list',
	  templateUrl: 'templates/categories/categoriesView.template.html',
	  controller: 'CategoriesController as categories',
	  resolve: {
		  categories: ['MenuDataService', function (MenuDataService) {
			  return MenuDataService.getAllCategories();
		  }]
	  }
  })
  
  // items
  .state('items', {
	  url: '/items/{itemShortName}',
	  params: {
		  itemShortName: null
	  },
	  templateUrl: 'templates/items/itemsView.template.html',
	  controller: "ItemsController as items",
	  resolve: {
		  shortName: ['$stateParams', function ($stateParams) {
			  return $stateParams.itemShortName;
		  }],	  
		  items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
			  return MenuDataService.getItemsForCategory($stateParams.itemShortName);
		  }]
	  }
  });	
}
})();
