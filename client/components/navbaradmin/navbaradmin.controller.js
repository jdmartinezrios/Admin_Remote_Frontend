(function(){
  'use strict';

  class NavbarAdminController {
    constructor(authService) {
      this.authService = authService;
    } 

}
  angular.module('administracionRemotaApp')
  .component('navbaradmin',{
    templateUrl:'components/navbaradmin/navbaradmin.html',
    controller: NavbarAdminController,
    controllerAs: 'vm'
  });
})();
