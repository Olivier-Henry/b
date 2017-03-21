
app.directive('imageSlider', function () {
    return {
        restrict: 'E',
        templateUrl: '../adm/partials/directives/slider.html',
        scope: {
            pictures: '='
        }
    };
});


