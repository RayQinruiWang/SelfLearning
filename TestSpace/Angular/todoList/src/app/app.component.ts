import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

// selector makes this component involkable as <selector></selector>
@Component({
  // This selector is called form index/HTML
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todoList';
  todos;

  constructor( private _service: TodoService){
  }

  ngOnInit(){
    this._service.getTodo().subscribe(data => this.todos = data);
  }


}
