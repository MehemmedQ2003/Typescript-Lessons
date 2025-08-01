type Person = {
    id: number,
    name: string,
    age: number,
    jobTitle: string, 
    projects: [string, number, boolean][]
}

let instructor: Person;

instructor = {
    id: 1,
    name: "Muhammad",
    age: 20,
    jobTitle: "Developer",
    projects: [["ProjectA", 123, true], ["ProjectB", 456, false]]
}

console.log(instructor);


let person: {
    id: number,
    name: string,
    age: number,
    jobTitle: string,
} = {
    id: 1,
    name: "Muhammad",
    age: 20,
    jobTitle: "Developer"
};

console.log(person);