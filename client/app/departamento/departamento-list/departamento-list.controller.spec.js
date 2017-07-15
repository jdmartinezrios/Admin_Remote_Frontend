'use strict';

describe('Component: DepartamentoListComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var DepartamentoListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    DepartamentoListComponent = $componentController('departamento-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
