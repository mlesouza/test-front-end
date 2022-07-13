(function(angular) {
    angular.module('list').config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'pages/list/list.html',
            controller: 'ListController'
        });
    }])
})(angular);