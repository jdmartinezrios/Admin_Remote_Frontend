'use strict';
(function(){

class ClienteCreateComponent {
  constructor(clienteService) {
    this.clienteService = clienteService;
  }
  $onInit(){
    this.clienteService.query().$promise
    .then(response => {
      console.log('Cliente OK',response);
      this.clientes = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
angular.module('administracionRemotaApp')
  .component('clienteCreate', {
    templateUrl: 'app/cliente/cliente-create/cliente-create.html',
    controller: ClienteCreateComponent,
    controllerAs:'vm'
  });

})();
