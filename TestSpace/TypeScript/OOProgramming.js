var drawPoint = function (point) {
    // Algorithm to draw point
};
// Or if it makes sense to add implementation into a class and reuse that class
var Dog = /** @class */ (function () {
    function Dog(weight, cute) {
        this.weight = weight;
        this.cute = cute;
    }
    Dog.prototype.barkAllowed = function () {
        if (this.weight <= 10 && this.cute) {
            return true;
        }
        else {
            return false;
        }
    };
    return Dog;
}());
var oreo = new Dog(9, true);
console.log(oreo.barkAllowed());
