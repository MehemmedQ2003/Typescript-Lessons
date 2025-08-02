;
;
var employee = {
    name: "Muhammad",
    gender: "Male",
    employee_code: 123,
    employee_salary: 1000
};
console.log(employee);
;
var worker = {
    name: "Metin",
    gender: "Male",
    worker_code: 456,
    worker_salary: 2000
};
console.log(worker);
var Employee = /** @class */ (function () {
    function Employee(name, gender, employee_code) {
        this.name = name;
        this.gender = gender;
        this.employee_code = employee_code;
    }
    return Employee;
}());
;
var employee1 = new Employee("Muhammad", "Male", 123);
console.log(employee1);
