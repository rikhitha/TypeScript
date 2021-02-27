import paymentmanager from './interface_payment';

let pay: paymentmanager = {
    payid: 256389,
    name: "nancyh",
    dopayment() {
        return "payment done"
    }
    




}

console.log(pay.dopayment());

class upimode implements paymentmanager {
    payid: 894564
    name: "gpay"
    dopayment() {
        return "upi done"
    }


}

class card implements paymentmanager {

    payid: 5669
    name: "rupay"
    
    dopayment() {
        return "payment done"

    }

}
let upi: upimode = new upimode();
console.log(upi.dopayment());
let cd: card = new card();
console.log(cd.dopayment());