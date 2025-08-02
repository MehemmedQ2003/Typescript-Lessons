function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings");
}
;
console.log(add(1, 2));
console.log(add("1", "2"));
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isProfileAllowed = function () {
        return true;
    };
    return Customer;
}());
;
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isSupplierAllowed = function () {
        return false;
    };
    return Supplier;
}());
;
function signContract(partner) {
    if (partner instanceof Customer) {
        return partner.isProfileAllowed()
            ? "Sign a new contract with the customer"
            : "Profile issue";
    }
    if (partner instanceof Supplier) {
        return partner.isSupplierAllowed()
            ? "Sign a new contract with the supplier"
            : "Need to evaluate further";
    }
    return "Unknown partner type";
}
;
console.log(signContract(new Customer()));
console.log(signContract(new Supplier()));
