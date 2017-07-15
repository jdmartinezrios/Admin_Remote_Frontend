'use strict';

describe('Service: pais', function () {

  // load the service's module
  beforeEach(module('administracionRemotaApp'));

  // instantiate service
  var pais;
  beforeEach(inject(function (_pais_) {
    pais = _pais_;
  }));

  it('should do something', function () {
    expect(!!pais).to.be.true;
  });

});
