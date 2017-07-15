'use strict';

angular.module('administracionRemotaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('departamento-list', {
        url: '/departamento-list',
        template: '<departamento-list></departamento-list>'
      });
  });
