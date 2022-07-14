(function() {
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
		.controller('ListBreweriesCtrl', ListBreweries );

		ListBreweries.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function ListBreweries() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
