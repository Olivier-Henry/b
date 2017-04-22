
app.directive('imageSlider', function (genericFactory) {
    return {
        restrict: 'E',
        templateUrl: '../adm/partials/directives/slider.html',
        scope: {
            furniture: '='
        },
        controller: function ($scope) {
            $scope.right = function () {
                $scope.furniture.pictures.push(Object.assign({}, $scope.furniture.pictures[0]));
                $scope.furniture.pictures.shift();
            };
            $scope.left = function () {
                $scope.furniture.pictures.unshift(Object.assign({}, $scope.furniture.pictures[$scope.furniture.pictures.length - 1]));
                $scope.furniture.pictures.pop();

            };
            

            $scope.deletePicture = function () {
                genericFactory.create("image").remove($scope.furniture.pictures[0])
                        .then(
                                function (response) {
                                    $scope.furniture.pictures.shift();
                                }
                        );
            };
        }
    };
});


