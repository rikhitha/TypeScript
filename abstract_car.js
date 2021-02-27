var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cardet = /** @class */ (function () {
    function cardet(color, engine_capacity, no_of_cylinders) {
        this.color = color;
        this.engine_capacity = engine_capacity;
        this.no_of_cylinders = no_of_cylinders;
    }
    return cardet;
}());
var suv = /** @class */ (function (_super) {
    __extends(suv, _super);
    function suv(color, engine_capacity, no_of_cylinders, carregno) {
        var _this = _super.call(this, color, engine_capacity, no_of_cylinders) || this;
        _this.carregno = carregno;
        return _this;
    }
    suv.prototype.start_car = function () {
        console.log("Inside Start_car method");
    };
    suv.prototype.stop_car = function () {
        console.log("Inside Stop_car method");
    };
    suv.prototype.accelerator_car = function () {
        console.log("Inside Accelerator_car method");
    };
    suv.prototype.open_carlock = function () {
        console.log("Inside Open_carlock method");
    };
    suv.prototype.close_carlock = function () {
        console.log("Inside Close_carlock method");
    };
    return suv;
}(cardet));
var obj = new suv("Red", 1196, 4, 8907);
obj.start_car();
obj.stop_car();
obj.accelerator_car();
obj.open_carlock();
obj.close_carlock();
