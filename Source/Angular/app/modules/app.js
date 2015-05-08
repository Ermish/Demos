(function(){
   var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.product = gem;
    });

    var gem = {
        'name' : 'ruby',
        price : '$5,000',
        description : 'Pure perfection in ruby form'
    };

})();