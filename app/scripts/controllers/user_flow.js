'use strict';

/**
 * @ngdoc function
 * @name raizenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raizenApp
 */
angular.module('raizenApp')
    .controller('UserFlowCtrl', function ($scope, $rootScope, $http, $q, $timeout) {
        $rootScope.body_class = 'page-boxed page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-sidebar-closed-hide-logo';
        $rootScope.dashboard_active = true;
        $scope.loading_data = false;
        $scope.flow_column = true;
        $scope.activeStep = function(){
            $scope.flow_column = false;

        }
        
    });
