'use strict';

/**
 * @ngdoc service
 * @name ngCarAppApp.inventory
 * @description
 * # inventory
 * Service in the ngCarAppApp.
 */
angular.module('ngCarAppApp')
  .service('inventory', function ($http, db) {

    var inventory = [];

    return {
      grab: function() {
        var promise = $http.get(db + '/_design/inventory/_view/full').then(function(res) {
            return res.data.rows;
        });
        return promise;
      }
    }
  });
