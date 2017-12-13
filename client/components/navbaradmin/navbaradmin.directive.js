'use strict';

angular.module('administracionRemotaApp')
.directive('navbarAdmin', function(){
  return{
    restrict:'E',
    templateUrl:'components/navbaradmin/navbaradmin.html',
    link: function(scope, element){
      element.addClass('navbarAdmin');
    }
  };
});
