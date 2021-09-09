import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeprecatedViewComponent } from './deprecated-view/deprecated-view.component';
import { DropdownModuleDepr } from './dropdown/dropdown.module';

/* Exporting the view here since I want to be able to route to that view.
I don't need to have access to the component's selector, hence I don't use the exports array 
TODO: Verify the second line is true => I am not able to access the selector if that existed */
export { DeprecatedViewComponent }

@NgModule({
  declarations: [
    DeprecatedViewComponent
  ],
  imports: [
    CommonModule,
    DropdownModuleDepr
  ]
})
export class DeprecatedModule { }
