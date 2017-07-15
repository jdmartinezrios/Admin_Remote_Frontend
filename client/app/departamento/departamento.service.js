'use strict';
function departamentoService($resource,API){
  return $resource(API+'/api/departamentos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}
departamentoService.$inject = ['$resource','API'];
angular.module('administracionRemotaApp')
  .factory('departamentoService', departamentoService);
