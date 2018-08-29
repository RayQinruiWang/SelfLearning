import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  @Input('parentData') public name;
  constructor() { }

  ngOnInit() {
  }

}
