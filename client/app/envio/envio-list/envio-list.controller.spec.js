'use strict';

describe('Component: EnvioListComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var EnvioListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EnvioListComponent = $componentController('envio-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
