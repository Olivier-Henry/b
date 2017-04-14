app.controller('loginController', function ($scope, loginFactory, jwtHelper, store, $location) {

    $scope.user = {
        login: 'test',
        password: 'test'
    };

    $scope.login = function () {

        var r = loginFactory.auth($scope.user)
                .then(function (response) {
                    if (+response.code === 0) {
                        store.set('token', response.response.token);
                        $location.path("/types");
                    }
                });

    };
});

