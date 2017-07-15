'use strict';

(function() {

  class MainController {

    constructor(authService) {
      this.authService = authService;
    }
    login() {
      console.log('DATOS DE LOGIN ',this.user);
      this.authService.login(this.user);
    }
    $onInit() {
      console.log('Welcome to te Remote Admin');
    }
  }
  MainController.$inject = ['authService'];
  angular.module('administracionRemotaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
