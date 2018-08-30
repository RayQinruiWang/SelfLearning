import { Component } from '@angular/core';

// selector makes this component involkable as <selector></selector>
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoList';
}
