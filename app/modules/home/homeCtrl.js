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

	Home.$inject = ["$scope", "$cacheFactory", "homeService"];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Home($scope, $cacheFactory, homeService) {
		var vm = this;

		function startVariables() {
			vm.currentPage = 1;
			vm.type = ""
			vm.list = [];
			vm.listOfTypes = [
				{
					key: "micro",
					value: "micro"
				}, {
					key: "nano",
					value: "nano"
				}, {
					key: "regional",
					value: "regional"
				}, {
					key: "brewpub",
					value: "brewpub"
				}, {
					key: "large",
					value: "large"
				}, {
					key: "planning",
					value: "planning"
				}, {
					key: "bar",
					value: "bar"
				}, {
					key: "contract",
					value: "contract"
				}, {
					key: "proprietor",
					value: "proprietor"
				}, {
					key: "closed",
					value: "closed"
				},
			]

			// vm.cache = $cacheFactory('homeCache');
		}

		function startFunctions() {
			vm.getBreweriesList = getBreweriesList;
		}

		function start() {
			startVariables();
			startFunctions();
			getBreweriesList(1, 20, vm.type);
		}

		function getBreweriesList(page, numberPerPage, type) {
			vm.currentPage = page;
			homeService.getBreweriesList(page, numberPerPage, type)
				.then(breweriesList)
				.catch(breweriesListError);
		}

		function breweriesList(response) {
			vm.list = response.data;
		}

		function breweriesListError(error) {
			console.error(error);
		}


		start();

	}
})();
