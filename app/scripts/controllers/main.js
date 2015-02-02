'use strict';

/**
 * @ngdoc function
 * @name ngCarAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngCarAppApp
 */
angular.module('ngCarAppApp')
  .controller('MainCtrl', function ($scope, $http, db, inventory, select, $modal) {

    $scope.cars = [];

    inventory.grab().then(function(result) {
      $scope.cars = result;
    });

    $scope.edit = function(car) {
      var editInstance = $modal.open({
        templateUrl: '../../views/edit.html',
        controller: 'EditCtrl',
        size: 'lg',
        resolve: {
          carEdit: function() {
            return car;
          }
        }
      });
    };

  });
