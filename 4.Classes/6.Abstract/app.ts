abstract class Department {
    constructor(public name: string){

    }

    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor(){
        super("Accounting Department");
    };

    printMeeting(): void {
        console.log("Accounting Department")
    }
}