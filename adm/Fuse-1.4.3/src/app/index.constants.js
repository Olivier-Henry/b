(function ()
{
    'use strict';

    angular
            .module('fuse')
            .constant('WEBROOT', 'http://localhost/b/')
            .constant('PRODUCT_PICTURES', 'images/products/')
            .service('urls', function (WEBROOT, PRODUCT_PICTURES) {
                this.productPictures = WEBROOT + PRODUCT_PICTURES;
            });
})();
