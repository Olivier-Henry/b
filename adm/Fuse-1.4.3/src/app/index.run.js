(function ()
{
    'use strict';

    angular
            .module('fuse')
            .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state, store, jwtHelper)
    {
        // Activate loading indicator
        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function (e, to)
        {
            
            
            $rootScope.loadingProgress = true;
            if (to && to.requiresLogin) {
                if (!store.get('token') || jwtHelper.isTokenExpired(store.get('token'))) {
                    e.preventDefault();
                    $state.go('app.login-v2');
                }
            }
        });

        // De-activate loading indicator
        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
        {
            $timeout(function ()
            {
                $rootScope.loadingProgress = false;
            });
        });

        // Store state in the root scope for easy access
        $rootScope.state = $state;

        // Cleanup
        $rootScope.$on('$destroy', function ()
        {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });
    }
})();