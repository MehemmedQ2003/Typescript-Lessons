function getFullName(person) {
    if (person.email) {
        return "".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age, " ").concat(person.email);
    }
    return "".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age);
}
;
var person = {
    firstName: "Muhammad",
    lastName: "Gardashov",
    age: 22,
};
console.log(getFullName(person));
;
function checkResult(successMessage) {
    return successMessage.isUpper == true ? successMessage.message.toUpperCase() : successMessage.message;
}
;
var successMessage = {
    message: "This Message from Success",
    isUpper: true
};
console.log(checkResult(successMessage));
