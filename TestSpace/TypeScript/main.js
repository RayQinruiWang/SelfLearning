// keyword "let" can also be used just like in JS, but be careful about the scope difference
var message;
message = "Hello World from TypeScript!!";
// this is how to define a arrow function, similar to lambda expression
// {}is optional for one line, input is optional if there's no return value, () is optional when there's only one input
let log = (message) => console.log(message);
log(message);
loop();

// This is how to do strong typing, eventhough this may not work when compiled to JS
// Available types: number, boolean, string, any, number[], any[], etc
var a;
// forced type conversion, this doesn't change the data in memory, just to tell tsc
let b = message.endsWith('!');
let c = message.endsWith('^');
log(b);
log(c);
// Enum is also availabls, index are encouraged to be explicitly specified
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
console.log(Color[1]);

// A loop for no reason at all
function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finall i reached: " + i);
}
