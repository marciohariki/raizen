'use strict';

/**
 * @ngdoc function
 * @name raizenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the raizenApp
 */
angular.module('raizenApp')
  .controller('LoginCtrl', function ($scope, $rootScope) {
    $rootScope.body_class = 'login';
    $rootScope.dashboard_active = false;
  });
