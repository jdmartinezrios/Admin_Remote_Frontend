'use strict';
(function(){

class PedidoListComponent {
  constructor(pedidoService, authService) {
    this.pedidoService = pedidoService;
    this.authService = authService;
    this.showHide = false;
    this.arrow = false;
    this.arrow2 = false;
    this.arrow3 = false;
  }
  $onInit(){    
    this.pedidoService.query().$promise
    .then(response => {
      console.log('Pedidos OK',response);
      this.pedidosList = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
  //jquery animaciones
  ocultarSlide(){
    if(!this.showHide){
      this.showHide = true;     
      $('#contenido').css({'transform':'translateX(-240px)','transition':'0.7s'});      
    }else{
      this.showHide = false;     
      $('#contenido').css({'transform':'translateX(0px)','transition':'0.7s'});      
    }  
  }

  mostrarClientes(){   
  $('.Menu-list1').children('ul').slideToggle();
    if(!this.arrow){
      this.arrow = true;
      $('#flecha').removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
    }else{
      this.arrow = false;
      $('#flecha').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
    }  
  }
  verItems(){
     $('.Menu-list2').children('ul').slideToggle();
       if(!this.arrow2){
      this.arrow2 = true;
      $('#flecha2').removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
    }else{
      this.arrow2 = false;
      $('#flecha2').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
    } 
  }
  verItems2(){
     $('.Menu-list3').children('ul').slideToggle();
       if(!this.arrow3){
      this.arrow3 = true;
      $('#flecha3').removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
    }else{
      this.arrow3 = false;
      $('#flecha3').removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
    } 
  }
}

angular.module('administracionRemotaApp')
  .component('pedidoList', {
    templateUrl: 'app/pedido/pedido-list/pedido-list.html',
    controller: PedidoListComponent,
    controllerAs:'vm'
  });

})();
