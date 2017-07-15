'use strict';

describe('Service: rol', function () {

  // load the service's module
  beforeEach(module('administracionRemotaApp'));

  // instantiate service
  var rol;
  beforeEach(inject(function (_rol_) {
    rol = _rol_;
  }));

  it('should do something', function () {
    expect(!!rol).to.be.true;
  });

});
