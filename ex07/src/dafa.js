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