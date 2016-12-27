
app.controller('navController', function($scope, $location){
    
    $scope.go = function(path){
        $location.path(path);
    };  
});


