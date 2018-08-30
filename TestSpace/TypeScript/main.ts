import {Dog} from './OOProgramming';

// keyword "let" can also be used just like in JS, but be careful about the scope difference
var message 
message = "Hello World from TypeScript!!";
log(message);
loop();

// This is how to do strong typing, eventhough this may not work when compiled to JS
// Available types: number, boolean, string, any, number[], any[], etc
var a: number;

// forced type conversion, this doesn't change the data in memory, just to tell tsc
// endsWith is a ES6 feature, use tsc --target ES6 file.name to compile
let b = (<string>message).endsWith('!');
let c = (message as string).endsWith('^');

// Enum is also availabls, index are encouraged to be explicitly specified
enum Color {Red =1, Green = 2, Blue = 3};
console.log(Color.Red);
console.log(Color[1]);

function log(message){
    console.log(message);
};

function loop(){
    for (var i = 0;i<5;i++){
        console.log(i);
    }
    console.log("Finall i reached: " + i);
}

// tsc can infer the type of oreo is Dog here
// This is imported from OOProgramming module
let oreo = new Dog(9, true);
console.log(oreo.barkAllowed());