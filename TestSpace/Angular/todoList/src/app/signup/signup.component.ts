import { Component, OnInit } from '@angular/core';

// without this decorator, this would only be a normal TypeScript component
@Component({
  // basically the html tag to add this component
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

}
