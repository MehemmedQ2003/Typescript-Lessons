type tip = string | number;

function add(a: tip, b: tip) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }

    throw new Error("Parameters must be numbers or strings");
};

console.log(add(1, 2));
console.log(add("1", "2"));



class Customer {
    isProfileAllowed(): boolean {
        return true;
    }
};

class Supplier {
    isSupplierAllowed(): boolean {
        return false;
    }
};

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
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
};

console.log(signContract(new Customer()));
console.log(signContract(new Supplier()));
