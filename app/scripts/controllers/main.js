'use strict';

/**
 * @ngdoc function
 * @name ngCarAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngCarAppApp
 */
angular.module('ngCarAppApp')
  .controller('MainCtrl', function ($scope, $http, db, inventory) {

    $scope.cars = [];

    inventory.grab().then(function(result) {
      $scope.cars = result;
    });


    $scope.add = function() {
      $scope.cars.push($scope.testitem);
      $http.post(db, $scope.testitem).success(function() {
        console.log('Document Post Successful');
      }).error(function() {
        console.log('Document Post Failed');
      })
    }
  });
