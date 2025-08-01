function multiply(x : number, y : number, z? : number) : number {
    if(typeof(z) !== "undefined")
        return x * y * z;
    else
        return x * y;
}

console.log(multiply(10, 20));
console.log(multiply(10, 20, 30));



const add = (a : number, b : number) : number => {
    return a + b;
};

console.log(add(10, 20));