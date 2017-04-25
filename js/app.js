var app = angular.module('ngApp', [ 'ngRoute','ngMaterial']);
app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {templateUrl: 'partials/index.html'})
            .otherwise({redirectTo: '/'});
});


