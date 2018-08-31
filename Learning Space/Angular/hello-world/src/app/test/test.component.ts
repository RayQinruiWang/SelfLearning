import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // This is how child component inport data from parent component
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit
    ('This is a message from text (child) component');
  }

  isActive = true
}
