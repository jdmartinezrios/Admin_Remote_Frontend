'use strict';

function authService($auth, $state) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  var auth = {
    login: login,
    logout: logout,
    isAdmin: isAdmin
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

  function logout() {}

  function isAdmin() {}

  return auth;

}

authService.$inject = ['$auth', '$state'];
angular.module('administracionRemotaApp')
  .factory('authService', authService);
