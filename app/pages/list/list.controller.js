(function(angular){
    'use strict';

    angular.module('list').controller('ListController', ListController);

    ListController.$inject = ['$scope'];

    function ListController($scope) {
        var vm = this;

        vm.title = "List";
    }
})(angular);