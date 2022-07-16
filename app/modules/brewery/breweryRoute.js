'use strict';

/**
* @ngdoc function
* @name app.route:BreweryRoute
* @description
* # BreweryRoute
* Route of the app
*/

angular.module('linx-app')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

			.state('brewery', {
				url: '/brewery/:id',
				templateUrl: 'app/modules/brewery/brewery.html',
				controller: 'BreweryCtrl',
				controllerAs: 'vm'
			});

	}]);
