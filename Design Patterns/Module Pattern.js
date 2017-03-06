var testModule = function () {

    var counter = 0;

    return {

        incrementCounter: function () {
            console.log(counter);
            return counter++;
        },

        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };

}();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();

//trying to access private from function added to object later
testModule.getCounter = function () {
    console.log(this);
    //it will break if we try to uncomment this line
    //console.log(counter);
};

testModule.getCounter();