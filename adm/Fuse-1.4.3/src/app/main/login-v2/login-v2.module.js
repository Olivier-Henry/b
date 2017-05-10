(function ()
{
    'use strict';

    angular
        .module('app.login-v2', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.login-v2', {
            url      : '/auth/login',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.login-v2': {
                    templateUrl: 'app/main/login-v2/login-v2.html',
                    controller : 'LoginV2Controller as vm'
                }
            },
            bodyClass: 'login-v2'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/login-v2');

        // Navigation
//        msNavigationServiceProvider.saveItem('login-v2', {
//            title : 'Login v2',
//            state : 'app.login-v2',
//            weight: 2
//        });
    }

})();