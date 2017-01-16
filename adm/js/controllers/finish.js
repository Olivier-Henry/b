
app.controller('finishController', function ($scope, finishFactory, dialogFactory, $mdSidenav) {
    $scope.finishs = [];
    $scope.current = {};


    $scope.refresh = function () {
        $scope.types = finishFactory.getAll()
                .then(function (r) {
                    $scope.types = r;
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
        finishFactory.remove(ty)
                .then(function (r) {
                    $scope.refresh();
                });
    };


    $scope.dialog = function (ev) {
        dialogFactory.getDialog(ev, $scope, finishFactory, 'finishd');
    };

    $scope.toggleNav = function () {
        $mdSidenav('left').toggle();
    };
});


