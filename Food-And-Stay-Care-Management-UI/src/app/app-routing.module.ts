import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistrationComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'about', component:AboutUsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,LoginComponent,RegistrationComponent,ContactUsComponent,AboutUsComponent];
