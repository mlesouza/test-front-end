(function(angular) {
    angular.module('home').config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'pages/home/home.html',
            controller: 'HomeController'
        });
    }])
})(angular);