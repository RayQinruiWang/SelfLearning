import { Component } from '@angular/core';
import { TodoService } from './todo.service';

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
  
  // Example on how to call a service, RESTful may be called this way
  public todos = [];
  constructor(private _todoService:TodoService){
  }
  ngOnInit(){
    this.todos = this._todoService.getTodos()
  }

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
