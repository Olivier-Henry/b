app.factory('genericFactory', function ($http) {

    return {
        create: function (serviceName) {
            var factory = {
                getOne: function (id) {
                    return $http.get('../../b/back/api/index.php/' + serviceName + '/get/' + +id)
                            .then(
                                    function (data) {
                                        console.log(data);
                                    },
                                    function (error) {

                                    }
                            );
                },
                getAll: function () {
                    return $http({
                        method: 'GET',
                        url: '../../b/back/api/index.php/' + serviceName + '/get',
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
                        url: '../../b/back/api/index.php/' + serviceName + '/save',
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
                    return $http.post({
                        method: 'POST',
                        url: '../../b/back/api/index.php/' + serviceName + '/delete',
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

            return factory;
        }
    };
});