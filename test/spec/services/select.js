'use strict';

describe('Service: select', function () {

  // load the service's module
  beforeEach(module('ngCarAppApp'));

  // instantiate service
  var select;
  beforeEach(inject(function (_select_) {
    select = _select_;
  }));

  it('should do something', function () {
    expect(!!select).toBe(true);
  });

});
