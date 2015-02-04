'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCarAppApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, inventory) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      inventory: inventory
    });
    spyOn(inventory, 'grab').and.callFake(function() {
      return {
        then: function(response) {
          response('grab response');
        }
      };
    });
    spyOn(inventory, 'remove');
    spyOn(inventory, 'upload').and.callFake(function() {
      return {
        upload: function(response) {
          response('upload response');
        }
      };
    });
  }));

  beforeEach(function () {
    scope.cars = ['a', 'b', 'c']
  });

  describe('Function initialize', function () {
    it('should be defined', function () {
      expect(scope.initialize).toBeDefined();
    });
    it('get data from inventory service', function() {
      scope.initialize();
      expect(scope.cars).toEqual('grab response');
    });
  });

  describe('Function edit', function () {
    it('should be defined', function () {
      expect(scope.edit).toBeDefined();
    });
  });

  describe('Function remove', function () {
    it('should be defined', function () {
      expect(scope.remove).toBeDefined();
    });
    it('should remove an element from backend', function() {
      spyOn(inventory, 'remove');
      scope.remove('b', 1);
      expect(inventory.remove).toHaveBeenCalled();
    });
    it('should remove an element from the DOM', function() {
      scope.remove('a', 0);
      expect(scope.cars).toEqual(['b', 'c']);
    });
  });

  describe('Function save', function () {
    it('should be defined', function () {
      expect(scope.save).toBeDefined();
    });
    it('should upload to inventory', function() {
      spyOn(scope, 'domCreate');
      scope.save(null, null);
      expect(scope.domCreate).toHaveBeenCalled();
    });
  });

  describe('Function domUpdate', function () {
    it('should be defined', function () {
      expect(scope.domUpdate).toBeDefined();
    });
    it('should update an index', function() {
      scope.domUpdate('x', 0);
      expect(scope.cars).toEqual(['x', 'b', 'c']);
    });
  });

  describe('Function domCreate', function () {
    it('should be defined', function () {
      expect(scope.domCreate).toBeDefined();
    });
    it('should push an element', function() {
      scope.domCreate('d');
      expect(scope.cars).toEqual(['a', 'b', 'c', 'd']);
    });
  });
});
