import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoterComponent } from './voter.component';
import { SpinnerModule } from '../spinner/spinner.module';



@NgModule({
  declarations: [
    VoterComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule
  ],
  exports: [
    VoterComponent
  ]
})
export class VoterModule { }
