'use strict';

/**
 * @ngdoc function
 * @name ngCarAppApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the ngCarAppApp
 */
angular.module('ngCarAppApp')
  .controller('EditCtrl', function ($scope, $modalInstance, carEdit) {
    if (carEdit === undefined) {
      $scope.car = {
        "value": {
          "make": "",
          "model": "",
          "color": "",
          "price": "",
          "year": "",
          "style": ""
        }
      }
    } else $scope.car = angular.copy(carEdit);

    $scope.submit = function() {
      $modalInstance.close($scope.car);
    }

  });
