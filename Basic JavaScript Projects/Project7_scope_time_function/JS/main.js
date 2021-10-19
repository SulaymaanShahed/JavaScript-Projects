var X = 10; //Created variable then assigned the value 10.
function Add_numbers_1() { //Created function Add_numbers_1().
    document.write(20 + X + "<br>"); //Writes in document sum of (20 + X + "<br>").
}
function Add_numbers_2() { //Created function Add_numbers_2().
    document.write(X + 100); //Writes in document sum of (X + 100).
}
Add_numbers_1(); //Global Variables declare outside of functions
Add_numbers_2(); //Global Variables declare outside of functions

function Add_numbers_3() { //Created function Add_numbers3().
    var X = 10; //Created variable X with value of 10.
    document.write(30 + X + "<br>"); //Writes in document sum of (30 + X + "<br>").
}
function Add_numbers_4() { //Created function Add_numbers_4().
    document.write(Z + 100); //Writes in document nothing bc variable Z is not defined.
}
Add_numbers_3(); //Global Variables declare outside of functions.
Add_numbers_4(); //Global Variables declare outside of functions.

function Add_numbers_3() { //Created function Add_numbers_3().
    var X = 10; //Created variable X with a value of 10.
    console.log(15 + X); //Console.log allowing for the expression to be seen on Console for HTML file.
}

function Add_numbers_4() { //Created function Add_numbers_4().
    console.log(Z + 100); //Console.log allows for debugging to occur for the expression within the parentheses.
}
Add_numbers_3(); //Global Variables declare outside of functions
Add_numbers_4(); //Global Variables declare outside of functions

function get_Date() { //Created function get_Date().
    if (new Date().getHours() < 15) { //Created if statement for showing date.
        document.getElementById("School").innerHTML = "How are you enjoying your classes?"; //Displays string to connected HTML page and <p> element.
    }
}

function Age_Function() { //Created function Age_Function().
    Age = document.getElementById("Age").value; //Takes value of Id Age.
    if (Age >= 18) { //Created if statement with (Age >= 18) as the statement.
        Vote = "You are old enough to vote!"; //if you are older than 18 you can vote.
    }
    else { //else statement created.
        Vote = "You are not old enough to vote!"; //else if you are not older than 18 you cannot vote.
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //Takes Id "How_old_are_you?" and displays in the HTML whether you can vote or not.
}

function Time_function() { //
    var Time = new Date().getHours(); //
    var Reply; //
    if (Time < 12 == Time > 0) { //
        Reply = "It is morning time!"; //
    }
    else if (Time >= 12 == Time < 18) { //
        Reply = "It is afternoon."; //
    }
    else { //
        Reply = "It is evening time."; //
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //
}