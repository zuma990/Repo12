// Only change code below this line
function myCounter(n) {
    if(n < 1) {
        return [];
    }
    else {
        var myCounterArray = myCounter(n - 1);
        myCounterArray.unshift(n);
        return myCounterArray;
    }
}

// Only change code above this line
console.log(myCounter(-1)); // Change this line
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;
