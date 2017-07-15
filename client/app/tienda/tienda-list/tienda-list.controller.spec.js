'use strict';

describe('Component: TiendaListComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var TiendaListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TiendaListComponent = $componentController('tienda-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
