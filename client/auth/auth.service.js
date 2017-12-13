'use strict';

function authService($auth, $state) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  var auth = {
    login: login,
    logout: logout,
    isAdmin: isAdmin,
    isUser: isUser,
    isAutheticated: isAuthenticated,
    userIn: userIn
  };

  function login(user) {
    $auth.login(user)
      .then(response => {
        console.log('Login ok', response);
        $state.go('pedido-list');
      })
      .catch(err => {
        console.log('Error de login', err);
        $state.go('main');
      });
  }

  function logout() {
    if($auth.isAuthenticated()){
       $auth.logout()
       .then(response =>{
         $state.go('main');
       });     
    }
   
  }

  function isAdmin() {
    if($auth.isAuthenticated){
      if($auth.getPayload().roles.indexOf("ADMIN") !== -1){
        return true;
      }else{
        return false;
      }
      }else{
        return false;
      }
    }

    function isUser(){
      if($auth.isAuthenticated()){
        if($auth.getPayload().roles.indexOf("USER") !== -1){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }

    function userIn(){
      if($auth.isAuthenticated()){
        return $auth.getPayload().user;
      }
    }

  function isAuthenticated(){
    if($auth.isAuthenticated()){
      return true;
    }else{
      return false;
    }
  }
  return auth;

}

authService.$inject = ['$auth', '$state'];
angular.module('administracionRemotaApp')
  .factory('authService', authService);
