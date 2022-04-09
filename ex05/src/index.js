// Only change code below this line
var myPetsArray = [
    {
        animalType: "Dog",
        name: "Pujdo"
    },
    {
        animalType: "Cat",
        name: "Maca"

    },
    {
        animalType: "Bird",
        name: "Tweety"
    }
];
function myPetsFunction(pets){
     var str = pets.name;
    return str;

}

// Only change code above this line
console.log(myPetsFunction(myPetsArray[1])); // Change this line
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;