(function ()
{
    'use strict';

    angular
            .module('app.e-commerce')
            .controller('TypeController', TypeController);

    /** @ngInject */
    function TypeController($document, $state, Type, $stateParams, urls){
        
        var vm = this;
        
        console.log($stateParams);
        
        vm.type = $stateParams.type;
        vm.attributes = [{}];
        
        if(!$stateParams.id && !$stateParams.type){
            vm.type = {};
        }
        
        
        vm.gotoTypes = function(){
             $state.go('app.e-commerce.materials');
        };
        
        
    }
    
})();