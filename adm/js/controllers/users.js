
app.controller('userController', function($scope, loginFactory, dialogFactory, $mdSidenav, FileUploader){
    $scope.users = [];
    $scope.current = {};

    $scope.refresh = function () {
        $scope.users = loginFactory.getAll()
                .then(function (r) {
                    $scope.users = r.response.users;
                    console.log(r);
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
        loginFactory.remove(ty)
                .then(function (r) {
                    console.log(r);
                    $scope.refresh();
                }
                );
    };

    $scope.dialog = function (ev) {
        dialogFactory.getDialog(ev, $scope, loginFactory, 'userd');

    };
    
    $scope.toggleNav = function(){
        $mdSidenav('left').toggle();
    };
    
    $scope.addImages = function (user, i) {
        var input = document.getElementById('upload' + i);
        input.click();
    };
    
     $scope.setUploadingPath = function (user) {
        return {
            url: '../back/api/index.php/user/saveimage/' + user.id,
            autoUpload: true,
            onComplete: function(response){
                if(+response.id > 0){
                    user.picture = response.picture;
                }
            }
        };
    };
    
    $scope.uploader = new FileUploader({
        url: '../back/api/index.php/user/saveimage/',
        autoUpload: true
    });
});


