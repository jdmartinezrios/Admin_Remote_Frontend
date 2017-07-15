'use strict';

describe('Service: cliente', function () {

  // load the service's module
  beforeEach(module('administracionRemotaApp'));

  // instantiate service
  var cliente;
  beforeEach(inject(function (_cliente_) {
    cliente = _cliente_;
  }));

  it('should do something', function () {
    expect(!!cliente).to.be.true;
  });

});
