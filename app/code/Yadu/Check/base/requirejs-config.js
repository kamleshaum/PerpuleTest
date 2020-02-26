var config = {
    'config': {
        'mixins': {
           'Magento_Checkout/js/view/shipping': {
               'Yadu_Check/js/view/shipping-payment-mixin': true
           },
           'Magento_Checkout/js/view/payment': {
               'Yadu_Check/js/view/shipping-payment-mixin': true
           }
       }
    }
}

define(
    [
        'ko'
    ], function (ko) {
        'use strict';

        var mixin = {

            initialize: function () {
                this.isVisible = ko.observable(false); // set visible to be initially false to have your step show first
                this._super();

                return this;
            }
        };

        return function (target) {
            return target.extend(mixin);
        };
    }
);
