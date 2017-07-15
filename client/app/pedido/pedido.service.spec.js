'use strict';

describe('Service: pedido', function () {

  // load the service's module
  beforeEach(module('administracionRemotaApp'));

  // instantiate service
  var pedido;
  beforeEach(inject(function (_pedido_) {
    pedido = _pedido_;
  }));

  it('should do something', function () {
    expect(!!pedido).to.be.true;
  });

});
