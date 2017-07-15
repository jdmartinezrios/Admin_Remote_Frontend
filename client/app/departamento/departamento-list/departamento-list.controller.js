'use strict';
(function(){

class DepartamentoListComponent {
  constructor(departamentoService) {
    this.departamentoService = departamentoService;
  }
  $onInit(){
    this.departamentoService.query().$promise
    .then(response => {
      console.log('Departametos OK',response);
      this.departamentos = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
angular.module('administracionRemotaApp')
  .component('departamentoList', {
    templateUrl: 'app/departamento/departamento-list/departamento-list.html',
    controller: DepartamentoListComponent,
    controllerAs:'vm'
  });

})();
