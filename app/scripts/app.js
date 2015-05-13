'use strict';

/**
 * @ngdoc overview
 * @name mydemoApp
 * @description
 * # mydemoApp
 *
 * Main module of the application.
 */
angular
  .module('mydemoApp', [
    'ngResource',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', 
      function ($stateProvider, $urlRouterProvider) {
    
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");

    // Now set up the states
    $stateProvider
      .state('home', {
        url : '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url : '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  }])
  .config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }]);
