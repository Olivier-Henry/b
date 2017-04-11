
app.controller('eventController', function ($scope, genericFactory, dialogFactory, GeocodeFactory, uiGmapGoogleMapApi, $mdSidenav) {
    $scope.events = [];
    $scope.current = {};

    $scope.factory = genericFactory.create('event');

    $scope.refresh = function () {
        $scope.events = $scope.factory.getAll()
                .then(function (r) {
                    $scope.events = r;
            
                    console.log(r);
                    for (var i = 0; i < $scope.events.length; i++) {
                        $scope.events[i].map = {
                            zoom: 14,
                            center: {
                                latitude: $scope.events[i].lat,
                                longitude: $scope.events[i].lon
                            }
                        };
                        
                        $scope.events[i].descPos = i % 2 === 0 ? 1 : 2;
                        $scope.events[i].mapPos = i % 2 === 0 ? 2 : 1;
                        

                        $scope.events[i].marker = {
                            id: i,
                            coords: {
                                latitude: $scope.events[i].lat,
                                longitude: $scope.events[i].lon
                            }
                        };
                    }
                });
    };

    $scope.refresh();

    $scope.edit = function (ty, ev) {
        $scope.current = ty;
        $scope.dialog(ev);
    };

    $scope.add = function (ev) {
        $scope.current = {};
        $scope.dialog(ev);
    };

    $scope.remove = function (ty) {
        $scope.factory.remove(ty)
                .then(function (r) {
                    $scope.refresh();
                });
    };


    $scope.dialog = function (ev) {
        dialogFactory.getDialog(ev, $scope, $scope.factory, 'eventd');
    };

    $scope.toggleNav = function () {
        $mdSidenav('left').toggle();
    };

    $scope.getLocation = function (address) {
        var result = GeocodeFactory.query(address);
        return result;
    };

    $scope.setCoordinates = function (item) {
        $scope.current.lat = item.geometry.location.lat();
        $scope.current.lon = item.geometry.location.lng();
    };

    uiGmapGoogleMapApi.then(function () {

    });

});

