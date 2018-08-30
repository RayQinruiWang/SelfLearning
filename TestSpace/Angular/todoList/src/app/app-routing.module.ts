import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

// routings are configured here
// whildcard path handles all the 404 senarios, it should always be the last route of the configuration
// routes should go from most specific -> least specific
const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Let app.module inport from here so only one file has to be changed when new component is created
export const routingComponents = [ SignupComponent, PageNotFoundComponent, LoginComponent]
