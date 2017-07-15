'use strict';
(function(){

class PedidoListComponent {
  constructor(pedidoService) {
    this.pedidoService = pedidoService;
  }
  $onInit(){
    console.log('Welcome to the dashboard admin');
    this.pedidoService.query().$promise
    .then(response => {
      console.log('Pedidos OK',response);
      this.pedidosList = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });

    $('.barra').on('click', function(){
      $('.contenido').toggleClass('.abrir');
    });
    $('.Menu-list').on('click', function(){
      $(this).children('ul').slideToggle();
    });
  }
}

angular.module('administracionRemotaApp')
  .component('pedidoList', {
    templateUrl: 'app/pedido/pedido-list/pedido-list.html',
    controller: PedidoListComponent,
    controllerAs:'vm'
  });

})();
