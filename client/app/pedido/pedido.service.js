'use strict';
function pedidoService($resource,API){
  return $resource(API+'/api/departamentos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}
pedidoService.$inject = ['$resource','API'];
angular.module('administracionRemotaApp')
  .factory('pedidoService', pedidoService);
