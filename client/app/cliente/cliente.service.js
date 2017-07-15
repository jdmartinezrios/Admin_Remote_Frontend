'use strict';
function clienteService($resource,API){
  return $resource(API+'/api/clientes/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}
clienteService.$inject = ['$resource','API'];
angular.module('administracionRemotaApp')
  .factory('clienteService', clienteService);
