import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthenticationComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
