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
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "green";
  public greetings = "";
  public displayHTML = true;

  public multiSytle = {
    color : "blue",
    fontStyle: "italic"
  };
  
  logMessage(value){
    console.log(value);
  }

  onClick(event){ 
    console.log(event);
    // Access DOM event this way
    this.greetings = "You have " + event.type;
  };
  
  greetUser(){
    return "Hello " + this.name;
  }
}
