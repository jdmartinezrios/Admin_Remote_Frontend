'use strict';

describe('Service: ciudad', function () {

  // load the service's module
  beforeEach(module('administracionRemotaApp'));

  // instantiate service
  var ciudad;
  beforeEach(inject(function (_ciudad_) {
    ciudad = _ciudad_;
  }));

  it('should do something', function () {
    expect(!!ciudad).to.be.true;
  });

});
