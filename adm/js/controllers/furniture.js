

app.controller('furnitureController', function ($scope, $mdDialog, genericFactory, $mdSidenav, dialogFactory, FileUploader) {

    $scope.furnitures = [];
    $scope.types = [];
    $scope.finishs = [];

    $scope.current = {};

    $scope.factory = genericFactory.create('furniture');
    $scope.finishsFac = genericFactory.create('finish');
    $scope.typesFac = genericFactory.create('furnituretype');

    $scope.types = $scope.typesFac.getAll()
            .then(function (r) {
                $scope.types = r;
            });

    $scope.finishs = $scope.finishsFac.getAll()
            .then(function (r) {
                $scope.finishs = r;
            });


    $scope.refresh = function () {
        $scope.furnitures = $scope.factory.getAll()
                .then(function (r) {
                    $scope.furnitures = r;
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

    $scope.addImages = function (furniture, i) {
        var input = document.getElementById('upload' + i);
        input.click();

        console.log(furniture);
    };

    $scope.dialog = function (ev) {
        dialogFactory.getDialog(ev, $scope, $scope.factory, 'furnitured');

    };

    $scope.toggleNav = function () {
        $mdSidenav('left').toggle();
    };

    $scope.setUploadingPath = function (furniture) {
        return {
            url: '../back/api/index.php/image/save/' + furniture.id,
            autoUpload: true,
            onComplete: function(response){
                if(+response.id > 0){
                    furniture.pictures.push(response);
                }
            }
        };
    };
    
    $scope.uploader = new FileUploader({
        url: '../back/api/index.php/image/save',
        autoUpload: true
    });
    

});


