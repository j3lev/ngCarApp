'use strict';

describe('Service: db', function () {

  // load the service's module
  beforeEach(module('ngCarAppApp'));

  // instantiate service
  var db;
  beforeEach(inject(function (_db_) {
    db = _db_;
  }));

  it('should be defined', function() {
    expect(db).toBeDefined();
  });

  it('should be equal to the database address', function () {
    expect(db).toBe('http://127.0.0.1:5984/cars/');
  });

});
