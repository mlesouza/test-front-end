(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('linx-app')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var api_url = "https://api.openbrewerydb.org/";

		return {
			getBreweriesList: getBreweriesList
		};

		function getBreweriesList(page, numberPerPage, by_type) {
			return $http.get(`${api_url}breweries?${by_type ? "by_type=" + by_type : ``}&page=${page}&per_page=${numberPerPage}`);

		}

	}

})();
