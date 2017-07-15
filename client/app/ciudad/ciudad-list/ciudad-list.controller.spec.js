'use strict';

describe('Component: CiudadListComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var CiudadListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CiudadListComponent = $componentController('ciudad-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
