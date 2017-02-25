
app.factory('dialogFactory', function ($mdDialog) {
    var dg = {
        getDialog: function (ev, scope, ctxFactory, template) {
            $mdDialog.show({
                controller: function (scope, $mdDialog) {
                    scope.cancel = function () {
                        scope.current = {};
                        $mdDialog.cancel();
                    };

                    scope.save = function () {
                        console.log(scope.current);
                        ctxFactory.save(scope.current)
                                .then(
                                        function (r) {
                                            console.log(r);
                                            scope.refresh();
                                        }
                                );

                        $mdDialog.cancel();
                    };
                },
                scope: scope.$new(),
                templateUrl: '/b/adm/partials/dialogs/' + template + '.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
                    .then(function (answer) {
                        scope.status = 'You said the information was "' + answer + '".';
                    }, function () {
                        scope.status = 'You cancelled the dialog.';
                    });
        }
    };
    return dg;
});
