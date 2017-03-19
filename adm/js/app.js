

var app = angular.module('ngAdmin', ['ngRoute', 'ngMaterial', 'ngAnimate', 'angularFileUpload']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/types', {templateUrl: 'partials/types.html'})
            .when('/subtypes', {templateUrl: 'partials/sub(types.html'})
            .when('/finishes', {templateUrl: 'partials/finish.html'})
            .when('/furniture', {templateUrl: 'partials/furniture.html'})
            .otherwise({redirectTo: '/types'});
});



app.config(function ($mdThemingProvider) {

    var customBackground = {
        '50': '#303030',
        '100': '#666666',
        '200': '#595959',
        '300': '#4d4d4d',
        '400': '#404040',
        '500': '#333',
        '600': '#262626',
        '700': '#1a1a1a',
        '800': '#0d0d0d',
        '900': '#000000',
        'A100': '#ffffff',
        'A200': '#8c8c8c',
        'A400': '#999999',
        'A700': '#000000'
    };
    $mdThemingProvider
            .definePalette('customBackground',
                    customBackground);

    $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('grey')
            .warnPalette('red')
            .backgroundPalette('customBackground');
});

