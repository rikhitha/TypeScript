//Function with default parameter
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100));
//Function with optional paramter
function test(x, y) {
    console.log("x: " + x);
    console.log("y: " + y);
}
test(1);
test(1, 2);
//Function with rest parameter
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(getTotal());
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30));
