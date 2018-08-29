import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  
  constructor() { }
  public highlightColor = "green";
  public isDisabled = true;
  public successClass = "text-success";
  public isSpecial = true;
  public hasError = false;
  public greetings = "";
  public displayHTML = true;

  onClick(event){ 
    console.log(event);
    // Access DOM event this way
    this.greetings = "You have " + event.type;
  };

  showStatus(){
    if (this.displayHTML){
      return "You've logged in";
    }
    else {
      return "You've logged out";
    }
  }

  ngOnInit() {
  }

}
