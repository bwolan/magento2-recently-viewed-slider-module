/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'ko',
    'underscore',
    'Magento_Ui/js/grid/listing',
    'jquery',
    'slick'
], function (ko, _, Listing, $) {
    'use strict';
    var mixin = {
        slickInit: function () {

            $('.block-viewed-products-grid .product-items').slick({
                dots: false,
                infinite: true,
                arrows: true,
                autoplay: true,
                speed: 300,
                slidesToShow: 6,
                slidesToScroll: 2,
                swipeToSlide: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                ]
            });
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});