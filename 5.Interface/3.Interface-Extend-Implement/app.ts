interface IPerson {
    name: string,
    gender: string,
};

interface IEmployee extends IPerson{
    employee_code: number,
    employee_salary: number
};

let employee : IEmployee = {
    name: "Muhammad",
    gender: "Male",
    employee_code: 123,
    employee_salary: 1000
};
console.log(employee)

interface IWrokers extends IPerson{
    worker_code: number,
    worker_salary: number
};

let worker : IWrokers = {
    name: "Metin",
    gender: "Male",
    worker_code: 456,
    worker_salary: 2000
}
console.log(worker)



class Employee implements IPerson {
    name: string;
    gender: string;
    employee_code: number;
    constructor(name: string, gender: string, employee_code: number){
        this.name = name;
        this.gender = gender;
        this.employee_code = employee_code; 
    }
};

let employee1 = new Employee("Muhammad", "Male", 123);
console.log(employee1);