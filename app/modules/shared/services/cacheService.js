(function (angular) {
    'use strict';

    /**
    * @ngdoc function
    * @name app.service:cacheService
    * @description
    * # cacheService
    * Service of the app
    */
    angular.module('cache', [])
        .factory('cacheService', ['$cacheFactory', function ($cacheFactory) {
            return $cacheFactory('cache');
        }]);
})(angular);
