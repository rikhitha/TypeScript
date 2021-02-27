var cycle = /** @class */ (function () {
    function cycle() {
        this.wheels = "two";
    }
    return cycle;
}());
var auto = /** @class */ (function () {
    function auto() {
        this.wheels = "three";
    }
    return auto;
}());
var Car = /** @class */ (function () {
    function Car() {
        this.wheels = "four";
    }
    Car.prototype.start = function () {
        console.log("started!");
    };
    return Car;
}());
var au = new cycle(); // substitutes  
var cyc = new auto(); // substitutes  
var autotwo = new Car();
//let C: Car = new auto(); // IDE & compiler error  
console.log("no of wheels in cycle: " + au.wheels);
console.log("no of wheels in auto: " + cyc.wheels);
console.log("no of wheels in Car: " + autotwo.wheels);
