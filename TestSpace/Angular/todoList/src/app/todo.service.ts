import { ICompleteTodo } from './completeTodo';
import { IGitProfile } from './gitProfile';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
    return this.http.get<ICompleteTodo>(this._testPath);
  }

  // Fetching from remote Restful API
  getProfile(): Observable<IGitProfile> {
    return this.http.get<IGitProfile>(this._url);
  }


}
