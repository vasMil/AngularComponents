import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { DropdownServiceModule } from './dropdown-service/dropdown-service.module';

@NgModule({
  declarations: [
    DropdownMenuComponent,
    DropdownItemComponent
  ],
  imports: [
    CommonModule,
    DropdownServiceModule
  ],
  exports: [
    DropdownMenuComponent,
    DropdownItemComponent
  ]
})
export class DropdownModule { }
