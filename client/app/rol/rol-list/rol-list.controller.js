'use strict';
(function(){

class RolListComponent {
  constructor(rolService) {
    this.rolService = rolService;
  }
  $onInit(){
    this.rolService.query().$promise
    .then(response => {
      console.log('Roles OK',response);
      this.roles = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
angular.module('administracionRemotaApp')
  .component('rolList', {
    templateUrl: 'app/rol/rol-list/rol-list.html',
    controller: RolListComponent,
    controllerAs:'vm'
  });

})();
