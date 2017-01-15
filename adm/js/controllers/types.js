
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
//        $mdDialog.show({
//            controller: function ($scope, $mdDialog) {
//                $scope.cancel = function () {
//                    $scope.current = {};
//                    $mdDialog.cancel();
//                };
//
//                $scope.save = function () {
//                    typeFactory.save($scope.current)
//                            .then(
//                                    function (r) {
//                                        console.log(r);
//                                        $scope.refresh();
//                                    }
//                            );
//
//                    $mdDialog.cancel();
//                };
//            },
//            scope: $scope.$new(),
//            templateUrl: '/b/adm/partials/dialogs/typed.html',
//            parent: angular.element(document.body),
//            targetEvent: ev,
//            clickOutsideToClose: true,
//            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
//        })
//                .then(function (answer) {
//                    $scope.status = 'You said the information was "' + answer + '".';
//                }, function () {
//                    $scope.status = 'You cancelled the dialog.';
//                });
    };
    
    $scope.toggleNav = function(){
        $mdSidenav('left').toggle();
    };
});
