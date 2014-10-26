'use strict';

/**
 * @ngdoc function
 * @name raizenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the raizenApp
 */
angular.module('raizenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
