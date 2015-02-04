'use strict';

/**
 * Edit Modal Instance Controller
 * Controller of the ngCarAppApp
 */

angular.module('ngCarAppApp')
  .controller('EditCtrl', function ($scope, $modalInstance, carEdit) {

    $scope.car = {};

    //Sets car object to null if new or copies existing
    $scope.initialize = function (carObj) {
      if (carObj === null) {
        $scope.car = $scope.setCar();
      } else {
        angular.copy(carObj, $scope.car);
      }
    };

    //Pass back to EditCtrl controller on click
    $scope.submit = function () {
      $modalInstance.close($scope.car);
    };

    //Initialize empty car schema
    $scope.setCar = function () {
      return {
        "value": {
          "make": "",
          "model": "",
          "color": "",
          "price": "",
          "year": "",
          "style": ""
        }
      };
    };

    $scope.initialize(carEdit);

  });
