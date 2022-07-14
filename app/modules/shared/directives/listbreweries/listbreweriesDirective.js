(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:listbreweriesDirective
	* @description
	* # listbreweriesDirective
	* Directive of the app
	*/

	angular
		.module('linx-app')
		.directive('listBreweries', listBreweries);

		function listBreweries () {

			var directive = {
				restrict: 'EA',
				controller: 'ListBreweriesCtrl',
				scope: {
					brewery: "@"
				},
				templateUrl:'app/modules/shared/directives/listbreweries/listbreweries.html',
				
			}

			return directive;



		}

})();
