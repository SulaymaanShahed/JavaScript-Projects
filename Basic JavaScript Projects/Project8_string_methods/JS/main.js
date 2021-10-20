function full_Sentence() { //Created function full_Sentence().
    var part_1 = "I have"; //Created variable with string ("I have").
    var part_2 = " made this"; //Created variable with string ("made this")
    var part_3 = " into a complete "; //Created variable with string ("into a complete")
    var part_4 = " sentence."; //Created variable with string ("sentence.")
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Created variable whole_sentence to concat parts_1-4.
    document.getElementById("Concatenate").innerHTML = whole_sentence; //Connects Id "Concatenate" to HTML page and takes the whole_sentence variable and displays it in the HTML as well. 
}

function slice_Method() { //Created function slice_Method(). This will extract a section of a string and then return said section to a new string.
    var Sentence = "All work and no play makes Johnny a dull boy."; //Created variable Sentence and attached a string to it.
    var Section = Sentence.slice(27,33); //Created variable Section to slice a certain section of the Sentence variable.
    document.getElementById("Slice").innerHTML = Section; //Connects HTML by Id "Slice" and shows Section.
}

function string_Method() { //Created function string_Method(). This will show the variable not as string.
    var X =182; //Created variable X with a value of 182.
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //Connect to HTML with Id "Numbers_to_string" and combined variable with .toString() method.
}

function precision_Method() { //Created function precision_Method(). Formats a number to a specified length.
    var X = 12938.3012987376112; //Created variable X and attached string to it.
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //Connect to HTML with Id "Precision" and combined variable X to .toPrecision(10).
}
