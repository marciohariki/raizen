'use strict';

/**
 * @ngdoc function
 * @name raizenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raizenApp
 */
angular.module('raizenApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
