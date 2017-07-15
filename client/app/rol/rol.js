'use strict';

angular.module('administracionRemotaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rol-list', {
        url: '/rol-list',
        template: '<rol-list></rol-list>'
      });
  });
