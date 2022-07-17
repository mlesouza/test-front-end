(function () {
	"use strict";

	/**
	 * @ngdoc function
	 * @name app.controller:BreweryCtrl
	 * @description
	 * # BreweryCtrl
	 * Controller of the app
	 */

	angular.module("linx-app").controller("BreweryCtrl", Brewery);

	Brewery.$inject = ["$scope", "$location", "$stateParams", "breweryService"];

	/*
	 * recommend""
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Brewery($scope, $location, $stateParams, breweryService) {
		var vm = this;

		function startVariables() {
			vm.id = $stateParams.id;
			vm.brewery = {};
		}

		function startFunctions() {
			vm.go = go;
			vm.breweryError = breweryError;
			vm.brewery = brewery;
		}

		function start() {
			startVariables();
			startFunctions();
			getBrewery();
		}

		function getBrewery() {
			breweryService.getBrewery(vm.id)
				.then(brewery)
				.catch(breweryError);
		}

		function brewery(response) {
			vm.brewery = response.data;
			vm.brewery.link = `https://www.google.com/maps?q=loc:${vm.brewery.latitude},${vm.brewery.longitude}`;
		}

		function breweryError(error) {
			console.error(error);
			$location.path("/")
		}

		function go(path) {
			$location.path(path);
		}

		start();

	}
})();
