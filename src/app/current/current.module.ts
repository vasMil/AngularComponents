import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentViewComponent } from './current-view/current-view.component';
import { DropdownModule } from './dropdown/dropdown.module';
import { SpinnerModule } from './spinner/spinner.module';
import { VoterModule } from './voter/voter.module';

/* Exporting the view here since I want to be able to route to that view.
I don't need to have access to the component's selector, hence I don't use the exports array
TODO: Verify the second line is true => I am not able to access the selector if that existed */
export { CurrentViewComponent }

@NgModule({
  declarations: [
    CurrentViewComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    SpinnerModule,
    VoterModule
  ]
})
export class CurrentModule { }
