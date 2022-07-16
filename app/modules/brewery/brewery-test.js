(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.test:breweryTest
	* @description
	* # breweryTest
	* Test of the app
	*/

	describe('breweryCtrl', function () {
		var controller = null, $scope = null, $location;

		beforeEach(function () {
			module('linx-app');
		});

		beforeEach(inject(function ($controller, $rootScope, _$location_) {
			$scope = $rootScope.$new();
			$location = _$location_;

			controller = $controller('BreweryCtrl', {
				$scope: $scope
			});
		}));

		it('Should BreweryCtrl must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should match the path Module name', function () {
			$location.path('/brewery');
			expect($location.path()).toBe('/brewery');
		});

	});
})();
