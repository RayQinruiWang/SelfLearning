import { ICompleteTodo } from './completeTodo';
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

  // Local variables for storing data has to be initialised
  public fullTodo = {};
  public profile = {};
  public todoErrorMsg = "";
  public profileErrorMsg = "";

  // Inject a dependency of TodoService to get data
  constructor(private _service: TodoService){
  }

  ngOnInit(){
    // getting data from RESTful API asychronously on Init
    this._service.getTodo().subscribe(data => this.fullTodo = data,
                                      error => this.todoErrorMsg = error);
    this._service.getProfile().subscribe(data => this.profile = data,
                                      error => this.profileErrorMsg = error);
  }

}
