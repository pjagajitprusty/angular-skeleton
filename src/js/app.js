var APP = angular.module('Angular-Skeleton', ['ngAnimate', 'ngRoute', 'ui.bootstrap']);

APP.config(['$routeProvider', routingConfig])
function routingConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : './templates/home.html',
      controller : 'homeController',
      controllerAs : 'vm',
    })

}
