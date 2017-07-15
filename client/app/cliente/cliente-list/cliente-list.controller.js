'use strict';
(function(){

class ClienteListComponent {
  constructor(clienteService) {
    this.clienteService = clienteService;
  }
  $onInit(){
    this.clienteService.query().$promise
    .then(response => {
      console.log('Clientes OK',response);
      this.clientesList = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
angular.module('administracionRemotaApp')
  .component('clienteList', {
    templateUrl: 'app/cliente/cliente-list/cliente-list.html',
    controller: ClienteListComponent,
    controllerAs:'vm'
  });

})();
