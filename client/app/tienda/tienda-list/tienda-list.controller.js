'use strict';
(function(){

class TiendaListComponent {
  constructor(tiendaService) {
    this.tiendaService = tiendaService;
  }
  $onInit(){
    this.tiendaService.query().$promise
    .then(response => {
      console.log('Tiendas OK',response);
      this.tiendas = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
angular.module('administracionRemotaApp')
  .component('tiendaList', {
    templateUrl: 'app/tienda/tienda-list/tienda-list.html',
    controller: TiendaListComponent,
    controllerAs:'vm'
  });

})();
