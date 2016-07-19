define(function(require){

    var Backbone      = require("backbone"); // get that supportive backbone

    var AnimalModel  = require("bd/animal/AnimalModel");


    return Backbone.View.extend({
        
         
        //////////////////////////////////////////////////////////////////////////////////
        initialize : function(options) { 
            this.model = new AnimalModel(options);
            console.log(this.model.get("sound"));
            console.log(this.model.get("eat"));
            console.log(this.model.get("sleep"));
            return this;
        },


        makeSound : function() {
            this.speak();           
            this.updateEnergy(this.model.get("sound"));
        },

        eat : function(food) {
            
            this.updateEnergy(this.model.get("eat"));
        },

        sleep : function() {
            this.updateEnergy(this.model.get("sleep"));
        },

        speak : function() {
            console.log("I say: " + this.model.get("noise"));
        },

        //////////////////////////////////////////////////////////////////////////////////

        updateEnergy : function(value) {
            var totalEnergy = this.model.get("totalEnergy");
            this.model.set("totalEnergy", totalEnergy + value);
            console.log("Total Energy: " + this.model.get("totalEnergy"));
        }
    });
});