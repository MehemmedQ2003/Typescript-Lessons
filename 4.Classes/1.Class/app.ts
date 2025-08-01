class Person {
    id : number;
    firstName : string;
    lastName : string;
    
    constructor(my_id : number, my_firstName : string, my_lastName : string) {
        this.id = my_id;
        this.firstName = my_firstName;
        this.lastName = my_lastName;
    };

    getFullProfile() {
        return `${this.firstName} ${this.lastName} ${this.id}`
    }
};

let my_profile = new Person(1, "Muhammad", "Gardashov");
console.log(my_profile);
console.log(my_profile.getFullProfile());