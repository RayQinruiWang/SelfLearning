import { ICompleteTodo } from './completeTodo';
import { IGitProfile } from './gitProfile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// methods for error handling
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Will fail, same origin not allowed
  // private _url: string = "http://localhost:8080/JavaAPI/rest/gettodo?owner=Ray"
  
  private _url: string = "https://api.github.com/users/ayst0001";
  private _testPath: string = "/assets/data/rayTodos.json";
  constructor(private http : HttpClient) { }
  
  // Fetching from a local file
  getTodo(): Observable<ICompleteTodo>{
    // This returns a observable, has to be force converted into an object
    return this.http.get<ICompleteTodo>(this._testPath)
      .catch(this.errorHandler);
  }

  // Fetching from remote Restful API
  getProfile(): Observable<IGitProfile> {
    return this.http.get<IGitProfile>(this._url)
    .catch(this.errorHandler);
  }

  // In the case of error, return error message or hard coded warning
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message||"Server Error!!")
  }

}
