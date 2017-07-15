'use strict';

describe('Component: ClienteListComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var ClienteListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ClienteListComponent = $componentController('cliente-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
