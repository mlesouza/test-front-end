(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:breweryService
	* @description
	* # breweryService
	* Service of the app
	*/

	angular.module('linx-app')
		.factory('breweryService', breweryService);

	breweryService.$inject = ['$http'];

	function breweryService($http) {

		var api_url = "https://api.openbrewerydb.org/";

		return {
			getBrewery: getBrewery
		};

		function getBrewery(id) {
			return $http.get(`${api_url}breweries/${id}`);
		}



	}

})();
