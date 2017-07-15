'use strict';

describe('Component: PaisListComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var PaisListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PaisListComponent = $componentController('pais-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
