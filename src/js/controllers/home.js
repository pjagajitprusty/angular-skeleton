(function() {
  'use strict';
  angular
    .module('Angular-Skeleton')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
  function HomeController() {
    var self = this
    self.welcomeText = 'Home page goes here'
  }

}());
