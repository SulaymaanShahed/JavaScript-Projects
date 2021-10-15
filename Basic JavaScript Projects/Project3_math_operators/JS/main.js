function math_Round() {
    document.getElementById("round").innerHTML = Math.round(4.4); //This is a function that rounds the number (4.4) to the nearest integer giving us (4) as an answer.
}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition; //This is a simple addition function that allows us to add the numbers (2 + 2) to get the answer of (4).
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("subtract").innerHTML = "5 - 2 = " + Subtraction; //This subtraction function takes the numbers (5 - 2) from the variable and gives us the answer (3).
}

function multiplication() {
    var simple_Math1 = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 * 8 = " + simple_Math1; //This function multiplies the numbers (6 * 8) to give us a sum of (48).
}

function division() {
    var simple_Math2 = 48 / 6;
    document.getElementById("divide").innerHTML = "48 / 6 = " + simple_Math2; //The division function gives us the quotient (8) left from the equation (48 / 6 = ).
}

function more_Math() {
    var simple_Math3 = (1 + 2) * 10 / 2 -5;
    document.getElementById("all").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math3; //To multiply, subtract, add and divide numbers all at once you use this function to do so and get the answer (10).
}

function modulus_Operator() {
    var simple_Math4 = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math4; //This is a modulus operation that gives us the remainder after dividing the dividend by the divisor.
}

function increment() {
    var X = 5;
    X++;
    document.getElementById("increment").innerHTML = "5 plus 1 gives 6"; //This function increments from the number (5) to (6).
}
function decrement() {
    var Z = 5.25;
    Z--;
    document.getElementById("decrement").innerHTML = "5.25 minus 1 equals 4.25"; //This function subtracts one whole number from (5.25) to (4.25).
}


window.alert(Math.random() * 100); // A window alert to give a random number from 0-100.



