var config = {
    'map': {
        '*': {
            'Magento_Catalog/template/product/list/listing': 'bwolan_M2RecentlyViewedSlider/template/product/list/listing',
            'slick': 'bwolan_M2RecentlyViewedSlider/js/slick'
        }
    },
    config: {
        "mixins": {
            "Magento_Catalog/js/product/list/listing": {
                "bwolan_M2RecentlyViewedSlider/js/product/list/listing-mixin": true
            }
        }
    }
};