
app.controller('typeController', function ($scope, $mdDialog, typeFactory, $mdSidenav, dialogFactory) {

    $scope.types = [];
    $scope.current = {};

    $scope.refresh = function () {
        $scope.types = typeFactory.getAll()
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
        typeFactory.remove(ty)
                .then(function (r) {
                    console.log(r);
                    $scope.refresh();
                }
                );
    };

    $scope.dialog = function (ev) {
        dialogFactory.getDialog(ev, $scope, typeFactory, 'typed');

    };
    
    $scope.toggleNav = function(){
        $mdSidenav('left').toggle();
    };
});
