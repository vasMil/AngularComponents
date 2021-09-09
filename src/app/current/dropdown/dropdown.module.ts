import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule } from 'ngx-logger';



@NgModule({
  declarations: [
    DropdownItemComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoggerModule.forChild()
  ],
  exports: [
    DropdownItemComponent,
    DropdownMenuComponent
  ]
})
export class DropdownModule { }
