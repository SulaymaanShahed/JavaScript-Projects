document.write(typeof 10) //This operator displays the data type of the variable of my choosing.

document.write("10" + 5); //This is an expression that combines a string and a number.

function my_Function() { //Created my_Function().
    document.getElementById("Test").innerHTML = isNaN('This is a string'); //document.getElementById gets the Id "Test" and situates the isNaN('This is a string') into the innerHTML.
}

document.write(-3E310); //Negative Infinity created

document.write(2E310); //Infinity written

document.write(10 > 2) //10 is greater than 2; This is True.

document.write(10 < 8) //10 is not lesser than 8;This is False.

console.log(2 + 2); //This writes the sum of (2 + 2) and shows it in the console of your HTML.

document.write(5 == 8); //This expression is checking the equality between the 2 numbers it is False as 5 is not equal to 8.

document.write(10 + 10) == 20; //This would be true as 10 plus 10 equals 20 this 20 is equal to 20.

A ="Legend"; //variable A created with string of "Legend."
C ="Legend"; //variable C created with string of "Legend."
document.write(A === C); //A is equal to C as data type and value are the same.True.

B ="Myth"; //variable B created with string of "Myth."
D =72; //variable D created with number of 72.
document.write(B === D); //B is not equal to D as the data types are string and number.False.

X ="55"; //created variable X created with string of "55."
Z =55; //created variable Z created with 55 that is a number
document.write(X === Z); //X is not equal to Z because the data types are not the same even if the values are the same.

L ="Legal"; //created variable L with a string of "Legal."
N ="Illegal"; //created variable N with a string of "Illegal."
document.write(L === N); //L is not equal to N as the data types are the same but the values are not.False.

document.write(5 > 2 && 10 > 4); //True(Because five is greater than two, and ten is greater than four).

document.write(5 > 10 && 10 > 4); //False(Because five is not greater than 10, and ten is greater than four).

document.write(5 > 10 || 10 > 4); //True(5 is not greater than 10, 10 is greater than 4. We can make it return "false" with this following code since neither is true.)

document.write(5 > 10 || 10 > 20); //False(5 is not greater than 10, 10 is not greater than 20).

function not_Function() { //Created not_Function().
    document.getElementById("Not").innerHTMl = !(5 > 10); //A NOT operator that returns true as 5 is lesser than 10.
}

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
