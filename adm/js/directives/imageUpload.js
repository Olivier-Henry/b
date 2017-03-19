
app.directive('imageUpload', function (genericFactory) {

    return {
        link: function (scope, element, attrs) {
            element.on('change', function (evt) {
                var files = evt.target.files;
//                console.log(scope);
//                console.log(files);
//                console.log(files[0].name);
//                console.log(files[0].size);

                scope.furniture.images = new FormData();

                for (var i = 0; i < files.length; i++) {
                    scope.furniture.images.append('fileUpload', files[i]);
                }
                
                genericFactory.create('image').save(scope.furniture.images)
                        .then(
                            function(response){
                                    console.log(response);
                            }
                        );

            });
        }
    };
});


