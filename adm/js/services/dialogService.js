
app.factory('dialogFactory', function ($mdDialog, $mdToast) {
    var dg = {
        getDialog: function (ev, scope, ctxFactory, template) {
            $mdDialog.show({
                controller: function (scope, $mdDialog) {
                    
                    scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
                    
                    scope.cancel = function () {
                        scope.current = {};
                        $mdDialog.cancel();
                    };

                    scope.save = function (form) {

                        if (form.$invalid)
                            return false;

                        ctxFactory.save(scope.current)
                                .then(
                                        function (r) {
                                            $mdToast.show(
                                                    $mdToast.simple()
                                                    .textContent('Mise à jour effectuée!')
                                                    .position('bottom right')
                                                    .hideDelay(2000)
                                                    );
                                            scope.refresh();
                                        }
                                );

                        $mdDialog.cancel();
                    };
                },
                scope: scope.$new(),
                templateUrl: '../../b/adm/partials/dialogs/' + template + '.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true // Only for -xs, -sm breakpoints.
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

