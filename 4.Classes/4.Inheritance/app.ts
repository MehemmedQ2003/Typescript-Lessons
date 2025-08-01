class Person {
    id: number;
    firstName: string;
    lastName: string;

    constructor(my_id: number, my_firstName: string, my_lastName: string) {
        this.id = my_id;
        this.firstName = my_firstName;
        this.lastName = my_lastName;
    };

    getFullProfile() {
        return `${this.firstName} ${this.lastName} ${this.id}`
    }
};

class Employee extends Person {
    constructor(id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName);
    }
};

let employee = new Employee(1, "Muhammad", "Metin");
console.log(employee.getFullProfile());