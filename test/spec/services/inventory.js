'use strict';

describe('Service: inventory', function () {

  // load the service's module
  beforeEach(module('ngCarAppApp'));

  // instantiate service
  var inventory,
    db,
    $httpBackend;

  beforeEach(inject(function (_inventory_, _db_, _$httpBackend_) {
    inventory = _inventory_;
    db = _db_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(db + '_design/inventory/_view/full')
      .respond(201, {"message": "hello world!"});
    $httpBackend.whenPOST(db, {"message": "test post"})
      .respond(201, {"message": "hello world!"});
    $httpBackend.whenDELETE(db + '000?rev=000')
      .respond(201, {"message": "hello world!"});
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('Grab method', function () {
    it('should be defined', function () {
      expect(inventory.grab).toBeDefined();
    });
    it('should pull inventory from DB', function () {
      var results;
      inventory.grab().success(function (res) {
        results = res;
      });
      $httpBackend.flush();
      expect(results.message).toBe('hello world!');
    });
  });

  describe('Upload method', function () {
    it('should be defined', function () {
      expect(inventory.upload).toBeDefined();
    });
    it('should post data to DB', function () {
      var results;
      var mockData = {"message": "test post"};
      inventory.upload(mockData).success(function (res) {
        results = res;
      });
      $httpBackend.flush();
      expect(results.message).toBe('hello world!');
    });
  });

  describe('Remove method', function() {
    it('should be defined', function () {
      expect(inventory.remove).toBeDefined();
    });
    it('should remove data from the DB', function() {
      var results;
      var testDoc = {
        "id": "000",
        "value" : {
          "_rev": "000"
        }
      };
      inventory.remove(testDoc).success(function(res){
        results = res;
      });
      $httpBackend.flush();
      expect(results.message).toBe('hello world!');
    });
  });
});
