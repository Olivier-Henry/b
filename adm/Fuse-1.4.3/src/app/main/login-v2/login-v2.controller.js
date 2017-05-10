(function ()
{
    'use strict';

    angular
            .module('app.login-v2')
            .controller('LoginV2Controller', LoginV2Controller);

    /** @ngInject */
    function LoginV2Controller(api, store, $state)
    {


        this.user = {};

        this.checkCredentials = function () {
            this.user = api.login.auth(this.user)
                    .then(function (response) {
                        if (+response.code === 0) {
                            store.set('token', response.response.token);
                            $state.go('app.sample');
                        }
                    });
        };
    }
})();