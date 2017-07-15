'use strict';

angular.module('administracionRemotaApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('pedido-create', {
      url: '/pedido-create',
      template: '<pedido-create></pedido-create>'
    })
      .state('pedido-list', {
        url: '/pedido-list',
        template: '<pedido-list></pedido-list>'
      });
  });
