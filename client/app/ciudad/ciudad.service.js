'use strict';
function ciudadService($resource,API){
  return $resource(API+'/api/ciudades/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}
ciudadService.$inject = ['$resource','API'];
angular.module('administracionRemotaApp')
  .factory('ciudadService', ciudadService);
