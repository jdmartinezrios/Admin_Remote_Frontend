'use strict';
(function(){

class PaisListComponent {
  constructor(paisService) {
    this.paisService = paisService;
  }
  $onInit(){
    this.paisService.query().$promise
    .then(response => {
      console.log('Pais OK',response);
      this.paises = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
angular.module('administracionRemotaApp')
  .component('paisList', {
    templateUrl: 'app/pais/pais-list/pais-list.html',
    controller: PaisListComponent,
    controllerAs:'vm'
  });

})();
