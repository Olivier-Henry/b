

var app = angular.module('ngAdmin', [ 'ngRoute','ngMaterial', 'ngAnimate']);
app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {templateUrl: 'partials/index.html'})
            .when('/types', {templateUrl: 'partials/types.html'})
            .otherwise({redirectTo: '/'});
});

