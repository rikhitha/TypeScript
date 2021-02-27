"use strict";
exports.__esModule = true;
var pay = {
    payid: 256389,
    name: "nancyh",
    dopayment: function () {
        return "payment done";
    }
};
console.log(pay.dopayment());
var upimode = /** @class */ (function () {
    function upimode() {
    }
    upimode.prototype.dopayment = function () {
        return "upi done";
    };
    return upimode;
}());
var card = /** @class */ (function () {
    function card() {
    }
    card.prototype.dopayment = function () {
        return "payment done";
    };
    return card;
}());
var upi = new upimode();
console.log(upi.dopayment());
var cd = new card();
console.log(cd.dopayment());
