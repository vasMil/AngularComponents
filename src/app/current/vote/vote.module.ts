import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote.component';
import { SpinnerModule } from '../spinner/spinner.module';



@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule
  ],
  exports: [
    VoteComponent
  ]
})
export class VoteModule { }
