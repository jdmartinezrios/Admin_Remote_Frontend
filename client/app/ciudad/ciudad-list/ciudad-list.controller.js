'use strict';
(function(){

class CiudadListComponent {
  constructor(ciudadService) {
    this.ciudadService = ciudadService;
  }
  $onInit(){
    this.ciudadService.query().$promise
    .then(response => {
      console.log('Ciudad OK',response);
      this.ciudades = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
angular.module('administracionRemotaApp')
  .component('ciudadList', {
    templateUrl: 'app/ciudad/ciudad-list/ciudad-list.html',
    controller: CiudadListComponent,
    controllerAs:'vm'
  });

})();
