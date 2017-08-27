(function () {
'use strict';

angular.module('data').component('categoriesList', {
  templateUrl: 'templates/categories/categoriesList.template.html',
  bindings: {
    items: '<'
  }
});

})();
