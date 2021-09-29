import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationModule } from '../authentication/authentication.module';



@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    AuthenticationModule
  ],
  providers: [
    CookieService
  ],
  exports: [
    VoteComponent
  ]
})
export class VoteModule { }
