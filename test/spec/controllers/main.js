'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCarAppApp'));

  var MainCtrl,
      scope;

  beforeEach(inject(function ($controller, $rootScope, inventory, _$modal_) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    spyOn(inventory, 'grab').and.callFake(function() {
      return {
        then: function(response) {
          response({"data": {"rows": "hello world!"}});
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
      expect(scope.cars).toBe('hello world!');
    });
  });

  describe('Function edit', function () {
    it('should be defined', function () {
      expect(scope.edit).toBeDefined();
    });
    it('should define an edit modal instance', function(){
      scope.edit(null, null);
      expect(scope.editInstance).toBeDefined();
    });
  });


  describe('Function remove', function () {
    it('should be defined', function () {
      expect(scope.remove).toBeDefined();
    });
    it('should call domRemove', function() {
      var mockItem = {
        "id": "000",
        "value": {
          "_rev": "000"
        }
      };
      spyOn(scope, 'domRemove');
      scope.remove(mockItem, null);
      expect(scope.domRemove).toHaveBeenCalled();
    });
  });

  describe('Function save', function () {
    it('should be defined', function () {
      expect(scope.save).toBeDefined();
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

  describe('Function domRemove', function() {
    it('should remove an element from the DOM', function() {
      scope.domRemove('a', 0);
      expect(scope.cars).toEqual(['b', 'c']);
    });
  });
});
