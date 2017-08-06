(function () {
'use strict';

angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.dishes = "";
	$scope.status = "empty";
	$scope.statusMsg = "";

	$scope.checkDishes = function () {
		var totalNameValue = calculateNumberOfItems($scope.dishes);
    
		if ( totalNameValue == 0 ) {
			$scope.statusMsg = "Please enter data first";
			$scope.status = "empty";
		}
		else if ( totalNameValue <= 3 ) {
			$scope.statusMsg = "Enjoy!";
			$scope.status = "green";
		}
		else {
			$scope.statusMsg = "Too much!";
			$scope.status = "red";
		}
	};

	function calculateNumberOfItems(string) {
		if ( string == "" ) {
			return 0;
		}
	  
		var items = string.split(",");
		var count = 0;
		for (var i = 0; i < items.length; i++) {
		    if ( items[i].trim().length > 0 ) {
		    	count++;
		    }
		} 
		return count;
	}
}

})();
