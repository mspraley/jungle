define(function(require){
    var Backbone      = require("backbone");
        
    return Backbone.Model.extend({
    defaults: {
        sound: -3,
        eat: 5,
        sleep: 10,
        totalEnergy: 100,
        noise : 'boop'
        }
    }); 
});