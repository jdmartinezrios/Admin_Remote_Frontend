'use strict';

describe('Component: ClienteCreateComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var ClienteCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ClienteCreateComponent = $componentController('cliente-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
