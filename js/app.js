var app = angular.module('ngApp', [ 'ngRoute','ngMaterial', 'ngAnimate']);
app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {templateUrl: 'partials/index.html'})
            .otherwise({redirectTo: '/'});
});


