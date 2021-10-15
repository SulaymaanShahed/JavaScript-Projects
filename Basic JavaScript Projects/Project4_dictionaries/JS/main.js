function my_Animals() { //Created function my_Animals.
    var avian_Animal = { //Created variable avian_Animal.
        Species:"C. brachyrhynchos", //Gave our key Species the value ("C. brachyrhynchoes").
        Genus:"Corvus", //We have given our key Genus the value ("Corvus").
        Color:"Black", //The key Color has been given a value of ("Black").
        Age:2, //The key Age has a value of the number 2.
        Sound:"Caw!", //Here we are giving the key Sound a value of ("Caw!").
    };
    var land_Animal = { //Created variable land_Animal.
        Species:"A. jubatus", //Species key has been given a value of ("A. jubatus").
        Genus:"Acinonyx", //The key Genus has been given the value ("Acinonyx").
        Color:"Orange", //The Color key was given a value of ("Orange").
        Age:4, //The key Age was given a value of ("4").
        Sound:"Chirp!", //The key Sound has been given a value of ("Chirp!")
    };
    var ocean_Animal = { //In this we have created the variable ocean_Animal.
        Species:"M. birostris", //Created the key Species with a value of ("M. birostris").
        Genus:"Mobula", //Genus key with a value of ("Mobula").      
        Color:"Black", //A key of Color with a value of ("Black").
        Age:30, //Given our key Age the value of the number 30.
        Sound:"Creaking!", //The Sound key has been given a value of ("Creaking!").
    };
    delete avian_Animal.Sound; //This is a delete operator to show (undefined) for bird sound.
    document.getElementById("Animals").innerHTML = "Bird Sound: " + avian_Animal.Sound + " Land Creature Sound: " + land_Animal.Sound + " Sea Creature Sound: " + ocean_Animal.Sound; //Here we have used the document.getElemenById to grab the Id "Animals" to relay everything in the .innerHTML to show on the linked HTML.
}