'use strict';

angular.module('administracionRemotaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pais-list', {
        url: '/pais-list',
        template: '<pais-list></pais-list>'
      });
  });
