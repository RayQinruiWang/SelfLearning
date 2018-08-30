import { Itodo } from './todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
//  todos = [{"description":"Angular", "category": "learning"},
//            {"description":"JSON", "category": "tool"},
//            {"description":"RESTful", "category": "API"}];

  private _url: string = "http://localhost:8080/JavaAPI/rest/gettodo?owner=Ray"
  constructor(private http : HttpClient) { }
  
  getTodo(){
    // This has to come from a RESTful API call
    // This returns a observable
    return this.http.get<Itodo>(this._url);
  }


}
