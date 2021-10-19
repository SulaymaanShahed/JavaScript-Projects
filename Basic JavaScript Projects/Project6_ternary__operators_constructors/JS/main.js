function Vote_Function() { //Created the function Vote_Function().
     var Age, Can_vote; //Created variables Age and Can_vote.
        Age = document.getElementById("Age").value; //Grabbing Age Id to display in HTML.
        Can_vote = (Age < 18) ? "You cannot vote":"You can vote"; // There is use of the "?" Ternary operator here. Using variable Can_vote to see if the Age input by the user is Less than or greater to determine the answer to give based on said input.
        document.getElementById("Vote").innerHTML = Can_vote + " legally."; //Grabs Id Vote to display wether you can vote or cannot legally.
}        

function Vehicle(Make, Model, Year, Color) { //Created function Vehicle with the descriptors of vehicles.
    this.Vehicle_Make = Make; //Make of Vehicle/Manufacturer.
    this.Vehicle_Model = Model; //Model of Vehicle.
    this.Vehicle_Year = Year; //Year Vehicle was made. 
    this.Vehicle_Color = Color; //Color of Vehicle.
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Created variable Jack and gave a new Vehicle to him with the Make, Model, Year, and Color.
var Emily = new Vehicle("Jeep","Trail Hawk", 2019, "White and Black"); //Created variable Emily and gave a new Vehicle to her with the Make, Model, Year, and Color.
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //Created variable Erik and gave a new Vehicle to them with the Make, Model, Year, and Color.
function myFunction() { //Created function myFunction()
    document.getElementById("Keywords_and_Constructors").innerHTML = //The Id gets grabbed and displays the added string and variables to create a sentence. 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year; 
}

function Phone(Make, Model, Year, Color) { //Created function Phone with the descriptors of phones.
    this.Phone_Make = Make; //Manufacturer of Phone.
    this.Phone_Model = Model; //Model of Phone.
    this.Phone_Year = Year; //Year Phone was released.
    this.Phone_Color = Color; //Color of Phone.
}

var Madeleine = new Phone("Apple", "iPhone 8 plus" , 2017, "Rose Gold"); //Created variable Madeleine and made a new Phone for her. 
var Yasmine = new Phone("Apple","iPhone 11 Pro", 2019, "Black"); //Created variable Yasmine and gave her a new Phone as well.
var Emma = new Phone("Samsung", "S20", 2020, "Pink"); //Created variable Emma and created a new Phone for her.
function my_Function() { //Created function my_Function().
   document.getElementById("New_and_This").innerHTML = //Grabbing Id New_and_This and displaying to the HTML the following variables and strings.
    "Madeleine uses a " + Madeleine.Phone_Color + "-colored " + Madeleine.Phone_Model + 
    " released in " + Madeleine.Phone_Year; 
}

function count_Function() { //Created a function count_Function().
    document.getElementById("Nested_Function").innerHTML = Count(); //Utilizing Nested_Function to display in HTML.
    function Count() { //Nested Function within first function.
        var Starting_point = 9; //Created variable Starting_point with starting value of 9.
        function Plus_one() {Starting_point += 1;} //Created function Plus_one to add to our value in the starting point.
        Plus_one(); //Plus_one() function reference.
        return Starting_point; //Returning the sum of Starting_point += 1.
    }
}

