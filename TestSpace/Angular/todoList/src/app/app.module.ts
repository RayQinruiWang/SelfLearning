import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Here's all the component input
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { TodoService } from './todo.service';



@NgModule({
  // declare all the component of this module
  declarations: [
    AppComponent,
    RoutingComponents,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // here's where to register dependencies
  // When a service class is registered here, only one instance will exist
  // AKa the singleton pattern
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
