function add(a : number, b : number) : number {
    return a + b;
};
let addNumbers = add(1, 2)
console.log(addNumbers);


function print() : void{
    console.log("Hello");
};
print();


function concatWords(a: string, b: string): string {
    return a + " " + b;
};
let result = concatWords("Muhammad", "Gardashov");
console.log(result);


function concatWords1(a: string, b: string = "Gasimov"): string {
    return a + " " + b;
};
let result1 = concatWords1("Muhammad");
console.log(result1);