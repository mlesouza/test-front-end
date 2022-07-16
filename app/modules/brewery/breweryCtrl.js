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

	Brewery.$inject = ["$scope", "$cacheFactory", "breweryService"];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Brewery($scope, $cacheFactory, breweryService) {
		var vm = this;

		function startVariables() {
		}

		function startFunctions() {
		}

		function start() {
			startVariables();
			startFunctions();
		}

		start();

	}
})();
