import * as angular from 'angular';

angular.module('Angular2', [
    require('angular-ui-bootstrap'), 
    require('angular-route'), 
    require('angular-animate')
]);

angular.module('Angular@2').config(function($routeProvider:ng.route.IRouteProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});


