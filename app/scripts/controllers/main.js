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


    inventory.grab().then(function (result) {
      $scope.cars = result;
      console.log($scope.cars);
    });

    $scope.edit = function (car, index) {
      var editInstance = $modal.open({
        templateUrl: '../../views/edit.html',
        controller: 'EditCtrl',
        size: 'lg',
        resolve: {
          carEdit: function () {
            return car;
          }
        }
      });
      editInstance.result.then(function (carEdit) {
        inventory.upload(carEdit.value).then(function (response) {
          carEdit.value._rev = response.data.rev;
          if (index === undefined) {
            carEdit.value._id, carEdit.id = response.data.id;
            domCreate(carEdit);
          } else domUpdate(carEdit, index);
        });
      });
    }


    $scope.remove = function (item, index) {
      inventory.remove(item);
      domRemove(index);
    }

    function domUpdate(item, index) {
      $scope.cars[index] = item;
    }

    function domRemove(index) {
      $scope.cars.splice(index, 1);
    }

    function domCreate(item) {
      $scope.cars.push(item);
    }
  });

