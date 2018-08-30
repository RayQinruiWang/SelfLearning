import { Component } from '@angular/core';
import { TodoService } from './todo.service';

// selector makes this component involkable as <selector></selector>
@Component({
  // This selector is called form index/HTML
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoList';
  todos;
  todoString;

  constructor(service: TodoService){
    this.todos = service.getTodo();
    this.todoString = service.getTodoString();
  }

  display(todo){
  }

}
