app.controller('headerController', function ($scope, $animate) {

    $scope.entered = false;

//    $scope.endAnimateCalendar = function (event) {
//        $scope.animateCalendar = event.animationName == 'calendar' ? true : false;
//        $scope.$apply();
//        console.log('hey');
//    };

//   $animate.addClass(angular.element(document).find('.animate-show-calendar'), '.hide').then(function(){
//        console.log('promise');
//   });


    $animate.on('removeClass', angular.element(document).find('.animate-show-calendar'), function (element, phase) {
        console.log(element);
    });
});

