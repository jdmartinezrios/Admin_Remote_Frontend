'use strict';

describe('Component: PedidoListComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var PedidoListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PedidoListComponent = $componentController('pedido-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
