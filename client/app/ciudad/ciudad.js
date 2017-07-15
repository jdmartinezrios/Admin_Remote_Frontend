'use strict';

angular.module('administracionRemotaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('ciudad-list', {
        url: '/ciudad-list',
        template: '<ciudad-list></ciudad-list>',
      });
  });
