import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ExtraComponent } from './extra/extra.component';
import { PipesComponent } from './pipes/pipes.component';
import { BindingComponent } from './binding/binding.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ExtraComponent,
    PipesComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  // DI step 2 register service with angular injector
  // A un-registered service is just a regular class
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
