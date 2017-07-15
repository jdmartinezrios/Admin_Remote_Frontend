'use strict';
(function(){

class DocumentoListComponent {
  constructor(documentoService) {
    this.documentoService = documentoService;
  }
  $onInit(){
    this.documentoService.query().$promise
    .then(response => {
      console.log('Documento OK',response);
      this.documentos = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}
angular.module('administracionRemotaApp')
  .component('documentoList', {
    templateUrl: 'app/documento/documento-list/documento-list.html',
    controller: DocumentoListComponent,
    controllerAs:'vm'
  });

})();
