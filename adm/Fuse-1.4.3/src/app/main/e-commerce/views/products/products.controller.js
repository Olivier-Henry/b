(function ()
{
    'use strict';

    angular
        .module('app.e-commerce')
        .controller('ProductsController', ProductsController);

    /** @ngInject */
    function ProductsController($state, Furniture, urls)
    {
        var vm = this;
       
        vm.urls = urls;
        
        // Data
        vm.furnitures = Furniture.getAll()
                .then(function(response){
                    vm.furnitures = response;   
                    console.log(vm.furnitures);
        });


        // Methods
        vm.gotoProductDetail = gotoProductDetail;

        //////////

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoProductDetail(furniture)
        {
            $state.go('app.e-commerce.products.detail', {id: furniture.id, furniture: furniture});
        }
    }
})();