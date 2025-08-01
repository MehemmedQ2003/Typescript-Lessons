var Person = /** @class */ (function () {
    function Person(my_id, my_firstName, my_lastName) {
        this.id = my_id;
        this.firstName = my_firstName;
        this.lastName = my_lastName;
    }
    ;
    return Person;
}());
;
var my_profile = new Person(1, "Muhammad", "Gardashov");
console.log(my_profile);
console.log(my_profile.id);
