'use strict';

/**
 * @ngdoc service
 * @name ngCarAppApp.select
 * @description
 * # select
 * Service in the ngCarAppApp.
 */
angular.module('ngCarAppApp')
  .service('select', function () {
  	
  	var selectedCar = [];

  	return {
  		add: function(item) {
  			selectedCar = item;
  		},
  		get: function() {
  			return selectedCar;
  		}
  	}
  
  });
