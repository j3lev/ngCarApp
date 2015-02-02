'use strict';

/**
 * Database Interface
 * Service in the ngCarAppApp.
 */

angular.module('ngCarAppApp')
  .service('inventory', function ($http, db) {

    var inventory = []; //Initialize empty inventory object

    return {
      grab: function () {
        var promise = $http.get(db + '_design/inventory/_view/full').then(function (res) {
          return res.data.rows; //Return documents with values
        });
        return promise;
      },
      upload: function (data) {
        var promise = $http.post(db, data).
          success(function (response) {
            return response; //Return server generated ID and revision hashes
          });
        return promise;
      },
      remove: function (data) {
        $http.delete(db + data.id + '?rev=' + data.value._rev); //Delete from server
      }
    }
  })
