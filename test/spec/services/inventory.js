'use strict';

describe('Service: inventory', function () {

  // load the service's module
  beforeEach(module('ngCarAppApp'));

  // instantiate service
  var inventory,
      db,
      httpBackend;

  beforeEach(inject(function (_inventory_, _db_, $httpBackend) {
    inventory = _inventory_,
    db = _db_;
    httpBackend = $httpBackend
  }));

  afterEach(function() {
    //httpBackend.flush();
  });

  describe('Grab method', function () {
    it('should be defined', function () {
      expect(inventory.grab).toBeDefined();
    });
    it('should pull inventory from DB', function() {
      httpBackend.expectGET(db + '_design/inventory/_view/full').respond('Hello');
      var grabTest = inventory.grab();
      var result;
      grabTest.then(function(response) {
       result  = response;
      });
      wait(500);
      console.log(result);
    });
  });
});
