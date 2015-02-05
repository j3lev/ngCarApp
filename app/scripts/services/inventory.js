'use strict';

/**
 * Database Interface
 * Service in the ngCarAppApp.
 */

angular.module('ngCarAppApp')
  .service('inventory', function ($http, db) {

    var inventory = []; //Initialize empty inventory object

    return {
      //Gets data from DB view
      grab: function(){
        return $http.get(db + '_design/inventory/_view/full');
      },
      //Posts data to DB
      upload: function (data) {
        return $http.post(db, data);
      },
      //Deletes document from DB
      remove: function (data) {
        return $http.delete(db + data.id + '?rev=' + data.value._rev);
      }
    }
  })
