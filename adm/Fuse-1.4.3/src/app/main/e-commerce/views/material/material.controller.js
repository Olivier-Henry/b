(function ()
{
    'use strict';

    angular
            .module('app.e-commerce')
            .controller('MaterialController', MaterialController);

    /** @ngInject */
    function MaterialController($document, $state, Material, Type, $stateParams, urls){
        
        var vm = this;
        
        vm.material = $stateParams.material;
        vm.types = [];
        
        Type.getAll()
                .then(function(data){
                    console.log(data);
                vm.types = data;
        });
        
        vm.gotoMaterials = function(){
             $state.go('app.e-commerce.materials');
        };
        vm.gotoTypes = function(){
             $state.go('app.e-commerce.type', {from: { state: 'app.e-commerce.materials.detail', params: $stateParams }, id: null, type: null });
        };
        
        
    }
    
})();

