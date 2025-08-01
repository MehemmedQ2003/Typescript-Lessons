interface Employee{
    name: string,
    code: number
};
let employees = <Employee>{};
employees.code = 123;
employees.name = "Muhammad";
console.log(employees);


type Numbers = [
    x: string,
    y: number
];
let numbers = <Numbers>{};
numbers['0'] = "Muhammad";
numbers['1'] = 20;
console.log(numbers);