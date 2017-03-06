var inherit = function (proto) {
    var F = function () { };
    F.prototype = proto;
    return new F();
};

extend = function (Child, Parent) {
    Child.prototype = inherit(Parent.prototype);
    Child._parentProto = Parent.prototype;
    Child._parentCtor = Parent;
};


var Animal = function (name) {
    this.name = name;
    this.state = "sitting";
};

//inheritable properties and methods
(function (proto) {
    proto.run = function () {
        this.state = "running";
    };
    proto.sit = function () {
        this.state = "sitting";
    };
})(Animal.prototype);

var tiger = new Animal('tiger');

console.log(tiger);
tiger.run();
console.log(tiger);

var Rabbit = function (name) {
    Rabbit._parentCtor.apply(this, arguments);
}

extend(Rabbit, Animal);

(function (proto) {
    proto.jump = function () {
        this.state = "jumping";
    };

    proto.run = function () {
        Rabbit._parentProto.run.apply(this, arguments);
        this.state += ", in a rabbity way";
    };
})(Rabbit.prototype);

var rabbit = new Rabbit('Bugs Bunny');

console.log(rabbit);
rabbit.jump();
console.log(rabbit);
rabbit.run();
console.log(rabbit);


