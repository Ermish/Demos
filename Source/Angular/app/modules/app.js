(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            'name': 'ruby',
            price: 500,
            description: 'Pure perfection in ruby form',
            canPurchase: false
        },
        {
            'name': 'quartz',
            price: 124,
            description: 'Clear as mud.',
            canPurchase: false
        }];

})();