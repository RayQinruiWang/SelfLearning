// When defining interfaces, always capitalise the first letter(naming convention)
// Interfaces should be purely for decleartions, should not include implementations
// When a ts file exports something for other file to use, it becomes a module

export interface Point {
    x: number;
    y: number;
}

let drawPoint = (point: Point) => {
    // Algorithm to draw point
}

// Or if it makes sense to add implementation into a class and reuse that class
export class Dog {
    // All members are public by default, fields use camel notation
    constructor(private _weight : number, private _cute : boolean){
        // Thi is what tsc has done, don;t have to do again
        // this.weight = weight;
        // this.cute = cute
    }

    // you can declear a return value type like this
    barkAllowed(): boolean{
        if (this._weight <=10 && this._cute){
            return true;
        }
        else {
            return false;
        } 
    }

    // getter and setter as property, property use 
    get weight(){
        return this._weight;
    }

    set weight(value:number){
        this._weight = value;
    }

}

// tsc can infer the type of oreo is Dog here
let oreo = new Dog(9, true);
console.log(oreo.barkAllowed());
