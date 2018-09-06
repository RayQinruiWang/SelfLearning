import { Component } from '@angular/core';
import { TodoService } from './todo.service';

// Decorator specifies this is not a regular class, but a component
@Component({
  selector: 'app-root', //HTML tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
  public date = new Date();
  public childMessage = "Default child message";

  greetUser(){
    return "Hello " + this.name;
  }
}
