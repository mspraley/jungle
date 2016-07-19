define(function(require){

    var Backbone      = require("backbone"); // get that supportive backbone

    // extend backbone view to make account r resuable
    return Backbone.View.extend({
        animals : [],
         
        //////////////////////////////////////////////////////////////////////////////////
        initialize : function(options) {
            console.log('jungle born');
        },


        addAnimal : function(animal) {
            this.animals.push(animal);
            console.log('animal added');
        },


        soundOff : function() {
            _.each(this.animals, function(ainmal){
                var animal = this[animal];
                animal.makeSound();
            }, this.animals);
        }
    });
});