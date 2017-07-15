'use strict';

describe('Component: PedidoCreateComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var PedidoCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PedidoCreateComponent = $componentController('pedido-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
