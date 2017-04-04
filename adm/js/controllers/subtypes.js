
app.controller('subTypeController', function ($scope, $mdDialog, genericFactory, $mdSidenav, dialogFactory) {

    $scope.subtypes = [];
    $scope.current = {};
    $scope.factory = genericFactory.create('subFurnitureType');

    $scope.refresh = function () {
        $scope.subtypes = $scope.factory.getAll()
                .then(function (r) {
                    $scope.subtypes = r;
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
                    console.log(r);
                    $scope.refresh();
                }
                );
    };

    $scope.dialog = function (ev) {
        dialogFactory.getDialog(ev, $scope, $scope.factory, 'subtyped');

    };
    
    $scope.toggleNav = function(){
        $mdSidenav('left').toggle();
    };
});
