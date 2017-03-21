
app.directive('imageSlider', function () {
    return {
        restrict: 'E',
        templateUrl: '../../partials/directives/slider.html',
        scope: {
            pictures: '=pictures'
        }
    };
});


