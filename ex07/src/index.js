var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));

    // Only change code below this line

    function updateRecords(object, id, prop, value) {

        if(object.hasOwnProperty(id)&&prop!=="tracks"){
    
          if(value){
    
            object[id][prop] = value;
    
          }else{
    
           delete object[id][prop];
    
          }
    
       }else if(object.hasOwnProperty(id)&&prop==="tracks"){
    
         if(value){
    
          if(object[id].hasOwnProperty("tracks")){
    
            object[id][prop].push(value);
    
           }else{
    
            object[id][prop] = [];
    
            object[id][prop].push(value);
    
          }  
    
        }else{
    
          if(object[id].hasOwnProperty("tracks")){
    
           delete object[id][prop];
    
          }
    
        }
    
       }
    
       return object;
    
     }

    // Only change code above this line

console.log(updateRecords(collection, 2548, "artist", "")); // Change this line
module.exports = updateRecords;

