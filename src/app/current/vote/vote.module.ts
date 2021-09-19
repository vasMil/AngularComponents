import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
  ],
  providers: [
    CookieService
  ],
  exports: [
    VoteComponent
  ]
})
export class VoteModule { }
