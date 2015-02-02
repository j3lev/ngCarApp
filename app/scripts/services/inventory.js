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
      grab: function () {
        var promise = $http.get(db + '_design/inventory/_view/full').then(function (res) {
          return res.data.rows;
        });
        return promise;
      },
      upload: function (data) {
        var promise = $http.post(db, data).
          success(function (response) {
            return response;
          });
        return promise;
      },
      remove: function (data) {
        $http.delete(db + data.id + '?rev=' + data.value._rev).error(function () {
          console.log("Error Deleting");
        });
      }
    }
  })
