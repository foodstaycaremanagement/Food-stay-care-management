import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { CanteenMenuComponent } from './canteen-menu/canteen-menu.component';
import { CanteenService } from './canteen.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CanteenOwnerHomeComponent } from './canteen-owner-home/canteen-owner-home.component';
import { CanteenOwnerUpdateMenuComponent } from './canteen-owner-update-menu/canteen-owner-update-menu.component';
import { CanteenOwnerDeleteMenuComponent } from './canteen-owner-delete-menu/canteen-owner-delete-menu.component';
import { CanteenOwnerAddMenuComponent } from './canteen-owner-add-menu/canteen-owner-add-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactUsComponent,
    AboutUsComponent,
    RegistrationComponent,
    CanteenMenuComponent,
    CanteenOwnerHomeComponent,
    CanteenOwnerUpdateMenuComponent,
    CanteenOwnerDeleteMenuComponent,
    CanteenOwnerAddMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [CanteenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
