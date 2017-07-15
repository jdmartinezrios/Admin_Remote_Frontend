'use strict';
function rolService($resource,API){
  return $resource(API+'/api/roles/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}
rolService.$inject = ['$resource','API'];
angular.module('administracionRemotaApp')
  .factory('rolService', rolService);
