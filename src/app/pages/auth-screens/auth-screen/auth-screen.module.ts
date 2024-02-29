import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthScreenPageRoutingModule } from './auth-screen-routing.module';

import { AuthScreenPage } from './auth-screen.page';
import { SignInComponent } from 'src/app/components/auth-screens/auth-screen/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/auth-screens/auth-screen/sign-up/sign-up.component';
import { ResetPasswordComponent } from 'src/app/components/auth-screens/auth-screen/reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AuthScreenPageRoutingModule,
    FormsModule
  ],
  declarations: [AuthScreenPage, SignInComponent, SignUpComponent, ResetPasswordComponent]
})
export class AuthScreenPageModule {}
