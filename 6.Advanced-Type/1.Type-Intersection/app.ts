interface BusinessPartner {
    academy: string,
    profit: number,
};

interface Identity {
    name: string,
    id: number,
};

interface Contact {
    email: string,
    phone: number,
};

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let employee : Employee = {
    id: 123,
    name: "Muhammad",
    email: "muhammad@me.com",
    phone: 123456789,
};

let customer : Customer = {
    academy: "Academy",
    email: "muhammad@me.com",
    phone: 123456789,
    profit: 123
}

console.log(employee);
console.log(customer)