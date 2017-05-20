(function ()
{
    'use strict';

    angular
        .module('app.e-commerce')
        .controller('MaterialsController', MaterialsController);

    /** @ngInject */
    function MaterialsController($state, Material, urls)
    {
        var vm = this;
       
        vm.urls = urls;
        
        // Data
        vm.materials = Material.getAll()
                .then(function(response){
                    vm.materials = response;   
        });


        // Methods
        vm.gotoMaterialDetail = gotoMaterialDetail;
        
        vm.add = function(){
             $state.go('app.e-commerce.materials.detail', {id: null, material: null});
        };

        //////////

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoMaterialDetail(material)
        {
            $state.go('app.e-commerce.materials.detail', {id: material.id, material: material});
        }
        
      
    }
})();

