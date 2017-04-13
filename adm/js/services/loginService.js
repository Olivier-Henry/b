
app.factory('loginFactory', function ($http) {

    return {
        auth: function (user) {
            return $http({
                method: 'POST',
                skipAuthorization: true,
                url: '../../b/back/api/index.php/user/auth',
                data: user,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (data) {
                return data.data;
            }).then(function (error) {
                console.log(error);
            });
        }
    };
});


