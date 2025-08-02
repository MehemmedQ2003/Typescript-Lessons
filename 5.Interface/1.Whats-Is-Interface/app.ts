interface Person{
    firstName: string,
    lastName: string,
    age: number
}

function getFullName(person : Person) {
    return `${person.firstName} ${person.lastName} ${person.age}`
};

let person = {
    firstName: "Muhammad",
    lastName: "Gardashov",
    age: 22
};

console.log(getFullName(person))