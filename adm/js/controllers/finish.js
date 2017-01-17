
app.controller('finishController', function ($scope, finishFactory, dialogFactory, $mdSidenav, genericFactory) {
    $scope.finishs = [];
    $scope.current = {};

    $scope.factory = genericFactory.create('finish');
    
    $scope.refresh = function () {
        $scope.finishs = $scope.factory.getAll()
                .then(function (r) {
                    $scope.finishs = r;
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
        dialogFactory.getDialog(ev, $scope, $scope.factory, 'finishd');
    };

    $scope.toggleNav = function () {
        $mdSidenav('left').toggle();
    };
});


