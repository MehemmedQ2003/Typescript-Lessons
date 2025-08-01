function multiply(x, y, z) {
    if (typeof (z) !== "undefined")
        return x * y * z;
    else
        return x * y;
}
console.log(multiply(10, 20));
console.log(multiply(10, 20, 30));
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 20));
