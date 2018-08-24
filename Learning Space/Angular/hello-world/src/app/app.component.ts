import { Component } from '@angular/core';

// Decorator specifies this is not a regular class, but a component
@Component({
  selector: 'app-root', //HTML tag
  template: `
    <h1>Hello World From {{name}}</h1>
    <h2>{{"This is how a JavaScript function (like name.length) is called: " + name.length}}</h2>
    <h2>{{"This is how a method is called: " + greetUser()}}</h2>
    <h2>{{"This is how to access global variable like window (has to access in the class): " + localUrl}}</h2>
    <h2>When having to passing data not in string type into view, property binding is necessary, </h2>
    <h2>Otherwise the attribute won't be passed into html: </h2>
    <input [disabled] = "isDisabled" type="text" value="Binding Syntax 1">
    <input bind-disabled = "isDisabled" type="text" value="Binding Syntax 2">
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = "Ray";
  public localUrl = window.location.href; 
  public isDisabled = true;
  greetUser(){
    return "Hello " + this.name;
  }
}
