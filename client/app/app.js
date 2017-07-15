'use strict';

angular.module('administracionRemotaApp', [
  'administracionRemotaApp.constants',
   'ngCookies',
   'ngResource',
   'ngSanitize',
   'ui.router',
   'ui.bootstrap',
   'satellizer',
  ])
  .constant('API','http://localhost:8080/AdsiCarlos')
  /*
 +*  Estructura para la configuración de satellizer
 +*/
 .config(function(API, $authProvider){
    $authProvider.loginUrl = API + '/api/auth/login';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'administracionRemotaApp';
  })

  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
