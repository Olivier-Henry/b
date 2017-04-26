var app = angular.module('ngApp', [ 'ngRoute','ngMaterial']);
app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {templateUrl: 'partials/index.html'})
            .otherwise({redirectTo: '/'});
});

app.config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .warnPalette('red')
        .accentPalette('brown')
        .dark();
    });


