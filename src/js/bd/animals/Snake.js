define(function(require){

    var Animal      = require("bd/animal/Animal");

    return Animal.extend({
                
        //////////////////////////////////////////////////////////////////////////////////
        initialize: function(options) {
            return Animal.prototype.initialize.call(this, {sound : -4, eat: 2, noise : 'ssssss'});
        }
    });
});