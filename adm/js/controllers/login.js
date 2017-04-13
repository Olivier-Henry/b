app.controller('loginController', function ($scope, loginFactory) {

    $scope.user = {
        login: 'test',
        password: 'test'
    };

    $scope.login = function () {

        var r = loginFactory.auth($scope.user)
                .then(function (response) {
                    console.log(response);
                });

    };
});

