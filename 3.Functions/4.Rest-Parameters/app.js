function addition() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (number) { return total += number; });
    return total;
}
console.log(addition(1, 2, 3, 4, 5));
function concatString(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    var result = message;
    names.forEach(function (name) { return result += " " + name; });
    return result;
}
console.log(concatString("Hello", "Muhammad", "Gardashov"));
