'use strict';
(function(){

class EnvioListComponent {
  constructor(envioService) {
    this.envioService = envioService;
  }
  $onInit(){
    this.envioService.query().$promise
    .then(response => {
      console.log('Envio OK',response);
      this.envios = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
angular.module('administracionRemotaApp')
  .component('envioList', {
    templateUrl: 'app/envio/envio-list/envio-list.html',
    controller: EnvioListComponent,
    controllerAs:'vm'
  });

})();
