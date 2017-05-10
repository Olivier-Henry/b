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
                    console.log(vm.materials);
        });


        // Methods
        vm.gotoMaterialDetail = gotoMaterialDetail;

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

