'use strict';

angular.module('administracionRemotaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('envio-list', {
        url: '/envio-list',
        template: '<envio-list></envio-list>'
      });
  });
