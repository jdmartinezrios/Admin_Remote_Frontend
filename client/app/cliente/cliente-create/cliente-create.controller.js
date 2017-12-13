'use strict';
(function(){

class ClienteCreateComponent {
  constructor(clienteService,$state) {
    this.clienteService = clienteService;
    this.$state = $state;
  }
  clienteCreate(){
    this.clientes.activo = 1;
    console.log(this.clientes);
    this.clienteService.save(this.clientes).$promise
    .then(response => {
      console.log('Cliente creado', response);      
      this.$state.go('cliente-list');
    })
    .catch(err => {
      console.log('Error',err);
    });
  }
  $onInit(){
    this.clienteService.query().$promise
    .then(response => {
      console.log('Cliente OK',response);
      this.clientesList = response;
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
