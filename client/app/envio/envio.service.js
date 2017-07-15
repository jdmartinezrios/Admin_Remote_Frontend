'use strict';
function envioService($resource,API){
  return $resource(API+'/api/envios/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}
envioService.$inject = ['$resource','API'];
angular.module('administracionRemotaApp')
  .factory('envioService', envioService);
