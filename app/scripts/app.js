'use strict';

/**
 * @ngdoc overview
 * @name raizenApp
 * @description
 * # raizenApp
 *
 * Main module of the application.
 */
angular
  .module('raizenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'googlechart'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/user_statistics', {
        templateUrl: 'views/statistics.html',
        controller: 'UserStatisticsCtrl'
      })
      .when('/pages', {
        templateUrl: 'views/pages.html',
        controller: 'PagesCtrl'
      })
      .when('/map_site', {
        templateUrl: 'views/mapsite.html',
        controller: 'MapSiteCtrl'
      })
      .when('/user_flow', {
        templateUrl: 'views/user_flow.html',
        controller: 'UserFlowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // use the HTML5 History API

  });
