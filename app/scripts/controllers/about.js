'use strict';

/**
 * @ngdoc function
 * @name mydemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mydemoApp
 */
angular.module('mydemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
