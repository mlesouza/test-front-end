(function () {
	"use strict";

	/**
	 * @ngdoc function
	 * @name app.controller:HomeCtrl
	 * @description
	 * # HomeCtrl
	 * Controller of the app
	 */

	angular.module("linx-app").controller("HomeCtrl", Home);

	Home.$inject = ["$scope", "homeService"];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Home($scope, homeService) {
		var vm = this;

		function startVariables() {
			vm.mockBrewery = {
				title: "Avondale Brewing Co",
				location: "201, 41st ST S",
				badge: "micro"
			}
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
