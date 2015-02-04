'use strict';

/**
 * Main App Controller
 * Controller of the ngCarAppApp
 */
angular.module('ngCarAppApp')
  .controller('MainCtrl', function ($scope, $http, db, inventory, $modal) {

    //Initialize empty cars array
    $scope.cars = [];

    //Gets data from DB using inventory service
    $scope.initialize = function () {
      inventory.grab().then(function (result) {
        $scope.cars = result;
      });
    }

    //Edit function that is called on button click
    //Initializes modal, passes data to it, and processes returned promise
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
        $scope.save(carEdit, index);
      });
    }

    //Deletes index from DOM and removes item from DB
    $scope.remove = function (item, index) {
      inventory.remove(item);
      $scope.cars.splice(index, 1);
    }

    //Checks if car is edited or new
    //Adds car to DB and updates DOM accordingly
    $scope.save = function (car, index) {
      inventory.upload(car.value).then(function (response) {
        car.value._rev = response.data.rev;
        if (index === null) {
          car.value._id = response.data.id;
          car.id = response.data.id;
          $scope.domCreate(car);
        } else $scope.domUpdate(car, index);
      });
    }

    //Updates element in DOM
    $scope.domUpdate = function (item, index) {
      $scope.cars[index] = item;
    }

    //Creates element in DOM
    $scope.domCreate = function (item) {
      $scope.cars.push(item);
    }

    $scope.initialize();

  });

