
app.directive('imageUpload', function (genericFactory) {

    return {
        link: function (scope, element, attrs) {
            element.on('change', function (evt) {
                var files = evt.target.files;

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


