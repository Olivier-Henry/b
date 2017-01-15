
app.controller('finishController', function($scope, $mdSidenav){
    $scope.finishs = [];
    $scope.current = {};
    
     $scope.toggleNav = function(){
        $mdSidenav('left').toggle();
    };
});


