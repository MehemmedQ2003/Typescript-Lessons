function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age);
}
;
var person = {
    firstName: "Muhammad",
    lastName: "Gardashov",
    age: 22
};
console.log(getFullName(person));
