(function ()
{
    'use strict';

    angular
            .module('app.e-commerce')
            .controller('TypeController', TypeController);

    /** @ngInject */
    function TypeController($document, $state, Type, Attribute, $stateParams, urls){
        
        var vm = this;
        
        console.log($stateParams);
        
        vm.type = $stateParams.type;
        vm.attributes = [{}];
        
        if(!$stateParams.id && !$stateParams.type){
            vm.type = {};
        }
        
        vm.processSaving = function(){
            Type.save(vm.type).
                    then(function(response){
                        console.log(response);
                        if(!vm.type.id){
                            
                        }
                    });
        };
        
        
        vm.gotoTypes = function(){
             $state.go('app.e-commerce.materials');
        };
        
        
    }
    
})();