'use strict';

describe('Controller: EditCtrl', function () {

  beforeEach(module('ngCarAppApp'));

  var Ctrl,
    scope,
    modalInstance,
    carEdit;

  // Initialize the controller and a mock scope
  beforeEach(inject(
      function ($controller, $rootScope, _$modal_) {
        scope = $rootScope.$new();

        modalInstance = _$modal_.open({
          templateUrl: 'views/edit.html'
        });

        Ctrl = $controller('EditCtrl', {
          $scope: scope,
          $modalInstance: modalInstance,
          carEdit: function () {
            return carEdit;
          }
        });
      })
  );

  describe('Function initialize', function () {

    it('should be defined', function () {
      expect(scope.initialize).toBeDefined();
    });

    it('should initialize a new car object', function () {
      expect(scope.car).toBeDefined();
    });

    it('should copy the object if it is defined', function () {
      carEdit = {'Value': 'America'};
      expect(scope.car()).toBe(carEdit);
    });

    it('should populate the new object with empty values if existing object is undefined', function () {
      carEdit = undefined;
      console.log(scope.car());
    });

  });

  describe('Function setCar', function () {

    it('should be defined', function () {
      expect(scope.setCar).toBeDefined();
    });

  });

});
