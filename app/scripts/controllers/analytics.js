'use strict';

/**
 * @ngdoc function
 * @name raizenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raizenApp
 */
angular.module('raizenApp')
    .directive('onLastRepeat', function() {
        return function(scope, element, attrs) {
            if (scope.$last) setTimeout(function(){
                scope.$emit('onRepeatLast', element, attrs);
            }, 2);
        };
    })
    .controller('UserStatisticsCtrl', function ($scope, $rootScope, $http, $q, $timeout) {
        $rootScope.body_class = 'page-boxed page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-sidebar-closed-hide-logo';
        $rootScope.dashboard_active = true;
        $scope.loading_data = true;
        var user_statistics = $http.get('http://localhost:8000/sessions_info').success(function(data){
            $scope.loading_data = false;
            $scope.users_list = angular.fromJson(data);
        });
        $scope.$on('onRepeatLast', function(scope, element, attrs){
              TableManaged.init();
        });
    })
    .controller('PagesCtrl', function ($scope, $rootScope, $http, $q, $timeout) {
        $rootScope.body_class = 'page-boxed page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-sidebar-closed-hide-logo';
        $rootScope.dashboard_active = true;
        $scope.loading_data = true;
        var user_statistics = $http.get('http://localhost:8000/pages_info').success(function(data){
            $scope.loading_data = false;
            $scope.pages_list = angular.fromJson(data);
        });
        $scope.$on('onRepeatLast', function(scope, element, attrs){
            TableManaged.init2();
        });
    });
