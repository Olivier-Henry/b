(function ()
{
    'use strict';

    angular
            .module('app.e-commerce')
            .controller('MaterialController', MaterialController);

    /** @ngInject */
    function MaterialController($document, $state, Material, Type, $stateParams, urls) {

        var vm = this;

        vm.material = $stateParams.material;

        vm.types = [];

        if (!vm.material) {
            if ($stateParams.id) {
                Material.getOne($stateParams.id)
                        .then(function (data) {
                            vm.material = data[0];

                            if (!vm.material.types) {
                                vm.material.types = [{type_id: null}];
                            }
                        });
            }else{
                vm.material = {};
            }
        }


        Type.getAll()
                .then(function (data) {
                    vm.types = data;
                });

        if (vm.material && !vm.material.types) {
            vm.material.types = [{type_id: null}];
        }

        vm.addType = function () {
            vm.material.types.push({type_id: null});
        };

        vm.save = function () {
            console.log(vm.material);
            Material.save(vm.material)
                    .then(function (data) {
                        console.log(data);
                    });
        };

        vm.gotoMaterials = function () {
            $state.go('app.e-commerce.materials');
        };
    }

})();

