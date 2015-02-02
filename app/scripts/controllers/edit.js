'use strict';

/**
 * Edit Modal Instance Controller
 * Controller of the ngCarAppApp
 */
angular.module('ngCarAppApp')
  .controller('EditCtrl', function ($scope, $modalInstance, carEdit) {

    if (carEdit === undefined) {  //If car is new
      $scope.car = {  //Initialize empty car with schema
        "value": {
          "make": "",
          "model": "",
          "color": "",
          "price": "",
          "year": "",
          "style": ""
        }
      }
    } else $scope.car = angular.copy(carEdit); //Create copy of car object

    $scope.submit = function () {
      $modalInstance.close($scope.car); //Pass data back to MainCtrl controller
    }

  });
