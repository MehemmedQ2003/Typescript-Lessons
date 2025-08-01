function addition(...numbers : number[]) : number{
    let total = 0;
    numbers.forEach(number => total += number);
    return total;
}
console.log(addition(1, 2, 3, 4, 5));



function concatString(message : string, ...names : string[]) : string{
    let result = message;
    names.forEach(name => result += " " + name);
    return result;
}
console.log(concatString("Hello", "Muhammad", "Gardashov"));