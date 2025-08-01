var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
        Circle.pi++;
    }
    Circle.calculate = function (half) {
        return this.pi * Math.pow(half, 2);
    };
    Circle.pi = 3.14;
    return Circle;
}());
var my_obj = new Circle();
console.log(my_obj.pi);
console.log(Circle.pi);
console.log(Circle.calculate(10));
