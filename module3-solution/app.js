(function () {
'use strict';

angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
	  var ddo = {
	    templateUrl: 'foundItems.html',
	    scope: {
	      foundItems: '<',
	      onRemove: '&'
	    },
	    controller: NarrowItDownController,
	    controllerAs: 'narrowIt',
	    bindToController: true
	  };

	  return ddo;
	}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var searcher = this;
	
	searcher.searchTerm = "";
	searcher.found = [];
	
	searcher.search = function () {
		searcher.found = [];
		    var promise = MenuSearchService.getMatchedMenuItems(searcher.searchTerm);

		    promise.then(function (response) {
		      console.log(response);
		      searcher.found = response;
		    })
		    .catch(function (error) {
		      console.log(error);
		    })
		  };
		  
	searcher.removeItem = function (index) {
		searcher.found.splice(index, 1);
	};
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
	var service = this;
  	
  	service.getMatchedMenuItems = function(searchTerm) {
  	    return $http({
  	      method: "GET",
  	      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
  	    }).then(function (result) {
  	    	var allItems = result.data.menu_items;
  	      // process result and only keep items that match
  	      var foundItems = [];
  	      for (var i = 0; i < allItems.length; i++) {
		    if ( allItems[i].description.indexOf(searchTerm) > 0 ) {
		    	foundItems.push(allItems[i]);
		    }
  	      } 

  	      // return processed items
  	      return foundItems;
  	  }); 		
  	};
}

})();