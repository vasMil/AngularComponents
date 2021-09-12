import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoterComponent } from './voter.component';



@NgModule({
  declarations: [
    VoterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VoterComponent
  ]
})
export class VoterModule { }
