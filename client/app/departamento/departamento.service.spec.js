'use strict';

describe('Service: departamento', function () {

  // load the service's module
  beforeEach(module('administracionRemotaApp'));

  // instantiate service
  var departamento;
  beforeEach(inject(function (_departamento_) {
    departamento = _departamento_;
  }));

  it('should do something', function () {
    expect(!!departamento).to.be.true;
  });

});
