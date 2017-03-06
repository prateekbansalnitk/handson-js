//Conclusion : this points to the object calling the function.
//as node executes in strict mode, this points to undefined in global and anonymous methods


var firstName = "Peter",
    lastName = "Ally";

function showFullName() {
    // "this" inside this function will have the value of the window object​
    // because the showFullName () function is defined in the global scope, just like the firstName and lastName​
    console.log(this.firstName + " " + this.lastName);
}

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    showFullName: showFullName
}

showFullName(); // Peter Ally​

// "this" inside the showFullName () method that is defined inside the person object still refers to the person object, hence:​
person.showFullName();