import { Component } from '@angular/core';

// Decorator specifies this is not a regular class, but a component
@Component({
  selector: 'app-root', //HTML tag
  template: `
    <h1>Hello World From {{name}}</h1>
    <h2>{{"This is how a JavaScript function (like name.length) is called: " + name.length}}</h2>
    <h2>{{"This is how a method is called: " + greetUser()}}</h2>
    <h2>{{"This is how to access global variable like window (has to access in the class): " + localUrl}}</h2>
    <h2>When having to passing data not in string type into view, property binding is necessary, </h2>
    <h2>Otherwise the attribute won't be passed into html: </h2>
    <input [disabled] = "isDisabled" type="text" value="Binding Syntax 1">
    <input bind-disabled = "isDisabled" type="text" value="Binding Syntax 2">
    
    <h2 class = "text-danger">This is to test if customised stylesheet works(danger)</h2>
    <h2 [class] = "successClass">This is to test if customised stylesheet works(success)</h2>
    <h2 [class.text-special] = "isSpecial">This is to test if customised stylesheet works(special)</h2>
    <h2 bind-style.color = "hasError ? 'red':'green'">This is error messge with conditional style binding</h2>
    <h2 [style.color] = "highlightColor">This is another style binding</h2>
    <h2 [ngStyle] = "multiSytle" >This is how to bind multiple style, use keyword"ngStyle"</h2>

    <h2>From here we're doing event binding, for example responding to keyboard event</h2>
    <button (click) = "onClick($event)">Greet</button>{{greetings}}<br/>
    <button (click) = "greetings = 'This is the value passed in from HTML'">Greet</button>Templet right in HTML<br/>
    <input #myInput type = "text">
    <button (click) = "logMessage(myInput.value)">Log</button><br/>
    This is an example of two way binding(Use both () and [])<br/>
    <input [(ngModel)] = "name" type = "text">
    {{name}}<br/>

    <button (click) = "displayHTML = !displayHTML">This is an example of using ngIf to change HTM element</button>
    <h2 *ngIf = "displayHTML; then thenBlock; else elseBlock"></h2>
    <ng-template #thenBlock> You've reached thenBlock</ng-template>
    <ng-template #elseBlock>You've reached elseBlcok</ng-template>

    <div bind-ngSwitch = "highlightColor">
      <div *ngSwitchCase = "'red'">Your highlight color is red</div>
      <div *ngSwitchCase = "'orange'">Your highlight color is orange</div>
      <div *ngSwitchCase = "'green'">Your highlight color is green</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    <div *ngFor="let color of colors; odd as o">
      <h2>{{o}} {{color}}</h2>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  styles:[`
    .text-success{
      color:green
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class AppComponent {
  public name = "Ray";
  public localUrl = window.location.href; 
  public colors = ["red","green","orange","black"];
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "green";
  public greetings = "";
  public displayHTML = true;

  public multiSytle = {
    color : "blue",
    fontStyle: "italic"
  };
  
  logMessage(value){
    console.log(value);
  }

  onClick(event){ 
    console.log(event);
    // Access DOM event this way
    this.greetings = "You have " + event.type;
  };
  
  greetUser(){
    return "Hello " + this.name;
  }
}
