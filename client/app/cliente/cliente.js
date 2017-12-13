'use strict';

angular.module('administracionRemotaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('cliente-create', {
        url: '/cliente-create',
        parent:'pedido-list',
        template: '<cliente-create></cliente-create>',
      })
      .state('cliente-list', {
        url: '/cliente-list',
        parent:'pedido-list',
        template: '<cliente-list></cliente-list>',
      });
  });
