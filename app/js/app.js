'use strict';


// Declare app level module which depends on filters, and services
angular.module('bookingApp', ['bookingApp.filters', 'bookingApp.services', 'bookingApp.directives', 'bookingApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
