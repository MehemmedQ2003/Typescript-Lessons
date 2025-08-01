class Circle {
    static pi:number = 3.14;
    pi = 3;

    constructor(){
        Circle.pi++;
    }

    static calculate(half: number){
        return this.pi * half ** 2
    }
}

let my_obj = new Circle();
console.log(my_obj.pi)

console.log(Circle.pi);
console.log(Circle.calculate(10))