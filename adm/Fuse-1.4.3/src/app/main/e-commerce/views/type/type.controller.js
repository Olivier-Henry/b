(function ()
{
    'use strict';

    angular
            .module('app.e-commerce')
            .controller('TypeController', TypeController);

    /** @ngInject */
    function TypeController($document, $state, Type, Attribute, $stateParams, urls) {

        var vm = this;

        console.log($stateParams);

        vm.type = $stateParams.type;

        if (!$stateParams.id && !$stateParams.type) {
            vm.type = {
                attributes: [{}]
            };
        }

        if ($stateParams.id && !$stateParams.type) {
            Type.getOne($stateParams.id)
                    .then(function (data) {
                        vm.type = data[0];
                    });
        }

        vm.processSaving = function () {
            Type.save(vm.type).
                    then(function (response) {
                        console.log(response);

                    });
        };

        vm.removeAttribute = function (i) {
            vm.type.attributes.splice(i, 1);
        };

        vm.addAttribute = function () {
            vm.type.attributes.push({});
        };


        vm.back = function () {
            if($stateParams.from){
                 $state.go($stateParams.from.state, $stateParams.from.params);
            }else{
                $state.go('app.e-commerce.types');
            }
            
           
        };


    }

})();