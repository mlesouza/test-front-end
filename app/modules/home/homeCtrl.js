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
			vm.currentPage = 1;
			vm.list = [];
		}

		function startFunctions() {
			vm.getBreweriesList = getBreweriesList;
		}

		function start() {
			startVariables();
			startFunctions();
			getBreweriesList(1, 20);
		}

		function getBreweriesList(page, numberPerPage) {
			vm.currentPage = page;
			homeService.getBreweriesList(page, numberPerPage)
				.then(breweriesList)
				.catch(breweriesListError);
		}

		function breweriesList(response) {
			vm.list = response.data;
			console.log(vm.list);
		}

		function breweriesListError(error) {
			console.error(error);
		}

		start();

	}
})();
