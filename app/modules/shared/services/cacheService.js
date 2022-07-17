(function (angular) {
    'use strict';

    /**
    * @ngdoc function
    * @name app.service:cacheService
    * @description
    * # homeService
    * Service of the app
    */
    angular.module('cache', [])
        .factory('cacheService', ['$cacheFactory', function ($cacheFactory) {
            return $cacheFactory('cache');
        }]);
})(angular);
