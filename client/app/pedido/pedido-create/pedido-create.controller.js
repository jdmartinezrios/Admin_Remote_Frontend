'use strict';
(function(){

class PedidoCreateComponent {
  constructor(pedidoService) {
    this.pedidoService = pedidoService;
  }
  $onInit(){
    this.pedidoService.query().$promise
    .then(response => {
      console.log('Pedidos OK',response);
      this.pedidos = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
angular.module('administracionRemotaApp')
  .component('pedidoCreate', {
    templateUrl: 'app/pedido/pedido-create/pedido-create.html',
    controller: PedidoCreateComponent,
    controllerAs:'vm'
  });

})();
