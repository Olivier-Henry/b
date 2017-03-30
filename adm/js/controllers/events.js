
app.controller('eventController', function($scope, genericFactory, dialogFactory, GeocodeFactory, $mdSidenav){
    $scope.events = [];
    $scope.current = {};

    $scope.factory = genericFactory.create('event');
    
    $scope.refresh = function () {
        $scope.events = $scope.factory.getAll()
                .then(function (r) {
                    $scope.events = r;
                    for(var i = 0; i< $scope.events.length; i++){
                        $scope.events[i].map = {
                          zoom: 14,
                          center: {
                              latitude: 45,
                              longitude: -73
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
    
    $scope.getLocation = function(address){
        var result = GeocodeFactory.query(address);
           console.log(result);
           return result;
    };
    
//    uiGmapGoogleMapApi.then(function(){
//       
//    });
});

