(function ()
{
    'use strict';

    angular
            .module('app.e-commerce',
                    [
                        // 3rd Party Dependencies
                        'flow',
                        'nvd3',
                        'textAngular',
                        'uiGmapgoogle-maps',
                        'xeditable',
                        'md.data.table'
                    ]
                    )
            .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
                .state('app.e-commerce', {
                    abstract: true,
                    url: '/e-commerce'
                })
                .state('app.e-commerce.dashboard', {
                    url: '/dashboard',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/e-commerce/views/dashboard/dashboard.html',
                            controller: 'DashboardEcommerceController as vm'
                        }
                    },
                    resolve: {
                        Dashboard: function (msApi)
                        {
                            return msApi.resolve('e-commerce.dashboard@get');
                        }
                    },
                    bodyClass: 'ecommerce',
                    requiresLogin: true
                })
                .state('app.e-commerce.products', {
                    url: '/products',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/e-commerce/views/products/products.html',
                            controller: 'ProductsController as vm'
                        }
                    },
                    resolve: {
                        Furniture: function (apiResolver) {
                            return apiResolver.resolve('generic@create', 'furniture', true);
                        }
                    },
                    bodyClass: 'e-commerce',
                    requiresLogin: true
                })
                .state('app.e-commerce.materials', {
                    url: '/materials',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/e-commerce/views/materials/materials.html',
                            controller: 'MaterialsController as vm'
                        }
                    },
                    resolve: {
                        Material: function (apiResolver) {
                            return apiResolver.resolve('generic@create', 'material', true);
                        }
                    },
                    bodyClass: 'e-commerce',
                    requiresLogin: true
                })
                .state('app.e-commerce.products.detail', {
                    url: '/:id',
                    params: {id: null, furniture: null},
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/e-commerce/views/product/product.html',
                            controller: 'ProductController as vm'
                        }
                    },
                    resolve: {
                        Product: function (msApi)
                        {
                            return msApi.resolve('e-commerce.product@get');
                        },
                        Furniture: function (apiResolver) {
                            return apiResolver.resolve('generic@create', 'furniture', true);
                        },
                        Material: function (apiResolver) {
                            return apiResolver.resolve('generic@create', 'material', true);
                        }
                    },
                    bodyClass: 'e-commerce',
                    requiresLogin: true
                })
                .state('app.e-commerce.materials.detail', {
                    url: '/:id',
                    params: {id: null, material: null},
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/e-commerce/views/material/material.html',
                            controller: 'MaterialController as vm'
                        }
                    },
                    resolve: {
                        Material: function (apiResolver) {
                            return apiResolver.resolve('generic@create', 'material', true);
                        },
                        Type: function (apiResolver) {
                            return apiResolver.resolve('generic@create', 'type', true);
                        }
                    },
                    bodyClass: 'e-commerce',
                    requiresLogin: true
                })
                .state('app.e-commerce.types', {
                    url: '/types',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/e-commerce/views/types/types.html',
                            controller: 'TypesController as vm'
                        }
                    },
                    resolve: {
                        Type: function (apiResolver) {
                            return apiResolver.resolve('generic@create', 'type', true);
                        }
                    },
                    bodyClass: 'e-commerce',
                    requiresLogin: true
                })
                .state('app.e-commerce.type', {
                    url: '/type/:id',
                    params: {from: null, id: null, type: null},
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/e-commerce/views/type/type.html',
                            controller: 'TypeController as vm'
                        }
                    },
                    resolve: {
                        Type: function (apiResolver) {
                            return apiResolver.resolve('generic@create', 'type', true);
                        }
                    },
                    bodyClass: 'e-commerce',
                    requiresLogin: true
                })
                .state('app.e-commerce.orders', {
                    url: '/orders',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/e-commerce/views/orders/orders.html',
                            controller: 'OrdersController as vm'
                        }
                    },
                    resolve: {
                        Orders: function (msApi)
                        {
                            return msApi.resolve('e-commerce.orders@get');
                        },
                        Statuses: function (msApi)
                        {
                            return msApi.resolve('e-commerce.statuses@get');
                        }
                    },
                    bodyClass: 'e-commerce',
                    requiresLogin: true
                })
                .state('app.e-commerce.orders.detail', {
                    url: '/:id',
                    views: {
                        'content@app': {
                            templateUrl: 'app/e-commerce/views/order/order.html',
                            controller: 'OrderController as vm'
                        }
                    },
                    resolve: {
                        Order: function (msApi)
                        {
                            return msApi.resolve('e-commerce.order@get');
                        },
                        Statuses: function (msApi)
                        {
                            return msApi.resolve('e-commerce.statuses@get');
                        }
                    },
                    bodyClass: 'e-commerce',
                    requiresLogin: true
                });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/e-commerce');

        // Api
        msApiProvider.register('e-commerce.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('e-commerce.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('e-commerce.materials', ['app/data/e-commerce/products.json']);
        msApiProvider.register('e-commerce.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('e-commerce.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('e-commerce.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('e-commerce.order', ['app/data/e-commerce/order.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('e-commerce', {
            title: 'E-Commerce',
            icon: 'icon-cart',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('e-commerce.dashboard', {
            title: 'Dashboard',
            state: 'app.e-commerce.dashboard'
        });

        msNavigationServiceProvider.saveItem('e-commerce.products', {
            title: 'Meubles',
            state: 'app.e-commerce.products'
        });

        msNavigationServiceProvider.saveItem('e-commerce.materials', {
            title: 'Matières',
            state: 'app.e-commerce.materials'
        });

        msNavigationServiceProvider.saveItem('e-commerce.types', {
            title: 'Caractéristiques',
            state: 'app.e-commerce.types'
        });

        msNavigationServiceProvider.saveItem('e-commerce.orders', {
            title: 'Orders',
            state: 'app.e-commerce.orders'
        });
    }
})();