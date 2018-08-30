// keyword "let" can also be used just like in JS, but be careful about the scope difference
var message = "Hello World from TypeScript!!";
log(message);
loop();

function log(message){
    console.log(message);
};

function loop(){
    for (var i = 0;i<5;i++){
        console.log(i);
    }
    console.log("Finall i reached: " + i);
}