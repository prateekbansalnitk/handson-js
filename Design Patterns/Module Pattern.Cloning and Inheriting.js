//Not suitable for inheritance
var MODULE = function () {

    var counter = 0;

    return {

        incrementCounter: function () {
            counter++;
            console.log(counter);
        },

        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };

} ();

var MODULE_TWO = (function (old) {
    //need to declare privates again if used
    var counter = 0;
    var my = {},
        key;

    for (key in old) {
        if (old.hasOwnProperty(key)) {
            my[key] = old[key];
        }
    }

    var super_moduleMethod = old.moduleMethod;
    my.incrementCounter = function () {
        counter += 5;
        console.log(counter);
    };

    return my;
} (MODULE));

// Usage:

MODULE.incrementCounter();


MODULE_TWO.incrementCounter();
//using reference to old module hence using the old counter variable
MODULE_TWO.resetCounter();

MODULE.incrementCounter();
MODULE.resetCounter();
