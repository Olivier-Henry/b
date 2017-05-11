(function ()
{
    'use strict';

    angular
            .module('app.e-commerce')
            .controller('TypesController', TypesController);

    /** @ngInject */
    function TypesController($state, Type, urls)
    {
        var vm = this;

        vm.urls = urls;
        vm.types = [];
        // Data
        Type.getAll()
                .then(function (response) {
                    vm.types = response;
                });


        // Methods
        vm.gotoTypeDetail = gotoTypeDetail;

        //////////

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoTypeDetail(type)
        {
            $state.go('app.e-commerce.type', {from: 'app.e-commerce.types', id: type.id, type: type});
        }
    }
})();

