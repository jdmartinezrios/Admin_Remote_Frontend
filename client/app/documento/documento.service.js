'use strict';
function documentoService($resource,API){
  return $resource(API+'/api/documentos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}
documentoService.$inject = ['$resource','API'];
angular.module('administracionRemotaApp')
  .factory('documentoService', documentoService);
