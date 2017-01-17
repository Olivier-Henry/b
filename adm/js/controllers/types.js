
app.controller('typeController', function ($scope, $mdDialog, genericFactory, $mdSidenav, dialogFactory) {

    $scope.types = [];
    $scope.current = {};
    $scope.factory = genericFactory.create('furnituretype');

    $scope.refresh = function () {
        $scope.types = $scope.factory.getAll()
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
        $scope.factory.remove(ty)
                .then(function (r) {
                    console.log(r);
                    $scope.refresh();
                }
                );
    };

    $scope.dialog = function (ev) {
        dialogFactory.getDialog(ev, $scope, $scope.factory, 'typed');

    };
    
    $scope.toggleNav = function(){
        $mdSidenav('left').toggle();
    };
});
