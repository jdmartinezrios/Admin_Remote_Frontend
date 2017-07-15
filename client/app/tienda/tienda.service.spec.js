'use strict';

describe('Service: tienda', function () {

  // load the service's module
  beforeEach(module('administracionRemotaApp'));

  // instantiate service
  var tienda;
  beforeEach(inject(function (_tienda_) {
    tienda = _tienda_;
  }));

  it('should do something', function () {
    expect(!!tienda).to.be.true;
  });

});
