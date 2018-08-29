import { Component } from '@angular/core';

// Decorator specifies this is not a regular class, but a component
@Component({
  selector: 'app-root', //HTML tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
    .text-success{
      color:green
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class AppComponent {
  public name = "Ray";
  public localUrl = window.location.href; 
  public colors = ["red","green","orange","black"];
 
  
  public date = new Date();

  public multiSytle = {
    color : "blue",
    fontStyle: "italic"
  };
  
  logMessage(value){
    console.log(value);
  }

  
  
  greetUser(){
    return "Hello " + this.name;
  }
}
