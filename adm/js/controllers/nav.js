
app.controller('navController', function($scope, $location, $mdSidenav){
    
   
    $scope.go = function(path){
        $location.path(path);
        $mdSidenav('left').toggle();
    };  
});


