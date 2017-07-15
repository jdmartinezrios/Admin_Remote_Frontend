'use strict';

angular.module('administracionRemotaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documento-list', {
        url: '/documento-list',
        template: '<documento-list></documento-list>'
      });
  });
