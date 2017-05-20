(function ()
{
    'use strict';

    angular
            .module('fuse')
            .constant('WEBROOT', 'http://localhost/b/')
            .constant('PRODUCT_PICTURES', 'images/products/')
            .constant('PICTURES', 'images/')
            .service('urls', function (WEBROOT, PRODUCT_PICTURES, PICTURES) {
                this.productPictures = WEBROOT + PRODUCT_PICTURES;
                this.pictures = WEBROOT + PICTURES;
            });
})();
