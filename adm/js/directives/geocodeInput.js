
app.directive('geocodeInput', function(GeocodeFactory){
    return {
        restrict: 'A',
        scope: {
          ngModel: '='  
        },
        controller: function(){
            GeocodeFactory.create();
        }
//        link: function(scope, element, attr){
//           
//            console.log(element);
//            console.log(attr);
//            
//            scope.getLocation = function(){
//                console.log('iv');
//            };
//            
//             console.log(scope);
//        }
    };
});


