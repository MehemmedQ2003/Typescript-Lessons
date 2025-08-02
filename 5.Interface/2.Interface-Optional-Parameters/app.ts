interface Person {
    readonly firstName: string,
    lastName: string,
    age: number,
    email?: string
}

function getFullName(person: Person) {
    if (person.email) {
        return `${person.firstName} ${person.lastName} ${person.age} ${person.email}`
    }
    return `${person.firstName} ${person.lastName} ${person.age}`
};

let person: Person = {
    firstName: "Muhammad",
    lastName: "Gardashov",
    age: 22,
};

console.log(getFullName(person));



interface CheckResult {
    message: string,
    isUpper: boolean
};

function checkResult(successMessage) {
    return successMessage.isUpper == true ? successMessage.message.toUpperCase() : successMessage.message
};

let successMessage: CheckResult = {
    message: "This Message from Success",
    isUpper: true
};

console.log(checkResult(successMessage))