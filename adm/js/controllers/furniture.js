

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
                    console.log(r);
                    $scope.furnitures = r;
                });
    };

    $scope.refresh();

    $scope.edit = function (ty, ev) {
        $scope.current = ty;
        console.log(ty);
        //$scope.current.type = $scope.current.type[0];
        //$scope.current.finish = $scope.current.finish[0];
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
            autoUpload: true
        };
    };
    
    $scope.uploader = new FileUploader({
        url: '../back/api/index.php/image/save',
        autoUpload: true
    });
    

//    var uploader = $scope.uploader = new FileUploader(
////            {
////        url: '../back/api/index.php/image/save/' + id,
////        autoUpload: true
////    }
//            );

    // FILTERS

//    uploader.filters.push({
//        name: 'customFilter',
//        fn: function (item /*{File|FileLikeObject}*/, options) {
//            return this.queue.length < 10;
//        }
//    });

    // CALLBACKS

//    uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
//        console.info('onWhenAddingFileFailed', item, filter, options);
//    };
//    uploader.onAfterAddingFile = function (fileItem) {
//        console.info('onAfterAddingFile', fileItem);
//    };
//    uploader.onAfterAddingAll = function (addedFileItems) {
//        console.info('onAfterAddingAll', addedFileItems);
//    };
//    uploader.onBeforeUploadItem = function (item) {
//        console.info('onBeforeUploadItem', item);
//    };
//    uploader.onProgressItem = function (fileItem, progress) {
//        console.info('onProgressItem', fileItem, progress);
//    };
//    uploader.onProgressAll = function (progress) {
//        console.info('onProgressAll', progress);
//    };
//    uploader.onSuccessItem = function (fileItem, response, status, headers) {
//        if (!response.error) {
//            $scope.user.newimg = response.newfilename;
//        }
//    };
//    uploader.onErrorItem = function (fileItem, response, status, headers) {
//        console.info('onErrorItem', fileItem, response, status, headers);
//    };
//    uploader.onCancelItem = function (fileItem, response, status, headers) {
//        console.info('onCancelItem', fileItem, response, status, headers);
//    };
//    uploader.onCompleteItem = function (fileItem, response, status, headers) {
//        console.info('onCompleteItem', fileItem, response, status, headers);
//    };
//    uploader.onCompleteAll = function () {
//        console.info('onCompleteAll');
//    };
//
//    console.info('uploader', uploader);
});


