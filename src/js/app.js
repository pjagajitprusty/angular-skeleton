(function() {
  'use strict';
  angular
  .module('Angular-Skeleton', ['ngAnimate', 'ngRoute', 'ui.bootstrap'])
  .config(['$routeProvider', routingConfig])

  function routingConfig($routeProvider) {
    $routeProvider
    .when('/', {
    templateUrl : './templates/home.html',
    controller : 'HomeController',
    controllerAs : 'vm'
    })
  }
}());
