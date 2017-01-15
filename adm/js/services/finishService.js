
app.factory('finishFactory', function ($http) {
    var factory = {
        getOne: function (id) {
            return $http.get('/b/back/api/index.php/finish/get/' + +id)
                    .then(
                            function (data) {
                                console.log(data);
                            },
                            function (error) {

                            }
                    );
        },
        getAll: function () {
            return $http.get('/b/back/api/index.php/finish/get')
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
            return $http.post('/b/back/api/index.php/finish/save', obj)
                    .then(
                            function (data) {
                                return data.data;
                            }, function (error) {
                        console.log(error);

                    }
                    );
        },
        remove: function (obj) {
            return $http.post('/b/back/api/index.php/finish/delete', obj)
                    .then(
                            function (data) {
                                return data.data;
                            }, function (error) {
                        console.log(error);
                    }
                    );
        }
    };

    return factory;
});



