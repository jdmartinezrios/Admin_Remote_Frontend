'use strict';

describe('Service: envio', function () {

  // load the service's module
  beforeEach(module('administracionRemotaApp'));

  // instantiate service
  var envio;
  beforeEach(inject(function (_envio_) {
    envio = _envio_;
  }));

  it('should do something', function () {
    expect(!!envio).to.be.true;
  });

});
