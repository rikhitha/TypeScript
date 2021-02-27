var car = /** @class */ (function () {
    function car(color, engine_capacity, no_of_cylinders) {
        this.color = color;
        this.engine_capacity = engine_capacity;
        this.no_of_cylinders = no_of_cylinders;
    }
    car.prototype.start_car = function () {
        console.log("Inside Start_car method");
    };
    car.prototype.stop_car = function () {
        console.log("Inside Stop_car method");
    };
    car.prototype.accelerator_car = function () {
        console.log("Inside Accelerator_car method");
    };
    car.prototype.open_carlock = function () {
        console.log("Inside Open_carlock method");
    };
    car.prototype.close_carlock = function () {
        console.log("Inside Close_carlock method");
    };
    return car;
}());
var objcar = new car("Blue", 1197, 4);
console.log("color of car is :" + " " + objcar.color);
console.log("Engine capacity of car is :" + " " + objcar.engine_capacity);
console.log("No of cylinders in car is :" + " " + objcar.no_of_cylinders);
objcar.start_car();
objcar.stop_car();
objcar.accelerator_car();
objcar.open_carlock();
objcar.close_carlock();
