function Call_Loop() { //created function Call_Loop().
    var Digit = ""; //created variable Digit with no value.
    var X = 1; //created variable X with value 1.
    while (X < 11) { //created while loop with (X < 11) conditional statement.
        Digit += "<br>" + X; //expression for variable Digit and variable X.
        X++; //increment of plus one.
    }
    document.getElementById("Loop").innerHTML = Digit; //Shows everything in HTML with "Loop" Id.
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //created variable Instruments.
var Content = ""; //created variable Content.
var Y; //created variable Y.
function for_Loop() { //created function for_Loop().
    for (Y = 0; Y < Instruments.length; Y++) { //created for loop statement.
    Content += Instruments[Y] + "<br>"; //for loop expression.
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //Shows everything in HTML with "List_of_Instruments" Id.
}

function cat_pics(){ //created function cat_pics().
    var Cat_Picture = []; //created variable Cat_Picture.
    Cat_Picture[0] = "sleeping"; //Array 0
    Cat_Picture[1] = "playing"; //Array 1
    Cat_Picture[2] = "eating"; //Array 2
    Cat_Picture[3] = "purring"; //Array 3
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + //Shows everything in HTML with "Cat" Id.
        Cat_Picture[2] + ".";
}

function constant_function(){ //created function constant_function().
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; //created const statement.
    Musical_Instrument.color = "blue"; //created value "blue" for Musical_Instrument.color.
    Musical_Instrument.price = "900"; //created value "900" for Musical_Instrument.price.
    document.getElementById("Constant").innerHTML = "The cost of the " + //shows everything in HTML with "Constant" Id.
        Musical_Instrument.type + " was " + Musical_Instrument.price;

}

var x = 82; //created variable x with value 82.
document.write(x); //this writes variable x in HTML.
{
    let X = 33; // created let statement with variable X and a value of 33.
    document.write("<br>" + X); //this writes variable ("<br>" + X) in HTML.
}
document.write("<br>" + x); //this writes variable ("<br>" + X) in HTML.

let car = { //created object car with let statement.
    make: "Dodge ", //created property make with value "Dodge."
    model: "Viper ", //created property model with value "Viper."
    year: "2021 ", //created property year with value "2021."
    color: "red ", //created property color with value "red."
    description : function() { //created property description with value function().
        return "The car is a " + this.year + this.color + this.make + this.model; //return statement.
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); //shows everything with "Car_Object" in HTML.