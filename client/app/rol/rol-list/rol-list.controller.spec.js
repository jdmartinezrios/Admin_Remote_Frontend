'use strict';

describe('Component: RolListComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var RolListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RolListComponent = $componentController('rol-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
