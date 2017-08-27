(function () {
'use strict';

angular.module('data').component('itemsList', {
  templateUrl: 'templates/items/itemsList.template.html',
  bindings: {
    items: '<'
  }
});

})();
