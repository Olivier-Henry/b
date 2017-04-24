
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
            }, function (error) {
                console.log(error);
            });
        },
        getAll: function () {
            return $http({
                method: 'GET',
                url: '../../b/back/api/index.php/jWTUser/get',
                skipAuthorization: false
            })
                    .then(
                            function (data) {
                                return data.data;
                            },
                            function (error) {
                                console.log(error);
                            }
                    );
        },
        save: function (obj) {
            return $http({
                method: 'POST',
                url: '../../b/back/api/index.php/jWTUser/save',
                data: obj,
                skipAuthorization: false
            })
                    .then(
                            function (data) {
                                return data.data;
                            }, function (error) {
                        console.log(error);
                    }
                    );
        },
        remove: function (obj) {
            return $http({
                method: 'POST',
                url: '../../b/back/api/index.php/jWTUser/delete',
                data: obj,
                skipAuthorization: false
            })
                    .then(
                            function (data) {
                                return data.data;
                            }, function (error) {
                        console.log(error);
                    }
                    );
        }
    };
});


