import { Injectable } from '@angular/core';

// DI step 1, create a injectable service and write class
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    // Later this can be modified into a RESTful API call
    return[
      {"description":"Learn Angular", "category":"Framework"},
      {"description":"Learn GitWorkFlow", "category":"Tools"},
      {"description":"Learning Struts", "category":"MVC"},
      {"description":"Learning Eclipse debugging", "category":"IDE"}
    ];
  }

}
