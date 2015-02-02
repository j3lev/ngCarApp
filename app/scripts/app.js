'use strict';

/**
 * @ngdoc overview
 * @name ngCarAppApp
 * @description
 * # ngCarAppApp
 *
 * Main module of the application.
 */
angular
  .module('ngCarAppApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
