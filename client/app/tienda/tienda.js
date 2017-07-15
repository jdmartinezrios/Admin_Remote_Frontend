'use strict';

angular.module('administracionRemotaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tienda-list', {
        url: '/tienda-list',
        template: '<tienda-list></tienda-list>'
      });
  });
