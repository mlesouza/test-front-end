(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:listbreweriesCtrl
	* @description
	* # listbreweriesCtrl
	* Controller of the app
	*/

	angular
		.module('linx-app')
		.controller('ListBreweriesCtrl', ListBreweries);

	ListBreweries.$inject = ["$scope", "$location"];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function ListBreweries($scope, $localtion) {
		/*jshint validthis: true */

		function startVariables() {
		}

		function startFunctions() {
			$scope.go = go;
		}

		function start() {
			startVariables();
			startFunctions();
		}

		function go(path) {
			$localtion.path(path);
		}

		start();
	}

})();
