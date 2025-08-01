function add(a, b) {
    return a + b;
}
;
var addNumbers = add(1, 2);
console.log(addNumbers);
function print() {
    console.log("Hello");
}
;
print();
function concatWords(a, b) {
    return a + " " + b;
}
;
var result = concatWords("Muhammad", "Gardashov");
console.log(result);
function concatWords1(a, b) {
    if (b === void 0) { b = "Gasimov"; }
    return a + " " + b;
}
;
var result1 = concatWords1("Muhammad");
console.log(result1);
