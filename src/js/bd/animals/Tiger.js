define(function(require){

    var Animal      = require("bd/animal/Animal");

    return Animal.extend({
                
        //////////////////////////////////////////////////////////////////////////////////
        initialize: function(options) {
            Animal.prototype.initialize.call(this, {sleep: 5, noise : 'ROAR'});
        }
    });
});