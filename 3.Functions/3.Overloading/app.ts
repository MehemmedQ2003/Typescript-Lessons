function add(a : number, b : number) : number{
    return a + b;
};
let variable = add(1, 2);
console.log(variable);



function customPrint(a : string, b : string) : string;
function customPrint(a : number, b : number) : number;

function customPrint(a : any, b : any) : any{
    return a + b;
};

let vrb = customPrint(1, 2);
let vrb1 = customPrint("1", "2");
console.log(vrb, vrb1);