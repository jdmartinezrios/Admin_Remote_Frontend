'use strict';

describe('Component: DocumentoListComponent', function () {

  // load the controller's module
  beforeEach(module('administracionRemotaApp'));

  var DocumentoListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    DocumentoListComponent = $componentController('documento-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
