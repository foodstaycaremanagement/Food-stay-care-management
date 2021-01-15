import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CanteenOwnerAddMenuComponent } from './canteen-owner-add-menu/canteen-owner-add-menu.component';
import { CanteenOwnerDeleteMenuComponent } from './canteen-owner-delete-menu/canteen-owner-delete-menu.component';
import { CanteenOwnerHomeComponent } from './canteen-owner-home/canteen-owner-home.component';
import { CanteenOwnerUpdateMenuComponent } from './canteen-owner-update-menu/canteen-owner-update-menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistrationComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'about', component:AboutUsComponent},
  {path:'updatemenu', component:CanteenOwnerUpdateMenuComponent},
  {path:'deletemenu', component:CanteenOwnerDeleteMenuComponent},
  {path:'addmenu', component:CanteenOwnerAddMenuComponent},
  {path:'canteenownermenu', component:CanteenOwnerHomeComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,LoginComponent,RegistrationComponent,ContactUsComponent,AboutUsComponent
,CanteenOwnerUpdateMenuComponent,CanteenOwnerDeleteMenuComponent,CanteenOwnerAddMenuComponent,CanteenOwnerHomeComponent];
