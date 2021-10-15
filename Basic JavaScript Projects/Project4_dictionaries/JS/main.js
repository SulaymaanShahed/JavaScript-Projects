function my_Animals() {
    var avian_Animal = {
        Species:"C. brachyrhynchos",
        Genus:"Corvus",
        Color:"Brown",
        Age:2,
        Sound:"Caw!",
    };
    var land_Animal = {
        Species:"A. jubatus",
        Genus:"Acinonyx",
        Color:"Orange",
        Age:4,
        Sound:"Chirp!",
    };
    var ocean_Animal = {
        Species:"M. birostris",
        Genus:"Mobula",      
        Color:"Black",
        Age:30,
        Sound:"Creaking!",
    };
    document.getElementById("Animals").innerHTML = "Bird Sound: " + avian_Animal.Sound + " Land Creature Sound: " + land_Animal.Sound + " Sea Creature Sound: " + ocean_Animal.Sound;
}