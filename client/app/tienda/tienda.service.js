'use strict';
function tindaService($resource,API){
  return $resource(API+'/api/tiendas/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}
tindaService.$inject = ['$resource','API'];
angular.module('administracionRemotaApp')
  .factory('tindaService', tindaService);
