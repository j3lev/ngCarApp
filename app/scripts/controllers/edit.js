'use strict';

/**
 * Edit Modal Instance Controller
 * Controller of the ngCarAppApp
 */
angular.module('ngCarAppApp')
  .controller('EditCtrl', function ($scope, $modalInstance, carEdit) {

    $scope.car = {};

    $scope.initialize = function (carObj) {
      if (carObj === undefined) {  //If car is new
        $scope.car = $scope.setCar; //$scope.setCar;
      } else $scope.car = angular.copy(carObj); //Create copy of car object

    };

    $scope.submit = function () {
      $modalInstance.close($scope.car); //Pass data back to MainCtrl controller
    };

    $scope.setCar = function () {
      return {  //Initialize empty car with schema
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
