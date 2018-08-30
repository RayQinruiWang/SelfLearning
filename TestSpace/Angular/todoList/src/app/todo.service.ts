import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = {"Something": "Random category",
          "Task 2": "Maybe educational",
          "Task 3": "Just kidding"};
  constructor() { }
  
  getTodo(){
    return ["Task1","Task2","Task3","Task4"];
  }
  
  getTodoString(){
    return JSON.stringify(this.todos);
  }
}
