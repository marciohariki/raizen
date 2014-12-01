'use strict';

/**
 * @ngdoc function
 * @name raizenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raizenApp
 */
angular.module('raizenApp')
    .controller('MapSiteCtrl', function ($scope, $rootScope, $http, $q, $timeout) {
        $rootScope.body_class = 'page-boxed page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-sidebar-closed-hide-logo';
        $rootScope.dashboard_active = true;
        $scope.loading_data = true;
        $scope.getColorClass = function(value){
            if (value > 9000){
                return "red";
            } else if (value > 5000) {
                return "orange";
            } else if (value > 1000) {
                return "yellow";
            } else if (value > 200) {
                return "green";
            } else {
                return "blue";
            }
        }
        $http.get('http://localhost:8000/map_site_info').success(function(data){
            var allEntries = angular.fromJson(data);
            $scope.rootPage = data[0].fields;
            $scope.rootPage.childPages = []
            allEntries.forEach(function(entry){
                entry.childPages = [];
                if(entry.fields.parent_page == 1){
                    $scope.rootPage.childPages.push(entry);
                }
            });
            allEntries.forEach(function(entry){
                $scope.rootPage.childPages.forEach(function(page){
                    if(entry.fields.parent_page == page.pk){
                        page.childPages.push(entry);
                    }
                });
            });
            $scope.rootPage.childPages.forEach(function(page){
                page.childPages.forEach(function(page2){
                    allEntries.forEach(function(entry){
                        if(entry.fields.parent_page == page2.pk){
                            page2.childPages.push(entry);
                        }
                    });
                });
            });
            $scope.loading_data = false;
        });
    });
