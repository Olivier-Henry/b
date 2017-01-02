
app.factory('typeFactory', function ($http) {
    var factory = {
        getOne: function (id) {
            return $http.get('/b/back/api/index.php/furnituretype/get/' + +id)
                    .then(
                            function (data) {
                                console.log(data);
                            },
                            function (error) {

                            }
                    );
        },
        getAll: function () {
            return $http.get('/b/back/api/index.php/furnituretype/get')
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
            return $http.post('/b/back/api/index.php/furnituretype/save', obj)
                    .then(
                            function (data) {
                                return data.data;
                            }, function (error) {
                        console.log(error);

                    }
                    );
        },
        remove: function (obj) {
            return $http.post('/b/back/api/index.php/furnituretype/delete', obj)
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

